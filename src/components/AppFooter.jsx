import { Link } from "react-router-dom";
import fbLogo from "../assets/social/facebook-white.svg";
import twLogo from "../assets/social/twitter-white.svg";
import igLogo from "../assets/social/instagram-white.svg";
import asLogo from "../assets/store/app-store.svg";
import psLogo from "../assets/store/play-store.svg";
import wsLogo from "../assets/store/windows-store.svg";

const navLinks = [
    { title: "Home", to: "/" },
    { title: "Terms and Conditions", to: "/terms-and-conditions" },
    { title: "Privacy Policy", to: "/privacy-policy" },
    { title: "Collection Statement", to: "/collection-statement" },
    { title: "Help", to: "/help" },
    { title: "Manage Account", to: "/manage-account" },
];

const socials = [
    { src: fbLogo, alt: "Facebook logo" },
    { src: twLogo, alt: "Twitter logo" },
    { src: igLogo, alt: "Instagram logo" },
];

const stores = [
    { src: asLogo, alt: "App Store logo" },
    { src: psLogo, alt: "Play Store logo" },
    { src: wsLogo, alt: "Windows Store logo" },
];

const AppFooter = () => {
    return (
        <div className="app-footer">
            <div>
                {navLinks.map(navLink => (
                    <Link
                        key={navLink.to}
                        to={navLink.to}
                        className="footer-link"
                    >
                        {navLink.title}
                    </Link>
                ))}
            </div>

            <div className="copyright-text">
                Copyright &copy; 2016 Demo Streaming. All Rights Reserved
            </div>

            <div className="pt-5 d-flex justify-space-between">
                <div>
                    {socials.map(social => (
                        <img
                            key={social.alt}
                            src={social.src}
                            alt={social.alt}
                            width="40"
                            height="40"
                            className="mr-5"
                        />
                    ))}
                </div>

                <div>
                    {stores.map(store => (
                        <img
                            key={store.alt}
                            src={store.src}
                            alt={store.alt}
                            width="auto"
                            height="50"
                            className="mr-5 contain"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AppFooter;
