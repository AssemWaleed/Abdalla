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

            


            $(".video").attr("src", "https://go.screenpal.com/player/cZee3aVKBOm?width=100%&height=100%&ff=1&title=0")
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


       
        $(".video").attr("src", "https://go.screenpal.com/player/cZeIc4V7i50?width=100%&height=100%&ff=1&title=0")
        $(".video").attr("controlsList", "nodownload");
        $("h1[title]").text("Senior 1 Multiplying Matrices").css("text-align", "left");


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

        $("button#myButton2").click(() => {  // فديو الواجب
            const result1 = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");

            if (result1) {
                $(".video").attr("src", "https://youtu.be/wM7joX-DvN8?si=BCdkk4odZgeXtaWR");
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
    
    if (n == 2) {   //  Fares waleed 4457

        

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
       
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZeD0jV7YUG?width=100%&height=100%&ff=1&title=0");
        $(".video").attr("controlsList", "nodownload");
        $("h1[title]").text("Senior 2 Mechanics Motion Under Effect Of Gravity").css("text-align", "left");
    
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

        var button = document.createElement("button");
        
        button.innerText = "فديو الواجب";
        button.style.fontSize = '30px';
        button.style.paddingTop = '9px';

        
        
        button.addEventListener("click", function() {  // الواجب
            const re = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");
        
            if (re) {
                $(".video").attr("src", "https://www.youtube.com/embed/L9jzv2PXNjU");
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
       
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZei3oVKNhc?width=100%&height=100%&ff=1&title=0");
        $(".video").attr("controlsList", "nodownload");
        $("h1[title]").text("Senior 2  Rectilinear motion with uniform acceleration").css("text-align", "left");
    
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

        $("button#myButton2").click(() => {  // فديو الواجب
            const result5 = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");

            if (result5) {
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
       
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZeIc4V7i50?width=100%&height=100%&ff=1&title=0");
        $(".video").attr("controlsList", "nodownload");
        $("h1[title]").text("Senior 1 Multiplying Matrices").css("text-align", "left");
    
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

        $("button#myButton2").click(() => {  // فديو الواجب
            const result6 = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");

            if (result6) {
                $(".video").attr("src", "https://youtu.be/wM7joX-DvN8?si=rWIetVNnG34NyKPN");
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

    if (n === 7) {   // Jana Essam 2054
       
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZeIcLV7iGq?width=100%&height=100%&ff=1&title=0");
        $(".video").attr("controlsList", "nodownload");
        $("h1[title]").text("Senior 2 Calculas Differentiation").css("text-align", "left");
    
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

        $("button#myButton2").click(() => {  // فديو الواجب
            const result7 = window.confirm("ستقوم بفقدان المشاهده الخاصه بك");

            if (result7) {
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

    if (n === 8) {   // remas 1150
       
        
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
       
        
        $(".video").attr("src", "https://go.screenpal.com/player/cZeIc4V7i50?width=100%&height=100%&ff=1&title=0");
        $(".video").attr("controlsList", "nodownload");
        $("h1[title]").text("Senior 1 Multiplying Matrices").css("text-align", "left");
    
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
                $(".video").attr("src", "https://www.youtube.com/embed/wM7joX-DvN8");
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


    if (n === 10) {   // Fareda hethm 2314
       
        
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
            h3Element9.textContent = 'تم انتهاء عدد المشاهدات';
        }
        
        localStorage.setItem('viewCount10', count10);
        
        
        if (count9 >= 3) {
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
   


   


    

    
        
        buttonContainer.appendChild(h3Element1);
  

        
}
