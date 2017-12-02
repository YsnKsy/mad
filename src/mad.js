// @flow

class Mad {
  subcurrency: string

  constructor(subcurrency: string) {
    this.subcurrency = subcurrency
  }

  test() {
    return `${this.subcurrency}`
  }
}

export default Mad
