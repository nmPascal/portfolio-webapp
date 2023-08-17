/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";

// helpers
import { SettingsHelper, isSkillDataType, getXpStatus } from "../helpers";

// utils
import { EDATA } from "../utils";

// contexts
import { useGraphQLDataContext } from "../contexts";

// packages
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from 'swiper/modules';

// components
import { CategorySelector, ErrorMessage, Loader } from "../components";

// styles
import styles from "../styles/main.module.scss";
import 'swiper/css';
import 'swiper/css/effect-cards';

export const Skills: FC = (): JSX.Element => {
    const { data, loading, error, selectedCategory, getGraphQLServerData } = useGraphQLDataContext();

    const _getIconSource = (icon: string) => {
        if (icon.startsWith('http')) {
            return icon;
        }
        return `${SettingsHelper.getString("svg_path")}${icon}`;
    };

    useEffect(() => {
        getGraphQLServerData(EDATA.SKILLS);
    }, []);

    return (
        <div className={styles.skills}>
            <div className={styles.skills__content}>
            {loading ? (
                <Loader />
            ) : error.length ? (
                <ErrorMessage message={error} />
            ) : (
                isSkillDataType(data) && (
                    <>
                        <CategorySelector categories={data.categories} />

                        <Swiper
                            effect={'cards'}
                            grabCursor={true}
                            modules={[EffectCards]}
                            className={styles.skills__swiper}
                        >
                            {data.skills[selectedCategory] && data.skills[selectedCategory].map(({id, name, icon, beginning_date}) => (
                                <SwiperSlide key={id} className={styles.skill__card}>
                                    <div className={styles.skill__icon}>
                                        <img src={_getIconSource(icon)} alt={name} />
                                    </div>
                                    <div className={styles.skill__name}>
                                        <h3>{name}</h3>
                                    </div>
                                    <div className={styles.skill__date}>
                                        <p style={{color: getXpStatus(beginning_date).color}}>
                                            {getXpStatus(beginning_date).status}
                                        </p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </>
                ))}
                </div>
        </div>
    );
};
