import { Book } from './book-entity';
import { BaseEntity } from './base-entity';
import { Cascade, Collection, Entity, OneToMany, Property } from '@mikro-orm/core';

@Entity()
export class Author extends BaseEntity {
  @Property()
  name!: string;

  @OneToMany(() => Book, b => b.author, { cascade: [Cascade.ALL] })
  books = new Collection<Book>(this);

  constructor(name: string) {
    super()
    this.name = name;
  }

}
