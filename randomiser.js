// races

function setRace() {

// Randomise Race

            let raceArr = ["Aarakocra", "Aasimar", "Bugbear", "Centaur", "Changeling", "Dragonborn", "Dwarf", "Elf", "Firbolg", "Genasi", "Gith", "Gnome", "Goblin", "Goliath", "Half-Elf", "Half-Orc", "Halfling", "Hobgoblin", "Human", "Kalashtar", "Kenku", "Kobold", "Leonin", "Lizardfolk", "Loxodon", "Minotaur", "Orc", "Satyr", "Shifter", "Simic Hybrid", "Siren", "Tabaxi", "Tiefling", "Tortle", "Triton", "Vedalken", "Verdan", "Warforged", "Yuan-Ti Pureblood"];

            let race = raceArr[Math.floor(Math.random()*raceArr.length)];

            document.getElementById("race").innerHTML = race;

// Get more info on Race

            let raceInfo = document.createElement("a");

            raceInfo.innerHTML = "Get More Info";
            raceInfo.setAttribute = ("class", "moreInfo");
            raceInfo.href = `${race}.html`;

            document.getElementById("race").appendChild(raceInfo);

            globalRace = race;
    };


// Subraces

function aasSubRace(){
    let aasArr = ["Fallen Aasimar", "Protector Aasimar", "Scourge Aasimar", "Variant Aasimar"];
        let aas = aasArr[Math.floor(Math.random()*aasArr.length)];
        document.getElementById("subrace").innerHTML = aas;

// get subrace info

                let aasInfo = document.createElement("a");

                aasInfo.innerHTML = "Get More Info";
                aasInfo.setAttribute = ("class", "moreInfo");
                aasInfo.href = `${aas}.html`;

                document.getElementById("subrace").appendChild(aasInfo);
};

function dwaSubRace() {
    let dwaArr = ["Grey Dwarf", "Hill Dwarf", "Mark of Warding Dwarf", "Mountain Dwarf"];
                let dwa = dwaArr[Math.floor(Math.random()*dwaArr.length)];
                document.getElementById("subrace").innerHTML = dwa;

                // get subrace info

                let dwaInfo = document.createElement("a");

                dwaInfo.innerHTML = "Get More Info";
                dwaInfo.setAttribute = ("class", "moreInfo");
                dwaInfo.href = `${dwa}.html`;

                document.getElementById("subrace").appendChild(dwaInfo);

};

function elfSubRace() {
    let elfArr = ["Aereni High Elf", "Aereni Wood Elf", "Avariel", "Drow", "Eladrin", "High Elf", "Mark of Shadow Elf", "Sea Elf", "Shadar-Kai", "Valenar High Elf", "Valenar Wood Elf", "Wood Elf"];
                let elf = elfArr[Math.floor(Math.random()*elfArr.length)];
                document.getElementById("subrace").innerHTML = elf;

                // get subrace info

                let elfInfo = document.createElement("a");

                elfInfo.innerHTML = "Get More Info";
                elfInfo.setAttribute = ("class", "moreInfo");
                elfInfo.href = `${elf}.html`;

                document.getElementById("subrace").appendChild(elfInfo);
};

function genSubRace() {
    let genArr = ["Earth Genasi", "Air Genasi", "Fire Genasi", "Water Genasi"];
                let gen = genArr[Math.floor(Math.random()*genArr.length)];
                document.getElementById("subrace").innerHTML = gen;

                // get subrace info

                let genInfo = document.createElement("a");

                genInfo.innerHTML = "Get More Info";
                genInfo.setAttribute = ("class", "moreInfo");
                genInfo.href = `${gen}.html`;

                document.getElementById("subrace").appendChild(genInfo);
};

function gitSubRace() {
    let gitArr = ["Githyanki", "Githzerai"];
                let git = gitArr[Math.floor(Math.random()*gitArr.length)];
                document.getElementById("subrace").innerHTML = git;

                // get subrace info

                let gitInfo = document.createElement("a");

                gitInfo.innerHTML = "Get More Info";
                gitInfo.setAttribute = ("class", "moreInfo");
                gitInfo.href = `${git}.html`;

                document.getElementById("subrace").appendChild(gitInfo);
};

