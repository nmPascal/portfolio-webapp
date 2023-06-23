// packages
import { GraphQLError } from "graphql";

// utils
import { EDATA } from "../utils";

// interfaces
export interface ISocialNetwork {
    id: string;
    name: string;
    icon: string;
    url: string;
}

export interface ISkill {
    id: string;
    name: string;
    type: string;
    beginning_date: string;
}

export interface IProject {
    id: string;
    name: string;
    primary_language: string;
    technologies: string[];
    source_code: string | null;
    live_demo: string | null;
    description: string;
    image: string;
}

export interface IProjectData {
    categories: string[];
    projects: ProjectList;
}

export interface IGraphQLServerProps {
    data: DataType;
    loading: boolean;
    error: GraphQLError | null;
    getServerData: (requiredData: EDATA) => Promise<void>;
}

// types
export type ProjectList = Record<string, IProject[]>;
export type DataType = ISocialNetwork[] | ISkill[] | IProjectData | null;
