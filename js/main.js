var x = window.innerWidth;

console.log(x)

$(window).resize(function () {

    // treba ispraviti, sve je ok samo sto se pokrece tek prilokom risajza
    // var x = window.innerWidth;

    // This will execute whenever the window is resized
    x = $(window).width();

    console.log(x)

    var y = $(document).scrollTop();

    if (x < 768) {
        $(document).scroll(function () {
            var y = $(document).scrollTop(), //get page y value 
                header = $(".header-100");
            slider = $("#sion-it-oprema-beograd");

            if (y >= 76) {
                header.css({
                    position: "fixed",
                    "top": "0px",
                    "width": "100%",
                })
            } else {
                header.css({
                    position: "absolute",
                    "top": "76px",
                    "width": "100%",
                });
                slider.css({
                    position: "absolute",
                    "top": "148px",
                    "width": "100%",
                })
            };
        });
    } else {
        console.log('ono drugo')
        $(document).scroll(function () {
            // var x = window.innerWidth;
            var y = $(document).scrollTop(), //get page y value 
                slider = $("#sion-it-oprema-beograd");
            header = $(".header-100");
            if (y >= 24) {
                header.css({
                    position: "fixed",
                    "top": "0px",
                    "width": "100%",
                })
            } else {
                header.css({
                    position: "absolute",
                    "top": "24px",
                    "width": "100%",
                });
                slider.css({
                    position: "absolute",
                    "top": "76px",
                    "width": "100%",
                })
            };
        });
    }

});