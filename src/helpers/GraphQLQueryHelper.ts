// utils
import { client } from '../utils';

// packages
import { gql } from '@apollo/client';

export const retrieveGraphQLQuery = async () => {
    const QUERY = gql`
        query {
            skills {
                name
            }
        }
    `;
    const res = await client.query({ query: QUERY });
    const { data } = res;
    console.log('~> data', data); //DELETE
};