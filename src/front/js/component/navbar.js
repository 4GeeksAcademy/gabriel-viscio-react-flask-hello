import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await fetch(process.env.BACKEND_URL + "/api/logout", {
                method: "POST",
                credentials: "include",
            });
            navigate("/login");
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return (
        <nav>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    );
};

export default Navbar;
