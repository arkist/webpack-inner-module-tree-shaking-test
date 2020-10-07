import { add, remove } from 'lodash-es'

export const wrappedAdd = () => {
    console.log('wrappedAdd')
    return add
}

export const wrappedRemove = () => {
    console.log('wrappedRemove')
    return remove
}