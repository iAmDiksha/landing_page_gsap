let t1 = gsap.timeline()

t1.to("img",2,{
    scale:"1.5",
    delay: 0
})

t1.to(".wrapper-img",2,{
    width:"300",
    height:"400",
    delay:0.8
})

t1.from(".img",0.4,{
    opacity:0,
    delay:0.3
})

t1.to(".left",2,{
   x:"-200",
   rotation:-10,
    delay:0.5
})

t1.to(".right",2,{
   x:"200",
   rotation:10,
    delay:0.5
})

t1.from("p",2,{
    opacity: 0,
    scale:2,
    delay:0.5
})


t1.staggerFrom( 
    ".nav > div, .hero-container > div",2,{
        opacity:0,
        y:30,
        delay:1
    }
)

