import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import List from '../List/List.js';

const Repo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Home = () => {
    const [repo, setRepo] = useState({});

    useEffect( () => {
        fetch('/api/repo')
        .then(res => res.json())
        .then(res => setRepo(res.data))
        .catch(err => console.log('Error: ', err))
    }, []);

    return (
        <div>
            <Repo>
                <a href={repo.homepage}>
                    <h1>{repo.full_name}</h1>
                </a>
                <p>
                    {repo.description}
                </p>
            </Repo>
            <List />
        </div>
    )
};

export default Home;