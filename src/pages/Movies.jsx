import { useState, useEffect } from "react";
import data from "../feed/sample.json";
import Entry from "../components/Entry";

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const compare = (a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
    };

    const fetchData = () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(data);
            }, 1000);
        });
    };

    const getMovies = async () => {
        try {
            setLoading(true);

            const { entries } = await fetchData();
            const movies = entries.filter(
                entry => entry.programType === "movie"
            );
            const filtered = movies.filter(serie => serie.releaseYear >= 2010);
            const sorted = filtered.sort(compare);
            const paginated = sorted.length > 21 ? sorted.slice(0, 21) : sorted;

            setMovies(paginated);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            setErrorMessage(err.message);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (errorMessage) return <p>'Oops, something went wrong'</p>;

    return (
        <div className="d-flex flex--wrap justify-space-between">
            {movies.map((movie, i) => (
                <Entry key={i} item={movie} />
            ))}
        </div>
    );
};

export default Movies;
