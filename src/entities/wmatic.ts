import { Token } from './token'

const decimals = 18
const symbol = 'WMATIC'
const name = 'Wrapped Matic'

/**
 * Known WMATIC implementation addresses, used in our implementation of Ether#wrapped
 */
export const WMATIC: { [chainId: number]: Token } = {
    [1]: new Token(1, '0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0', decimals, symbol, name),
    [137]: new Token(137, '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270', decimals, symbol, name),
    [80001]: new Token(80001, '0xBeE8c17b7449fa0cC54D857D774cE523A7A35d00', decimals, symbol, name)
}
