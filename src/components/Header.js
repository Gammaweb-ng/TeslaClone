import React, { useState } from 'react'
import styled from "styled-components"
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Slide from 'react-reveal/Slide'

function Header() {
    const [burgerStatus, setBurgerStatus ] = useState(false);

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

            {/* right menu (shop and hamburger menu) */}

            <RightMenu>
                <a href="">Shop</a>
                <a href="">Account</a>
                <CustomMenu onClick={() => setBurgerStatus(true)}/>
            </RightMenu>
            <BurgerNav show={burgerStatus}>

                {/* close div */}

                <CloseWrapper>
                    <CustomClose onClick={() => setBurgerStatus(false)}/>
                </CloseWrapper>

                {/* navigation */}

                <Slide right>
                    <li><a href="#">Existing Inventory</a></li> 
                    <li><a href="#">Used Inventory</a></li> 
                    <li><a href="#">Trade-In</a></li>
                    <li><a href="#">A - Class</a></li>
                    <li><a href="#">B - Class</a></li>
                    <li><a href="#">C - Class</a></li>
                    <li><a href="#">G - Class</a></li>
                    <li><a href="#">V - Class / eqv</a></li>
                    <li><a href="#">Mercedes - Maybach</a></li>
                    <li><a href="#">EQC - Offroader</a></li>
                </Slide>
            </BurgerNav>
            {/* end of right menu (shop and hamburger menu) */}
            
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
    z-index:1;
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

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    display:flex;
    justify-content: flex-end;
    
`

const BurgerNav = styled.div`
    position: fixed;
    top:0;
    bottom:0;
    right:0;
    background-color:#E9AA12;
    width:300px;
    z-index:16;
    list-style: none;
    padding:20px;
    display:flex;
    flex-direction:column;
    text-align:start;
    text-transform: uppercase;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s ease-in;

    li{
        padding: 15px 0;
        border-bottom:1px solid rgba(0,0,0,0.2);
        cursor: pointer;
        a{
            font-weight: 600;
        }
    }

`
