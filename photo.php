<?php
$link = mysqli_connect("127.0.0.1", "root", "", "lens");

$photo = mysqli_query($link, "SELECT * FROM `image`");
?>

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Фотостудия Lens. Портфолио</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz&display=swap" rel="stylesheet"> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/magnific-popup.css">
    <link rel="stylesheet" href="style/css/jquery.fancybox.min.css">
    <link rel="stylesheet" href="style/css/style.css">
    <link rel="stylesheet" href="style/js/main.js">
    <link rel="stylesheet" href="style/css/media.css">
    <link rel="stylesheet" href="style/css/jquery-ui.min.css">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
</head>
<body>

<header class="header">
        <div class="container">
            <div class="header__content-inner">
                <div class="header__logo all-image">
                    <a href="index.html">
                        <img src="image/logo.png" alt="" class="logo">
                    </a>
                </div>
                <div class="header__burger">
                	<span>		
                	</span>
                </div>
                <nav class="menu">
                    <ul class="menu__list">
                        <li><a href="photo.php" class="header__link">Портфолио</a></li>
                        <li><a href="contacts.html" class="header__link">Контакты</a></li>
                    </ul>
                </nav>
            </div>  
</header>
<section class="gallery-portfolio">
    <div class="container">
        <div class="gallery-list">
            <?php
                while($result = mysqli_fetch_assoc($photo))
                    {
                        ?>
                        <a href="image/<?php echo $result['img']; ?>.jpg" class="gallery-item">
                        <div class="gallery-item-hover">Посмотреть</div>
                        <img src="image/<?php echo $result['img']; ?>.jpg" alt="alt">
                        </a> 
            <?php
                    }
            ?>
            
        </div>
    </div>
  </section>

  <script src="https://code.jquery.com/jquery-3.5.1.js" integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/magnific-popup.js/1.1.0/jquery.magnific-popup.js"></script>
  <script>
    $(".gallery-list").magnificPopup({
      delegate: "a",
      type: "image",
      gallery: {
        enabled: true
      }
    }); 
  </script>
<footer class="footer">
    <div class="footer__content">
        <div class="container">
            <div class="footer__inner">
                <div class="footer__info">
                    <div class="footer__title">
                        Контактная информация
                    </div>
                    <ul class="footer__list">
                        <li class="footer__list-link"><a href="#">lens@gmail.com</a></li>
                        <li class="footer__list-link"><p>8(923) 123-45-67</p></li>
                        <li class="footer__list-link"><p>8(953) 987-54-32</p></li>
                        <li class="footer__list-link"><p>Россия, г. Омск, Гагарина, 10</p></li>
                    </ul>
                </div>
                <div class="footer__map">
                    <iframe height="250px" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2289.189126008024!2d73.37514831553345!3d54.9873179803556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43aafe1a80e84ef1%3A0x73ed6f7fab8d72ee!2z0YPQuy4g0JPQsNCz0LDRgNC40L3QsCwgMTAsINCe0LzRgdC6LCDQntC80YHQutCw0Y8g0L7QsdC7LiwgNjQ0MDI0!5e0!3m2!1sru!2sru!4v1623329394203!5m2!1sru!2sru" frameborder="0" style="border:0" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </div>
    <div class="footer__copy">
        <div class="container">
            <div class="copy__text">
                © 2021 Клочкова Ксения, ИСП381.
            </div>
        </div>
    </div>
</footer>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  <script src="style/js/ajax.js"></script>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="style/js/jquery.fancybox.min.js"></script>
  <script src="style/js/jquery.formstyler.min.js"></script>
  <script src="style/js/jquery-ui.min.js"></script>   
  <script src="style/js/inputmask.min.js"></script> 
  <script src="style/js/main.js"></script>
</body>
</html>