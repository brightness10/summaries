import { ValueObject } from './value_object';
import UUID from 'uuid'

interface UniqueEntityIdProps {
  value: string
}

export class UniqueEntityId extends ValueObject<UniqueEntityIdProps> {
  private constructor(uuid: UniqueEntityIdProps) {
    super(uuid)
  }

  static create(uuid?: string): UniqueEntityId {
    let value
    if (uuid) {
      const isValidUUID = UUID.validate(uuid)
      if (!isValidUUID) throw new Error('invalid UUID')
      value = uuid
    } else {
      value = UUID.v4()
    }
    return new UniqueEntityId({ value })
  }
}