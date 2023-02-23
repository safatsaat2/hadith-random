let ayat1 = " “My mercy encompasses all things” [Quran 7:156]";

let ayat2 = " “He created the heavens and earth in truth and formed you and perfected your forms; and to Him is the [final] destination” [Quran 64:3]"
let ayat3 = " “So verily, with the hardship, there is a relief. Verily, with the hardship, there is relief” [Quran 94:5-6]"
let ayat4 = " “And Allah would not punish them while they seek forgiveness” [Quran 8:33]"
let ayat5 = " “Do what is beautiful. Allah loves those who do what is beautiful” [Quran 2:195]"
let ayat6 = " “Allah does not burden a soul beyond that it can bear” [Quran 2:286]"
let ayat7 = " “And whoever relies upon Allah – then He is sufficient for him. Indeed, Allah will accomplish His purpose. Allah has already set for everything a [decreed] extent” [Quran 65:3]"
let ayat8 = " “The truth is from your Lord, so do not be among the doubters” [Quran 3:60]"

let quran = [ayat1,ayat2,ayat3,ayat4,ayat5,ayat6,ayat7,ayat8];

function hadithItems(ayat){
    return quran [Math.floor(Math.random()*ayat.length)];
}

console.log(hadithItems(quran))