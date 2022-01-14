import { Token } from './token'

const decimals = 18
const symbol = 'WETH'
const name = 'Wrapped Ether'

const polygonSymbol = 'WMATIC'
const polygonName = 'Wrapped Matic'

/**
 * Known WETH implementation addresses, used in our implementation of Ether#wrapped
 */
export const WETH: { [chainId: number]: Token } = {
  [1]: new Token(1, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', decimals, symbol, name),
  [3]: new Token(3, '0xc778417E063141139Fce010982780140Aa0cD5Ab', decimals, symbol, name),
  [4]: new Token(4, '0xc778417E063141139Fce010982780140Aa0cD5Ab', decimals, symbol, name),
  [5]: new Token(5, '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6', decimals, symbol, name),
  [42]: new Token(42, '0xd0A1E359811322d97991E03f863a0C30C2cF029C', decimals, symbol, name),
  [137]: new Token(137, '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619', decimals, polygonSymbol, polygonName),
  [80001]: new Token(80001, '0xa38eF095D071ebBAFeA5E7D1Ce02BE79fc376793', decimals, polygonSymbol, polygonName)
  // [42161]: new Token(42161, '', decimals, symbol, name),
  // [421611]: new Token(421611, '', decimals, symbol, name)
}
