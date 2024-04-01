const numbers = [
    ["2375"],  //عبدالرحمان
    ["4040"], // Malak mohammed
    ["1450"], // saloma
    ["1111"], // سمير ياسر سمير Free
    ["2211"], // فريده احمد 
    ["2048"], // Sama Mohamed 
    ["6969"], // sara
    ["6911"], // Menna Essam 
    ["2111"], // Rodina
    ["2314"], // Fareda hethm 
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


function addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID) {
    // Creating a new <img> element
    var newImg = document.createElement('img');

    // Set attributes for the image
    newImg.setAttribute('src', imageSrc); // Set the image source
    newImg.setAttribute('alt', altText); // Set the alt attribute

    // Creating a div for the tooltip
    var tooltip = document.createElement('div');
    tooltip.innerHTML = tooltipText.replace(tooltipTextID, `<span style="color:red; cursor:pointer;" onclick="copyToClipboard('${tooltipTextID}')">${tooltipTextID}</span>`);
    tooltip.style.display = "none"; // Initially hide the tooltip
    tooltip.style.position = "absolute";
    tooltip.style.backgroundColor = "#05660a";
    tooltip.style.color = "white";
    tooltip.style.padding = "15px"; // Increased padding
    tooltip.style.fontSize = "20px";
     
  

    tooltip.style.lineHeight = "20px"; // Adjusted line height
    tooltip.style.top = "100%"; // Position the tooltip below the image
    tooltip.style.left = "50%"; // Position the tooltip centered horizontally
    tooltip.style.borderRadius = "5px";

    // Finding the existing <a> element with class "Profile"
    var existingLink = document.querySelector('.Profile');

    // Appending the new <img> element inside the existing <a> element
    existingLink.appendChild(newImg);

    // Appending the tooltip inside the existing <a> element
    existingLink.appendChild(tooltip);

    // Event listener for mouseover event on the image
    newImg.addEventListener('mouseover', function() {
        tooltip.style.display = "block"; // Display the tooltip
    });

    // Event listener for mouseout event on the image
    newImg.addEventListener('mouseout', function() {
        tooltip.style.display = "none"; // Hide the tooltip
    });
}

// Function to copy text to clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
    alert('ID copied to clipboard!');
}



function switchPages(f, t) {

    $("a").eq(f).attr("in", "n");
    $("a").eq(t).attr("in", "y");
}

function loggedIn() {

    $("#login").hide(500,"swing");

    switchPages(1,4);

    setTimeout(() => {
                
        $("#video").toggle(500, "swing");
    }, 500);
}

