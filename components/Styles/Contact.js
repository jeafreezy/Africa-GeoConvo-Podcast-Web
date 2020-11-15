import styled from 'styled-components';

export const ContactUsStyle=styled.div`

        .container{

            font-family:Roboto;
            display: grid;
            grid-template-columns: 1.5fr 0.5fr;
            grid-template-rows: 1fr;
            gap: 0px 0px;
            width:90%;
            margin-left:5%;
            margin-right:5%;
            margin-bottom:100px;

        } 
    
    

        .container p{

            text-align:justify;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 20px;
            line-height: 33px;
            width:50%;
            color: rgba(9, 18, 109, 0.54);
        }
        .contact-form{
           
            width:100%;
        }
        .contact-form input{        
            width:100%;
            padding:20px;
            margin-top:10px;
        }

        
        .contact-form button{
            width:100%;
            padding:20px;
            outline: none;
            border: 1px solid #09126D;
            background-color:#09126D;
            color:white;
            cursor:pointer;
            margin-top:10px;
        }
       .contacts{
            display:flex;
            flex-flow:wrap;
            width:100%;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            text-align:center;
            
        }
        .contacts img{

            height:30px;
            width:32px;
            cursor:pointer;
            
        }
        @media only screen and (max-width:600px){

        .container{

            display:flex;
            flex-flow:column wrap;
            width:90%;
            margin-left:5%;
            margin-right:5%;

        }
        .container p{    
            font-size: 15px;
            line-height: 20px;
            width:100%;
            
        }

        .contacts div{

            display:flex;
            width:100%;
            justify-content:flex-start;
            padding:10px;
            align-items:center;

        }
        .contacts img{

            height:25px;
            width:27px;
            cursor:pointer;

        }

        .contacts p{
            padding:5px;
        }
}
`