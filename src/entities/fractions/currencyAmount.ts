import invariant from 'tiny-invariant'
import JSBI from 'jsbi'
import { Currency } from '../currency'
import { Token } from '../token'
import { Fraction } from './fraction'
import _Big from 'big.js'

import toFormat from 'toformat'
import { BigintIsh, MaxUint256, Rounding, ZERO } from '../../constants'

const Big = toFormat(_Big)

export class CurrencyAmount<T extends Currency> extends Fraction {
  public readonly currency: T
  public readonly decimalScale: JSBI

  protected constructor(currency: T, numerator: BigintIsh, denominator?: BigintIsh) {
    super(numerator, denominator)
    invariant(JSBI.lessThanOrEqual(this.quotient, MaxUint256), 'AMOUNT')
    this.currency = currency
    this.decimalScale = JSBI.exponentiate(JSBI.BigInt(10), JSBI.BigInt(currency.decimals))
  }

  public get abs(): CurrencyAmount<T> {
    let _numerator = this.numerator
    if (JSBI.lessThan(this.numerator, ZERO)) {
      _numerator = JSBI.subtract(ZERO, _numerator)
    }
    let _denominator = this.denominator
    if (JSBI.lessThan(this.denominator, ZERO)) {
      _denominator = JSBI.subtract(ZERO, _denominator)
    }
    return new CurrencyAmount<T>(this.currency, _numerator, _denominator)
  }

  public get wrapped(): CurrencyAmount<Token> {
    if (this.currency.isToken) return this as CurrencyAmount<Token>
    return CurrencyAmount.fromFractionalAmount(this.currency.wrapped, this.numerator, this.denominator)
  }

  public get asFraction(): Fraction {
    return new Fraction(this.numerator, JSBI.multiply(this.denominator, this.decimalScale))
  }

  /**
   * Returns a new currency amount instance from the unitless amount of token, i.e. the raw amount
   * @param currency the currency in the amount
   * @param rawAmount the raw token or ether amount
   */
  public static fromRawAmount<T extends Currency>(currency: T, rawAmount: BigintIsh): CurrencyAmount<T> {
    return new CurrencyAmount(currency, rawAmount)
  }

  /**
   * Construct a currency amount with a denominator that is not equal to 1
   * @param currency the currency
   * @param numerator the numerator of the fractional token amount
   * @param denominator the denominator of the fractional token amount
   */
  public static fromFractionalAmount<T extends Currency>(
    currency: T,
    numerator: BigintIsh,
    denominator: BigintIsh
  ): CurrencyAmount<T> {
    return new CurrencyAmount(currency, numerator, denominator)
  }

  /**
   * @param currency The currency to be instantiated
   * @param splitFractionString A string formatted as `numerator/denominator`
   */
  public static fromSplitStringWithCurrency<T extends Currency>(
    currency: T,
    splitFractionString: string
  ): CurrencyAmount<T> {
    const split = splitFractionString.split('/')
    return new CurrencyAmount<T>(currency, split[0], split[1])
  }

  public invert(): CurrencyAmount<T> {
    return CurrencyAmount.fromFractionalAmount(this.currency, this.denominator, this.numerator)
  }

  public add(other: CurrencyAmount<T>): CurrencyAmount<T> {
    invariant(this.currency.equals(other.currency), 'CURRENCY')
    const added = super.add(other)
    return CurrencyAmount.fromFractionalAmount(this.currency, added.numerator, added.denominator)
  }

  public subtract(other: CurrencyAmount<T>): CurrencyAmount<T> {
    invariant(this.currency.equals(other.currency), 'CURRENCY')
    const subtracted = super.subtract(other)
    return CurrencyAmount.fromFractionalAmount(this.currency, subtracted.numerator, subtracted.denominator)
  }

  public multiply(other: Fraction | BigintIsh): CurrencyAmount<T> {
    const multiplied = super.multiply(other)
    return CurrencyAmount.fromFractionalAmount(this.currency, multiplied.numerator, multiplied.denominator)
  }

  public divide(other: Fraction | BigintIsh): CurrencyAmount<T> {
    const divided = super.divide(other)
    return CurrencyAmount.fromFractionalAmount(this.currency, divided.numerator, divided.denominator)
  }

  public toSignificant(
    significantDigits: number = 6,
    format?: object,
    rounding: Rounding = Rounding.ROUND_DOWN
  ): string {
    return super.divide(this.decimalScale).toSignificant(significantDigits, format, rounding)
  }

  public toFixed(
    decimalPlaces: number = this.currency.decimals,
    format?: object,
    rounding: Rounding = Rounding.ROUND_DOWN
  ): string {
    invariant(decimalPlaces <= this.currency.decimals, 'DECIMALS')
    return super.divide(this.decimalScale).toFixed(decimalPlaces, format, rounding)
  }

  public toExact(format: object = { groupSeparator: '' }): string {
    Big.DP = this.currency.decimals
    return new Big(this.quotient.toString()).div(this.decimalScale.toString()).toFormat(format)
  }
}
