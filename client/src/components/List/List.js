import React, { useState, useEffect } from 'react';
import { useNavigate, createSearchParams } from 'react-router-dom';
import styled from 'styled-components';

import Contributor from './Contributor.js';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.h1`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const CardList = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
`

const List = () => {
    const [contributors, setContributors] = useState([]);
    const navigate = useNavigate();

    useEffect( () => {
            fetch('/api/contributors')
            .then(res => res.json())
            .then(res => setContributors(res.data))
            .catch(err => console.log('Error: ', err))
    }, []);



    const handleUser = (user) => {
        navigate({
            pathname: '/details',
            search: createSearchParams({
                username: user
            }).toString()
            
        })
    }

    return (
        <Container>
            <Title>
                React Contributors
            </Title>
                <Contributor contributors={contributors} handleUser={handleUser}/>
        </Container>
    )
}

export default List;
