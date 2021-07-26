import styles from "./bio.module.scss";
import utilStyles from "../styles/utils.module.css";
import Image from 'next/image';

export default () => (
    <div className={utilStyles.fullPage} id="bio"> 
        <Image
        priority
        src="/images/profile.jpg"
        className={utilStyles.borderCircle}
        height={144}
        width={144}
        alt={'Ellie Judd'}
        />
        <div className={utilStyles.center}>
            <h2 className={utilStyles.heading2Xl}>Bio</h2>
            <p>This is my bio, I'm a mid-weight developer with the following skills, I am good at blah, take a look at my portfolio down here</p>
        </div>
    </div>
)
