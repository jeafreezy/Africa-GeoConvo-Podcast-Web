import styled from 'styled-components';

export const BehindTheMicStyle = styled.div`

        .container{
            font-family:Roboto;
            display:flex;
            width:90%;
            margin-left:5%;
            margin-right:5%;
            margin-bottom:5px;
            gap:10px;
        }   
       
        .head{
            display:flex;
            justify-content:center;
            align-items:center;
        }
       
        .head img{
            width:166px;
            height:156px;
            border-radius:50px;
        }

        .head p{
            text-align:center;
            font-style: italic;
            font-weight: normal;
            font-size: 17px;
            line-height: 20px;
            color: rgba(9, 18, 109, 0.42);
        }
        

        figcaption{
            font-style: normal;
            font-weight: bold;
            text-align:center;
            font-size: 17px;
            line-height: 20px;
            color: #09126D;
        }
        
        
        .body{
            display:flex;
            justify-content:center;
            align-items:center;
            padding:10px;
        }

        .body p{
            width:90%;
            text-align:justify;
            font-style: normal;
            font-weight: normal;
            font-size: 17px;
            line-height: 20px;
            color: rgba(9, 18, 109, 0.54);
        }

        .socials{
            display:flex;
            justify-content:center;
            align-items:center;
        }
        .socials img{
            height:30px;
            width:32px;
            padding:5px;
        }
        
        .socials img:hover{
            cursor:pointer;
        }
        .host-card {
            width:50%;
            box-shadow: 0 2px 2px 0 rgba(0,0,0,0.24), 0 2px 2px 0 rgba(0,0,0,0.19);

        }

        .host-card:hover{
            box-shadow: 0 0px 0px 0 rgba(0,0,0,0.24), 0 5px 5px 0 rgba(0,0,0,0.19);
        }
        @media only screen and (max-width:640px){

            .container{

                display:flex;
                flex-direction:column;
                width:90%;
                margin-left:5%;
                margin-right:5%;
            }
            .head{
                
                display:flex;
                justify-content:center;
                align-items:center;
                width:100%; 
            }
        
            .head img{

                width:90px;
                height:80px;
                border-radius:10px;
            }

            .head p{

                font-size: 15px;
                line-height: 20px;
        
            }
        

            figcaption{

                text-align:center;
                font-size: 13px;
                
             }

            .body{

                display:flex;
                justify-content:center;
                align-items:center;
                padding:10px;
            }

            .body p{

                width:100%;
                font-size: 15px;
                line-height: 20px;
                
            }
            .host-card {

                width:100%;
                margin-top:10px;

            }
            .host-card figure img{

                margin-left:8px;
            }

          
`;

export const SupportTheShowStyle = styled.div`
	.container {
		font-family: Roboto;
		display: flex;
		width: 90%;
		margin-left: 5%;
		margin-right: 5%;
	}

	.support-info {
		display: flex;
		width: 100%;
	}

	.support-info button {
		width: 100%;
	}
	.support-info p {
		text-align: justify;
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		width: 100%;
		font-size: 17px;
		line-height: 20px;
		color: rgba(9, 18, 109, 0.54);
	}

	.support-button {
		margin-top: 50px;
		width: 50%;
		padding: 10px;
		color: white;
		cursor: pointer;
		text-align: center;
		text-transform: uppercase;
		text-decoration: none;
		border: none;
		font-weight: bold;
		background-color: #09126d;
		box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
			0 17px 50px 0 rgba(0, 0, 0, 0.19);
		outline: none;
	}

	button:hover {
		background-color: rgba(9, 18, 109, 0.54);
	}
	@media only screen and (max-width: 640px) {
		.container {
			display: flex;
			flex-flow: wrap;
			width: 90%;
			margin-left: 5%;
			margin-right: 5%;
		}
		.support-info button {
			width: 100%;
		}
		.support-info p {
			font-size: 15px;
			line-height: 14px;
			width: 100%;
		}

		.support-button {
			margin-top: 10px;
			width: 100%;
		}
	}
`;

export const WhoWeAreStyle = styled.div`
	.container {
		font-family: Roboto;
		display: flex;
		width: 90%;
		margin-left: 5%;
		margin-right: 5%;
	}
	.about-image {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
	}

	.about-info {
		width: 100%;
	}

	.about-info p {
		text-align: justify;
		font-family: Roboto;
		font-style: normal;
		font-weight: normal;
		font-size: 20px;
		line-height: 22px;
		color: rgba(9, 18, 109, 0.54);
	}
	.about-image img {
		width: 64%;
		height: 100%;
	}

	@media only screen and (min-width: 640px) and (max-width: 1024px) {
		.about-image img {
			width: 45%;
			height: 40%;
		}
	}
	@media only screen and (max-width: 640px) {
		.container {
			font-family: Roboto;
			display: flex;
			flex-flow: wrap;
			width: 90%;
			margin-left: 5%;
			margin-right: 5%;
		}

		.about-image {
			display: flex;
		}

		.about-info {
			width: 100%;
		}

		.about-info p {
			font-size: 15px;
			line-height: 20px;
		}
		.about-image img {
			width: 50%;
			height: 90%;
		}
	}
`;
