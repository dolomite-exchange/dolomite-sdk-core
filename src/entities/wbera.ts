import { BERACHAIN_BARTIO_CHAIN_ID, BERACHAIN_CHAIN_ID } from '../constants'
import { Token } from './token'

const decimals = 18
const symbol = 'WBERA'
const name = 'Wrapped Bera'

/**
 * Known WBERA implementation addresses, used in our implementation of Ether#wrapped
 */
export const WBERA: { [chainId: number]: Token } = {
  [BERACHAIN_CHAIN_ID]: new Token(
    BERACHAIN_CHAIN_ID,
    '0x6969696969696969696969696969696969696969',
    decimals,
    symbol,
    name
  ),
  [BERACHAIN_BARTIO_CHAIN_ID]: new Token(
    BERACHAIN_BARTIO_CHAIN_ID,
    '0x7507c1dc16935B82698e4C63f2746A2fCf994dF8',
    decimals,
    symbol,
    name
  )
}
