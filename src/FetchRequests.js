import React, {useState, useEffect, useRef} from 'react';
import Button from '@material-ui/core/Button';


export default function FetchRequests() {
    const [data, setData] = useState([]);

    useEffect(() => {
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
    }, []);

    return (
        <div>
            <Button variant="contained" color="primary"  className="fetch-button">Get Data</Button>
            <ul>
                {data.map(data => (
                    <li /* key={data} */>
                        {data}
                    </li>
                ))}
            </ul>
        </div>
    );
}