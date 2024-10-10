import React, { useState } from 'react';
// import styles from "./components/CardLayout.module.css"
import styles from "./CardLayout.module.css"




export const CardLayout = (props) => {
    const {imageSrc, title, description} = props;
    const [isExpanded, setIsExpanded] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const text = description;
    const limitWords = 10;
    const toggleText = () => {
        setIsExpanded(!isExpanded);
    };
    const hideCard = () => {
        setIsVisible(false);
    };
    if (!isVisible) {
        return null;
    };
    const truncatedText = text.split(' ').slice(0, limitWords).join(' ');
  return (
    <div className={styles.card}>
        <img
            src={imageSrc}
            alt="Image Loading.."
            className={styles.image}
            style={{height:'320px'}}
        />
        <h2 className={styles.h2tag}>{title}</h2>
        <p>
            {isExpanded ? text : truncatedText + '...'}
        </p>
        <button onClick={toggleText} className={styles.incDesBtn}>
        {isExpanded ? 'Read Less' : 'Read More'}
        </button>
        <button onClick={hideCard} className={styles.notInterestedButton}>
            Not Interested
        </button>
    </div>
  )
}
