import React from 'react';
import { SearchBoxStyle } from '../Styles/Episodes';

const Search = ({searchChange})=>{
        
        return(

            <SearchBoxStyle>
                <div  className='searchbox'>

                        <input type="search" placeholder="Search episodes by title, host, date or episode number..." title="Search Episodes" onChange={searchChange}></input>
                </div>
            </SearchBoxStyle>
        )   
}








export default Search;