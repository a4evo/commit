import React, {} from 'react';
import {CardActions, Grid} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";

const Navigation = ({number, answers}) => {
    const isFirst = number === '0';
    const isLast = +number === answers.length - 1;
    const invalid = answers[number] === '';
    return (
        <CardActions>
            <Grid
                container
                direction='row'
                alignItems='center'
                justify='space-between'
            >
                <Button component={Link} to={'/quiz/' + (+number - 1)} disabled={isFirst}>Prev</Button>
                <Typography align='center' color='textSecondary'>{ +number + 1} / {answers.length}</Typography>
                {!isLast ?
                    (<Button component={Link} color='primary' to={'/quiz/' + (+number + 1)}
                             disabled={invalid}>Next</Button>) :
                    (<Button component={Link} color='secondary' to={'/score'} disabled={invalid}
                             variant='contained'>Done</Button>)
                }
            </Grid>
        </CardActions>
    );
};

export default Navigation;