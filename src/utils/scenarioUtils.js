const groups = require('../scenarios/groups');
const preFlop = require('../scenarios/pre-flop');

function getRandomScenario(args) {
  let action = args.action ? args.action : randomObjectKey(preFlop);
  let position = args.position ? args.position : randomObjectKey(preFlop.Raise);
  let leadUp = args.leadUp ? args.leadUp : randomObjectKey(preFlop.Raise.Early);
  return 
}

function randomObjectKey(obj) {
  let idx = randomIntFromInterval(0, Object.keys(obj).length - 1);
  return Object.keys(obj)[idx];
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.dir(getRandomScenario(), {depth: 5});
