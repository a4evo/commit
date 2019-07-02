import React, {Fragment} from 'react';
import {FormControl, FormControlLabel, Radio, RadioGroup, CardContent, CardHeader} from '@material-ui/core';
import Divider from "@material-ui/core/Divider";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    alignCenter: {
        textAlign: 'center'
    }
});
const Question = ({question, answer, setAnswer}) => {
    const classes = useStyles();
    return (
        <Fragment>
            <CardHeader title={question && question.name} titleTypographyProps={{align: 'center'}}/>
            <Divider variant='middle' light/>
            <CardContent classes={{root: classes.alignCenter}}>
                <FormControl>
                    <RadioGroup name='fieldset'
                                value={answer || ''}
                                onChange={setAnswer}
                    >
                        {question && question.options.map((option, i) => (
                            <FormControlLabel key={i} value={i.toString()} control={<Radio/>} label={option}/>
                        ))
                        }
                    </RadioGroup>
                </FormControl>
            </CardContent>
        </Fragment>
    );
};

export default Question;