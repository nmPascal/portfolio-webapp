import { ECVLANG } from "../utils";

export interface IDownloadFilesProps {
    downloadCV: (lang: ECVLANG) => void;
}