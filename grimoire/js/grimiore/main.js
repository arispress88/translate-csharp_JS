// Put your code here

console.log("Do you believe in magic?");
console.log("------------------------");

const getAllSpells = () => {
    let spells = [
        {
            name: "Turn enemy into a newt",
            isEvil: true,
            energyRequired: 5.1
        },
        {
            name: "Conjure some gold for a local charity",
            isEvil: false,
            energyRequired: 2.99
        },
        {
            name: "Give a deaf person the ablilty to hear",
            isEvil: false,
            energyRequired: 12.2
        },
        {
            name: "Make yourself emperor of the universe",
            isEvil: true,
            energyRequired: 100.0
        },
        {
            name: "Convince your relatives your political views are correct",
            isEvil: false,
            energyRequired: 2921.5
        }
    ];

    return spells;
}

class Spell {
    constructor(name, isEvil, energyRequired) {
        this.name = name;
        this.isEvil = isEvil;
        this.energyRequired = energyRequired;
    }
}

class SpellBook {
    constructor(title, spells) {
        this.title = title;
        this.spells = spells;
    }
}

const allSpells = getAllSpells();
const goodBook = new SpellBook("Good Book", allSpells.filter(spell => !spell.isEvil));
const evilBook = new SpellBook("Evil Book", allSpells.filter(spell => spell.isEvil));

const displaySpellBook = (book) => {
    console.log(book.title);
    for (const spell of book.spells) {
        console.log(`  ${spell.name}`);
    }
}

displaySpellBook(goodBook);
console.log("");
displaySpellBook(evilBook);