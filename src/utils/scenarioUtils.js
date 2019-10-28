const groups = require('../scenarios/groups');
const preFlop = require('../scenarios/pre-flop');

function getRandomScenario(args) {
  return randomIntFromInterval(0, Object.keys(preFlop).length - 1);
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.dir(getRandomScenario(), {depth: 5});
