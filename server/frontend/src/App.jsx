
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Register from "./components/Register/Register";

function Home() {
    return (
        <div style={{ padding: "50px", textAlign: "center" }}>
            <h1>Welcome to AutoHub</h1>
            <p>Your trusted Cars Dealership platform.</p>
            <Link to="/register">Create an Account</Link>
        </div>
    );
}

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    );
}
