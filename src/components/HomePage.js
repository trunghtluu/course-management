import React from 'react';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="jumbotron">
            <h1>Course Management Application</h1>
            <p>React, Flux, and React-Router for Ultra-repsonsive web application.</p>
            <Link to="about" className="btn btn-primary">About</Link>
        </div>
    );
}

export default HomePage;
