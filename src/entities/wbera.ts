import { Token } from './token'

const decimals = 18
const symbol = 'WMNT'
const name = 'Wrapped Mantle'

/**
 * Known WMNT implementation addresses, used in our implementation of Ether#wrapped
 */
export const WMNT: { [chainId: number]: Token } = {
  [1]: new Token(1, '0x3c3a81e81dc49A522A592e7622A7E711c06bf354', decimals, 'MNT', 'Mantle'),
  [5000]: new Token(5000, '0x78c1b0C915c4FAA5FffA6CAbf0219DA63d7f4cb8', decimals, symbol, name)
}
