'use client'
import styles from './style.module.scss'
import { useState, useEffect } from "react";
import Nav from './Nav';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';


export default function Header() {
  const [isActive, setIsActive] = useState(false)
  const pathname = usePathname();

  useEffect( () => {
    if(isActive) setIsActive(false)
  }, [pathname])

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <div className={styles.copyright}>o</div>
        <div className={styles.name}></div>
      </div>

      <div className={styles.buttonContainer}>
        <div 
          onClick={() => setIsActive(!isActive)} 
          className={`${styles.button}`}
        >
          <div 
            className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
          >
            <AnimatePresence mode="wait">
              {isActive && <Nav />}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}