function gnoSubRace() {
    let gnoArr = ["Deep Gnome", "Forest Gnome", "Mark of Scribing Gnome", "Rock Gnome"];
                let gno = gnoArr[Math.floor(Math.random()*gnoArr.length)];
                document.getElementById("subrace").innerHTML = gno;

                // get subrace info

                let gnoInfo = document.createElement("a");

                gnoInfo.innerHTML = "Get More Info";
                gnoInfo.setAttribute = ("class", "moreInfo");
                gnoInfo.href = `${gno}.html`;

                document.getElementById("subrace").appendChild(gnoInfo);
}

function halSubRace() {
    let halArr = ["Lightfoot Halfling", "Ghostwise Halfling", "Stout Halfling", "Mark of Hospitality Halfling", "Mark of Healing Halfling"];
                let hal = halArr[Math.floor(Math.random()*halArr.length)];
                document.getElementById("subrace").innerHTML = hal;
                                
                // get subrace info

                let halInfo = document.createElement("a");

                halInfo.innerHTML = "Get More Info";
                halInfo.setAttribute = ("class", "moreInfo");
                halInfo.href = `${hal}.html`;

                document.getElementById("subrace").appendChild(halInfo);
}

function humSubRace() {
    let humArr = ["Just a bog standard human", "Variant Human", "Mark of Sentinel Human", "Mark of Finding Human", "Mark of Handling Human", "Mark of Making Human", "Mark of Passage Human"];
                let hum = humArr[Math.floor(Math.random()*humArr.length)];
                document.getElementById("subrace").innerHTML = hum;

                // get subrace info

                let humInfo = document.createElement("a");

                humInfo.innerHTML = "Get More Info";
                humInfo.setAttribute = ("class", "moreInfo");
                humInfo.href = `${hum}.html`;

                document.getElementById("subrace").appendChild(humInfo);
}

function shiSubRace() {
    let shiArr = ["Beasthide Shifter", "Longtooth Shifter", "Swiftstride Shifter", "Wildhunt Shifter"];
                let shi = shiArr[Math.floor(Math.random()*shiArr.length)];
                document.getElementById("subrace").innerHTML = shi;

                // get subrace info

                let shiInfo = document.createElement("a");

                shiInfo.innerHTML = "Get More Info";
                shiInfo.setAttribute = ("class", "moreInfo");
                shiInfo.href = `${shi}.html`;

                document.getElementById("subrace").appendChild(shiInfo);
}

function tieSubRace() {
    let tieArr = ["Baalzebub Tiefling", "Dispater Tiefling", "Feral Tiefling", "Fierna Tiefling", "Glasya Tiefling", "Levistus Tiefling", "Mammon Tiefling", "Mephistopheles Tiefling", "Base Tiefling", "Variant Feral Tiefling", "Variant Tiefling", "Zariel Tiefling"];
                document.getElementById("subrace").innerHTML = tie;
                
                // get subrace info

                let tieInfo = document.createElement("a");

                
                tieInfo.innerHTML = "Get More Info";
                tieInfo.setAttribute = ("class", "moreInfo");
                tieInfo.href = `${tie}.html`;

                document.getElementById("subrace").appendChild(tieInfo);
}

function setSubRace() {

    if (globalRace === "Aasimar") {
        aasSubRace();

    } else if (globalRace === "Dwarf") {
        dwaSubRace();

    } else if (globalRace === "Elf") {
        elfSubRace();

    } else if (globalRace === "Genasi") {
        genSubRace();

    } else if (globalRace === "Gith") {
        gitSubRace();

    } else if (globalRace === "Gnome") {
        gnoSubRace();


    } else if (globalRace === "Halfling") {
        halSubRace();

    } else if (globalRace === "Human") {
        humSubRace();


    } else if (globalRace === "Shifter") {
        shiSubRace();


    } else if (globalRace === "Tiefling") {
        tieSubRace(); 

    } else {
        document.getElementById("subrace").innerHTML = " ";
        }
};

// class

function setClas () {

let classArr = ["Artificer", "Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorceror", "Warlock", "Wizard", "Blood Hunter"];

let clas = classArr[Math.floor(Math.random()*classArr.length)];

document.getElementById("class").innerHTML = clas;

// Get more info on Race

let clasInfo = document.createElement("a");

clasInfo.innerHTML = "Get More Info";
clasInfo.setAttribute = ("class", "moreInfo");
clasInfo.href = `${clas}.html`;

document.getElementById("class").appendChild(clasInfo);

globalClas = clas;
};

