const numbers = [
    ["2375"],  //عبدالرحمان
    ["1973"],
    ["4457"],
    ["5674"]   
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

    switchPages(1,3);

    setTimeout(() => {
                
        $("#video").toggle(500, "swing");
    }, 500);
}

function pickVideo(n) {

   

    if (n == 0) {
      
        $(".video").attr("src", "https://go.screenpal.com/player/cZnF3hVdLMr?width=100%&height=100%&ff=1&title=0");
    
       
        

        var buttonContainers = document.querySelectorAll('.button-container');
        $("button#myButton").click(() => {
            $(".video").attr("src", "https://go.screenpal.com/player/cZnOqXVKFN1?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Math Arithmetic Sequences").css("text-align", "left");
        });

        $("button#myButton2").click(() => {
            $(".video").attr("src", "https://go.screenpal.com/player/cZeerxVKBYF?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Calculus Rate Of Change").css("text-align", "left");
        });

        $("button#myButton3").click(() => {
            $(".video").attr("src", "https://go.screenpal.com/player/cZnF3hVdLMr?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Sequence & Series").css("text-align", "left");
        });

    }
    
    if (n == 1) {

       
        $(".video").attr("src", "https://screenpal.com/player/cZnOqXVKFN1?width=100%&height=100%&ff=1&title=0");
    
       
        $("h1[title]").text("Senior 2 Math Arithmetic Sequences").css("text-align", "left");;
    }
    if (n == 2) {

        $(".video").attr("src", "https://screenpal.com/player/cZee3aVKBOm?width=100%&height=100%&ff=1&title=0");
    
       
        $("h1[title]").text("Senior 1 Math Trignometric Identities").css("text-align", "left");;
    }

 
    
    if (n === 3) {

    
        $(".video").attr("src", "https://screenpal.com/player/cZeerxVKBYF?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 2 Calculus Rate Of Change").css("text-align", "left");
    
        
       

       
    
  
        buttonContainers[0].appendChild(toggleButton);

    }
        
}