function pickVideo(n) {

   

    if (n == 0) { // عبدالرحمان 2375

        var imageSrc = 'images/profileMan.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Abdulrahman , Id is <span style="color:red; cursor:pointer;" >2375</span>';
        var tooltipTextID = '2375';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
 
      
        $(".video").attr("src", "https://iframe.mediadelivery.net/embed/224107/761689b2-a7f4-4aa0-a933-f2bf46829f63?autoplay=false&loop=false&muted=false&preload=true&responsive=true");
        $("h1[title]").text("Senior 2 Problems Lesson 1").css("text-align", "left");
    
        
        var button00 = document.createElement("button");

        button00.innerText = "Problems Lesson 1";
        button00.style.fontSize = '20px';
        button00.style.color = '#15920a'


        button00.addEventListener("click", function() {
            $(".video").attr("src", "https://iframe.mediadelivery.net/embed/224107/761689b2-a7f4-4aa0-a933-f2bf46829f63?autoplay=false&loop=false&muted=false&preload=true&responsive=true");
            $("h1[title]").text("Senior 2 Problems Lesson 1").css("text-align", "left");
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
        /*container.appendChild(button01);
        container.appendChild(button02);
        */
    
       
        

      
    }
    
    if (n == 1) {   // Malak mohammed 4040


        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Malak , Id is <span style="color:red; cursor:pointer;" >4040</span>';
        var tooltipTextID = '4040';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
 

       
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
        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Salma, Id is <span style="color:red; cursor:pointer;">1450</span>';
        var tooltipTextID = '1450';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
    
        $(".video").attr("src", "https://go.screenpal.com/player/cZnOFdVKFKJ?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Scalars And Vectors").css("text-align", "left");
    
        var button3 = document.createElement("button");
        button3.innerText = "3- Multiplying Matrices";
        button3.style.fontSize = '20px';
        
        button3.addEventListener("click", function() {
            $(".video").attr("src", "https://iframe.mediadelivery.net/embed/224107/8c16ed20-acec-4278-9f59-eae061814f0a?autoplay=false&loop=false&muted=false&preload=true&responsive=true");
            $("h1[title]").text("Senior 1 Multiplying Matrices").css("text-align", "left");
            button3.style.color = '#15920a';
            button6.style.color = 'black';
            button5.style.color = 'black';
            button4.style.color = 'black';
            button7.style.color = 'black';
        });
    
        var button4 = document.createElement("button");
        button4.innerText = "5- Determinants";
        button4.style.fontSize = '20px';
        button4.addEventListener("click", function() {
            $(".video").attr("src", "https://iframe.mediadelivery.net/embed/224107/2f3d5fd1-90e0-4222-a98f-3927466e5b9b?autoplay=false&loop=false&muted=false&preload=true&responsive=true");
            $("h1[title]").text("Senior 1 Determinants").css("text-align", "left");
            button4.style.color = '#15920a';
            button6.style.color = 'black';
            button5.style.color = 'black';
            button7.style.color = 'black';
            button3.style.color = 'black';
        });

        var button5 = document.createElement("button");
        button5.innerText = "2- Trignometric Identities";
        button5.style.fontSize = '20px';
        button5.addEventListener("click", function() {
            $(".video").attr("src", "https://go.screenpal.com/player/cZee3aVKBOm?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 1 Math Trignometric Identities").css("text-align", "left");
            button5.style.color = '#15920a';
            button6.style.color = 'black';
            button7.style.color = 'black';
            button4.style.color = 'black';
            button3.style.color = 'black';
        });

        var button6 = document.createElement("button");
        button6.innerText = "4- Operation On Vector";
        button6.style.fontSize = '20px';
        button6.addEventListener("click", function() {
            $(".video").attr("src", "https://go.screenpal.com/player/cZe3cmV7B9u?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 1 Operation On Vector").css("text-align", "left");
            button6.style.color = '#15920a';
            button7.style.color = 'black';
            button5.style.color = 'black';
            button4.style.color = 'black';
            button3.style.color = 'black';
        });


        var button7 = document.createElement("button");
        button7.innerText = "1- Scalars And Vectors";
        button7.style.fontSize = '20px';
        button7.style.color = '#15920a';
        button7.addEventListener("click", function() {
            $(".video").attr("src", "https://go.screenpal.com/player/cZnOFdVKFKJ?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 1 Scalars And Vectors").css("text-align", "left");
            button7.style.color = '#15920a';
            button6.style.color = 'black';
            button5.style.color = 'black';
            button4.style.color = 'black';
            button3.style.color = 'black';
        });
    
    
        var container = document.getElementById("buttonContainer");
        container.appendChild(button7);
        container.appendChild(button5);
        container.appendChild(button3);
        container.appendChild(button6);
        container.appendChild(button4);
        
        
    }
    





 
    
    if (n === 3) {   // سمير ياسر سمير Free 1111

      
        var imageSrc = 'images/profileMan.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Samer , Id is <span style="color:red; cursor:pointer;" >1111</span>';
        var tooltipTextID = '1111';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);

    
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

        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Farida , Id is <span style="color:red; cursor:pointer;" >2211</span>';
        var tooltipTextID = '2211';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);

    
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

        
        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Sama , Id is <span style="color:red; cursor:pointer;" >2048</span>';
        var tooltipTextID = '2048';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);

    
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


        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Sara , Id is <span style="color:red; cursor:pointer;" >6969</span>';
        var tooltipTextID = '6969';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);


    
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
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZeIcLV7iGq?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Calculas Differentiation").css("text-align", "left");
            button15.style.color = '#15920a';
            button14.style.color = 'black';
    
        });

        

        var container = document.getElementById("buttonContainer");


        container.appendChild(button14);
        container.appendChild(button15); 


    }


    if (n === 7) {  // Menna Essam 6911


        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Menna Essam , Id is <span style="color:red; cursor:pointer;" >6911</span>';
        var tooltipTextID = '6911';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);


    
        $(".video").attr("src", "https://go.screenpal.com/player/cZnF3hVdLMr?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 2 Sequence & Series").css("text-align", "left");
    
        
        var button16 = document.createElement("button");

        button16.innerText = "1-Sequence & Series";
        button16.style.fontSize = '20px';
        button16.style.color = '#15920a';


        button16.addEventListener("click", function() {
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZnF3hVdLMr?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 2 Sequence & Series").css("text-align", "left");
            button16.style.color = '#15920a';
            button17.style.color = 'black';
            button17.style.color = 'black';
            button19.style.color = 'black';
        });


        var button17 = document.createElement("button");

        button17.innerText = "2-Arithmetic Sequences";
        button17.style.fontSize = '20px';
        

        button17.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZnOqXVKFN1?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Math Arithmetic Sequences").css("text-align", "left");
            button17.style.color = '#15920a';
            button16.style.color = 'black';
            button18.style.color = 'black';
            button19.style.color = 'black';
        });

        
        var button18 = document.createElement("button");

        button18.innerText = "3-Rate Of Change";
        button18.style.fontSize = '20px';
        

        button18.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZeerxVKBYF?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Calculus Rate Of Change").css("text-align", "left");
            button18.style.color = '#15920a';
            button16.style.color = 'black';
            button17.style.color = 'black';
            button19.style.color = 'black';
    
        });


        var button19 = document.createElement("button");

        button19.innerText = "4-Differentiation";
        button19.style.fontSize = '20px';
        

        button19.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZeIcLV7iGq?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Calculas Differentiation").css("text-align", "left");
            button19.style.color = '#15920a';
            button16.style.color = 'black';
            button17.style.color = 'black';
            button18.style.color = 'black';
    
        });

        

        var container = document.getElementById("buttonContainer");


        container.appendChild(button16);
        container.appendChild(button17);
        container.appendChild(button18);
        container.appendChild(button19);



        


    }


    if (n === 8) {  // Rodina 2111


        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Rodina , Id is <span style="color:red; cursor:pointer;" >2111</span>';
        var tooltipTextID = '2111';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);


    
        $(".video").attr("src", "https://go.screenpal.com/player/cZnU3VVKwPB?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 2 Rectilinear Motion Secondterm Mechanics Essay Questions").css("text-align", "left");
    
        
        var button20 = document.createElement("button");

        button20.innerText = "1-Rectilinear Motion";
        button20.style.fontSize = '20px';
        button20.style.color = '#15920a';


        button20.addEventListener("click", function() {
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZnU3VVKwPB?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 2 Rectilinear Motion Secondterm Mechanics Essay Questions").css("text-align", "left");
            button20.style.color = '#15920a';
            button21.style.color = 'black';
            button22.style.color = 'black';
            button23.style.color = 'black';
        });


        var button21 = document.createElement("button");

        button21.innerText = "2-Uniform acceleration";
        button21.style.fontSize = '20px';
        

        button21.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZei3oVKNhc?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2  Rectilinear motion with uniform acceleration").css("text-align", "left");
            button21.style.color = '#15920a';
            button20.style.color = 'black';
            button22.style.color = 'black';
            button23.style.color = 'black';
        });

        
        var button22 = document.createElement("button");

        button22.innerText = "3-Motion Under Effect Of Gravity";
        button22.style.fontSize = '20px';
        

        button22.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZeD0jV7YUG?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Mechanics Motion Under Effect Of Gravity").css("text-align", "left");
            button22.style.color = '#15920a';
            button20.style.color = 'black';
            button21.style.color = 'black';
            button23.style.color = 'black';
    
        });


        /*var button23 = document.createElement("button");

        button23.innerText = "4-Differentiation";
        button23.style.fontSize = '20px';
        

        button23.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZeIcLV7iGq?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Calculas Differentiation").css("text-align", "left");
            button23.style.color = '#15920a';
            button20.style.color = 'black';
            button21.style.color = 'black';
            button22.style.color = 'black';
    
        });

        */

        var container = document.getElementById("buttonContainer");

        
        container.appendChild(button20);
        container.appendChild(button21);
        container.appendChild(button22);
        container.appendChild(button23);



        


    }

    if (n === 9) {  // Fareda hethm  2314

        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Farida Hesham , Id is <span style="color:red; cursor:pointer;" >2314</span>';
        var tooltipTextID = '2314';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       


    
        $(".video").attr("src", "https://go.screenpal.com/player/cZnU3VVKwPB?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 2 Rectilinear Motion Secondterm Mechanics Essay Questions").css("text-align", "left");
    
        
        var button24 = document.createElement("button");

        button24.innerText = "1-Rectilinear Motion";
        button24.style.fontSize = '20px';
        button24.style.color = '#15920a';


        button24.addEventListener("click", function() {
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZnU3VVKwPB?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 2 Rectilinear Motion Secondterm Mechanics Essay Questions").css("text-align", "left");
            button24.style.color = '#15920a';
            button25.style.color = 'black';
            button26.style.color = 'black';
            button27.style.color = 'black';
        });


        var button25 = document.createElement("button");

        button25.innerText = "2-Uniform acceleration";
        button25.style.fontSize = '20px';
        

        button25.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZei3oVKNhc?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2  Rectilinear motion with uniform acceleration").css("text-align", "left");
            button25.style.color = '#15920a';
            button24.style.color = 'black';
            button26.style.color = 'black';
            button27.style.color = 'black';
        });

        
        var button26 = document.createElement("button");

        button26.innerText = "3-Motion Under Effect Of Gravity";
        button26.style.fontSize = '20px';
        

        button26.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZeD0jV7YUG?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Mechanics Motion Under Effect Of Gravity").css("text-align", "left");
            button26.style.color = '#15920a';
            button25.style.color = 'black';
            button24.style.color = 'black';
            button27.style.color = 'black';
    
        });


        var button27 = document.createElement("button");

        button27.innerText = "4-Universal Gravitation Law";
        button27.style.fontSize = '20px';
        

        button27.addEventListener("click", function() {
            
            $(".video").attr("src", "https://iframe.mediadelivery.net/embed/224107/0e4d8b88-fa76-4990-9c5d-9c6911b742a9?autoplay=false&loop=false&muted=false&preload=true&responsive=true");
            $("h1[title]").text("Senior 2 Newton Universal Gravitation Law").css("text-align", "left");
            button27.style.color = '#15920a';
            button25.style.color = 'black';
            button26.style.color = 'black';
            button24.style.color = 'black';
    
        });

        

        var container = document.getElementById("buttonContainer");

        
        container.appendChild(button24);
        container.appendChild(button25);
        container.appendChild(button26);
        container.appendChild(button27);



        


    }








        
}
