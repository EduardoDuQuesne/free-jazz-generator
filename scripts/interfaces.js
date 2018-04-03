/*jshint esversion: 6 */

const Nexus = require('nexusui');

module.exports.playButton = new Nexus.TextButton('#play', {
    'size': [150, 50],
    'state': false,
    'text': 'Play',
    'alternate': false
});

module.exports.stopButton = new Nexus.TextButton('#stop', {
    'size': [150, 50],
    'state': false,
    'text': 'Stop',
    'alternate': false
});

module.exports.tempoKnob = new Nexus.Number('#tempo', {
    'size': [60, 30],
    'value': 120,
    'min': 80,
    'max': 200,
    'step': 1
});

module.exports.drumSequencer = new Nexus.Sequencer('#drum-sequencer', {
    'size': [400, 200],
    'mode': 'toggle',
    'rows': 5,
    'columns': 16
});

module.exports.bassSequencer = new Nexus.Sequencer('#bass-sequencer', {
    'size': [800, 1000],
    'mode': 'toggle',
    'rows': 32,
    'columns': 32
});

module.exports.saxSequencer = new Nexus.Sequencer('#sax-sequencer', {
    'size': [800, 1000],
    'mode': 'toggle',
    'rows': 29,
    'columns': 32
});
