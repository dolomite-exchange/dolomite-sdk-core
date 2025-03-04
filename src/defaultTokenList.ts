import { TokenInfo, TokenList } from '@uniswap/token-lists'
import {
  ARBITRUM_CHAIN_ID,
  BASE_CHAIN_ID,
  BERACHAIN_CHAIN_ID,
  MANTLE_CHAIN_ID,
  POLYGON_ZKEVM_CHAIN_ID,
  X_LAYER_CHAIN_ID
} from './constants'

const DAI = 'DAI'
const LINK = 'LINK'
const USDC = 'USDC'
const USDCE = 'USDC.E'
const WBERA = 'WBERA'
const WBTC = 'WBTC'
const WETH = 'WETH'
const MATIC = 'MATIC'
const WMATIC = 'WMATIC'

const logos = {
  [DAI]:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
  [LINK]:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png',
  [MATIC]:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png',
  [USDC]:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
  [WBERA]:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/berachain/assets/0x6969696969696969696969696969696969696969/logo.png',
  [WBTC]:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
  [WETH]:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  [WMATIC]:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png'
}

const names = {
  [DAI]: 'Dai Stablecoin',
  [LINK]: 'Chainlink Token',
  [USDC]: 'USD Coin',
  [WBERA]: 'Wrapped Bera',
  [WBTC]: 'Wrapped BTC',
  [WETH]: 'Wrapped Ether',
  [WMATIC]: 'Wrapped Matic'
}

class TokenWithURI {
  public chainId: number
  public address: string
  public decimals: number
  public symbol: string
  public name: string
  public logoURI?: string

  constructor(chainId: number, address: string, decimals: number, symbol: string, name: string, logoURI?: string) {
    this.chainId = chainId
    this.address = address
    this.decimals = decimals
    this.symbol = symbol
    this.name = name
    this.logoURI = logoURI
  }

  public get toTokenInfo(): TokenInfo {
    return {
      name: this.name,
      address: this.address,
      symbol: this.symbol,
      decimals: this.decimals,
      chainId: this.chainId,
      logoURI: this.logoURI
    }
  }
}

const tokens: TokenWithURI[] = [
  new TokenWithURI(1, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, WETH, names[WETH], logos[WETH]),
  new TokenWithURI(1, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, USDC, names[USDC], logos[USDC]),
  // Arbitrum
  new TokenWithURI(ARBITRUM_CHAIN_ID, '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', 18, WETH, names[WETH], logos[WETH]),
  new TokenWithURI(ARBITRUM_CHAIN_ID, '0xaf88d065e77c8cC2239327C5EDb3A432268e5831', 6, USDC, names[USDC], logos[USDC]),
  // Base
  new TokenWithURI(BASE_CHAIN_ID, '0x4200000000000000000000000000000000000006', 18, WETH, names[WETH], logos[WETH]),
  new TokenWithURI(BASE_CHAIN_ID, '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913', 6, USDC, names[USDC], logos[USDC]),
  // Berachain
  new TokenWithURI(
    BERACHAIN_CHAIN_ID,
    '0x6969696969696969696969696969696969696969',
    18,
    WBERA,
    names[WBERA],
    logos[WBERA]
  ),
  new TokenWithURI(
    BERACHAIN_CHAIN_ID,
    '0x2F6F07CDcf3588944Bf4C42aC74ff24bF56e7590',
    18,
    WETH,
    names[WETH],
    logos[WETH]
  ),
  new TokenWithURI(BERACHAIN_CHAIN_ID, '0x549943e04f40284185054145c6E4e9568C1D3241', 6, USDC, names[USDC], logos[USDC]),
  // Mantle
  new TokenWithURI(MANTLE_CHAIN_ID, '0xdEAddEaDdeadDEadDEADDEAddEADDEAddead1111', 18, WETH, names[WETH], logos[WETH]),
  new TokenWithURI(MANTLE_CHAIN_ID, '0x09Bc4E0D864854c6aFB6eB9A9cdF58aC190D0dF9', 6, USDC, names[USDC], logos[USDC]),
  // Polygon zkEVM
  new TokenWithURI(
    POLYGON_ZKEVM_CHAIN_ID,
    '0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9',
    18,
    WETH,
    names[WETH],
    logos[WETH]
  ),
  new TokenWithURI(
    POLYGON_ZKEVM_CHAIN_ID,
    '0x37eAA0eF3549a5Bb7D431be78a3D99BD360d19e5',
    6,
    USDCE,
    names[USDC],
    logos[USDC]
  ),
  // X Layer
  new TokenWithURI(X_LAYER_CHAIN_ID, '0x5A77f1443D16ee5761d310e38b62f77f726bC71c', 18, WETH, names[WETH], logos[WETH]),
  new TokenWithURI(X_LAYER_CHAIN_ID, '0x74b7F16337b8972027F6196A17a631aC6dE26d22', 6, USDC, names[USDC], logos[USDC])
]

export const TOKEN_LIST: TokenList = {
  name: 'Dolomite Default List',
  timestamp: '2022-10-04T00:00:00.000Z',
  version: {
    major: 1,
    minor: 0,
    patch: 0
  },
  tags: {},
  logoURI: 'ipfs://QmTviJ8WGhVAKvBtth557yzd2GeydAVvaBdfvTE1u5sATY',
  keywords: ['dolomite', 'default'],
  tokens: tokens.map(token => token.toTokenInfo)
}
