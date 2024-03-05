import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import { typeDefs } from "./schema.js";
import db from "./db.js";

const resolvers = {
  Query: {
    games: () => db.games,
    // args - query variables
    game: (_, args) => db.games.find((game) => game.id === args.id),
    authors: () => db.authors,
    author: (_, args) => db.authors.find((author) => author.id === args.id),
    reviews: () => db.reviews,
    review: (_, args) => db.reviews.find((review) => review.id === args.id),
  },
  Game: {
    reviews: (parent) =>
      // parent- Game
      db.reviews.filter((review) => review.game_id === parent.id),
  },
  Author: {
    reviews: (parent) =>
      // parent- Author
      db.reviews.filter((review) => review.author_id === parent.id),
  },
  Review: {
    // parent- Review
    author: (parent) =>
      db.authors.find((author) => author.id === parent.author_id),
    game: (parent) => db.games.find((game) => game.id === parent.game_id),
  },
  Mutation: {
    deleteGame: (_, args) => {
      db.games = db.games.filter((game) => game.id !== args.id);

      return db.games;
    },
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 8000 },
});

console.log(`🚀  Server ready at: ${url}`);
