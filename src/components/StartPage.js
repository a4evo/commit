import React from 'react';
import {Fab} from '@material-ui/core';
import {Link} from 'react-router-dom';
import {CenterGrid} from "./CenterGrid";

const StartPage = () => {
    return (
        <CenterGrid>
            <Fab color='secondary' variant='extended' component={Link} to='/quiz/0'>
                Start quiz
            </Fab>
        </CenterGrid>
    );
};


export default StartPage;