// subclasses

function artSubClass(){
    let artArr = ["Alchemist", "Artillerist", "Battle Smith"];

    let art = artArr[Math.floor(Math.random()*artArr.length)];
    
    document.getElementById("subclass").innerHTML = art;

// get subrace info

    let artInfo = document.createElement("a");

    artInfo.innerHTML = "Get More Info";
    artInfo.setAttribute = ("class", "moreInfo");
    artInfo.href = `${art}.html`;

    document.getElementById("subclass").appendChild(artInfo);
};

function barbSubClass() {
    let barbArr = ["Ancestral Guardian", "Beast", "Battlerager", "Berserker", "Storm Herald", "Totem Warrior", "Wild Soul", "Zealot"];

    let barb = barbArr[Math.floor(Math.random()*barbArr.length)];

    document.getElementById("subclass").innerHTML = barb;

// get subrace info

    let barbInfo = document.createElement("a");

    barbInfo.innerHTML = "Get More Info";
    barbInfo.setAttribute = ("class", "moreInfo");
    barbInfo.href = `${barb}.html`;

    document.getElementById("subclass").appendChild(barbInfo);

};

function bardSubClass() {
    let bardArr = ["College of Creation", "College of Eloquence", "College of Glamour", "College of Lore", "College of Satire", "College of Spirits", "College of Swords", "College of Valor", "College of Whispers"];

    let bard = bardArr[Math.floor(Math.random()*bardArr.length)];

    document.getElementById("subclass").innerHTML = barb;

// get subrace info

    let bardInfo = document.createElement("a");

    bardInfo.innerHTML = "Get More Info";
    bardInfo.setAttribute = ("class", "moreInfo");
    bardInfo.href = `${bard}.html`;

    document.getElementById("subclass").appendChild(bardInfo);

};

function cleSubRace() {
    let cleArr = ["Ambition Domain", "Arcana Domain", "Beauty Domain", "City Domain", "Darkness Domain", "Death Domain", "Destruction Domain", "Forge Domain", "Grave Domain", "Knowledge Domain", "Life Domain", "Light Domain", "Love Domain", "Nature Domain", "Order Domain", "Protection Domain", "Solidarity Domain", "Strength Domain", "Tempest Domain", "Trickery Domain", "Twilight Domain", "Unity Domain", "War Domain", "Zeal Domain"];

    let cle = cleArr[Math.floor(Math.random()*cleArr.length)];

    document.getElementById("subclass").innerHTML = cle;

// get subrace info

    let cleInfo = document.createElement("a");

    cleInfo.innerHTML = "Get More Info";
    cleInfo.setAttribute = ("class", "moreInfo");
    cleInfo.href = `${cle}.html`;

    document.getElementById("subclass").appendChild(cleInfo);
};

function druSubClass() {
    let druArr = ["Circle of Dreams", "Circle of the Land", "Circle of the Moon", "Circle of the Shepard", "Circle of Spores", "Circle of Stars", "Circle of Twilight", "Circle of Wildfire"];

    let dru = druArr[Math.floor(Math.random()*druArr.length)];

    document.getElementById("subclass").innerHTML = dru;

// get subrace info

    let druInfo = document.createElement("a");

    druInfo.innerHTML = "Get More Info";
    druInfo.setAttribute = ("class", "moreInfo");
    druInfo.href = `${dru}.html`;

    document.getElementById("subclass").appendChild(druInfo);
};

function figSubClass() {
    let figArr = ["Arcane Archer", "Brute", "Battle Master", "Cavalier", "Champion", "Echo Knight", "Eldritch Knight", "Knight", "Monster Hunter", "Psi Knight", "Psychic Warrior", "Rune Night", "Samurai", "Scout", "Sharpshooter", "Slayer", "Warlord", "Weapon Master"];

    let fig = figArr[Math.floor(Math.random()*figArr.length)];

    document.getElementById("subclass").innerHTML = fig;

// get subrace info

    let figInfo = document.createElement("a");

    figInfo.innerHTML = "Get More Info";
    figInfo.setAttribute = ("class", "moreInfo");
    figInfo.href = `${fig}.html`;

    document.getElementById("subclass").appendChild(figInfo);
}

