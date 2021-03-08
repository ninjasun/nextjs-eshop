import { reduce, add, map, pipe } from 'ramda'
const getValue = obj => {
  let arr = []
  for (let id in obj) {
    arr.push(obj[id])
  }
  return arr
}

const getTotalItems = pipe(
  getValue,
  map(x => {
    return x.quantity
  }),
  reduce(add, 0)
)

const getTotalCost = pipe(
  getValue,
  map(x => {
    return x.price * x.quantity
  }),
  reduce(add, 0)
)

export { getValue, getTotalItems, getTotalCost }
