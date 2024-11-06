import React from 'react'
import styles from '../../styles/services/payments.module.css'

const AcquiringPayments = ({heading,desc}) => {
    return (
                <div data-aos="zoom-in" className={styles.box}>
                    <div className={styles.content}>
                        <div className={styles.icon}>
                            <ion-icon name="brush"></ion-icon>
                        </div>
                        <div className={styles.text}>
                            <h3>{heading}</h3>
                            <p>{desc}</p>
                            <a href="#">Read More</a>
                        </div>
                    </div>
                </div>
    )
}

export default AcquiringPayments