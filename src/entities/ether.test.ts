import { Ether } from './ether'

describe('Ether', () => {
  it('static constructor uses cache', () => {
    expect(Ether.onChain(1) === Ether.onChain(1)).toEqual(true)
  })
  it('caches once per chain ID', () => {
    expect(Ether.onChain(1) !== Ether.onChain(2)).toEqual(true)
  })
  it('#equals returns false for diff chains', () => {
    expect(Ether.onChain(1).equals(Ether.onChain(2))).toEqual(false)
  })
  it('#equals returns true for same chains', () => {
    expect(Ether.onChain(1).equals(Ether.onChain(1))).toEqual(true)
  })
  it('#equals BERA for Berachain', () => {
    expect(Ether.onChain(80094).symbol).toEqual('BERA')
  })
  it('#equals MNT for Mantle', () => {
    expect(Ether.onChain(5000).symbol).toEqual('MNT')
  })
  it('#equals BTC for Botanix', () => {
    expect(Ether.onChain(3637).symbol).toEqual('BTC')
  })
  it('#equals OKB for Mantle', () => {
    expect(Ether.onChain(196).symbol).toEqual('OKB')
  })
})
