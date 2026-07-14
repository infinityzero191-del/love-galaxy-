/* =========================================================
   CELESTIAL LOVE V2.0
   JavaScript Engine
   Part 1 - Setup + Intro Scene
   ========================================================= */


// =========================================================
// ELEMENTS
// =========================================================


const introScene =
    document.getElementById("introScene");

const galaxyScene =
    document.getElementById("galaxyScene");

const endingScene =
    document.getElementById("endingScene");


const envelope =
    document.getElementById("envelope");


const envelopeContainer =
    document.getElementById("envelopeContainer");


const envelopeSound =
    document.getElementById("envelopeSound");


const backgroundMusic =
    document.getElementById("backgroundMusic");



const starContainer =
    document.getElementById("starContainer");


const sparkleContainer =
    document.getElementById("sparkles");


const heartContainer =
    document.getElementById("floatingHearts");




// =========================================================
// CREATE TWINKLING STARS
// =========================================================


function createStars(amount = 180){


    for(let i = 0; i < amount; i++){


        const star =
            document.createElement("div");


        star.className =
            "star";


        star.style.left =
            Math.random() * 100 + "%";


        star.style.top =
            Math.random() * 100 + "%";


        star.style.animationDelay =
            Math.random() * 5 + "s";


        star.style.opacity =
            Math.random();



        starContainer.appendChild(star);

    }

}



createStars();




// =========================================================
// CREATE GOLD SPARKLES
// =========================================================


function createSparkles(amount = 50){


    for(let i = 0; i < amount; i++){


        const sparkle =
            document.createElement("div");


        sparkle.className =
            "sparkle";


        sparkle.style.left =
            Math.random() * 100 + "%";


        sparkle.style.top =
            Math.random() * 100 + "%";


        sparkle.style.animationDelay =
            Math.random() * 5 + "s";


        sparkleContainer.appendChild(sparkle);


    }


}



createSparkles();




// =========================================================
// FLOATING HEART GENERATOR
// =========================================================


function createHeart(){


    const heart =
        document.createElement("div");


    heart.className =
        "heart";


    heart.innerHTML =
        "❤️";


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.animationDuration =
        (5 + Math.random() * 6) + "s";


    heart.style.fontSize =
        (15 + Math.random() * 30) + "px";



    heartContainer.appendChild(heart);



    setTimeout(()=>{


        heart.remove();


    },10000);



}




setInterval(createHeart,800);




// =========================================================
// ENVELOPE OPEN SYSTEM
// =========================================================


let envelopeOpened = false;



envelopeContainer.addEventListener(
    "click",
    ()=>{


    if(envelopeOpened)
        return;


    envelopeOpened = true;



    // Play envelope sound

    envelopeSound.currentTime = 0;

    envelopeSound.currentTime = 0;

envelopeSound.play()
.catch(()=>{
    console.log("Audio blocked");
});


envelope.classList.add(
    "envelopeOpening"
);


// Continue after audio OR after 5 seconds backup

let openedTimer = setTimeout(()=>{

    enterGalaxy();

},5000);



envelopeSound.onended = ()=>{

    clearTimeout(openedTimer);

    enterGalaxy();

};



    // Backup if audio fails

    envelopeSound.onerror = ()=>{


        setTimeout(
            enterGalaxy,
            2000
        );


    };


});




// =========================================================
// ENTER GALAXY SCENE
// =========================================================


function enterGalaxy(){


    introScene.classList.remove(
        "active"
    );


    setTimeout(()=>{


        galaxyScene.classList.add(
            "active"
        );


        galaxyScene.classList.add(
            "galaxyEntering"
        );



        startBackgroundMusic();



        startPhotoSequence();



    },1500);



}




// =========================================================
// BACKGROUND MUSIC FADE IN
// =========================================================


function startBackgroundMusic(){


    backgroundMusic.volume = 0;


    backgroundMusic.play();



    let volume = 0;



    const fade =
        setInterval(()=>{


            volume += 0.02;


            backgroundMusic.volume =
                volume;



            if(volume >= 1){


                clearInterval(fade);


            }


        },100);



}/* =========================================================
   CELESTIAL LOVE V2.0
   JavaScript Engine
   Part 2 - Photos + Love Letters
   ========================================================= */


// =========================================================
// PHOTO ELEMENTS
// =========================================================


const photo1 =
    document.getElementById("photo1");

const photo2 =
    document.getElementById("photo2");

const photo3 =
    document.getElementById("photo3");



const photo1Sound =
    document.getElementById("photo1Sound");

