import React from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';

function Header() {
    return (
        <Container>
            <a href="#">
                <img src="/images/mercedes-benz.svg" alt=""/>
            </a>
            <Menu>
                <a href="#">Benz - Coupe</a>
                <a href="#">Benz - Astra</a>
                <a href="#">Benz - AMG</a>
                <a href="#">C - Series</a>
            </Menu>
            <RightMenu>
                <a href="">Shop</a>
                <a href="">Account</a>

                <CustomMenu/>
            </RightMenu>
        </Container>
    )
}

export default Header

const Container = styled.div`
    min-height:60px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top:0;
    left:0;
    right:0;
`

const Menu = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a{
        font-weight:600;
        text-transform: uppercase;
        padding:0 10px;
        flex-wrap:nowrap;
        color:#E9AA12;
    }

    @media(max-width: 768px){
        display: none;
    }
`

const RightMenu = styled.div`
    display: flex;
    align-items: center;
    a{
        margin-right: 10px;
        text-transform: uppercase;
        font-weight:600;
        color: #E9AA12;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`
