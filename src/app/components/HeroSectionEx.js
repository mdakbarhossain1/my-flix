import React from 'react';
import styles from '@/app/styles/common.module.css';
import heroex from '@/app/styles/heroSectionEx.module.css'
import Image from 'next/image';
const HeroSectionEx = () => {
    return (
        <div className={styles.container}>
            <div className={heroex.text}>
                <h1>Watch everywhere</h1>
                <h3>Stream unlimited movies and TV shows <br />on your phone, tablet, laptop, and TV</h3>
            </div>
            <div className={styles.grid_two_section}>
                <div className={heroex.hero_image}>
                    <Image src="/kids.png"
                        alt="Kid Profile"
                        fill
                        // sizes="(max-width: 100%), (max-height: 100%)"
                        
                    />
                </div>
                <div className={heroex.kid_text}>
                    <h1>Create profiles for kids</h1>
                    <h3> Send kids on adventures with their favorite characters in a space made just for them—free with your membership.
                    </h3>

                </div>
            </div>
        </div>
    );
};

export default HeroSectionEx;