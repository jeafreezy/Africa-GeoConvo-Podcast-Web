import React from 'react';
import SupportTheShow from '../About/SupportTheShow';
import Subscribe from './Subscribe';
import styled from 'styled-components';


const Wrapper = styled.div`

   
    

`

export default function SupportSubscribe(){

    return(
        <>
            <Wrapper>

                <Subscribe />
                <SupportTheShow />
                
            </Wrapper>
        </>
    );
}