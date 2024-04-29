import invariant from 'tiny-invariant'
import {
  CHAIN_ID_TO_SPECIAL_NAME_MAP,
  CHAIN_ID_TO_SPECIAL_SYMBOL_MAP,
  isMantle,
  isPolygon,
  isXLayer,
} from '../constants'
import { Currency } from './currency'
import { NativeCurrency } from './nativeCurrency'
import { Token } from './token'
import { WETH } from './weth9'
import { WMATIC } from './wmatic'
import { WMNT } from './wmnt'
import { WOKB } from './wokb'

/**
 * Ether is the main usage of a 'native' currency, i.e. for Ethereum mainnet and all testnets
 */
export class Ether extends NativeCurrency {
  private static _etherCache: { [chainId: number]: Ether } = {}

  protected constructor(chainId: number) {
    const symbol = CHAIN_ID_TO_SPECIAL_SYMBOL_MAP[chainId] ?? 'ETH'
    const name = CHAIN_ID_TO_SPECIAL_NAME_MAP[chainId] ?? 'Ether'
    super(chainId, 18, symbol, name)
  }

  public get wrapped(): Token {
    const wrappedToken = isPolygon(this.chainId)
      ? WMATIC[this.chainId]
      : isMantle(this.chainId)
        ? WMNT[this.chainId]
        : isXLayer(this.chainId)
          ? WOKB[this.chainId]
          : WETH[this.chainId]
    invariant(!!wrappedToken, 'WRAPPED')
    return wrappedToken
  }

  public static onChain(chainId: number): Ether {
    return this._etherCache[chainId] ?? (this._etherCache[chainId] = new Ether(chainId))
  }

  public equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }
}
