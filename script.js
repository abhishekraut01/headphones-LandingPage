
function animationsUsingGSAP() {
    gsap.registerPlugin(ScrollTrigger);
    const timeLineForText = gsap.timeline();

    timeLineForText.from("#page1-heading", {
        opacity: 0.5,
        y: 190,
        duration: 1.5,
    })

    gsap.from("#Page1 img", {
        opacity: 0.5,
        scale: 1.1,  // Start at 1.5x size (zoomed in)
        duration: 1.3, // Animation lasts 2 seconds
        ease: "power2.out", // Smooth easing effect
        opacity: 0, // Start invisible
        delay: 0.5  // Start after a 0.5-second delay
    })


    gsap.from("#page2-part1 h1 , #page2-part2", {
        scrollTrigger: {
            trigger: "#page2-part1 h1",
            scroller: "body",
            // markers :true,
            start: "top 100%",
            end: "top 70%",
            scrub: 4
        },
        opacity: 0,
        y: 90,
        duration: 1.5,
        ease: "power2.out"
    });

    gsap.from("#page3-section1 h2 , #page3-section1 h1 , #page3-section1 h5", {
        scrollTrigger: {
            trigger: "#page3-section1 h2",
            scroller: "body",
            // markers :true,
            start: "top 100%",
            end: "top 90%",
            scrub: 4
        },
        opacity: 0,
        y: 90,
        duration: 1,
        ease: "power2.out",
        stagger : 1
    });

    gsap.from("#page3-section2-left h1 , #page3-section2-left h1 span ,#page3-section2-left h3 ", {
        scrollTrigger: {
            trigger: "#page3-section2-left h1",
            scroller: "body",
            // markers :true,
            start: "top 100%",
            end: "top 80%",
            scrub: 4
        },
        opacity: 0,
        y: 90,
        duration: 1,
        ease: "power2.out",
    });

    gsap.from("#page3-section2-right img ", {
        scrollTrigger: {
            trigger: "#page3-section2-left h1",
            scroller: "body",
            // markers :true,
            start: "top 100%",
            end: "top 80%",
            scrub: 4
        },
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        stagger : 1
    });

    gsap.from("#page4-content ", {
        scrollTrigger: {
            trigger: "#page4-content",
            scroller: "body",
            // markers :true,
            start: "top 100%",
            end: "top 99%",
            scrub: 3
        },
        duration: 1,
        y: 130,
        ease: "power2.out",
        stagger : 1
    });

    gsap.from("#page5-right-content ", {
        scrollTrigger: {
            trigger: "#page5-right-content",
            scroller: "body",
            // markers :true,
            start: "top 100%",
            end: "top 90%",
            scrub: 4
        },
        opacity:0,
        duration: 1,
        y: 130,
        ease: "power2.out",
        stagger : 1
    });

    gsap.to("#overlay", {
        scrollTrigger: {
            trigger: "#page4-content h1",
            scroller: "body",
            // markers: true,
            start: "top 100%",
            end: "top 50%",
            scrub: true, // Smoothly animate as you scroll
        },
        opacity: 1,  // Animate opacity to 1
    });
    
    //wave line animations
    gsap.to(".line-1", {
        duration : .6,          // Increase duration for a 
        scaleY: 1.6,            // Expand vertically
        ease: "power2.inOut",   // Use in-out easing for a natural wave effect
        repeat: -1,             // Infinite repeat
        yoyo: true,             // Reverse the animation
    });

    gsap.to(".line-2", {
        duration : .7,          // Increase duration for a 
        scaleY: 1.6,            // Expand vertically
        ease: "power2.inOut",   // Use in-out easing for a natural wave effect
        repeat: -1,             // Infinite repeat
        yoyo: true,             // Reverse the animation
    });

    gsap.to(".line-3", {
        duration : .9,          // Increase duration for a 
        scaleY: 1.6,            // Expand vertically
        ease: "power2.inOut",   // Use in-out easing for a natural wave effect
        repeat: -1,             // Infinite repeat
        yoyo: true,             // Reverse the animation
    });


    //page 6 animation
    gsap.from("#page6 ", {
        scrollTrigger: {
            trigger: "#page6-wrapper",
            scroller: "body",
            // markers :true,
            start: "top 100%",
            end: "top 90%",
            scrub: 3
        },
        opacity:0,
        duration: 1,
        y: 130,
        ease: "power2.out",
        stagger : 1
    });
    
}

animationsUsingGSAP()