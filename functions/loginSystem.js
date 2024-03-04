<!DOCTYPE html>

<html>

    <head>

        <meta charset="UTF-8">
        <title>Abdalla Mostafa | الصفحة الرئيسية</title>

        <link rel="stylesheet" href="styles/generalStyles.css">
        <link rel="stylesheet" href="styles/mainPage.css">

        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>

    </head>

    <body>
        
        <nav>

            <a href="" img><img src="images/logo.svg" alt="Logo"></a>

            <a href="" in="y">الصفحة الرئيسية</a>
            <a href="" in="z">الحصص</a>
            <a href="">الحصص الإضافية</a>
            <a href="">للتواصل</a>

        </nav>

        <content>

            <div id="login">
                <h1>سجل دخول</h1>

                <div id="enterLogin">
                    <label>ادخل كلمة المرور</label>
                    <input type="text" placeholder="Ex. 3223">
                    <p err style="color:red;"></p>
                </div>

                <button enter>تسجيل</button>
            </div>

            <div id="video" style="display: none;">

                <h1 title></h1>

                <div class="videoContainer">
                    <iframe class="video" width="100%" height="100%" style="border:0;" scrolling="no" src="" allowfullscreen="true"></iframe>
                
                    <div class="timeline">
                        <div class="bar"></div>
                    </div>
                </div>
                <p class="counter">مشاهدات : <span class="counter-value">1</span></p>
            </div>

        </content>

        <footer>© موقع مستر عبدالله مصطفي الرسمي</footer>

        <script src="functions/videoPlayer.js"></script>
        <script src="functions/countViewers.js"></script>
        <script src="functions/loginSystem.js"></script>

    </body>

</html>
