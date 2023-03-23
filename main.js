//MIXED MESSAGES PORTFOLIO PROJECT

const randomTone = () => {
    const tones = ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"];
    return tones[Math.floor(Math.random()*12)]
}

const randomQuality = () => {
    const qualities = ["7", "9", "11", "13", "alt", "", "6", "maj7", "maj9", "maj13", "-", "-7", "-9", "-11", "aug", "dim"];
    return qualities[Math.floor(Math.random()*16)]
}

const chordGenerator = () => {
    return randomTone() + randomQuality();
}

const verseGenerator = (verseLength) => {
    const verseArr = [];
    for (let i = 0; i <= verseLength - 1; i++){
        verseArr.push(chordGenerator())
    }
    const verse = verseArr.join("  ");
    return `VERSE: ${verse}`
}
const chorusGenerator = (chorusLength) => {
    const chorusArr = [];
    for (let i = 0; i <= chorusLength - 1; i++){
        chorusArr.push(chordGenerator())
    }
    const chorus = chorusArr.join("  ");
    return `CHORUS: ${chorus}`
}
const bridgeGenerator = (bridgeLength) => {
    const bridgeArr = [];
    for (let i = 0; i <= bridgeLength - 1; i++){
        bridgeArr.push(chordGenerator())
    }
    const bridge = bridgeArr.join("  ");
    return `BRIDGE: ${bridge}`
}


function generateVerse() {
    const verseLength = document.getElementById("verse-length").value;

    const verse = verseGenerator(verseLength);
    document.getElementById("verse-output").innerHTML = verse;
}
function generateChorus() {
    const chorusLength = document.getElementById("chorus-length").value;

    const chorus = chorusGenerator(chorusLength);
    document.getElementById("chorus-output").innerHTML = chorus;
}
function generateBridge() {
    const bridgeLength = document.getElementById("bridge-length").value;

    const bridge = bridgeGenerator(bridgeLength);
    document.getElementById("bridge-output").innerHTML = bridge;
}

function generateTune(){
    event.preventDefault();
    generateVerse();
    generateChorus()
    generateBridge();
}