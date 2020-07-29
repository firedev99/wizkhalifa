import React from 'react';
import { List, DashedWrapper, Image, Labels, Title, SubTitle } from '../../styles/LandingStyles';
import { Link, useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';
//data
import { ALBUMS } from '../../helper/albumData';
import { firstNameVariant, secondNameVariant, firstLetterVariant, secondLetterVariant, svgVariant, dashedWrapper } from '../../helper/Animations';


const LandingAlbumsPreview = () => {
    let history = useHistory()

    return (
        <>
            {ALBUMS.map(item => (
                <List key={item.id}>
                    <DashedWrapper variants={dashedWrapper} initial="initial" animate="animate">
                        <Link to={`/albums/${item.albumId}`} onClick={() => {history.push(`/albums/${item.albumId}`); window.location.reload();}}>
                            <Image>
                                <motion.img initial={{ width: 0, opacity: 0, x: "-120%" }} animate={{ x: 0,opacity: 1,width: "100%",transition: { delay: 2.5, duration: 1.2, ease: [0.6, 0.01, -0.05, 0.9] } }} whileHover={{ scale: 1.15, transition: { duration: 1.2, ease: [0.5, 0.01, -0.05, 0.9] } }} className="albums" src={item.imageSrc} alt={item.title} />
                            </Image>
                        </Link>
                    </DashedWrapper>
                    <Labels variants={svgVariant} initial="initial" animate="animate">
                        <img src={item.svgSrc} alt={item.title} />
                    </Labels>
                    <Title variants={firstNameVariant} initial="initial" animate="animate" exit="exit">
                        {item.title.split("").map((letter, index) => (
                        <motion.span key={index} variants={firstLetterVariant} className="title">{letter}</motion.span>
                        ))}
                    </Title>
                    
                    <SubTitle variants={secondNameVariant} initial="initial" animate="animate">
                        {item.subTitle.split("").map((letter, index) => (
                            <motion.span key={index} variants={secondLetterVariant} className="subTitle">{letter}</motion.span>
                        ))}
                    </SubTitle>
                </List>
            ))}
        </>
    )
}

export default LandingAlbumsPreview;
