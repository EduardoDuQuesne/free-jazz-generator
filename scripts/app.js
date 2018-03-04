/*jshint esversion: 6 */

const $ = require('jquery');
const Tone = require('tone');
const Nexus = require('nexusui');
const dMatrix = require('./drumMatrix.js');
const sMatrix = require('./saxMatrix.js');

//CONTROLS
const playButton = new Nexus.TextButton('#play', {
    'size': [150, 50],
    'state': false,
    'text': 'Play',
    'alternate': false
});
const stopButton = new Nexus.TextButton('#stop', {
    'size': [150, 50],
    'state': false,
    'text': 'Stop',
    'alternate': false
});
const tempoKnob = new Nexus.Number('#tempo', {
    'size': [60, 30],
    'value': 120,
    'min': 80,
    'max': 200,
    'step': 1
});

/////////// EVENT LISTENERS
tempoKnob.on("change", function (value) {
    Tone.Transport.bpm.value = value;
});
playButton.on('click', function () {
    Tone.Transport.start();
    drumLoop.start();
    saxLoop.start();
});
stopButton.on('click', function () {
    Tone.Transport.stop();
    drumLoop.stop();
    saxLoop.stop();
});

//DRUM SEQUENCER
const drumSequencer = new Nexus.Sequencer('#drum-sequencer', {
    'size': [400, 200],
    'mode': 'toggle',
    'rows': 5,
    'columns': 16
});
const saxSequencer = new Nexus.Sequencer('#sax-sequencer', {
    'size': [800, 1000],
    'mode': 'toggle',
    'rows': 29,
    'columns': 32
});

//Applause
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
    "e4": "../audio/saxophone/e4.mp3",

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
    if (number < 0.3) {
        arrayNum = randomMinMax(0, 2);
        drumSequencer.matrix.set.all(drumArray[arrayNum]);
    }
    if (number > 0.3) {
        drumSequencer.matrix.set.all(createRandomDrumMatrix());
    }
    if (number > 0.5) {
        let tempo = randomTempo();
        let rampLength = randomMinMax(1, 10);
        Tone.Transport.bpm.rampTo(tempo, rampLength);
        tempoKnob.value = tempo;
    }
}, "1m");

Tone.Transport.scheduleRepeat(function (time) {
    let number = randomNumber();
    if (number < 0.1) {
        applause.start();
    }
}, "1n");

Tone.Transport.scheduleRepeat(function (time) {
    let number = randomNumber();
    if (number > 0.05) {
        saxSequencer.matrix.set.all(randomSaxMatrix());
    } else {
        saxSequencer.matrix.set.all(sMatrix.sax1);
    }
}, "2m");





