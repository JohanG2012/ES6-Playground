// Template literals is just like a normal string literal except it encloses
//with backticks intead of single or doubble quotes
let tempLit = `I am a template literal!`;

// And now you dont have to escape single or double quotes
let hellWorld = `Hello world, "I live in Americe" is a great quote! 'dont ya think?'`;

// Template literals are still strings
let templateLiteral = `This is a literal`;

// output: string
console.log(typeof templateLiteral);

// output: 17
console.log(templateLiteral.length);

// output: is a literal
console.log(templateLiteral.substr(5));

// output: a
console.log(templateLiteral.charAt(8));

// With template literals, interpolation is possible!
let someText = "Hello",
someOtheText = "example";

// Programers like to use Hello world as an example
console.log(`Programers like to use ${someText} world as an ${someOtherText}`)
