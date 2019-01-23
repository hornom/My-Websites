function pgFlip()   {
    var img     = document.getElementById('caterMenu');
    img.setAttribute("src","images/caterMenu2.png");
    img.setAttribute("onclick","pgFlip1()");
}
function pgFlip1()  {
    var img     = document.getElementById('caterMenu');
    img.setAttribute("src","images/caterMenu.png");
    img.setAttribute("onclick","pgFlip()");
}

            /*SLIDING INTO OF VIEWPORT*/
function slideIn(el) {
    /* button is the pushed button */
    var button  = document.getElementById(el);
    /* content is the information inside the pushed button */
    var cont    = document.getElementById('content');
    var aCont   = document.getElementById('acontent');
    var takeOut = document.getElementById('takeOut');
    var about   = document.getElementById('about');
    var cater   = document.getElementById('cater');
    var deliver = document.getElementById('deliver');
    var caterMenu = document.getElementById('caterMenu');
    var takeOutMenu = document.getElementById('takeOutMenu');
    
    button.style.zIndex = "1";
                    
                    /* THE ABOUT LAS PALMAS ANIMATION */
    if (el.includes('about'))
        {           
            
                    /*Pushes the irrelevant content to the background
                    so it can be covered up*/
            button.style.zIndex = "13";
            deliver.style.zIndex    = "12";
            aCont.style.zIndex      = "11";
            cont.style.zIndex       = "-3";
            cater.style.zIndex      = "-2";
            takeOut.style.zIndex    = "-2";
            
            aCont.style.transition = "width 1.75s ease-out 0s";
            aCont.style.width = "75%";
            
            button.style.transition = "left 1s ease-in-out .66s";
            button.style.left = "75%";
            
            
        }
    
                    /*THE TAKE-OUT MENU ANIMATION*/
    if (el.includes('takeOut'))
                    {    
                        document.getElementById('content').insertAdjacentHTML( 'afterbegin', '<img id="takeOutMenu" src="images/takeOutMenu.png">' );
                    
                    /*Pushes the irrelevant content to the background
                    so it can be covered up*/
                cont.style.zIndex   = "0";
                cater.style.zIndex  = "-1";
                about.style.zIndex  = "-1";
                deliver.style.zIndex= "-1";
                aCont.style.zIndex  = "-2";
                        
                    /*moves the content inside viewport*/
                cont.style.transition = "left 1.75s ease-out 0s";
                cont.style.left = "25%";
                    }
    
                    /*THE CATERING MENU ANIMATION*/
    if (el.includes('cater'))
                    {
                    document.getElementById('content').insertAdjacentHTML( 'afterbegin', '<img id="caterMenu" onclick="pgFlip()" src="images/caterMenu.png">' );
                   
                    /*Pushes the irrelevant content to the background
                    so it can be covered up*/
                takeOut.style.zIndex= "0";
                cont.style.zIndex   = "-1";
                about.style.zIndex  = "-2";
                deliver.style.zIndex= "-2";
                aCont.style.zIndex  = "-3";
                        
                    /*moves the content inside viewport*/
                cont.style.transition = "left 1.75s ease-out 0s";
                cont.style.left = "25%";
                
                    /*moves the button to it's proper
                    location*/
                button.style.transition = "left 1s ease-in-out .66s";
                button.style.left = "0";
                    }
                button.setAttribute("onclick", "slideOut('"+el+"')");
   

            }


            /*SLIDING OUT OF VIEWPORT */
function slideOut(el) {
    /* button is the pushed button */
    var button  = document.getElementById(el);
    /* content is the information inside the pushed button */
    var cont    = document.getElementById('content');
    var takeOut = document.getElementById('takeOut');
    var about   = document.getElementById('about');
    var cater   = document.getElementById('cater');
    var deliver = document.getElementById('deliver');
    var caterMenu = document.getElementById('caterMenu');
    var takeOutMenu = document.getElementById('takeOutMenu');
    
    
    
                    /* THE ABOUT LAS PALMAS ANIMATION */
    if (el.includes('about'))
        {
        
            /* cont variable must be switched since
            the information is in a different div than 
            the take out and catering buttons */
            var cont = document.getElementById('acontent');
                    /*Pushes the irrelevant content to the background
                    so it can be covered up*/
            
            cont.style.transition = "width 1.75s ease-in 0s";
            cont.style.width = "0";
            
            /* MAKE SURE THAT WHEN YOU ADD TEXT YOU ADD
            AN OPACITY TRANSITION SO THE TEXT DISAPPEARS */
            button.style.transition = "left 1s ease-in-out 0s";
            button.style.left = "50%";
            
        }
    
                    /*THE TAKE-OUT MENU ANIMATION*/
    if (el.includes('takeOut'))
                    {     
                        button.style.zIndex = "1";
    
                    /*Pushes the irrelevant content to the background
                    so it can be covered up*/
                                 
                    /*changes the background color of the slide-in content to the color of the button */
                        
                    /*moves the content inside viewport*/
                cont.style.transition = "left 1.75s ease-in 0s";
                cont.style.left = "-75%";        
                    }
    
                    /*THE CATERING MENU ANIMATION*/
    if (el.includes('cater'))
                    {  
                        button.style.zIndex = "1";
                     
                    /*changes the background color of the slide-in content to the color of the button */
                        
                    /*moves the content inside viewport*/
                cont.style.transition = "left 1.75s ease-in 0s";
                cont.style.left = "-75%";
                
                    /*moves the button to it's proper
                    location*/
                button.style.transition = "left 1s ease-in-out 0s";
                button.style.left = "25%";
                    }
                
                
                button.setAttribute("onclick", "slideIn('"+el+"')");

            }

