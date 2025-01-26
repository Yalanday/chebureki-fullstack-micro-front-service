import {gql} from "@apollo/client/core";

export const GET_PRODUCTS_ALL = gql`
  query {
    getTableData(table: "products", columns: ["id", "name", "price", "quantity", "category", "description", "image", "label"]) {
        id,
        name,
        price,
        quantity,
        category,
        description,
        image,
        label
    }
  }
`;

export const GET_PRODUCTS_LIST = gql`
  query {
    getTableData(table: "products", columns: ["id", "name", "price", "quantity", "category", "description", "image"]) {
        id,
        name,
        price,
        quantity,
        category,
        description,
        image,
    }
  }
`;

export const GET_PRODUCTS_LIST_WITH_FILTERS = gql`
  query GetProductsListWithFilters($filters: [FilterInput]) {
    getTableData(table: "products", columns: ["id", "name", "price", "quantity", "category", "description", "image"], filters: $filters) {
      id
      name
      price
      quantity
      category
      description
      image
    }
  }
`;

