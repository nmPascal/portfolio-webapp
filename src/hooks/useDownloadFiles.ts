// interfaces
import { IDownloadFilesHookProps } from "../interfaces";

// utils
import { ECVLANG } from "../utils";

export const useDownloadFiles = (): IDownloadFilesHookProps => {
    // TODO: update resumes
    const downloadCV = (lang: ECVLANG) => {
        const { toLowerCase } = String.prototype;
        const fileName = `resume_${toLowerCase.call(lang).substring(0, 2)}.pdf`;
        const filePath = `./assets/files/${fileName}`;
        const link = document.createElement("a");

        link.href = filePath;
        link.download = fileName;
        link.click();
    };

    const props = { downloadCV };
    return props;
};