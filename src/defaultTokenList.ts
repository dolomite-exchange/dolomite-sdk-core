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
    'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0/logo.png'
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
  new TokenWithURI(80001, '0xaDe692C9B8C36e6b04bCFD01f0E91c7EbeE0A160', 6, USDC, 'USDCoin', logos[USDC]),
  new TokenWithURI(80001, '0xa38eF095D071ebBAFeA5E7D1Ce02BE79fc376793', 18, WETH, 'Wrapped Ether', logos[WETH]),
  new TokenWithURI(80001, '0xBeE8c17b7449fa0cC54D857D774cE523A7A35d00', 18, WMATIC, 'Wrapped Matic', logos[MATIC]),
  // Arbitrum
  // new TokenWithURI(42161, '0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1', 18, DAI, 'Dai Stablecoin', logos[DAI]),
  new TokenWithURI(42161, '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8', 6, USDC, 'USDCoin', logos[USDC]),
  new TokenWithURI(42161, '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', 18, WETH, 'Wrapped Ether', logos[WETH]),
  // new TokenWithURI(42161, '0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f', 8, WBTC, 'Wrapped BTC', logos[WBTC]),
  // new TokenWithURI(42161, '0xf97f4df75117a78c1A5a0DBb814Af92458539FB4', 18, LINK, 'ChainLink Token', logos[LINK]),
  // Arbitrum Rinkeby
  new TokenWithURI(421611, '0x362eD516f2E8eEab895043AF976864126BdD9C7b', 18, DAI, 'Dai Stablecoin', logos[DAI]),
  new TokenWithURI(421611, '0xf5ba7ca17aF300F52112C4CC8A7AB1A0482e84D5', 6, USDC, 'USDCoin', logos[USDC]),
  new TokenWithURI(421611, '0x267dc5f342e139b5E407684e3A731aeaE8A71E3e', 18, WETH, 'Wrapped Ether', logos[WETH]),
  new TokenWithURI(421611, '0x48c40e8B9F45E199238e3131B232ADf12d88eA2C', 8, WBTC, 'Wrapped BTC', logos[WBTC]),
  new TokenWithURI(421611, '0x615fBe6372676474d9e6933d310469c9b68e9726', 18, LINK, 'ChainLink Token', logos[LINK]),
  // Arbitrum Goerli
  new TokenWithURI(421613, '0xE65A051E0ae02eB66a11c73B2BA14021B5aadAEE', 18, DAI, 'Dai Stablecoin', logos[DAI]),
  new TokenWithURI(421613, '0x7317eb743583250739862644cef74B982708eBB4', 6, USDC, 'USDCoin', logos[USDC]),
  new TokenWithURI(421613, '0xC033378c6eEa969C001CE9438973ca4d6460999a', 18, WETH, 'Wrapped Ether', logos[WETH]),
  new TokenWithURI(421613, '0x6fA07522F1dd8D8cb5b400c957418b4bD2C96F80', 8, WBTC, 'Wrapped BTC', logos[WBTC]),
  new TokenWithURI(421613, '0x2d3B3F17d6694d5AA643Cb89A82Ac9214a41536d', 18, LINK, 'ChainLink Token', logos[LINK])
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
