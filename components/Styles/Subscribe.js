import styled from 'styled-components';


export const SubscribeStyle=styled.div`

.container{

    font-family:Roboto;
    display: flex;
    width:95%;
    margin-left:2.5%;
    margin-right:2.5%;
    padding:0px;
} 
.subscribe{
    width:100%;
}
.subscribe p{
    width:100%;
    margin-left:5%;
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

.newsletter{
    
    width:100%;

}
.newsletter p{

    text-align:justify;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 20px;
    width:80%;
    margin-bottom:15px;
    margin-left:5%;
    color: rgba(9, 18, 109, 0.54);
}

.newsletter-email input{
    margin-left:5%;
    width:70%;
    padding:20px;
    border-radius:30px;
    outline: none;
    border: 1px dashed #09126D;
}

.newsletter input:focus-within{
    
    outline: none;

}
.newsletter input:hover{

    box-shadow: 1px 1px 8px 1px #09126D;
}

.newsletter-email button{
    width:30%; 
    margin-left:-20%;
    padding:20px;
    border-radius:30px;
    background-color:#09126D;
    color:white;
    border: 1px solid #09126D;
    cursor:pointer;

}
.podcasts{
    display:flex;
    flex-flow:wrap;
    width:80%;
    margin-top:5%;
    
}
.podcasts div{
    
    text-align:center;
    padding:10px;
}
.podcasts img{

    height:60px;
    width:62px;
    padding:5px;
    cursor:pointer;
    
}

@media(max-width:661px){

    .container{

        display:grid;
        grid-template-columns: 1fr;
        grid-template-rows: 2fr;
        gap: 0px 0px;
        width:90%;
        margin-left:5%;
        margin-right:5%;

    }

    .body p{

        font-size: 12px;
        line-height: 15px;
        
    }

    .newsletter p{

        font-size: 12px;
        line-height: 15px;
        width:80%;
    }


    .newsletter-email input{
            width:70%;
            padding:13px;
            border-radius:35px;
            border:1px dashed #09126D;
    }


    .newsletter-email button{
        width:30%;
        margin-left:-50px;
        padding:16px;
        border-radius:35px;
        font-size:10px;
        border: 1px solid #09126D;
        
    }
    .podcasts{

        display:flex;
        width:100%;
        flex-direction:row;
        flex-flow:wrap;
            
    }
    .podcasts img{
    
        height:30px;
        width:32px;
        cursor:pointer;
        
    }

}
`