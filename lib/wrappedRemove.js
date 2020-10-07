import {remove} from 'lodash-es'

export const wrappedRemove = () => {
    console.log('wrappedRemove')
    return remove
}