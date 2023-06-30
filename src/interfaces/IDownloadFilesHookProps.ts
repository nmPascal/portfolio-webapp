// utils
import { ECVLANG } from "../utils";

export interface IDownloadFilesHookProps {
    downloadCV: (lang: ECVLANG) => void;
}