import JSBI from 'jsbi'
import invariant from 'tiny-invariant'
import _Decimal from 'decimal.js-light'
import _Big, { RoundingMode } from 'big.js'
import toFormat from 'toformat'

import { BigintIsh, Rounding, ZERO } from '../../constants'

const Decimal = toFormat(_Decimal)
const Big = toFormat(_Big)

const toSignificantRounding = {
  [Rounding.ROUND_DOWN]: Decimal.ROUND_DOWN,
  [Rounding.ROUND_HALF_UP]: Decimal.ROUND_HALF_UP,
  [Rounding.ROUND_UP]: Decimal.ROUND_UP
}

const toFixedRounding = {
  [Rounding.ROUND_DOWN]: RoundingMode.RoundDown,
  [Rounding.ROUND_HALF_UP]: RoundingMode.RoundHalfUp,
  [Rounding.ROUND_UP]: RoundingMode.RoundUp
}

export class Fraction {
  public readonly numerator: JSBI
  public readonly denominator: JSBI

  public constructor(numerator: BigintIsh, denominator: BigintIsh = JSBI.BigInt(1)) {
    this.numerator = JSBI.BigInt(numerator)
    this.denominator = JSBI.BigInt(denominator)
  }

  private static tryParseFraction(fractionish: BigintIsh | Fraction): Fraction {
    if (fractionish instanceof JSBI || typeof fractionish === 'number' || typeof fractionish === 'string')
      return new Fraction(fractionish)

    if ('numerator' in fractionish && 'denominator' in fractionish) return fractionish
    throw new Error('Could not parse fraction')
  }

  private static isNegative(fraction: Fraction): boolean {
    return (
      (JSBI.lessThan(fraction.denominator, ZERO) && !JSBI.lessThan(fraction.numerator, ZERO)) ||
      (!JSBI.lessThan(fraction.denominator, ZERO) && JSBI.lessThan(fraction.numerator, ZERO))
    )
  }

  public toString(): string {
    return `${this.numerator.toString()}/${this.denominator.toString()}`
  }

  public get abs(): Fraction {
    let _numerator = this.numerator
    if (JSBI.lessThan(this.numerator, ZERO)) {
      _numerator = JSBI.subtract(ZERO, _numerator)
    }
    let _denominator = this.denominator
    if (JSBI.lessThan(this.denominator, ZERO)) {
      _denominator = JSBI.subtract(ZERO, _denominator)
    }
    return new Fraction(_numerator, _denominator)
  }

  // performs floor division
  public get quotient(): JSBI {
    return JSBI.divide(this.numerator, this.denominator)
  }

  // remainder after floor division
  public get remainder(): Fraction {
    return new Fraction(JSBI.remainder(this.numerator, this.denominator), this.denominator)
  }

  public invert(): Fraction {
    return new Fraction(this.denominator, this.numerator)
  }

  public add(other: Fraction | BigintIsh): Fraction {
    const otherParsed = Fraction.tryParseFraction(other)
    if (JSBI.equal(this.denominator, otherParsed.denominator)) {
      return new Fraction(JSBI.add(this.numerator, otherParsed.numerator), this.denominator)
    }
    return new Fraction(
      JSBI.add(
        JSBI.multiply(this.numerator, otherParsed.denominator),
        JSBI.multiply(otherParsed.numerator, this.denominator)
      ),
      JSBI.multiply(this.denominator, otherParsed.denominator)
    )
  }

  public subtract(other: Fraction | BigintIsh): Fraction {
    const otherParsed = Fraction.tryParseFraction(other)
    if (JSBI.equal(this.denominator, otherParsed.denominator)) {
      return new Fraction(JSBI.subtract(this.numerator, otherParsed.numerator), this.denominator)
    }
    return new Fraction(
      JSBI.subtract(
        JSBI.multiply(this.numerator, otherParsed.denominator),
        JSBI.multiply(otherParsed.numerator, this.denominator)
      ),
      JSBI.multiply(this.denominator, otherParsed.denominator)
    )
  }

  public lessThan(other: Fraction | BigintIsh): boolean {
    const otherParsed = Fraction.tryParseFraction(other)
    if (Fraction.isNegative(otherParsed) && !Fraction.isNegative(this)) {
      return false
    } else if (!Fraction.isNegative(otherParsed) && Fraction.isNegative(this)) {
      return true
    }

    const bothNegative = Fraction.isNegative(this) && Fraction.isNegative(otherParsed)
    const otherAbs = otherParsed.abs
    const thisAbs = this.abs

    if (bothNegative) {
      return !JSBI.lessThan(
        JSBI.multiply(thisAbs.numerator, otherAbs.denominator),
        JSBI.multiply(otherAbs.numerator, thisAbs.denominator)
      )
    } else {
      return JSBI.lessThan(
        JSBI.multiply(thisAbs.numerator, otherAbs.denominator),
        JSBI.multiply(otherAbs.numerator, thisAbs.denominator)
      )
    }
  }

