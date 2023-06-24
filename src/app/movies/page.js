
import MovieCard from '../components/MovieCard';
import styles from '@/app/styles/common.module.css';

const movies = async () => {

    await new Promise(resolve => setTimeout(resolve,1000))

    const url = process.env.RAPID_KEY;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '02586c9b78msh404c2aa068bbbdap175112jsn3b1e6489d9fb',
            'X-RapidAPI-Host': 'netflix-data.p.rapidapi.com'
        }
    };

    const res = await fetch(url, options);
    const data = await res.json();
    const mainData = data.titles;
    // console.log(data);



    return (
        <>
            <section className={styles.movieSection}>
                <div className={styles.container}>
                    <h1>Movies & Drama</h1>
                    <div className={styles.card_section}>
                        {
                            mainData.map((curElem) => {
                                return <MovieCard key={curElem.id} {...curElem} />
                            })
                        }
                    </div>
                </div>
            </section>

        </>
    );
};

export default movies;