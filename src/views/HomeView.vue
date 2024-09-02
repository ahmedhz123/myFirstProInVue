<template>
  <header>
    <div class="container">
      <div class="img">
        <img src="../assets/logo (1).png  " />
      </div>
      <div class="list">
        <ul>
          <li><router-link :to="{ name: 'HomePage' }">Home</router-link></li>
          <li><a href="#fashion">Fashion</a></li>
          <li><a href="#blog">Our Blog</a></li>
          <li><a href="#comment">Comment</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#gallery">Gallery</a></li>
        </ul>
        <transition name="btn">
          <button>Buy Now</button>
        </transition>
      </div>
      <div class="toggle" @click="displayList()">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path
            fill="#212121"
            d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"
          />
        </svg>
      </div>
    </div>
  </header>
  <section>
    <div class="des">
      <div class="img">
        <img src="../assets/image3.jpg" />
        <div class="name">James Evans</div>
      </div>
    </div>
    <div class="blog"><h1>Mens Style Blog</h1></div>
    <div><button>SEE ALL</button></div>
    <div class="icons">
      <h4>CONNECTO .</h4>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        style="width: 15px; color: #181818"
      >
        <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
        <path
          d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        style="width: 15px; color: #181818"
      >
        <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
        <path
          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
        />
      </svg>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        style="width: 15px; color: #181818"
      >
        <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
        <path
          d="M352 256c0 22.2-1.2 43.6-3.3 64l-185.3 0c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64l185.3 0c2.2 20.4 3.3 41.8 3.3 64zm28.8-64l123.1 0c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64l-123.1 0c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32l-116.7 0c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0l-176.6 0c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0L18.6 160C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192l123.1 0c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64L8.1 320C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6l176.6 0c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352l116.7 0zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6l116.7 0z"
        />
      </svg>
    </div>
  </section>
  <!--Amzing prices-->
  <section class="prices">
    <div class="container">
      <h1>Our Prices Amazing</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, temporibus
        quod! Sequi vel
      </p>
      <div class="prices">
        <h2>$2<span class="five">5</span>|<span class="fifty">$50</span></h2>
      </div>
    </div>
  </section>
  <!-- Designers -->
  <section class="designers" id="fashion">
    <img class="first" src="../assets/image11.jpg" />
    <div class="cont">
      <div class="simple">
        <p class="first">SIMPLE</p>
        <p>FASHION</p>
        <p>650 VIEWS</p>
      </div>
      <div class="gentle">
        <h1>Every Gentle Man Should Subscribe To</h1>
        <div class="mens">
          <div class="first">
            <img src="../assets/image17.jpg" />
            <div class="info">
              <p class="name">RAFAEL ARNOLD</p>
              <p class="job">Stylist</p>
            </div>
          </div>
          <div class="second">
            <img src="../assets/image14.jpg" />
            <div class="info">
              <p class="name">LARRY WALTERS</p>
              <p class="job">Fashion Designer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--Big Section-->
  <section class="big">
    <div class="ideas">
      <div class="men">
        <h3>MEN REALLY</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
          aut cupiditate dignissimos dolorem facere facilis id incidunt
          laudantium minus mollitia natus odit pariatur placeat praesentium,
          quas reprehenderit sequi vitae.
        </p>
      </div>
      <div class="fashion">
        <h3>OLD FASHIONED</h3>
        <p>
          Praesentium, quas reprehenderit sequi vitae. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Animi consectetur cum eligendi
          eveniet fuga inventore iure libero maiores molestiae nulla porro quam
          quia quibusdam, quis.
        </p>
      </div>
      <div class="arm">
        <h3>ARM IDEAS</h3>
        <p>
          Ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur
          cum eligendi eveniet fuga inventore iure libero maiores molestiae
          nulla porro quam quia quibusdam, quis, ratione sint veniam voluptas
          voluptatem consectetur cum.
        </p>
      </div>
    </div>
    <div class="nextPost">
      <h4>Next Post</h4>
      <h1>Make an Old Fashioned</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi
        et eum ipsum iste obcaecati quaerat voluptate.
      </p>
      <hr />
    </div>
    <div class="boxes">
      <div class="container">
        <div class="donation">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M312 24l0 10.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3s0 0 0 0c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8l0 10.6c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-11.4c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2L264 24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5L192 512 32 512c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l36.8 0 44.9-36c22.7-18.2 50.9-28 80-28l78.3 0 16 0 64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0-16 0c-8.8 0-16 7.2-16 16s7.2 16 16 16l120.6 0 119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384c0 0 0 0 0 0l-.9 0c.3 0 .6 0 .9 0z"
            />
          </svg>
          <h3>Featuring donations</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            asperiores blanditiis ducimus, et. exercitationem id incidunt iste
            neque obcaecati, perferendis provident veniam vitae voluptatibus!
            Adipisci corporis cumque provident velit voluptate.
          </p>
        </div>
        <div class="industry">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M137.4 502.6c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 402.7 192 288l352 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0 0-114.7 41.4 41.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L384 109.3 384 224l-192 0-64 0-96 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l96 0 0 114.7L86.6 361.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96zM128 192l64 0 0-128c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 128zM448 320l-64 0 0 128c0 17.7 14.3 32 32 32s32-14.3 32-32l0-128z"
            />
          </svg>
          <h3>Across the industry</h3>
          <p>
            Exercitationem id incidunt iste neque obcaecati, perferendis
            provident veniam vitae.
          </p>
        </div>
        <div class="raise">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M318 177.5c3.8-8.8 2-19-4.6-26l-136-144C172.9 2.7 166.6 0 160 0s-12.9 2.7-17.4 7.5l-136 144c-6.6 7-8.4 17.2-4.6 26S14.4 192 24 192l72 0 0 288c0 17.7 14.3 32 32 32l64 0c17.7 0 32-14.3 32-32l0-288 72 0c9.6 0 18.2-5.7 22-14.5z"
            />
          </svg>
          <h3>Raise Money</h3>
          <p>Adipisci animi et eum ipsum iste obcaecati.</p>
        </div>
        <div class="desc">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
            <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M0 80C0 53.5 21.5 32 48 32l96 0c26.5 0 48 21.5 48 48l0 16 192 0 0-16c0-26.5 21.5-48 48-48l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-16-192 0 0 16c0 1.7-.1 3.4-.3 5L272 288l96 0c26.5 0 48 21.5 48 48l0 96c0 26.5-21.5 48-48 48l-96 0c-26.5 0-48-21.5-48-48l0-96c0-1.7 .1-3.4 .3-5L144 224l-96 0c-26.5 0-48-21.5-48-48L0 80z"
            />
          </svg>
          <h3>Describe his Project</h3>
          <p>
            Voluptatibus adipisci corporis cumque provident velit voluptate.
          </p>
        </div>
        <div class="topic">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
            />
          </svg>
          <h3>More Universal Topic</h3>
          <P
            >Consectetur adipisicing elit. Aperiam asperiores blanditiis
            ducimus.
          </P>
        </div>
        <div class="ongoing">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z"
            />
          </svg>
          <h3>Ongoing Project</h3>
          <p>
            A delectus deserunt dolores illo iste itaque iure nisi rem saepe
            temporibus.
          </p>
        </div>
      </div>
    </div>
  </section>
  <!-- Photo VIEW -->
  <section class="view">
    <div class="container">
      <h1>
        How to Pose for Photos:<br />
        The Professional Guide
      </h1>
      <ul>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              fill="#0d0d0d"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>
          <h3>Lorem Ipsum</h3>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              fill="#0d0d0d"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>
          <h3>Consectetur Elit</h3>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              fill="#0d0d0d"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>
          <h3>Animi Delectus</h3>
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
            <path
              fill="#0d0d0d"
              d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            />
          </svg>
          <h3>Impedit Libero</h3>
        </li>
      </ul>
      <button>PHOTO VIEW</button>
    </div>
  </section>
  <!-- Blog -->
  <section class="blog" id="blog">
    <div class="container">
      <img src="../assets/logo (1).png" />
      <h1>Our blog</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
        consequuntur laborum pariatur provident quis saepe ullam vel? Corporis,
        deserunt dignissimos eaque eius ex odit possimus repellat vel voluptas
        voluptatibus voluptatum.
      </p>
      <hr />
    </div>
  </section>
  <!-- Slider Comments -->
  <section class="comments" id="comment">
    <div class="container">
      <h2>SLIDER COMMENTS</h2>
      <ul>
        <li>
          <router-link :to="{ name: 'first_child' }">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              @click="this.$router.back(1)"
            >
              <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                fill="#d8d9d9"
                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"
              />
            </svg>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'second_child' }">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              @click="this.$router.go(1)"
            >
              <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
              <path
                fill="#e3e3e3"
                d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
              />
            </svg>
          </router-link>
        </li>
      </ul>
    </div>
    <transition name="router" mode="out-in">
      <router-view></router-view>
    </transition>
  </section>
  <!-- Description -->
  <section class="description">
    <div class="container">
      <div class="first_desc">
        <h4>Description</h4>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod amet et
          eos soluta eum nobis nulla tempora, omnis explicabo, non consectetur
          voluptates!
        </p>
        <br />
        <button>SEE MORE</button>
      </div>
      <div class="second_desc">
        <h1>Exciting Part The Project</h1>
      </div>
    </div>
  </section>
  <!-- Connect -->
  <section class="connect" id="contact">
    <div class="container">
      <div class="connect">
        <h1>START TO OUR CONNECT</h1>
        <form>
          <input type="email" placeholder="enter email" />
          <div class="checkbox">
            <input type="checkbox" value="ch" name="checkbox" id="ch" />
            <label for="ch"
              >Accusamus consequuntur culpa deleniti esse eveniet, itaque neque,
              porro, sed sit totam ullam unde veritatis voluptatem. Accusantium
              ea quia.</label
            >
          </div>
          <button>SUBSCRIBE</button>
        </form>
      </div>
      <div class="agree">
        <p>
          You confirm that you have read and are agreeing to our terms of use
          regarding the storage of the data.
        </p>
      </div>
    </div>
  </section>
  <!--Image-->
  <section class="img">
    <div class="container">
      <img src="../assets/background3.jpg" />
    </div>
  </section>
  <!--Social Content-->
  <section class="social" id="gallery">
    <div class="container">
      <div class="social_content">
        <h3>SOCIAL CONTENT</h3>
        <button>SEE ALL</button>
        <div class="gallery">
          <div class="box1 box">
            <div class="content_one">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  fill="#ffffff"
                  d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                />
              </svg>
              <sup>8</sup>
            </div>
            <div class="content_two">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  d="M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z"
                />
              </svg>
              <sup>3</sup>
            </div>
          </div>
          <div class="box2 box">
            <div class="content_one">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  fill="#ffffff"
                  d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                />
              </svg>
              <sup>4</sup>
            </div>
            <div class="content_two">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  d="M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z"
                />
              </svg>
              <sup>6</sup>
            </div>
          </div>
          <div class="box3 box">
            <div class="content_one">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  fill="#ffffff"
                  d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                />
              </svg>
              <sup>9</sup>
            </div>
            <div class="content_two">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  d="M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z"
                />
              </svg>
              <sup>5</sup>
            </div>
          </div>
          <div class="box4 box">
            <div class="content_one">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  fill="#ffffff"
                  d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                />
              </svg>
              <sup>3</sup>
            </div>
            <div class="content_two">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  d="M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z"
                />
              </svg>
              <sup>1</sup>
            </div>
          </div>
          <div class="box5 box">
            <div class="content_one">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  fill="#ffffff"
                  d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                />
              </svg>
              <sup>10</sup>
            </div>
            <div class="content_two">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  d="M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z"
                />
              </svg>
              <sup>8</sup>
            </div>
          </div>
          <div class="box6 box">
            <div class="content_one">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  fill="#ffffff"
                  d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                />
              </svg>
              <sup>20</sup>
            </div>
            <div class="content_two">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  d="M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z"
                />
              </svg>
              <sup>10</sup>
            </div>
          </div>
          <div class="box7 box">
            <div class="content_one">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  fill="#ffffff"
                  d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                />
              </svg>
              <sup>9</sup>
            </div>
            <div class="content_two">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  d="M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z"
                />
              </svg>
              <sup>8</sup>
            </div>
          </div>
          <div class="box8 box">
            <div class="content_one">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  fill="#ffffff"
                  d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                />
              </svg>
              <sup>12</sup>
            </div>
            <div class="content_two">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  d="M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z"
                />
              </svg>
              <sup>11</sup>
            </div>
          </div>
          <div class="box9 box">
            <div class="content_one">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  fill="#ffffff"
                  d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                />
              </svg>
              <sup>7</sup>
            </div>
            <div class="content_two">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  d="M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z"
                />
              </svg>
              <sup>6</sup>
            </div>
          </div>
          <div class="box10 box">
            <div class="content_one">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  fill="#ffffff"
                  d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                />
              </svg>
              <sup>1</sup>
            </div>
            <div class="content_two">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  d="M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z"
                />
              </svg>
              <sup>2</sup>
            </div>
          </div>
          <div class="box11 box">
            <div class="content_one">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  fill="#ffffff"
                  d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                />
              </svg>
              <sup>1</sup>
            </div>
            <div class="content_two">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  d="M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z"
                />
              </svg>
              <sup>3</sup>
            </div>
          </div>
          <div class="box12 box">
            <div class="content_one">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  fill="#ffffff"
                  d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8l0-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5l0 3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20-.1-.1s0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5l0 3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2l0-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z"
                />
              </svg>
              <sup>1</sup>
            </div>
            <div class="content_two">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
                <path
                  d="M160 368c26.5 0 48 21.5 48 48l0 16 72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6L448 368c8.8 0 16-7.2 16-16l0-288c0-8.8-7.2-16-16-16L64 48c-8.8 0-16 7.2-16 16l0 288c0 8.8 7.2 16 16 16l96 0zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3l0-21.3 0-6.4 0-.3 0-4 0-48-48 0-48 0c-35.3 0-64-28.7-64-64L0 64C0 28.7 28.7 0 64 0L448 0c35.3 0 64 28.7 64 64l0 288c0 35.3-28.7 64-64 64l-138.7 0L208 492z"
                />
              </svg>
              <sup>9</sup>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Charting -->
  <section class="charting">
    <div class="container">
      <h4>CHARTING</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
        consequuntur laborum pariatur provident quis saepe ullam vel. Corporis,
        deserunt dignissimos eaque eius ex odit possimus repellat vel voluptas
        voluptatibus voluptatum.
      </p>
    </div>
  </section>
  <!-- styleBlog -->
  <section class="styleBlog">
    <div class="container">
      <ul class="list">
        <li><router-link to="">ART</router-link></li>
        <li><router-link to="">NEWS</router-link></li>
        <li><router-link to="">BLOG</router-link></li>
        <li><router-link to="">PRIVACY POLICY</router-link></li>
        <li><router-link to="">BUY NOW</router-link></li>
      </ul>
      <div class="info">
        <h4><router-link>Mens Style Blog</router-link></h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
          architecto est explicabo fugiat in ipsa minus quia quis sunt ullam?
          Consectetur deleniti hic iure minus odio omnis provident repellat
          veniam.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    displayList() {
      let divToggle = document.querySelector("div.toggle");
      let divList = document.querySelector("div.list");
      let ul = document.querySelector("ul");
      let container = document.querySelector("div.container");
      let lis = document.querySelectorAll("div.list li");
      let btn = document.querySelector("div.list button");
      divToggle.addEventListener("click", () => {
        for (let i = 0; i < lis.length; i++) {
          lis[i].style.cssText = `
            padding: 0.5em;
          `;
        }
        btn.style.cssText = `
          align-self: flex-start;
          margin: 0.5em 4em;
        `;
        container.style.cssText = `
          position: relative;
        `;
        divList.style.cssText = `
          display: flex;
          box-sizing: border-box;
          flex-direction: column;
          position: absolute;
          top: 100%;
          left: 0;
          background-color: #181818;
          width: 100%;
        `;
        ul.style.cssText = `
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          font-size: 1.5rem;
          font-family: "Syne"
          margin-bottom: -0.2em;
        `;
      });
      divToggle.addEventListener("dblclick", () => {
        divList.style.display = "none";
      });
    },
  },
};
</script>

