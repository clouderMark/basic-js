const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
 function createDreamTeam(members) {
  let dreamTeam;
    if (Array.isArray(members)) {
        dreamTeam = []
        for (let i = 0; i < members.length; i++) {
            if (typeof members[i] === 'string') {
            let member = members[i].trim()
            dreamTeam.push(member[0].toUpperCase())
            }
        }
        dreamTeam.sort()
        let result = '';
        for (let i = 0; i < dreamTeam.length; i++) {
            result += dreamTeam[i]
        }
        return result
    } else {
      return dreamTeam = false
    }
}

module.exports = {
  createDreamTeam
};
