/*
**  Microkernel -- Microkernel for Server Applications
**  Copyright (c) 2016-2021 Dr. Ralf S. Engelschall <rse@engelschall.com>
**
**  Permission is hereby granted, free of charge, to any person obtaining
**  a copy of this software and associated documentation files (the
**  "Software"), to deal in the Software without restriction, including
**  without limitation the rights to use, copy, modify, merge, publish,
**  distribute, sublicense, and/or sell copies of the Software, and to
**  permit persons to whom the Software is furnished to do so, subject to
**  the following conditions:
**
**  The above copyright notice and this permission notice shall be included
**  in all copies or substantial portions of the Software.
**
**  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
**  EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
**  MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
**  IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
**  CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
**  TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
**  SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/*  external requirements  */
const cluster = require("cluster")
const chalk   = require("chalk")

/*  the Microkernel extension procedure  */
const Extension = (kernel) => {
    /*  output debug information  */
    const output = (msg) => {
        let id = process.pid
        if (cluster.isMaster)
            id = "MASTER"
        else if (cluster.isWorker)
            id = `WORKER-${cluster.worker.id}`
        process.stdout.write(`microkernel: ${chalk.blue("DEBUG")} [${id}]: ${msg}\n`)
    }

    /*  latch into the microkernel  */
    kernel.latch("microkernel:state:toposort", (order /*, mods */) => {
        output(`${chalk.blue("module order")}: ${order.join(", ")}`)
    })
    kernel.latch("microkernel:state:transit:before", (from, to, method) => {
        output(`${chalk.blue("state transition")} (${chalk.bold("before")}): ` +
            `${chalk.bold(from)} -(${chalk.bold(method)})-> ${to}`)
    })
    kernel.latch("microkernel:state:transit:after", (from, to, method) => {
        output(`${chalk.blue("state transition")} (${chalk.bold("after")}):  ` +
            `${from} -(${chalk.bold(method)})-> ${chalk.bold(to)}`)
    })
    kernel.latch("microkernel:state:call:before", (method, mod, methodName, modName) => {
        output(`${chalk.blue("method call")}      (${chalk.bold("before")}): ` +
            `${modName}::${chalk.bold(methodName)}()`)
        return method
    })
    kernel.latch("microkernel:state:call:after", (result, methodName, modName) => {
        let type = typeof result
        if (type === "object")
            type = type.constructor.name
        output(`${chalk.blue("method call")}      (${chalk.bold("after")}):  ` +
            `${modName}::${chalk.bold(methodName)}(): ${chalk.bold(type)}`)
        return result
    })
}

/*  export the Microkernel extension  */
module.exports = Extension

