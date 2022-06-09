

var myIndex = 0;
carousel();

// Slideshow
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
    setTimeout(carousel, 4500);
}

// Show image on hover (for services list)
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
    modal_img.src = "/assets/img/projects/" +  img.id.split("_")[0] + "/" + img.id;
}

function closeModal() {
    var modal = document.getElementById("modal_box");
    modal.style.display = "none";
}

function nextImage(direction) {
    var modal_img_src = document.getElementById("modal_img").src.split('/');
    var modal_img = modal_img_src[modal_img_src.length - 1];
    var src_img = document.getElementById(modal_img);

    var next = src_img.getAttribute('data-'+direction);
    document.getElementById("modal_img").src = "/assets/img/projects/" +  next.split("_")[0] + "/" + next;
}

// Static reviews
(function ($) {
    var $reviews = $('.js-reviews');

    $('#review-form').submit(function () {
      var form = this;

      $(form).addClass('disabled');
    //   $('#review-form-submit').html('<svg class="icon spin"><use xlink:href="#icon-loading"></use></svg> Loading...');

      $.ajax({
        type: $(this).attr('method'),
        url: $(this).attr('action'),
        data: $(this).serialize(),
        contentType: 'application/x-www-form-urlencoded',
        success: function (data) {
          $('#review-form-submit').html('Submitted');
          $('.post__reviews-form .js-notice').removeClass('notice--danger').addClass('notice--success');
          showAlert('<strong>Thanks for your review!</strong> It will show on the site once it has been approved.');
        },
        error: function (err) {
          console.log(err);
          $('#review-form-submit').html('Submit review');
          $('.post__reviews-form .js-notice').removeClass('notice--success').addClass('notice--danger');
          showAlert('<strong>Sorry, there was an error with your submission.</strong> Please make sure all required fields have been completed and try again.');
          $(form).removeClass('disabled');
        }
      });

      return false;
    });

    function showAlert(message) {
      $('.post__reviews-form .js-notice').removeClass('hidden');
      $('.post__reviews-form .js-notice-text').html(message);
    }
  })(jQuery);