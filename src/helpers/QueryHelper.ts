// utils
import { EDATA, client } from "../utils";

// helpers
import { SettingsHelper, groupDataByProperty } from ".";

// interfaces
import { DataType } from "../interfaces";

// packages
import { DocumentNode, gql } from "@apollo/client";

const _getGraphQLQuery = (requiredData: EDATA): DocumentNode => {
    return gql`
        query {
            ${requiredData} {
                ${SettingsHelper.getDataFields("common")}
                ${SettingsHelper.getDataFields(requiredData)}
            }
        }
    `;
};

export const retrieveGraphQLServerData = async (requiredData: EDATA): Promise<DataType> => {
    const QUERY = _getGraphQLQuery(requiredData);

    try {
        const res = await client.query({ query: QUERY });
        const { data } = res;
        const { skills } = data;

        if (skills) {
            return groupDataByProperty(skills);
        }
        
        return data[requiredData];
    } catch (error) {
        console.error("Error retrieving data from GraphQL server: ", error);
        throw error;
    }
};

export const retrieveJoke = async (): Promise<string> => {
    try {
        const res = await fetch(SettingsHelper.getString("joke_api_endpoint"));
        const { value } = await res.json();
        return value;
    } catch (error) {
        console.error("Error retrieving joke from API: ", error);
        throw error;
    }
};
