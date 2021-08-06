import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';


export default function FetchRequests() {
    const [data, setData] = useState([]);
    const [toggle, setToggle] = useState(false);

    useEffect(() => {
        fetch("https://dev.mulwi.cloud/api/tag")
        .then(response => response.json())
        .then(result => setData(result)
        )
    }, []);

    if (toggle) {
        return (
            <div>
                <Button variant="contained" color="primary" onClick={() => setToggle(toggle === false ? true : false)} className="fetch-button">Get Data</Button>
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
    else return <Button variant="contained" color="primary" onClick={() => setToggle(toggle === false ? true : false)} className="fetch-button">Get Data</Button>
}