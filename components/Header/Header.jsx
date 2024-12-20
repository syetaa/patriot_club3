import React from 'react'
import styles from './Header.module.css'
import Image from 'next/image'

import logo1 from "@/public/Logo1.png"

export default function Header() {
  return (
    <div>
        <div className={styles.textmain}>
            <div className={styles.links}>
                <div className={styles.link}>
                    О центре 
                </div>
                <div className={styles.link}>
                    Проекты
                </div>
                <div className={styles.link}>
                    События
                </div>
                <div className={styles.link}>
                    Новости
                </div>
                <div className={styles.link}>
                    Пресс-центр
                </div>
            </div>
            <div className={styles.logo}>
                <Image src={logo1} alt='logo1'/>
            </div>
            <div className={styles.info}>
                <div className={styles.phone}>
                    +7 (495) 000-00-00
                </div>
                <div className={styles.search}>
                    
                </div>
            </div>
        </div>
    </div>
  )
}
