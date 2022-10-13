const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  chain: [],
  getLength() {
    let length = this.chain.length
    return length
  },
  addLink(value) {
    if (value === undefined) { value = ' ' }
    const pattern = '~( ' + value + ' )~'
    this.chain.push(pattern)
    return this
  },
  removeLink(position) {
    let length = this.chain.length
    if (position - 1 >= length || position <= 0 || typeof position !== 'number' || position % 1 !== 0) {
      this.chain = []
      throw new Error(`You can't remove incorrect link!`)
    } else {
      this.chain.splice(position - 1, 1)
      return this
    }
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let chain = this.chain.join('')
    this.chain = []
    return chain.slice(1, chain.length - 1)
  }
};

module.exports = {
  chainMaker
};
