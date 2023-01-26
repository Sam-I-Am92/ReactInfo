import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components';

const DetailsCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const AvatarImg = styled.div`
    margin: 10px;
`

const Content = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`

const imgStyle = {
    borderTopLeftRadius: '5%',
    borderTopRightRadius: '5%',
    borderBottomRightRadius: '5%',
    borderBottomLeftRadius: '5%',
    height: '450px',
    boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',
}

const Details = () => {
    const [details, setDetails] = useState({});
    const [searchParams] = useSearchParams();

    useEffect( () => {
        const username = searchParams.get("username")
        fetch(`/api/user/${username}`)
        .then(res => res.json())
        .then(res => setDetails(res.data))
        .catch(err => console.log('Error: ', err));
    }, []);

    return (
        <DetailsCard>
            <AvatarImg>
                <img src={details.avatar_url} 
                    alt="avatar"
                    style={imgStyle}
                />
            </AvatarImg>
            <Content>
                <h3>{details.login}</h3>
                <p>name: {details.name ? details.name : 'anonymous'}</p>
                <p>location: {details.location ? details.location : 'adrift'}</p>
                <p>bio: {details.bio ? details.bio : 'lacking'}</p>
                <p>followers: {details.followers}</p>
                <p>following: {details.following}</p>
            </Content>
        </DetailsCard>
    )


}

export default Details;