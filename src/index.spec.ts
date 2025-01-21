import { describe, expect, it } from '@jest/globals'

describe('example test', () => {
    it('adds 1 + 2 to equal 3', () => {
        expect.assertions(1)
        expect(1 + 2).toBe(3)
    })
})
