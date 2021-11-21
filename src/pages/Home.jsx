import Card from "../components/home/Card";

const tiles = [
    { title: "SERIES", text: "Popular Series", to: "/series" },
    { title: "MOVIES", text: "Popular Movies", to: "/movies" },
];

const Home = () => {
    return (
        <div className="d-flex">
            {tiles.map((tile, i) => (
                <Card key={i} item={tile} className="mr-5" />
            ))}
        </div>
    );
};

export default Home;
