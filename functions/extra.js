const numbers = [
    ["2375"],  //عبدالرحمان
    ["4040"], // Malak mohammed
    ["1450"], // saloma
    ["1111"], // سمير ياسر سمير Free
    ["2211"], // فريده احمد 
    ["2048"], // Sama Mohamed 
    ["6969"], // sara
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

   

    if (n == 0) { // عبدالرحمان 2375
      
        $(".video").attr("src", "https://go.screenpal.com/player/cZnOqXVKFN1?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 2 Math Arithmetic Sequences").css("text-align", "left");
    
        
        var button00 = document.createElement("button");

        button00.innerText = "Arithmetic Sequences";
        button00.style.fontSize = '20px';
        button00.style.color = '#15920a'


        button00.addEventListener("click", function() {
            $(".video").attr("src", "https://go.screenpal.com/player/cZnOqXVKFN1?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Math Arithmetic Sequences").css("text-align", "left");
            button00.style.color = '#15920a'
            button01.style.color = 'black'
            button02.style.color = 'black'
        });


        var button01 = document.createElement("button");

        button01.innerText = "Rate Of Change";
        button01.style.fontSize = '20px';

        button01.addEventListener("click", function() {
            $(".video").attr("src", "https://go.screenpal.com/player/cZeerxVKBYF?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Calculas Rate Of Change").css("text-align", "left");
            button01.style.color = '#15920a'
            button00.style.color = 'black'
            button02.style.color = 'black'
        });



        var button02 = document.createElement("button");

        button02.innerText = "Calculas Differentiation";
        button02.style.fontSize = '20px';

        button02.addEventListener("click", function() {
            $(".video").attr("src", "https://go.screenpal.com/player/cZeIcLV7iGq?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Calculas Differentiation").css("text-align", "left");
            button02.style.color = '#15920a'
            button01.style.color = 'black'
            button00.style.color = 'black'
        });


        var container = document.getElementById("buttonContainer");


        container.appendChild(button00);
        container.appendChild(button01);
        container.appendChild(button02);

    
       
        

      
    }
    
    if (n == 1) {   // Malak mohammed 4040

       
        $(".video").attr("src", "https://go.screenpal.com/player/cZeerxVKBYF?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Calculus Rate Of Change").css("text-align", "left");
    
        
        var button1 = document.createElement("button");

        button1.innerText = "Calculus Rate Of Change";
        button1.style.fontSize = '20px';


        button1.addEventListener("click", function() {
            $(".video").attr("src", "https://go.screenpal.com/player/cZeerxVKBYF?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Calculus Rate Of Change").css("text-align", "left");
        });


        var button2 = document.createElement("button");

        button2.innerText = "Calculas Differentiation";
        button2.style.fontSize = '20px';

        button2.addEventListener("click", function() {
            $(".video").attr("src", "https://go.screenpal.com/player/cZeIcLV7iGq?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Calculas Differentiation").css("text-align", "left");
        });


        var container = document.getElementById("buttonContainer");


        container.appendChild(button1);
        container.appendChild(button2);


        



    }

    if (n == 2) {    // saloma 1450

       
        $(".video").attr("src", "https://go.screenpal.com/player/cZee3aVKBOm?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Math Trignometric Identities").css("text-align", "left");
    
        
        var button3 = document.createElement("button");

        button3.innerText = "Math Trignometric Identities";
        button3.style.fontSize = '20px';


        button3.addEventListener("click", function() {
            $(".video").attr("src", "https://go.screenpal.com/player/cZee3aVKBOm?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Math Trignometric Identities").css("text-align", "left");
        });


        var button4 = document.createElement("button");

        button4.innerText = "Multiplying Matrices";
        button4.style.fontSize = '20px';

        button4.addEventListener("click", function() {
            $(".video").attr("src", "https://go.screenpal.com/player/cZeIc4V7i50?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 1 Multiplying Matrices").css("text-align", "left");
        });


        var container = document.getElementById("buttonContainer");


        container.appendChild(button3);
        container.appendChild(button4);


        



    }





 
    
    if (n === 3) {   // سمير ياسر سمير Free 1111

    
        $(".video").attr("src", "https://go.screenpal.com/player/cZeIc4V7i50?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Multiplying Matrices").css("text-align", "left");
    
        
        var button5 = document.createElement("button");

        button5.innerText = "Multiplying Matrices";
        button5.style.fontSize = '20px';
        button5.style.color = '#15920a';


        button5.addEventListener("click", function() {
            $(".video").attr("src", "https://go.screenpal.com/player/cZeIc4V7i50?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 1 Multiplying Matrices").css("text-align", "left");
            button5.style.color = '#15920a';
            button6.style.color = 'black';
        });


        var button6 = document.createElement("button");

        button6.innerText = "Operation On Vector";
        button6.style.fontSize = '20px';
        

        button6.addEventListener("click", function() {
            $(".video").attr("src", "https://go.screenpal.com/player/cZe3cmV7B9u?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 1 Operation On Vector").css("text-align", "left");
            button6.style.color = '#15920a';
            button5.style.color = 'black';
        });


        var container = document.getElementById("buttonContainer");


        container.appendChild(button5);
        container.appendChild(button6);

        var videoTextElement = document.querySelector('.videoText');


    }


    if (n === 4) {   //  فريده احمد 2211

    
        $(".video").attr("src", "https://go.screenpal.com/player/cZeerxVKBYF?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 2 Calculus Rate Of Change").css("text-align", "left");
    
        
        var button7 = document.createElement("button");

        button7.innerText = "Calculus Rate Of Change";
        button7.style.fontSize = '20px';


        button7.addEventListener("click", function() {
            $(".video").attr("src", "https://go.screenpal.com/player/cZeerxVKBYF?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Calculus Rate Of Change").css("text-align", "left");
        
        });


        var button8 = document.createElement("button");

        button8.innerText = "Calculas Differentiation";
        button8.style.fontSize = '20px';
        

        button8.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZeIcLV7iGq?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Calculas Differentiation").css("text-align", "left");
        });



        var button9 = document.createElement("button");

        button9.innerText = "Arithmetic Series";
        button9.style.fontSize = '20px';
        

        button9.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZeY34V744q?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Math Arithmetic Series").css("text-align", "right");
        });


        var container = document.getElementById("buttonContainer");


        container.appendChild(button7);
        container.appendChild(button8);
        container.appendChild(button9);

        


    }


    if (n === 5) {  // Sama Mohamed 2048

    
        $(".video").attr("src", "https://go.screenpal.com/player/cZnOFdVKFKJ?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Scalars And Vectors").css("text-align", "left");
    
        
        var button10 = document.createElement("button");

        button10.innerText = "1-Scalars & Vectors";
        button10.style.fontSize = '20px';
        button10.style.color = '#15920a';


        button10.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZnOFdVKFKJ?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 1 Scalars And Vectors").css("text-align", "left");
            button10.style.color = '#15920a';
            button11.style.color = 'black';
            button12.style.color = 'black';
            button13.style.color = 'black';
        
        });


        var button11 = document.createElement("button");

        button11.innerText = "2-Trignometric Identities";
        button11.style.fontSize = '20px';
        

        button11.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZee3aVKBOm?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 1 Math Trignometric Identities").css("text-align", "left");
            button11.style.color = '#15920a';
            button10.style.color = 'black';
            button12.style.color = 'black';
            button13.style.color = 'black';
        });



        var button12 = document.createElement("button");

        button12.innerText = "3-Multiplying Matrices";
        button12.style.fontSize = '20px';
        

        button12.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZeIc4V7i50?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 1 Multiplying Matrices").css("text-align", "left");
            button12.style.color = '#15920a';
            button11.style.color = 'black';
            button10.style.color = 'black';
            button13.style.color = 'black';

        });


        
        var button13 = document.createElement("button");

        button13.innerText = "4-Operation On Vector"
        button13.style.fontSize = '20px';
        
        

        button13.addEventListener("click", function() {
            $(".video").attr("src", "https://go.screenpal.com/player/cZe3cmV7B9u?width=100%&height=100%&ff=1&title=0")
            button13.style.color = '#15920a';
            button10.style.color = 'black';
            button11.style.color = 'black';
            button12.style.color = 'black'
        });
        

        var container = document.getElementById("buttonContainer");


        container.appendChild(button10);
        container.appendChild(button11);
        container.appendChild(button12);
        container.appendChild(button13);




        


    }


    if (n === 6) {  // sara 6969

    
        $(".video").attr("src", "https://go.screenpal.com/player/cZeerxVKBYF?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 2 Calculus Rate Of Change").css("text-align", "left");
    
        
        var button14 = document.createElement("button");

        button14.innerText = "1-Rate Of Change";
        button14.style.fontSize = '20px';
        button14.style.color = '#15920a';


        button14.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZeerxVKBYF?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Calculus Rate Of Change").css("text-align", "left");
            button14.style.color = '#15920a';
            button15.style.color = 'black';
           
        });


        var button15 = document.createElement("button");

        button15.innerText = "2-Differentiation";
        button15.style.fontSize = '20px';
        

        button15.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZee3aVKBOm?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Calculas Differentiation").css("text-align", "left");
            button15.style.color = '#15920a';
            button14.style.color = 'black';
    
        });

        

        var container = document.getElementById("buttonContainer");


        container.appendChild(button14);
        container.appendChild(button15);





        


    }
        
}
