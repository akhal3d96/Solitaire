export function randomBetween (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x)

export function sample (arr) {
  const randIndex = Math.floor(Math.random() * arr.length)
  return arr[randIndex]
}

/**
 * Randomize the order of the elements in a given array.
 * source: https://github.com/pazguille/shuffle-array/blob/master/dist/shuffle-array.js
 * @param {Array} arr - The given array.
 * @returns {Array}
 */
export function shuffle (arr) {
  if (!Array.isArray(arr)) {
    throw new Error('shuffle expect an array as parameter.')
  }

  const rng = Math.random
  const collection = arr.slice()

  let len = arr.length
  let random, temp

  while (len) {
    random = Math.floor(rng() * len)
    len -= 1
    temp = collection[len]
    collection[len] = collection[random]
    collection[random] = temp
  }

  return collection
}
