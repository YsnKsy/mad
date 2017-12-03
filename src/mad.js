// @flow
import includes from 'lodash.includes'

const VAL_ERROR: string = 'Please define a valid value'
const CURN_ERROR: string = 'Please define a valid morrocan currency'
const CENT: Array<string> = ['centimes', 'centime', 'santims', 'santims']
const DH: Array<string> = ['dirham', 'dirhem', 'dh', 'mad']
const RIAL: Array<string> =
  ['rials', 'riels', 'ryals', 'ryels', 'rial', 'riel', 'ryal', 'ryel']
const CENT_VAL: number = 1
const DH_VAL: number = CENT_VAL * 100
const RIAL_VAL: number = CENT_VAL * 5

const ALG: (a: number, b: number, c: number) => number =
  (a, b, c) => (a / b) * c

class Mad {
  fromValue: number
  fromCurrency: string
  mad: {
    centime: {
      alias: Array<string>,
      val: number,
    },
    dh: {
      alias: Array<string>,
      val: number,
    },
    rial: {
      alias: Array<string>,
      val: number,
    },
  }

  constructor(val: number, currency: string): void {
    this.mad = {
      centime: {
        alias: CENT,
        val: CENT_VAL,
      },
      dh: {
        alias: DH,
        val: DH_VAL,
      },
      rial: {
        alias: RIAL,
        val: RIAL_VAL,
      },
    }

    if (val === null || val === undefined || val === 0 ||
      !Number.isFinite(val)) {
      throw new ReferenceError(VAL_ERROR)
    }

    if (currency === null || currency === undefined) {
      throw new ReferenceError(CURN_ERROR)
    }

    this.fromValue = val
    this.fromCurrency = currency
  }

  test(): string {
    return `${this.fromValue} ${this.fromCurrency}`
  }

  // Convert to currency
  to(currency: string): number {
    if (currency === null || currency === undefined) {
      throw new ReferenceError(CURN_ERROR)
    }

    let result: number = 0

    // To Centime
    if (includes(this.mad.centime.alias, currency.toLocaleLowerCase())) {
      // From Centime
      result = includes(this.mad.centime.alias, this.fromCurrency)
        ? this.fromValue : 0

      // From Rial
      result = includes(this.mad.rial.alias, this.fromCurrency)
        ? ALG(this.mad.rial.val, this.mad.centime.val, this.fromValue)
        : 0

      // From Dirham
      result = includes(this.mad.dh.alias, this.fromCurrency)
        ? ALG(this.mad.dh.val, this.mad.centime.val, this.fromValue)
        : 0
    }

    // To Rial
    if (includes(this.mad.rial.alias, currency.toLocaleLowerCase())) {
      // From Centime
      result = includes(this.mad.centime.alias, this.fromCurrency) ?
        ALG(this.mad.centime.val, this.mad.rial.val, this.fromValue) :
        0

      // From Rial
      result = includes(this.mad.rial.alias, this.fromCurrency) ?
        this.fromValue :
        0

      // From Dirham
      result = includes(this.mad.dh.alias, this.fromCurrency) ?
        ALG(this.mad.dh.val, this.mad.rial.val, this.fromValue) :
        0
    }

    // To Dirham
    if (includes(this.mad.dh.alias, currency.toLocaleLowerCase())) {
      // From Centime
      result = includes(this.mad.centime.alias, this.fromCurrency)
        ? ALG(this.mad.centime.val, this.mad.dh.val, this.fromValue)
        : 0

      // From Rial
      result = includes(this.mad.rial.alias, this.fromCurrency)
        ? ALG(this.mad.rial.val, this.mad.dh.val, this.fromValue) : 0

      // From Dirham
      result = includes(this.mad.dh.alias, this.fromCurrency)
        ? this.fromValue : 0
    }

    return result
  }
}

export default Mad
