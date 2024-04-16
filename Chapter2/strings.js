const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
const string4 = new String("A String object");
console.log(string1);
console.log(string2);
console.log(string3);
console.log(string4);

// charAt
console.log(string1.charAt(2));

//Comparing strings
const a = "a";
const b = "b";
if (a < b) {

    console.log(`${a} is less than ${b}`);
} else if (a > b) {
    console.log(`${a} is greater than ${b}`);
} else {
    console.log(`${a} and ${b} are equal.`);
}

//toUpperCase and toLowerCase

console.log(string1.toLowerCase());
console.log(string1.toUpperCase());

//includes
let browserType = "mozilla";

if (browserType.includes("zilla")) {
    console.log("Found zilla!");
} else {
    console.log("No zilla here!");
}

//startsWith
if (browserType.startsWith("zilla")) {
    console.log("Found zilla!");
} else {
    console.log("No zilla here!");
}

//endsWith

if (browserType.endsWith("zilla")) {
    console.log("Found zilla!");
} else {
    console.log("No zilla here!");
}

//indexOf
const tagline = "MDN - Resources for developers, by developers";
console.log(tagline.indexOf("developers"));

//slice
browserType.slice(2);
console.log(browserType);

//replace
const updated = browserType.replace("moz", "van");
console.log(updated); // "vanilla"
console.log(browserType); // "mozilla"
