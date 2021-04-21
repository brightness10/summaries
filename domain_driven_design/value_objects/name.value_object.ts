import { ValueObject } from "./value_object";
import { validate } from 'jsonschema'

interface NameProps {
  value: string
}

export class Name extends ValueObject<NameProps> {
  static schema = {
    type: 'string',
    minLength: 2,
    maxLength: 100
  }

  private constructor(props: NameProps) {
    super(props)
  }

  static create(name: string): Name {
    const validationResult = validate(name, Name.schema)
    if (!validationResult.valid) throw new Error(JSON.stringify(validationResult.errors))
    return new Name({ value: name })
  }
}