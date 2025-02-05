import {
  ARBITRUM_CHAIN_ID,
  BASE_CHAIN_ID,
  BERACHAIN_BARTIO_CHAIN_ID,
  BERACHAIN_CHAIN_ID,
  MANTLE_CHAIN_ID,
  POLYGON_ZKEVM_CHAIN_ID,
  X_LAYER_CHAIN_ID
} from '../constants'
import { Token } from './token'
import { WBERA } from './wbera'
import { WETH } from './weth9'
import { WMNT } from './wmnt'
import { WOKB } from './wokb'

/**
 * Known Wrapped Currency implementation addresses, used in our implementation of Ether#wrapped
 */
export const WRAPPED_CURRENCY: { [chainId: number]: Token } = {
  [1]: WETH[1],
  [X_LAYER_CHAIN_ID]: WOKB[X_LAYER_CHAIN_ID],
  [POLYGON_ZKEVM_CHAIN_ID]: WETH[POLYGON_ZKEVM_CHAIN_ID],
  [MANTLE_CHAIN_ID]: WMNT[MANTLE_CHAIN_ID],
  [BASE_CHAIN_ID]: WETH[BASE_CHAIN_ID],
  [ARBITRUM_CHAIN_ID]: WETH[ARBITRUM_CHAIN_ID],
  [BERACHAIN_CHAIN_ID]: WBERA[BERACHAIN_CHAIN_ID],
  [BERACHAIN_BARTIO_CHAIN_ID]: WBERA[BERACHAIN_BARTIO_CHAIN_ID],
}
