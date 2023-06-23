import { DataType, IProject, IProjectData, ISkill, ISocialNetwork } from "../interfaces";

export const groupProjectByCat = (webProjects: IProject[]) => {
    const categories = [...new Set(webProjects.map(({ primary_language }) => primary_language))].sort();
    const projects = categories.reduce((acc, item) => {
        const filteredProjects = webProjects.filter(({ primary_language }) => primary_language === item);
        return { ...acc, [item]: filteredProjects };
    }, {});
    return { categories, projects };
};

export const isSocialNetworkType = (data: DataType): data is ISocialNetwork[] => {
    if (Array.isArray(data)) {
      return "icon" in data[0];
    }
    return false;
};

export const isSkillType = (data: DataType): data is ISkill[] => {
    return Array.isArray(data) && data.length > 0 && "beginning_date" in data[0];
};

export const isProjectDataType = (data: DataType): data is IProjectData => {
    return data !== null && "categories" in data;
};

  

  