import { FC } from 'react';

// helpers
import { SettingsHelper, calculateExperienceYears } from '../helpers';

// interfaces
import { ISkill } from '../interfaces';

// styles
import styles from '../styles/main.module.scss';

type Props = {
    skills: ISkill[];
};

export const SkillsGrid: FC<Props> = ({ skills }: Props): JSX.Element => {
  
    return (
       <div className={styles.skills__grid}>
            <div className={styles.years}>
                {SettingsHelper.getSkillsGridColumns().map((column, idx) => (
                    <span key={idx}>{column}</span>
                ))}
            </div>
            {skills.map(({id, name, beginning_date}) => {
                const years = 5;
                const progress = (calculateExperienceYears(beginning_date) / years) * 100 + '%';

                return (
                    <div key={id} className={styles.skills__grid__item}>
                        <p>{name}</p>
                        <div className={styles.progress__bar} style={{width: progress}}/>
                    </div>
                )
            })}
       </div>
    );
};
