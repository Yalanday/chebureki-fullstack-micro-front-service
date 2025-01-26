import gql from 'graphql-tag';

export const typeDefs = gql`
  type Product {
    id: Int
    name: String
    price: Float
    quantity: Float
    category: String
    description: String
    image: String
    label: String
  }

  type Query {
    getTableData(table: String!, columns: [String]!): [Product]
  }
`;