const photo2Sound =
    document.getElementById("photo2Sound");

const photo3Sound =
    document.getElementById("photo3Sound");




// =========================================================
// LOVE LETTER DATA
// (Customize these later)
// =========================================================


const letters = {


    photo1:

    `
    I don't know how na di ako marunong man ligaw pero kaya kitang ipagmalaki at mahalin kahit kaylan man at mapapagkatiwalaan mo ako kahit anong oras
    `,



    photo2:

    `
    para saakin ikaw lng ang nakita ko na mabait,masipag,maganda at masayahin.para kang angel na binaba at nasilayan ng tulad kong hampas lupa hahhaha pero matitiyak ko na hindi kita iiwan kahit kaylan man
    `,



    photo3:

    `
    ginawa ko to para sau upang maipabatid ko ang aking pag -ibig. di man ako marunong manligaw.marunong nmn akong mahalin ka ng walang pag kukulang mahal na mahal kita icel I Love so much baby
    `


};




// =========================================================
// PHOTO SEQUENCE
// =========================================================


let openedLetters = 0;



function startPhotoSequence(){



    setTimeout(()=>{


        showPhoto(
            photo1
        );


    },2000);



    setTimeout(()=>{


        showPhoto(
            photo2
        );


    },5000);



    setTimeout(()=>{


        showPhoto(
            photo3
        );


    },8000);



}



// =========================================================
// SHOW PHOTO
// =========================================================


function showPhoto(photo){


    photo.classList.add(
        "photoVisible"
    );


}



// =========================================================
// PHOTO CLICK EVENTS
// =========================================================


photo1.addEventListener(
    "click",
    ()=>{


        playPhotoSound(
            photo1Sound
        );


        openLetter(
            "photo1"
        );


    }
);



photo2.addEventListener(
    "click",
    ()=>{


        playPhotoSound(
            photo2Sound
        );


        openLetter(
            "photo2"
        );


    }
);



photo3.addEventListener(
    "click",
    ()=>{


        playPhotoSound(
            photo3Sound
        );


        openLetter(
            "photo3"
        );


    }
);




// =========================================================
// PHOTO SOUND
// =========================================================


function playPhotoSound(sound){


    sound.currentTime = 0;


    sound.play()
    .catch(()=>{});


}




// =========================================================
// POPUP ELEMENTS
// =========================================================


const popupOverlay =
    document.getElementById(
        "popupOverlay"
    );


const letterPopup =
    document.getElementById(
        "letterPopup"
    );


const typewriterText =
    document.getElementById(
        "typewriterText"
    );


const closePopup =
    document.getElementById(
        "closePopup"
    );


const letterOpenSound =
    document.getElementById(
        "letterOpenSound"
    );




// =========================================================
// OPEN LETTER
// =========================================================


function openLetter(id){


    popupOverlay.classList.add(
        "show"
    );


    letterOpenSound.currentTime = 0;


    letterOpenSound.play()
    .catch(()=>{});



    typewriter(
        letters[id]
    );



}




// =========================================================
// TYPEWRITER EFFECT
// =========================================================


function typewriter(text){


    typewriterText.innerHTML =
        "";


    let index = 0;



    const speed = 60;



    const typing =
        setInterval(()=>{


            typewriterText.innerHTML +=
                text.charAt(index);



            index++;



            if(index >= text.length){


                clearInterval(
                    typing
                );


            }



        },speed);



}




// =========================================================
// CLOSE LETTER
// =========================================================


closePopup.addEventListener(
    "click",
    ()=>{


        popupOverlay.classList.remove(
            "show"
        );


        openedLetters++;



        checkEnding();



    }
);




// =========================================================
// CLOSE WHEN CLICKING OUTSIDE
// =========================================================


popupOverlay.addEventListener(
    "click",
    (event)=>{


        if(event.target === popupOverlay){


            popupOverlay.classList.remove(
                "show"
            );


            openedLetters++;


            checkEnding();


        }


    }
);/* =========================================================
   CELESTIAL LOVE V2.0
   JavaScript Engine
   Part 3 - Final Galaxy Heart + Fireworks + Replay
   ========================================================= */



// =========================================================
// ENDING ELEMENTS
// =========================================================


const endingSound =
    document.getElementById(
        "endingSound"
    );


const replayButton =
    document.getElementById(
        "replayButton"
    );


const heartCanvas =
    document.getElementById(
        "heartCanvas"
    );


const fireworksCanvas =
    document.getElementById(
        "fireworksCanvas"
    );




