// interface
import {
    DataType,
    IProject,
    ISkill,
    ISkillData,
    ISocialNetwork,
} from "../interfaces";

export const groupDataByProperty = (webProjects: ISkill[]): ISkillData => {
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

const _calculateXpYears = (dateStr: string): number => {
    const currentDate: Date = new Date();
    const [year, month] = dateStr.split("-").map(Number);
    const inputDate: Date = new Date(year, month - 1);

    const diffYears: number =
        currentDate.getFullYear() - inputDate.getFullYear();
    if (
        currentDate.getMonth() < inputDate.getMonth() ||
        (currentDate.getMonth() === inputDate.getMonth() &&
            currentDate.getDate() < inputDate.getDate())
    ) {
        return diffYears - 1;
    }
    return diffYears;
};

export const getXpStatus = (dateStr: string): { status: string, color: string} => {
    const xpYears = _calculateXpYears(dateStr);

    if (xpYears < 1) {
        return { status: "Beginner", color: "#E6CC79" };
    } else if (xpYears < 2) {
        return { status: "Intermediate", color: "#4F86F7" };
    } else if (xpYears < 3) {
        return { status: "Advanced", color: "#34C759" };
    } else {
        return { status: "Expert", color: "#FF2D55" };
    }
};
