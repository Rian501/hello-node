const userName = {
    first: "USER",
    last: "NAME"
}

const { first } = userName;
const { last } = userName;

const vowelSoundSet = new Set(["O", "H"]);
const consonantSoundSet = new Set(["J", "D"]);

consonantSoundSet.add("B").add("C").add("G").add("K").add("P").add("Q").add("T").add("U").add("V").add("W").add("Y").add("Z");
vowelSoundSet.add("N").add("E").add("A").add("F").add("H").add("I").add("L").add("M").add("N").add("R").add("S").add("X");

let fullNameArr = [...first, ...last];

let cheerVowel = (letter) => {
    console.log(`Give me an ${letter}!`);
}

let cheerConson = (letter) => {
    console.log(`Give me a ${letter}!`);
}

let makeCheer = (nameArray) => {
   for (let i=0; i < nameArray.length; i++) {
     if (vowelSoundSet.has(nameArray[i])) {
         cheerVowel(nameArray[i]);
     } else if (consonantSoundSet.has(nameArray[i])) {
        cheerConson(nameArray[i]);
     }
   }
   console.log("What does that spell?")
   console.log(`${first} ${last}!`)
}

makeCheer(fullNameArr);

