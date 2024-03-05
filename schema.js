export const typeDefs = `#graphql
  type Game {
    id: ID!
    title: String!
    platform:  [String!]!
  }
  type Author {
    id: ID!
    name: String!
    verified: Boolean!
  }
  type Review {
    id: ID!
    rating: Int!
    content: String!
  }
  type Query {
    reviews: [Review]
    review(id: ID!): Review 
    games: [Game]
    game(id: ID!): Game
    authors: [Author]
    author(id: ID!): Author
  }
`;
