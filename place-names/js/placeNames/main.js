// Put your code here

const names = [
   "Nashville", "Hong Kong", "The back yard", "Earth",
    "London", "The mall", "Ryman Auditorium", "The Great Wall of China"
];

console.log("All Place Names");

for (const name of names) {
  console.log(name);
}

//Solution
console.log("\n'The' Place Names");
const forTheNames = names.filter(n => n.startsWith("The"));
forTheNames.forEach(n => console.log(n));