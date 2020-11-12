import styled from 'styled-components';

export const FooterStyle=styled.div`

background-color:#1d1d1d;

.container{

    font-family:Roboto;
    display: grid;
    grid-template-columns:1fr 1fr;
    grid-template-rows: 1fr;
    width:100%;
    padding-left:10%;
    margin-top:15px;

} 



.container p{

    text-align:justify;
    font-family: Roboto;
    font-size: 17px;
    line-height: 20px;
    width:100%;
    color: white;
    f
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

.pagemap{
    display:flex;
    flex-direction:column;
    padding:10px;
    cursor:pointer;
}

li {

    list-style-type:none;
    color:white;
    padding:10px;
}

li:hover{
    color:grey;
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