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
    value wans intended.
  * const declarations can only be used with values known at compile time (i.e. literals).


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
