import { Token } from './token'

const decimals = 18
const symbol = 'WOKB'
const name = 'Wrapped OKB'

/**
 * Known WOKB implementation addresses, used in our implementation of Ether#wrapped
 */
export const WOKB: { [chainId: number]: Token } = {
  [1]: new Token(1, '0x75231F58b43240C9718Dd58B4967c5114342a86c', decimals, 'OKB', 'OKB'),
  [196]: new Token(196, '0xe538905cf8410324e03A5A23C1c177a474D59b2b', decimals, symbol, name),
}
