import React from 'react';

import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

import { makeUpperCase, firstUpperCase } from '../../testFunctions';


const useStyles = makeStyles({
    header: {
        fontSize: 19,
        fontWeight: 600,
        backgroundColor: "#0e486e",
        color: "#fff"
    },
    secondaryColor: {
        color: "#b00020"
    },
    linksLi: {
        display: "inline",
        listStyleType: "none",
        margin: 10
    },
    linksA: {
        color: "#fff",
        textDecoration: "none"
    }
})


export default function Header() {
    const classes = useStyles()

    return (
        <header className={classes.header} >
            <nav>
                <Grid container title="testHeader">
                    <li className={classes.linksLi}><a href="#" className={classes.linksA}>{firstUpperCase("sportwee")} 
                        <span className={classes.secondaryColor}>{makeUpperCase("dev")}</span></a></li>
                    <li className={classes.linksLi}><a href="#" className={classes.linksA}>{firstUpperCase("o nas")}</a></li>
                    <li className={classes.linksLi}><a href="#" className={classes.linksA}>{firstUpperCase("pomoc")}</a></li>
                    <li className={classes.linksLi}><a href="#" className={classes.linksA}>{makeUpperCase("log in")}</a></li>
                    <li className={classes.linksLi}><a href="#" className={classes.linksA}>{makeUpperCase("sign up")}</a></li>
                </Grid>
            </nav>
        </header>
    )
}
