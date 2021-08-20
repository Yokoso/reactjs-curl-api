import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';


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
    const [navData] = useState(
        [
            {title: "Sportwee DEV", link: "#", id: 1}, 
            {title: "O nas", link: "#", id: 2}, 
            {title: "Pomoc", link: "#", id: 3}, 
            {title: "LOG IN", link: "#", id: 4}, 
            {title: "SIGN UP", link: "#", id: 5}
        ]
    );

    return (
        <header className={classes.header} >
            <nav>
                <Grid container title="testHeader">

                        {navData.map(data => (
                            <Grid item key={data.id}>
                                <li className={classes.linksLi}><a href={data.link}className={classes.linksA}>{data.title}</a></li>
                                {console.log(data[data])}
                            </Grid>
                        ))}

                    
                </Grid>
            </nav>
        </header>
    )
}
