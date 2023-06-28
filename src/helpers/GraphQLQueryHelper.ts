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
