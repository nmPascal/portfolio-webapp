// interfaces
import { ISocialNetwork, IStrings } from "../interfaces";

// packages
import { FaXing, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { AiOutlineCodeSandbox, AiFillGithub } from "react-icons/ai";

export const strings: IStrings = {
    // Global
    me_job: "Web application developer",
    me_fullName: "Pascal Hector",

    // Navbar
    navbar_logo_url: "https://code.google.com/images/developers.png",
    navbar_title: "Pascal.hector",
    navbar_github_repos: "https://github.com/nmPascal?tab=repositories",
    navbar_github_repos_title: "Repositories",
    navbar_button_text: "Contact me",

    // Home
    home_title: "Hey! I Am",
    home_description: "I'm a web application developer based in France, specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.",
    home_social_networks_title: "Follow me:",

};

export const socialNetworks: ISocialNetwork[] = [
    { name: "Xing", icon: FaXing, url: "https://www.xing.com/profile/Pascal_Hector2/cv" },
    { name: "LinkedIn", icon: FaLinkedinIn, url: "https://www.linkedin.com/in/pascal-hector-a637a414b/"},
    { name: "WhatsApp", icon: FaWhatsapp, url: "https://api.whatsapp.com/send/?phone=%2B33645922614&text&type=phone_number&app_absent=0"},
    { name: "Indeed", icon: SiIndeed, url: "https://profile.indeed.com/?hl=fr_FR&co=FR&from=gnav-homepage"},
    { name: "CodeSandBox", icon: AiOutlineCodeSandbox, url: "https://codesandbox.io/u/PascalHcr"},
    { name: "GitHub", icon: AiFillGithub, url: "https://github.com/nmPascal"}
];