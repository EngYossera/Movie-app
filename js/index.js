let rowDate = document.querySelector('.rowData');
let serchInput = document.querySelector('#search');
let arr = [];   
//loadig
$(document).ready(() => {

        $(".loading-screen").fadeOut(500);
     

})

//scroll to rop

$(window).on("scroll",function(){
    if($(window).scrollTop() > 600){
        $(".scroll-to-top").fadeIn(500);

    }else
    {
  $(".scroll-to-top").fadeOut(500);

    }
})


$(".scroll-to-top").on("click",function(){
   $('html').animate({scrollTop:0},1000);
})

//nav 
function openSideNav() {
    $(".side-nav-menu").animate({ left: 0 }, 500);
    $(".icon-open-close").removeClass("fa-align-justify").addClass("fa-x");

    for (let i = 0; i < 6; i++) {
        $(".link li").eq(i).animate({ top: 0 }, (i + 5) * 180);
    }
}

function closeSideNav() {
    let widthNavTap = $(".side-nav-menu .nav-tap").outerWidth();

    $(".side-nav-menu").animate({ left: -widthNavTap }, 500);
    $(".icon-open-close").addClass("fa-align-justify").removeClass("fa-x");

    for (let i = 0; i < 6; i++) {
        $(".link li").eq(i).animate({ top: 300 }, (i + 5) * 100);
    }
}

closeSideNav();

$(".icon-open-close").on("click", function () {
    if ($(".side-nav-menu").css("left") == "0px") {
        closeSideNav();
    } else {
        openSideNav();
    }
});


//animate cards



$(".title-move").animate({left: 0 }, 500);

function displayMovie(movieArray) {
    let cartona = "";

    for (let i = 0; i < movieArray.length; i++) {
        let movie = movieArray[i];

        cartona += `
        <div class="col-lg-4 col-md-6 col-sm-12 col ">
            <div class="card-img position-relative overflow-hidden rounded-2">
                <img class="img w-100" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
                
                <div class="layer-card-img position-absolute py-2 px-3">
                    <h1 class="title-move text-center fs-1 fw-bold">
                        ${movie.title || movie.name}
                    </h1>

                    <p class="desc-movie">${movie.overview}</p>

                    <span>
                        Release Date
                        <span class="date-movie">
                            ${movie.release_date || movie.first_air_date}
                        </span>
                    </span>

                    <h3 class="py-3 start-move">
                        <i class="fa-solid fa-star text-warning fs-6"></i>
                        <i class="fa-solid fa-star text-warning fs-6"></i>
                        <i class="fa-solid fa-star text-warning fs-6"></i>
                      
                    </h3>

                    <div class="rate rounded-circle d-flex justify-content-center align-items-center">
                        <h3 class="rate-movie fs-5 fw-bold p-2">${movie.vote_average}</h3>
                    </div>
                </div>
            </div>
        </div>`;
    }

    rowDate.innerHTML = cartona;

    arr = movieArray;
    console.log(arr)
}
 //${statrMovie(movie.genre_ids.length)}

function statrMovie(loopStart){
   console.log(loopStart)
    for(let i=0;i< loopStart;i++){

        
    }
    
}
async function getApiNowPlaying() {
    let myHttp = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=cc683b658b3603389ea796f1d9677810&language=en-US&page=1');
    let myResponse = await myHttp.json();
    displayMovie(myResponse.results);
}
getApiNowPlaying();

$(".nowPlaying").on("click", getApiNowPlaying);

async function getApiPopular() {
    let myHttp = await fetch('https://api.themoviedb.org/3/discover/tv?api_key=cc683b658b3603389ea796f1d9677810&include_adult=false&language=en-US&page=1&sort_by=popularity.desc');
    let myResponse = await myHttp.json();
    displayMovie(myResponse.results);
}
$(".popular").on("click", getApiPopular);

async function getApiTopRated() {
    let myHttp = await fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=cc683b658b3603389ea796f1d9677810&language=en-US&page=1');
    let myResponse = await myHttp.json();
    displayMovie(myResponse.results);
}
$(".topRated").on("click", getApiTopRated);

async function getApitrending() {
    let myHttp = await fetch('https://api.themoviedb.org/3/trending/all/day?api_key=cc683b658b3603389ea796f1d9677810&language=en-US');
    let myResponse = await myHttp.json();
    displayMovie(myResponse.results);
}
$(".trending").on("click", getApitrending);

async function getApiupcoming() {
    let myHttp = await fetch('https://api.themoviedb.org/3/movie/upcoming?api_key=cc683b658b3603389ea796f1d9677810&include_adult=false&language=en-US&page=1&sort_by=popularity.desc');
    let myResponse = await myHttp.json();
    displayMovie(myResponse.results);
}
$(".upcoming").on("click", getApiupcoming);




