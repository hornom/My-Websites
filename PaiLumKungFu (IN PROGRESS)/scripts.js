function fadeIn(el){
    var paiCont     = document.getElementById('paiCont');
    var shifuCont   = document.getElementById('shifuCont');
    var contact     = document.getElementById('contact');
    if (el.includes('paiCont'))
        {
            paiCont.style.transition = "opacity 1.75s ease-out 0s";
            paiCont.style.opacity = "1";
            shifuCont.style.transition = "opacity 1.75s ease-in 0s";
            shifuCont.style.opacity = "0";
            contact.style.transition = "opacity 1.75s ease-in 0s";
            contact.style.opacity = "0";
        }
    if (el.includes('shifuCont'))
        {
            paiCont.style.transition = "opacity 1.75s ease-in 0s";
            paiCont.style.opacity = "0";
            shifuCont.style.transition = "opacity 1.75s ease-out 0s";
            shifuCont.style.opacity = "1";
            contact.style.transition = "opacity 1.75s ease-in 0s";
            contact.style.opacity = "0";
        }
    if (el.includes('contact'))
        {
           paiCont.style.transition = "opacity 1.75s ease-out 0s";
            paiCont.style.opacity = "0";
            shifuCont.style.transition = "opacity 1.75s ease-in 0s";
            shifuCont.style.opacity = "0";
            contact.style.transition = "opacity 1.75s ease-out 0s";
            contact.style.opacity = "1";
        }
}