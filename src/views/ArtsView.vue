<template>
  <header>
    <div class="container">
      <h1>A&amp;E News</h1>
      <div class="cont">
        <div class="list">
          <ul>
            <li><router-link :to="{ name: 'HomePage' }">HOME</router-link></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#content">CONTENT</a></li>
            <li><a href="#contact">CONTACTS</a></li>
            <li><a href="#pieces">PIECES</a></li>
          </ul>
        </div>
        <div class="btn">
          <button class="btn">SEE NOW</button>
        </div>
      </div>
      <div class="icon" id="icon" @click="displayList()">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path
            fill="#121212"
            d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
          />
        </svg>
      </div>
    </div>
  </header>
  <!-- Description -->
  <section class="desc">
    <div class="container">
      <div class="box box_info">
        <div class="info">
          <p>DESCRIPTION BY POWER</p>
          <h1>Artworks &amp; Exhibitions News</h1>
          <h3>Molestiae neque perspiciatis quidem ut.</h3>
        </div>
        <div class="btns">
          <button class="black">BUY NOW $25</button>
          <button class="white">LIVE DEMO</button>
        </div>
      </div>
      <img src="../assets/circle.jpg" />
    </div>
  </section>
  <!-- Works -->
  <section class="works" id="projects">
    <div class="container">
      <div class="cont_one">
        <h5>WORKS</h5>
        <h1>Our Main Projects</h1>
        <div class="box-one box">
          <img src="../assets/image16.jpg" />
          <p>DESIGN</p>
          <h2>Photographer Creates</h2>
        </div>
        <div class="box-two box">
          <img src="../assets/image7.jpg" />
          <p>DESIGN</p>
          <h2>Take Charge</h2>
        </div>
      </div>
      <div class="cont_two">
        <p>Animi commodi enim eveniet excepturi.</p>
        <div class="box-three box">
          <img src="../assets/image13.jpg" />
          <p>DESIGN</p>
          <h2>Amazing Installable</h2>
        </div>
        <div class="box-four box">
          <img src="../assets/circle.jpg" />
          <p>DESIGN</p>
          <h2>Most Creative</h2>
        </div>
      </div>
    </div>
  </section>
  <!-- Creative -->
  <section class="creative">
    <div class="container">
      <div class="info">
        <h5>LATEST POST</h5>
        <h1>Most Creative Art</h1>
      </div>
      <hr />
    </div>
  </section>
  <!-- World -->
  <section class="world">
    <div class="container">
      <div class="info">
        <p class="first">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          animi et eum ipsum iste obcaecati quaerat voluptate.
        </p>
        <p class="second">
          Architecto asperiores assumenda, dignissimos dolor.
        </p>
      </div>
      <div class="box1 box">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path
            fill="#d9d9d9"
            d="M51.7 295.1l31.7 6.3c7.9 1.6 16-.9 21.7-6.6l15.4-15.4c11.6-11.6 31.1-8.4 38.4 6.2l9.3 18.5c4.8 9.6 14.6 15.7 25.4 15.7c15.2 0 26.1-14.6 21.7-29.2l-6-19.9c-4.6-15.4 6.9-30.9 23-30.9l2.3 0c13.4 0 25.9-6.7 33.3-17.8l10.7-16.1c5.6-8.5 5.3-19.6-.8-27.7l-16.1-21.5c-10.3-13.7-3.3-33.5 13.4-37.7l17-4.3c7.5-1.9 13.6-7.2 16.5-14.4l16.4-40.9C303.4 52.1 280.2 48 256 48C141.1 48 48 141.1 48 256c0 13.4 1.3 26.5 3.7 39.1zm407.7 4.6c-3-.3-6-.1-9 .8l-15.8 4.4c-6.7 1.9-13.8-.9-17.5-6.7l-2-3.1c-6-9.4-16.4-15.1-27.6-15.1s-21.6 5.7-27.6 15.1l-6.1 9.5c-1.4 2.2-3.4 4.1-5.7 5.3L312 330.1c-18.1 10.1-25.5 32.4-17 51.3l5.5 12.4c8.6 19.2 30.7 28.5 50.5 21.1l2.6-1c10-3.7 21.3-2.2 29.9 4.1l1.5 1.1c37.2-29.5 64.1-71.4 74.4-119.5zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm144.5 92.1c-2.1 8.6 3.1 17.3 11.6 19.4l32 8c8.6 2.1 17.3-3.1 19.4-11.6s-3.1-17.3-11.6-19.4l-32-8c-8.6-2.1-17.3 3.1-19.4 11.6zm92-20c-2.1 8.6 3.1 17.3 11.6 19.4s17.3-3.1 19.4-11.6l8-32c2.1-8.6-3.1-17.3-11.6-19.4s-17.3 3.1-19.4 11.6l-8 32zM343.2 113.7c-7.9-4-17.5-.7-21.5 7.2l-16 32c-4 7.9-.7 17.5 7.2 21.5s17.5 .7 21.5-7.2l16-32c4-7.9 .7-17.5-7.2-21.5z"
          />
        </svg>
        <h2>Understand the <span>World</span></h2>
        <p>Architecto asperiores assumenda, dignissimos dolor.</p>
      </div>
      <div class="box2 box">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path
            fill="#cbcccd"
            d="M256 0L576 0c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64l-320 0c-35.3 0-64-28.7-64-64l0-224c0-35.3 28.7-64 64-64zM476 106.7C471.5 100 464 96 456 96s-15.5 4-20 10.7l-56 84L362.7 169c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l80 0 48 0 144 0c8.9 0 17-4.9 21.2-12.7s3.7-17.3-1.2-24.6l-96-144zM336 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zM64 128l96 0 0 256 0 32c0 17.7 14.3 32 32 32l128 0c17.7 0 32-14.3 32-32l0-32 160 0 0 64c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 192c0-35.3 28.7-64 64-64zm8 64c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-16 0zm0 104c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-16 0zm0 104c-8.8 0-16 7.2-16 16l0 16c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-16 0zm336 16l0 16c0 8.8 7.2 16 16 16l16 0c8.8 0 16-7.2 16-16l0-16c0-8.8-7.2-16-16-16l-16 0c-8.8 0-16 7.2-16 16z"
          />
        </svg>
        <h2>Art and the <span>Process</span></h2>
        <p>
          Reprehenderit saepe sunt tempore totam veniam vero voluptate
          inventore.
        </p>
      </div>
    </div>
  </section>
  <!-- installations -->
  <section class="install">
    <div class="container">
      <div class="info">
        <h3>Modern Art <span>Installations</span></h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          animi et eum ipsum iste obcaecati quaerat voluptate. Architecto
          asperiores assumenda, dignissimos dolor.
        </p>
      </div>
      <div class="imgs">
        <div class="first_box">
          <img src="../assets/image13.jpg" />
          <img src="../assets/image15.jpg" />
        </div>
        <div class="second_box">
          <img src="../assets/image10.jpg" />
        </div>
      </div>
    </div>
  </section>
  <!--Icons-->
  <section class="icons">
    <div class="container">
      <div class="box1 box">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
          <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path
            fill="#121212"
            d="M287.9 0c9.2 0 17.6 5.2 21.6 13.5l68.6 141.3 153.2 22.6c9 1.3 16.5 7.6 19.3 16.3s.5 18.1-5.9 24.5L433.6 328.4l26.2 155.6c1.5 9-2.2 18.1-9.7 23.5s-17.3 6-25.3 1.7l-137-73.2L151 509.1c-8.1 4.3-17.9 3.7-25.3-1.7s-11.2-14.5-9.7-23.5l26.2-155.6L31.1 218.2c-6.5-6.4-8.7-15.9-5.9-24.5s10.3-14.9 19.3-16.3l153.2-22.6L266.3 13.5C270.4 5.2 278.7 0 287.9 0zm0 79L235.4 187.2c-3.5 7.1-10.2 12.1-18.1 13.3L99 217.9 184.9 303c5.5 5.5 8.1 13.3 6.8 21L171.4 443.7l105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2L384.2 324.1c-1.3-7.7 1.2-15.5 6.8-21l85.9-85.1L358.6 200.5c-7.8-1.2-14.6-6.1-18.1-13.3L287.9 79z"
          />
        </svg>
        <div class="info">
          <h4>SUPERIOR ELITE</h4>
          <p>Distinctio doloribus est maiores</p>
        </div>
      </div>
      <div class="box2 box">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path
            fill="#121212"
            d="M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24zM32 192c-17.7 0-32 14.3-32 32L0 416c0 53 43 96 96 96l192 0c53 0 96-43 96-96l16 0c61.9 0 112-50.1 112-112s-50.1-112-112-112l-48 0L32 192zm352 64l16 0c26.5 0 48 21.5 48 48s-21.5 48-48 48l-16 0 0-96zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z"
          />
        </svg>
        <div class="info">
          <h4>NEW YORK BASED</h4>
          <p>Creative director got the idea</p>
        </div>
      </div>
      <div class="box3 box">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path
            fill="#121212"
            d="M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"
          />
        </svg>
        <div class="info">
          <h4>LEGENDARY ARTIST</h4>
          <p>Graduate bridges disparate connections</p>
        </div>
      </div>
      <div class="box4 box">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path
            fill="#121212"
            d="M448 80c8.8 0 16 7.2 16 16l0 319.8-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3L48 96c0-8.8 7.2-16 16-16l384 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"
          />
        </svg>
        <div class="info">
          <h4>COOL MUSEUM</h4>
          <p>Amet est minus dolores nisi</p>
        </div>
      </div>
    </div>
  </section>
  <!-- Trend -->
  <section class="trend" id="content">
    <div class="container">
      <div class="content">
        <h4>TREND CONTENT</h4>
        <div class="icon">
          <h4>SEE ALL</h4>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              fill="#121212"
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
        </div>
      </div>
      <div class="global">
        <div class="video">
          <video src="../assets/city_on_city (360p).mp4"></video>
          <div class="info">
            <p>
              Ipsum magnam non provident, rerum sequi voluptatum. A aspernatur
              cumque fugit ipsam odio similique veritatis voluptates voluptatum.
            </p>
            <h4>
              Aliquid aperiam, atque earum eius, eligendi error est eveniet ex
              expedita explicabo hic laborum magnam nisi odio possimus, qui
              quidem ratione sequi.
            </h4>
          </div>
          <div class="person">
            <img src="../assets/image14.jpg" />
            <div class="details">
              <h2>ROBERT WILSON</h2>
              <h3>Consultant</h3>
            </div>
          </div>
        </div>
        <div class="photo">
          <div class="image"><img src="../assets/image12.jpg" /></div>
          <div class="info">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores debitis dolor eum eveniet excepturi fuga. Sapiente
              sint, sunt ullam.
            </p>
            <h4>
              Fugiat ipsam iusto magnam maiores obcaecati possimus ratione
              repellendus soluta totam voluptatum. Aliquid consequuntur cumque.
            </h4>
          </div>
          <div class="person">
            <img src="../assets/image6.jpg" />
            <div class="details">
              <h2>WILLIAM MITCHELL</h2>
              <h3>Manager</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Author -->
  <section class="author">
    <div class="container">
      <div class="author">
        <h2>Author</h2>
        <div class="box">
          <h2>SEE ALL</h2>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              fill="#121212"
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
        </div>
      </div>
      <div class="content">
        <div class="box1">
          <div class="det">
            <h2>SIMPLE</h2>
            <div class="span1">
              <ul>
                <li></li>
              </ul>
              <h2>BEAUTY</h2>
            </div>
            <div class="span2">
              <ul>
                <li></li>
              </ul>
              <h2>6K MAX VIEWS</h2>
            </div>
          </div>
          <div class="person">
            <img src="../assets/image6.jpg" />
            <div class="info">
              <h2>STEVE QUINN</h2>
              <p>Painter</p>
            </div>
          </div>
        </div>
        <div class="box2">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
            debitis dolor eum eveniet excepturi fuga.
          </p>
          <h5>
            Aliquid aperiam, atque earum eius, eligendi error est eveniet ex
            expedita explicabo hic laborum magnam nisi odio possimus, qui quidem
            ratione sequi.
          </h5>
        </div>
        <div class="box3">
          <div class="date">
            <h2>NOVEMBER<sub>02.2022</sub></h2>
          </div>
          <div class="img-box">
            <div class="first_img img">
              <img src="../assets/image12.jpg" />
            </div>
            <div class="imgs">
              <div class="second-img img">
                <img src="../assets/image15.jpg" />
              </div>
              <div class="third-img img">
                <img src="../assets/image17.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Nav -->
  <section class="nav">
    <div class="container">
      <div class="box_one">
        <div class="first">
          <h3>OBSESSIO</h3>
          <p>N</p>
        </div>
        <div class="second box">
          <ul>
            <li></li>
          </ul>
          <div class="col">
            <h3>ETERNA</h3>
            <p>L</p>
          </div>
        </div>
        <div class="third box">
          <ul>
            <li></li>
          </ul>
          <div class="col">
            <h3>25K</h3>
            <p>VIEWS</p>
          </div>
        </div>
      </div>
      <div class="box_two">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores
          debitis dolor eum eveniet excepturi fuga.
        </p>
      </div>
      <div class="box_three">
        <div class="date">
          <h2>NOVEMBER 17,2022</h2>
        </div>
        <div class="img">
          <img src="../assets/image2.jpg" />
        </div>
      </div>
    </div>
  </section>
  <!-- Beau Cards -->
  <section class="beau_cards">
    <div class="container">
      <div class="first-card card">
        <div class="img">
          <img src="../assets/image10.jpg" />
        </div>
        <div class="info">
          <div class="date">
            <h2>NOVEMBER<sub>05,2022</sub></h2>
            <h3>YOUR COMMENT</h3>
          </div>
          <p>Adipisci aperiam at autem commodi cumque eligendi eos.</p>
        </div>
      </div>
      <div class="second-card card">
        <div class="img">
          <img src="../assets/image15.jpg" />
        </div>
        <div class="info">
          <div class="date">
            <h2>NOVEMBER<sub>07,2022</sub></h2>
            <h3>YOUR COMMENT</h3>
          </div>
          <p>Consectetur adipisicing elit architecto dignissimos.</p>
        </div>
      </div>
      <div class="third-card card">
        <div class="img">
          <img src="../assets/image16.jpg" />
        </div>
        <div class="info">
          <div class="date">
            <h2>NOVEMBER<sub>09,2022</sub></h2>
            <h3>YOUR COMMENT</h3>
          </div>
          <p>Dolor sit amet, consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  </section>
  <!-- Questions -->
  <section class="ques">
    <div class="container">
      <div class="asked">
        <h1>Frequently asked Questions</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          animi et eum ipsum iste obcaecati quaerat voluptate.
        </p>
      </div>
      <div class="boxes">
        <div class="box">
          <div class="icon">
            <h3>
              Numquam odit pariatur praesentium quam, quasi quibusdam quisquam
              unde velit?
            </h3>
            <div
              class="svg"
              @dblclick="removeContent1()"
              @click="apearContent1()"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  fill="#121212"
                  d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                />
              </svg>
            </div>
          </div>
          <p id="rem1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            dolores, exercitationem facere, in ipsum iusto natus necessitatibus
            neque numquam odit pariatur praesentium quam, quasi quibusdam
            quisquam unde velit. Corporis, ipsum. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Delectus facilis neque quisquam sequi
            tempore. Aliquid animi deleniti dolorum eaque expedita id inventore,
            libero nemo provident quibusdam sed sequi unde voluptas.
          </p>
        </div>
        <div class="box">
          <div class="icon">
            <h3>
              Ad blanditiis corporis doloremque excepturi fugit ipsum maxime
              mollitia perspiciatis sequi?
            </h3>
            <div
              class="svg"
              @dblclick="removeContent2()"
              @click="apearContent2()"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  fill="#121212"
                  d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                />
              </svg>
            </div>
          </div>
          <p id="rem2">
            Blanditiis dolores excepturi expedita nostrum perferendis
            perspiciatis quos similique. Impedit, laboriosam. Adipisicing elit.
            Animi atque beatae blanditiis corporis deleniti deserunt dolorum ea,
            eaque id incidunt iusto, magnam modi nobis officia quisquam repellat
            reprehenderit velit voluptatum. Facere, in ipsum iusto natus
            necessitatibus neque numquam odit pariatur praesentium quam, quasi
            quibusdam quisquam unde velit. Corporis, ipsum. Lorem ipsum dolor
            sit amet, consectetur adipisicing elit. Delectus facilis neque
            quisquam sequi tempore. Aliquid animi deleniti dolorum eaque
            expedita id inventore, libero nemo provident quibusdam sed sequi
            unde voluptas.
          </p>
        </div>
        <div class="box">
          <div class="icon">
            <h3>
              Ad blanditiis corporis doloremque excepturi fugit ipsum maxime
              mollitia perspiciatis sequi?
            </h3>
            <div
              class="svg"
              @dblclick="removeContent3()"
              @click="apearContent3()"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  fill="#121212"
                  d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                />
              </svg>
            </div>
          </div>
          <p id="rem3">
            Facere, in ipsum iusto natus necessitatibus neque numquam odit
            pariatur praesentium quam, quasi quibusdam quisquam unde velit.
            Corporis, ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Delectus facilis neque quisquam sequi tempore. Aliquid animi
            deleniti dolorum eaque expedita id inventore, libero nemo provident
            quibusdam sed sequi unde voluptas.Blanditiis dolores excepturi
            expedita nostrum perferendis perspiciatis quos similique. Blanditiis
            corporis deleniti deserunt dolorum ea, eaque id incidunt iusto,
            magnam modi nobis officia quisquam repellat reprehenderit velit
            voluptatum.
          </p>
        </div>
        <div class="box">
          <div class="icon">
            <h3>
              Ad blanditiis corporis doloremque excepturi fugit ipsum maxime
              mollitia perspiciatis sequi?
            </h3>
            <div
              class="svg"
              @dblclick="removeContent4()"
              @click="apearContent4()"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  fill="#121212"
                  d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"
                />
              </svg>
            </div>
          </div>
          <p id="rem4">
            ostrum perferendis perspiciatis quos similique. Impedit, laboriosam.
            facere, in ipsum iusto natus necessitatibus neque numquam odit
            pariatur praesentium quam, quasi quibusdam quisquam unde velit.
            Corporis, ipsum. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Delectus facilis neque quisquam sequi tempore. Aliquid animi
            deleniti dolorum eaque expedita id inventore, libero nemo provident
            quibusdam sed sequi unde voluptas.Adipisicing elit. Animi atque
            beatae blanditiis corporis deleniti deserunt dolorum ea, eaque id
            incidunt iusto, magnam modi nobis officia quisquam repellat
            reprehenderit velit voluptatum.
          </p>
        </div>
      </div>
    </div>
  </section>
  <!--Form-->
  <section class="form" id="contact">
    <div class="container">
      <h2>START TO OUR CONNECT</h2>
      <div class="content">
        <p>
          You confirm that you have read and are agreeing to our terms of use
          regarding the storage of the data.
        </p>
        <div class="form">
          <form>
            <input type="email" placeholder="enter email" />
            <div class="check">
              <input type="checkbox" id="ch" />
              <label for="ch"
                >Accusamus consequuntur culpa deleniti esse eveniet, itaque
                neque, porro, sed sit totam ullam unde veritatis voluptatem.
                Accusantium ea quia.</label
              >
            </div>
          </form>
          <button>SUBSCRIBE</button>
        </div>
      </div>
    </div>
  </section>
  <!--DATES-->
  <section class="dates">
    <div class="container">
      <div class="comment">
        <h3>COMMENT</h3>
        <div class="see">
          <h3>SEE ALL</h3>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              fill="#121212"
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
        </div>
      </div>
      <div class="content">
        <div class="box">
          <div class="con">
            <div class="date">
              <h3>SEPTEMBER<sub>03</sub></h3>
              <p>2022</p>
            </div>
            <div class="comm">
              <h3>YOUR</h3>
              <h3>COMMENT</h3>
            </div>
          </div>
          <div class="para">
            <p>
              Consectetur adipisicing elit. Accusamus accusantium, alias
              assumenda atque dolor dolore minima odit praesentium repudiandae.
            </p>
          </div>
        </div>
        <div class="box">
          <div class="con">
            <div class="date">
              <h3>SEPTEMBER<sub>10</sub></h3>
              <p>2022</p>
            </div>
            <div class="comm">
              <h3>YOUR</h3>
              <h3>COMMENT</h3>
            </div>
          </div>
          <div class="para">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur doloribus enim esse iusto laudantium magni maxime
              minima.
            </p>
          </div>
        </div>
        <div class="box">
          <div class="con">
            <div class="date">
              <h3>SEPTEMBER<sub>12</sub></h3>
              <p>2022</p>
            </div>
            <div class="comm">
              <h3>YOUR</h3>
              <h3>COMMENT</h3>
            </div>
          </div>
          <div class="para">
            <p>
              Ab adipisci alias architecto iste omnis, quas quia voluptatum?
              Amet animi fugiat maiores saepe? Error exercitationem facere
              maiores minima necessitatibus officiis sapiente.
            </p>
          </div>
        </div>
        <div class="box">
          <div class="con">
            <div class="date">
              <h3>SEPTEMBER<sub>21</sub></h3>
              <p>2022</p>
            </div>
            <div class="comm">
              <h3>YOUR</h3>
              <h3>COMMENT</h3>
            </div>
          </div>
          <div class="para">
            <p>
              Quaerat quo ratione velit. Ad deserunt dolor harum odio officiis
              quaerat? Atque eveniet impedit laboriosam quae, qui quod.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--PIECES-->
  <section class="pieces" id="pieces">
    <div class="container">
      <div class="art">
        <h2>ART PIECES</h2>
        <h2>SEE ALL</h2>
      </div>
      <div class="boxes">
        <div class="box">
          <div class="img">
            <img src="../assets/image12.jpg" />
          </div>
          <div class="icons">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  fill="#121212"
                  d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                />
              </svg>
              <h6>7</h6>
            </div>
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  fill="#121212"
                  d="M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z"
                />
              </svg>
              <h6>5</h6>
            </div>
          </div>
          <div class="pa">
            <p>Alias aut dicta, dolor eaque fugiat natus nihil numquam.</p>
          </div>
        </div>
        <div class="box">
          <div class="img">
            <img src="../assets/image7.jpg" />
          </div>
          <div class="icons">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  fill="#121212"
                  d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                />
              </svg>
              <h6>6</h6>
            </div>
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  fill="#121212"
                  d="M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z"
                />
              </svg>
              <h6>8</h6>
            </div>
          </div>
          <div class="pa">
            <p>Alias aut dicta, dolor eaque fugiat natus nihil numquam.</p>
          </div>
        </div>
        <div class="box">
          <div class="img">
            <img src="../assets/image9.jpg" />
          </div>
          <div class="icons">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  fill="#121212"
                  d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                />
              </svg>
              <h6>10</h6>
            </div>
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  fill="#121212"
                  d="M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z"
                />
              </svg>
              <h6>5</h6>
            </div>
          </div>
          <div class="pa">
            <p>Alias aut dicta, dolor eaque.</p>
          </div>
        </div>
        <div class="box">
          <div class="img">
            <img src="../assets/image10.jpg" />
          </div>
          <div class="icons">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  fill="#121212"
                  d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                />
              </svg>
              <h6>3</h6>
            </div>
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  fill="#121212"
                  d="M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z"
                />
              </svg>
              <h6>2</h6>
            </div>
          </div>
          <div class="pa">
            <p>Fugiat natus nihil numquam perferendis porro.</p>
          </div>
        </div>
        <div class="box">
          <div class="img">
            <img src="../assets/image15.jpg" />
          </div>
          <div class="icons">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  fill="#121212"
                  d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                />
              </svg>
              <h6>11</h6>
            </div>
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  fill="#121212"
                  d="M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z"
                />
              </svg>
              <h6>5</h6>
            </div>
          </div>
          <div class="pa">
            <p>Commodi consequatur dolorum nihil numquam explicabo.</p>
          </div>
        </div>
        <div class="box">
          <div class="img">
            <img src="../assets/image13.jpg" />
          </div>
          <div class="icons">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  fill="#121212"
                  d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                />
              </svg>
              <h6>7</h6>
            </div>
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  fill="#121212"
                  d="M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z"
                />
              </svg>
              <h6>4</h6>
            </div>
          </div>
          <div class="pa">
            <p>Minus quas quia voluptatum consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Footer -->
  <footer>
    <div class="container">
      <div class="box-one box">
        <h2>Artworks &amp; Exhibitions News</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          architecto est explicabo fugiat in ipsa minus quia quis sunt ullam?
          Consectetur deleniti hic iure minus odio omnis provident repellat
          veniam.
        </p>
      </div>
      <div class="box-two box">
        <ul>
          <h2 class="title">Home</h2>
          <div class="lis">
            <li><h2>ART</h2></li>
            <li><h2>NEWS</h2></li>
            <li><h2>BLOG</h2></li>
            <li><h2>PRIVACY POLICY</h2></li>
          </div>
        </ul>
      </div>
      <div class="box-three box">
        <ul>
          <h2 class="title">Product</h2>
          <div class="lis">
            <li><h2>HELP</h2></li>
            <li><h2>CONTACTS</h2></li>
            <li><h2>PRODUCTS</h2></li>
            <li><h2>BUY NOW</h2></li>
          </div>
        </ul>
      </div>
      <div class="box-four box">
        <ul>
          <h2 class="title">Social</h2>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                fill="#121212"
                d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
              />
            </svg>
            <router-link to="https://twitter.com/mobirise">TWITTER</router-link>
            <div class="blackbox">
              <span>35k</span>
            </div>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                fill="#121212"
                d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"
              />
            </svg>
            <router-link to="https://facebook.com/mobirise"
              >FACEBOOK</router-link
            >
            <div class="blackbox">
              <span>15k</span>
            </div>
          </li>
          <li>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                fill="#121212"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
            <router-link to="https://instagram.com/mobirise"
              >INSTAGRAM</router-link
            >
            <div class="blackbox">
              <span>73k</span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  methods: {
    removeContent1() {
      let p = document.getElementById("rem1");
      p.style.display = "none";
    },
    removeContent2() {
      let p = document.getElementById("rem2");
      p.style.display = "none";
    },
    removeContent3() {
      let p = document.getElementById("rem3");
      p.style.display = "none";
    },
    removeContent4() {
      let p = document.getElementById("rem4");
      p.style.display = "none";
    },
    apearContent1() {
      let p = document.getElementById("rem1");
      p.style.display = "block";
    },
    apearContent2() {
      let p = document.getElementById("rem2");
      p.style.display = "block";
    },
    apearContent3() {
      let p = document.getElementById("rem3");
      p.style.display = "block";
    },
    apearContent4() {
      let p = document.getElementById("rem4");
      p.style.display = "block";
    },
    displayList() {
      let toggle = document.getElementById("icon");
      let container = document.querySelector("header .container");
      let list = document.querySelector("header .cont .list");
      let ul = document.querySelector("div.list ul");
      let cont = document.querySelector("header .container div.cont");
      let lis = document.querySelectorAll("header ul li");
      let as = document.querySelectorAll("header ul li a");
      let btn = document.querySelector("header button");
      let desc = document.querySelector("section.desc");
      // let as = document.querySelectorAll("header .cont .list ul li a");
      toggle.addEventListener("dblclick", () => {
        cont.style.display = "none";
        desc.style.marginTop = "3em";
      });
      toggle.addEventListener("click", () => {
        btn.style.cssText = `
          align-self: flex-start;
        `;
        desc.style.marginTop = "35em";
        container.style.cssText = `
          position: relative;
          display: flex;
        `;
        list.style.cssText = `
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          margin-bottom: 
        `;
        cont.style.cssText = `
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          position: absolute;
          z-index: 100;
          width: 100%;
          left: 0;
          top: 100%;
          padding: 5em 0; 
          box-sizing: border-box;
          margin-bottom: 5em;
        `;
        ul.style.cssText = `
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: flex-start;
          padding: 0;
        `;
        lis.forEach((e) => {
          e.style.cssText = `
            margin-bottom: 0.5em;
            padding: 0.5em 0;
          `;
        });
        as.forEach((e) => {
          e.style.cssText = `
            padding: 0.5em 0;
            margin: auto 1em;
          `;
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
body {
  overflow: hidden;
}
header {
  .container {
    display: flex;
    justify-content: space-around;
    width: 100%;
    h1 {
      color: #181818;
      font-family: "Poppins";
      font-size: 1.5rem;
    }
    div.icon {
      align-self: center;
      cursor: pointer;
    }
    svg {
      width: 1em;
      display: none;
      @media (max-width: 991px) {
        display: block;
      }
    }
    div.cont {
      display: flex;
      align-items: center;
      @media (max-width: 991px) {
        display: none;
      }
      @media (min-width: 992px) {
        & {
          display: flex;
          align-items: center;
        }
      }
      div.list {
        margin-right: 5em;
        ul {
          list-style: none;
          display: flex;
          align-items: center;
          align-content: center;
          li {
            a {
              text-decoration: none;
              color: #181818;
              font-family: "Syne";
              margin-left: 3em;
              font-weight: 600;
              transition: all 0.5s ease;
              &:hover {
                color: #999;
              }
            }
          }
        }
      }
    }
    div.btn {
      button {
        width: 8em;
        height: 3.5em;
        background-color: transparent;
        border-radius: 3em;
        border: 1px solid #181818;
        font-weight: 500;
        font-size: 1rem;
        font-family: "Syne";
        cursor: pointer;
        transition: all 0.5s ease;
        &:hover {
          border-color: transparent;
        }
      }
    }
  }
}
/*Description*/
section.desc {
  margin-top: 10em;
  div.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 5em;
    @media (max-width: 991px) {
      & {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
    div.info {
      p {
        color: #181818;
        font-family: "Syne";
        font-weight: 600;
        font-size: 1.2rem;
      }
      h1 {
        color: #181818;
        font-family: "Syne";
        font-weight: 600;
        font-size: 4rem;
      }
      h3 {
        color: #383737;
        font-family: "Syne";
        font-weight: 600;
        font-size: 1.3rem;
      }
    }
    div.btns {
      button.white {
        width: 8.5em;
        height: 3em;
        background-color: transparent;
        border-radius: 3em;
        border: 1px solid #181818;
        font-weight: 500;
        font-size: 1rem;
        margin-left: 2em;
        font-family: "Syne";
        cursor: pointer;
        transition: all 0.5s ease;
        &:hover {
          border-color: transparent;
        }
      }
      button.black {
        width: 8.5em;
        height: 3em;
        background-color: #181818;
        border-radius: 3em;
        border: 1px solid #181818;
        font-weight: 500;
        font-size: 1rem;
        font-family: "Syne";
        color: white;
        cursor: pointer;
        transition: all 0.5s ease;
        &:hover {
          border-color: black;
        }
      }
    }
    img {
      width: 100%;
      overflow: hidden;
      margin-left: 2em;
      margin-right: 0;
      @media (max-width: 991px) {
        & {
          overflow: hidden;
          margin: 0 auto;
        }
      }
    }
  }
}
section.works {
  margin-top: 9em;
  div.container {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    align-items: flex-end;
    margin-right: 2em;
    justify-items: center;
    grid-column-gap: 2em;
    @media (max-width: 767px) {
      & {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
    div.cont_one,
    div.cont_two {
      width: 90%;
      div.box-one,
      div.box-two,
      div.box-three,
      div.box-four {
        width: 100%;
        margin-bottom: 3em;
        padding-bottom: 2em;
        box-shadow: 1em 1em 2.5em #eeeded;
        border-radius: 5px;
        transition: all 0.5s ease;
        cursor: pointer;
        &:hover {
          transform: translateY(-15px);
        }
        img {
          width: 100%;
          border-top-left-radius: 5px;
          border-top-right-radius: 5px;
        }
        p {
          color: #181818;
          font-family: "Syne";
          font-size: 1.2rem;
          text-align: left;
          margin-left: 1.5em;
        }
        h2 {
          color: #181818;
          font-family: "Poppins";
          font-size: 1.5rem;
          font-weight: 400;
          text-align: left;
          margin-left: 1.2em;
        }
      }
    }
    div.cont_one {
      h5 {
        color: #181818;
        font-family: "Syne";
        font-size: 1rem;
        text-align: left;
      }
      h1 {
        color: #181818;
        font-family: "Syne";
        font-size: 3rem;
        font-weight: 400;
        text-align: left;
        word-spacing: -0.4rem;
        letter-spacing: -0.002rem;
      }
    }
    div.cont_two {
      margin-top: 3em;
      p {
        color: #181818;
        font-family: "Poppins";
        font-size: 1.5rem;
        text-align: left;
      }
    }
    div.box-three,
    div.box-one {
      margin-bottom: 1em;
    }
  }
}
/*Creative*/
section.creative {
  div.container {
    div.info {
      margin: 4em 3em;
      h5 {
        font-family: "Syne";
        font-size: 1.1rem;
        text-align: left;
        color: #181818;
      }
      h1 {
        color: #181818;
        font-family: "Syne";
        text-align: left;
        font-size: 3rem;
        font-weight: 500;
        letter-spacing: -0.2rem;
        word-spacing: -0.05em;
      }
    }
    hr {
      border-color: #f8f8f8;
      width: 90%;
    }
  }
}
/*World*/
section.world {
  margin-top: 5em;
  div.container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    @media (min-width: 1199px) {
      & {
        margin: auto 7.5em;
      }
    }
    @media (max-width: 936px) {
      & {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;
        margin: 0 auto;
        div.info {
          text-align: center;
          width: 80%;
        }
        div.box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          svg {
            align-self: center;
            margin: 0 auto;
          }
        }
      }
    }
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    justify-items: center;
    align-items: center;
    grid-column-gap: 2em;
    border-bottom: 3px solid #181818;
    padding-bottom: 8em;
  }
  div.info {
    margin-left: 5em;
    width: 120%;
    p {
      color: #181818;
      text-align: left;
      font-family: "Poppins";
      font-size: 1.1rem;
      width: 100%;
    }
  }
  div.box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    margin-left: 5em;
    svg {
      width: 2em;
    }
    h2 {
      color: #181818;
      font-weight: 400;
      span {
        color: #b3b2b2;
      }
    }
    p {
      font-family: "Syne";
      color: #181818;
    }
  }
}
/*Installations*/
section.install {
  margin-top: 8em;
  margin-bottom: 8em;
  overflow: hidden;
  div.container {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    border-bottom: 1px solid #b3adad;
    padding-bottom: 4em;
    @media (max-width: 767px) {
      & {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
    div.info {
      text-align: left;
      h3 {
        font-family: "Poppins";
        color: #181818;
        font-size: 1.5rem;
        font-weight: 300;
        span {
          color: #b3b2b2;
        }
      }
      p {
        font-family: "Syne";
        color: #252525;
        font-size: 1rem;
      }
    }
    div.imgs {
      box-sizing: border-box;
      width: 100%;
      display: grid;
      grid-template-columns: calc(100% * 1 / 3) calc(100% * 2 / 3);
      grid-column-gap: 1em;
      img {
        width: 100%;
        height: 50%;
        margin-bottom: 0.2em;
      }
    }
    div.second_box {
      margin-right: 1.5em;
      margin-left: -0.2em;
      height: 100%;
      margin-bottom: 0;
      img {
        height: 103%;
        width: 100%;
        margin: 0.1;
      }
    }
  }
}
/*Icons*/
section.icons {
  margin: 9em 0 4em;
  div.container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25%, 1fr));
    justify-items: center;
    border-top: 3px solid #181818;
    border-bottom: 2px solid #181818;
    padding: 5em 0;
    @media (max-width: 767px) {
      & {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        div.box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          align-content: center;
          div.info {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            align-content: center;
          }
          svg {
            margin: 0 auto;
          }
        }
      }
    }
    div.box {
      display: flex;
      justify-content: space-between;
      margin-right: 1em;
      align-items: flex-start;
      div.info {
        text-align: left;
        margin-left: 1em;
        h4 {
          font-family: "Syne";
          color: #181818;
          font-size: 1rem;
          font-family: 400;
        }
        p {
          font-family: "Poppins";
          color: #181818;
          font-size: 1rem;
        }
      }
      svg {
        width: 2em;
        margin-top: 1em;
      }
    }
  }
}
/*Trend*/
section.trend {
  div.container {
    border-bottom: 3px solid #181818;
    padding-bottom: 4em;
    margin-bottom: 4em;
    @media (max-width: 767px) {
      & {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        div.content {
          display: flex;
          justify-content: space-between;
          width: 100%;
          margin: 0 auto;
        }
        div.global {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          video {
            margin: 0 auto;
            width: 50%;
          }
          div.info {
            margin: 0 5em;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
    div.content {
      margin-bottom: 4em;
      display: flex;
      justify-content: space-between;
      h4 {
        font-family: "Syne";
        color: #181818;
        font-size: 1rem;
      }
      div.icon {
        h4 {
          margin-right: 0.25em;
        }
        display: flex;
        cursor: pointer;
        svg {
          width: 0.7em;
        }
      }
    }
    div.global {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(430px, 1fr));
      grid-column-gap: 2.5em;
      justify-items: space-between;
      div.video {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        p {
          font-family: "Syne";
          font-size: 3rem;
          color: #181818;
          cursor: pointer;
          transition: 0.5s;
          &:hover {
            color: rgba(165, 42, 42, 0.61);
          }
        }
        h4 {
          font-family: "Poppins";
          font-size: 1.2rem;
          color: #181818;
          font-weight: 400;
        }
        video {
          width: 100%;
        }
        div.person {
          display: flex;
          img {
            width: 2em;
          }
        }
      }
      div.photo {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        h4 {
          font-family: "Poppins";
          font-size: 1.2rem;
          color: #181818;
          font-weight: 400;
        }
        p {
          font-family: "Syne";
          font-size: 3rem;
          color: #181818;
          cursor: pointer;
          transition: 0.5s;
          &:hover {
            color: #a52a2a9c;
          }
        }
        div.image {
          cursor: pointer;
          overflow: hidden;
          &:hover img {
            transform: scale(1.1);
          }
          img {
            width: 100%;
            transition: 0.5s;
          }
        }
      }
      div.person {
        display: flex;
        align-items: center;
        margin: 2em 0;
        div.details {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          align-self: center;
          margin-left: 0.5em;
          h2 {
            font-family: "Syne";
            font-size: 1rem;
            color: #181818;
            font-weight: 400;
            margin: 0;
          }
          h3 {
            font-family: "Syne";
            font-size: 1rem;
            color: #181818;
            font-weight: 400;
            margin: 0;
          }
        }
        img {
          width: 3em;
          height: 3em;
          border-radius: 50%;
        }
      }
    }
  }
}
/*Autor*/
section.author {
  div.container {
    border-bottom: 1px solid #b3adad;
    padding-bottom: 2em;
    div.author {
      display: flex;
      justify-content: space-between;
      margin-bottom: 3em;
      h2 {
        font-family: "Syne";
        color: #181818;
        font-size: 1.1rem;
      }
      div.box {
        display: flex;
        justify-content: space-between;
        h2 {
          margin-right: 0.5em;
        }
        svg {
          width: 1em;
        }
      }
    }
    div.content {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
      @media (min-width: 992px) and (max-width: 1199px) {
        & {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        }
      }
      @media (max-width: 991px) {
        & {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          div.img-box {
            align-self: flex-end;
          }
        }
      }
      div.box1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 3em;
        div.det {
          display: flex;
          justify-content: center;
          align-items: center;
          h2 {
            font-family: "Syne";
            color: #181818;
            font-size: 1.1rem;
          }
          div.span1 {
            display: flex;
            justify-content: space-around;
            margin-left: 1em;
            align-items: center;
          }
          ::marker {
            color: #b3adad;
          }
          h2 {
            font-family: "Syne";
            color: #181818;
            font-size: 1.1rem;
            font-weight: 400;
          }
        }
        div.span2 {
          display: flex;
          justify-content: space-around;
          align-items: center;
          margin-left: 1em;
          ::marker {
            color: #b3adad;
          }
          h2 {
            font-family: "Syne";
            color: #181818;
            font-size: 1.1rem;
            font-weight: 400;
          }
        }
        div.person {
          display: flex;
          align-items: center;
          div.info {
            h2 {
              margin: 0;
              font-family: "Syne";
              color: #181818;
              font-size: 1.1rem;
              font-weight: 400;
            }
            p {
              margin: 0;
              font-family: "Syne";
              color: #181818;
              font-size: 1.1rem;
              font-weight: 400;
            }
          }
          img {
            width: 2.5em;
            height: 2.5em;
            border-radius: 50%;
          }
        }
      }
      div.box2 {
        margin-bottom: 3em;
        p {
          font-family: "Syne";
          font-size: 3rem;
          cursor: pointer;
          transition: 0.5s;
          &:hover {
            color: #a52a2a9c;
          }
        }
        h5 {
          font-family: "Syne";
          font-size: 1rem;
          font-weight: 300;
        }
      }
      div.box3 {
        display: flex;
        flex-direction: column;
        margin-right: 2em;
        div.date {
          align-self: flex-end;
          h2 {
            font-family: "Syne";
            font-weight: 300;
            font-size: 1rem;
          }
        }
        div.img-box {
          display: flex;
          justify-content: flex-end;
          div.img {
            cursor: pointer;
            overflow: hidden;
            &:hover img {
              transform: scale(1.1);
            }
            img {
              transition: 0.5s;
            }
          }
          div.first_img {
            width: 35%;
            padding-bottom: 0;
            img {
              height: 100%;
              width: 100%;
            }
          }
          div.imgs {
            margin-left: 0.5em;
            width: 25%;
            padding-bottom: 0;
            div.second-img img,
            div.third-img img {
              width: 100%;
              height: 50%;
            }
            div.third-img img {
              margin-top: 0.5em;
            }
          }
        }
      }
    }
  }
}
/*Nav*/
section.nav {
  margin-top: 3em;
  div.container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    @media (min-width: 992px) and (max-width: 1199px) {
      & {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        div.box_three {
          align-self: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          div.img {
            img {
              margin: 0 auto;
              height: 5em;
            }
          }
        }
      }
    }
    @media (max-width: 991px) {
      & {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        div.box_three {
          align-self: center;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          div.img {
            img {
              margin: 0 auto;
            }
          }
        }
      }
    }
    div.box_one {
      display: flex;
      div.first {
        h3 {
          font-family: "Syne";
          font-weight: 600;
          font-size: 1rem;
        }
        p {
          font-family: "Syne";
          font-weight: 600;
          font-size: 1rem;
        }
      }
      div.box {
        display: flex;
        ::marker {
          color: #b3adad;
        }
        div.col {
          h3 {
            font-family: "Syne";
            font-weight: 400;
            font-size: 1rem;
          }
          p {
            font-family: "Syne";
            font-weight: 400;
            font-size: 1rem;
          }
        }
      }
    }
    div.box_two {
      p {
        font-family: "Syne";
        font-size: 1.5rem;
        font-weight: 500;
        color: #181818;
      }
    }
    div.box_three {
      div.date {
        display: flex;
        justify-content: flex-end;
        h2 {
          font-family: "Syne";
          font-weight: 400;
          font-size: 1rem;
        }
      }
      div.img {
        height: 50%;
        display: flex;
        justify-content: flex-end;
        overflow: hidden;
        cursor: pointer;
        &:hover img {
          transform: scale(1.1);
        }
        img {
          width: 50%;
          height: 100%;
          transition: 0.2s;
        }
      }
    }
  }
}
/*Cards*/
section.beau_cards {
  margin-top: 3em;
  div.container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-column-gap: 2.5em;
    @media (min-width: 992px) and (max-width: 1199px) {
      & {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
        grid-column-gap: 2.5em;
      }
    }
    @media (max-width: 991px) {
      & {
        display: grid;
        grid-template-columns: 100%;
        grid-row-gap: 3em;
      }
    }
    div.card {
      box-shadow: 1px 3px 5px #999;
      transition: 1s;
      div.img {
        overflow: hidden;
        cursor: pointer;
        &:hover img {
          transform: scale(1.1);
        }
        img {
          width: 100%;
          transition: 0.2s;
        }
      }
      div.info {
        div.date {
          display: flex;
          justify-content: space-around;
          h2 {
            font-family: "Syne";
            font-size: 1rem;
            color: #181818;
          }
          h3 {
            font-family: "Syne";
            font-size: 1rem;
            color: #181818;
            font-weight: 300;
          }
        }
        p {
          font-family: "Syne";
          font-size: 1.2rem;
          color: #181818;
          text-align: center;
        }
      }
    }
  }
}
/*Questions*/
section.ques {
  margin-top: 3em;
  div.container {
    div.asked {
      display: flex;
      justify-content: space-around;
      align-items: center;
      h1 {
        font-family: "Syne";
        font-size: 3rem;
        font-weight: 500;
        color: #181818;
      }
      p {
        font-family: "Syne";
        font-size: 1.3rem;
        font-weight: 400;
        color: #181818;
      }
    }
    div.boxes {
      div.box {
        border-bottom: 1px solid #b3adad;
        @media (max-width: 767px) {
          & {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        }
        p {
          font-family: "Syne";
          font-size: 1rem;
          font-weight: 300;
          color: #181818;
          text-align: left;
          margin-left: 2em;
          display: none;
        }
        div.icon {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 0 2em;
          h3 {
            font-family: "Syne";
            font-size: 1.4rem;
            font-weight: 200;
            color: #181818;
            transition: 0.5s;
            &:hover {
              color: #b3b2b2;
            }
          }
        }
        div.svg {
          cursor: pointer;
          svg {
            width: 0.75em;
          }
        }
      }
    }
  }
}
/*fORM*/
section.form {
  margin-top: 4em;
  padding: 3em;
  div.container {
    border-bottom: 2px solid #181818;
    padding-bottom: 5em;
    h2 {
      text-align: left;
      font-family: "Syne";
      font-size: 1rem;
      font-weight: 700;
      color: #181818;
    }
    div.content {
      display: flex;
      align-items: center;
      @media (max-width: 991px) {
        & {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }
      p {
        font-family: "Poppins";
        font-size: 1.5rem;
        font-weight: 400;
        color: #181818;
        text-align: left;
      }
      div.form {
        form {
          display: flex;
          flex-direction: column;
          input[type="email"] {
            &:focus {
              outline: none;
            }
            border: none;
            border-bottom: 1px solid #b3adad;
            padding: 1em 0;
            &::placeholder {
              font-family: "Syne";
              font-size: 0.9rem;
            }
          }
          div.check {
            cursor: pointer;
            input[type="checkbox"] {
              margin-right: 0.5em;
              &:checked {
                box-shadow: 0 0 10px 2.5px #6d88e3;
              }
            }
            label {
              font-family: "Syne";
              color: #999;
              font-size: 0.8rem;
            }
          }
        }
        button {
          background-color: transparent;
          color: #181818;
          font-family: "Syne";
          width: 10em;
          height: 3em;
          font-size: 1rem;
          font-weight: 600;
          margin-top: 1.5em;
          border-radius: 2em;
          transition: 0.5s;
          cursor: pointer;
          &:hover {
            border-color: transparent;
          }
        }
      }
    }
  }
}
/*DATES*/
section.dates {
  div.container {
    div.comment {
      display: flex;
      justify-content: space-between;
      h3 {
        font-family: "Syne";
        font-size: 1.1rem;
        font-weight: 600;
        color: #181818;
      }
      div.see {
        display: flex;
        justify-content: space-between;
        svg {
          width: 1em;
          margin-left: 0.5em;
        }
      }
    }
    div.content {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
      column-gap: 2em;
      margin-top: 3em;
      justify-items: center;
      div.box {
        box-shadow: 1px 1px 3px 2px #b3b2b2;
        padding: 1em;
        transition: 0.4s;
        @media (max-width: 1199px) {
          & {
            margin-bottom: 2em;
          }
        }
        cursor: pointer;
        &:hover {
          transform: translateY(-20px);
        }
        div.con {
          display: flex;
          justify-content: space-between;
          h3 {
            font-family: "Syne";
            font-size: 0.9rem;
            font-weight: 400;
            color: #181818;
          }
          div.date,
          div.comm {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: center;
          }
        }
        div.para {
          p {
            font-size: 1.2rem;
            text-align: left;
            font-family: "Poppins";
            font-weight: 400;
            color: #181818;
          }
        }
      }
    }
  }
}
/*PIECES*/
section.pieces {
  margin-top: 5em;
  div.container {
    div.art {
      display: flex;
      justify-content: space-between;
      h2 {
        font-family: "Syne";
        font-weight: 600;
        font-size: 1.1rem;
        color: #181818;
      }
    }
    div.boxes {
      margin: 4em 1em;
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(190px, 1fr));
      grid-column-gap: 1em;
      div.box {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        max-height: 100%;
        box-shadow: 1px 1px 2px 2px #b3b2b2;
        @media (max-width: 1199px) {
          & {
            margin-bottom: 1em;
          }
        }
        div.img {
          overflow: hidden;
          cursor: pointer;
          &:hover img {
            transform: scale(1.2);
          }
          img {
            transition: 0.5s;
            width: 100%;
          }
        }
        div.icons {
          display: flex;
          justify-content: flex-start;
          margin-left: 1em;
          div.icon {
            display: flex;
            justify-content: space-between;
            margin-left: 0.5em;
            svg {
              width: 1em;
            }
            h6 {
              font-size: 1em;
              font-family: "Syne";
              font-weight: 400;
              margin-left: 0.5em;
            }
          }
        }
      }
      div.pa {
        p {
          margin-left: 1em;
          font-family: "Syne";
          font-size: 1rem;
          color: #181818;
          text-align: left;
        }
      }
    }
  }
}
/*Footer*/
footer {
  margin-top: 5em;
  div.container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(270px, 1fr));
    align-content: center;
    margin-right: 5em;
    margin-left: 2.5em;
    @media (min-width: 992px) and (max-width: 1199px) {
      & {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        align-content: center;
        margin-right: 5em;
        margin-left: 2.5em;
      }
    }
    @media (max-width: 991px) {
      & {
        display: grid;
        grid-template-columns: 100%;
      }
    }
    div.box-one {
      text-align: left;
      @media (max-width: 991px) {
        & {
          text-align: center;
        }
      }
      h2 {
        @media (max-width: 991px) {
          & {
            text-align: center;
          }
        }
        font-size: 1.2rem;
        font-family: "Syne";
        font-weight: 500;
        color: #181818;
        text-align: left;
        width: 100%;
      }
      p {
        font-size: 1rem;
        font-family: "Syne";
        font-weight: 400;
        color: #181818;
      }
    }
    div.box-four {
      ul {
        li {
          display: flex;
          gap: 0.5em;
          align-items: center;
          margin-bottom: 1.2rem;
          div.blackbox {
            background-color: #181818;
            color: white;
            padding: 0.2em;
            border-radius: 2em;
            text-align: center;
            font-size: 1rem;
          }
        }
      }
    }
    div.box {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      @media (max-width: 767px) {
        & {
          ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            div.lis {
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
              gap: 0.5em;
              width: 100%;
              li {
                display: flex;
                align-items: center;
                justify-content: center;
              }
            }
          }
        }
      }
      @media (min-width: 768px) and (max-width: 991px) {
        & {
          ul {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            div.lis {
              display: flex;
              gap: 0.5em;
              width: 100%;
              li {
                display: flex;
                align-items: center;
                justify-content: center;
              }
            }
          }
        }
      }
      ul {
        padding: 0;
        text-align: left;
        h2.title {
          margin-bottom: 1em;
          color: #b3adad;
          font-family: "Poppins";
          font-weight: 400;
        }
        li {
          h2 {
            font-family: "Syne";
            color: #181818;
            font-weight: 700;
            font-size: 1rem;
            transition: 0.3s;
            &:hover {
              color: #a52a2a9c;
            }
          }
          list-style: none;
          a {
            text-decoration: none;
            color: #181818;
            font-family: "Syne";
            font-size: 1rem;
            font-weight: 700;
            transition: 0.3s;
            &:hover {
              color: #a52a2a9c;
            }
          }
          svg {
            width: 0.8em;
          }
        }
      }
    }
  }
}
</style>
