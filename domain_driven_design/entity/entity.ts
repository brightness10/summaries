import { UniqueEntityId } from './../value_objects/unique_entity_id.value_object';

export abstract class Entity<T> {
  protected readonly _id: UniqueEntityId

  private constructor(
    protected props: T,
    id?: UniqueEntityId
  ) {
    this._id = id || UniqueEntityId.create()
  }

  equals(entity?: Entity<T>): boolean {
    return this._id.equals(entity?._id)
  }
}