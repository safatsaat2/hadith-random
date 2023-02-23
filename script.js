let ayat1 = `“He created the heavens and earth in truth and formed you and perfected your forms; and to Him is the [final] destination” [Quran 64:3]
Meaning: It teaches that the final destination of every Muslim is Allah. He has created each person in the perfect form, and every life revolves around Allah. The verse inspires people when they feel lost or gloomy.`;
let ayat2 = `“My mercy encompasses all things” [Quran 7:156]

Meaning: It says that the mercy of Allah is limitless. There are no boundaries around. It inspires people who are repenting for sins and facing troubles in life. One must not be fearful because Allah forgives everyone.`;
let ayat3 = `“So verily, with the hardship, there is a relief. Verily, with the hardship, there is relief” [Quran 94:5-6]

Meaning: It asks people to have faith in Allah and says that one who recites the verses of the Quran when facing great difficulties in life gets blessings from Allah. He gives everyone and also takes something from all. This verse gives hope, and it is among the important ayat in the Quran.`;
let ayat4 = `“And Allah would not punish them while they seek forgiveness” [Quran 8:33]

Meaning: This verse teaches Muslims to ask for His mercy and forgiveness. It says that compassion is the most important virtue of life. One must always hope for the best and always have faith in the Almighty.`;
let ayat5 = `“Do what is beautiful. Allah loves those who do what is beautiful” [Quran 2:195]

Meaning: One must be pure at heart. The verse asks everyone to do good in this world. Our actions must be centered around doing good deeds that bring joy to the heart and offer something valuable to others as well.`;
let ayat6 = `“Allah does not burden a soul beyond that it can bear” [Quran 2:286]

Meaning: The ayah says that Allah tests everyone, and He does not put hurdles in one’s way if the person cannot handle them. It teaches that He knows us better, and He is aware of our strengths. He will not put devotees through something that they cannot handle.`;
let ayat7 = `“And whoever relies upon Allah – then He is sufficient for him. Indeed, Allah will accomplish His purpose. Allah has already set for everything a [decreed] extent” [Quran 65:3]

Meaning: When in struggle, A Muslim must always remember Allah, for His remembrance brings hope. One is never alone in this world; the supreme power is with everyone. The ayah restores faith in the Almighty.`;
let ayat8 = `“The truth is from your Lord, so do not be among the doubters” [Quran 3:60]

Meaning: The verse teaches everyone to believe in the oneness of Allah because it is the only truth in this world. It helps the mind to stay away from confusion and distractions that can bring anyone down.

Muslims believe that when a person recites ayats from the Quran, Allah offers them guidance. When praying, the person can listen to His voice. If a person is sad, they get encouragement and comfort from the Almighty. Ayats offer a solution to people who feel lost in their lives. The verses hold significant importance among the followers of Islam.`;

let quran = [ayat1,ayat2,ayat3,ayat4,ayat5,ayat6,ayat7,ayat8];

function hadithItems(ayat){
    return quran [Math.floor(Math.random()*ayat.length)];
}

document.getElementById('btn').addEventListener('click', function(){
    const p = document.createElement('p');
    p.className= 'pb-5 pt-5'
    p.innerText = hadithItems(quran);
    const div = document.getElementById('ayat-container');
    div.appendChild(p);
})