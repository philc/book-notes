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
  * As a general rule, only declare variables in the pacckage block that are effectively immutable.

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
