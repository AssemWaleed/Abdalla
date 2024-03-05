const numbers = [
    ["5547"],  // Samir Yasser
    ["1973"],  // Shahd Mansour
    ["4457"],  // Fares waleed
    ["5674"]   // Aya Medhat 
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

function pickVideo(n) { // Samir Yasser 5547

    if (n == 0) {
      
        $(".video").attr("src", "https://go.screenpal.com/player/cZee3aVKBOm?width=100%&height=100%&ff=1&title=0");
    
       
        $("h1[title]").text("Senior 1 Math Trignometric Identities").css("text-align", "left");

    }
    
    if (n == 1) {  // Shahd Mansour 1973

       
        $(".video").attr("src", "https://go.screenpal.com/player/cZee3aVKBOm?width=100%&height=100%&ff=1&title=0");
    
       
        $("h1[title]").text("Senior 1 Math Trignometric Identities").css("text-align", "left");

    }
    if (n == 2) {   //  Fares waleed 4457

        $(".video").attr("src", "https://go.screenpal.com/player/cZeerxVKBYF?width=100%&height=100%&ff=1&title=0");
    
       
        $("h1[title]").text("Senior 2 Calculus Rate Of Change").css("text-align", "left");;
    }

 
    
    if (n === 3) {   // Aya Medhat 5674

    
      
        $(".video").attr("src", "https://go.screenpal.com/player/cZeerxVKBYF?width=100%&height=100%&ff=1&title=0");
    
       
        $("h1[title]").text("Senior 2 Calculus Rate Of Change").css("text-align", "left");;
        
    }
    
        
}
