import React, {Fragment} from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
import Question from './Question';
import Navigation from './Navigation';

const Quiz = ({questions, answers, handleAnswerChange, match}) => {

    const {number} = match.params;
    const currentQuestion = questions[number];
    const currentAnswer = answers[number];

    const normalise = value => value * 100 / (questions.length);

    return (
        <Fragment>
            <Question answer={currentAnswer} question={currentQuestion} setAnswer={e => handleAnswerChange(e, number)}/>
            <LinearProgress variant='buffer' value={normalise(+number)}
                            valueBuffer={normalise(+number + (currentAnswer !== '' && 1))}/>
            <Navigation answers={answers} number={number} />
        </Fragment>
    )
};

export default Quiz;