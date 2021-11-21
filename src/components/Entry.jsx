const Serie = ({ item }) => {
    return (
        <div className="serie">
            <img
                src={item.images[`Poster Art`].url}
                alt=""
                width="100%"
                height="auto"
                className="d-block cover"
            />
            {item.title}
        </div>
    );
};

export default Serie;