function monSubClass() {
    let monArr = ["Astral Self", "Drunken Master", "Four Elements", "Kensei", "Long Death", "Mercy", "Open Hand", "Shadow", "Soul Knife", "Sun Soul", "Tranquility"];

    let mon = monArr[Math.floor(Math.random()*monArr.length)];

    document.getElementById("subclass").innerHTML = mon;

// get subrace info

    let monInfo = document.createElement("a");

    monInfo.innerHTML = "Get More Info";
    monInfo.setAttribute = ("class", "moreInfo");
    monInfo.href = `${mon}.html`;

    document.getElementById("subclass").appendChild(monInfo);
};

function palSubClass() {
    let palArr = ["Oath of the Ancients", "Oath of Conquest", "Oath of the Crown", "Oath of Devotion", "Oath of Glory", "Oath of Heroism", "Oathbreaker", "Oath of Redemption", "Oath of Treachery", "Oath of Vengeance", "Oath of Watchers"];

    let pal = palArr[Math.floor(Math.random()*palArr.length)];

    document.getElementById("subclass").innerHTML = pal;

// get subrace info

    let palInfo = document.createElement("a");

    palInfo.innerHTML = "Get More Info";
    palInfo.setAttribute = ("class", "moreInfo");
    palInfo.href = `${pal}.html`;

    document.getElementById("subclass").appendChild(palInfo);
};

function ranSubClass() {
    let ranArr = ["Beast Conclave", "Deep Stalker Conclave", "Fey Wanderer", "Gloom Stalker", "Horizon Walker", "Hunter Conclave", "Monster Slayer", "Primeval Guardian", "Swarmkeeper"];

    let ran = ranArr[Math.floor(Math.random()*ranArr.length)];

    document.getElementById("subclass").innerHTML = ran;

// get subrace info

    let ranInfo = document.createElement("a");

    ranInfo.innerHTML = "Get More Info";
    ranInfo.setAttribute = ("class", "moreInfo");
    ranInfo.href = `${ran}.html`;

    document.getElementById("subclass").appendChild(ranInfo);
};

function rogSubClass() {
    let rogArr = ["Acrobat", "Arcane Trickster", "Assassin", "Inquisitive", "Mastermind", "Phantom", "Revived", "Scout", "Soulknife", "Swashbuckler", "Thief"];

    let rog = rogArr[Math.floor(Math.random()*rogArr.length)];

    document.getElementById("subclass").innerHTML = rog;

// get subrace info

    let rogInfo = document.createElement("a");

    rogInfo.innerHTML = "Get More Info";
    rogInfo.setAttribute = ("class", "moreInfo");
    rogInfo.href = `${rog}.html`;

    document.getElementById("subclass").appendChild(rogInfo);
};

function sorSubClass() {
    let sorArr = ["Aberrant Mind", "Clockwork Soul", "Divine Soul", "Draconic", "Favoured Soul", "Giant Soul", "Pheonix", "Psionic Soul", "Pyromancer", "Sea", "Shadow", "Stone", "Storm", "Wild"];

    let sor = sorArr[Math.floor(Math.random()*sorArr.length)];

    document.getElementById("subclass").innerHTML = sor;

// get subrace info

    let sorInfo = document.createElement("a");

    sorInfo.innerHTML = "Get More Info";
    sorInfo.setAttribute = ("class", "moreInfo");
    sorInfo.href = `${sor}.html`;

    document.getElementById("subclass").appendChild(sorInfo);
};

function warSubClass() {
    let warArr = ["Archfey", "Celestial", "Fiend", "Genie", "Ghost in the Machine", "Great Old One", "Hexblade", "Kraken", "Lolth", "Lurker in the Deep", "Noble Genie", "Raven Queen", "Seeker", "Undead", "Undying", "Undying Light"];

    let war = warArr[Math.floor(Math.random()*warArr.length)]; 

    document.getElementById("subclass").innerHTML = war;

// get subrace info

    let warInfo = document.createElement("a");

    warInfo.innerHTML = "Get More Info";
    warInfo.setAttribute = ("class", "moreInfo");
    warInfo.href = `${war}.html`;

    document.getElementById("subclass").appendChild(warInfo);
};

