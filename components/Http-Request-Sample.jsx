import React, { useState, useEffect } from 'react';
import axios from 'axios';

/*
This sample component shows how to make an http request
to an external API and render the response data.

The component can be used in Docusaurus markdown
by adding the following lines anywhere within the file.

import Http from "./../../components/Http-Request-Sample"
*/

function WebRequest({children, url, hash, color}) {
    const [validator, setBlockValidator] = useState('Loading...');

    useEffect(() => {
        // Mounting Tasks
        postRequest(url, hash, setBlockValidator);
    }, []);

    return (
        <span
            style={{
                backgroundColor: color,
                borderRadius: '2px',
                color: '#ffffff',
                padding: '0.5rem',
            }}
        >
            {children}: Block {hash} was validated by {validator}
        </span>
    )
}

async function postRequest(url, hash, setBlockValidator) {
    // Request
    const headers = { headers: { 'Content-Type': 'application/json' }};
    const body = JSON.stringify({ "block_hash": hash });

    await axios.post(url, body, headers)
        // If successful
        .then(res => {
            const body = res.data.data;
            setBlockValidator(body.validator);
            console.log(`Http request to ${url} successful`);
        })
        // If error
        .catch((error) => {
            console.log('Http request error:');
            console.log(error);
        })
        // Executes if successful or if error was thrown
        .then(() => {
            console.log('Http request complete');
        });
}

export default WebRequest;