serchInput.addEventListener('input', function () {

    let value = serchInput.value.toLowerCase();
    let cartona = "";

    for (let i = 0; i < arr.length; i++) {

        let movie = arr[i];
        let name = (movie.title || movie.name || "").toLowerCase();

        if (name.includes(value)) {

            cartona += `
            <div class="col-lg-4 col-md-6 col-sm-12 ">
                <div class="card-img position-relative overflow-hidden rounded-2">
                    <img class="img w-100" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}">
                    
                    <div class="layer-card-img position-absolute py-2 px-3">
                        <h1 class="title-move text-center fs-1 fw-bold">
                            ${movie.title || movie.name}
                        </h1>

                        <p class="desc-movie">${movie.overview}</p>

                        <span>
                            Release Date
                            <span class="date-movie">${movie.release_date || movie.first_air_date}</span>
                        </span>

                        <h3 class="py-3 start-move">
                            <i class="fa-solid fa-star text-warning fs-6"></i>
                            <i class="fa-solid fa-star text-warning fs-6"></i>
                            <i class="fa-solid fa-star text-warning fs-6"></i>
                        </h3>

                        <div class="rate rounded-circle d-flex justify-content-center align-items-center">
                            <h3 class="rate-movie fs-5 fw-bold p-2">${movie.vote_average}</h3>
                        </div>
                    </div>
                </div>
            </div>`;
        }
    }

    rowDate.innerHTML = cartona;
});

function nameValidation() {
    return (/^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value))
}

function emailValidation() {
    return (/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(document.getElementById("emailInput").value))
}

function phoneValidation() {
    return (/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(document.getElementById("phoneInput").value))
}

function ageValidation() {
    return (/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(document.getElementById("ageInput").value))
}

function passwordValidation() {
    return (/^(?=.\d)(?=.[a-z])[0-9a-zA-Z]{8,}$/.test(document.getElementById("passwordInput").value))
}

function repasswordValidation() {
    return document.getElementById("repasswordInput").value == document.getElementById("passwordInput").value

}




let sub = document.getElementById('sub')
let nameInput = document.getElementById('nameInput')
let emailInput = document.getElementById('emailInput')
let phoneInput = document.getElementById('phoneInput')
let passInput = document.getElementById('passInput')
let rePassInput = document.getElementById('rePassInput')
let ageInput = document.getElementById('ageInput')


let ageRegex = /^(1[6-9]|[2-9][0-9])$/;
let phoneRegex = /^01[0125][0-9]{8}$/;
let passRegex = /^[A-Za-z1-9 ]{8,}$/;
let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



let isRight = false;

function showError(input, show) {
    if (show) {
        input.nextElementSibling.classList.remove("invisible");
        input.nextElementSibling.style.color = "rgb(214,46,51)";
        input.style.borderBottom = "2px solid rgb(214,46,51)";
    } else {
        input.nextElementSibling.classList.add("invisible");
        input.style.borderBottom = "2px solid white";
    }
}

function validate(input, regex) {
    let isValid = regex.test(input.value);
    showError(input, !isValid);
    updateSubmitButton();
    return isValid;
}

function validatePasswordField() {
    const validPass = passRegex.test(passInput.value);
    showError(passInput, !validPass);
    validateRepasswordField();
    updateSubmitButton();
    return validPass;
}

function validateRepasswordField() {
    const passOk = passRegex.test(passInput.value);
    const isMatch = passOk && (passInput.value === rePassInput.value);
    showError(rePassInput, !isMatch);
    updateSubmitButton();
    return isMatch;
}

function allFieldsValid() {
    return (
        emailRegex.test(emailInput.value) &&
        phoneRegex.test(phoneInput.value) &&
        ageRegex.test(ageInput.value) &&
        passRegex.test(passInput.value) &&
        passInput.value === rePassInput.value
    );
}

function updateSubmitButton() {
    if (
        emailInput.value === "" &&
        phoneInput.value === "" &&
        ageInput.value === "" &&
        passInput.value === "" &&
        rePassInput.value === ""
    ) {
        sub.style.backgroundColor = "black";
        sub.style.color = "white";
        sub.style.transform = "translateX(0px)";
        isRight = false;
    } else if (allFieldsValid()) {
        sub.style.backgroundColor = "black"; 
        sub.style.color = "white";           
        sub.style.transform = "translateX(0px)";
        isRight = false;
    } else {
        sub.style.backgroundColor = "rgb(214,46,51)"; 
        sub.style.color = "white";
    }
}

sub.addEventListener("mouseenter", function () {
    if (!allFieldsValid() && !(emailInput.value === "" && phoneInput.value === "" && ageInput.value === "" &&
        passInput.value === "" && rePassInput.value === "")) {
        if (!isRight) {
            sub.style.transform = "translateX(100px)";
            isRight = true;
        } else {
            sub.style.transform = "translateX(0px)";
            isRight = false;
        }
    }
});

emailInput.addEventListener("input", () => validate(emailInput, emailRegex));
phoneInput.addEventListener("input", () => validate(phoneInput, phoneRegex));
ageInput.addEventListener("input", () => validate(ageInput, ageRegex));
passInput.addEventListener("input", validatePasswordField);
rePassInput.addEventListener("input", validateRepasswordField);

updateSubmitButton();
sub.addEventListener("click", function(e) {
    e.preventDefault();

    if (allFieldsValid()) {
        emailInput.value = "";
        phoneInput.value = "";
        ageInput.value = "";
        passInput.value = "";
        rePassInput.value = "";
        nameInput.value = "";

        const inputs = [emailInput, phoneInput, ageInput, passInput, rePassInput, nameInput];
        inputs.forEach(input => {
            input.style.borderBottom = "2px solid white";
            if(input.nextElementSibling) input.nextElementSibling.classList.add("invisible");
        });

        updateSubmitButton();

        window.scrollTo({ top: 0, behavior: "smooth" });

        alert("Form submitted successfully!");
    } else {
        alert("Please fill all fields correctly!");
    }
});


