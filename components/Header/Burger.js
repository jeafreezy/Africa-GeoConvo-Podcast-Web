import React, { useState } from 'react';
import RightNav from './RightNav';
import { StyledBurger } from '../Styles/Header';

const Burger=()=>{
    const [open,setOpen]=useState(false)
    return(
        <>
            <StyledBurger open={ open } onClick={()=>{setOpen(!open) }} >
            
                <div className='styledburger'/>
                <div  className='styledburger'/>
                <div  className='styledburger'/>
                
            </StyledBurger>
            <RightNav open={open}/>
        </>
    )
}






export default Burger;