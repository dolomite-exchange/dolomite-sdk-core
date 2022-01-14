import invariant from 'tiny-invariant'
import { Currency } from './currency'
import { NativeCurrency } from './nativeCurrency'
import { Token } from './token'
import { WETH } from './weth9'
import { WMATIC } from './wmatic'
import {
  isMaticChainId,
} from '../constants'

/**
 * Ether is the main usage of a 'native' currency, i.e. for Ethereum mainnet and all testnets
 */
export class Ether extends NativeCurrency {
  protected constructor(chainId: number) {
    const symbol = isMaticChainId(chainId) ? 'MATIC' : 'ETH';
    const name = isMaticChainId(chainId) ? 'Polygon' : 'Ether';
    super(chainId, 18, symbol, name)
  }

  public get wrapped(): Token {
    const wrappedToken = isMaticChainId(this.chainId)? WMATIC[this.chainId] : WETH[this.chainId]
    invariant(!!wrappedToken, 'WRAPPED')
    return wrappedToken
  }

  private static _etherCache: { [chainId: number]: Ether } = {}

  public static onChain(chainId: number): Ether {
    return this._etherCache[chainId] ?? (this._etherCache[chainId] = new Ether(chainId))
  }

  public equals(other: Currency): boolean {
    return other.isNative && other.chainId === this.chainId
  }
}
