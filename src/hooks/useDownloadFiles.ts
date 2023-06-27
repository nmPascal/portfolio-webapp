// interfaces
import { IDownloadFilesProps } from "../interfaces";

export const useDownloadFiles = (): IDownloadFilesProps => {

    const downloadCV = () => {
        const link = document.createElement("a");
        link.href = "./assets/files/cv.pdf";
        link.download = "cv.pdf";
        link.click();
    };

    const props = { downloadCV };
    return props;
};