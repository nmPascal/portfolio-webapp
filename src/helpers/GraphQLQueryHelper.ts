// utils
import { SettingsHelper } from ".";
import { DataType } from "../interfaces";
import { EDATA, client } from "../utils";

// packages
import { gql } from "@apollo/client";
import { groupProjectByCat } from "./Helper";

const _getGraphQLQuery = (requiredData: EDATA) => {
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
        const { projects } = data;
    
        if (projects) {
            return groupProjectByCat(projects);
        }
        return data[requiredData];
    } catch (error) {
        console.error("Error retrieving data from GraphQL server: ", error);
        throw error;
    }
};