
import Image from 'next/image';
import React from 'react';
import styles from '@/app/styles/common.module.css';
import './movieDetails.css';
const DynamicRoute = async ({ params }) => {

    const id = params.id
    const url = `https://netflix54.p.rapidapi.com/title/details/?ids=${id}&lang=en`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '02586c9b78msh404c2aa068bbbdap175112jsn3b1e6489d9fb',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const main_data = data[0].details;
    const genres = main_data?.genres;
    const cast = main_data.cast;

    console.log(data);


    return (
        <div className={styles.container}>
            <h2 className={styles.movie_title}>   Netflix \ <span> {main_data?.type} </span> </h2>
            <div className={styles.card_section}>
                <div>
                    <Image src={main_data?.backgroundImage.url} alt={main_data.title} width={600} height={300} />
                </div>
                <div>
                    <h1>{main_data?.title}</h1>
                    <p>{main_data.synopsis}</p>

                </div>

                <div className="details">
                    <h2>More Details</h2>
                    <div className={styles.grid_two_section}>
                        <div className="genres">
                            <h4>GENRES</h4>
                            {
                                genres?.map((gn) => (<span key={gn.id}>{gn.name} / </span>))
                            }
                        </div>
                        <div className="cast">
                            <h4>CASTS</h4>
                            {
                                cast ? cast?.map((gn) => (<span key={gn.id}>{gn.name}, </span>))
                                    : ''
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default DynamicRoute;