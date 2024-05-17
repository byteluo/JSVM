import * as fs from "fs";
import * as path from "path";

import { Compiler } from "./compiler";
import { GlobalScope, VirtualMachine } from "./virtual-machine";

async function __main__() {
  const compiler = new Compiler();

  const testCode = fs.readFileSync(
    path.join(__dirname, "../test-code.js"),
    "utf8"
  );
  compiler.compile(testCode);

  const codes = compiler.toNumberArray();
  compiler.show();

  const globalScope = new GlobalScope(global);
  const vm = new VirtualMachine(globalScope, codes);
  vm.run();
}

__main__();
