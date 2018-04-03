/*jshint esversion: 6 */

const $ = require('jquery');
const Tone = require('tone');
const Nexus = require('nexusui');
const dMatrix = require('./drumMatrix.js');
const sMatrix = require('./saxMatrix.js');
const {
    playButton,
    stopButton,
    tempoKnob,
    drumSequencer,
    bassSequencer,
    saxSequencer
} = require('./interfaces');
const {
    randomDrumMatrix,
    randomBoolean,
    randomNumber,
    randomSaxMatrix,
    randomBassMatrix,
    randomMinMax,
    randomTempo
} = require('./randomValues');

/////////// EVENT LISTENERS
tempoKnob.on("change", function (value) {
    Tone.Transport.bpm.value = value;
});
playButton.on('click', function () {
    Tone.Transport.start();
    drumLoop.start();
    bassLoop.start();
    saxLoop.start();
});
stopButton.on('click', function () {
    Tone.Transport.stop();
    drumLoop.stop();
    bassLoop.start();
    saxLoop.stop();
});

///// Applause /////
const applause = new Tone.Player("../audio/applause/applause7.mp3").toMaster();

/////////////////// LOOPS ///////////////////////
/////////// DRUMS
//Sounds
let drums = new Tone.Players({
    "kick": "../audio/drums/bop kick - snares on - 9.mp3",
    "snare": "../audio/drums/snare - snares on - 3.mp3",
    "tom": "../audio/drums/rack tom - snares on - 7.mp3",
    "ride": "../audio/drums/flat ride - 1.mp3",
    "ridecrash": "../audio/drums/ride - crash - 1.mp3"
}, {
    "volume": -10,
    "fadeOut": "64n",
}).chain(Tone.Master);
drums._players.kick.retrigger = true;
drums._players.snare.retrigger = true;
drums._players.tom.retrigger = true;
drums._players.ride.retrigger = true;
drums._players.ridecrash.retrigger = true;
//Loop
let step2 = [];
let beatName = ["kick", "snare", "tom", "ride", "ridecrash"];
let drumLoop = new Tone.Sequence((time, col) => {
    step2 = [];
    for (let i = 0; i < 5; i++) {
        step2.push(drumSequencer.matrix.pattern[i][col]);
    }
    for (let i = 0; i < 5; i++) {
        if (step2[i] === true) {
            drums.get(beatName[i]).start(time, 0, "1n", 0);
        }
    }
}, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], "16n");

/////////// BASS
/////Sounds
let bass = new Tone.Players({
    "A1": "../audio/bass/short/A1.mp3",
    "AS1": "../audio/bass/short/AS1.mp3",
    "B1": "../audio/bass/short/B1.mp3",
    "E1": "../audio/bass/short/E1.mp3",
    "F1": "../audio/bass/short/F1.mp3",
    "FS1": "../audio/bass/short/FS1.mp3",
    "G1": "../audio/bass/short/G1.mp3",
    "GS1": "../audio/bass/short/GS1.mp3",
    "A2": "../audio/bass/short/A2.mp3",
    "AS2": "../audio/bass/short/AS2.mp3",
    "B2": "../audio/bass/short/B2.mp3",
    "C2": "../audio/bass/short/C2.mp3",
    "CS2": "../audio/bass/short/CS2.mp3",
    "D2": "../audio/bass/short/D2.mp3",
    "DS2": "../audio/bass/short/DS2.mp3",
    "E2": "../audio/bass/short/E2.mp3",
    "F2": "../audio/bass/short/F2.mp3",
    "FS2": "../audio/bass/short/FS2.mp3",
    "G2": "../audio/bass/short/G2.mp3",
    "GS2": "../audio/bass/short/GS2.mp3",
    "C3": "../audio/bass/short/C3.mp3",
    "D3": "../audio/bass/short/D3.mp3",
    "DS3": "../audio/bass/short/DS3.mp3",
    "E3": "../audio/bass/short/E3.mp3",
    "F3": "../audio/bass/short/F3.mp3",
    "FS3": "../audio/bass/short/FS3.mp3",
    "G3": "../audio/bass/short/G3.mp3"
}, {
    "volume": 0,
    "fadeOut": "64n",
}).chain(Tone.Master);
let bassNotes = ["A1", "AS1", "B1", "E1", "F1", "FS1", "G1", "GS1", "A2", "AS2", "B2", "C2", "CS2", "D2", "DS2", "E2", "F2", "FS2", "G2", "GS2", "C3", "D3", "DS3", "E3", "F3", "FS3", "G3"];
///Loop
let bassLoop = new Tone.Sequence((time, col) => {
    step2 = [];
    for (let i = 0; i < 26; i++) {
        step2.push(bassSequencer.matrix.pattern[i][col]);
    }
    for (let i = 0; i < 26; i++) {
        if (step2[i] === true) {
            bass.get(bassNotes[i]).start(time, 0, "2n", 0);
        }
    }
}, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], "16n");


