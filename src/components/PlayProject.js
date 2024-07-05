import styles from '../css/PlayProject.module.css';
import { NavLink } from 'react-router-dom';

export default function PlayProject({img, name, subtitle, keywords, description, url }) {
    return (
        <div className={styles.item}>
            <NavLink to={url}><img className={styles.image} src={img} alt=""/></NavLink>
            <p className={styles.keywords}>{keywords}</p>
            <NavLink to={url}><h1 className={styles.name}>{name}</h1></NavLink>
            <hr className={styles.line}/>
            <div className={styles.content}>
                <p className={styles.subtitle}>{subtitle}</p>
                <p className={styles.desc}>{description}</p>
            </div> 
        </div>
    )
}