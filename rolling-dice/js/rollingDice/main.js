// Put your code here

console.log("Let's roll some dice, baby!");
console.log("---------------------------")

class Die {
    constructor(value) {
        this.value = value;
    }

    toString() {
        let dieString = "Unknown";

        switch (this.value) {
            case 1:
                dieString = "one";
                break;
            case 2:
                dieString = "two";
                break;
            case 3:
                dieString = "three";
                break;
            case 4:
                dieString = "four";
                break;
            case 5:
                dieString = "five";
                break;
            case 6:
                dieString = "six";
                break;
        }

        return dieString;
    }
}

const roll = () => {
    const dieValue = Math.floor(Math.random() * 6) +1;
    return new Die(dieValue);
}

for (let i = 0; i < 10; i++) {
    let die1 = roll();
    let die2 = roll();

    let message = `${die1.toString()} + ${die2.toString()} == ${die1.value + die2.value}`;

    if (die1.value === die2.value) {
        message += " DOUBLES!";
    }

    console.log(message)
} 