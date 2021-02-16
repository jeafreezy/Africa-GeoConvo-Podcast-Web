import styled from 'styled-components';

export const FooterStyle=styled.footer`

background-color:#1d1d1d;

.container{

    font-family:Roboto;
    display: flex;
    flex-flow: row nowrap;
    justify-content:space-between;
    width:80%;
    margin-left:5%;
    margin-right:5%;
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

.pagemap ul{
    display:flex;
    flex-direction:column;
        
}

li {

    list-style-type:none;
    color:grey;
    padding:10px;
    width:10%;
}

.pagemap ul li {
    
        text-decoration:underline;
        cursor:pointer;
}

a:hover{
    
    color:white;
}
#copyright{

        margin-bottom:20px;
        color:grey;
        width:100%;
        margin-left:25%;
        text-align:center;

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
        
    }
    .pagemap ul li {
        text-decoration:underline;
        cursor:pointer;
    }
    li{
        padding:5px;
    }

    #copyright{

            margin-bottom:20px;
            fontSize:12px;
            color:grey;
            width:100%;
            margin-left:-5%;
            text-align:center;

    }

   
}
`