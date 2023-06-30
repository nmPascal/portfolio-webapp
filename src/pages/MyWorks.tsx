/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";

// helpers
import { SettingsHelper, isProjectDataType } from "../helpers";

// utils
import { EDATA } from "../utils";

// contexts
import { useGraphQLDataContext } from "../contexts";

// packages
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper";
import { BsLaptop, BsGithub } from "react-icons/bs";

// components
import { ErrorMessage, Loader } from "../components";

// styles
import styles from "../styles/main.module.scss";
import "swiper/css";
import "swiper/css/effect-coverflow";

export const MyWorks: FC = (): JSX.Element => {
    const { data, loading, error, getGraphQLServerData } =
        useGraphQLDataContext();

    useEffect(() => {
        getGraphQLServerData(EDATA.PROJECTS);
    }, []);

    return (
        <div className={styles.works}>
            {loading ? (
                <Loader />
            ) : error.length ? (
                <ErrorMessage message={error} />
            ) : (
                isProjectDataType(data) && (
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        modules={[EffectCoverflow]}
                        className={styles.works__swiper}
                    >
                        {data.map((project) => (
                            <SwiperSlide
                                key={project.id}
                                className={styles.project__card}
                            >
                                <div className={styles.project__img}>
                                    <img src="./assets/images/chez_sylvie.png" alt={project.name} />
                                </div>
                                <div className={styles.project__languages}>
                                    {project.technologies.map((language, idx) => (
                                        <span key={idx}>
                                            {language}
                                            {idx !== project.technologies.length - 1 && <span> | </span>}
                                        </span>
                                    ))}
                                </div>
                                <div className={styles.project__description}>
                                    <h3>{project.name}</h3>
                                    <p>{project.description}</p>
                                </div>
                                <div className={styles.project__links}>
                                    <span>
                                        {project.live_demo && (
                                            <a
                                                href={project.live_demo}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <BsLaptop size={"13"}/>
                                                {SettingsHelper.getString("link_demo_text")}
                                            </a>
                                        )}
                                    </span>
                                    <span>
                                        {project.source_code && (
                                            <a
                                                href={project.source_code}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                <BsGithub size={"13"}/>
                                                <span>{SettingsHelper.getString("link_source_text")}</span>
                                            </a>
                                        )}
                                    </span>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
            ))}
        </div>
    );
};
