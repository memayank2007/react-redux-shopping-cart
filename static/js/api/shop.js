import _products from '../../../data/mock.json'

const TIMEOUT = 100

export default {
  getProducts: (cb, timeout) => setTimeout(() => cb(_products['catalog']), timeout || TIMEOUT),
  buyProducts: (payload, cb, timeout) => setTimeout(() => cb(), timeout || TIMEOUT)
}
