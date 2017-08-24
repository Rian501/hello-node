#!/usr/bin/env node


const userName = {
    first: "your",
    last: "face"
};

const { first } = userName;
const { last } = userName;

const vowelSoundSet = new Set(["O", "H"]);
const consonantSoundSet = new Set(["J", "D"]);

consonantSoundSet.add("B").add("C").add("G").add("K").add("P").add("Q").add("T").add("U").add("V").add("W").add("Y").add("Z");
vowelSoundSet.add("N").add("E").add("A").add("F").add("H").add("I").add("L").add("M").add("N").add("R").add("S").add("X");

let fullNameArr = [...first, ...last];
let upperFirst = first.toUpperCase();
let upperLast = last.toUpperCase();
let fullNameString = `${upperFirst} ${upperLast}`;

let cheerVowel = (letter) => {
    console.log(`Give me an ${letter}!`);
}

let cheerConson = (letter) => {
    console.log(`Give me a  ${letter}!`);
}

const makeCheer = (nameArray) => {
   for (let i=0; i < nameArray.length; i++) {
     if (vowelSoundSet.has(nameArray[i].toUpperCase())) {
         cheerVowel(nameArray[i].toUpperCase());
     } else if (consonantSoundSet.has(nameArray[i].toUpperCase())) {
        cheerConson(nameArray[i].toUpperCase());
     }
   }
   console.log("What does that spell?")
   console.log(`${fullNameString}!`)
}

makeCheer(fullNameArr);



// let i = nameArr.length;
// let j = 0;
// function printLetters(i) {
//     setTimeout( () => {
//         if (-i) {
//             let letter = nameArr[j];
//             j++
//         }
//     }, 1000);


// }