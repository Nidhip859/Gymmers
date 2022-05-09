//img toggle

// veg diet plan
function vegetarian() {
    document.getElementById('myImage').src = "img/chart-lowcarb-veg.jpg";
}

// non-veg diet plan
function nonVegetarian() {
    document.getElementById('myImage').src = "img/maxresdefault.jpg";
}

//faq
function popupFaq() {
    let headerFaq = document.querySelectorAll(".headerFaq");

    for (let i = 0; i < headerFaq.length; i++) {
        headerFaq[i].addEventListener("click", function () {
            let faqList = this.nextElementSibling;
            faqList.classList.toggle("active");

            if (this.firstElementChild.innerText === '+') {
                this.firstElementChild.innerText = "-"
            } else {
                this.firstElementChild.innerText = "+"
            }
        })
    }
}