<style scoped lang="scss">
html {
  scroll-behavior: smooth;
}
header .container {
  @media (max-width: 991px) {
    & {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  div.toggle {
    display: flex;
    width: 30px;
    height: 30px;
    background-color: white;
    border-radius: 50%;
    font-size: 20px;
    padding: 0.3em;
    cursor: pointer;
    display: none;
    align-items: center;
    @media (max-width: 991px) {
      display: block;
    }
    svg {
      width: 25px;
      height: 25px;
      align-self: center;
    }
  }
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #181818;
  padding: 0 2em;
  div.list {
    display: flex;
    flex-direction: row;
    gap: 1.5em;
    align-self: center;
    @media (max-width: 991px) {
      & {
        display: none;
      }
    }
    @media (min-width: 992px) {
      & {
        display: flex;
      }
    }
  }
  @media (max-width: 991px) {
    header div.toggle {
      display: block;
      width: 2em;
      height: 2em;
    }
  }
  ul {
    list-style: none;
    display: flex;
    align-items: center;
    & li a {
      padding: 1em;
      text-decoration: none;
      margin-left: 1.2em;
      color: white;
      font-family: "Syne", sans-serif;
      font-weight: 400;
      font-size: 1em;
    }
  }
  img {
    width: 100px;
  }
  button {
    color: white;
    background-color: #181818;
    font-family: "Syne", sans-serif;
    font-size: 1.3em;
    height: 100px;
    font-weight: 400;
    height: 2.5em;
    width: 6em;
    border: 1.5px solid white;
    align-self: center;
    border-radius: 50px;
    transition: 2s;
    cursor: pointer;
    &:hover {
      border: none;
      color: #d3cccc;
    }
  }
}
section {
  margin-top: 5em;
  i {
    width: 10px;
    height: 10px;
    display: block;
    color: #181818;
  }
  div.des {
    display: flex;
    justify-content: center;
    img {
      width: 100px;
      margin-top: 2em;
      height: 100px;
      border-radius: 50%;
    }
    div.name {
      color: #181818;
      font-weight: 500;
      font-size: 25px;
      font-family: "Poppins";
    }
  }
  div.blog h1 {
    font-family: "Syne";
    color: #181818;
    font-size: 46px;
    font-weight: 500;
    word-spacing: -4px;
  }
  button {
    width: 139px;
    height: 50px;
    font-size: 20px;
    color: #181818;
    border-radius: 40px;
    border: 1px solid #181818;
    cursor: pointer;
    transition: 3s;
    font-family: "Syne";
    font-weight: 700;
  }
  button:hover {
    border: none;
  }
  div.icons {
    display: flex;
    justify-content: center;
    margin: 3em 2em;
    h4 {
      font-weight: 300;
      font-family: "Syne";
      margin-right: 0.7em;
    }
    svg {
      margin-left: 0.4em;
    }
  }
}
section.prices .container {
  background-image: url("../assets/background2.jpg");
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 40vh;
  padding: 3.5em;
  @media (max-width: 692px) {
    & .container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      align-content: center;
    }
    @media (max-width: 692px) {
      & {
        padding: 14em 0;
      }
    }
    @media (min-width: 693px) {
      & .container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-content: center;
        text-align: center;
        p {
          align-self: center;
          margin-left: auto;
          margin-right: auto;
        }
      }
    }
  }
  h1 {
    color: white;
    font-family: "Syne";
    font-size: 45px;
    font-weight: 400;
  }
  p {
    font-family: "Poppins";
    color: white;
    width: 50%;
    align-self: center;
    font-size: 20px;
  }
  div.prices {
    color: white;
    font-family: "Syne";
    font-size: 25px;
  }
  span.five {
    font-size: 50px;
  }
  span.fifty {
    font-size: 20px;
    color: #ddd;
    text-decoration: line-through;
    position: relative;
  }
}

