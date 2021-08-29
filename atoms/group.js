import { atom } from 'jotai'

export const GROUP = [
  { label: '모든 조', value: 0 },
  { label: '1조', value: 1 },
  { label: '2조', value: 2 },
  { label: '3조', value: 3 },
  { label: '4조', value: 4 },
  { label: '5조', value: 5 },
]

export const GROUP_LABEL = {
  0: '모든 조',
  1: '1조',
  2: '2조',
  3: '3조',
  4: '4조',
  5: '5조',
}

const defaultValue = GROUP[0].value

export const groupAtom = atom(defaultValue)
