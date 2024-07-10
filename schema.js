export const typeDefs = `#graphql
 type Game {
        id: ID!     # ! is used to indicate that the field is required
        title: String!
        platform: [String!]!
        reviews: [Review!]
    }
    type Review {
        id: ID!
        rating: Int!
        content: String!
        game: Game!
        author: Author!
    }
    type Author {
        id: ID!
        name: String!
        verified: Boolean!
        reviews: [Review!]
        
    }
    type Query {
        games: [Game]
        reviews: [Review]
        authors: [Author]
        review(id: ID!): Review
        game(id: ID!): Game
        author(id: ID!): Author
        
    },
    type Mutation {
        deleteReview(id: ID!): Review
        deleteGame(id: ID!): Game
        deleteAuthor(id: ID!): Author
        addReview(review: AddAuthorInput!): Review
        addGame(game: AddGameInput!): Game
        addAuthor(author: AddAuthorInput!): Author
        updateAuthor(author: UpdateAuthorInput!): Author
        updateGame(game: UpdateGameInput!): Game
        updateReview(review: UpdateReviewInput!): Review
    },
    input AddGameInput {
        title: String!
        platform: [String!]!
    },
    input AddReviewInput {
        rating: Int!
        content: String!
        author_id: ID!
        game_id: ID!
    },
    input AddAuthorInput {
        name: String!
        verified: Boolean!
    },
    input UpdateGameInput {
        title: String
        platform: [String!]
    },
    input UpdateReviewInput {
        rating: Int
        content: String
        author_id: ID
        game_id: ID
    },
    input UpdateAuthorInput {
        name: String
        verified: Boolean
    }
`;


//int, float, string, boolean, ID