import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { opacityVariant } from '../helper/Animations';

const introVariant = {
    initial: {
        pathLength: 0,
        stroke: "rgba(188, 188, 188, 0.8)",
        strokeWidth: 3,
    },
    animate: {
        pathLength: 1,
        stroke: "rgba(188, 188, 188, 0.8)",
        strokeWidth: 3,
        transition: {
            duration: 10,
            ease: [0.6, 0.05, -0.01, 0.9],
            loop: Infinity,
        }
    }
}

const Intro = () => {
    const animation = useAnimation()
    const [contentref, inView] = useInView({
        triggerOnce: true,
        rootMargin: "-200px"
    })

    useEffect(() => {
        if(inView) {
            animation.start("animate")
        }
    },[inView, animation])
    
    return (
        <motion.svg
            variants={opacityVariant} 
            ref={contentref}
            initial="initial"
            animate={animation}
            id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1913 250.09">
            <motion.path d="M208.26,240.09c-25.14-3.36-28.27-13.72-32.58-22-5.59-11.15-9.2-23.44-14.54-35.25-2.88-6.27-5.76-12.51-8.65-18.81-2.24-5.27-7-10.18-7.4-16.57-.11-1.5-5.36-6.7-6.33-7.84-1.44,2.41-2.67,5.09-4.22,7.35-3,4.32-4.4,9.07-7.25,13.15-.87,1.13-5.93,13.94-6.24,14.68-1.13,2.41-1.22,3.2-9.14.9,4.65,4,5.32,6.9,4.49,9.22s2.36,56.31-28.24,56.31c-2.59,0-25.21-.54-33.45,0-28.17,0-33.14-27.73-35.39-40.26-2.42-13.86-2.2-28.13-3.7-42.37-.8-7.44-1.71-14.93-2.25-22.52-.43-6.24-3.28-12.92-1.59-19.47.39-1.58,1.72-2.86,1.33-3.75-.17-.42-2.25-1.5-2.53-2-1-1.9-2.3-3.52-2.68-5.58-1.24-6.82-1.47-14-1.82-21.05C5.27,69,3.89,53.67,2.43,37.71c-.6-6-5.15-21.87,11.94-27.62m53.49-2c6,2.32,6,6.89,6.49,9.77,2.22,13.43-.43,28.23,1,43.23,1.06,11.15,6.69,48.76,8.16,60.22,2-3.31,12.26-32.91,13.21-36.62,5-19.6,14-45.9,31.1-45.72,3.78,0,7.51.92,11.27,1.36,3.08-.54,6.21-.92,9.25-1.67,31.67-7.63,35,25.26,40.11,37.43,4.33,10.38,10.69,20.58,16,31.87a16.31,16.31,0,0,1,1-2.48c.82-1.39,2.45-2.25,2.34-3.22,0-.47-1.72-2.16-1.84-2.75-.44-2.15-1.19-4.11-.94-6.23.8-7,2.65-13.87,4.34-20.68,3.66-14.7,6.63-29.32,9-44.16,1-6.4,2.25-24.12,16.34-24,10.25,1.86,20.54,3.32,30.82,4.9,4.85.74,14.51,1.4,19,3,10,3.55,8.62,10.4,8.36,14.32-1,15.42-7.74,29.76-10.71,44.81-3,15.38-4,31-7.69,46.3-1.31,5.54-1.24,11.29-2.58,16.84-.37,1.4-1.5,17.93-1.62,19-.49,3.26-.38,4.27-8.64,4.61,11.2,5.71,5.41,12.64,3.6,18-2.52,7.68-1.69,15.7-2,23.6-.14,3-4.59,34.8-21.71,40.46M373.42,8.47c15.52,6.2,12.76,20.91,12.76,24.33,0,2.46-2.79,4-3.67,6.09-1.32,3.1,2.51,3.32,3.7,6.59,1.06,2.92-3.85,5.52-4.55,8.33-.86,3.35,2.73,6.46,2.65,9.89-.2,8.15-1.94,1.74.21,9.84,1.5,5.66,3,20.4,3.19,23.81.06,1.09-.78,18.21-.62,19.68.78,5.88.61,49.88,1.09,65.89.48,15.67.26,58.3-30.89,58.27-3.38-.09-6.74-.19-10.12-.27-2.77-.06-5.55-.21-8.33-.21-31.12,0-30.4-20.79-30.27-27.26A373.85,373.85,0,0,0,307,168.93c-.66-6.85-1.54-13.81-1.29-20.6.1-2.06,1.23-3.83,2.07-5.84.23-.57-.57-19-1.17-25.2-.68-7.57-1-15.11-1.32-22.66-.71-14.4-3.29-28.7-2.61-43.06.25-5,.94-10.22,1.51-15.4.7-6.61.39-23,16-28.93m234,228.89c-6.2,5.9-13.8,3.58-18.59,4.24-10.24,1.39-20.57-.33-30.87-.43-5.39-.05-10.79,0-16.2-.44-4.45-.34-9.33,1.68-13.82-.87-1.06-.61-1.87-2.12-2.5-1.84-.28.13-1.2,2.1-1.58,2.32-1.39.81-2.6,1.88-4.07,2a50.2,50.2,0,0,1-7.56-.06,9.15,9.15,0,0,1-3.49-.33c-1.19-.14-2.37-.24-3.56-.35a196.61,196.61,0,0,0-31.17-.55c-4.48.28-30.75-17.26-19.46-48.07,1.72-4.7,27.84-50.15,34.56-61.88,3.71-6.53,7.37-13.1,11.34-19.53,3.3-5.27,4.85-12.29,10-16.5,1.22-1,3-1.2,3.23-2.15.1-.43-.95-2.58-.89-3.17.26-2.14.18-4.17,1.05-6,.2-.43.46-.82.67-1.25-3.13-.14-6.26-.41-9.38-.71-10.47-1-51.21,11.14-51.21-28.1,0-5.28-1.14-10.52-1.14-15.8,0-33.17,29.14-29.51,40.14-29.38,11.26.15,22.39-1.69,33.67-.44,4.09.47,8.13-.58,12.22,0,.88.1,9.52-.84,12.56-1.11.16-1.17,20.26-2.1,34.11-2.1,21.07,0,27.86,6.06,30.09,11.11m1.72,35.54c-4.16,14.53-37.67,66.49-45.89,79.16-3.18,4.9-5.08,10.5-8.35,15.34-.79,1.24-7.9,16.74-8.45,17.66-1.67,3,10.39,3.89,14.39,5,5.7,1.57,11.27-.37,16.87-1,2.36-.25,4.71,2.84,7,1.88,1.51-.65,16.39-7.32,22.4,6.25m268.49,66.19c-12.88,1.1-20.41-8.24-23.69-12.18-5.94-7.06-9.33-16-14-24.19-2.44-4.31-4.91-8.61-7-13.2-1.73-3.78-5.57-6.77-5.35-11.67,0-1.16,1-2.54.52-2.92-.25-.18-2.3,0-2.66-.14-1.26-.73-2.7-1.2-3.4-2.3,0-.05,0-.1-.06-.14-2.77,3.4-5.57,6.8-8.2,10.34-2.42,3.27-3.9,41.43-3.91,43.88,0,4.37-1.26,12.16-18.08,12.16a86.11,86.11,0,0,0-8.65.46c-10.8,1-46.87,3.54-46.87-45.72,0-14.43,1.72-28.72,2.36-43.16.31-7.57.56-15.14,1.15-22.71.52-6.25-1.3-13.21,1.33-19.4.62-1.46,2.12-2.52,1.88-3.45-.11-.43-2-1.82-2.21-2.39-.75-2-1.75-3.78-1.83-5.84-.25-6.81.53-13.78,1.09-20.64A429,429,0,0,0,694.24,33c-.12-5.25-3.45-19.86,11-25.16m45.58-.39c18.11,6.52,16.6,26.43,15.89,32.89-.84,7.77-1.93,15.57-2.13,23.41-.06,3.07,0,6.15,0,9.25,2.66-3.78,6.1-8.83,6.47-9.27,1.82-2.18,2.15-3,9.24,1.32-7-10.47,1-12.41,4.8-15.36,5.47-4.22,8.28-10.64,12.1-16.23,1.59-2.34,23.07-36,48.72-22.11A56.82,56.82,0,0,1,859.28,22c24.69,25.38,7.82,40.62,1.79,49.89-6.64,10.24-23.55,26.64-31.33,36-1.61,1.93-3.3,3.78-4.91,5.71.48,1,.91,2,1.45,2.92,5.6,9.9,11.6,18.1,14.77,26.78,1.16,3.23,3.61,5.62,4.76,8.84.25.82,6.16,8.64,6.43,9.21,1,1.73,1.48,2.1-4.87,7.42,11.21-4.52,9.39,2.14,10.25,5.64,1.19,5,5.16,8,8.18,11.73,1,1.25,10.24,11.25,7.42,22M1069.86,9.33c8.46,5.32,7.67,13.31,7.7,15.2.06,12.18-2.3,24.73-2.31,37.39,0,16,1.89,32.2.55,48.64-.5,6,.47,11.87-.2,17.83.05,1.52.6,18.9.64,20-.15,3.47.1,4.52-8.09,5.79,11.66,4.74,6.52,12.66,5.12,18.38-1.27,5.11-1,24.76-.57,39.43.24,8.84,4.88,28.33-18.16,28.33-2.59,0-4.77-.11-8.65.05-10.82.43-20.81-.59-31.48-.43-13.78.18-15.91-3-14.5-7.86,3.64-12.47,1-26.05.72-38.8-.06-3.56.06-7.13.27-10.69a36.1,36.1,0,0,0-5.7-1.55c-7.84-1.39-15.59-.71-23-3-2.71-.85-5.47-.12-8.09-1-.73-.27-8.45.33-8.92.28-.06,0-.11,0-.17,0-.51,6.37.41,12.75.52,19.11.06,3.42-3.12,6.54-2.36,9.88.63,2.81,4.95,5.37,4,8.3-1.06,3.26-4.44,3.5-3.29,6.58.79,2.07,3.24,3.61,3.23,6.06,0,3.07,2.87,7.59.32,10.43M888,240.52c-4-1.13-4.65-3.54-3.89-6.7,3.08-12.89,0-26.61-.57-39.65-.57-14.4,1.73-28.71,2.35-43.15.31-7.58.57-15.13,1.16-22.72.52-6.23-1.29-13.2,1.35-19.38.62-1.48,2.12-2.53,1.88-3.45-.13-.45-2-1.82-2.23-2.39-.74-2-1.76-3.78-1.82-5.85-.26-6.82.51-13.75,1.09-20.62a431.85,431.85,0,0,0,1.3-44.5c-.15-6.46,3.65-27,18.93-27,8,0,16-.72,24-.72C967.51,4.43,962,22.29,962,25.31c-.12,12.38-2.77,24.91-3.08,37.51-.32,13.4.59,26.84,0,40.36a75.44,75.44,0,0,1,8.21,1c3.44.67,7.32-.89,10.5,2.07.75.69,1.22,2.3,1.74,2.08.23-.11,1.1-2,1.42-2.16,1.1-.67,2.12-1.6,3.24-1.59,3.66.1,7.22,1.3,10.74,2.3,3.69,1.06,7.32,1.89,11,2.57.61-1.44,2-2.5,1.79-3.41-.13-.43-2-1.77-2.26-2.31-.79-2-1.82-3.71-1.93-5.76-.37-6.73.25-13.65.66-20.49.89-14.77.89-29.56.31-44.74-.23-5.64,1.31-22.12,12.72-26.5m73.31,231.68c-3.4-1.69-3.62-4.4-2.47-7.78,4.74-14.24,16.34-75.12,21.31-89.95,2.66-7.73,5.26-15.46,8.29-22.9,2.49-6.2,3-13.64,7.56-19,1.06-1.24,2.83-1.78,2.89-2.78,0-.46-1.31-2.45-1.34-3.06-.06-2.23-.43-4.29.16-6.35,1.94-6.73,4.92-13.21,7.58-19.63a293.5,293.5,0,0,0,13.83-41.86c2.2-8.75,7-13.75,12.51-16.54M1241.21,245c-3.91-.6-4.77-2.5-4.37-5.09,1.83-10.94-4.32-22.27-8.21-33.45-1.08-3.16-2-6.62-2.91-10-3.86-.69-7.64-1.93-11.46-2.11-6.11-.31-11.94,1-17.9.63-2.18-.19-19.6,3.07-21.83,2.88-9.83.72-9,41.6-19.31,46.2M1240.79,8.92c10.12,6.41,13,19.88,13.09,23.81.26,7.59.42,15.54,2.2,23.6,3.28,14.35,9.75,28.52,13.76,44.16,1.53,5.75,4.35,10.86,5.91,16.78.37,1.38,7.46,17.66,7.85,18.84,1.15,3.4,1.75,4.32-5.38,8.61,12.62.29,10.81,10,11.6,16.27,1.2,9,5.46,17,8.26,25.82,1.29,3.61-1,8.1.72,11.55,1.42,2.92,6.38,4.7,6.3,8.25-.25,4.09-3.51,5.13-1.68,8.45,1.24,2.22,4,3.53,4.56,6.43.75,3.85,4.81,9.73,1.4,13.58m-105.64-89.62c1.09.1,8.89,8.6,10,8.68-.2-.66-3.93-9.77-4.13-10.42-1.88-6.24-11.55-29.06-12.38-31.19-.42-1-.68-2.24-1-3.35-1.66,4.86-3.39,9.69-5.44,14.36-2.4,5.47-3.45,11.48-5.88,16.84-.27.58-1.15,3.68-2.11,7.21C1185.61,147.22,1200.46,145.17,1203.74,145.45Zm245,80.06c-5.3,6.62-18.07,13.22-49,13.22-1.89,0-3.71-.32-5.57-.29-1.14,1.08-3.1,1.9-6.52,2.23-4.12.39-8.5-.7-11.53-.72a75.37,75.37,0,0,0-8.63.46c-8,.73-15.61.62-23.34.81-2.68.06-21.61,0-21.61-21.36,0-8.41-1.54-16.93-1.89-25.17-.57-14.4,1.73-28.73,2.36-43.17.3-7.57.56-15.12,1.15-22.71.53-6.24-1.29-13.2,1.35-19.4.63-1.45,2.12-2.5,1.88-3.44-.12-.44-2-1.83-2.21-2.38-.75-2-1.77-3.78-1.83-5.86-.26-6.81.52-13.76,1.09-20.63,1.22-14.78,1.3-29.49,1.3-44.5,0-24.13,6.25-26.74,11.78-26.74,10.42-.3,20.78-.62,31.17-.93,4.9-.17,14.51-1.33,19.25-.6,10.45,1.63,10.32,8.53,10.76,12.44,1.73,15.31-2.29,30.89-2.67,46.54-.38,16,1.15,32.07-.45,48.24-.58,5.86.29,11.72-.41,17.57-.14,1.48.63,18.58.57,19.67-.15,3.42.08,4.43-8.09,5.69,4,1.58,6,3.55,6.91,5.65.69,1.63-26.51,8.21-26.8,9.94-6.43,6.88,32.74-2.74,36.45-2.65,5.64.11,11-1.77,13.08-1.34a115.49,115.49,0,0,0,23.08,2.41c6.73,0,10.51,3.23,12.29,6.6m66.29,66.1c-3.38-.09-6.74-.19-10.12-.27-2.77-.06-5.56-.21-8.33-.21-31.12,0-30.4-20.79-30.27-27.26a373.85,373.85,0,0,0-1.57-44.52c-.66-6.85-1.54-13.81-1.29-20.6.1-2.06,1.23-3.83,2.07-5.84.23-.57-.57-19-1.17-25.2-.68-7.57-1-15.11-1.32-22.66-.71-14.4-3.29-28.69-2.61-43.06.26-5,.94-10.21,1.51-15.4.87-8.13.2-31.1,29.61-31.1,7.31,0,14.56.06,22.14.63,34.72,0,30.23,22.74,30.23,27.11,0,2.45-2.79,4-3.67,6.09-1.32,3.09,2.51,3.31,3.7,6.58,1.06,2.92-3.85,5.52-4.55,8.33-.86,3.36,2.72,6.46,2.65,9.89-.2,8.15-1.94,1.74.21,9.85,1.5,5.66,3,20.39,3.19,23.8.06,1.1-.78,18.21-.62,19.69.78,5.88.61,49.87,1.09,65.88C1550.3,198.58,1550.08,241.21,1518.94,241.19Zm161.33-80.06a4.63,4.63,0,0,1-4,2.34c-6.83,1.14-35.36-.15-42.8-1.65a9.54,9.54,0,0,0-1.51-.06c2.41,4.22.17,63.07.16,65.53,0,4.37,5.86,11.7-6.56,12.89-4.11.39-8.5-.69-11.53-.72a78.06,78.06,0,0,0-8.65.45c-10.79,1-20.8.44-31.47,1.15-13.76.91-16-2.23-14.82-7.24,3.09-12.89,3-40.35,2.48-53.37-.56-14.4-.34-18.54,2.31-24.73.62-1.46,2.13-2.52,1.88-3.45-.11-.43-2-1.82-2.21-2.38-.75-2-1.76-3.78-1.83-5.85-.26-6.81.51-13.76,1.09-20.62,1.22-14.79-1.19-75.5-1.51-90.48-.14-6.45,1.64-13.48-1.09-19.87-1-2.4-2.33-4.5,1.82-6.48a26.27,26.27,0,0,1,10.68-1.68,2.46,2.46,0,0,1,3-1.79,1.88,1.88,0,0,1,.42.14c7.83,2.35,16-.76,23.93-1.43,8.72-.73,17.34,1.24,26,1.78,4.55.29,9.09.52,13.62,1.11,3.74.49,8-1,11.58,1.39.84.58,1.43,1.93,2,1.72.27-.1,1.16-1.77,1.51-1.95,1.21-.63,2.33-1.5,3.56-1.54,4.07-.13,29.64.37,38.41,0,9.4-.42,13.26,2.69,14.62,5.81m-2.58,54.11c-1.89,4.31-4.75,4.3-6.57,4.58a118.57,118.57,0,0,1-27,.73c-9.25-.62-18.56.48-27.76-1.11-3.34-.58-6.73.13-10.07-.52-.3-.05-1.77,0-3.45.07,0,9.47.33,19,.23,28.5.05,0,.11,0,.16.09.71.57,1.22,1.92,1.66,1.69.21-.1.88-1.76,1.15-2,1-.66,1.8-1.53,2.81-1.58,3.28-.15,6.63.62,10,1.25,7.16,1.34,14.32,3,21.62,2.12s10.6,2.17,12,5.44m160.73,141.82c-5.87-.2-7.11-2.29-6.63-5.3,1.88-10.93-4.21-22.3-8.06-33.5-1.06-3.15-1.92-6.63-2.86-10-3.85-.71-7.63-2-11.45-2.16-6.11-.34-12,1-17.9.54-2.19-.2-19.61,3-21.84,2.79-10.46.72-9.14,46.9-21.62,46.52-4.13-.12-8.36-1.67-11.37-2.09a76.13,76.13,0,0,0-8.66-.55c-10.87-.27-20.76-1.9-31.47-2.26-13.82-.39-15.63-4.16-13.69-9.75,4.8-14.21,16.7-75,21.75-89.85,2.69-7.72,5.33-15.43,8.4-22.86,2.51-6.19,3.12-13.63,7.65-18.94,1.06-1.23,2.83-1.77,2.9-2.77,0-.46-1.3-2.46-1.33-3.06,0-2.23-.41-4.3.2-6.35,2-6.73,5-13.19,7.67-19.6a294.64,294.64,0,0,0,14-41.78c3.2-12.45,11.65-17.28,19.83-18.91m69.51,1.84c12.86,5.32,16.22,21.29,16.35,25.64.22,7.58.34,15.54,2.08,23.61,3.2,14.36,9.62,28.57,13.54,44.23,1.5,5.75,4.3,10.88,5.84,16.81.36,1.39,7.38,17.7,7.76,18.88,1.14,3.4,1.73,4.34-5.42,8.58,12.62.36,10.77,10,11.53,16.33,1.17,9,5.38,17,8.14,25.86,1.27,3.62-1,8.09.66,11.56,1.4,2.93,6.35,4.72,6.25,8.27-.28,4.09-3.53,5.12-1.73,8.45,1.23,2.23,4,3.55,4.53,6.46.71,3.73,4.55,9.41,1.61,13.26m-105.49-89.84c1.09.11,8.85,8.64,9.92,8.72-.18-.66-3.88-9.78-4.07-10.44-1.85-6.25-11.42-29.12-12.25-31.25-.4-1.06-.66-2.25-1-3.35-1.68,4.85-3.43,9.66-5.51,14.32-2.43,5.47-3.51,11.47-6,16.83-.27.57-1.17,3.67-2.15,7.19C1786.73,147.16,1801.58,145.18,1804.86,145.48ZM1683.47,104.7a120.67,120.67,0,0,1-1.23,54m29.47-143.65a100.5,100.5,0,0,1,0,44.2m-257.9,117.86a75.15,75.15,0,0,1,2.46,14.74,55.88,55.88,0,0,1-1.23,18.41,49.28,49.28,0,0,1-4.91,12.28m-286-216.09a134.17,134.17,0,0,1,72.43,0m7,238.2c11-1.23,23.42-2.21,35.61-3.69,9.22-1.13,22.1,1.23,28.24-3.68m-215.27,1.22c10.22,2.78,19,4.76,25.79,6.14,10.58,2.16,15.36,2.7,20.87,2.46a62.34,62.34,0,0,0,14.73-2.46M1018.86,5.25a115.46,115.46,0,0,1,18.42-2.45c6.89-.36,12.55-.6,19.64,1.22a49.35,49.35,0,0,1,9.83,3.69m-16,8.59M890.59,241l4.87.64m7.59,1c6,.81,10.74,1.49,14.55,2a121.84,121.84,0,0,0,16,1.23c6.62.07,9.68-.46,12.28-1.23.76-.22,1.49-.47,2.18-.74m3.49-1.56a32.53,32.53,0,0,0,4.16-2.6m-123.64,0a42.14,42.14,0,0,0,4.9-.32m4.29-.72a40.91,40.91,0,0,0,10.46-3.87,41.35,41.35,0,0,0,9.82-7.37,44.06,44.06,0,0,0,4.91-6.14c.91-1.3,1.91-2.87,3-4.71m1-1.9c.72-1.35,1.43-2.84,2.13-4.44M707.46,7.71c4.92-1.2,9.12-2,12.27-2.46C725.32,4.38,728.11,4,732,4a71.85,71.85,0,0,1,11,1.22,22.18,22.18,0,0,1,6.14,1.23,16.61,16.61,0,0,1,2.46,1.23M562.19,16.3a44,44,0,0,1,3.68,12.28A44.42,44.42,0,0,1,564.65,47m-2.44,128.92A74.4,74.4,0,0,1,565.9,198a63.62,63.62,0,0,1-2.46,19.64,60.6,60.6,0,0,1-7.37,16M323.26,6.48A115,115,0,0,1,346.59,4a98,98,0,0,1,17.19,1.22,79.21,79.21,0,0,1,9.82,2.46M16.31,8.94c8-1.46,14.16-2.75,18.42-3.69A45.91,45.91,0,0,1,42.1,4c4.6-.31,8.12.29,13.5,1.23,2.85.5,6.63,1.27,11.05,2.46m143,232.67a62,62,0,0,1,12,2,17.93,17.93,0,0,0,7.22,1,43.81,43.81,0,0,0,4.81-1c2.52-.53,5.85-1.26,7.25-1.43M1774.28,5.09c9.82,0,17.76-2.31,24.55-2.45a165.36,165.36,0,0,1,23.33,1.23c5.85.71,10.84,1.63,14.74,2.45m9.82,239.42c9.14,3.23,16.13,3.16,20.87,2.46,3.65-.54,4.12-1.18,11.05-2.46,8.79-1.62,10.84-1.12,16-2.46a44.86,44.86,0,0,0,13.51-6.13" transform="translate(0.06 0)" variants={introVariant} initial="initial" animate="animate" />        
        </motion.svg>
    )
}
export default Intro
