const numbers = [
    ["5547"],  // Samir Yasser
    ["1973"],  // Shahd Mansour
    ["4457"],  // Fares waleed
    ["5674"],   // Aya Medhat 
    ["7893"],  // Farah Hassan
    ["6647"],  // Malak Yousryy
    ["1515"],  // Malak momen
    ["2054"], // Jana Essam
    ["1150"], // remas
    ["2252"],   // Ahmed reda
    ["2314"],   // Fareda hethm 
    ["2771"],   // Roaia Elsafi 
    ["4441"],   // Jana Mahmoud 
    ["3214"],   //  Salma Ashraf
    ["4567"], // Gana Atef 
    ["5535"], // Mariem Mohamed
    ["5321"], // Kareem
];

var tries = [];



function myFunction() {
    var x = document.getElementById("myInput");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }


  function togglePasswordVisibility() {
    var passwordInput = document.getElementById("passwordInput");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}



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

    switchPages(2,3);

    setTimeout(() => {
                
        $("#video").toggle(500, "swing");
    }, 500);
}

function pickVideo(n) { // Samir Yasser 5547
        

        if (n == 0) {

            var imageSrc = 'images/profile.png';
            var altText = 'avatar';
            var tooltipText = 'Name is Samir , Id is <span style="color:red; cursor:pointer;" >5547</span>';
            var tooltipTextID = '5547';
            addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);


            $(".video").attr("src", "https://iframe.mediadelivery.net/embed/224107/761689b2-a7f4-4aa0-a933-f2bf46829f63?autoplay=false&loop=false&muted=false&preload=true&responsive=true")
            $(".video").attr("controlsList", "nodownload");
            $("h1[title]").text("Senior 1 Math Trignometric Identities").css("text-align", "left");


            var count = localStorage.getItem('viewCount0');

            if (count === null) {
                count = 0;
            }


            
           
            
            
            
            var watchDiv = document.querySelector('.watch');

            var h3Element = document.createElement('h3');

           
            h3Element.textContent = 'مشاهدات : ' + count;
            h3Element.style.textAlign = 'right';

            var buttonContainer = document.getElementById('buttonContainer');
            buttonContainer.appendChild(h3Element);

            count++;

           
            h3Element.textContent = 'مشاهدات : ' + count;


            if (count === 1) {
                alert("تنبيه: لديك مشاهدتين فقط ");

            } else if (count === 2) {
                alert("تنبيه: لديك مشاهدة واحدة فقط");

            }
               

            

            if (count >= 3) {
                
                document.getElementById('error').play();
                alert("لقد انتهت المشاهدات عندك")
                h3Element.textContent = 'تم انتهاء عدد المشاهدات';

            }

           

            localStorage.setItem('viewCount0', count);
            localStorage.setItem('viewCount0', 0);
            
           

           
            

           

            if (count >= 3) {
                
                
                $(".video").attr("src", "https://media.discordapp.net/attachments/1142201401540345986/1214812434242736158/Untitled-1.png?ex=65fa793e&is=65e8043e&hm=cdff451e5cd694d0dc6b0dc3d0e38c736df4e01dc7873656c234372aeebef0ac&=&format=webp&quality=lossless&width=980&height=560");
            }
            
        }
   
        $("button#myButton2").click(() => {  // فديو الواجب
           const result = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");

            if (result) {
                $(".video").attr("src", "https://www.youtube.com/embed/Kkp8-qHWWno?start=1370");
                $("#myButton2").css("color", "#15920a");
                $("#myButton").css("color", "black");
                $("#myButton3").css("color", "black");
                $("#myButton4").css("color", "black");
            } else {
                none;
            }
           
        });



        $("button#myButton4").click(() => {  // الامتحان
            //const result = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");

            if (result) {
                $(".video").attr("src", "https://screenpal.com/player/cZee3aVKBOm?width=100%&height=100%&ff=1&title=0");
                $("#myButton4").css("color", "#15920a");
                $("#myButton").css("color", "black");
                $("#myButton2").css("color", "black");
                $("#myButton3").css("color", "black");
            } else {
                none;
            }
       
        });

   
    if (n == 1) {  // Shahd Mansour 1973

        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Shahd , Id is <span style="color:red; cursor:pointer;" >1973</span>';
        var tooltipTextID = '1973';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);


       
        $(".video").attr("src", "https://go.screenpal.com/player/cZeODfV77qZ?width=100%&height=100%&ff=1&title=0")
        $(".video").attr("controlsList", "nodownload");
        $("h1[title]").text("Senior 1 Determinants").css("text-align", "left");


        var count1 = localStorage.getItem('viewCount1');

        if (count1 === null) {
            count1 = 0;
        }

       
        
        
        var watchDiv = document.querySelector('.watch');

        var h3Element1 = document.createElement('h3');
        
    
       
        h3Element1.textContent = 'مشاهدات : ' + count1;
        h3Element1.style.textAlign = 'right';

        var buttonContainer = document.getElementById('buttonContainer');
        buttonContainer.appendChild(h3Element1);
        
       

        count1++;

       
        h3Element1.textContent = 'مشاهدات : ' + count1;


        if (count1 === 1) {
            alert("تنبيه: لديك مشاهدتين فقط ");

        } else if (count1 === 2) {
            alert("تنبيه: لديك مشاهدة واحدة فقط");

        }
           


        if (count1 >= 3) {
            document.getElementById('error').play();
            alert("لقد انتهت المشاهدات عندك")
            h3Element1.textContent = 'تم انتهاء عدد المشاهدات';

        }

        
        localStorage.setItem('viewCount1', count1);
       
        
        
        
        
        
       

        if (count1 >= 3) {
            
            
            $(".video").attr("src", "https://media.discordapp.net/attachments/1142201401540345986/1214812434242736158/Untitled-1.png?ex=65fa793e&is=65e8043e&hm=cdff451e5cd694d0dc6b0dc3d0e38c736df4e01dc7873656c234372aeebef0ac&=&format=webp&quality=lossless&width=980&height=560").addEventListener('contextmenu', function(e) {
                e.preventDefault();
            });;
        }

        var button = document.createElement("button");
        
        button.innerText = "فديو الواجب";
        button.style.fontSize = '30px';
        button.style.paddingTop = '9px';
        


        
        
        button.addEventListener("click", function() {  // الواجب
            const re = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");
        
            if (re) {
                $(".video").attr("src", "https://www.youtube.com/embed/PagPq000t5M?autoplay=1");
                button.style.color = "#15920a"
            } else {
                none;
            }
        
        });
        



        $("button#myButton4").click(() => {  // الامتحان
            //const result = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");

            if (result) {
                $(".video").attr("src", "https://screenpal.com/player/cZee3aVKBOm?width=100%&height=100%&ff=1&title=0");
                $("#myButton4").css("color", "#15920a");
                $("#myButton").css("color", "black");
                $("#myButton2").css("color", "black");
                $("#myButton3").css("color", "black");
            } else {
                none;
            }
       
        });

        var container = document.getElementById("watcher");
        container.appendChild(button); 
        

    }
    
    if (n == 2) {   //  Fares waleed 4457

        var imageSrc = 'images/profileMan.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Fares , Id is <span style="color:red; cursor:pointer;" >4457</span>';
        var tooltipTextID = '4457';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);

        

        $(".video").attr("src", "https://media.discordapp.net/attachments/1142201401540345986/1214812434242736158/Untitled-1.png?ex=65fa793e&is=65e8043e&hm=cdff451e5cd694d0dc6b0dc3d0e38c736df4e01dc7873656c234372aeebef0ac&=&format=webp&quality=lossless&width=980&height=560");
    
        $(".video").attr("controlsList", "nodownload");
        $("h1[title]").text("Senior 2 Calculus Rate Of Change").css("text-align", "left");;

        var count2 = localStorage.getItem('viewCount2');

        if (count2 === null) {
            count2 = 0;
        }

        
        
        
        var watchDiv = document.querySelector('.watch');

        var h3Element2 = document.createElement('h3');

       
        h3Element2.textContent = 'مشاهدات : ' + count2;
        h3Element2.style.textAlign = 'right';

        var buttonContainer = document.getElementById('buttonContainer');
        buttonContainer.appendChild(h3Element2);

        count2++;

       
        h3Element2.textContent = 'مشاهدات : ' + count2;



        if (count2 === 1) {
            alert("تنبيه: لديك مشاهدتين فقط ");

        } else if (count2 === 2) {
            alert("تنبيه: لديك مشاهدة واحدة فقط");

        }
           
               

        if (count2 >= 3) {
            document.getElementById('error').play();
            alert("لقد انتهت المشاهدات عندك")
            h3Element2.textContent = 'تم انتهاء عدد المشاهدات';

        }


        localStorage.setItem('viewCount2', count2);
        

       

        if (count2 >= 3) {
            
            
            $(".video").attr("src", "https://media.discordapp.net/attachments/1142201401540345986/1214812434242736158/Untitled-1.png?ex=65fa793e&is=65e8043e&hm=cdff451e5cd694d0dc6b0dc3d0e38c736df4e01dc7873656c234372aeebef0ac&=&format=webp&quality=lossless&width=980&height=560").addEventListener('contextmenu', function(e) {
                e.preventDefault();
            });;
        }
        

        $("button#myButton2").click(() => {  // فديو الواجب
            const result2 = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");

            if (result2) {
                $(".video").attr("src", "https://www.youtube.com/embed/Kkp8-qHWWno?start=1370");
                $("#myButton2").css("color", "#15920a");
                $("#myButton").css("color", "black");
                $("#myButton3").css("color", "black");
                $("#myButton4").css("color", "black");
            } else {
                none;
            }
           
        });



        $("button#myButton4").click(() => {  // الامتحان
            const result = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");

            if (result) {
                $(".video").attr("src", "https://screenpal.com/player/cZee3aVKBOm?width=100%&height=100%&ff=1&title=0");
                $("#myButton4").css("color", "#15920a");
                $("#myButton").css("color", "black");
                $("#myButton2").css("color", "black");
                $("#myButton3").css("color", "black");
            } else {
                none;
            }
       
        });
        
        
    }

 
    
    if (n === 3) {   // Aya Medhat 5674

        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Aya , Id is <span style="color:red; cursor:pointer;" >5674</span>';
        var tooltipTextID = '5674';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZeD0jV7YUG?width=100%&height=100%&ff=1&title=0");
        $(".video").attr("controlsList", "nodownload");
        $("h1[title]").text("Senior 2 Mechanics Motion Under Effect Of Gravity").css("text-align", "left");
    
        var count3 = localStorage.getItem('viewCount3');

        if (count3 === null) {
            count3 = 0;
        }
        

        



        var watchDiv = document.querySelector('.watch');
        var h3Element3 = document.createElement('h3');
    
        h3Element3.textContent = 'مشاهدات : ' + count3;
        h3Element3.style.textAlign = 'right';
    
        var buttonContainer = document.getElementById('buttonContainer');
        buttonContainer.appendChild(h3Element3);
    
        count3++;
    
        h3Element3.textContent = 'مشاهدات : ' + count3;

        if (count3 === 1) {
            alert("تنبيه: لديك مشاهدتين فقط ");

        } else if (count3 === 2) {
            alert("تنبيه: لديك مشاهدة واحدة فقط");

        }
           
        
    
        if (count3 >= 3) {
            document.getElementById('error').play();
            alert("لقد انتهت المشاهدات عندك");
            h3Element3.textContent = 'تم انتهاء عدد المشاهدات';
        }
    
        localStorage.setItem('viewCount3', count3);
        
       

    
        if (count3 >= 3) {
            $(".video").attr("src", "https://media.discordapp.net/attachments/1142201401540345986/1214812434242736158/Untitled-1.png?ex=65fa793e&is=65e8043e&hm=cdff451e5cd694d0dc6b0dc3d0e38c736df4e01dc7873656c234372aeebef0ac&=&format=webp&quality=lossless&width=980&height=560").addEventListener('contextmenu', function(e) {
                e.preventDefault();
            });;
        }


        var button = document.createElement("button");
        button.innerText = "فديو الواجب";
        button.style.fontSize = '30px';
        button.style.paddingTop = '9px';

        button.addEventListener("click", function() {  
            const re = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");

            if (re) {
                $(".video").attr("src", "https://www.youtube.com/embed/L9jzv2PXNjU");
                // Change the text color of the button to green
                button.style.color = "#15920a";
                $("#myButton2").css("color", "#15920a");
                $("#myButton").css("color", "#15920a");
                $("#myButton3").css("color", "black");
                $("#myButton4").css("color", "black");
            } else {
                // Do nothing if the user cancels the action
            }

        });

        var container = document.getElementById("watcher");
        container.appendChild(button);



        $("button#myButton4").click(() => {  // الامتحان
            //const result = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");

            if (result) {
                $(".video").attr("src", "https://screenpal.com/player/cZee3aVKBOm?width=100%&height=100%&ff=1&title=0");
                $("#myButton4").css("color", "#15920a");
                $("#myButton").css("color", "black");
                $("#myButton2").css("color", "black");
                $("#myButton3").css("color", "black");
            } else {
                none;
            }
       
        });

        

    
    }

     
    if (n === 4) {   // farah hassan 7893

        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Farah , Id is <span style="color:red; cursor:pointer;" >7893</span>';
        var tooltipTextID = '7893';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       
        
        $(".video").attr("src", "https://iframe.mediadelivery.net/embed/224107/761689b2-a7f4-4aa0-a933-f2bf46829f63?autoplay=false&loop=false&muted=false&preload=true&responsive=true");
        $("h1[title]").text("Senior 2 Problems Lesson 1").css("text-align", "left");
    
        var count4 = localStorage.getItem('viewCount4');

        if (count4 === null) {
            count4 = 0;
        }
        



        var watchDiv = document.querySelector('.watch');
        var h3Element4 = document.createElement('h3');
    
        h3Element4.textContent = 'مشاهدات : ' + count4;
        h3Element4.style.textAlign = 'right';
    
        var buttonContainer = document.getElementById('buttonContainer');
        buttonContainer.appendChild(h3Element4);
    
        count4++;
    
        h3Element4.textContent = 'مشاهدات : ' + count4;

        if (count4 === 1) {
            alert("تنبيه: لديك مشاهدتين فقط ");

        } else if (count4 === 2) {
            alert("تنبيه: لديك مشاهدة واحدة فقط");

        }
           
        
    
        if (count4 >= 3) {
            document.getElementById('error').play();
            alert("لقد انتهت المشاهدات عندك");
            h3Element4.textContent = 'تم انتهاء عدد المشاهدات';
        }
    
        localStorage.setItem('viewCount4', count4);
    
       

    
        if (count4 >= 3) {
            $(".video").attr("src", "https://media.discordapp.net/attachments/1142201401540345986/1214812434242736158/Untitled-1.png?ex=65fa793e&is=65e8043e&hm=cdff451e5cd694d0dc6b0dc3d0e38c736df4e01dc7873656c234372aeebef0ac&=&format=webp&quality=lossless&width=980&height=560").addEventListener('contextmenu', function(e) {
                e.preventDefault();
            });;
        }

       // var button = document.createElement("button");
        
        button.innerText = "فديو الواجب";
        button.style.fontSize = '30px';
        button.style.paddingTop = '9px';

        
        
        button.addEventListener("click", function() {  // الواجب
            const re = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");
        
            if (re) {
                $(".video").attr("src", "");
                $("#myButton2").css("color", "#15920a");
                $("#myButton").css("color", "black");
                $("#myButton3").css("color", "black");
                $("#myButton4").css("color", "black");
            } else {
                none;
            }
        
        });
        
        
        var container = document.getElementById("watcher");
        container.appendChild(button);
        


        $("button#myButton4").click(() => {  // الامتحان
            //const result = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");

            if (result) {
                $(".video").attr("src", "https://screenpal.com/player/cZee3aVKBOm?width=100%&height=100%&ff=1&title=0");
                $("#myButton4").css("color", "#15920a");
                $("#myButton").css("color", "black");
                $("#myButton2").css("color", "black");
                $("#myButton3").css("color", "black");
            } else {
                none;
            }
       
        });
    }

    if (n === 5) {   // Malak Yousryy 6647

        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Malak , Id is <span style="color:red; cursor:pointer;" >6647</span>';
        var tooltipTextID = '6647';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZnOqXVKFN1?width=100%&height=100%&ff=1&title=0");
        $(".video").attr("controlsList", "nodownload");
        $("h1[title]").text("Senior 2 Math Arithmetic Sequences").css("text-align", "left");
    
        var count5 = localStorage.getItem('viewCount5');

        if (count5 === null) {
            count5 = 0;
        }
        



        var watchDiv = document.querySelector('.watch');
        var h3Element5 = document.createElement('h3');
    
        h3Element5.textContent = 'مشاهدات : ' + count5;
        h3Element5.style.textAlign = 'right';
    
        var buttonContainer = document.getElementById('buttonContainer');
        buttonContainer.appendChild(h3Element5);
    
        count5++;
    
        h3Element5.textContent = 'مشاهدات : ' + count5;

        if (count5 === 1) {
            alert("تنبيه: لديك مشاهدتين فقط ");

        } else if (count5 === 2) {
            alert("تنبيه: لديك مشاهدة واحدة فقط");

        }
           
        
    
        if (count5 >= 3) {
            document.getElementById('error').play();
            alert("لقد انتهت المشاهدات عندك");
            h3Element5.textContent = 'تم انتهاء عدد المشاهدات';
        }
    
        localStorage.setItem('viewCount5', count5);
        
        
       

    
        if (count5 >= 3) {
            $(".video").attr("src", "https://media.discordapp.net/attachments/1142201401540345986/1214812434242736158/Untitled-1.png?ex=65fa793e&is=65e8043e&hm=cdff451e5cd694d0dc6b0dc3d0e38c736df4e01dc7873656c234372aeebef0ac&=&format=webp&quality=lossless&width=980&height=560").addEventListener('contextmenu', function(e) {
                e.preventDefault();
            });;
        }

        var button = document.createElement('button');
        button.innerText = "Arithmetic Series";
        button.style.fontSize = '30px';
        button.style.paddingTop = '9px';
        
        
        button.addEventListener("click", function() {  // الواجب

            const re = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");
        
            if (re) {
                $(".video").attr("src", "https://go.screenpal.com/player/cZeY34V744q?width=100%&height=100%&ff=1&title=0");
                $("h1[title]").text("Senior 2 Math Arithmetic Series").css("text-align", "left");

                button.style.color = '#15920a';
            } else {
                none;
            }

        });

        
        var container = document.getElementById("watcher");
        container.appendChild(button);



        $("button#myButton4").click(() => {  // الامتحان
            //result = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");

            if (result) {
                $(".video").attr("src", "https://screenpal.com/player/cZee3aVKBOm?width=100%&height=100%&ff=1&title=0");
                $("#myButton4").css("color", "#15920a");
                $("#myButton").css("color", "black");
                $("#myButton2").css("color", "black");
                $("#myButton3").css("color", "black");
            } else {
                none;
            }
       
        });
    }

    if (n === 6) {   // Malak momen 1515


        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Malak Momen , Id is <span style="color:red; cursor:pointer;" >1515</span>';
        var tooltipTextID = '1515';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZee3aVKBOm?width=100%&height=100%&ff=1&title=0");
        $("h1[title]").text("Senior 1 Math Trignometric Identities").css("text-align", "left");
    
        var count6 = localStorage.getItem('viewCount6');

        if (count6 === null) {
            count6 = 0;
        }
        



        var watchDiv = document.querySelector('.watch');
        var h3Element6 = document.createElement('h3');
    
        h3Element6.textContent = 'مشاهدات : ' + count6;
        h3Element6.style.textAlign = 'right';
    
        var buttonContainer = document.getElementById('buttonContainer');
        buttonContainer.appendChild(h3Element6);
    
        count6++;
    
        h3Element6.textContent = 'مشاهدات : ' + count6;

        if (count6 === 1) {
            alert("تنبيه: لديك مشاهدتين فقط ");

        } else if (count6 === 2) {
            alert("تنبيه: لديك مشاهدة واحدة فقط");

        }
           
        
    
        if (count6 >= 3) {
            document.getElementById('error').play();
            alert("لقد انتهت المشاهدات عندك");
            h3Element6.textContent = 'تم انتهاء عدد المشاهدات';
        }
    
        localStorage.setItem('viewCount6', count6);
       
        
       

    
        if (count6 >= 3) {
            $(".video").attr("src", "https://media.discordapp.net/attachments/1142201401540345986/1214812434242736158/Untitled-1.png?ex=65fa793e&is=65e8043e&hm=cdff451e5cd694d0dc6b0dc3d0e38c736df4e01dc7873656c234372aeebef0ac&=&format=webp&quality=lossless&width=980&height=560").addEventListener('contextmenu', function(e) {
                e.preventDefault();
            });;
        }

        var button = document.createElement('button');
        button.innerText = "فديو الواجب";
        button.style.fontSize = '30px';
        button.style.paddingTop = '9px';
        
        
        button.addEventListener("click", function() {  // الواجب

            const re = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");
        
            if (re) {
                $(".video").attr("src", "https://www.youtube.com/embed/9PccYlOoT1c");
                button.style.color = '#15920a';
            } else {
                none;
            }

        });
        
        
        var container = document.getElementById("watcher");
        container.appendChild(button);




        $("button#myButton4").click(() => {  // الامتحان
            //const result = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");

            if (result) {
                $(".video").attr("src", "https://screenpal.com/player/cZee3aVKBOm?width=100%&height=100%&ff=1&title=0");
                $("#myButton4").css("color", "#15920a");
                $("#myButton").css("color", "black");
                $("#myButton2").css("color", "black");
                $("#myButton3").css("color", "black");
            } else {
                none;
            }
       
        });
    }

    if (n === 7) {   // Jana Essam 2054

        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Jana , Id is <span style="color:red; cursor:pointer;" >2054</span>';
        var tooltipTextID = '2054';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZeY34V744q?width=100%&height=100%&ff=1&title=0");
        $(".video").attr("controlsList", "nodownload");
        $("h1[title]").text("Senior 2 Math Arithmetic Series").css("text-align", "left");
    
        var count7 = localStorage.getItem('viewCount7');

        if (count7 === null) {
            count7 = 0;
        }
        



        var watchDiv = document.querySelector('.watch');
        var h3Element7 = document.createElement('h3');
    
        h3Element7.textContent = 'مشاهدات : ' + count7;
        h3Element7.style.textAlign = 'right';
    
        var buttonContainer = document.getElementById('buttonContainer');
        buttonContainer.appendChild(h3Element7);
    
        count7++;
    
        h3Element7.textContent = 'مشاهدات : ' + count7;

        if (count7 === 1) {
            alert("تنبيه: لديك مشاهدتين فقط ");

        } else if (count7 === 2) {
            alert("تنبيه: لديك مشاهدة واحدة فقط");

        }
           
        
    
        if (count7 >= 3) {
            document.getElementById('error').play();
            alert("لقد انتهت المشاهدات عندك");
            h3Element7.textContent = 'تم انتهاء عدد المشاهدات';
        }
    
        localStorage.setItem('viewCount7', count7);
        
        
        
       

    
        if (count7 >= 3) {
            $(".video").attr("src", "https://media.discordapp.net/attachments/1142201401540345986/1214812434242736158/Untitled-1.png?ex=65fa793e&is=65e8043e&hm=cdff451e5cd694d0dc6b0dc3d0e38c736df4e01dc7873656c234372aeebef0ac&=&format=webp&quality=lossless&width=980&height=560").addEventListener('contextmenu', function(e) {
                e.preventDefault();
            });;
        }

        var button = document.createElement('button');
        button.innerText = "فديو الواجب";
        button.style.fontSize = '30px';
        button.style.paddingTop = '9px';
        
        
        button.addEventListener("click", function() {  // الواجب

            const re = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");
        
            if (re) {
                $(".video").attr("src", "https://www.youtube.com/embed/XNpffJd6Cn8");
                button.style.color = '#15920a';
            } else {
                none;
            }

        });
        
        
        var container = document.getElementById("watcher");
        container.appendChild(button);



        $("button#myButton4").click(() => {  // الامتحان
            //const result = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");

            if (result) {
                $(".video").attr("src", "https://screenpal.com/player/cZee3aVKBOm?width=100%&height=100%&ff=1&title=0");
                $("#myButton4").css("color", "#15920a");
                $("#myButton").css("color", "black");
                $("#myButton2").css("color", "black");
                $("#myButton3").css("color", "black");
            } else {
                none;
            }
       
        });
    }

    if (n === 8) {   // remas 1150

        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Remas , Id is <span style="color:red; cursor:pointer;" >1150</span>';
        var tooltipTextID = '1150';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZeIcLV7iGq?width=100%&height=100%&ff=1&title=0");
        $(".video").attr("controlsList", "nodownload");
        $("h1[title]").text("Senior 2 Calculas Differentiation").css("text-align", "left");
    
        var count8 = localStorage.getItem('viewCount8');

        if (count8 === null) {
            count8 = 0;
        }
        



        var watchDiv = document.querySelector('.watch');
        var h3Element8 = document.createElement('h3');
    
        h3Element8.textContent = 'مشاهدات : ' + count8;
        h3Element8.style.textAlign = 'right';
    
        var buttonContainer = document.getElementById('buttonContainer');
        buttonContainer.appendChild(h3Element8);
    
        count8++;
    
        h3Element8.textContent = 'مشاهدات : ' + count8;

        if (count8 === 1) {
            alert("تنبيه: لديك مشاهدتين فقط ");

        } else if (count8 === 2) {
            alert("تنبيه: لديك مشاهدة واحدة فقط");

        }
           
        
    
        if (count8 >= 3) {
            document.getElementById('error').play();
            alert("لقد انتهت المشاهدات عندك");
            h3Element8.textContent = 'تم انتهاء عدد المشاهدات';
        }
    
        localStorage.setItem('viewCount8', count8);
        
        
        
       

    
        if (count8 >= 3) {
            $(".video").attr("src", "https://media.discordapp.net/attachments/1142201401540345986/1214812434242736158/Untitled-1.png?ex=65fa793e&is=65e8043e&hm=cdff451e5cd694d0dc6b0dc3d0e38c736df4e01dc7873656c234372aeebef0ac&=&format=webp&quality=lossless&width=980&height=560").addEventListener('contextmenu', function(e) {
                e.preventDefault();
            });;
        }

        $("button#myButton2").click(() => {  // فديو الواجب
            const result8 = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");

            if (result8) {
                $(".video").attr("src", "https://www.youtube.com/embed/ZSxXoTyPXkk");
                $("#myButton2").css("color", "#15920a");
                $("#myButton").css("color", "black");
                $("#myButton3").css("color", "black");
                $("#myButton4").css("color", "black");
            } else {
                none;
            }
           
        });



        $("button#myButton4").click(() => {  // الامتحان
            //const result = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");

            if (result) {
                $(".video").attr("src", "https://screenpal.com/player/cZee3aVKBOm?width=100%&height=100%&ff=1&title=0");
                $("#myButton4").css("color", "#15920a");
                $("#myButton").css("color", "black");
                $("#myButton2").css("color", "black");
                $("#myButton3").css("color", "black");
            } else {
                none;
            }
       
        });
    }


    if (n === 9) {   // Ahmed reda 2252

        var imageSrc = 'images/profileMan.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Ahmed Reda , Id is <span style="color:red; cursor:pointer;" >2252</span>';
        var tooltipTextID = '2252';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZe3cmV7B9u?width=100%&height=100%&ff=1&title=0");
        $(".video").attr("controlsList", "nodownload");
        $("h1[title]").text("Senior 1 Operation On Vector").css("text-align", "left");
    
        var count9 = localStorage.getItem('viewCount9');

        if (count9 === null) {
            count9 = 0;
        }
        



        var watchDiv = document.querySelector('.watch');
        var h3Element9 = document.createElement('h3');
        
        h3Element9.textContent = 'مشاهدات : ' + count9;
        h3Element9.style.textAlign = 'right';
        
        var buttonContainer = document.getElementById('buttonContainer');
        buttonContainer.appendChild(h3Element9);
        
        count9++;
        
        h3Element9.textContent = 'مشاهدات : ' + count9;
        
        if (count9 === 1) {
            alert("تنبيه: لديك مشاهدتين فقط ");
        
        } else if (count9 === 2) {
            alert("تنبيه: لديك مشاهدة واحدة فقط");
        
        }
        
        if (count9 >= 3) {
            document.getElementById('error').play();
            alert("لقد انتهت المشاهدات عندك");
            h3Element9.textContent = 'تم انتهاء عدد المشاهدات';
        }
        
        localStorage.setItem('viewCount9', count9);
        localStorage.setItem('viewCount9', 0);
        
        
        if (count9 >= 3) {
            $(".video").attr("src", "https://media.discordapp.net/attachments/1142201401540345986/1214812434242736158/Untitled-1.png?ex=65fa793e&is=65e8043e&hm=cdff451e5cd694d0dc6b0dc3d0e38c736df4e01dc7873656c234372aeebef0ac&=&format=webp&quality=lossless&width=980&height=560").addEventListener('contextmenu', function(e) {
                e.preventDefault();
            });;
        }
        
        var button = document.createElement("button");
        
        button.innerText = "فديو الواجب";
        button.style.fontSize = '30px';
        button.style.paddingTop = '9px';

        
        
        button.addEventListener("click", function() {  // الواجب
            const re = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");
        
            if (re) {
                $(".video").attr("src", "https://www.youtube.com/embed/PagPq000t5M?start=695");
                button.style.color = '#15920a';

            } else {
                none;
            }
        
        });
        
        
        var container = document.getElementById("watcher");
        container.appendChild(button);
        
        

        


        $("button#myButton4").click(() => {  // الامتحان
            //const result = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");

            if (result) {
                $(".video").attr("src", "https://screenpal.com/player/cZee3aVKBOm?width=100%&height=100%&ff=1&title=0");
                $("#myButton4").css("color", "#15920a");
                $("#myButton").css("color", "black");
                $("#myButton2").css("color", "black");
                $("#myButton3").css("color", "black");
            } else {
                none;
            }
       
        });
    }


    if (n === 10) {   // Fareda hethm 2314

        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Farida Hesham , Id is <span style="color:red; cursor:pointer;" >2314</span>';
        var tooltipTextID = '2314';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZeY34V744q?width=100%&height=100%&ff=1&title=0");
        $(".video").attr("controlsList", "nodownload");
        $("h1[title]").text("Senior 2 Math Arithmetic Series").css("text-align", "left");
    
        var count10 = localStorage.getItem('viewCount10');

        if (count10 === null) {
            count10 = 0;
        }
        



        var watchDiv = document.querySelector('.watch');
        var h3Element10 = document.createElement('h3');
        
        h3Element10.textContent = 'مشاهدات : ' + count10;
        h3Element10.style.textAlign = 'right';
        
        var buttonContainer = document.getElementById('buttonContainer');
        buttonContainer.appendChild(h3Element10);
        
        count10++;
        
        h3Element10.textContent = 'مشاهدات : ' + count10;
        
        if (count10 === 1) {
            alert("تنبيه: لديك مشاهدتين فقط ");
        
        } else if (count10 === 2) {
            alert("تنبيه: لديك مشاهدة واحدة فقط");
        
        }
        
        if (count10 >= 3) {
            document.getElementById('error').play();
            alert("لقد انتهت المشاهدات عندك");
            h3Element10.textContent = 'تم انتهاء عدد المشاهدات';
        }
        
        localStorage.setItem('viewCount10', count10);
        
        
        if (count10 >= 3) {
            $(".video").attr("src", "https://media.discordapp.net/attachments/1142201401540345986/1214812434242736158/Untitled-1.png?ex=65fa793e&is=65e8043e&hm=cdff451e5cd694d0dc6b0dc3d0e38c736df4e01dc7873656c234372aeebef0ac&=&format=webp&quality=lossless&width=980&height=560").addEventListener('contextmenu', function(e) {
                e.preventDefault();
            });;
        }
        
        var button = document.createElement("button");
        
        button.innerText = "فديو الواجب";
        button.style.fontSize = '30px';
        button.style.paddingTop = '9px';
        button.style.color = 'red';


        
        
        button.addEventListener("click", function() {  // الواجب
            document.getElementById('error').play();
            alert("الحصه غير متوفره حاليا")

            /*const re = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");
        
            if (re) {
                $(".video").attr("src", "https://www.youtube.com/embed/wM7joX-DvN8");
                $("#myButton2").css("color", "#15920a");
                $("#myButton").css("color", "black");
                $("#myButton3").css("color", "black");
                $("#myButton4").css("color", "black");
            } else {
                none;
            }
        */
        });
        
        
        var container = document.getElementById("watcher");
        container.appendChild(button);
        
        

        


        $("button#myButton4").click(() => {  // الامتحان
            //const result = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");

            if (result) {
                $(".video").attr("src", "https://screenpal.com/player/cZee3aVKBOm?width=100%&height=100%&ff=1&title=0");
                $("#myButton4").css("color", "#15920a");
                $("#myButton").css("color", "black");
                $("#myButton2").css("color", "black");
                $("#myButton3").css("color", "black");
            } else {
                none;
            }
       
        });
    }


    if (n === 11) {   // Roaia Elsafi 2771

        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Roaia , Id is <span style="color:red; cursor:pointer;" >2771</span>';
        var tooltipTextID = '2771';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZeY34V744q?width=100%&height=100%&ff=1&title=0");
        $(".video").attr("controlsList", "nodownload");
        $("h1[title]").text("Senior 2 Math Arithmetic Series").css("text-align", "left");
    
        var count11 = localStorage.getItem('viewCount11');

        if (count11 === null) {
            count11 = 0;
        }
        



        var watchDiv = document.querySelector('.watch');
        var h3Element11 = document.createElement('h3');
        
        h3Element11.textContent = 'مشاهدات : ' + count11;
        h3Element11.style.textAlign = 'right';
        
        var buttonContainer = document.getElementById('buttonContainer');
        buttonContainer.appendChild(h3Element11);
        
        count11++;
        
        h3Element11.textContent = 'مشاهدات : ' + count11;
        
        if (count11 === 1) {
            alert("تنبيه: لديك مشاهدتين فقط ");
        
        } else if (count11 === 2) {
            alert("تنبيه: لديك مشاهدة واحدة فقط");
        
        }
        
        if (count11 >= 3) {
            document.getElementById('error').play();
            alert("لقد انتهت المشاهدات عندك");
            h3Element11.textContent = 'تم انتهاء عدد المشاهدات';
        }
        
        localStorage.setItem('viewCount11', count11);
        
        
        
        if (count11 >= 3) {
            $(".video").attr("src", "https://media.discordapp.net/attachments/1142201401540345986/1214812434242736158/Untitled-1.png?ex=65fa793e&is=65e8043e&hm=cdff451e5cd694d0dc6b0dc3d0e38c736df4e01dc7873656c234372aeebef0ac&=&format=webp&quality=lossless&width=980&height=560").addEventListener('contextmenu', function(e) {
                e.preventDefault();
            });;
        }
        
        var button = document.createElement("button");
        
        button.innerText = "فديو الواجب";
        button.style.fontSize = '30px';
        button.style.paddingTop = '9px';
        


        
        
        button.addEventListener("click", function() {  // الواجب

            const re = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");
        
            if (re) {
                $(".video").attr("src", "https://www.youtube.com/embed/XNpffJd6Cn8");
                button.style.color = '#15920a';
            } else {
                none;
            }

        });
        
        
        var container = document.getElementById("watcher");
        container.appendChild(button);
        
        

        


        $("button#myButton4").click(() => {  // الامتحان
            //const result = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");

            if (result) {
                $(".video").attr("src", "https://screenpal.com/player/cZee3aVKBOm?width=100%&height=100%&ff=1&title=0");
                $("#myButton4").css("color", "#15920a");
                $("#myButton").css("color", "black");
                $("#myButton2").css("color", "black");
                $("#myButton3").css("color", "black");
            } else {
                none;
            }
       
        });
    }


    if (n === 12) {  // Jana Mahmoud 4441

        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is Jana Mahmoud , Id is <span style="color:red; cursor:pointer;" >4441</span>';
        var tooltipTextID = '4441';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZeOVAV7JdX?width=100%&height=100%&ff=1&title=0");
        $(".video").attr("controlsList", "nodownload");
        $("h1[title]").text("Senior 2 Lesson 5 And 6 Geometric Sequence").css("text-align", "left");
    
        var count12 = localStorage.getItem('viewCount12');

        if (count12 === null) {
            count12 = 0;
        }
        



        var watchDiv = document.querySelector('.watch');
        var h3Element12 = document.createElement('h3');
        
        h3Element12.textContent = 'مشاهدات : ' + count12;
        h3Element12.style.textAlign = 'right';
        
        var buttonContainer = document.getElementById('buttonContainer');
        buttonContainer.appendChild(h3Element12);
        
        count12++;
        
        h3Element12.textContent = 'مشاهدات : ' + count12;
        
        if (count12 === 1) {
            alert("تنبيه: لديك مشاهدتين فقط ");
        
        } else if (count12 === 2) {
            alert("تنبيه: لديك مشاهدة واحدة فقط");
        
        }
        
        if (count12 >= 3) {
            document.getElementById('error').play();
            alert("لقد انتهت المشاهدات عندك");
            h3Element12.textContent = 'تم انتهاء عدد المشاهدات';
        }
        
        localStorage.setItem('viewCount12', count12);
       
        
        
        
        if (count12 >= 3) {
            $(".video").attr("src", "https://media.discordapp.net/attachments/1142201401540345986/1214812434242736158/Untitled-1.png?ex=65fa793e&is=65e8043e&hm=cdff451e5cd694d0dc6b0dc3d0e38c736df4e01dc7873656c234372aeebef0ac&=&format=webp&quality=lossless&width=980&height=560").addEventListener('contextmenu', function(e) {
                e.preventDefault();
            });;
        }
        
        var button = document.createElement("button");
        
        button.innerText = "فديو الواجب";
        button.style.fontSize = '30px';
        button.style.paddingTop = '9px';
        


        
        
        button.addEventListener("click", function() {  // الواجب

            //const re = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");
        
            if (re) {
                $(".video").attr("src", "https://www.youtube.com/embed/ZSxXoTyPXkk");
                button.style.color = '#15920a';
            } else {
                none;
            }

        });
        
        
        var container = document.getElementById("watcher");
        container.appendChild(button);
        
        

        


        $("button#myButton4").click(() => {  // الامتحان
            //const result = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");

            if (result) {
                $(".video").attr("src", "https://screenpal.com/player/cZee3aVKBOm?width=100%&height=100%&ff=1&title=0");
                $("#myButton4").css("color", "#15920a");
                $("#myButton").css("color", "black");
                $("#myButton2").css("color", "black");
                $("#myButton3").css("color", "black");
            } else {
                none;
            }
       
        });
    }


    if (n === 13) {  // Salma Ashraf 3214

        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is  Salma Ashraf , Id is <span style="color:red; cursor:pointer;" >3214</span>';
        var tooltipTextID = '3214';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       
        
        $(".video").attr("src", "https://iframe.mediadelivery.net/embed/224107/2f3d5fd1-90e0-4222-a98f-3927466e5b9b?autoplay=false&loop=false&muted=false&preload=true&responsive=true");
        $(".video").attr("controlsList", "nodownload");
        $("h1[title]").text("Senior 1 Determinants").css("text-align", "left");
    
        var count13 = localStorage.getItem('viewCount13');

        if (count13 === null) {
            count13 = 0;
        }
        



        var watchDiv = document.querySelector('.watch');
        var h3Element13 = document.createElement('h3');
        
        h3Element13.textContent = 'مشاهدات : ' + count13;
        h3Element13.style.textAlign = 'right';
        
        var buttonContainer = document.getElementById('buttonContainer');
        buttonContainer.appendChild(h3Element13);
        
        count13++;
        
        h3Element13.textContent = 'مشاهدات : ' + count13;
        
        if (count13 === 1) {
            alert("تنبيه: لديك مشاهدتين فقط ");
        
        } else if (count13 === 2) {
            alert("تنبيه: لديك مشاهدة واحدة فقط");
        
        }
        
        if (count13 >= 3) {
            document.getElementById('error').play();
            alert("لقد انتهت المشاهدات عندك");
            h3Element13.textContent = 'تم انتهاء عدد المشاهدات';
        }
        
        localStorage.setItem('viewCount13', count13);
        
        
        
        
        if (count13 >= 3) {
            $(".video").attr("src", "https://media.discordapp.net/attachments/1142201401540345986/1214812434242736158/Untitled-1.png?ex=65fa793e&is=65e8043e&hm=cdff451e5cd694d0dc6b0dc3d0e38c736df4e01dc7873656c234372aeebef0ac&=&format=webp&quality=lossless&width=980&height=560").addEventListener('contextmenu', function(e) {
                e.preventDefault();
            });;
        }
        
        var button = document.createElement("button");
        
        button.innerText = "فديو الواجب";
        button.style.fontSize = '30px';
        button.style.paddingTop = '9px';
        
        button.addEventListener("click", function() {  // الواجب

            const re = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");
        
            if (re) {
                $(".video").attr("src", "https://www.youtube.com/embed/a15XRQQe2YQ");
                button.style.color = '#15920a';
            } else {
                none;
            }

        });
        
        
        var container = document.getElementById("watcher");
        container.appendChild(button);
        
        

        


        $("button#myButton4").click(() => {  // الامتحان
            //const result = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");

            if (result) {
                $(".video").attr("src", "https://screenpal.com/player/cZee3aVKBOm?width=100%&height=100%&ff=1&title=0");
                $("#myButton4").css("color", "#15920a");
                $("#myButton").css("color", "black");
                $("#myButton2").css("color", "black");
                $("#myButton3").css("color", "black");
            } else {
                none;
            }
       
        });
    }

    if (n === 14) {  // Gana Atef 4567

        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is  Gana Atef , Id is <span style="color:red; cursor:pointer;" >4567</span>';
        var tooltipTextID = '4567';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZeerxVKBYF?width=100%&height=100%&ff=1&title=0");
        $(".video").attr("controlsList", "nodownload");
        $("h1[title]").text("Senior 2 Calculus Rate Of Change").css("text-align", "left");
    
        var count14 = localStorage.getItem('viewCount14');

        if (count14 === null) {
            count14 = 0;
        }
        



        var watchDiv = document.querySelector('.watch');
        var h3Element14 = document.createElement('h3');
        
        h3Element14.textContent = 'مشاهدات : ' + count14;
        h3Element14.style.textAlign = 'right';
        
        var buttonContainer = document.getElementById('buttonContainer');
        buttonContainer.appendChild(h3Element14);
        
        count14++;
        
        h3Element14.textContent = 'مشاهدات : ' + count14;
        
        if (count14 === 1) {
            alert("تنبيه: لديك مشاهدتين فقط ");
        
        } else if (count14 === 2) {
            alert("تنبيه: لديك مشاهدة واحدة فقط");
        
        }
        
        if (count14 >= 3) {
            document.getElementById('error').play();
            alert("لقد انتهت المشاهدات عندك");
            h3Element14.textContent = 'تم انتهاء عدد المشاهدات';
        }
        
        localStorage.setItem('viewCount14', count14);
        
        
        
        
        if (count14 >= 3) {
            $(".video").attr("src", "https://media.discordapp.net/attachments/1142201401540345986/1214812434242736158/Untitled-1.png?ex=65fa793e&is=65e8043e&hm=cdff451e5cd694d0dc6b0dc3d0e38c736df4e01dc7873656c234372aeebef0ac&=&format=webp&quality=lossless&width=980&height=560").addEventListener('contextmenu', function(e) {
                e.preventDefault();
            });;
        }
        
        var button = document.createElement("button");
        
        button.innerText = "فديو الواجب";
        button.style.fontSize = '30px';
        button.style.paddingTop = '9px';
        
        button.addEventListener("click", function() {  // الواجب

            const re = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");
        
            if (re) {
                $(".video").attr("src", "https://www.youtube.com/embed/FXyiZry3Ukw");
                button.style.color = '#15920a';
            } else {
                none;
            }

        });
        
        
        var container = document.getElementById("watcher");
        container.appendChild(button);
        
        

        


        $("button#myButton4").click(() => {  // الامتحان
            //const result = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");

            if (result) {
                $(".video").attr("src", "https://screenpal.com/player/cZee3aVKBOm?width=100%&height=100%&ff=1&title=0");
                $("#myButton4").css("color", "#15920a");
                $("#myButton").css("color", "black");
                $("#myButton2").css("color", "black");
                $("#myButton3").css("color", "black");
            } else {
                none;
            }
       
        });
    }
   
   
    if (n === 15) { // Mariem Mohamed 5535

        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is  Mariem Mohamed , Id is <span style="color:red; cursor:pointer;" >5535</span>';
        var tooltipTextID = '5535';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       
        
        $(".video").attr("src", "https://iframe.mediadelivery.net/embed/224107/761689b2-a7f4-4aa0-a933-f2bf46829f63?autoplay=false&loop=false&muted=false&preload=true&responsive=true");
        $("h1[title]").text("Senior 2 Problems Lesson 1").css("text-align", "left");
    
        var count15 = localStorage.getItem('viewCount15');

        if (count15 === null) {
            count15 = 0;
        }
        



        var watchDiv = document.querySelector('.watch');
        var h3Element15 = document.createElement('h3');
        
        h3Element15.textContent = 'مشاهدات : ' + count15;
        h3Element15.style.textAlign = 'right';
        
        var buttonContainer = document.getElementById('buttonContainer');
        buttonContainer.appendChild(h3Element15);
        
        count15++;
        
        h3Element15.textContent = 'مشاهدات : ' + count15;
        
        if (count15 === 1) {
            alert("تنبيه: لديك مشاهدتين فقط ");
        
        } else if (count15 === 2) {
            alert("تنبيه: لديك مشاهدة واحدة فقط");
        
        }
        
        if (count15 >= 3) {
            document.getElementById('error').play();
            alert("لقد انتهت المشاهدات عندك");
            h3Element15.textContent = 'تم انتهاء عدد المشاهدات';
        }
        
        localStorage.setItem('viewCount15', count15);
        
        
        
        
        if (count15 >= 3) {
            $(".video").attr("src", "https://media.discordapp.net/attachments/1142201401540345986/1214812434242736158/Untitled-1.png?ex=65fa793e&is=65e8043e&hm=cdff451e5cd694d0dc6b0dc3d0e38c736df4e01dc7873656c234372aeebef0ac&=&format=webp&quality=lossless&width=980&height=560").addEventListener('contextmenu', function(e) {
                e.preventDefault();
            });;
        }
        
       // var button = document.createElement("button");
        
        button.innerText = "فديو الواجب";
        button.style.fontSize = '30px';
        button.style.paddingTop = '9px';
        
        button.addEventListener("click", function() {  // الواجب

            const re = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");
        
            if (re) {
                $(".video").attr("src", "https://www.youtube.com/embed/FXyiZry3Ukw");
                button.style.color = '#15920a';
            } else {
                none;
            }

        });
        
        
        var container = document.getElementById("watcher");
        container.appendChild(button);
        
        

        


        $("button#myButton4").click(() => {  // الامتحان
            //const result = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");

            if (result) {
                $(".video").attr("src", "https://screenpal.com/player/cZee3aVKBOm?width=100%&height=100%&ff=1&title=0");
                $("#myButton4").css("color", "#15920a");
                $("#myButton").css("color", "black");
                $("#myButton2").css("color", "black");
                $("#myButton3").css("color", "black");
            } else {
                none;
            }
       
        });
    }
   
   
    if (n === 16) { // Kareem 5321

        var imageSrc = 'images/profile.png';
        var altText = 'avatar';
        var tooltipText = 'Name is  Mariem Mohamed , Id is <span style="color:red; cursor:pointer;" >5535</span>';
        var tooltipTextID = '5535';
        addProfileImageAndTooltip(imageSrc, altText, tooltipText, tooltipTextID);
       
        
        $(".video").attr("src", "https://iframe.mediadelivery.net/embed/224107/761689b2-a7f4-4aa0-a933-f2bf46829f63?autoplay=false&loop=false&muted=false&preload=true&responsive=true");
        $("h1[title]").text("Senior 2 Problems Lesson 1").css("text-align", "left");
    
        var count16 = localStorage.getItem('viewCount16');

        if (count16 === null) {
            count16 = 0;
        }
        



        var watchDiv = document.querySelector('.watch');
        var h3Element16 = document.createElement('h3');
        
        h3Element16.textContent = 'مشاهدات : ' + count16;
        h3Element16.style.textAlign = 'right';
        
        var buttonContainer = document.getElementById('buttonContainer');
        buttonContainer.appendChild(h3Element16);
        
        count16++;
        
        h3Element16.textContent = 'مشاهدات : ' + count16;
        
        if (count16 === 1) {
            alert("تنبيه: لديك مشاهدتين فقط ");
        
        } else if (count16 === 2) {
            alert("تنبيه: لديك مشاهدة واحدة فقط");
        
        }
        
        if (count16 >= 3) {
            document.getElementById('error').play();
            alert("لقد انتهت المشاهدات عندك");
            h3Element16.textContent = 'تم انتهاء عدد المشاهدات';
        }
        
        localStorage.setItem('viewCount16', count16);
        
        
        
        
        if (count16 >= 3) {
            $(".video").attr("src", "https://media.discordapp.net/attachments/1142201401540345986/1214812434242736158/Untitled-1.png?ex=65fa793e&is=65e8043e&hm=cdff451e5cd694d0dc6b0dc3d0e38c736df4e01dc7873656c234372aeebef0ac&=&format=webp&quality=lossless&width=980&height=560").addEventListener('contextmenu', function(e) {
                e.preventDefault();
            });;
        }
        
       // var button = document.createElement("button");
        
        button.innerText = "فديو الواجب";
        button.style.fontSize = '30px';
        button.style.paddingTop = '9px';
        
        button.addEventListener("click", function() {  // الواجب

            const re = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");
        
            if (re) {
                $(".video").attr("src", "https://www.youtube.com/embed/FXyiZry3Ukw");
                button.style.color = '#15920a';
            } else {
                none;
            }

        });
        
        
        var container = document.getElementById("watcher");
        container.appendChild(button);
        
        

        


        $("button#myButton4").click(() => {  // الامتحان
            //const result = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");

            if (result) {
                $(".video").attr("src", "https://screenpal.com/player/cZee3aVKBOm?width=100%&height=100%&ff=1&title=0");
                $("#myButton4").css("color", "#15920a");
                $("#myButton").css("color", "black");
                $("#myButton2").css("color", "black");
                $("#myButton3").css("color", "black");
            } else {
                none;
            }
       
        });
    }
   

   


    

    
        
        buttonContainer.appendChild(h3Element1);
  

        
}
