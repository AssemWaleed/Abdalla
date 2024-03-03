const numbers = [
    ["5547", "0"],
    ["1", "5"],
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
  
        $(".video").attr("src", "videos/Senior 2 Rectilinear Motion Secondterm Mechanics Essay Questions.mp4");
        $("h1[title]").text("Rectilinear Motion Mechanics Essay Questions");
    }
    if (n == 1) {

        $("video").attr("src", "videos/madshit.mp4");
        $("h1[title]").text("تجربة 2");
    }
    if (n == 2) {

        $("video").attr("src", "link goes here");
        $("h1[title]").text("تجربة 3");
    }
}