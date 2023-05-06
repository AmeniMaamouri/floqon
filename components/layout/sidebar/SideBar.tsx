import styles from './sidebar.module.scss'
import { Fragment, useEffect, useState } from 'react';


const SideBar: React.FC<any> = () => {

    return (
        <div className={styles.sidebar}>
            <p style={{color:'white', marginTop:'30px', padding:'0 20px'}}>Newsletter</p>
        </div>
    );
}

export default SideBar;