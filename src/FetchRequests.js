import React, {useState, useEffect, useRef} from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {Container} from '@material-ui/core';

export default function FetchRequests() {
    const [data, setData] = useState([]);
    const [sendRequest, setSendRequest] = useState(false);

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
            <Button onClick={() => setSendRequest(true)} variant="contained" color="primary"  className="fetch-button">Get Data</Button>
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