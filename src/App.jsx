// import logo from "./logo.svg";
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const Series = lazy(() => import("./pages/Series"));
const Movies = lazy(() => import("./pages/Movies"));

const App = () => {
    return (
        <div className="App">
            <AppHeader />

            <main className="main-content">
                <Routes>
                    <Route path="/series" element={<Series />}></Route>
                    <Route path="/movies" element={<Movies />}></Route>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
            </main>

            <AppFooter />
        </div>
    );
};

export default App;
