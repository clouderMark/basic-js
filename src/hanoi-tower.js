const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi( disksNumber, turnsSpeed ) {
    let turns = (1 * 2) + 1
  if (disksNumber > 2) {
    for (let i = 0; i < disksNumber - 2; i++) {
      turns = turns * 2 + 1
    }
  }
  let seconds = Math.floor(turns * 3600 / turnsSpeed)
  return {
    turns: turns,
    seconds: seconds,
  }
}

module.exports = {
  calculateHanoi
};
