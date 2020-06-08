import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './graphql/schemas';
import resolvers from './graphql/resolvers';

const app = express();

const server = new ApolloServer({ typeDefs, resolvers, playground: true });

server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

app.listen(PORT, _ => console.log(`Listening on port ${PORT}/graphql`));
