
import React, { useState } from "react";
import "./Register.css";

export default function Register() {
    const [formData, setFormData] = useState({
        username: "",
        first_name: "",
        last_name: "",
        email: "",
        password: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });

        setMessage("");
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (Object.values(formData).some(value => !value.trim())) {
            setMessage("Please complete all five fields.");
            return;
        }

        setMessage(
            "Registration form completed successfully. Connect the registration API to create your account."
        );
    };

    return (
        <div className="register-page">
            <div className="register-card">

                <div className="register-brand">AUTO<span>HUB</span></div>

                <h1>Create Your Account</h1>

                <p className="register-subtitle">
                    Join Cars Dealership and explore dealerships
                    across the United States.
                </p>

                <form onSubmit={handleSubmit}>

                    <div className="register-field">
                        <label htmlFor="username">Username</label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            placeholder="Enter username"
                            value={formData.username}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="register-row">
                        <div className="register-field">
                            <label htmlFor="first_name">First Name</label>
                            <input
                                id="first_name"
                                name="first_name"
                                type="text"
                                placeholder="First name"
                                value={formData.first_name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="register-field">
                            <label htmlFor="last_name">Last Name</label>
                            <input
                                id="last_name"
                                name="last_name"
                                type="text"
                                placeholder="Last name"
                                value={formData.last_name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    </div>

                    <div className="register-field">
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Enter email address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="register-field">
                        <label htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Create a password"
                            value={formData.password}
                            onChange={handleChange}
                            minLength="8"
                            required
                        />
                    </div>

                    <button className="register-button" type="submit">
                        Register
                    </button>

                    {message && (
                        <p className="register-message" role="status">
                            {message}
                        </p>
                    )}

                </form>

                <p className="register-footer">
                    Already have an account? <a href="/login">Login</a>
                </p>

            </div>
        </div>
    );
}
