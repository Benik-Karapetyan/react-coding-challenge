import { useLocation, Link } from "react-router-dom";

const AppHeader = () => {
    const { pathname } = useLocation();

    const calculatePageTitle = () => {
        return pathname === "/series"
            ? "Popular Series"
            : pathname === "/movies"
            ? "Popular Movies"
            : "Popular Titles";
    };

    return (
        <header className="app-header">
            <div className="main-bar">
                <h1 className="font-weight-normal">DEMO Streaming</h1>

                <div>
                    <Link to="/login" className="login-link">
                        Log in
                    </Link>

                    <button className="btn">Start your free trial</button>
                </div>
            </div>

            <div className="sub-bar">
                <h2 className="ma-0 font-weight-normal">
                    {calculatePageTitle()}
                </h2>
            </div>
        </header>
    );
};

export default AppHeader;
