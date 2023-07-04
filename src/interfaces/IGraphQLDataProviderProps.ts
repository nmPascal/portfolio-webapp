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
    icon: string;
    type: string;
    beginning_date: string;
}

export interface ISkillData {
    categories: string[];
    skills: SkillList;
}

export interface IProject {
    id: string;
    name: string;
    technologies: string[];
    source_code: string | null;
    live_demo: string | null;
    description: string;
    image: string;
}

export interface IGraphQLDataProviderProps {
    data: DataType;
    loading: boolean;
    error: string;
    selectedCategory: string;
    getGraphQLServerData: (requiredData: EDATA) => void;
    setSelectedCategory: (category: string) => void;
}

// types
export type SkillList = Record<string, ISkill[]>;
export type ProjectList = Record<string, IProject[]>;
export type DataType = ISocialNetwork[] | ISkillData | IProject[] | null;
