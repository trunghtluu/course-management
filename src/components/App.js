import React from 'react';
import { Route, Switch } from "react-router-dom";

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import CoursesPage from './CoursesPage';
import Header from './common/Header';
import NotFoundPage from './NotFoundPage';
import ManageCoursePage from './ManageCoursePage';

function App() {
    return (
        <div className="container-fluid">
            <Header/>
            <Switch>
                <Route path="/" exact component={HomePage}/>
                <Route path="/courses" component={CoursesPage}/>
                <Route path="/about" component={AboutPage}/>
                <Route path="/course/:slug" component={ManageCoursePage}/>
                <Route path="/course" component={ManageCoursePage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    );
}

export default App;