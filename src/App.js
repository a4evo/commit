import React, {Fragment, useEffect, useState} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {Container, Card, CssBaseline} from '@material-ui/core';
import './App.css';
import StartPage from './components/StartPage';
import Quiz from './components/Quiz';
import Score from './components/Score';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
        root: {
            background: theme.palette.primary.light,
            height: '100vh',
            paddingTop: '20px'
        },
        card: {
            minHeight: '300px',
        }
    })
);
const App = () => {
    const classes = useStyles();
    const [questions, setQuestions] = useState([]);
    const [answers, setAnswers] = useState([]);

    useEffect(() => {
        setQuestions(require('./questions'));
    }, []);

    useEffect(() => {
        const res = Array.apply(null, {length: questions.length || 1})
            .map(() => '');
        setAnswers(res);
    }, [questions]);

    const handleAnswerChange = (e, i) => {
        const res = [...answers];
        res[i] = e.target.value;
        setAnswers(res);
    };
    const clearAnswers = () => setAnswers(Array.apply(null, {length: questions.length || 1})
        .map(() => ''));
    return (
        <Fragment>
            <CssBaseline/>
            <Container classes={{root: classes.root}}>
                <Card classes={{root: classes.card}}>
                    <Switch>
                        <Route exact path='/' component={StartPage}/>
                        <Route path='/score'
                               render={(props) => <Score {...props} questions={questions} answers={answers}
                                                         clearAnswers={clearAnswers}/>}/>
                        <Route path='/quiz/:number'
                               render={(props) =>
                                   <Quiz {...props} questions={questions} answers={answers}
                                         handleAnswerChange={handleAnswerChange}/>}/>
                        <Redirect to='/'/>
                    </Switch>
                </Card>
            </Container>
        </Fragment>
    );
};

export default App;
