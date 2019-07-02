import React from 'react';
import {CenterGrid} from './CenterGrid';
import Typography from '@material-ui/core/Typography';
import {Fab} from '@material-ui/core';
import {Link} from 'react-router-dom';

const Score = ({questions, answers, clearAnswers}) => {
    const total = questions.length;
    const rightAnswers = answers.reduce((res, val, i) => val === questions[i]['answer'] ? res + 1 : res, 0);

    return (
      <CenterGrid>
          <Typography variant='h1'>
            Score: {rightAnswers} / {total}
          </Typography>
          <Fab color='secondary' onClick={clearAnswers}  variant='extended' component={Link} to='/quiz/0'>
              Try Again
          </Fab>
      </CenterGrid>
    );
};

export default Score;