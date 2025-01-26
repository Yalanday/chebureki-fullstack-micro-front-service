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
  
    input FilterInput {
    column: String!   # Имя колонки для фильтрации
    operator: String! # Оператор для фильтрации
    value: String!    # Значение фильтра
  }

  type Query {
    getTableData(
        table: String!,
        columns: [String]!,
        filters: [FilterInput]
        ): [Product]
  }
`;