  public lessThanOrEqual(other: Fraction | BigintIsh): boolean {
    const otherParsed = Fraction.tryParseFraction(other)
    if (Fraction.isNegative(otherParsed) && !Fraction.isNegative(this)) {
      return false
    } else if (!Fraction.isNegative(otherParsed) && Fraction.isNegative(this)) {
      return true
    }

    const bothNegative = Fraction.isNegative(otherParsed) && Fraction.isNegative(this)
    const otherAbs = otherParsed.abs
    const thisAbs = this.abs

    if (bothNegative) {
      return !JSBI.lessThanOrEqual(
        JSBI.multiply(thisAbs.numerator, otherAbs.denominator),
        JSBI.multiply(otherAbs.numerator, thisAbs.denominator)
      )
    } else {
      return JSBI.lessThanOrEqual(
        JSBI.multiply(thisAbs.numerator, otherAbs.denominator),
        JSBI.multiply(otherAbs.numerator, thisAbs.denominator)
      )
    }
  }

  public equalTo(other: Fraction | BigintIsh): boolean {
    const otherParsed = Fraction.tryParseFraction(other)
    return JSBI.equal(
      JSBI.multiply(this.numerator, otherParsed.denominator),
      JSBI.multiply(otherParsed.numerator, this.denominator)
    )
  }

  public greaterThan(other: Fraction | BigintIsh): boolean {
    const otherParsed = Fraction.tryParseFraction(other)
    if (Fraction.isNegative(otherParsed) && !Fraction.isNegative(this)) {
      return true
    } else if (!Fraction.isNegative(otherParsed) && Fraction.isNegative(this)) {
      return false
    }

    const bothNegative = Fraction.isNegative(otherParsed) && Fraction.isNegative(this)
    const otherAbs = otherParsed.abs
    const thisAbs = this.abs

    if (bothNegative) {
      return !JSBI.greaterThan(
        JSBI.multiply(thisAbs.numerator, otherAbs.denominator),
        JSBI.multiply(otherAbs.numerator, thisAbs.denominator)
      )
    } else {
      return JSBI.greaterThan(
        JSBI.multiply(thisAbs.numerator, otherAbs.denominator),
        JSBI.multiply(otherAbs.numerator, thisAbs.denominator)
      )
    }
  }

  public greaterThanOrEqual(other: Fraction | BigintIsh): boolean {
    const otherParsed = Fraction.tryParseFraction(other)
    if (Fraction.isNegative(otherParsed) && !Fraction.isNegative(this)) {
      return true
    } else if (!Fraction.isNegative(otherParsed) && Fraction.isNegative(this)) {
      return false
    }

    const bothNegative = Fraction.isNegative(otherParsed) && Fraction.isNegative(this)
    const otherAbs = otherParsed.abs
    const thisAbs = this.abs

    if (bothNegative) {
      return !JSBI.greaterThanOrEqual(
        JSBI.multiply(thisAbs.numerator, otherAbs.denominator),
        JSBI.multiply(otherAbs.numerator, thisAbs.denominator)
      )
    } else {
      return JSBI.greaterThanOrEqual(
        JSBI.multiply(thisAbs.numerator, otherAbs.denominator),
        JSBI.multiply(otherAbs.numerator, thisAbs.denominator)
      )
    }
  }

  public multiply(other: Fraction | BigintIsh): Fraction {
    const otherParsed = Fraction.tryParseFraction(other)
    return new Fraction(
      JSBI.multiply(this.numerator, otherParsed.numerator),
      JSBI.multiply(this.denominator, otherParsed.denominator)
    )
  }

  public divide(other: Fraction | BigintIsh): Fraction {
    const otherParsed = Fraction.tryParseFraction(other)
    return new Fraction(
      JSBI.multiply(this.numerator, otherParsed.denominator),
      JSBI.multiply(this.denominator, otherParsed.numerator)
    )
  }

  public toSignificant(
    significantDigits: number,
    format: object = { groupSeparator: '' },
    rounding: Rounding = Rounding.ROUND_HALF_UP
  ): string {
    invariant(Number.isInteger(significantDigits), `${significantDigits} is not an integer.`)
    invariant(significantDigits > 0, `${significantDigits} is not positive.`)

    Decimal.set({ precision: significantDigits + 1, rounding: toSignificantRounding[rounding] })
    const quotient = new Decimal(this.numerator.toString())
      .div(this.denominator.toString())
      .toSignificantDigits(significantDigits)
    return quotient.toFormat(quotient.decimalPlaces(), format)
  }

  public toFixed(
    decimalPlaces: number,
    format: object = { groupSeparator: '' },
    rounding: Rounding = Rounding.ROUND_HALF_UP
  ): string {
    invariant(Number.isInteger(decimalPlaces), `${decimalPlaces} is not an integer.`)
    invariant(decimalPlaces >= 0, `${decimalPlaces} is negative.`)

    Big.DP = decimalPlaces
    Big.RM = toFixedRounding[rounding]
    return new Big(this.numerator.toString()).div(this.denominator.toString()).toFormat(decimalPlaces, format)
  }

  /**
   * Helper method for converting any super class back to a fraction
   */
  public get asFraction(): Fraction {
    return new Fraction(this.numerator, this.denominator)
  }
}