// =========================================================
// CHECK IF ALL LETTERS ARE OPENED
// =========================================================


function checkEnding(){


    if(openedLetters >= 3){


        setTimeout(()=>{


            startEnding();


        },2000);


    }


}




// =========================================================
// START FINAL SCENE
// =========================================================


function startEnding(){


    galaxyScene.classList.remove(
        "active"
    );


    endingScene.classList.add(
        "active"
    );



    endingSound.currentTime = 0;


    endingSound.play()
    .catch(()=>{});



    createHeartStars();


    startFireworks();


}




// =========================================================
// STAR HEART FORMATION
// =========================================================


const heartCtx =
    heartCanvas.getContext(
        "2d"
    );


function resizeHeartCanvas(){


    heartCanvas.width =
        window.innerWidth;


    heartCanvas.height =
        window.innerHeight;


}


resizeHeartCanvas();


window.addEventListener(
    "resize",
    resizeHeartCanvas
);



function createHeartStars(){


    let stars = [];


    const centerX =
        heartCanvas.width / 2;


    const centerY =
        heartCanvas.height / 2;



    for(let i = 0; i < 250; i++){



        let t =
            Math.random()
            *
            Math.PI
            *
            2;



        let x =
            16 *
            Math.pow(
                Math.sin(t),
                3
            );


        let y =
            -(13 *
            Math.cos(t)
            -
            5 *
            Math.cos(2*t)
            -
            2 *
            Math.cos(3*t)
            -
            Math.cos(4*t));



        stars.push({


            x:
                Math.random()
                *
                heartCanvas.width,


            y:
                Math.random()
                *
                heartCanvas.height,



            targetX:
                centerX +
                x * 15,



            targetY:
                centerY +
                y * 15,


            size:
                Math.random()*3+1


        });


    }



    animateHeartStars(
        stars
    );


}





function animateHeartStars(stars){


    heartCtx.clearRect(
        0,
        0,
        heartCanvas.width,
        heartCanvas.height
    );



    stars.forEach(star=>{


        star.x +=
            (
                star.targetX -
                star.x
            )
            *
            .03;



        star.y +=
            (
                star.targetY -
                star.y
            )
            *
            .03;



        heartCtx.beginPath();


        heartCtx.arc(

            star.x,

            star.y,

            star.size,

            0,

            Math.PI*2

        );


        heartCtx.fillStyle =
            "#ffffff";


        heartCtx.shadowBlur =
            20;


        heartCtx.shadowColor =
            "#ff66dd";


        heartCtx.fill();



    });



    requestAnimationFrame(
        ()=>animateHeartStars(stars)
    );


}





// =========================================================
// FIREWORK SYSTEM
// =========================================================


const fireCtx =
    fireworksCanvas.getContext(
        "2d"
    );



function resizeFireCanvas(){


    fireworksCanvas.width =
        window.innerWidth;


    fireworksCanvas.height =
        window.innerHeight;


}



resizeFireCanvas();


window.addEventListener(
    "resize",
    resizeFireCanvas
);



let particles = [];



function startFireworks(){


    setInterval(()=>{


        createFirework();


    },1500);



    animateFireworks();


}




function createFirework(){


    const x =
        Math.random()
        *
        fireworksCanvas.width;


    const y =
        Math.random()
        *
        fireworksCanvas.height
        *
        .5;



    for(let i=0;i<60;i++){


        particles.push({


            x:x,

            y:y,


            angle:
                Math.random()
                *
                Math.PI*2,


            speed:
                Math.random()*6+2,


            life:100,


            size:
                Math.random()*3+2


        });


    }


}





function animateFireworks(){


    fireCtx.clearRect(

        0,

        0,

        fireworksCanvas.width,

        fireworksCanvas.height

    );



    particles.forEach((p,index)=>{


        p.x +=
            Math.cos(p.angle)
            *
            p.speed;


        p.y +=
            Math.sin(p.angle)
            *
            p.speed;



        p.life--;



        fireCtx.beginPath();


        fireCtx.arc(

            p.x,

            p.y,

            p.size,

            0,

            Math.PI*2

        );



        fireCtx.fillStyle =
            "#ffd86b";



        fireCtx.fill();



        if(p.life<=0){


            particles.splice(
                index,
                1
            );


        }



    });



    requestAnimationFrame(
        animateFireworks
    );


}





// =========================================================
// REPLAY BUTTON
// =========================================================


replayButton.addEventListener(
    "click",
    ()=>{


        location.reload();


    }
);
