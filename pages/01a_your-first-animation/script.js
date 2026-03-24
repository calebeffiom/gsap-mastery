gsap.to(".card",
    {
        opacity: 1,
        scale: 1,
        duration: 2,
        onComplete: () => {
            gsap.to(".card",
                {
                    opacity: 0,
                    scale: 0,
                    duration: 2,
                    onComplete: () => {
                        gsap.to(".card",
                            {
                                opacity: 1,
                                scale: 1,
                                duration: 2,
                                onComplete: () => {
                                    gsap.to(".card",
                                        {
                                            onclick: () => {  // any function inside this will run
                                                gsap.to(".card",
                                                    { y: -20 })
                                            }
                                        })
                                }
                            })
                    }
                })
        }
    });
