import _ from 'lodash'

export abstract class ValueObject<T extends Record<string, any>> {
  public readonly props: T

  constructor(props: T) {
    this.props = Object.freeze(props)
  }

  equals(valueObject?: ValueObject<T>): boolean {
    return _.isEqual(this, valueObject)
  }
}