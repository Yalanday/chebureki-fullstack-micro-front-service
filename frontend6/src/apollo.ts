import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { createApolloProvider } from "@vue/apollo-option"
import { provideApolloClient } from '@vue/apollo-composable';


// Cache implementation
const cache = new InMemoryCache()

// Create the apollo client
export const apolloClient = new ApolloClient({
    cache,
    uri: 'http://localhost:3002/graphql',
})

export function setupApolloClient() {
    provideApolloClient(apolloClient);
}
