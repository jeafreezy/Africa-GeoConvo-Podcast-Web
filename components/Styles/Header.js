import styled from 'styled-components';

export const StyledBanner=styled.header`

box-sizing:border-box;


.jumbotron{
    background: linear-gradient(rgba(150,150, 150,.7), rgba(15,15,15,.7)), url("/static/assets/background-image.jpg");
    background-repeat: no-repeat;
    background-position: 50% center ;
    background-size: cover;
    width:100%;
    height:110vh;
   
}

.container{

    width:100%;
    height:100vh;
    display:flex;
    padding:10px;
    text-align:center;
    flex-flow:column nowrap;
    align-items:center;
    justify-content:center;
    color:white;    
}


.jumbotron-info h2{
    margin-bottom:20px;
    font-size: 3rem;
    font-weight:bold;
    
}
.jumbotron-info p{

    font-size:20px;
    font-style:italic;
}
.cta-buttons{

    display:flex;
    width:60%;
    flex-flow:row nowrap;
    justify-content:space-between;
    padding-top:20px;


}
.cta-link {
    text-decoration:none;

}
.cta-buttons button{
   
    padding:10px;
    width:30%;
    color:white;
    cursor:pointer;
    text-align:center;
    display:inline-block;
    text-decoration:none;
    border:none;
    font-weight:bold;
    outline:none;
    
}


.cta-buttons > button:nth-child(2){

    background-color: white;
    color:#09126D;
}


.cta-buttons > button:nth-child(2):hover{
    transition:0.3s;
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

/* Dropdown Button */
.drop-btn {
  background-color: #09126D;
  color: white;
  border: none;

}


/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
  background-color:#09126D;
  width:30%;
  cursor:pointer;
}
.dropdown button{
    border:none;
    outline:none;
    width:100%;
}
/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: white;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  cursor:pointer;
}

/* Links inside the dropdown */
.dropdown-content a {
  color:#09126D;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color:whitesmoke;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: #3e8e41;box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);}


@media only screen and (max-width:490px){

    .cta-buttons{

        display:flex;
        width:100%;
        flex-flow:column wrap;
        justify-content:center;
        align-items:center;
        padding-top:20px;


    }
    
    .cta-buttons + button{
   
        width:100%;

    }

    .cta-link{

        margin-top:15px;
    }
    .jumbotron-info h2{
        margin-bottom:10px;
        font-size: 25px;
      

    .jumbotron-info p{

        font-size:15px;
        
    }
    /* The container <div> - needed to position the dropdown content */

    .drop-btn{
       
        width:200%;
        font-size:7px;
    }
    .dropdown button{

        color:red;
        width:100%;
        
    }

  
}

}

@media only screen and (min-width:491px) and (max-width:543px){

            /* The container <div> - needed to position the dropdown content */
        .dropdown {
       
            width:35%;
            
        }

}
`;

export const StyledBurger=styled.div`

        width:2rem;
        height:2rem;
        position:fixed;
        top:20px;
        right:20px;
        z-index:10000;
        display:none;

        @media only screen and (max-width:897px){

        display:flex;
        justify-content:space-around;
        flex-flow:column nowrap;
            }

        div{
            height:0.25rem;
            width:2rem;
            background-color: ${({open})=>open ? '#7887AB' : '#09126D'};
            cursor:pointer;
            border-radius:5px;
            transform-origin:1px;
            transition:all 0.3s linear;

        &:nth-child(1){

            transform:${({ open })=> open ? 'rotate(45deg)' : 'rotate(0deg)'}
        }
        &:nth-child(2){

            transform:${({ open })=> open ? 'translateX(100%)' : 'translateX(0)'};
            opacity: ${({ open })=> open ? '0' : '1'}
        }
        &:nth-child(3){

            transform:${({ open })=> open ? 'rotate(-45deg)' : 'rotate(0deg)'}
        }

        }

`;


export const StyledNav =styled.nav`
        top:0;
        z-index:1000;
        width:100vw;
        font-family: Acme;
        background-color:#fff;
        height:80px;  
        text-transform:uppercase; 
        display:flex;
        justify-content:space-around;
        align-items:center;
        box-shadow: 0 4px 8px 0 rgba(120, 255, 255, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        overflow:hidden;
        position:fixed;

        .logo{
            
            cursor:pointer;
           
            
        }

        @media only screen and (max-width:490px){
        
            
            .logo{

                margin-right:15%;
            }
            .logo picture{
                
                width:155px;
                height:50px
                
            } 

            .logo{
                
                padding-left: 2px;
                padding-top:4px;

            }
}
`

export  const RightNavStyle=styled.ul`
    
        list-style:none;
        font-family: Acme;
        font-size: 16px;
        display:flex;
        flex-flow:row nowrap;
        

    li{
        padding-top:20px;
        padding-right:10px;
       
        
    }
    li a{

        text-decoration:none;
        color: #09126D;
        padding:10px;
        display:block;
        
    }


    li a::after {
        content: '';
        margin-top:5px;
        display: block;
        width: 0;
        height: 2px;
        background: #09126D;
        transition: width .3s;
}

li a:hover::after {
    ${'' /* margin-top:10px; */}
    width: 100%;
}


@media  only screen and (max-width: 897px){  
    flex-flow: column nowrap;
    background-color:white;
    position:fixed;
    transform: ${({open})=> open ? 'translateX(0)' : 'translateX(100%)'};
    top:0;
    right:0;
    height:100vh;
    width:100%;
    padding-top:4rem;
    transition: transform 0.2s ease-in-out;
    display:flex;
    align-items:center;


    li a{

        color:black;
        padding:2px;
    
    }

    li a:hover{
        background-color:#09126D;
        color:white;
        transition: 0.5s;
        
    }
    li a::after{

        margin-top:0;

    }
    
    li a:hover::after {
        width: 0;
        margin-top:0;
    }
}

`;