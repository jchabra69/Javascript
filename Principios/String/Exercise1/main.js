// Defining two string variables
let string1 = "Hello";
let string2 = "World";

//Single '' = simple strings without '
//Double "" = more flexible 
//Inverted `` = String template

// a) Using traditional string concatenation

// Single
console.log('\'string1: \'' + string1 + '\', \'string2: \'' + string2 + '\'');

// Double
console.log("\"string1: \"" + string1 + "\", \"string2: \"" + string2 + "\"");

// Inverted
console.log("`string1: `" + string1 + "`, `string2: `" + string2 + "`");

// b) Using string literals

// Single
console.log(`'string1: '${string1}', 'string2: '${string2}'`);

// Double
console.log(`"string1: "${string1}", "string2: "${string2}"`);

// Inverted
console.log(`\`string1: \`${string1}\`, \`string2: \`${string2}\``);
