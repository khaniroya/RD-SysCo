<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6 left-side">
                <div class="col-md-12 logo-section">
                    <img src="../assets/img/logo.png" />
                </div>
                <div class="col-md-12 title-big">
                  <div class="txt-bottom">
                    <h1> 
                    <span>This is big title</span></br>
                    <span>that is wrapped</span>
                    </h1>
                    <p>This is a description that is located below the main header</p>
                  </div>
                </div>
            </div>
            <div class="col-md-6 right-side">
                <div class="col-md-12 gray-section"></div>
                <div class="col-lg-6 list-item">
                    <h3>This is a title</h3>
                    <ul>
                        <li>Outline1</li>
                        <li>Outline2</li>
                        <li>Outline3</li>
                    </ul>
                </div>
                <div class="col-lg-6 list-item">
                    <h3>This is a title</h3>
                    <ul>
                        <li>Outline1</li>
                        <li>Outline2</li>
                        <li>Outline3</li>
                    </ul>
                </div>
            </div>
  
        </div>
        <div class="row">
                    <div class="col-md-6 text-left social-cl">
             <div class="social">
                          <ul>
                        <li><img src="../assets/img/instagram.png" /></li>
                        <li><img src="../assets/img/linkedin.png" /></li>
                        <li></li>

                    </ul>
            </div>
            </div>
         </div>
    </div>
    
</template>

<style>
    .gray-section {
        background: #b2b2b2;
        height: 400px;
    }
    h3,
    li, 
    p {
        font-family: "Varela Round", sans-serif;
        color: #838282;
    }
    h1 {
      color: #707070;
      font-family: "Varela Round", sans-serif;
    }
    h3 {
        font-weight: 600;
    }
    .logo-section {
        margin: 20px auto;
    }
    .list-item ul li {
      list-style: none;
      text-align: left;
      font-weight: 500;
      line-height: 25px;
    }

    .list-item ul {
        padding: 0;
    }


.social ul li {
  list-style: none;
  line-height: 35px;
  }

.social ul {
    padding: 0;
}
.social ul li {
  position: relative;
}

.social ul li:last-child {
  margin-top: 10px;
}
.social ul li:last-child:before {
    background: #b2b2b2;
    height: 100px;
    width: 2px;
    content: "";
    left: 7px;
    position: absolute;
}

@media screen 
  and (min-device-width: 1200px) 
  and (max-device-width: 1600px) 
  and (-webkit-min-device-pixel-ratio: 1) { 
  .title-big {
    position: absolute;
    top: 300px;
}
.left-side p {
    font-size: 30px;
    line-height: 36px;
    margin: 18px auto;
}
.title-big h1 {
    font-size: 48px;
    font-weight: 900;
    line-height: 60px;
}
.social ul li img {
    width: 18px;
}
}
@media (max-width: 768px) {
  .container {
    width: 100%;
}
}
@media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1) {
    body {
      background: #b2b2b2;
    }
    .title-big {
    margin-top: 200px;
}
.title-big h1 {
    font-size: 70px;
    font-weight: 900;
    line-height: 60px;
}
.social ul li {
   display: inline;
}
.left-side p {
    font-size: 46px;
    line-height: 60px;
    margin: 18px auto;
}
.social ul {
  margin-top: 50px;
}
.social ul li:first-child {
  margin-right: 50px;
}
.social ul li img {
    width: 27px;
}
    .title-big h1 span:last-child,
    .gray-section,
    .list-item {
      display: none;
    }
}
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    body {
      background: #b2b2b2;
    }
    .title-big {
    margin-top: 200px;
}
.social ul li {
   display: inline;
}
.title-big h1 {
    font-size: 73px;
    font-weight: 900;
    line-height: 80px;
    margin-bottom: 50px;
}
.left-side p {
    font-size: 46px;
    line-height: 60px;
    margin: 18px auto;
}
.social ul {
  margin-top: 50px;
}
.social ul li:first-child {
  margin-right: 50px;
}
.social ul li img {
    width: 27px;
}

    .gray-section,
    .list-item,
    .social-cl {
      display: none;
    }
}
</style>