/*Designers*/
section.designers {
  display: flex;
  justify-content: space-around;
  @media (max-width: 688px) {
    & {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      align-content: center;
      div.mens {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;
      }
    }
  }
  @media (max-width: 305px) {
    & {
      div.cont div.simple {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        align-content: center;
        p:not(p.first) {
          margin: 0.5em auto;
        }
      }
    }
  }
  div.gentle img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    transition: 0.5s;
  }
  div.gentle img:hover {
    transform: scale(1.2);
  }
  img.first {
    width: 50%;
  }
  div.simple {
    display: flex;
    justify-content: center;
    align-items: center;
    p.first {
      color: #181818;
      font-weight: bold;
      font-family: "Syne";
      transition: 0.5s;
    }
    p.first:hover {
      color: #696464;
    }
    p:not(p.first) {
      font-family: "Syne";
      margin-left: 50px;
    }
  }
  div.cont {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div.gentle {
      h1 {
        color: #181818;
        font-family: "Syne";
        font-size: 50px;
        font-weight: 400;
        margin-bottom: 1em;
        transition: 0.5s;
      }
      h1:hover {
        color: #696464;
      }
      div.mens {
        display: flex;
        justify-content: space-around;
        div {
          display: flex;
          justify-content: space-around;
          align-items: center;
          div.info {
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-left: 10px;
            color: #181818;
            font-family: "Syne";
            p.job {
              align-self: flex-start;
              margin-top: -0.5em;
            }
            p.name {
              transition: 0.5s;
            }
            p.name:hover {
              color: #696464;
            }
          }
        }
      }
    }
  }
}
/*Big Section*/
section.big {
  background-color: #181818;
  @media (max-width: 768px) {
    & {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding-bottom: 25em;
      p {
        width: 100%;
      }
    }
  }
  h3 {
    color: white;
    font-family: "Syne";
  }
  div.ideas {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    margin-bottom: 12em;
    padding: 5em;
    @media (max-width: 767px) {
      & {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
      }
    }
    div {
      height: 130%;
    }
    p {
      color: #8a8585;
      font-family: "Poppins";
      max-height: 75%;
    }
  }
  div.nextPost {
    margin: 2em;
    display: flex;
    align-items: center;
    flex-direction: column;
    position: relative;
    & {
      @media (max-width: 768px) {
        & {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          flex-wrap: wrap;
          p {
            max-width: 100%;
            min-width: 10%;
            height: fit-content;
          }
        }
      }
    }
    h4 {
      color: white;
      font-family: "Syne";
      font-size: 1.5rem;
    }
    h1 {
      color: white;
      font-family: "Syne";
      font-size: 4rem;
      font-weight: 400;
      word-spacing: -5px;
      margin-top: -0.25em;
    }
    p {
      color: white;
      font-family: "Poppins";
      width: 50%;
      font-size: 1.2rem;
      margin-top: -0.45em;
    }
    hr {
      width: 80%;
      color: #777;
      height: 1px;
    }
  }
}
/*Boxes*/
div.boxes {
  div.container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
    gap: 12%;
    @media (max-width: 767px) {
      & {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 12em;
        padding-bottom: -2em;
      }
      p {
        min-width: 10%;
        max-width: 100%;
      }
    }
    @media (min-width: 768px) and (max-width: 941px) {
      & {
        margin-bottom: 2em;
        padding-bottom: 32em;
      }
    }
    @media (min-width: 942px) and (max-width: 1199px) {
      & {
        padding-bottom: 25em;
      }
    }
    @media (min-width: 1200px) {
      & {
        padding-bottom: 20em;
      }
    }
    p {
      font-family: "Poppins";
      color: white;
    }
    h3 {
      font-family: "Syne";
      font-weight: 400;
    }
    svg {
      width: 25px;
      color: #fff;
    }
  }
}
/*Photo View*/
section.view {
  div.container {
    @media (max-width: 767px) {
      & ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
    h1 {
      font-family: "Syne";
      font-size: 3rem;
      font-weight: 400;
    }
    ul {
      display: flex;
      list-style: none;
      justify-content: center;
      align-items: center;
      gap: 3em;
      svg {
        width: 20px;
      }
      li {
        display: flex;
        gap: 0.25em;
        h3 {
          font-family: "Poppins";
          font-weight: 300;
        }
      }
    }
    button {
      background-color: #181818;
      color: white;
      font-weight: 400;
      transition: 0.5s;
      &:hover {
        background: black;
      }
    }
  }
}
/*Blog*/
section.blog {
  background-image: url("../assets/background2.jpg");
  padding: 4em;
  div.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 1.5em;
    margin-top: 1.5em;
    img {
      width: 20%;
      height: 20%;
    }
    h1 {
      font-family: "Syne";
      color: white;
      font-size: 3rem;
      font-weight: 400;
    }
    p {
      color: white;
      font-family: "Poppins";
      font-size: 1.5rem;
      width: 90%;
    }
    hr {
      width: 90%;
      border-bottom: 0.125px solid #333;
    }
  }
}
/*Comment*/
section.comments {
  div.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    svg {
      width: 20px;
      margin-left: 1em;
    }
    h2 {
      font-family: "Syne";
      font-size: 1rem;
    }
    ul {
      list-style: none;
      display: flex;
      justify-content: space-between;
    }
  }
  .router-enter-from {
    transform: translateX(400px);
    opacity: 0;
  }
  .router-enter-active {
    transition: all 1s ease;
  }
  .router-leave-to {
    transform: translateX(-400px);
    opacity: 0;
  }
  .router-leave-active {
    transition: all 1s ease;
  }
}
/*Description*/
section.description {
  background-image: url("../assets/background2.jpg");
  padding: 3em;
  div.container {
    & {
      @media (max-width: 520px) {
        & {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          div.second_desc h1 {
            font-size: unset;
          }
        }
      }
    }
    display: flex;
    align-items: center;
    justify-content: space-between;
    div.first_desc {
      display: flex;
      justify-content: center;
      align-items: start;
      flex-direction: column;
      p {
        text-align: left;
        color: white;
        font-family: "Syne";
        font-size: 1.5rem;
        width: 70%;
      }
      h4 {
        color: white;
        font-family: "Poppins";
        font-size: 1.5rem;
        font-weight: 400;
      }
      button {
        width: 10em;
        height: 2.8em;
        transition: all 1s ease;
        &:hover {
          background: #999;
        }
      }
    }
    div.second_desc {
      width: 50%;
      h1 {
        color: white;
        font-family: "Syne";
        font-weight: 400;
        font-size: 3rem;
        width: 100%;
      }
    }
  }
}
/*Connect*/
section.connect {
  div.container {
    display: flex;
    justify-content: center;
    margin-left: 3em;
    & {
      @media (max-width: 770px) {
        display: flex;
        flex-direction: column;
      }
    }
    h1 {
      text-align: left;
      font-family: "Syne";
      font-size: 1rem;
      margin-bottom: 2rem;
    }
    form {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      input[type="email"] {
        border: none;
        border-bottom: 1px solid #999;
        margin-bottom: 2em;
        width: 80%;
        padding: 0.95em;
      }
      input[type="email"]::placeholder {
        font-family: "Syne";
        font-size: 1rem;
      }
      input[type="email"]:focus {
        outline: none;
      }
      div.checkbox {
        align-self: flex-start;
      }
      button {
        border: none;
        outline: none;
        transition: all 0.5s ease;
        background-color: transparent;
        align-self: center;
        width: 10em;
        cursor: pointer;
        &:hover {
          background-color: #d6d2d2;
        }
      }
      label {
        font-family: "Syne";
        font-size: 0.8rem;
      }
      input[type="checkbox"]:focus {
        border: 1rem solid lightblue;
      }
    }
    div.agree {
      display: flex;
      justify-content: center;
      p {
        font-family: "Poppins";
        font-size: 1.5rem;
        width: 50%;
      }
    }
  }
}
/*Image*/
section.img {
  background: #181818;
  padding: 2em;
  img {
    width: 100%;
  }
}
/*social*/
section.social {
  div.container {
    display: flex;
    flex-direction: column;
    div.social_content {
      h3 {
        font-family: "Syne";
        color: #181818;
        font-size: 1.5rem;
      }
      button {
        color: #181818;
        background: transparent;
        border: none;
        font-family: "Syne";
        transition: all 1s ease;
        cursor: pointer;
        font-size: 1.5rem;
        &:hover {
          color: #d4d2d2;
        }
      }
    }
    div.gallery {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      height: 80vh;
      div.box {
        display: flex;
        align-items: flex-end;
        justify-content: space-around;
        color: white;
        font-family: "Syne";
        background-position: center;
        transition: all 1s ease;
        &:hover {
          transform: scale(1.1);
        }
      }
      @media (max-width: 431px) {
        & {
          padding-bottom: 30em;
          div.box {
            padding: 8em 0;
          }
        }
      }
    }
  }
  div.box1 {
    background-image: url("../assets/image8.jpg");
    background-size: cover;
  }
  div.box2 {
    background-image: url("../assets/image4.jpg");
    background-size: cover;
  }
  div.box3 {
    background-image: url("../assets/image6.jpg");
    background-size: cover;
  }
  div.box4 {
    background-image: url("../assets/image11.jpg");
    background-size: cover;
  }
  div.box5 {
    background-image: url("../assets/image4.jpg");
    background-size: cover;
  }
  div.box6 {
    background-image: url("../assets/image5.jpg");
    background-size: cover;
  }
  div.box7 {
    background-image: url("../assets/image3.jpg");
    background-size: cover;
  }
  div.box8 {
    background-image: url("../assets/image8.jpg");
    background-size: cover;
  }
  div.box9 {
    background-image: url("../assets/image6.jpg");
    background-size: cover;
  }
  div.box10 {
    background-image: url("../assets/image17.jpg");
    background-size: cover;
  }
  div.box11 {
    background-image: url("../assets/image14.jpg");
    background-size: cover;
  }
  div.box12 {
    background-image: url("../assets/image1.jpg");
    background-size: cover;
  }
  cursor: pointer;
  div.content_one,
  div.content_two {
    svg {
      width: 1em;
      z-index: 100;
    }
  }
}

