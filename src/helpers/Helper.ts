import { DataType, IProjectData, ISkillData, ISocialNetwork } from "../interfaces";

export const groupDataByProperty = <T extends { [key: string]: string }>(data: T[], property: keyof T) => {
    const dataName = property === 'type' ? 'skills' : 'projects';
    const categories = [...new Set(data.map((item) => item[property]))].sort();
    const groupedData = categories.reduce((acc, item) => {
      const filteredData = data.filter((dataItem) => dataItem[property] === item);
      return { ...acc, [item]: filteredData };
    }, {});

    return { categories, [dataName]: groupedData };
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


export const isProjectDataType = (data: DataType): data is IProjectData => {
    return data !== null && "projects" in data;
};

  

  