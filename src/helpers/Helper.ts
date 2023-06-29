import {
    DataType,
    IProjectData,
    ISkillData,
    ISocialNetwork,
    ProjectList,
    SkillList,
} from "../interfaces";

export const groupDataByProperty = <T extends { [key: string]: string }>( data: T[], property: keyof T): ISkillData | IProjectData => {
    const categories = [...new Set(data.map((item) => item[property]))].sort();
    const groupedData = categories.reduce((acc, item) => {
        const filteredData = data.filter((dataItem) => dataItem[property] === item);
        return { ...acc, [item]: filteredData };
    }, {});

    if (property === "type") {
        const skillData: ISkillData = { categories, skills: groupedData as SkillList };
        return skillData;
    } else {
        const projectData: IProjectData = { categories, projects: groupedData as ProjectList };
        return projectData;
    }
};

export const isSocialNetworkType = (
    data: DataType
): data is ISocialNetwork[] => {
    if (Array.isArray(data)) {
        return "icon" in data[0];
    }
    return false;
};

export const isSkillDataType = (data: DataType): data is ISkillData => {
    return data !== null && "skills" in data;
};

export const isProjectDataType = (data: DataType): data is IProjectData => {
    return data !== null && "projects" in data;
};

export const calculateExperienceYears = (dateStr: string): number => {
    const beginning = JSON.stringify(dateStr);
    const now = new Date();
    const diff = now.getTime() - new Date(beginning).getTime();
    const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    const months = Math.floor(
        (diff % (1000 * 60 * 60 * 24 * 365.25)) /
            (1000 * 60 * 60 * 24 * (365.25 / 12))
    );
    const yearsDecimal = years + months / 12;
    const formattedYears = Number(yearsDecimal.toFixed(1));
    
    return formattedYears > 5 ? 5 : formattedYears;
};
