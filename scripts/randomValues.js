/*jshint esversion: 6 */

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

const randomDrumMatrix = () => {
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

const randomSaxMatrix = () => {
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


const randomBassMatrix = () => {
    let bassMatrix = [
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
    let num = randomMinMax(0, 26);
    for (let i = 0; i < 32; i++) {
        let space = randomNumber();
        let stepNum = num + randomMinMax(1, 3 ) - randomMinMax(1, 4);
        if (stepNum > 26) {
            stepNum = 26;
        }
        if (stepNum < 0) {
            stepNum = 0;
        }
        if (space < 0.5) {
            bassMatrix[stepNum][i] = true;
        } else {
            bassMatrix[stepNum][i] = false;
        }
    }
    return bassMatrix;
};

module.exports = { randomNumber, randomMinMax, randomDrumMatrix, randomSaxMatrix, randomBassMatrix, randomTempo, randomBoolean,  };
