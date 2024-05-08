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
    ["1422"], // Salma Elsayed 1422
    ["2252"], // Ahmed reda 2252
    ["4141"], //𝘼𝘽𝘿 𝘼𝙇 𝙆𝘼𝘿𝙀𝙍 4141
    ["1141"], // Mohamed 1141
    ["1242"], // Mariam Ahmed 1242
    ["1212"], // Malak Wahed 1212
    ["2222"], // Jana Eslam 2222
    ["2112"], // RATOJA 2112
    ["5520"], // !
    ["5110"], // Sama Zayed 5110
    ["1112"], // MohameD 1112
    ["5353"], // Malak 5353
    ["5153"], // Mahmoud 5153
    ["6281"], //Jana Hamzawy 6281
    ["6182"], //abdelrahman.ibrahim  6182
    ["6222"], // Unknown 6222
    ["1222"], // Unknown 1222
    ["7222"], // Mariam Diab 7222
    ["7727"], // yossefelzanaty 7727
    ["7777"], // Nada Aiad 7777
    ["7373"], // Rodina 7373
    ["7773"], // Medo 7773
    ["2552"], // Amira 2552
    ["2182"], // Rodina Hossam 2182
    ["1181"], // Adam ahmed Zaki 1181
    ["2221"], // 𝑺𝒂𝒎𝒂𝒔𝒆𝒎𝒐𝒐𝒐 2221
    ["3323"], // Ibrahim Ahmed 3323
    ["3321"], // Hamza 3321
    ["5881"], // Asraa 5881
    ["5551"], // Habiba2 5551
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
 
      
        $(".video").attr("src", "https://go.screenpal.com/player/cZfuFZVMtT8?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 2 Session 2 Revision Dynamics").css("text-align", "left");
    
        
        var button00 = document.createElement("button");

        button00.innerText = "Revision Dynamics";
        button00.style.fontSize = '20px';
        button00.style.color = '#15920a'


        button00.addEventListener("click", function() {
            $(".video").attr("src", "https://go.screenpal.com/player/cZfuFZVMtT8?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Session 2 Revision Dynamics").css("text-align", "left");
            button00.style.color = '#15920a'
            button01.style.color = 'black'
            button02.style.color = 'black'
        });


        var button01 = document.createElement("button");

        button01.innerText = "Revision Algebra";
        button01.style.fontSize = '20px';

        button01.addEventListener("click", function() {
            $(".video").attr("src", "https://go.screenpal.com/player/cZfv2qVMySo?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Session 2 Revision Algebra").css("text-align", "left");
            button01.style.color = '#15920a'
            button00.style.color = 'black'
            button02.style.color = 'black'
        });



        //var button02 = document.createElement("button");

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
        //container.appendChild(button02);
        
    
       
        

      
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


    
        $(".video").attr("src", "https://go.screenpal.com/player/cZfnFUVsQO1?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 2 Calculus Chain Rule").css("text-align", "left");
    
        
        var button14 = document.createElement("button");

        button14.innerText = "1-Chain Rule";
        button14.style.fontSize = '20px';
        button14.style.color = '#15920a';


        button14.addEventListener("click", function() {
            
           
            $(".video").attr("src", "https://go.screenpal.com/player/cZfnFUVsQO1?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Calculus Chain Rule").css("text-align", "left");
    
            button14.style.color = '#15920a';
            button15.style.color = 'black';
           
        });


        var button15 = document.createElement("button");

        button15.innerText = "2-Derivatives Of Trignomtric Functions";
        button15.style.fontSize = '20px';
        

        button15.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZff0rVsFc8?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Derivatives Of Trignomtric Functions").css("text-align", "left");
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


    
        $(".video").attr("src", "https://go.screenpal.com/player/cZeerxVKBYF?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 2 Calculus Rate Of Change").css("text-align", "left");
    
        
        var button20 = document.createElement("button");

        button20.innerText = "1-Rate Of Change";
        button20.style.fontSize = '20px';
        button20.style.color = '#15920a';


        button20.addEventListener("click", function() {
        
            $(".video").attr("src", "https://go.screenpal.com/player/cZeerxVKBYF?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Calculus Rate Of Change").css("text-align", "left");
            button20.style.color = '#15920a';
            button21.style.color = 'black';
            button22.style.color = 'black';
            button23.style.color = 'black';
        });


        var button21 = document.createElement("button");

        button21.innerText = "2-Differentiation";
        button21.style.fontSize = '20px';
        

        button21.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZeIcLV7iGq?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Calculas Differentiation").css("text-align", "left");
            button21.style.color = '#15920a';
            button20.style.color = 'black';
            button22.style.color = 'black';
            button23.style.color = 'black';
        });

       /* 
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
        var tooltipText = 'Name is Farida Ahmed , Id is <span style="color:red; cursor:pointer;" >2314</span>';
        var tooltipTextID = '2314';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       


    
        $(".video").attr("src", "https://go.screenpal.com/player/cZevqjVsVDn?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 2 Problems Lesson 1").css("text-align", "left");
    
        
        var button24 = document.createElement("button");

        button24.innerText = "1-Problems Lesson 1";
        button24.style.fontSize = '20px';
        button24.style.color = '#15920a';


        button24.addEventListener("click", function() {
        
           
        $(".video").attr("src", "https://go.screenpal.com/player/cZevqjVsVDn?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 2 Problems Lesson 1").css("text-align", "left");
            button24.style.color = '#15920a';
            button25.style.color = 'black';
            button26.style.color = 'black';
            button27.style.color = 'black';
        });


        var button25 = document.createElement("button");

        button25.innerText = "2-Problems Lesson 2";
        button25.style.fontSize = '20px';
        

        button25.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZff0BVsFnv?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Problems Lesson 2").css("text-align", "left");
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


    if (n === 10) {  // Salma Elsayed 1422

        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Salma Elsayed , Id is <span style="color:red; cursor:pointer;" >1422</span>';
        var tooltipTextID = '1422';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       


    
        $(".video").attr("src", "https://go.screenpal.com/player/cZeODfV77qZ?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Determinants").css("text-align", "left");
    
        
        var button28 = document.createElement("button");

        button28.innerText = "1-Determinants";
        button28.style.fontSize = '20px';
        button28.style.color = '#15920a';


        button28.addEventListener("click", function() {
        
           
        $(".video").attr("src", "https://go.screenpal.com/player/cZeODfV77qZ?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Determinants").css("text-align", "left");
            button28.style.color = '#15920a';
            button29.style.color = 'black';
           
        });


        var button29 = document.createElement("button");

        button29.innerText = "2-Application On Vector";
        button29.style.fontSize = '20px';
        
 
        button29.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZf0cfVM6V3?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 1 Application On Vector").css("text-align", "left");
            button29.style.color = '#15920a';
            button28.style.color = 'black';
            
        });

      
       

        var container = document.getElementById("buttonContainer");

        
        container.appendChild(button28);
        container.appendChild(button29);
      

        


    }


    if (n === 11) {  // Ahmed reda 2252

        var imageSrc = 'images/profileMan.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Ahmed reda , Id is <span style="color:red; cursor:pointer;" >2252</span>';
        var tooltipTextID = '2252';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       


    
        $(".video").attr("src", "https://go.screenpal.com/player/cZeODfV77qZ?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Determinants").css("text-align", "left");
    
        
        var button30 = document.createElement("button");

        button30.innerText = "1-Determinants";
        button30.style.fontSize = '20px';
        button30.style.color = '#15920a';


        button30.addEventListener("click", function() {
        
           
        $(".video").attr("src", "https://go.screenpal.com/player/cZeODfV77qZ?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Determinants").css("text-align", "left");
            button30.style.color = '#15920a';
            button31.style.color = 'black';
            button32.style.color = 'black';
        });


        var button31 = document.createElement("button");

        button31.innerText = "2-Trigonometric Equation";
        button31.style.fontSize = '20px';
        

        button31.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZfVb3VshoS?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 1 Solving Trigonometric Equation").css("text-align", "left");
            button31.style.color = '#15920a';
            button30.style.color = 'black';
            button32.style.color = 'black';
        });


        var button32 = document.createElement("button");

        button32.innerText = "2-Right Angle Triangle";
        button32.style.fontSize = '20px';
        

        button32.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZf6rtVsaTe?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 1 Solving Right Angle Triangle").css("text-align", "left");
            button32.style.color = '#15920a';
            button30.style.color = 'black';
            button31.style.color = 'black';
        });
        
       

        var container = document.getElementById("buttonContainer");

        
        container.appendChild(button30);
        container.appendChild(button31);
        container.appendChild(button32);

        


    }


    if (n === 12) {  //𝘼𝘽𝘿 𝘼𝙇 𝙆𝘼𝘿𝙀𝙍 4141

        var imageSrc = 'images/profileMan.png';
        var altText = 'avatar';
        var tooltipText = 'Name is 𝘼𝘽𝘿 𝘼𝙇 𝙆𝘼𝘿𝙀𝙍 , Id is <span style="color:red; cursor:pointer;" >4141</span>';
        var tooltipTextID = '4141';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       


    
        $(".video").attr("src", "https://go.screenpal.com/player/cZf6rtVsaTe?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Solving Right Angle Triangle").css("text-align", "left");
    
        
        var button33 = document.createElement("button");

        button33.innerText = "1-Senior 1 Solving Right Angle Triangle";
        button33.style.fontSize = '20px';
        button33.style.color = '#15920a';


        button33.addEventListener("click", function() {
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZf6rtVsaTe?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Solving Right Angle Triangle").css("text-align", "left");
            button33.style.color = '#15920a';
            button34.style.color = 'black';
            button35.style.color = 'black';
        });


        var button34 = document.createElement("button");

        button34.innerText = "2-Trigonometric Equation";
        button34.style.fontSize = '20px';
        

        button34.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZfVb3VshoS?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 1 Solving Trigonometric Equation").css("text-align", "left");
            button34.style.color = '#15920a';
            button33.style.color = 'black';
            button35.style.color = 'black';
        });


        var button35 = document.createElement("button");

        button35.innerText = "2-Right Angle Triangle";
        button35.style.fontSize = '20px';
        

        button35.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZf6rtVsaTe?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 1 Solving Right Angle Triangle").css("text-align", "left");
            button35.style.color = '#15920a';
            button33.style.color = 'black';
            button34.style.color = 'black';
        });
        
       

        var container = document.getElementById("buttonContainer");

       
        container.appendChild(button33);
        /*container.appendChild(button34);
        container.appendChild(button35);
        */
        


    }


    if (n === 13) {  // Mohamed 1141

        var imageSrc = 'images/profileMan.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Mohamed , Id is <span style="color:red; cursor:pointer;" >1141</span>';
        var tooltipTextID = '1141';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       


    
        $(".video").attr("src", "https://go.screenpal.com/player/cZfnFUVsQO1?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 2 Calculus Chain Rule").css("text-align", "left");
    
        
        var button36 = document.createElement("button");

        button36.innerText = "1-Chain Rule";
        button36.style.fontSize = '20px';
        button36.style.color = '#15920a';


        button36.addEventListener("click", function() {
        
           
        $(".video").attr("src", "https://go.screenpal.com/player/cZfnFUVsQO1?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 2 Calculus Chain Rule").css("text-align", "left");
            button36.style.color = '#15920a';
            button37.style.color = 'black';
            button38.style.color = 'black';
        });


        var button37 = document.createElement("button");

        button37.innerText = "2-Trignomtric Functions";
        button37.style.fontSize = '20px';
        

        button37.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZff0rVsFc8?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Derivatives Of Trignomtric Functions").css("text-align", "left");
            button37.style.color = '#15920a';
            button36.style.color = 'black';
            button38.style.color = 'black';
        });


        var button38 = document.createElement("button");

        button38.innerText = "2-Problems Lesson 1";
        button38.style.fontSize = '20px';
        

        button38.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZevqjVsVDn?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Problems Lesson 1").css("text-align", "left");
            button38.style.color = '#15920a';
            button36.style.color = 'black';
            button37.style.color = 'black';
        });
        
       

        var container = document.getElementById("buttonContainer");

        
        container.appendChild(button36);
        container.appendChild(button37);
        container.appendChild(button38);

        


    }

    if (n === 14) {  // Mariam Ahmed 1242

        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Mariam Ahmed , Id is <span style="color:red; cursor:pointer;" >1242</span>';
        var tooltipTextID = '1242';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       

        $(".video").attr("src", "https://go.screenpal.com/player/cZf0FwVMIDc?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Equation Of Straight Line").css("text-align", "left");
    
        
        var button39 = document.createElement("button");

        button39.innerText = "1-Equation Of Straight Line";
        button39.style.fontSize = '20px';
        button39.style.color = '#15920a';


        button39.addEventListener("click", function() {
        
            $(".video").attr("src", "https://go.screenpal.com/player/cZf0FwVMIDc?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 1 Equation Of Straight Line").css("text-align", "left");
            button39.style.color = '#15920a';
            button40.style.color = 'black';
            button41.style.color = 'black';
        });


        /*var button37 = document.createElement("button");

        button37.innerText = "2-Trignomtric Functions";
        button37.style.fontSize = '20px';
        

        button37.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZff0rVsFc8?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Derivatives Of Trignomtric Functions").css("text-align", "left");
            button37.style.color = '#15920a';
            button36.style.color = 'black';
            button38.style.color = 'black';
        });


        var button38 = document.createElement("button");

        button38.innerText = "2-Problems Lesson 1";
        button38.style.fontSize = '20px';
        

        button38.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZevqjVsVDn?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Problems Lesson 1").css("text-align", "left");
            button38.style.color = '#15920a';
            button36.style.color = 'black';
            button37.style.color = 'black';
        });
        
       */ 

        var container = document.getElementById("buttonContainer");

       
        container.appendChild(button39);
        //container.appendChild(button37);
        //container.appendChild(button38);

        


    }

    if (n === 15) {  // Malak Wahed 1212

        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Malak Wahed , Id is <span style="color:red; cursor:pointer;" >1212</span>';
        var tooltipTextID = '1212';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       

        $(".video").attr("src", "https://go.screenpal.com/player/cZhnr6VMp9u?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Revision Geometry").css("text-align", "left");
    
        
        var button39 = document.createElement("button");

        button39.innerText = "1-Equation Of Straight Line";
        button39.style.fontSize = '20px';
        button39.style.color = '#15920a';


        button39.addEventListener("click", function() {
        
          
        $(".video").attr("src", "https://go.screenpal.com/player/cZhnr6VMp9u?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Revision Geometry").css("text-align", "left");
            button39.style.color = '#15920a';
            button40.style.color = 'black';
        });


        /*


        var button40 = document.createElement("button");

        button40.innerText = "2-Problems Lesson 1";
        button40.style.fontSize = '20px';
        

        button40.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZevqjVsVDn?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Problems Lesson 1").css("text-align", "left");
            button38.style.color = '#15920a';
            button36.style.color = 'black';
            button37.style.color = 'black';
        });
        
       */ 

        var container = document.getElementById("buttonContainer");

       
        container.appendChild(button39);
        //container.appendChild(button40);
        //container.appendChild(button41);

        


    }


    if (n === 16) {  // Jana Eslam 2222

        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Jana Eslam , Id is <span style="color:red; cursor:pointer;" >2222</span>';
        var tooltipTextID = '2222';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       

        $(".video").attr("src", "https://go.screenpal.com/player/cZf0FwVMIDc?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Equation Of Straight Line").css("text-align", "left");
    
        
        var button39 = document.createElement("button");

        button39.innerText = "1-Equation Of Straight Line";
        button39.style.fontSize = '20px';
        button39.style.color = '#15920a';


        button39.addEventListener("click", function() {
        
            $(".video").attr("src", "https://go.screenpal.com/player/cZf0FwVMIDc?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 1 Equation Of Straight Line").css("text-align", "left");
            button39.style.color = '#15920a';
            button40.style.color = 'black';
        });


        /*


        var button40 = document.createElement("button");

        button40.innerText = "2-Problems Lesson 1";
        button40.style.fontSize = '20px';
        

        button40.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZevqjVsVDn?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Problems Lesson 1").css("text-align", "left");
            button38.style.color = '#15920a';
            button36.style.color = 'black';
            button37.style.color = 'black';
        });
        
       */ 

        var container = document.getElementById("buttonContainer");

       
        container.appendChild(button39);
        //container.appendChild(button40);
        //container.appendChild(button41);

        


    }

    if (n === 17) {  // RATOJA 2112
        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is RATOJA, Id is <span style="color:red; cursor:pointer;" >2112</span>';
        var tooltipTextID = '2112';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       

        $(".video").attr("src", "https://go.screenpal.com/player/cZfv2qVMySo?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 2 Session 2 Revision Algebra").css("text-align", "left");
    
        
        var button39 = document.createElement("button");

        button39.innerText = "1-Revision Algebra";
        button39.style.fontSize = '20px';
        button39.style.color = '#15920a';


        button39.addEventListener("click", function() {
        
            $(".video").attr("src", "https://go.screenpal.com/player/cZf0FwVMIDc?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 1 Equation Of Straight Line").css("text-align", "left");
            button39.style.color = '#15920a';
            button40.style.color = 'black';
        });


        /*


        var button40 = document.createElement("button");

        button40.innerText = "2-Problems Lesson 1";
        button40.style.fontSize = '20px';
        

        button40.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZevqjVsVDn?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Problems Lesson 1").css("text-align", "left");
            button38.style.color = '#15920a';
            button36.style.color = 'black';
            button37.style.color = 'black';
        });
        
       */ 

        var container = document.getElementById("buttonContainer");

       
        container.appendChild(button39);
        //container.appendChild(button40);
        //container.appendChild(button41);

        


    }


    if (n === 18) {  // 5520
        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Unknown, Id is <span style="color:red; cursor:pointer;" >5520</span>';
        var tooltipTextID = '5520';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       

        $(".video").attr("src", "https://go.screenpal.com/player/cZfOFuVMZAj?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Lesson 6 And 7 Circular Segment").css("text-align", "left");
    
        
        var button42 = document.createElement("button");

        button42.innerText = "1-Circular Segment";
        button42.style.fontSize = '20px';
        button42.style.color = '#15920a';


        button42.addEventListener("click", function() {
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZfOFuVMZAj?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Lesson 6 And 7 Circular Segment").css("text-align", "left");
            button42.style.color = '#15920a';
            button43.style.color = 'black';
        });


        /*


        var button40 = document.createElement("button");

        button40.innerText = "2-Problems Lesson 1";
        button40.style.fontSize = '20px';
        

        button40.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZevqjVsVDn?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Problems Lesson 1").css("text-align", "left");
            button38.style.color = '#15920a';
            button36.style.color = 'black';
            button37.style.color = 'black';
        });
        
       */ 

        var container = document.getElementById("buttonContainer");

       
        container.appendChild(button39);
        //container.appendChild(button40);
        //container.appendChild(button41);

        


    }



    if (n === 19) {  // Sama Zayed 5110
        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Sama Zayed, Id is <span style="color:red; cursor:pointer;" >5110</span>';
        var tooltipTextID = '5110';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       

        $(".video").attr("src", "https://go.screenpal.com/player/cZhnr6VMp9u?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Revision Geometry").css("text-align", "left");
    
        
        var button43 = document.createElement("button");

        button43.innerText = "1-Revision Geometry";
        button43.style.fontSize = '20px';
        button43.style.color = '#15920a';


        button43.addEventListener("click", function() {
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZhnr6VMp9u?width=100%&height=100%&ff=1&title=0");
         $("h1[title]").text("Senior 1 Revision Geometry").css("text-align", "left");    
            button43.style.color = '#15920a';
            button44.style.color = 'black';
        });


     


        var button44 = document.createElement("button");

        button44.innerText = "2-Trig Revision";
        button44.style.fontSize = '20px';
        

        button44.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZhhlsVMHZx?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 1 Trig Revision").css("text-align", "left");
            button44.style.color = '#15920a';
            button43.style.color = 'black';
        });
        
      

        var container = document.getElementById("buttonContainer");

       
        container.appendChild(button43);
        container.appendChild(button44);
        //container.appendChild(button41);

        


    }



    if (n === 20) {  // MohameD 1112
        var imageSrc = 'images/profileMan.png';
        var altText = 'avatar';
        var tooltipText = 'Name is MohameD, Id is <span style="color:red; cursor:pointer;" >1112</span>';
        var tooltipTextID = '1112';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       

        $(".video").attr("src", "https://go.screenpal.com/player/cZhnr6VMp9u?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Revision Geometry").css("text-align", "left");
    
        
        var button44 = document.createElement("button");

        button44.innerText = "1-Revision Geometry";
        button44.style.fontSize = '20px';
        button44.style.color = '#15920a';


        button44.addEventListener("click", function() {
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZhnr6VMp9u?width=100%&height=100%&ff=1&title=0");
         $("h1[title]").text("Senior 1 Revision Geometry").css("text-align", "left");    
            button44.style.color = '#15920a';
            button45.style.color = 'black';
        });


        /*


        var button40 = document.createElement("button");

        button40.innerText = "2-Problems Lesson 1";
        button40.style.fontSize = '20px';
        

        button40.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZevqjVsVDn?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Problems Lesson 1").css("text-align", "left");
            button38.style.color = '#15920a';
            button36.style.color = 'black';
            button37.style.color = 'black';
        });
        
       */ 

        var container = document.getElementById("buttonContainer");

       
        container.appendChild(button44);
        //container.appendChild(button40);
        //container.appendChild(button41);

        


    }


    if (n === 21) {  // Malak 5353
        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Malak, Id is <span style="color:red; cursor:pointer;" >5353</span>';
        var tooltipTextID = '5353';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       

        $(".video").attr("src", "https://go.screenpal.com/player/cZfv2qVMySo?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 2 Session 2 Revision Algebra").css("text-align", "left");
    
        
        var button45 = document.createElement("button");

        button45.innerText = "1-Revision Algebra";
        button45.style.fontSize = '20px';
        button45.style.color = '#15920a';


        button45.addEventListener("click", function() {
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZfv2qVMySo?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 2 Session 2 Revision Algebra").css("text-align", "left");
           
            button45.style.color = '#15920a';
            button46.style.color = 'black';
        });


        


        var button46 = document.createElement("button");
        button46.innerText = "2-Revision Mechanics";
        button46.style.fontSize = '20px';
        

        button46.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZfuFZVMtT8?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Session 2 Revision Mechanics").css("text-align", "left");
            button46.style.color = '#15920a';
            button45.style.color = 'black';
        });
        
    

        var container = document.getElementById("buttonContainer");

       
        container.appendChild(button45);
        container.appendChild(button46);
        //container.appendChild(button41);

        


    }


    


    if (n === 22) { // Mahmoud 5153
        var imageSrc = 'images/profileMan.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Mahmoud, Id is <span style="color:red; cursor:pointer;" >5153</span>';
        var tooltipTextID = '5153';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       
        $(".video").attr("src", "https://go.screenpal.com/player/cZhnr6VMp9u?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Revision Geometry").css("text-align", "left");
    
        
        var button47 = document.createElement("button");

        button47.innerText = "1-Revision Geometry";
        button47.style.fontSize = '20px';
        button47.style.color = '#15920a';


        button47.addEventListener("click", function() {
        
            $(".video").attr("src", "https://go.screenpal.com/player/cZhnr6VMp9u?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 1 Revision Geometry").css("text-align", "left");
           
            button47.style.color = '#15920a';
            button48.style.color = 'black';
        });


        
        /*

        var button46 = document.createElement("button");
        button46.innerText = "2-Revision Mechanics";
        button46.style.fontSize = '20px';
        

        button46.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZfuFZVMtT8?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Session 2 Revision Mechanics").css("text-align", "left");
            button46.style.color = '#15920a';
            button45.style.color = 'black';
        });
        
    */

        var container = document.getElementById("buttonContainer");

       
        container.appendChild(button47);
        //container.appendChild(button46);
        //container.appendChild(button41);

        


    }

    if (n === 23) {  // Jana Hamzawy  6281
        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Jana Hamzawy, Id is <span style="color:red; cursor:pointer;" >6281</span>';
        var tooltipTextID = '6281';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       

        $(".video").attr("src", "https://go.screenpal.com/player/cZfv2qVMySo?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 2 Session 2 Revision Algebra").css("text-align", "left");
    
        
        var button48 = document.createElement("button");

        button48.innerText = "1-Revision Algebra";
        button48.style.fontSize = '20px';
        button48.style.color = '#15920a';


        button48.addEventListener("click", function() {
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZfv2qVMySo?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 2 Session 2 Revision Algebra").css("text-align", "left");
           
            button48.style.color = '#15920a';
            button46.style.color = 'black';
        });


        


        var button49 = document.createElement("button");
        button49.innerText = "2-Revision Mechanics";
        button49.style.fontSize = '20px';
        

        button49.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZfuFZVMtT8?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Session 2 Revision Mechanics").css("text-align", "left");
            button49.style.color = '#15920a';
            button48.style.color = 'black';
        });
        
    

        var container = document.getElementById("buttonContainer");

       
        container.appendChild(button48);
        container.appendChild(button49);
        //container.appendChild(button41);

        


    }


    if (n === 24) { //abdelrahman.ibrahim  6182
        var imageSrc = 'images/profileMan.png';
        var altText = 'avatar';
        var tooltipText = 'Name is abdelrahman.ibrahim, Id is <span style="color:red; cursor:pointer;" >6182</span>';
        var tooltipTextID = '6182';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       

       
        $(".video").attr("src", "https://go.screenpal.com/player/cZhnr6VMp9u?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Revision Geometry").css("text-align", "left");
    
    
        
        var button50 = document.createElement("button");

        button50.innerText = "1-Revision Geometry";
        button50.style.fontSize = '20px';
        button50.style.color = '#15920a';


        button50.addEventListener("click", function() {
        
       
            $(".video").attr("src", "https://go.screenpal.com/player/cZhnr6VMp9u?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 1 Revision Geometry").css("text-align", "left");
        
           
            button50.style.color = '#15920a';
            button51.style.color = 'black';
        });


        

    

        var container = document.getElementById("buttonContainer");

       
        container.appendChild(button50);
        //container.appendChild(button49);
        //container.appendChild(button41);

        


    }

    if (n === 25) { // Unknown 6222
        var imageSrc = 'images/profileMan.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Unknown, Id is <span style="color:red; cursor:pointer;" >6222</span>';
        var tooltipTextID = '6222';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       
        $(".video").attr("src", "https://go.screenpal.com/player/cZhnr6VMp9u?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Revision Geometry").css("text-align", "left");
    
        
        var button52 = document.createElement("button");

        button52.innerText = "1-Revision Geometry";
        button52.style.fontSize = '20px';
        button52.style.color = '#15920a';


        button52.addEventListener("click", function() {
        
            $(".video").attr("src", "https://go.screenpal.com/player/cZhnr6VMp9u?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 1 Revision Geometry").css("text-align", "left");
           
            button52.style.color = '#15920a';
            button53.style.color = 'black';
        });


        
        /*

        var button46 = document.createElement("button");
        button46.innerText = "2-Revision Mechanics";
        button46.style.fontSize = '20px';
        

        button46.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZfuFZVMtT8?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Session 2 Revision Mechanics").css("text-align", "left");
            button46.style.color = '#15920a';
            button45.style.color = 'black';
        });
        
    */

        var container = document.getElementById("buttonContainer");

       
        container.appendChild(button52);
        //container.appendChild(button46);
        //container.appendChild(button41);

        


    }


    if (n === 26) {  // Unknown 1222
        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Unknown, Id is <span style="color:red; cursor:pointer;" >1222</span>';
        var tooltipTextID = '1222';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       
        $(".video").attr("src", "https://go.screenpal.com/player/cZhnr6VMp9u?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Revision Geometry").css("text-align", "left");
    
        
        var button54 = document.createElement("button");

        button54.innerText = "1-Revision Geometry";
        button54.style.fontSize = '20px';
        button54.style.color = '#15920a';


        button54.addEventListener("click", function() {
        
            $(".video").attr("src", "https://go.screenpal.com/player/cZhnr6VMp9u?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 1 Revision Geometry").css("text-align", "left");
           
            button54.style.color = '#15920a';
            button55.style.color = 'black';
        });


        
        /*

        var button46 = document.createElement("button");
        button46.innerText = "2-Revision Mechanics";
        button46.style.fontSize = '20px';
        

        button46.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZfuFZVMtT8?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Session 2 Revision Mechanics").css("text-align", "left");
            button46.style.color = '#15920a';
            button45.style.color = 'black';
        });
        
    */

        var container = document.getElementById("buttonContainer");

       
        container.appendChild(button54);
        //container.appendChild(button46);
        //container.appendChild(button41);

        


    }


    if (n === 27) {  // Mariam Diab 7222
        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Mariam Diab, Id is <span style="color:red; cursor:pointer;" >7222</span>';
        var tooltipTextID = '7222';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       
        $(".video").attr("src", "https://go.screenpal.com/player/cZhnr6VMp9u?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Revision Geometry").css("text-align", "left");
    
        
        var button154 = document.createElement("button");

        button154.innerText = "1-Revision Geometry";
        button154.style.fontSize = '20px';
        button154.style.color = '#15920a';


        button154.addEventListener("click", function() {
        
            $(".video").attr("src", "https://go.screenpal.com/player/cZhnr6VMp9u?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 1 Revision Geometry").css("text-align", "left");
           
            button154.style.color = '#15920a';
            button155.style.color = 'black';
        });


        
        /*

        var button46 = document.createElement("button");
        button46.innerText = "2-Revision Mechanics";
        button46.style.fontSize = '20px';
        

        button46.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZfuFZVMtT8?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Session 2 Revision Mechanics").css("text-align", "left");
            button46.style.color = '#15920a';
            button45.style.color = 'black';
        });
        
    */

        var container = document.getElementById("buttonContainer");

       
        container.appendChild(button154);
        //container.appendChild(button46);
        //container.appendChild(button41);

        


    }




    if (n === 28) { // yossefelzanaty 7727
        var imageSrc = 'images/profileMan.png';
        var altText = 'avatar';
        var tooltipText = 'Name is yossefelzanaty, Id is <span style="color:red; cursor:pointer;" >7727</span>';
        var tooltipTextID = '7727';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       
        $(".video").attr("src", "https://go.screenpal.com/player/cZfuFZVMtT8?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 2 Session 2 Revision Mechanics").css("text-align", "left");
    
        
        var button58 = document.createElement("button");

        button58.innerText = "1-Revision Dynamics";
        button58.style.fontSize = '20px';
        button58.style.color = '#15920a';


        button58.addEventListener("click", function() {
        
          
          
         $(".video").attr("src", "https://go.screenpal.com/player/cZfuFZVMtT8?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 2 Session 2 Revision Mechanics").css("text-align", "left");
    
           
            button58.style.color = '#15920a';
            button59.style.color = 'black';
        });


        
      

        var button59 = document.createElement("button");
        button59.innerText = "2-Revision Algebra";
        button59.style.fontSize = '20px';
        

        button59.addEventListener("click", function() {
            $(".video").attr("src", "https://go.screenpal.com/player/cZfv2qVMySo?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Session 2 Revision Algebra").css("text-align", "left");
            button59.style.color = '#15920a';
            button58.style.color = 'black';
        });
        
 

        var container = document.getElementById("buttonContainer");

       
        container.appendChild(button58);
        container.appendChild(button59);
        //container.appendChild(button41);

        


    }


   


    if (n === 29) { // Nada Aiad 7777
        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Nada Aiad, Id is <span style="color:red; cursor:pointer;" >7777</span>';
        var tooltipTextID = '7777';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       
        $(".video").attr("src", "https://go.screenpal.com/player/cZhnr6VMp9u?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Revision Geometry").css("text-align", "left");
    
        
        var button60 = document.createElement("button");

        button60.innerText = "1-Revision Geometry";
        button60.style.fontSize = '20px';
        button60.style.color = '#15920a';


        button60.addEventListener("click", function() {
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZhnr6VMp9u?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Revision Geometry").css("text-align", "left");
    
           
            button60.style.color = '#15920a';
            button61.style.color = 'black';
        });


        
        /*

        var button46 = document.createElement("button");
        button46.innerText = "2-Revision Mechanics";
        button46.style.fontSize = '20px';
        

        button46.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZfuFZVMtT8?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Session 2 Revision Mechanics").css("text-align", "left");
            button46.style.color = '#15920a';
            button45.style.color = 'black';
        });
        
    */

        var container = document.getElementById("buttonContainer");

       
        container.appendChild(button60);
        //container.appendChild(button46);
        //container.appendChild(button41);

        


    }


    if (n === 30) { // Rodina 7373
        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Rodina, Id is <span style="color:red; cursor:pointer;" >7373</span>';
        var tooltipTextID = '7373';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       
        $(".video").attr("src", "https://go.screenpal.com/player/cZfv2qVMySo?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 2 Session 2 Revision Algebra").css("text-align", "left");
    
        
        var button62 = document.createElement("button");

        button62.innerText = "1-Revision Algebra";
        button62.style.fontSize = '20px';
        button62.style.color = '#15920a';


        button62.addEventListener("click", function() {
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZfv2qVMySo?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 2 Session 2 Revision Algebra").css("text-align", "left");
           
            button62.style.color = '#15920a';
            button63.style.color = 'black';
        });


        
   

        var button63 = document.createElement("button");
        button63.innerText = "2-Revision Mechanics";
        button63.style.fontSize = '20px';
        

        button63.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZfuFZVMtT8?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Session 2 Revision Mechanics").css("text-align", "left");
            button63.style.color = '#15920a';
            button62.style.color = 'black';
        });
        


        var container = document.getElementById("buttonContainer");

       
        container.appendChild(button62);
        container.appendChild(button63);
        //container.appendChild(button41);

    }

    if (n === 31) {// Medo 7773
        var imageSrc = 'images/profileMan.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Medo, Id is <span style="color:red; cursor:pointer;" >7773</span>';
        var tooltipTextID = '7773';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       
        $(".video").attr("src", "https://go.screenpal.com/player/cZhnr6VMp9u?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Revision Geometry").css("text-align", "left");
    
        
        var button64 = document.createElement("button");

        button64.innerText = "1-Revision Geometry";
        button64.style.fontSize = '20px';
        button64.style.color = '#15920a';


        button64.addEventListener("click", function() {
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZhnr6VMp9u?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Revision Geometry").css("text-align", "left");
           
            button64.style.color = '#15920a';
            button65.style.color = 'black';
        });


        
   
/*
        var button63 = document.createElement("button");
        button63.innerText = "2-Revision Mechanics";
        button63.style.fontSize = '20px';
        

        button63.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZfuFZVMtT8?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Session 2 Revision Mechanics").css("text-align", "left");
            button63.style.color = '#15920a';
            button62.style.color = 'black';
        });
        

*/
        var container = document.getElementById("buttonContainer");

       
        container.appendChild(button64);
        //container.appendChild(button63);
        //container.appendChild(button41);

    }



    if (n === 32) { // Amira 2552
        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Amira, Id is <span style="color:red; cursor:pointer;" >2552</span>';
        var tooltipTextID = '2552';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       
        $(".video").attr("src", "https://go.screenpal.com/player/cZhnr6VMp9u?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Revision Geometry").css("text-align", "left");
    
        
        var button66 = document.createElement("button");

        button66.innerText = "1-Revision Geometry";
        button66.style.fontSize = '20px';
        button66.style.color = '#15920a';


        button66.addEventListener("click", function() {
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZhnr6VMp9u?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Revision Geometry").css("text-align", "left");
           
            button66.style.color = '#15920a';
            button67.style.color = 'black';
        });


        
   

        var button67 = document.createElement("button");
        button67.innerText = "2-Revision Trig";
        button67.style.fontSize = '20px';
        

        button67.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZhhlsVMHZx?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 1 Trig Revision").css("text-align", "left");
            button67.style.color = '#15920a';
            button66.style.color = 'black';
        });
        


        var container = document.getElementById("buttonContainer");

       
        container.appendChild(button66);
        container.appendChild(button67);
        //container.appendChild(button41);

    }

    if (n === 33) { // Rodina Hossam 2182
        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Rodina Hossam, Id is <span style="color:red; cursor:pointer;" >2182</span>';
        var tooltipTextID = '2182';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       
        $(".video").attr("src", "https://go.screenpal.com/player/cZhnr6VMp9u?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Revision Geometry").css("text-align", "left");
    
        
        var button68 = document.createElement("button");

        button68.innerText = "1-Revision Geometry";
        button68.style.fontSize = '20px';
        button68.style.color = '#15920a';


        button68.addEventListener("click", function() {
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZhnr6VMp9u?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Revision Geometry").css("text-align", "left");
           
            button68.style.color = '#15920a';
            button69.style.color = 'black';
        });


        
   

        var button69 = document.createElement("button");
        button69.innerText = "2-Revision Trig";
        button69.style.fontSize = '20px';
        

        button69.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZhhlsVMHZx?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 1 Trig Revision").css("text-align", "left");
            button69.style.color = '#15920a';
            button68.style.color = 'black';
        });
        


        var container = document.getElementById("buttonContainer");

       
        container.appendChild(button68);
        container.appendChild(button69);
        //container.appendChild(button41);

    }


    if (n === 34) { // Adam ahmed Zaki 1181
        var imageSrc = 'images/profileMan.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Adam ahmed, Id is <span style="color:red; cursor:pointer;" >1181</span>';
        var tooltipTextID = '1181';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       
        $(".video").attr("src", "https://go.screenpal.com/player/cZhnr6VMp9u?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Revision Geometry").css("text-align", "left");
    
        
        var button70 = document.createElement("button");

        button70.innerText = "1-Revision Geometry";
        button70.style.fontSize = '20px';
        button70.style.color = '#15920a';


        button70.addEventListener("click", function() {
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZhnr6VMp9u?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Revision Geometry").css("text-align", "left");
           
            button70.style.color = '#15920a';
            button71.style.color = 'black';
        });


        
   

        var button71 = document.createElement("button");
        button71.innerText = "2-Revision Trig";
        button71.style.fontSize = '20px';
        

        button71.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZhhlsVMHZx?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 1 Trig Revision").css("text-align", "left");
            button71.style.color = '#15920a';
            button70.style.color = 'black';
        });
        


        var container = document.getElementById("buttonContainer");

       
        container.appendChild(button70);
        container.appendChild(button71);
        //container.appendChild(button41);

    }


    if (n === 35) { // 𝑺𝒂𝒎𝒂𝒔𝒆𝒎𝒐𝒐𝒐 2221
        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is 𝑺𝒂𝒎𝒂𝒔𝒆𝒎𝒐𝒐𝒐, Id is <span style="color:red; cursor:pointer;" >2221</span>';
        var tooltipTextID = '2221';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       
        $(".video").attr("src", "https://go.screenpal.com/player/cZhnr6VMp9u?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Revision Geometry").css("text-align", "left");
    
        
        var button72 = document.createElement("button");

        button72.innerText = "1-Revision Geometry";
        button72.style.fontSize = '20px';
        button72.style.color = '#15920a';


        button72.addEventListener("click", function() {
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZhnr6VMp9u?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Revision Geometry").css("text-align", "left");
           
            button72.style.color = '#15920a';
            button73.style.color = 'black';
        });


        
   
        /*
        var button71 = document.createElement("button");
        button71.innerText = "2-Revision Trig";
        button71.style.fontSize = '20px';
        

        button71.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZhhlsVMHZx?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 1 Trig Revision").css("text-align", "left");
            button71.style.color = '#15920a';
            button70.style.color = 'black';
        });
        
*/

        var container = document.getElementById("buttonContainer");

       
        container.appendChild(button72);
       // container.appendChild(button71);
        //container.appendChild(button41);

    }


    if (n === 36) { // Ibrahim Ahmed 3323
        var imageSrc = 'images/profileMan.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Ibrahim Ahmed, Id is <span style="color:red; cursor:pointer;" >3323</span>';
        var tooltipTextID = '3323';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       
        $(".video").attr("src", "https://go.screenpal.com/player/cZhnr6VMp9u?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Revision Geometry").css("text-align", "left");
    
        
        var button74 = document.createElement("button");

        button74.innerText = "1-Revision Geometry";
        button74.style.fontSize = '20px';
        button74.style.color = '#15920a';


        button74.addEventListener("click", function() {
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZhnr6VMp9u?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Revision Geometry").css("text-align", "left");
           
            button74.style.color = '#15920a';
            button75.style.color = 'black';
        });


        
   

        var button75 = document.createElement("button");
        button75.innerText = "2-Revision Trig";
        button75.style.fontSize = '20px';
        

        button75.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZhhlsVMHZx?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 1 Trig Revision").css("text-align", "left");
            button75.style.color = '#15920a';
            button74.style.color = 'black';
        });
        


        var container = document.getElementById("buttonContainer");

       
        container.appendChild(button74);
        container.appendChild(button75);
        //container.appendChild(button41);

    }

    if (n === 37) { // Hamza 3321
        var imageSrc = 'images/profileMan.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Hamza, Id is <span style="color:red; cursor:pointer;" >3321</span>';
        var tooltipTextID = '3321';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       
        $(".video").attr("src", "https://go.screenpal.com/player/cZhnr6VMp9u?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Revision Geometry").css("text-align", "left");
    
        
        var button76 = document.createElement("button");

        button76.innerText = "1-Revision Geometry";
        button76.style.fontSize = '20px';
        button76.style.color = '#15920a';


        button76.addEventListener("click", function() {
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZhnr6VMp9u?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Revision Geometry").css("text-align", "left");
           
            button76.style.color = '#15920a';
            button77.style.color = 'black';
        });


        
   

        var button77 = document.createElement("button");
        button77.innerText = "2-Revision Trig";
        button77.style.fontSize = '20px';
        

        button77.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZhhlsVMHZx?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 1 Trig Revision").css("text-align", "left");
            button77.style.color = '#15920a';
            button76.style.color = 'black';
        });
        


        var container = document.getElementById("buttonContainer");

       
        container.appendChild(button76);
        container.appendChild(button77);
        //container.appendChild(button41);

    }


    if (n === 38) { // Asraa 5881
        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Asraa, Id is <span style="color:red; cursor:pointer;" >5881</span>';
        var tooltipTextID = '5881';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       
        $(".video").attr("src", "https://go.screenpal.com/player/cZfv2qVMySo?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 2 Session 2 Revision Algebra").css("text-align", "left");
    
        
        var button78 = document.createElement("button");

        button78.innerText = "1-Revision Algebra";
        button78.style.fontSize = '20px';
        button78.style.color = '#15920a';


        button78.addEventListener("click", function() {
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZfv2qVMySo?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 2 Session 2 Revision Algebra").css("text-align", "left");
           
            button78.style.color = '#15920a';
            button79.style.color = 'black';
        });


        
   

        var button79 = document.createElement("button");
        button79.innerText = "2-Revision Dynamics";
        button79.style.fontSize = '20px';
        

        button79.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZfuFZVMtT8?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 2 Session 2 Revision Dynamics").css("text-align", "left");
            button79.style.color = '#15920a';
            button78.style.color = 'black';
        });
        


        var container = document.getElementById("buttonContainer");

       
        container.appendChild(button78);
        container.appendChild(button79);
        //container.appendChild(button41);

    }
        

    if (n === 39) {// Habiba2 5551
        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Habiba, Id is <span style="color:red; cursor:pointer;" >5551</span>';
        var tooltipTextID = '5551';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       
        $(".video").attr("src", "https://go.screenpal.com/player/cZhhlsVMHZx?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Trig Revision").css("text-align", "left");

        var button80 = document.createElement("button");
        button80.innerText = "2-Revision Trig";
        button80.style.color = '#15920a';
        button80.style.fontSize = '20px';
        

        button80.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZhhlsVMHZx?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 1 Trig Revision").css("text-align", "left");
            button80.style.color = '#15920a';
            button81.style.color = 'black';
        });


        var button81 = document.createElement("button");
        button81.innerText = "2-Revision Geometry";
        button81.style.fontSize = '20px';
        

        button81.addEventListener("click", function() {
            
            $(".video").attr("src", "https://go.screenpal.com/player/cZhnr6VMp9u?width=100%&height=100%&ff=1&title=0");
            $("h1[title]").text("Senior 1 Revision Geometry").css("text-align", "left");
            button81.style.color = '#15920a';
            button80.style.color = 'black';
        });
        


        var container = document.getElementById("buttonContainer");

       
        container.appendChild(button80);
        container.appendChild(button81);
        //container.appendChild(button41);

    }
}
