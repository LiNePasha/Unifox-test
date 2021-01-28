/*=========================
        Ahmed Waled js !
==========================*/
const $d = className => {
  return document.querySelector(className);
}

//Change Color
let inpChangeColor = $d("#inp_change_color"),
    formChange = $d("#form_changecolor"),
    btnShowDivChange = $d("#show_div_cahnge"),
    btnShowDivChangee = $d("#show_div_cahngee"),
    divHaveThingsToChange = $d(".ahmed_change_theme_wepsite");

    const showAndHide = (e,num,c,dis,b,disb) => {
      e.style.left = `${num}`;
      c.style.display = `${dis}`;
      b.style.display = `${disb}`
    }
    btnShowDivChange.onclick = () => {
      showAndHide(divHaveThingsToChange,'0',btnShowDivChange,'none',btnShowDivChangee,'block')
    }
    
    btnShowDivChangee.onclick = () => {
      showAndHide(divHaveThingsToChange,'-20rem',btnShowDivChange,'block',btnShowDivChangee,'none')
    }

formChange.onsubmit = (e) => {
e.preventDefault()
document.querySelector(":root").style.setProperty('--LightGreenColor', `${inpChangeColor.value}`)
}

// NavBar Choose
let ChooseAbout = $d(".choose_about"),
  ChooseService = $d(".choose_service"),
  ChooseContact = $d(".choose_contact"),
  SelectionAbout = $d(".selection_about"),
  SelectionService = $d(".selection_service"),
  SelectionContact = $d(".selection_contact");

const styleprop = (className,dis) => {
  className.style.display = `${dis}`
}

SelectionService.onclick = () => {
  styleprop(ChooseAbout,'none');
  styleprop(ChooseContact,'none');
  styleprop(ChooseService,'block');
}

SelectionContact.onclick = () => {
  styleprop(ChooseAbout,'none');
  styleprop(ChooseService,'none');
  styleprop(ChooseContact,'block');
}

SelectionAbout.onclick = () => {
  styleprop(ChooseContact,'none');
  styleprop(ChooseService,'none');
  styleprop(ChooseAbout,'block');
}



// Video youtupe play
let VideoPlay = $d(".ahmed_vid_youtupe i"),
  PopUp = $d(".ahmed_popup"),
  PopUpContent = $d(".ahmed_popup_content");

const styleprops = (className,num,vib) => {
  className.style.opacity = `${num}`;
  className.style.visibility = `${vib}`;
}

VideoPlay.onclick = () => {
  styleprops(PopUp,'1','visible');
  styleprops(PopUpContent,'1','visible');
}

PopUp.onclick = () => {
  styleprops(PopUp,'0','hidden');
  styleprops(PopUpContent,'0','hidden');
}


// jquery

$(document).ready(function (){
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
  })