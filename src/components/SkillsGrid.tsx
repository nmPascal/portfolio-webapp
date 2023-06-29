import { FC } from 'react';

// helpers
import { calculateExperienceYears } from '../helpers';

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
                <span>Years</span>
                <span>1</span>
                <span>3</span>
                <span>5+</span>
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
