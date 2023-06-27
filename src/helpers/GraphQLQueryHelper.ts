// utils
import { SettingsHelper } from ".";
import { DataType } from "../interfaces";
import { EDATA, client } from "../utils";

// packages
import { gql } from "@apollo/client";
import { groupDataByProperty } from "./Helper";

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
        const { projects, skills } = data;
    
        if (projects) {
            return groupDataByProperty(projects, "primary_language");
        }

        if (skills) {
            return groupDataByProperty(skills, "type");
        }
        
        return data[requiredData];
    } catch (error) {
        console.error("Error retrieving data from GraphQL server: ", error);
        throw error;
    }
};
