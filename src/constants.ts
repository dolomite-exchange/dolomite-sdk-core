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

export const ARBITRUM_CHAIN_ID = 42161
export const BASE_CHAIN_ID = 8453
export const BERACHAIN_CHAIN_ID = 80094
export const BOTANIX_CHAIN_ID = 3637
export const ETHEREUM_CHAIN_ID = 1
export const MANTLE_CHAIN_ID = 5000
export const POLYGON_ZKEVM_CHAIN_ID = 1101
export const X_LAYER_CHAIN_ID = 196

export function isBerachain(chainId: number): boolean {
  return chainId === BERACHAIN_CHAIN_ID
}

export function isBotanix(chainId: number): boolean {
  return chainId === BOTANIX_CHAIN_ID
}

export function isMantle(chainId: number): boolean {
  return chainId === MANTLE_CHAIN_ID
}

export function isXLayer(chainId: number): boolean {
  return chainId === X_LAYER_CHAIN_ID
}

export const ZERO = JSBI.BigInt('0')

export const CHAIN_ID_TO_SPECIAL_SYMBOL_MAP: Record<string, string | undefined> = {
  [BERACHAIN_CHAIN_ID]: 'BERA',
  [BOTANIX_CHAIN_ID]: 'BTC',
  [MANTLE_CHAIN_ID]: 'MNT',
  [X_LAYER_CHAIN_ID]: 'OKB'
}

export const CHAIN_ID_TO_SPECIAL_NAME_MAP: Record<string, string | undefined> = {
  [BERACHAIN_CHAIN_ID]: 'Bera',
  [BOTANIX_CHAIN_ID]: 'Bitcoin',
  [MANTLE_CHAIN_ID]: 'Mantle',
  [X_LAYER_CHAIN_ID]: 'OKB'
}
