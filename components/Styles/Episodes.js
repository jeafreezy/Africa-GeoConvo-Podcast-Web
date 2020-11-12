import styled from 'styled-components';


export const CardStyle=styled.div`
        box-sizing:border-box;
        .container{

            height: 260px;
            margin-left:5%;
            margin-right:5%;
            width:90%;                                                      
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
            width:90%;
            height:90%;
        }

        .episode{
            display:flex;
            flex-flow:column nowrap;
            width:70% ;
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
            font-size: 18px;
            margin-top:5px;
            color: grey;
            margin-bottom:10px;

        }

        .podcast-player audio{

            width:80%;
            z-index:1;
        }

        @media(min-width:530px) and (max-width: 751px){

            .container{
                
                height: 120px;
            }
            #thumbnail{

                width:20%;

            }

            #thumbnail img{

                border-radius:5px;
                width:100%;
                height:100%;
            }

            .episode{

                flex-flow:column nowrap;
                justify-content:space-between;
                width:80% ;
                padding:5px;

            }

            #episode-title{
                display:flex;
                width:100%;
                color:#09126D;
                font-family: Roboto;
                font-style: normal;
                font-weight: bold;
                font-size: 15px;
            }
            #episode-info{
                display:flex;
                width:100%;
                color: rgba(9, 18, 109, 0.54);
                font-style: normal;
                font-weight: normal;
                font-size: 14px;        

            }
            #episode-desc{
                display:flex;
                width:100%;
                font-style: normal;
                font-weight:normal;
                font-size: 12px;
                margin-top:5px;
                color: grey;

            }


        }
        @media(max-width:529px){

            .container{

                height: 130px;                                                    

            }
            #thumbnail{

                width:20%;

            }

            #thumbnail img{

                border-radius:2px;
                width:100%;
                height:50px;
            }

            .episode{

                width:80% ;
                padding:4px;

            }

            #episode-title{

                font-size: 12px;
            }
            #episode-info{

                font-size: 12px;        

            }
            #episode-desc{
                font-size: 12px;
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
@media(max-width:600px){
.searchbox input{
    width:90%;
    padding:15px;
}
}

`