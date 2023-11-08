document.addEventListener("DOMContentLoaded", init);

function init() {
    let arrow = document.getElementById("arrow");
    arrow.addEventListener("click", changeSlide);
}

function changeSlide() {

    let squaresArray = document.getElementsByClassName("fa-square");
    let squareIndex;

    let imagesArray = document.getElementsByClassName("slide-image");
    let imageIndex;

    let descriptionsArray = document.getElementsByClassName("slide-description");
    let descriptionIndex;


    for (let i = 0; i < squaresArray.length; i++) {
        if (squaresArray[i].classList.contains("active-square")) {
            squaresArray[i].classList.remove("active-square");
            squaresArray[i].classList.add("inactive-square");
            if (i == squaresArray.length - 1) {
                squareIndex = 0;
            } else {
                squareIndex = i + 1;
            }
        }
    }
    squaresArray[squareIndex].classList.remove("inactive-square");
    squaresArray[squareIndex].classList.add("active-square");

    for (let i = 0; i < imagesArray.length; i++) {
        if (imagesArray[i].classList.contains("active-img")) {
            imagesArray[i].classList.remove("active-img");
            imagesArray[i].classList.add("inactive-img");
            if (i == imagesArray.length - 1) {
                imageIndex = 0;
            } else {
                imageIndex = i + 1;
            }
        }
    }
    imagesArray[imageIndex].classList.remove("inactive-img");
    imagesArray[imageIndex].classList.add("active-img");

    for (let i = 0; i < descriptionsArray.length; i++) {
        if (descriptionsArray[i].classList.contains("active-description")) {
            descriptionsArray[i].classList.remove("active-description");
            descriptionsArray[i].classList.add("inactive-description");
            if (i == descriptionsArray.length - 1) {
                descriptionIndex = 0;
            } else {
                descriptionIndex = i + 1;
            }
        }
    }
    descriptionsArray[descriptionIndex].classList.remove("inactive-description");
    descriptionsArray[descriptionIndex].classList.add("active-description");


}