function wizSubClass() {
    let wizArr = ["Abjuration", "Bladesinging", "Bladesinging but better", "Chronurgy", "Conjuration", "Divination", "Enchantmet", "Evocation", "Graviturgy", "Illusion", "Invention", "Lore Mastery", "Necromancy", "Onomancy", "Psionics", "Scribes", "Technomancy", "Theurgy", "Transmutation", "War"];

    let wiz = wizArr[Math.floor(Math.random()*wizArr.length)];

    document.getElementById("subclass").innerHTML = wiz;

// get subrace info

    let wizInfo = document.createElement("a");

    wizInfo.innerHTML = "Get More Info";
    wizInfo.setAttribute = ("class", "moreInfo");
    wizInfo.href = `${wiz}.html`;

    document.getElementById("subclass").appendChild(wizInfo);
}



function setSubClas () {

if (globalClas === "Artificer") {
    artSubClass();

    } else if (globalClas === "Barbarian") {
    barbSubClass();

} else if (globalClas === "Bard") {
    bardSubClass();

} else if (globalClas === "Cleric") {
    cleSubClass();

} else if (globalClas === "Druid") {
    druSubClass();

} else if (globalClas === "Fighter") {
    figSubClass();

} else if (globalClas === "Monk") {
    monSubClass();

} else if (globalClas === "Paladin") {
    palSubClass();

} else if (globalClas === "Blood Hunter") {
    document.getElementById("subclass").innerHTML = " ";

} else if (globalClas === "Ranger") {
    ranSubClass();

} else if (globalClas === "Rogue") {
    rogSubClass();

}  else if (globalClas === "Sorceror") {
    sorSubClass();

} else if (globalClas === "Warlock") {
    warSubClass();

} else if (globalClas === "Wizard") {
    wizSubClass();

} else {
    document.getElementById("subclass").innerHTML = "test";
};
};
    document.getElementById("subclass").innerHTML = setSubClas();


// Background

function setBackground() {

let backArr = ["Acolyte", "Anthropologist", "Archeologist", "Athlete", "Augen Trust Spy", "Azorius Functionary", "Boros Legionnaire", "Celebrity Adventurer's Scion", "Charlatan", "City Watch", "City Watch Investigator", "Clan Crafter", "Cloistered Scholar", "Cobalt Scholar", "Courtier", "Criminal", "Criminal (Spy)", "Dimir Operative", "Entertainer", "Gladiator", "Faceless", "Faction Agent", "Failed Merchant", "Far Traveler", "Fisher", "Folk Hero", "Gambler", "Golgari Agent", "Grinner", "Gruul Anarch", "Guild Artisan", "Guild Merchant", "Haunted One", "Hermit", "House Agent", "Inheritor", "Izzet Engineer", "Knight of the Order", "Luxonborn Acolyte", "Marine", "Mercenary Veteran", "Myriad Operative", "Noble", "Knight", "Orzhov Representative", "Outlander", "Plaintiff", "Rakdos Cultist", "Revelry Pirate", "Rival Intern", "Sage", "Sailor", "Pirate", "Selesnya Initiate", "Shipwright", "Simis Scientist", "Smuggler", "Soldier", "Urban Bounty Hunter", "Urchin", "Uthgardt Tribe Member", "Volstrucker Agent", "Waterdhavian Noble"];

let back = backArr[Math.floor(Math.random()*backArr.length)];

document.getElementById("background").innerHTML = back;

// Get more info on Background

let backInfo = document.createElement("a");

backInfo.innerHTML = "Get More Info";
backInfo.setAttribute = ("class", "moreInfo");
backInfo.href = `${back}.html`;

document.getElementById("background").appendChild(backInfo);

}

// Alignment

function setAlignment() {

    let alignArr = ["Chaotic Evil", "Neutral Evil", "Lawful Evil", "Chaotic Neutral", "True Neutral", "Lawful Neutral", "Chaotic Good", "Neutral Good", "Lawful Good"] 

    let alignment = alignArr[Math.floor(Math.random()*alignArr.length)];

    document.getElementById("alignment").innerHTML = alignment;

    // Get more info on Alignment

    let alignInfo = document.createElement("a");

alignInfo.innerHTML = "Get More Info";
alignInfo.setAttribute = ("class", "moreInfo");
alignInfo.href = `${align}.html`;

document.getElementById("alignment").appendChild(alignInfo);

}
