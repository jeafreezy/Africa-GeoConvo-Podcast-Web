import styled from 'styled-components';


export const CardStyle=styled.div`

        box-sizing:border-box;

        .container{

            height: 300px;
            margin-left:2.5%;
            margin-right:2.5%;
            width:95%;                                                      
            display:flex;
            margin-bottom:10px;
            background-color:#fff;
            box-shadow: 0 5px 5px 0 rgba(0,0,0,0.24), 0 10px 10px 0 rgba(0,0,0,0.19);
        }

        #thumbnail{

            display:flex;
            align-items:center;
            justify-content:center;
            padding:5px;
            width:30%;

        }

        #thumbnail img{
            border-radius:5px;
            width:70%;
            height:90%;
            border:1px solid black;
        }

        .episode{
            display:flex;
            flex-flow:column nowrap;
            width:70% ;
            justify-content:center;
            padding:10px;

        }

        #episode-title{
            display:flex;
            width:100%;
            color:#09126D;
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 22px;
            margin-bottom:10px;
        }

        #episode-info{
            display:flex;
            width:100%;
            color: rgba(9, 18, 109, 0.54);
            font-style: normal;
            font-weight: normal;
            font-size: 18px;        

        }
        #episode-desc{
            display:flex;
            width:100%;
            font-size: 16px;
            margin-top:5px;
            color: grey;
            margin-bottom:10px;

        }

        .podcast-player{

            width:100%;
            z-index:1;
        }
        
        @media only screen and (min-width:832px) and (max-width: 1174px){
            #thumbnail img{
              
                width:80%;
                height:70%;
               
            }
        }

        @media only screen and (min-width:733px) and (max-width: 831px){

            .container{
                
                height: 220px;
            }

            #thumbnail{

                width:30%;

            }

            #thumbnail img{

                border-radius:5px;
                width:100%;
                height:100%;
            }

            .episode{

                flex-flow:column nowrap;
                justify-content:space-between;
                width:70% ;
                padding:5px;

            }

            #episode-title{
                display:flex;
                width:100%;
                color:#09126D;
                font-family: Roboto;
                font-style: normal;
                font-weight: bold;
                font-size: 16px;
            }
            #episode-info{
                display:flex;
                width:100%;
                color: rgba(9, 18, 109, 0.54);
                font-style: normal;
                font-weight: normal;
                font-size: 15px;        

            }
            #episode-desc{
                display:flex;
                width:100%;
                font-style: normal;
                font-weight:normal;
                font-size: 15px;
                margin-top:5px;
                color: grey;

            }


        }

        @media only screen and (min-width:530px) and (max-width:732px){

            .container{

                height: 220px;                                                    

            }

            #thumbnail{

                width:30%;

            }

            #thumbnail img{

                border-radius:2px;
                width:100%;
                height:80%;
            }

            .episode{

                width:70% ;
                padding:5px;

            }

            #episode-title{

                font-size: 14px;
            }
            #episode-info{

                font-size: 15px;        

            }
            #episode-desc{

                font-size: 15px;
                margin-top:5px;
                margin-bottom:5px;
                color: grey;

            }
            .podcast-player{

                width:100%;
                z-index:1;
            }
        }


        @media only screen and (max-width:529px){

            .container{

                height: 220px;                                                    

            }
            #thumbnail{
                display:none;
                width:30%;

            }

            #thumbnail img{
                display:none;
            }

            .episode{

                width:100%;
                margin-left:2%;
                padding:5px;

            }

            #episode-title{

                font-size: 13px;
            }
            #episode-info{

                font-size: 13px;        

            }
            #episode-desc{
                font-size: 13px;
                margin-top:5px;
                margin-bottom:5px;
                color: grey;

            }
        }

`

export const SearchBoxStyle=styled.div`
.searchbox{
    margin-bottom:20px;
    display:flex;
    justify-content:center;
    align-items:center;
        
}

.searchbox input{
    width:70%;
    padding:20px;
    border-radius:30px;
    outline: none;
    border: 1px solid #dcdcdc;

}
        
.searchbox input:focus-within{
    
    outline: none;

}
.searchbox input:hover{

    box-shadow: 1px 1px 8px 1px #dcdcdc;
}
@media only screen and (max-width:600px){
.searchbox input{
    width:90%;
    padding:15px;
}
}

`

export const StyledEpisode = styled.div`

    width:90%;
    margin-left:5%;
    margin-right:90%;
    .podcast-player{

        width:90%;
        margin-top:10px;
        margin-bottom:10px;
    }
    .episode-info p{

        padding:5px;
        
    }
    .show-text{

        text-align:justify;
        font-size:18px;
    }

    @media only screen and (max-width:600px){
        
        .show-text{
            font-size:15px;
        }
    }
`