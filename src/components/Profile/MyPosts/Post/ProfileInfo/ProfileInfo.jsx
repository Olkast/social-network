import React from "react";
import styles from "./ProfileInfo.module.css"


const ProfileInfo = (proms) => {
    return (
        <div>
            <div>
                <img src="https://dubaitrippackages.files.wordpress.com/2017/11/2-imgdinosaurs_base.jpg" alt=""/>
            </div>
            <div className={styles.descriptionBlock}>
                Ava + description
            </div>
        </div>
    )
}


export default ProfileInfo;


