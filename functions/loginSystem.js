const numbers = [
    ["5547"],
    ["1973"],
    ["2", "8"]
];

var tries = [];

$(document).ready(() => {

    $("button[enter]").click(()=>{

        for (let i = 0; i < numbers.length; i++) {

            if (numbers[i].includes($("input[type='text']").val())) {

                tries[i] = true;

                loggedIn();

                pickVideo(i);

            } else {tries[i] = false; }

            if (tries.includes(false)) {

                $("p[err]").text("لا يوجد هذا الرقم");
            }
        }
    });
});

function switchPages(f, t) {

    $("a").eq(f).attr("in", "n");
    $("a").eq(t).attr("in", "y");
}

function loggedIn() {

    $("#login").hide(500,"swing");

    switchPages(1,2);

    setTimeout(() => {
                
        $("#video").toggle(500, "swing");
    }, 500);
}

function pickVideo(n) {

    if (n == 0) {
      
        $(".video").attr("src", "https://screenpal.com/player/cZnU3VVKwPB?width=100%&height=100%&ff=1&title=0");
    
       
        $("h1[title]").text("Rectilinear Motion Mechanics Essay Questions");
    }
    
    if (n == 1) {

       
        $(".video").attr("src", "https://screenpal.com/player/cZnOqXVKFN1?width=100%&height=100%&ff=1&title=0");
    
       
        $("h1[title]").text("Senior 2 Math Arithmetic Sequences");
    }
    if (n == 2) {

        $("video").attr("src", "link goes here");
        $("h1[title]").text("تجربة 3");
    }
}
