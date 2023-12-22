
* Performance
  * GC pressure
    * Try to have data allocated on the stack so no garbage is produced. I.e. avoid pointers.
    * The Go compiler will allocate slices on the stack if their sizes can be determined at runtime.
    * Arrays are allocated on the stack.
    * Go's GC follows a low-latency design vs a high-throughput design.
