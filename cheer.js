const userName = {
    first: "JOHN",
    last: "DOE"
}

const { first } = userName;
const { last } = userName;

const vowelSoundSet = new Set(["O", "H"]);
const consonantSoundSet = new Set(["J", "D"]);

vowelSoundSet.add("N").add("E");

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

