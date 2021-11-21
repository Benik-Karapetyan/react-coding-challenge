import { useState, useEffect } from "react";
import data from "../feed/sample.json";
import Entry from "../components/Entry";

const Series = () => {
    const [series, setSeries] = useState([]);
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

    const getSeries = async () => {
        try {
            setLoading(true);

            const { entries } = await fetchData();
            const series = entries.filter(
                entry => entry.programType === "series"
            );
            const filtered = series.filter(serie => serie.releaseYear >= 2010);
            const sorted = filtered.sort(compare);
            const paginated = sorted.length > 21 ? sorted.slice(0, 21) : sorted;

            setSeries(paginated);
            setLoading(false);
        } catch (err) {
            setLoading(false);
            setErrorMessage(err.message);
        }
    };

    useEffect(() => {
        getSeries();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (errorMessage) return <p>'Oops, something went wrong'</p>;

    return (
        <div className="d-flex flex--wrap justify-space-between">
            {series.map((serie, i) => (
                <Entry key={i} item={serie} />
            ))}
        </div>
    );
};

export default Series;
