import { describe, it, expect } from 'vitest'
import { canReconfigure } from '../src/can-reconfigure'

describe('canReconfigure', () => {
  // it('should be a function', () => {
  //   expect(canReconfigure).toBeTypeOf('function')
  // })
  // it('Should throw an error if first parameter is missing', () => {
  //   expect(() => canReconfigure()).toThrow()
  // })
  it('Should throw an error if first parameter is not a string', () => {
    expect(() => canReconfigure(2)).toThrow()
  })
  it('Should throw an error if second parameter is not a string', () => {
    expect(() => canReconfigure('a')).toThrow()
  })
  it('should return a boolean', () => {
    expect(canReconfigure('a', 'b')).toBeTypeOf('boolean')
  })
  it('should return false if strings provided have different length', () => {
    expect(canReconfigure('aab', 'ab')).toBe(false)
  })
  it('should return false if strings provided have different number of unique letters', () => {
    expect(canReconfigure('abc', 'ddd')).toBe(false)
  })
  it('should return false if strings has different order of transformation', () => {
    expect(canReconfigure('XBOX', 'XXBO')).toBe(false)
  })
})
