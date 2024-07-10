<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
  <title><?php echo $title ?></title>
  <meta name="description" content="<?php echo $desc ?>">
  <meta name="viewport" content="width=device-width, height=510 initial-scale=1, maximum-scale=1, user-scalable=0">        

  <link rel="shortcut icon" href="favicon.ico"/>
  <link rel="stylesheet" href="shadowbox/shadowbox.css">
  <link rel="stylesheet" href="css/bootstrap.min.css">
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/main-responsive.css">
  <link href="http://fonts.googleapis.com/css?family=Muli&v2" rel="stylesheet" type="text/css" />
  <script src="js/vendor/modernizr-2.6.1-respond-1.1.0.min.js"></script>
</head>

<body>
  <header>

    <div class="top-alert">
      <a href="http://www.entrepreneurhof.com/nominate" target="_blank"><strong>Nominations for the 2014 class are open until July 21st</strong></a>
    </div>

    <div class="container">
      <div class="social-bar">
      </div>
      <div class="logo">
        <h1><img src="img/hof-logo.png" alt="Kentucky Entrepreneur Hall of Fame"></h1>
      </div>
      <a class="menu-btn hidden-desktop" data-toggle="collapse" data-target=".nav-collapse">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </a>
      <div id="nav" class="nav-collapse collapse">
        <ul id="navbar">
            <?php
            $file = basename($_SERVER['REQUEST_URI']);
            if ($file == ''){
                $file = '/';
            }

            $links = array("Home"=>"/", "About"=>"about","Media"=>"media", "Founders Series"=>"founders-series", "Nominate"=>"nominate");

            foreach($links as $title => $href):
                $class = strpos($href, $file) !== false ? 'active' : '';
                echo "<li class='" . $class . "'>";
                echo "<a href='" . $href . "''>" . $title . "</a>";
                echo "</li>";
            endforeach;
            ?>
        </ul>
      </div>

      <?php $max_height = (strpos($file, '/') !== false) ? '500px' : '0px' ?>
      <div class="billboard" style="max-height: <?php echo $max_height ?>">
          <h2>
              <div id="line1">KENTUCKY ENTREPRENEUR</div>
              <div id="line2">HALL OF FAME</div>
              <div id="tagline">Honoring Kentucky's Most Successful Entrepreneurs</div>
          </h2>
      </div>
        

    </div>
  </header>

  <div id="pjax-container" class="body">
      <div class="container">
          <section class="content">