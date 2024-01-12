import { Entity, ManyToOne, Property } from '@mikro-orm/core';
import { BaseEntity } from './base-entity';
import { Author } from './author-entity';

@Entity()
export class Book extends BaseEntity {
  @Property()
  title!: string;

  @ManyToOne()
  author: Author

  constructor(title: string, author: Author) {
    super();
    this.title = title;
    this.author = author;
  }

}
