import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema.js";
import db from "./_db.js";

const resolvers = {
    Query: {
        games: () => {
            return db.games;
        },
        reviews: () => {
            return db.reviews;
        },
        authors: () => {
            return db.authors;
        },
        review: (_, args) => {
            return db.reviews.find(review => review.id === args.id);
        },
        game: (_, args) => {
            return db.games.find(game => game.id === args.id);
        },
        author: (_, args) => {
            return db.authors.find(author => author.id === args.id);
        }
    },
    Game: {
        reviews: (parent) => {
            return db.reviews.filter(review => review.game_id === parent.id);
        }
    },
    Author:{
        reviews: (parent) => {
            return db.reviews.filter(review => review.author_id === parent.id);
        }
    },
    Review: {
        author: (parent) => {
            return db.authors.find(author => author.id === parent.author_id);
        },
        game: (parent) => {
            return db.games.find(game => game.id === parent.game_id);
        }
    },
    Mutation:{
       deleteReview: (_, args) => {
           const index = db.reviews.findIndex(review => review.id === args.id);
           if(index !== -1){
               return db.reviews.splice(index, 1)[0];
           }
       },
       deleteGame: (_, args) => {
           const index = db.games.findIndex(game => game.id === args.id);
           if(index !== -1){
               return db.games.splice(index, 1)[0];
           }
       },
       deleteAuthor: (_, args) => {
           const index = db.authors.findIndex(author => author.id === args.id);
           if(index !== -1){
               return db.authors.splice(index, 1)[0];
           }
       },
       addReview: (_, args) => {
           const review = {
               id: String(db.reviews.length + 1),
               ...args.review
           };
           db.reviews.push(review);
           return review;
       },
       addGame: (_, args) => {
           const game = {
               id: String(db.games.length + 1),
               ...args.game
           };
           db.games.push(game);
           return game;
       },
       addAuthor: (_, args) => {
           const author = {
               id: String(db.authors.length + 1),
               ...args.author
           };
           db.authors.push(author);
           return author;
       },
       updateAuthor: (_, args) => {
           const index = db.authors.findIndex(author => author.id === args.author.id);
           if(index !== -1){
               db.authors[index] = args.author;
               return db.authors[index];
           }
       },
       updateGame: (_, args) => {
           const index = db.games.findIndex(game => game.id === args.game.id);
           if(index !== -1){
               db.games[index] = args.game;
               return db.games[index];
           }
       },
       updateReview: (_, args) => {
           const index = db.reviews.findIndex(review => review.id === args.review.id);
           if(index !== -1){
               db.reviews[index] = args.review;
               return db.reviews[index];
           }
       }
    }
};
    
const server = new ApolloServer({
    typeDefs,
    resolvers,
    });

const { url } = await startStandaloneServer(server, {
    listen: {
            port: 4000
        }
});

console.log(`Server ready at ${url}`);