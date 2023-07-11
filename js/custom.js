$(document).ready(function() {

    getYear();
    showPageSection("Home");

    var path = window.location.href;

    if (path.indexOf("about") > -1) {
        showPageSection("About");
    }

    if (path.indexOf("membership") > -1) {
        showPageSection("Membership");
    }

    if (path.indexOf("shop") > -1) {
        showPageSection("Shop");
    }

    $("#player_submission_form").submit(function(e) {
        e.preventDefault();
    });

    
    $('#player_form_register_btn').click(function () {
        getAllPlayers();
    
        var jsonFormData = $("#player_submission_form").serializeArray();
        
        console.log(jsonFormData);

    });

    $('#player_submission_form').submit(function() {

      });

    $('.filters_menu li').click(function () {
        $('.filters_menu li').removeClass('active');
        $(this).addClass('active');

        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        })
    });

    $('.nav-item').click(function () {
        $('.nav-item').removeClass('active');
        $(this).addClass('active');

        var sectionId = $(this).children('.nav-link').text();

        showPageSection(sectionId);

        var data = $(this).attr('data-filter');
        $grid.isotope({
            filter: data
        })
    });

    $('.navbar-brand').click(function () {
        showPageSection("Home");
    });

   

    var $grid = $(".grid").isotope({
        itemSelector: ".all",
        percentPosition: false,
        masonry: {
            columnWidth: ".all"
        }
    })



  });


function showPageSection(sectionId){

    $('#Home').hide();
    $('#About').hide();
    $('#Membership').hide();
    $('#Shop').hide();
    $('.nav-item').removeClass('active');

    var div = $('#'+sectionId);
    var li = $('#nav'+sectionId);

    div.show();
    li.addClass("active");

}

  // to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}


/** google_map js **
function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}
**/
// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: true,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: true,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        1000: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

function getAllPlayers(){
    console.log("getting all players");

    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://mournebasketball-71d9.restdb.io/rest/players",
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "x-apikey": "64adc79f86d8c54794ed9074",
          "cache-control": "no-cache"
        }
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
      });
}

function postPlayer(){
    var jsondata = {"field1": "xyz","field2": "abc"};
    var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://mournebasketball-71d9.restdb.io/rest/players",
    "method": "POST",
    "headers": {
        "content-type": "application/json",
        "x-apikey": "<your CORS apikey here>",
        "cache-control": "no-cache"
    },
    "processData": false,
    "data": JSON.stringify(jsondata)
    }

    $.ajax(settings).done(function (response) {
    console.log(response);
    });
}