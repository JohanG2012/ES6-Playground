// ES6 comes with modules support. And there is a ton of different ways
// ways code can be both exported and imported

// Lets get started with the export statement first

// You can export specific parts of the code
function func(x) {
  return x + x;
}

const foo = "bar";

export {func, foo};

// If you want to export a single value you can use the default export
export default function func(x) {
  return x + x + x;
}

// Moving on to import...

// You can import everything that is exported in a other modules
import * as myModule from "my-module";

// You can also import a single exported memember
import {single} from "my-module";

// You can ofcourse also import multiple exported members
import {single, doubble} from "my-module";

// You can also add a shotname for something long and/or complex
import {somethingReallyReallyLongAndComplex as somethingElse} from "my-module";

// You can also use shortname on multiple exported members
import {x as a, y as b} from "my-module";
