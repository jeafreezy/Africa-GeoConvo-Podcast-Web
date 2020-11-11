import styled from 'styled-components';

export const FooterStyle=styled.div`

background-color:rgba(9, 18, 109, 0.54);

.container{

    font-family:Roboto;
    display: grid;
    grid-template-columns:1.5fr 1fr 0.5fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    width:90%;
    margin-left:5%;
    margin-right:5%;

} 



.container p{

    text-align:justify;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 17px;
    line-height: 20px;
    width:100%;
    color: white;
}

.info p{
        margin-top:10px;
        width:80%;
}
.podcasts{

    display:flex;
    flex-direction:row;
    flex-flow:wrap;
    width:50%;
}
.podcasts img{

    height:30px;
    width:32px;
    cursor:pointer;
    margin:10px;
}

.episodes{
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    cursor:pointer;
    width:80%;
}


.episodes div{
    padding:10px;
}

.pagemap{
    display:flex;
    flex-direction:column;
    padding:20px;
    cursor:pointer;
}

li {

    list-style-type:none;
    color:white;
    padding:15px;
}
.footer-links{

    color:white;
    text-decoration:none;
}
.footer-links:hover{
    color:rgba(9, 18, 109, 0.54);
}
@media(max-width:640px){

    img{
        width:140px;
        height:60px
    }
    .container{

        display: flex;
        width:90%;
        margin-left:5%;
        margin-right:5%;

    }
    .container p{
        text-align:justify;
        font-size: 12px;
        line-height: 12px;
        width:100%;
        color: white;
    }

    .info p{
        margin-top:10px;
        width:80%;
    }
    .podcasts{

        display:flex;
        flex-direction:row;
        flex-flow:wrap;
        width:80%;
    }
    .podcasts img{

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
        padding:10px;
        cursor:pointer;
    }

    li{
        padding:5px;
    }
}
`