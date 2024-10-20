
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

}

animationsUsingGSAP()