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
