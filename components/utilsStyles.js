
import styled from 'styled-components';

export const TitleStyles=styled.h3`

        display:flex;
        justify-content:flex-start;
        flex-flow:column wrap;
        color:#09126D;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 40px;
        line-height: 47px;
        margin-left:5%;
        margin-top:30px;
        margin-bottom:30px;

        &::after{
            content:'';
            width:10%;
            margin-top:20px;
            height:3px;
            display:block;
            background: #09126D;
        }
        @media only screen and (max-width:600px){
            display:flex;
            justify-content:flex-start;
            flex-flow:column wrap;
            font-size: 20px;
            line-height: 15px;

            &::after{
            margin-top:10px;
            height:3px;

        }
        }
`;

export const Button=styled.h3`

    #btn-wrapper{

    display:flex;
    justify-content:center;
    align-items:center;
    width:40%;
    margin-left:30%;
    margin-right:30%;
    }

    button{
        margin-top:20px;
        width:100%;
        padding:15px;
        color:white;
        cursor:pointer;
        text-align:center;
        text-transform:uppercase;
        text-decoration:none;
        border:none;
        font-weight:bold;
        background-color: #09126D;
        ${'' /* box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19); */}
        

    }

    button:hover{
        background-color: rgba(9, 18, 109, 0.54);
    }

    @media only screen and (max-width:600px){

        button{
            margin-top:10px;
            width:100%;
            padding:10px;
            box-shadow: none;

        }
        #btn-wrapper{

            display:flex;
            justify-content:center;
            align-items:center;
            width:80%;
            margin-left:10%;
            margin-right:10%;
        }
    }

`;