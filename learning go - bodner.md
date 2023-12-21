* Environment (chap 1)

        // Convention of where binaries and their source are installed, via `go install`.
        export GOPATH=$HOME/go

        // For scripting. A binary is compiled into a temp dir, and deleted after it's run.
        go run file.go

  * Makefiles are the conventional tool for scripting the build, and for ensuring formatting and
    vetting happens before compilation.

* Primitive types and declarations (chap 2)

        'a' // Chars (rune literals) require single quotes.
        byte // Alias for unit8. Usually use byte.
        a, b, c = f() // By convention, this syntax is only used for destructuring return values.

        var x = 10
        x := 10 // Not legal outside of functions. Use var instead.
        const x = "hello"
  * Literals are untyped until the developer specifies one.
  * If you are writing a library function that should work with any integer type, write a pair of
    functions, one with int64 for the parameters, and one with unit64. (Or use generics).
  * Use uint and int types by default, unless you need to care about a specific size.
  * When initializing a variable to its zero value, use `var x int`, to make it clear that the zero
    value was intended.
  * const declarations can only be used with values known at compile time (i.e. literals).
  * As a general rule, only declare variables in the package block that are effectively immutable.

* Composite types
  * Arrays -- "too rigid to use directly"

        var x [3]int // Empty
        var x = [3] int{10, 20, 30} // Initialized. "..." can be used as the size.
        var x = [12]int{1, 5: 4, 6, 10: 100} // Sparse array
        var x [2][3]int // Two dimensional array

    * Arrays of different sizes are considered different types and so fns cannot accept arrays of
      variable size. The size must be determined at compile time.
  * Slices

        var x = []int{10, 20, 30}
        var x = []int // Nil slice
        var x = []int{} // Non-nil, zero-length slice.
        x := make([]int, 5, 10) // Length of 5, capacity of 10.

        x = append(x, 1, 2, 3)
        x = append(x, ...y) // Append vector y by expanding its elements with variadic opereator.

        len(x)
        cap(x) // Capacity - number of contiguous memory slots allocated for this slice
        copy(dest, src) // Returns num elems copied.
        copy(x[:3], x[1:])

        x[1:4] // Slice expression: [start, end-exclusive]
        x[1:], x[:1]
        x[:] // Copy of the slice

    * Size is not part of the type.
    * The sizing rules as of Go 1.14 are to double the size of the slice when the capacity is less
      than 1,024 and then grow by at least 25% afterwards.
    * Slices and sub-slices share thee same underlying array, so modifying one modifies the other.
    * Sub-slices share the allocated capacity from the original slice, which is confusing. The best
      practice is not to use append after sub-slicing, or use a three-part slice expression ("a full
      slice expression").
    * Create a slice from an array by using a slice expression.
  * Strings

        s[1:2] // Returns bytes; doesn't respect UTF-8 char boundaries.
        len(s) // Bytes, not characters.
        strings.NewReader() // Returns io.Reader
    * Stored as byte arrays.
    * Rather than use the slice and index expressions with strings, extract sub-strings usign the
      strings and unicode/utf8 package.
    * for-range loop iterates over the string's runes, not bytes.
  * Maps


        // nil behavior: you can read from, but not write to, this map.
        var nilMap map[string]int

        m := map[string]{} // Non-empty map.
        v, ok := m["hello"] // If missing, v will be the value type's zero value.
        delete(m, "hello")

    * Keys must be comparable types -- so, not arrays or slices.
    * The comma ok idiom is used in Go when we want to differentiate between reading a value and
      getting back the zero value.
    * There is no built-in Set type. Use a map of <type> => bool.
    * Using them in function signatures is discouraged, because they're mutable (even when passed by
      value) and less structured than a struct. Use a struct instead.
  * Structs

        type person struct {
          name string
          age int
        }

        bob := person{ "Bob", 40 } // CSV struct literal. All fields required.
        bob := person{ name: "Bob", age: 40 } // KV struct literal. No fields are required.

        // Anonymous struct assignment. Useful when unmarshalingn JSON, and during tests.
        pet := struct {
          name string
        } {
          name: "Bob"
        }
    * Structs that are entirely composed of comparable types are comparable; those with slice or map
      fields are not.
    * You can convert between structs if the vars have the same names, order, and types.
