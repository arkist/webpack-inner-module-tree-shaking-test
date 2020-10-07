import {add} from 'lodash-es'

export const wrappedAdd = () => {
    console.log('wrappedAdd')
    return add
}
