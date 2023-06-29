// interfaces
import { IStrings } from "../interfaces";

// packages
import { FaXing, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { AiOutlineCodeSandbox, AiFillGithub } from "react-icons/ai";

export const strings: IStrings = {
    // Global
    my_job: "Web application developer",
    my_fullName: "Pascal Hector",
    loading_text: "loading",
    svg_path: "./assets/svg/",
    images_path: "./assets/images/",

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

    // About
    about_title: "About me",
    about_text_title: "I'm a web developer",
    about_html_text: "<h3>Why hire me for your next projects ?</h3><p>I'm an experienced French web developer. I specialize in creating innovative and user-friendly web applications. With meticulous attention to detail and strong problem-solving skills, I deliver robust and effective solutions.</p><p>I keep abreast of the latest technologies, which enables me to deliver cutting-edge results. Collaboration and adaptability are my strengths, and I thrive in team environments.</p>",
    about_button_text: "Download CV",
};

export const dataFields: IStrings = {
    common: `
        id
        name
    `,
    skills: `
        type
        beginning_date
    `,
    projects: `
        primary_language
        technologies
        source_code
        live_demo
        description
        image
    `,
    social_networks: `
        icon
        url
    `,
};

export const skillsGridColumns: string[] = ["Years", "1", "3", "5+"];
