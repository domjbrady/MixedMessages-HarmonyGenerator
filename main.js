//MIXED MESSAGES PORTFOLIO PROJECT


const randomTone = () => {
    const tones = ["C", "C#/Db", "D", "D#/Eb", "E", "F", "F#/Gb", "G", "G#/Ab", "A", "A#/Bb", "B"];
    return tones[Math.floor(Math.random()*12)]
}

const randomQuality = () => {
    const qualities = ["7", "9", "11", "13", "alt", "", "6", "maj7", "maj9", "maj13", "-", "-7", "-9", "-11", "aug", "dim"];
    return qualities[Math.floor(Math.random()*16)]
}

