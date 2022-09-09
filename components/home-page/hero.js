import React from 'react';
import classes from './hero.module.css'
import Image from "next/image";

const Hero = () => {
    return (
        <section className={classes.hero}>
            <div className={classes.image}>
                <Image src='/images/site/dennis.png' alt='a image showing dennis' width={300} height={300}/>
            </div>
            <h1>Hi, I'm Dennis</h1>
            <p>I blog about web development - especially javascript frameworks like React and Node js</p>
        </section>
    );
};

export default Hero;