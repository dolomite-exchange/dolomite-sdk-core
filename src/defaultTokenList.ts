import { TokenInfo, TokenList } from '@uniswap/token-lists'

const DAI = 'DAI'
const LINK = 'LINK'
const USDC = 'USDC'
const WBTC = 'WBTC'
const WETH = 'WETH'
const MATIC = 'MATIC'
const WMATIC = 'MATIC'

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
  new TokenWithURI(1, '0x6B175474E89094C44Da98b954EedeAC495271d0F', 18, DAI, 'Dai Stablecoin', logos[DAI]),
  new TokenWithURI(1, '0x514910771AF9Ca656af840dff83E8264EcF986CA', 18, LINK, 'Chainlink Token', logos[LINK]),
  new TokenWithURI(1, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, USDC, 'USDCoin', logos[USDC]),
  new TokenWithURI(1, '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', 8, WBTC, 'Wrapped BTC', logos[WBTC]),
  new TokenWithURI(1, '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2', 18, WETH, 'Wrapped Ether', logos[WETH]),
  // Mumbai
  new TokenWithURI(80001, '0x8ac8Ae0A208bEf466512Cd26142aC5A3DDb5B99E', 18, DAI, 'Dai Stablecoin', logos[DAI]),
  new TokenWithURI(80001, '0x326C977E6efc84E512bB9C30f76E30c160eD06FB', 18, LINK, 'Chainlink Token', logos[LINK]),
  new TokenWithURI(80001, '0xaDe692C9B8C36e6b04bCFD01f0E91c7EbeE0A160', 6, USDC, 'USDCoin', logos[USDC]),
  new TokenWithURI(80001, '0x49769b4755ea8B83A340c24eAeD9d887A4b61104', 8, WBTC, 'Wrapped BTC', logos[WBTC]),
  new TokenWithURI(80001, '0xa38eF095D071ebBAFeA5E7D1Ce02BE79fc376793', 18, WETH, 'Wrapped Ether', logos[WETH]),
  new TokenWithURI(80001, '0xBeE8c17b7449fa0cC54D857D774cE523A7A35d00', 18, WMATIC, 'Wrapped Matic', logos[MATIC]),
  // Arbitrum
]

export const TOKEN_LIST: TokenList = {
  name: 'Dolomite Default List',
  timestamp: '2021-06-17T16:28:10.982Z',
  version: {
    major: 0,
    minor: 1,
    patch: 0
  },
  tags: {},
  logoURI: 'ipfs://QmTviJ8WGhVAKvBtth557yzd2GeydAVvaBdfvTE1u5sATY',
  keywords: ['dolomite', 'default'],
  tokens: tokens.map(token => token.toTokenInfo)
}
