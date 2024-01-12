import http from 'http';
import { Author, Book } from './entities';
import express, { Express } from 'express';
import { PORT } from './commons/app-references-common';
import { EntityManager, EntityRepository, MikroORM } from '@mikro-orm/core';

export const DI = {} as {
  server: http.Server,
  orm: MikroORM,
  em: EntityManager,
  bookRepository: EntityRepository<Book>,
  authorRepository: EntityRepository<Author>,
}

export const app = (async () => {
  DI.orm = await MikroORM.init();
  DI.em = DI.orm.em;
  DI.bookRepository = DI.orm.em.getRepository(Book);
  DI.authorRepository = DI.orm.em.getRepository(Author);

  const app: Express = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.listen(PORT, () => console.log('Server started running on port', PORT));
})();
