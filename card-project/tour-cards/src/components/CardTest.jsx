import React, { useState } from 'react'

import styles from "./CardTest.module.css";


export const CardTest = () => {


    // State to track whether text is expanded or not
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Sample long text
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.";

  // Number of words to display by default
  const limitWords = 10;

  // Function to toggle the text expansion
  const toggleText = () => {
    setIsExpanded(!isExpanded);
  };

  // Function to hide the card
  const hideCard = () => {
    setIsVisible(false);
  };

   // If the card is not visible, return null to remove it from the DOM
   if (!isVisible) {
    return null;
  }

  // Split text into words and create truncated version
  const truncatedText = text.split(' ').slice(0, limitWords).join(' ');




  return (
    <div className={styles.card}>
        <img
            src="https://via.placeholder.com/150"
            alt="Image Loading.."
            className={styles.image}
        />
        <h2>Card Title</h2>
        <p>
            {isExpanded ? text : truncatedText + '...'}
        </p>
        <button onClick={toggleText}>
        {isExpanded ? 'Show Less' : 'Show More'}
        </button>
        <button onClick={hideCard} className={styles.notInterestedButton}>
            Not Interested
        </button>
  </div>
  )
}
