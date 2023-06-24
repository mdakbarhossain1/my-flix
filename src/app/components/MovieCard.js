import React from 'react';
import styles from '@/app/styles/common.module.css';
import movieStyle from '@/app/styles/movieCard.module.css'
import Image from 'next/image';
import Link from 'next/link';

const MovieCard = (curElem) => {

    const {id, title, synopsis} = curElem.jawSummary;
    // console.log(curElem);
    return (
        <>
           <div className={styles.card}>
            <div className={styles.card_image}>
                <Image src={curElem.jawSummary.backgroundImage.url} alt="This is movie poster" width={260} height={200}/>
            </div>
            <div className={movieStyle.card_data}>
                <h2>{title.slice(0,16)}</h2>
                <p>{`${synopsis.slice(0,66)} ...`}</p>

                <Link href={`/movies/${id}`}>
                    <button>Read More</button>
                </Link>
            </div>
           </div>
        </>
    );
};

export default MovieCard;