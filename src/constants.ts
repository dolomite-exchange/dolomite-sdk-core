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

export const MANTLE_CHAIN_ID = 5000
export const MATIC_CHAIN_ID = 137
export const MUMBAI_CHAIN_ID = 80001
export const X_LAYER_CHAIN_ID = 196

export function isMantle(chainId: number): boolean {
  return chainId === MANTLE_CHAIN_ID
}

export function isPolygon(chainId: number): boolean {
  return chainId === MATIC_CHAIN_ID || chainId === MUMBAI_CHAIN_ID
}

export function isXLayer(chainId: number): boolean {
  return chainId === X_LAYER_CHAIN_ID
}

export const ZERO = JSBI.BigInt('0')

export const CHAIN_ID_TO_SPECIAL_SYMBOL_MAP: Record<string, string | undefined> = {
  [MANTLE_CHAIN_ID]: 'MNT',
  [MATIC_CHAIN_ID]: 'MATIC',
  [MUMBAI_CHAIN_ID]: 'MATIC',
  [X_LAYER_CHAIN_ID]: 'OKB',
}

export const CHAIN_ID_TO_SPECIAL_NAME_MAP: Record<string, string | undefined> = {
  [MANTLE_CHAIN_ID]: 'Mantle',
  [MATIC_CHAIN_ID]: 'Polygon',
  [MUMBAI_CHAIN_ID]: 'Polygon',
  [X_LAYER_CHAIN_ID]: 'OKB',
}
