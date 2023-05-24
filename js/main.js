
const btn=document.getElementById("dark");
const textNav=document.querySelector(".navbar-light .navbar-nav .nav-link");
const btn2=document.querySelector(".px-3");
const navbar=document.querySelector(".navbar");
const p=document.querySelector(".p");
const span=document.querySelector("span");
const textOpen=document.querySelector(".accordion-button");
const textIn=document.querySelector(".accordion-body");
const footer=document.querySelector(".text-muted");
const footerText=document.querySelector(".mb-4");



document.getElementById("dark").onclick =function(){
    const Mood=document.body.classList.toggle("wight-Mood");
    if(Mood==true){
        btn.style.background="black";
        btn.style.color="aliceblue";
        btn2.style.background="black";
        btn2.style.color="aliceblue";
        textNav.style.color="black";
        navbar.style.backgroundColor="aliceblue";
        p.style.color="black";
        span.style.color="rgb(0, 163, 163)";
        textOpen.style.color="black";
        textIn.style.color="black";
        textIn.style.color="black";
        footer.style.backgroundColor="aliceblue";
        footer.style.color="black";

           
    }else{


        btn.style.background="aliceblue";
        btn.style.color="black";
        btn2.style.background="aliceblue";
        btn2.style.color="black";
        textNav.style.color="aliceblue"; 
        navbar.style.backgroundColor="black";
        p.style.color="aliceblue";
        span.style.color="aqua";
        textOpen.style.color="aliceblue";
        textIn.style.color="aliceblue";
        textIn.style.color="aliceblue";
        footer.style.backgroundColor="black";
        footer.style.color="aliceblue";
        
          
    }
}


    








