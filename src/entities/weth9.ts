import { Token } from './token'

const decimals = 18

const ethSymbol = 'WETH'
const ethName = 'Wrapped Ether'

/**
 * Known WETH implementation addresses, used in our implementation of Ether#wrapped
 */
export const WETH: { [chainId: number]: Token } = {
  [1]: new Token(1, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', decimals, ethSymbol, ethName),
  [1101]: new Token(1101, '0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9', decimals, ethSymbol, ethName),
  [8453]: new Token(8453, '0x4200000000000000000000000000000000000006', decimals, ethSymbol, ethName),
  [42161]: new Token(42161, '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', decimals, ethSymbol, ethName)
}
