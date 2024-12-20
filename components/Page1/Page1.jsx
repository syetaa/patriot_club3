import React from 'react'
import styles from './Page1.module.css'
import Image from 'next/image'

import back_img from '@/public/back.png'

export default function Page1() {
  return (
    <div>
      <div className={styles.textmain} style={{
        // use the src property of the image object
        backgroundImage: `url(${back_img.src})`,
        // other styles
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        width: "100vw",
        height: "100vh",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className={styles.text1}>
            Центр военно-спортивной<br/>
            подготовки и патриотического<br/>
            воспитания молодежи<br/>
        </div>
        <div className={styles.text2}>
            <div className={styles.text2_1}>
                Готовим патриотов нового поколения,<br/>
                любящих свою Родину<br/>
                и умеющих ее защищать<br/>
            </div>
            <div className={styles.text2_2}>
                <div className={styles.text2_3}>
                21
                </div>
                Регион России
            </div>
            <div className={styles.text2_2}>
                <div className={styles.text2_3}>
                8
                </div>
                Направлений<br/>
                подготовки
            </div>
            <div className={styles.text2_2}>
                <div className={styles.text2_3}>
                21
                </div>
                Регион России
            </div>
        </div>
      </div>
    </div>
  )
}

