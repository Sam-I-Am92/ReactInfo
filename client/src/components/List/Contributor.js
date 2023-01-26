import React from 'react'
import styled from 'styled-components';

const Cards = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    margin: 15px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

const Span = styled.span`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: space-evenly;
    padding: 0px 15px;
`

const Avatar = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 15px;
`

const imgStyle = {
    height: '150px',
    width: '150px',
    borderTopLeftRadius: '50%',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
    borderBottomLeftRadius: '50%',
}

const Contributor = (props) => {

    console.log('Contributor Props: ', props.contributors);
    const people = props.contributors.map((person, index) =>
        <Card key={index}>
            <Avatar onClick={() => props.handleUser(person.login)}>
                <img 
                    style={imgStyle} 
                    src={person.avatar_url} alt="avatar">
                </img>
            </Avatar>
            <Span>
                <p>Username: {person.login}</p>
                <p>Contributions: {person.contributions}</p>
            </Span>
        </Card>
    )


    return (
        <Cards>
            {people}
        </Cards>
    )
}

export default Contributor;