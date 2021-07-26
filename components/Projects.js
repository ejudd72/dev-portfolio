import utilStyles from "../styles/utils.module.css";
import styles from "./projects.module.scss";

export default () => (
<>
        <div id="projects" className={utilStyles.fullPageCenter}>
        <h2>Projects</h2>
        <div className={styles.grid}>
        {['sample1','sample1','sample1','sample1','sample1','sample1','sample1','sample1','sample1'].map((item) => <div className={styles.card}>{item}</div>)}
        </div>
        </div>
    </ >
)
