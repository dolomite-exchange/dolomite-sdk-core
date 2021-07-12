import invariant from 'tiny-invariant'
import { Currency } from './currency'
import { NativeCurrency } from './nativeCurrency'
import { Token } from './token'
import { WETH } from './weth9'
import {WMATIC} from "./wmatic";
import {MATIC_CHAIN_ID, MUMBAI_CHAIN_ID} from "../constants";

/**
 * Ether is the main usage of a 'native' currency, i.e. for Ethereum mainnet and all testnets
 */
export class Ether extends NativeCurrency {
  protected constructor(chainId: number) {
    super(chainId, 18, 'ETH', 'Ether')
  }

  public get wrapped(): Token {
    const wrappedToken = (this.chainId === MATIC_CHAIN_ID || this.chainId === MUMBAI_CHAIN_ID) ? WMATIC[this.chainId] : WETH[this.chainId]
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
