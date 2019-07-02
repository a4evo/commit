import React from 'react';
import {Grid} from "@material-ui/core";

export const CenterGrid = (props) => {
    return (
        <Grid
            container
            spacing={0}
            direction='column'
            alignItems='center'
            justify='center'
            style={gridStyle}
        >
            {props.children}
        </Grid>
    )
};

const gridStyle = {
    minHeight: '400px',
    background: ' linear-gradient(to right, #512DA8, #673AB7)'
};