* Control structures (chap 4)

        if  n:= rand.Intn(10); n < 5 {
          ...
        } else if n < 9 {
          ...
        } else {
          ...
        }

        // While loops
        for n < 5 {
        }
        for { ... }

        for i, v := range vals {
          ...
        }

        // Switch
        switch size := len(slice); size {
          case 1, 2, 3:
           ...
         default:
           ...
        }
        // Omit the variable being tested to use any boolean expression in the arms.
        switch size := len(slice); {
          wordLen < 5:
            ...
        }

  * Go contains a universe block (the prelude) which contains the predeclared identifiers, like
    true, false, nil.
  * You can only use a for-range loop to iterate over the built-in compound types and user-defined
    types that are based on them.
  * "Favor black switch statements over if/else chains when you have multiple related cases. Using a
    switch makes the comparisons more visible and reinforces that they are a related st of concerns.

* Functions

        // Variadic arguments
        func add(arr []int, ...int) []int // "vals" will be a slice of the given type.
        // Exploding/splatting a slice into variadic arguments.
        add(arr, aSlice...)

        // Multi-return value syntax
        func a() (int, int, error) {

        // Declaring a type that's a function signature.
        type aFuncType func(int, int) int

        // Defer statement is like a finally aorund the enclosing fn.
        defer file.Close()
        // Any values passed into the deferred closure aren't evaluated until the closure runs.
        defer func() { }(someArgument)

  * Named and optional params

        // Simulate named and optional params using a standard arguments struct.
        type MyFuncOpts struct {
          FirstName string
          Age int
        }
        MyFunc(MyFuncOpts {
          Age: 10
        })

    * "A function shouldn't have more than a few params, and named and optional params are
      mostly useful when a function has many inputs. If you find yourself in that situation,
      your function is probably too complicated."
  * When returning an error, convention is that it should be returned last.
  * Named return values
    * "When you supply names to your return values, what you are doing is pre-declaring variables
      that you use within the function to hold the return values."
      * Not that useful; mildly discouraged.
  * Resource cleanup
    * "A common pattern in Go is fo ra function that allocates a resource to also return a closure
      that cleans up the resource." Then the caller can run this closure in a defer statement.
  * "The downside of try/catch resource cleanup blocks is that they create another level of
    indentation in your function, and that makes the code harder to read." Defer doesn't.
  * Pass by value
    * All params are passed by value, except for Maps and Slices: the container is passed by value,
      but the underlying data structure is passed by reference. So you can mutate the data in either
      object, but you can't grow them via append -- such changes aren't persisted.
      * See page 120 for a diagram of a slice's memory layout.
    * Maps and slices are implemented as pointers to a struct, which is why the underlying data is
      mutable even when they are passed by value.

* Pointers

        var x int = 10
        pointerX := &x

        // Pass by value
        func a(px *int) {
          x2 := 20
          px = &x2 // This changes the local copy of the pointer, not the caller's pointer.
          *px = 20 // This dereferencing assignment changes the caller's pointer.
        }

  * Dereferencing a nil pointer will panic.
  * "The lack of immutable declarations in Go might seem problematic, but the ability to choose
    between value and pointer parameter types addresses the issue." "Rather than declare that some
    variables and parameters are immutable, Go developers use pointers to indicate that a parameter
    is mutable."
  * Performance: advice is to consider using a pointer to pass data between functions when the
    struct is > 1MB.
  * Zero value versus no value: "If this distinction matters in your program, use a nil pointer to
    represent an unassigned variable or struct field." E.g. when encoding JSON.
  * "Rather than return a pointer set to nil from a function, use the comma ok idiom that we saw
    for maps and return a value type and a boolean."

* Types, methods, interfaces

        // You can use any primitive or compound type to define a new type.
        type Score int
        type TeamScores map[string]Score

        // Defining a method on a type.
        func (p Person) String() string { ... }

        // "Method values": a method bound to an instance a type
        m := MyType{}
        f1 := m.Add
        f1(10)
        // "Method expressions": an unbound method. Requires a receiver.
        f2 := MyType.Add
        f2(MyType{}, 10)

        // Promotion
        type Manager struct {
          Employee // Here, all fields and methods from Employee are promoted to Manager
          Reports []Employee
        }

        // Convention is to name intefaces "-er"
        type Stringer interface {
          String() string
        }

        // Type casting
        i := t.(int) // Panics if the type assertion fails. Only used for interface types at runtime.
        i, ok := t.(int) // Doesn't panic on failure.
        switch j := i.(type) {
          case nil:
            // i is nil, type of j is interface{}
          case int:
            // j is type int
          ...
          default:
            // j is type interface
        }

  * When defining a method, the receiver can be a pointer or value. If your method modifies the
    receiver o needs to handle nil instances, you must use a pointer receiver.
  * "When a type has *any* pointer receiver methods, a common practice is to be consistent and use
    pointer receivers for *all* methods, even the ones that don't modify the receiver."
  * Types as documentation: "When you have the same underlying data, but different sets of
    operations to perform, make two types."
  * Enums with iota; this is fine for values internal to your program, but if they're ever logged,
    use explicit ints for the value, for clarity.

          type MailCateogry int
          const (
            Personal MailCategory = iota
            Spam
            ...
          )
  * Convention is to name interfaces "-er", like Marshaler.
  * Interfaces are "the star of Go's design". They are implemented implicitly. "They're type-safe
    duck typing."
  * "Accept interfaces, return structs."
    * "Returning a struct avoids a heap allocation, which is good. However, when invoking a function
      with parameters of interface types, a heap allocation occurs for each of the interface
      parameters. Figuring out the trade-off between better abstraction and better performance is
      something that should be done over the life of your program."

* Errors

        // The error interface
        type error interface {
          Error() string
        }

        errors.New("divide by zero") // Message should start with lower case; no punctuation.
        fmt.Errorf("%d is not prime", 12)

        / Wrapping an error
        return fmt.Errorf("in filechecker: %s", err)

        // errors.Is returns true if an error in the chain matches the sentinel error
        if errors.Is(err, os.ErrNotExist) { ... }
        // errors.As checks if any error in the chain matches a specific type
        if errors.As(err, &varOfTypeCustomErr) { ... }

        // Wrapping errors with defer
        func DoThing(v int) (_ string, err error) {
          defer func() {
            if er != nil {
              err = fmt.Errorf("in DoThing: %w", err)
            }
          }
          _ err := doThing1(v)
          if err != nil {
            return "", err
          }
          ...
        }

  * When there is no error, return nil, rather than an uninitialized error value.
    * The reason why we return nil from a function to indicate no error occurred is that nil is the
      zero value for any interface type.
  * Sentinel errors
    * Error values with semantic meaning, which can be used for branching.
    * Convention is they start with "Err". Rare.
    * Use one of the sentinel error values defined in the std lib if possible, rather than defining
      your own.
  * Errors do not include stack traces. Use a 3p library.
  * Philosophy of having errors as values
    * "Exception handling may produce shorter code, but having fewer lines doesn't necessarily make
      code easier to understand and maintain."
    * "the error handling is indented inside an if statement. The business logic is not. This gives a
      quick visual clue to which code is along the "golden path" and which code is the exceptional
      condition."

* Modules, packages, imports (chap 9)

        import (
          crand "crypto/rand" // Alternate package name if there's a collision
          "math/rand"
        )

  * module: the root of a Go library or application.
  * package: one or more per module.
  * "A collection of Go source code becomes a module when there's a valid go.mod file in its root
    directory."
  * "Don't use relative paths for package imports... absolute import paths clarify what you are
    importing and make it easier to refactor your code."
  * The name of a package is determined by its package clause, not its import path.
    * "foo" can declare its package to be "bar", but it's best practice that they match.
  * Put go code (apart from your "main" package) in a dir called pkg if you don't want it
    intermingled with deploy scripts and dotfiles.
  * internal
    * This is how you share a function between your module's packages without making them part of
      your public API.
    * "When you create a package called internal, the exported identifiers in that package and its
      subpackages are only accessible to the direct parent package of internal and the sibling
      packages of internal."
  * init functions
    * init functions declared at the package level are run automatically when the pkg is first
      imported. Avoid; this is a mostly deprecated feature.
  * `go list -m -versions module-name` prints all available versions of a module.
  * If you upgrade your module to an backwards-incompatible version, you must add vN to the package
    name.
  * Module proxy servers: Google hosts proxy.golang.org which acts as a mirror for every public Go
    package, protecting you if the src repo disappears.

* Concurrency in Go (chap 10)

        // Convention is to have business logic in a function, and a closure for async bookkeeping
        // and message passing.
        func process(val int) int {
          ...
        }
        func runThingConcurrently(in <-chan int, out chan<- int) {
          go func() {
            for val := range in { // Continues reading until the channel is closed
              result := process(val)
              out <- result
            }
          }
        }

        // Channels are reference types, like slices.
        ch := make(chan int)
        ch := make(chan int, 10) // Buffered channel. Writing won't block until its full.
        len(ch) // Number of values currently in buffer
        cap(ch) // Buffer size (capacity)
        close(ch)

        // Function signatures
        ch <-chan int // Chan will only be read from
        ch chan<- int // Chan will only be written to

        // Select: branches with unready channels are skipped. Ready channels are picked at random.
        select {
        case v := <-ch:
          ...
        case v := <-ch2:
          ...
        case ch3 <- x
          fmt.Println("wrote", x)
        }

        // for-select loop -- a very common pattern
        // Adding a default case here makes the select non-blocking, and the for loop will busy-wait.
        for {
          select {
            case <-done: // Value from the done channel is unused here.
              return
            case v := ch:
              fmt.Println(v)
          }
        }

        // Return a function to callers to allow them to cancel the operation
        func countTo(max int) (<-chan int, func()) {
          done := make(chan struct{})
          cancel := func() {
            close(done)
          }
          ...
          return ch, cancel
        }

        // Wait groups
        var wg sync.WaitGroup
        wg.Add(3) // Number of goroutines to wait for
        go func() {
          defer wg.Done() // Decrement the counter
          doWork()
        }
        go func() {
          defer wg.Done()
          ...
        }
        wg.Wait() // Pauses current goroutine until counter reaches 0.

  * Launching go routines in a for loop

          // Beware launching goroutines in a for loop and having them all capture the loop variable.
          // How to avoid:
          for _, v := range a {
            go func(val int) {
              ch -< val * 2
            }(v)
          }

  * The done channel pattern: canceling the slower goroutines when the fastest one completes

        done := make(chan struct{}) // We never write to this. Only close it.
        result := make(chan []string)
        for _, searcher := range searchers {
          go func(searcher func(string) []string) {
            select {
            case result <- searcher(s):
            case <- done:
            }
          }(searcher)
        }
        r := <-result
        close(done)

  * Time out pattern

        func timeLmit() (int, error) {
          var result int
          var err error
          done := make(chan struct{})
          go func() {
            result, err = doWork()
            close(done)
          }()
          select {
          case <-done:
            return result, err
          case <-time.After(2 * time.Second):
            return 0, errors.New("work timed out")
          }
        }
  * Run code exactly once

        var once sync.Once
        var parser SomeParser
        func Parse(s string) string {
          once.Do(func() {
            parser = initParser()
          })
          return parser.Parse(s)
        }

  * Buffering
    * Unbuffered channels are easy to understand: "one goroutine writes and awaits for another
      goroutine to pick up its work, like a baton in a relay race."
  * Backpressure
    * To implement backpressure, have a pool/queue of tokens that are emitted to a channel and
      workers can read from, and emit the token back onto the channel when work completes. Workers
      switch on this channel and if there are no values, use the default case of the switch to
      return immediately (possibly with an error) to tell the caller that there's no more capacity.
  * Reading from a closed channel
    * If it's buffered, the values will be read in order.
    * If there are no other values, the zero value for the channel's type is returned. Use ok, comma
      to distinguish no-value from empty-value.
    * Turning off a case in a select statement:
      * "When you detect that a channel has been closed, set the channel's variable to nil. The
        associated case will no longer run, because the rad from the nil channel never returns a
        value." (tricky)
  * On the design of the Go concurrency model
    * CSP: communicating sequential processes.
      * "The [concurrency] patterns implemented with CSP are just as powerful as the standard ones, but
        are far easier to understand."
    * Channels: "the separation of responsibility makes your code modular, testable, and keeps
      concurrency out of your API."
    * Keep your APIs concurrency free. "Concurrency is an implementation detail."
    * "When a value is passed from goroutine to goroutine over a series of channels, the data flow
      is clear. Access to the value is localized to a single goroutine at a time. When a mutex is
      used to protect a value, there is nothing to indicate which goroutine currently has ownership
      of the value."
  * Goroutines are not OS threads. They're managed by the Go runtime. Avoiding syscalls in this way
    makes switching and launching them much faster, and they're more memory efficient, starting
    with a small stack size.
  * Any function can be run async as a goroutine.
  * The sync/atomic package provides access to the atomic variable operations built into modern CPUs
    to add, swap, load, store, and compare and swap (CAS) a value that fits into a single register.

* Standard library (chap 11)
  * io

        // Reader and Writer interfaces
        type Reader interface {
          // No additional allocations required since caller provides the buffer.
          Read(p []byte) (n int, err error)
        }
        type Writer interface {
          Write(p []byte) (n int, err error)
        }

        // Read example
        buf := make([]byte, 2048)
        result := make([]char)
        for {
          n, err := r.Read(buf)
          // Process up to n bytes individually, using the subslice syntax.
          // Read bytes before checking for an error, because there might have been bytes returned
          // prior to encountering the error.
          for _, b := range buf[:n] {
            ...
            append(result, b)
          }
          if err == io.EOF {
            return result, nil
          }
          if err != nil {
            return nil, errr
          }
        }

        io.copy(reader, writer)
        io.MultiReader // Returns Reader that reads from multiple Readers sequentially.
        io.LimitReader // Only reads up to n bytes from the supplied Reader
        io.MultiWriter // Tees into multiple writers

        // Working with smaller files
        ioutil.ReadAll
        ioutil.ReadFile
        ioutil.WriteFile

  * time

        time.Equal // Corrects for timezone, whereas == does not.
  * JSON

        // All fields which should appear in JSON must be exported.
        type Person struct {
          Name string `json:"name"`
        }

        var p Person
        err := json.Unmarshal([]byte(data), &p) // from JSON string
        out, err := json.Marshal(p) // to JSON strirng

        // JSON io.Reader and Writer
        err = json.NewEncoder(file).Encode(p)
        err = json.NewDecoder(file).Decode(&p)

        // Processing JSON records separated by newlines
        dec := json.NewDecoder(strings.NewReader(data))
        for dec.More() {
          err := dec.Decode(&p)
          ...
        }

* Writing tests (chap 13)

        import "testing"

        // Mild convention to use underscore in the test name when testing an unexported fn.
        func Test_addNumbers(t *testing.T) {
          a := 1
          if a != 2 {
            t.Error("incorrect result. expected 1, got", a)
          }
        }

        t.Errorf("Expected: %d, got %d", a, b)

        // When present, is called once, prior to running the tests.
        var sharedVar int
        func TestMain(m *Testing.M) {
          sharedVar = 123
          exitVal := m.Run()
          os.Exit(exitVa)
        }

        // Consider using go-cmp package to compare structs, rather than reflect.DeepEquals.
        // go get -u github.com/google/go-cmp/cmp
        import "github.com/google/go-cmp/cmp"
        if diff := cmp.Diff(expected, result); diff != "" {
          t.Error(diff)
        }

  * t.Error will continue running the test fn. t.Fatal will exit the fn.
  * TODO: what is the point of t.Cleanup when you can use defer?
  * Go caches test results if the files and testdata have not changed.
  * If you don't want to access package private members in a test, so that you're only exercising
    the public API, the convention is to declare the package as part of a separate package *_test
    ("mypkg_test") but in the same directory as the sourcec.
  * Grouping tests; build tags
    * Build tags: specified on the first line of a file with a magic comment that start with `//
      +build.`
    * Tests in files with a build tag are only run when teh supporting resources are available.
    * Use this to group tests, e.g. integration tests.
    * go test -tags integration
  * Race checking
    * "A binary with -race enabled runs approximately ten times slower than a normal binary."

* Benchmarks

        func BenchmarkFileLen(b *testing.B) {
          ...
          if err != nil {
            b.Fatal(err)
          }
        }

        // Creating several benchmarks, one for each param value
        func BenchmarkVariousParams(b *testing.B) {
          for _, v := range []int{1, 10, 100} {
            b.Run(fmt.Sprintf("FileLen-%d", v), func(b *testing.B) {
              ...
            })
          }
        }

  * In Go, benchmarks are functions in your test files that start with the word Benchmark and take
    in a single parametere of type *testing.B. This type includes all of the functionaliyt of a
    *testing.T as well as additional support for benchmarking."


* Style
  * "Enforcing a standard format makes it a great deal easier to write tools that manipulate source
    code."
  * goimport does formatting like `go fmt`, but it also cleans up import statements and guesses at
    which are missing.
  * Common code review comments
    * https://github.com/golang/go/wiki/CodeReviewComments
  * Naming
    * Initialisms: ServeHTTP, not ServeHttp
      * appID instead of appId
    * "The smaller the scope for a variable, the shorter the name that's used for it."
    * Short names "serve as a check on how complicated your code is. If you find it hard to keep
      track of your short-named variables, it's likely that your block of code is doing too much."

* Performance
  * GC pressure
    * Try to have data allocated on the stack so no garbage is produced. I.e. avoid pointers.
    * The Go compiler will allocate slices on the stack if their sizes can be determined at runtime.
    * Arrays are allocated on the stack.
    * Go's GC follows a low-latency design vs a high-throughput design.
