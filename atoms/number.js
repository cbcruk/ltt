import { atom } from 'jotai'
import range from 'lodash/range'
import random from 'lodash/random'
import { groupAtom } from './group'

export const DIAL_NUMBER = range(10)

export const NUMBER = range(6)

export const numberAtom = atom({
  0: {},
  1: {},
  2: {},
  3: {},
  4: {},
  5: {},
})

function getRandomValue() {
  return range(6)
    .map(() => random(9))
    .reduce((prev, next, index) => {
      return {
        ...prev,
        [index]: next,
      }
    }, {})
}

export const writableNumberAtom = atom(
  (get) => get(numberAtom),
  (get, set, value) => {
    const group = get(groupAtom)

    if (value === 'RANDOM') {
      set(numberAtom, {
        ...get(numberAtom),
        [group]: getRandomValue(),
      })
      return
    }

    set(numberAtom, {
      ...get(numberAtom),
      [group]: {
        ...get(numberAtom)[group],
        ...value,
      },
    })
  }
)
