import {Token} from "./entities";

// [USDC, WBTC, ETH, DAI, LINK, LRC]
const DAI = 'DAI'
// const ETH = 'ETH'
const LINK = 'LINK'
const USDC = 'USDC'
const WBTC = 'WBTC'

const logos = {
    [DAI]: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x6B175474E89094C44Da98b954EedeAC495271d0F/logo.png',
    [LINK]: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x514910771AF9Ca656af840dff83E8264EcF986CA/logo.png',
    [USDC]: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48/logo.png',
    [WBTC]: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599/logo.png',
}

class TokenWithURI extends Token {
    public logoURI?: string
    constructor(chainId: number, address: string, decimals: number, symbol?: string, name?: string, logoURI?: string) {
        super(chainId, address, decimals, symbol, name)
        this.logoURI = logoURI
    }
    public static toString(token: TokenWithURI): string {
        return JSON.stringify({
            name: token.name,
            address: token.address,
            symbol: token.symbol,
            decimals: token.decimals,
            chainId: token.chainId,
            logoURI: token.logoURI,
        })
    }
}

const tokens: TokenWithURI[] = [
    new TokenWithURI(1, '0xaD6D458402F60fD3Bd25163575031ACDce07538D', 18, DAI, 'Dai Stablecoin', logos[DAI]),
    new TokenWithURI(1, '0x514910771AF9Ca656af840dff83E8264EcF986CA', 18, LINK, 'Chainlink Token', logos[LINK]),
    new TokenWithURI(1, '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48', 6, USDC, 'USDCoin', logos[USDC]),
    new TokenWithURI(1, '0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599', 8, WBTC, 'Wrapped BTC', logos[WBTC]),
]

const TOKEN_LIST = {
    "name": "Dolomite Default List",
    "timestamp": "2021-06-17T16:28:10.982Z",
    "version": {
        "major": 0,
        "minor": 1,
        "patch": 0
    },
    "tags": {},
    "logoURI": "ipfs://QmTviJ8WGhVAKvBtth557yzd2GeydAVvaBdfvTE1u5sATY",
    "keywords": [
        "dolomite",
        "default"
    ],
    tokens: JSON.stringify(tokens.map(TokenWithURI.toString))
}

export { TOKEN_LIST }
