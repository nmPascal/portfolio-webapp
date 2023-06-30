import { DataType, IProject, ISkill, ISkillData, ISocialNetwork } from "../interfaces";

export const groupDataByProperty = (webProjects: ISkill[]) => {
    const categories = [...new Set(webProjects.map(({ type }) => type))].sort();
    const skills = categories.reduce((acc, item) => {
        const filteredProjects = webProjects.filter(({ type }) => type === item);
        return { ...acc, [item]: filteredProjects };
    }, {});
    return { categories, skills };
};

export const isSocialNetworkType = (data: DataType): data is ISocialNetwork[] => {
    if (Array.isArray(data)) {
        return "icon" in data[0];
    }
    return false;
};

export const isSkillDataType = (data: DataType): data is ISkillData => {
    return data !== null && "skills" in data;
};

export const isProjectDataType = (data: DataType): data is IProject[] => {
    if (Array.isArray(data)) {
        return "source_code" in data[0];
    }
    return false;
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
