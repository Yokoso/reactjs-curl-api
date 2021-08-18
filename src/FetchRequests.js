import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { Container } from '@material-ui/core';

const useStyles = makeStyles({
    btn: {
        backgroundColor: "#5cd3ac",
        color: "#fff"
    }
})

export default function FetchRequests() {
    const [data, setData] = useState([]);
    const [sendRequest, setSendRequest] = useState(false);

    const classes = useStyles();

    useEffect(() => {
        if(sendRequest) {
            async function fetchData() {
                try {
                    const response = await fetch("https://dev.mulwi.cloud/api/tag")
                    const result = await response.json()
                    setData(result)
                }
                catch(e) {
                    console.error(e)
                }
            }
            fetchData();

            setSendRequest(false);
        }
            
    }, [sendRequest]);

    return (
        <Container>
            <Button onClick={() => setSendRequest(true)}
                title="testButton" 
                variant="contained"  
                className={classes.btn}
            >Get Data</Button>
            <br />
            <Grid container>
                {data.map(data => (
                    <Grid item /* key={data} */ xs={12} md={6} lg={4}>
                        <Paper style={{ padding: 10 }}>{data}</Paper>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}