/////////// SAX
/////Sounds
let sax = new Tone.Players({
    "a2": "../audio/saxophone/a2.mp3",
    "bb2": "../audio/saxophone/bb2.mp3",
    "b2": "../audio/saxophone/b2.mp3",
    "c2": "../audio/saxophone/c2.mp3",
    "db2": "../audio/saxophone/db2.mp3",
    "d2": "../audio/saxophone/d2.mp3",
    "eb2": "../audio/saxophone/eb2.mp3",
    "e2": "../audio/saxophone/e2.mp3",
    "f2": "../audio/saxophone/f2.mp3",
    "gb2": "../audio/saxophone/gb2.mp3",
    "g2": "../audio/saxophone/g2.mp3",
    "ab2": "../audio/saxophone/ab2.mp3",
    "a3": "../audio/saxophone/a3.mp3",
    "bb3": "../audio/saxophone/bb3.mp3",
    "b3": "../audio/saxophone/b3.mp3",
    "c3": "../audio/saxophone/c3.mp3",
    "db3": "../audio/saxophone/db3.mp3",
    "d3": "../audio/saxophone/d3.mp3",
    "eb3": "../audio/saxophone/eb3.mp3",
    "e3": "../audio/saxophone/e3.mp3",
    "f3": "../audio/saxophone/f3.mp3",
    "gb3": "../audio/saxophone/gb3.mp3",
    "g3": "../audio/saxophone/g3.mp3",
    "ab3": "../audio/saxophone/ab3.mp3",
    "c4": "../audio/saxophone/c4.mp3",
    "db4": "../audio/saxophone/db4.mp3",
    "d4": "../audio/saxophone/d4.mp3",
    "eb4": "../audio/saxophone/eb4.mp3",
    "e4": "../audio/saxophone/e4.mp3"
}, {
    "volume": 0,
    "fadeOut": "64n",
}).chain(Tone.Master);
let saxNotes = ["a2", "bb2", "b2", "c2", "db2", "d2", "eb2", "e2", "f2", "gb2", "g2", "ab2",
    "a3", "bb3", "b3", "c3", "db3", "d3", "eb3", "e3", "f3", "gb3", "g3", "ab3", "c4", "db4", "d4", "eb4", "e4"
];

let saxLoop = new Tone.Sequence((time, col) => {
    step2 = [];
    for (let i = 0; i < 29; i++) {
        step2.push(saxSequencer.matrix.pattern[i][col]);
    }
    for (let i = 0; i < 29; i++) {
        if (step2[i] === true) {
            sax.get(saxNotes[i]).start(time, 0, "16n", 0);
        }
    }
}, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31], "16n");

//////////////////////// SCHEDULE CHANGES //////////////////////////////////
let arrayNum = 0;
const drumArray = [dMatrix.d1, dMatrix.d2, dMatrix.d3];
const saxArray = [];

Tone.Transport.scheduleRepeat(function (time) {
    let number = randomNumber();
    if (number < 0.5) {
        arrayNum = randomMinMax(0, 2);
        drumSequencer.matrix.set.all(drumArray[arrayNum]);
    }
    if (number > 0.3) {
        drumSequencer.matrix.set.all(randomDrumMatrix());
    }
    if (number > 0.5) {
        let tempo = randomTempo();
        let rampLength = randomMinMax(2, 6);
        Tone.Transport.bpm.rampTo(tempo, rampLength);
        tempoKnob.value = tempo;
    }
}, "1m");

Tone.Transport.scheduleRepeat(function (time) {
    let number = randomNumber();
    if (number < 0.05) {
        triggerApplause();
    }
}, "1n");

Tone.Transport.scheduleRepeat(function (time) {
    let number = randomNumber();
    bassSequencer.matrix.set.all(randomBassMatrix());
    if (number > 0.2) {
        saxSequencer.matrix.set.all(randomSaxMatrix());
    } else {
        saxSequencer.matrix.set.all(sMatrix.sax1);
        setTimeout(triggerApplause(), 1000);
    }
}, "2m");

let triggerApplause = () => {
    applause.start();
};