const rect = document.querySelector("#rect");

rect.addEventListener("mousemove", function(details)  {
    const rectLocation = rect.getBoundingClientRect();
    const cursorLocation = details.clientX - rectLocation.left;

    if(cursorLocation < rectLocation.width / 2) {
       var redValue =  gsap.utils.mapRange(0, rectLocation.width/2, 255, 0, cursorLocation);
        rect.style.backgroundColor = `rgb(255, ${255 - redValue}, ${255 - redValue})`;
    } else {
        blueValue = gsap.utils.mapRange(rectLocation.width/2, rectLocation.width, 0, 255, cursorLocation);
        rect.style.backgroundColor = `rgb(${255 - blueValue}, ${255 - blueValue}, 255)`;
    }
});

