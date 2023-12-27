const text = document.getElementById("logo")
text.addEventListener("mouseover",()=>{
    text.innerHTML="Your-logo"
    text.style.color="#b83e01ca"
})
text.addEventListener("mouseout",()=>{
    text.innerHTML="logo"
    text.style.color="white"
})

 gsap.to("#Navbar", {
    height:"5.6vh",
    borderBottom:"0.01rem solid snow",
    scrollTrigger:{
        trigger:"#Navbar",
        scroller:"body",
        //markers:true,
        start:"top -5%",
        end:"top 5%",
        scrub:2,
    }
 })
 gsap.to("#logo", {
    fontSize:"25px",
    scrollTrigger:{
        trigger:"#logo",
        scroller:"body",
       // markers:true,
        start:"top -5%",
        end:"top 5%",
        scrub:2,
    }

 })


 gsap.to("#tag", {
    opacity:0,
    scrollTrigger:{
     trigger:"#tag",
     scroller:"body",
     start:"top 10%",
     end:"top 15%",
    // markers:true,
     scrub:2,
    }
 })
 gsap.to("#subtag", {
    opacity:0,
    scrollTrigger:{
     trigger:"#subtag",
     scroller:"body",
     start:"top 12%",
     end:"top 20%",
    // markers:true,
     scrub:2,
    }
 })
 gsap.to("#p1", {
    backgroundColor:"black",
    scrollTrigger:{
    trigger:"#p1",
    scroller:"body",
    start:"bottom 65%",
    end:"bottom 50%",
   //    markers:true,
    scrub:2
    }
 })

window.onload=()=>{
const tl = gsap.timeline();
tl.set("#subtag", {
    transform:"translateY(1000px)",
    opacity:0
  })
tl.set("#Navbar", {
 opacity:0,
})
tl.to("#Navbar",{
    opacity:1,
    delay:0.2
})
tl.to("#backimg", {
    opacity:0.8
})

tl.to("#tag",{
    transform:"translateX(0)",
})

tl.to("#subtag", {
    transform:"translateY(0)",
    opacity:1,
})
}
gsap.to("#title1",{
    opacity:1,
    scrollTrigger:{
        trigger:"#title1",
        scroller:"body",
       // markers:true,
        start:"top 50%",
        end:"top 50%",
        scrub:2
    }
})

gsap.to("#line1",{
    color:"white",
    scrollTrigger:{
        trigger:"#line1",
        scroller:"body",
        start:"bottom 60%",
        end:"bottom 55%",
        //markers:true,
        scrub:2
    }
})
gsap.to("#line2",{
    color:"#b83e01",
    scrollTrigger:{
        trigger:"#line2",
        scroller:"body",
        start:"bottom 65%",
        end:"bottom 60%",
       // markers:true,
        scrub:2
    }
})
gsap.to("#line2",{
    color:"white",
    scrollTrigger:{
        trigger:"#line2",
        scroller:"body",
        start:"bottom 55%",
        end:"bottom 45%",
       // markers:true,
        scrub:2
    }
})
gsap.to("#line3",{
    color:"#b83e01",
    scrollTrigger:{
        trigger:"#line3",
        scroller:"body",
        start:"bottom 65%",
        end:"bottom 50%",
        //markers:true,
        scrub:2
    }
})
gsap.to("#line3",{
    color:"white",
    scrollTrigger:{
        trigger:"#line3",
        scroller:"body",
        start:"bottom 50%",
        end:"bottom 40%",
       // markers:true,
        scrub:2
    }
})
gsap.to("#line4",{
    color:"#b83e01",
    scrollTrigger:{
        trigger:"#line4",
        scroller:"body",
        start:"bottom 63%",
        end:"bottom 50%",
        //markers:true,
        scrub:2
    }
})
gsap.to("#p2", {
    opacity:0,
    scrollTrigger:{
        trigger:"#p2",
        scroller:"body",
        start:"bottom 45%",
        end:"bottom 40%",
        //markers:true,
        scrub:2
    }
})
gsap.to("#p3", {
    opacity:1,
    scrollTrigger:{
        trigger:"#p3",
        scroller:"body",
        start:"top 40%",
        end:"top 35%",
        //markers:true,
        scrub:2
    }
})
gsap.set("#contact",{
    opacity:0
})

gsap.to("#contact",{
opacity:1,
scrollTrigger:{
    trigger:"#contact",
    scroller:"body",
    start:"bottom 115%",
    end:"bottom 100%",
    //  markers:true,   
    scrub:2
}
})
function sabmit(event){
const changtext = document.getElementById("change-text");
  changtext.style.display = "block"
}