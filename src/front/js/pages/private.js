import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Private = () => {
    const [authenticated, setAuthenticated] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        // Verifica si el usuario está autenticado
        fetch(process.env.BACKEND_URL + "/api/validate", {
            method: "GET",
            credentials: "include"
        })
        .then(response => {
            if (response.ok) {
                setAuthenticated(true);
            } else {
                navigate("/login"); // Redirige al inicio de sesión si no está autenticado
            }
        })
        .catch(error => {
            console.error("Error:", error);
            navigate("/login"); // Redirige al inicio de sesión si ocurre un error
        });
    }, [navigate]);

    if (!authenticated) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mt-5">
            <h2>Private Area</h2>
            <p>Welcome to the private area!</p>
        </div>
    );
};

export default Private;
