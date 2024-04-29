import { Token } from './token'
import { WETH } from './weth9';
import { WMNT } from './wmnt';
import { WOKB } from './wokb';

/**
 * Known Wrapped Currency implementation addresses, used in our implementation of Ether#wrapped
 */
export const WRAPPED_CURRENCY: { [chainId: number]: Token } = {
  [1]: WETH[1],
  [196]: WOKB[196],
  [1101]: WETH[1101],
  [5000]: WMNT[5000],
  [8453]: WETH[8453],
  [42161]: WETH[42161],
}
