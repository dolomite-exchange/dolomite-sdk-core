import { TokenInfo, TokenList } from '@uniswap/token-lists'

const DAI = 'DAI'
const LINK = 'LINK'
const USDC = 'USDC'
const WBTC = 'WBTC'
const WETH = 'WETH'
const MATIC = 'MATIC'
const WMATIC = 'WMATIC'

const logos = {
  [DAI]:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
  [LINK]:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png',
  [USDC]:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
  [WBTC]:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
  [WETH]:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
  [MATIC]:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png',
  [WMATIC]:
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png'
}

const names = {
  [DAI]: 'Dai Stablecoin',
  [LINK]: 'Chainlink Token',
  [USDC]: 'USD Coin',
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
  // Polygon zkEVM
  new TokenWithURI(1101, '0x4F9A0e7FD2Bf6067db6994CF12E4495Df938E6e9', 18, WETH, names[WETH], logos[WETH]),
  new TokenWithURI(1101, '0xA8CE8aee21bC2A48a5EF670afCc9274C7bbbC035', 6, USDC, names[USDC], logos[USDC]),
  // Base
  new TokenWithURI(8453, '0x4200000000000000000000000000000000000006', 18, WETH, names[WETH], logos[WETH]),
  new TokenWithURI(8453, '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913', 6, USDC, names[USDC], logos[USDC]),
  // Arbitrum
  new TokenWithURI(42161, '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8', 6, 'USDC.e', 'Bridged USDC', logos[USDC]),
  new TokenWithURI(42161, '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', 18, WETH, names[WETH], logos[WETH])
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
