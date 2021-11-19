import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
    return (
        <Container>
            <Section 
                title="Benz Coupe" 
                description="Order Online for Touchless delivery"
                backgroundImg="benz-coupe.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />

            <Section 
                title="Benz Astra" 
                description="Order Online for Touchless delivery"
                backgroundImg="benz-astra.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />

            <Section 
                title="Benz AMG" 
                description="Order Online for Touchless delivery"
                backgroundImg="benz-amg.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />

             <Section 
                title="C - Series" 
                description="Order Online for Touchless delivery"
                backgroundImg="c-series.jpg"
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />

            <Section
                title="State of the Art Museum" 
                description="Jaw dropping classic vehicles"
                backgroundImg="museum.jpeg"
                leftBtnText="Book for a Tour"
                rightBtnText="Learn More"
            />

            <Section
                title="Accessories" 
                description=""
                backgroundImg="headphone2.jpg"
                leftBtnText="Shop now"
            />
            
        </Container>
    )
}

export default Home

const Container = styled.div`
    height:100vh;
    /* z-index:1; */

`