// RANDOM GENERATED MATRIX
const createRandomMatrix = () => {
    let randomMatrix = [
        [randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean()],
        [randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean()],
        [randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean()],
        [randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean(), randomBoolean()]
    ];
    return randomMatrix;
};
const createRandomBassMatrix = () => {
    let randomMatrix = [
        [weightedBoolean(0.9), weightedBoolean(0.2), weightedBoolean(0.2), weightedBoolean(0.2),
            weightedBoolean(0.9), weightedBoolean(0.2), weightedBoolean(0.2), weightedBoolean(0.2),
            weightedBoolean(0.9), weightedBoolean(0.2), weightedBoolean(0.2), weightedBoolean(0.2),
            weightedBoolean(0.9), weightedBoolean(0.2), weightedBoolean(0.2), weightedBoolean(0.2)
        ],
        [weightedBoolean(0.2), weightedBoolean(0.2), weightedBoolean(0.2), weightedBoolean(0.2),
            weightedBoolean(0.2), weightedBoolean(0.2), weightedBoolean(0.2), weightedBoolean(0.2),
            weightedBoolean(0.2), weightedBoolean(0.2), weightedBoolean(0.2), weightedBoolean(0.2),
            weightedBoolean(0.2), weightedBoolean(0.2), weightedBoolean(0.2), weightedBoolean(0.2)
        ],
        [weightedBoolean(0.2), weightedBoolean(0.2), weightedBoolean(0.2), weightedBoolean(0.2),
            weightedBoolean(0.2), weightedBoolean(0.2), weightedBoolean(0.2), weightedBoolean(0.2),
            weightedBoolean(0.2), weightedBoolean(0.2), weightedBoolean(0.2), weightedBoolean(0.2),
            weightedBoolean(0.2), weightedBoolean(0.2), weightedBoolean(0.2), weightedBoolean(0.2)
        ],
        [weightedBoolean(0.2), weightedBoolean(0.2), weightedBoolean(0.2), weightedBoolean(0.2),
            weightedBoolean(0.2), weightedBoolean(0.2), weightedBoolean(0.2), weightedBoolean(0.2),
            weightedBoolean(0.2), weightedBoolean(0.2), weightedBoolean(0.2), weightedBoolean(0.2),
            weightedBoolean(0.2), weightedBoolean(0.2), weightedBoolean(0.2), weightedBoolean(0.2)
        ]
    ];
    // console.log('Bass Matrix', randomMatrix);
    return randomMatrix;
};
const createRandomDrumMatrix = () => {
    let randomMatrix = [
        [weightedBoolean(randomNumber()), weightedBoolean(randomNumber()), weightedBoolean(randomNumber()), weightedBoolean(randomNumber()),
            weightedBoolean(randomNumber()), weightedBoolean(randomNumber()), weightedBoolean(randomNumber()), weightedBoolean(randomNumber()),
            weightedBoolean(randomNumber()), weightedBoolean(randomNumber()), weightedBoolean(randomNumber()), weightedBoolean(randomNumber()),
            weightedBoolean(randomNumber()), weightedBoolean(randomNumber()), weightedBoolean(randomNumber()), weightedBoolean(randomNumber())
        ],
        [weightedBoolean(randomNumber()), weightedBoolean(randomNumber()), weightedBoolean(randomNumber()), weightedBoolean(randomNumber()),
            weightedBoolean(randomNumber()), weightedBoolean(randomNumber()), weightedBoolean(randomNumber()), weightedBoolean(randomNumber()),
            weightedBoolean(randomNumber()), weightedBoolean(randomNumber()), weightedBoolean(randomNumber()), weightedBoolean(randomNumber()),
            weightedBoolean(randomNumber()), weightedBoolean(randomNumber()), weightedBoolean(randomNumber()), weightedBoolean(randomNumber())
        ],
        [weightedBoolean(randomNumber()), weightedBoolean(randomNumber()), weightedBoolean(randomNumber()), weightedBoolean(randomNumber()),
            weightedBoolean(randomNumber()), weightedBoolean(randomNumber()), weightedBoolean(randomNumber()), weightedBoolean(randomNumber()),
            weightedBoolean(randomNumber()), weightedBoolean(randomNumber()), weightedBoolean(randomNumber()), weightedBoolean(randomNumber()),
            weightedBoolean(randomNumber()), weightedBoolean(randomNumber()), weightedBoolean(randomNumber()), weightedBoolean(randomNumber())
        ],
        [weightedBoolean(randomNumber()), weightedBoolean(randomNumber()), weightedBoolean(randomNumber()), weightedBoolean(randomNumber()),
            weightedBoolean(randomNumber()), weightedBoolean(randomNumber()), weightedBoolean(randomNumber()), weightedBoolean(randomNumber()),
            weightedBoolean(randomNumber()), weightedBoolean(randomNumber()), weightedBoolean(randomNumber()), weightedBoolean(randomNumber()),
            weightedBoolean(randomNumber()), weightedBoolean(randomNumber()), weightedBoolean(randomNumber()), weightedBoolean(randomNumber())
        ],
        [weightedBoolean(0.1), weightedBoolean(0.1), weightedBoolean(0.1), weightedBoolean(0.1),
            weightedBoolean(0.1), weightedBoolean(0.1), weightedBoolean(0.1), weightedBoolean(0.1),
            weightedBoolean(0.1), weightedBoolean(0.1), weightedBoolean(0.1), weightedBoolean(0.1),
            weightedBoolean(0.1), weightedBoolean(0.1), weightedBoolean(0.1), weightedBoolean(0.1)
        ]
    ];
    // console.log('Bass Matrix', randomMatrix);
    return randomMatrix;
};
const randomBoolean = () => {
    let number = Math.random();
    if (number < 0.5) {
        return true;
    } else {
        return false;
    }
};
const weightedBoolean = (weight) => {
    let number = Math.random();
    if (number < weight) {
        return true;
    } else {
        return false;
    }
};

const randomNumber = () => {
    let number = Math.random();
    return number;
};
const randomTempo = () => {
    let newTempo = Math.floor(Math.random() * (130 - 80 + 1) + 80);
    return newTempo;
};
const randomMinMax = (min, max) => {
    let newNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return newNumber;
};

let randomSaxMatrix = () => {
    let saxMatrix = [
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, 
            false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, 
            false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, 
            false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false,
            false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    ];
    let num = randomMinMax(0, 28);
    for (let i = 0; i < 32; i++) {
        let space = randomNumber();
        let stepNum = num + randomMinMax(1, 3 ) - randomMinMax(1, 4);
        if (stepNum > 28) {
            stepNum = 28;
        }
        if (stepNum < 0) {
            stepNum = 0;
        }
        if (space < 0.7) {
            saxMatrix[stepNum][i] = true;
        } else {
            saxMatrix[stepNum][i] = false;
        }
    }
    return saxMatrix;
};