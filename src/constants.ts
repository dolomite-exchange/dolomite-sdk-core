import JSBI from 'jsbi'

// exports for external consumption
export type BigintIsh = JSBI | string | number

export enum TradeType {
  EXACT_INPUT,
  EXACT_OUTPUT
}

export enum Rounding {
  ROUND_DOWN,
  ROUND_HALF_UP,
  ROUND_UP
}

export const MaxUint256 = JSBI.BigInt('0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff')

export const MATIC_CHAIN_ID = 137
export const MUMBAI_CHAIN_ID = 80001

export const ZERO = JSBI.BigInt('0')

export function isMaticChainId(chainId: number): boolean {
  return chainId === MATIC_CHAIN_ID || chainId === MUMBAI_CHAIN_ID
}