/*CHARTING*/
section.charting {
  background-image: url("../assets/background2.jpg");
  padding: 5em;
  @media (max-width: 431px) {
    margin-top: 150em;
  }
  div.container {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    h4 {
      color: white;
      font-family: "Syne";
    }
    p {
      font-family: "Syne";
      color: white;
      font-size: 2.8rem;
      text-align: left;
    }
  }
  @media (max-width: 400px) {
    div.container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      p {
        text-align: center;
        font-size: unset;
      }
    }
  }
}
/*styleBlog*/
section.styleBlog {
  div.container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    ul {
      list-style: none;
      display: flex;
      gap: 1.2em;
      margin-bottom: 5em;
      align-self: center;
      li {
        margin-left: 1em;
      }
      a {
        text-decoration: none;
        color: #181818;
        font-family: "Syne";
        font-weight: 700;
      }
    }
    div.info {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      align-self: center;
    }
    @media (max-width: 767px) {
      ul {
        display: flex;
        flex-direction: column;
        align-self: center;
        margin-right: 3.5em;
      }
      div.info {
        text-align: center;
        margin: 0 auto;
      }
    }
    div.info {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 1em;
      a {
        text-decoration: none;
        font-family: "poppins";
        color: #181818;
        font-size: 1.5rem;
        font-weight: 300;
      }
      p {
        color: #181818;
        font-family: "Syne";
        font-size: 1rem;
        width: 50%;
      }
    }
  }
}
</style>
