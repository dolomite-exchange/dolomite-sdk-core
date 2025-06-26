import { Token } from './token'
import { BOTANIX_CHAIN_ID } from '../constants'

const decimals = 18
const symbol = 'BTC'
const name = 'Bitcoin'

/**
 * Known WBTC implementation addresses, used in our implementation of Ether#wrapped
 */
export const PBTC: { [chainId: number]: Token } = {
  [BOTANIX_CHAIN_ID]: new Token(BOTANIX_CHAIN_ID, '0x0D2437F93Fed6EA64Ef01cCde385FB1263910C56', decimals, symbol, name)
}
