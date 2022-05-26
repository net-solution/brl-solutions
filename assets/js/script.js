var myIndex = 0;
carousel();

function carousel() {
    var slides = document.getElementsByClassName("slide");
    var i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.opacity = "0";
    }
    myIndex++;
    if (myIndex > slides.length) {
        myIndex = 1
    }
    var next_slide = slides[myIndex - 1];
    next_slide.style.opacity = "1";
    setTimeout(carousel, 4000);
}

function hoverImg(item) {
    var image;
    var new_image = 'url(/assets/img/services/' + item.id + '.jpg)';
    if (window.matchMedia("(min-width: 500px)").matches) {
        if (item.parentNode.parentNode.id == "services-left") {
            active_item = document.getElementsByClassName("service-item active left")[0];
            active_item.className = "service-item";
            item.className = "service-item active left";

            image = document.getElementById("services-left");
            image.style.setProperty('--service-img-left', new_image);
        }
        else {
            active_item = document.getElementsByClassName("service-item active right")[0];
            active_item.className = "service-item";
            item.className = "service-item active right";

            image = document.getElementById("services-right");
            image.style.setProperty('--service-img-right', new_image);
        }
    }
}

// Shows navbar on mobile
function showNavbar() {
    var x = document.getElementById("nav-links");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

// Click for full-sized image
function fullImage(img) {
    var modal = document.getElementById("modal_box");
    var modal_img = document.getElementById("modal_img");

    modal.style.display = "block";
    modal_img.src = img.src;
}

function closeModal(modal) {
    modal.style.display = "none";
}