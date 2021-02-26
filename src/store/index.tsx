import { atom } from 'recoil'

export const valueState = atom({
    key: 'topPage/value',
    default: '',
})
export const countState = atom({
    key: 'topPage/count',
    default: 0,
})
