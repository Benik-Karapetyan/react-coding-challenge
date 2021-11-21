import { Link } from "react-router-dom";
import placeholderImage from "../../assets/placeholder.png";

const Card = ({ item, className }) => {
    return (
        <div className={`${className}`}>
            <Link to={item.to}>
                <div className="black white--text pos-relative py-5 px-10 mb-2">
                    <img
                        src={placeholderImage}
                        alt="cinema"
                        width="80"
                        height="200"
                        className="d-block cover"
                    />
                    <h1 className="card-title">{item.title}</h1>
                </div>
            </Link>

            {item.text}
        </div>
    );
};

export default Card;
