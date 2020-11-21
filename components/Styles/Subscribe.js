import styled from 'styled-components';


export const SubscribeStyle=styled.div`

.container{

    font-family:Roboto;
    display: flex;
    width:90%;
    margin-left:5%;
    margin-right:5%;

} 
.subscribe{
    width:100%;
}
.subscribe p{
    width:100%;
    ${'' /* margin-left:5%; */}
}
.body p{

    text-align:justify;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 20px;
    color: rgba(9, 18, 109, 0.54);
}

.podcast-channels{
    display:flex;
    flex-flow:wrap;
    width:80%;
    margin-top:5%;
    
}
.podcast-channels div{
    
    text-align:center;
    padding:10px;
}
.podcast-channels img{

    height:60px;
    width:62px;
    padding:5px;
    cursor:pointer;
    
}

@media only screen and (max-width:661px){

    .container{

        display:flex;
        flex-flow:wrap;
        width:90%;
        margin-left:5%;
        margin-right:5%;

    }

    .body p{

        font-size: 15px;
        line-height: 12px;
        
    }

    
    .podcast-channels{

        display:flex;
        width:100%;
        flex-direction:row;
        flex-flow:wrap;
            
    }
    .podcast-channels img{
    
        height:30px;
        width:32px;
        cursor:pointer;
        
    }

}
`