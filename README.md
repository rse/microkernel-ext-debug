
microkernel-ext-debug
=====================

Microkernel extension procedure for debugging the run-time processing.

<p/>
<img src="https://nodei.co/npm/microkernel-ext-debug.png?downloads=true&stars=true" alt=""/>

<p/>
<img src="https://david-dm.org/rse/microkernel-ext-debug.png" alt=""/>

About
-----

This is an extension procedure for the
[Microkernel](http://github.com/rse/microkernel) server
application environment, adding the capability to debug the run-time
processing of the microkernel by displaying topological module ordering,
state transitions and enter/leave method calls.

Usage
-----

```shell
$ npm install microkernel microkernel-ext-debug
```

```js
var Microkernel = require("microkernel")
var kernel = new Microkernel()

kernel.exec("microkernel-ext-debug")
```

License
-------

Copyright (c) 2016-2021 Dr. Ralf S. Engelschall (http://engelschall.com/)

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"Software"), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be included
in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

