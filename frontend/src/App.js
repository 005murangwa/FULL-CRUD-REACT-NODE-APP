import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={TaskList} />
                <Route path="/add" component={TaskForm} />
                <Route path="/edit/:id" component={TaskForm} />
            </Switch>
        </Router>
    );
};

export default App;
