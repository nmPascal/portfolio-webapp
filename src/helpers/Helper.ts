import { DataType, IGroupedData, ISocialNetwork } from "../interfaces";

export const groupDataByProperty = <T extends { [key: string]: string }>(data: T[], property: keyof T) => {
    const categories = [...new Set(data.map((item) => item[property]))].sort();
    const groupedData = categories.reduce((acc, item) => {
      const filteredData = data.filter((dataItem) => dataItem[property] === item);
      return { ...acc, [item]: filteredData };
    }, {});
    return { categories, groupedData };
};
  

export const isSocialNetworkType = (data: DataType): data is ISocialNetwork[] => {
    if (Array.isArray(data)) {
      return "icon" in data[0];
    }
    return false;
};

export const isGroupedDataType = (data: DataType): data is IGroupedData => {
    return data !== null && "categories" in data;
};

  

  