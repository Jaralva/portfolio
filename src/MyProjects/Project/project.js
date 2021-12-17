import React from "react";
import style from "./project.module.css"

function Project() {
    return (
        <div className={style.projectContainer}>
            <div className={style.projectPicture}>
                <a className={style.projectlink}>Смотреть</a>
            </div>
            <div>
            <div className={style.projectName}>Project name: Social network</div>
            <div className={style.projectDescription}>Description: ...</div>
            </div>
        </div>
    )
}

export default Project;