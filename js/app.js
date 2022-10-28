//This code create dynamically navbar from numbers of sections in page
const section = document.querySelectorAll('section');
section.forEach(function(v, i, a) {
    const listItems = document.createElement("li");
    //create and add anchor element with href attribute foreach list item by using section id
    const link = section[i].getAttribute("id");
    listItems.innerHTML = `<a name="anchor" href="#${link}">${section[i].getAttribute("data-nav")}</a>`;
    //This event responsible for make a smooth scroll to clicked section in navbar
    listItems.addEventListener('click', function() {
        section[i].scrollIntoView({ behavior: "smooth" })
    });
    //add list items to navbar
    document.getElementById('navbar__list').appendChild(listItems);
});

//This event add "active" class to section & "navbar_active" class to section li in navbar when user scroll to top of section 
window.addEventListener("scroll", function() {
    section.forEach(function sos(v, i, a) {
        const location = section[i].getBoundingClientRect().top;
        const navselc = document.querySelector(`a[href="#${section[i].id}"]`);
        if (location > -1 && location < 300) {
            section[i].classList.add("active")
            navselc.classList.add("link_active")
            navselc.parentElement.classList.add("navbar_active")
        } else {
            section[i].classList.remove("active")
            navselc.classList.remove("link_active")
            navselc.parentElement.classList.remove("navbar_active")
        }
    })
});

//This code ignore jump scroll that anchor element doing
//code example from "https://www.w3schools.com/jsref/event_preventdefault.asp"
const links = document.getElementsByName("anchor");
links.forEach(function() {
    addEventListener("click", function(event) {
        event.preventDefault();
    })
});
