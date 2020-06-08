import { ApolloError } from 'apollo-server-express';

const Query = {
  wings: (_, { input }) => {
    const totalWings = ['snacker', 'average', 'bigEater'].reduce((acc, appetite) => {
      const countByAppetite = input[appetite] || 0;

      const multiplierByAppetite = {
        snacker: 4,
        average: 8,
        bigEater: 12,
      }[appetite];

      return acc + countByAppetite * multiplierByAppetite;
    }, 0);

    return { total: totalWings };
  },
};

const Mutation = {
  commitOrder: (_, { input }) => {
    if (input.total <= 0) throw new ApolloError('Invalid total!');

    return { success: true };
  },
};

export default { Query, Mutation };
