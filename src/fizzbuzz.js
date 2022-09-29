/*
Write a function that would do the following if you pass a number:
 -It should show "fizz" if the number is multiple of 3
 -It should show "buzz" if the number is multiple of 5
 -It should show "fizzbuzz" if the number is multiple of 3 and 5
 -It should show the number if not complies with any of the other conditions
*/

export const fizzbuzz = (number) => {
  if (typeof number !== 'number') throw new Error('The parameter must be a number')
  if (Number.isNaN(number)) throw new Error('The parameter provided must be a number')
  // if (number % 5 === 0 && number % 3 === 0) return 'fizzbuzz'
  // if (number % 3 === 0) return 'fizz'
  // if (number % 5 === 0) return 'buzz'
  const multiples = { 3: 'fizz', 5: 'buzz', 7: 'woff' }
  let output = ''

  Object
    .entries(multiples)
    .forEach(([multiplier, word]) => {
      if (number % multiplier === 0) output += word
    })
  return output === '' ? number : output
}
