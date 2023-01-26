import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
    display: flex;
    justify-content: flex-start;
    margin: 0px 25px;
`

const RootLayout = () => {
    return (
        <div>
            <Header>
                <nav>
                    <NavLink to="/">
                        <h1>React API</h1>
                    </NavLink>
                </nav>
            </Header>
            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default RootLayout;