import styled from 'styled-components';

export const FooterStyle=styled.div`

background-color:#1d1d1d;

.container{

    font-family:Roboto;
    display: flex;
    flex-flow: row nowrap;
    width:80%;
    margin-left:10%;
    margin-right:10%;
    margin-top:15px;

} 




.container p{

    text-align:justify;
    font-family: Roboto;
    font-size: 17px;
    line-height: 20px;
    width:100%;
    color: white;

}

.info p{
        margin-top:10px;
        width:40%;
}
.podcast-channels{

    display:flex;
    flex-direction:row;
    flex-flow:wrap;
    width:50%;
}
.podcast-channels img{

    height:30px;
    width:32px;
    cursor:pointer;
    margin:10px;
}

.pagemap{
    display:flex;
    flex-direction:column;
    margin-left:-60px;
    cursor:pointer;
}

li {

    list-style-type:none;
    color:grey;
    padding:10px;
    width:10%;
}

li:hover{
    color:white;
    
}

a:hover{
    
    color:white;
}

#copyright a{

        text-decoration:underline;
       
    }
@media only screen and (max-width:640px){

    img{
        width:200px;
        height:60px
    }
    .container{

        display: flex;
        flex-direction:column-reverse;
        justify-content:flex-start;
        width:90%;
        margin-right:2%;

    }
    .container p{
        text-align:justify;
        font-size: 15px;
        line-height: 15px;
        width:100%;
        color: white;
    }

    .info p{
        margin-top:10px;
        width:80%;
    }
    .podcast-channels{

        display:flex;
        flex-direction:row;
        flex-flow:wrap;
        width:80%;
    }
    .podcast-channels img{

        height:20px;
        width:22px;
        margin:10px;
    }

    .episodes{
        display:flex;
        flex-direction:column;
    }


    .episodes div{
        padding:5px;
    }

    .pagemap{
        display:flex;
        flex-direction:column;
        padding:5px;
        margin-left:-40px;
        cursor:pointer;
    }

    li{
        padding:5px;
    }

    #copyright{

            margin-right:24px;
        
    }

   
}
`