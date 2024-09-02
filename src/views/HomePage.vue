<template>
  <header>
    <div class="container">
      <div class="title"><h3>PostM5</h3></div>
      <div class="list">
        <ul>
          <li><router-link :to="{ name: 'home' }">HOME</router-link></li>
          <li><a href="#demo">LIVE DEMO</a></li>
          <li><a href="#demobl">LIVE DEMO BLOCKS</a></li>
        </ul>
        <div class="btn">
          <button>BUY NOW</button>
        </div>
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
  <!-- Description -->
  <section class="description">
    <div class="container">
      <div class="info">
        <div class="headings">
          <h4>DESCRIPTION BY POWER</h4>
          <h1>PostM5 Theme</h1>
        </div>
        <p>
          PostM5 is a theme for blogging, art portfolio, aesthetic photo
          gallery, visual graphics professionally, artworks news, exhibitions,
          decor, fashion blog, mens style blog.
        </p>
        <div class="btns">
          <button class="black">BUY NOW</button>
          <button class="white">LIVE DEMO</button>
        </div>
      </div>
      <div class="img">
        <img src="../assets/circle.jpg" />
      </div>
    </div>
  </section>
  <!-- Image -->
  <section class="img">
    <img src="../assets/postm5.jpg" />
  </section>
  <!-- Main Projects -->
  <section class="projects" id="demo">
    <div class="container">
      <h1>Our Main Projects</h1>
      <div class="boxes">
        <div class="box1">
          <router-link :to="{ name: 'ArtsView' }">
            <img src="../assets/box1.jpg" />
          </router-link>
          <h2>Artworks &amp; Exhibitions News</h2>
        </div>
        <div class="box2">
          <router-link :to="{ name: 'home' }">
            <img src="../assets/box2.jpg" />
          </router-link>
          <h2>Mens Style Blog</h2>
        </div>
      </div>
    </div>
  </section>
  <!-- Video Section -->
  <section class="video">
    <h1>Video Action</h1>
    <iframe
      width="1108"
      height="623"
      src="https://www.youtube.com/embed/SUnTO772hIw"
      title="Blogging Website Template | Art portfolio Website builder"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen
    ></iframe>
  </section>
  <!-- Cover -->
  <section class="cover" id="demobl">
    <div class="container">
      <img src="../assets/cover2.jpg" />
      <div class="demo">
        <h1>Live Demo Blocks</h1>
        <button>LIVE DEMO</button>
      </div>
    </div>
  </section>
  <!-- Footer -->
  <footer>
    <p>&copy; CopyRight 2030 Mobirise - All Rights Reserved</p>
  </footer>
</template>
<script>
export default {
  methods: {
    displayList() {
      let list = document.querySelector("div.list");
      let toggle = document.querySelector("div.toggle");
      let ul = document.querySelector("div.list ul");
      let container = document.querySelector("header div.container");
      let lis = document.querySelectorAll("ul li");
      let btnDiv = document.querySelector("div.list div.btn");
      let btn = document.querySelector("div.list div.btn button");
      toggle.addEventListener("click", () => {
        container.style.cssText = `
          position: relative;
          margin-bottom: 15em;
          text-align: left;
          `;
        list.style.cssText = `
          display: flex;
          position: absolute;
          top: 50%;
          left: -50%;
          padding: 4em;
          width: 100%;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          `;
        btnDiv.style.cssText = `
          margin: 0 auto;
          display: flex;
          justiy-content: flex-start;
        `;
        btn.style.cssText = `
          margin-top: -2em;
          margin-left: auto;
        `;
        lis.forEach((e) => {
          e.style.cssText = `
              padding: 0.5em;
              text-align: left;
              `;
        });
        ul.style.cssText = `
            display: flex;
            flex-direction: column;
            align-self: flex-start;
            `;
      });
      toggle.addEventListener("dblclick", () => {
        list.style.display = "none";
        container.style.marginBottom = "auto";
      });
    },
  },
};
</script>

<style scoped lang="scss">
body {
  overflow: none;
}
/* Header */
header {
  padding-top: 2em;
  padding-bottom: 4em;
  .container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 991px) {
      & {
        display: flex;
        justify-content: space-between;
        align-items: center;
        align-content: center;
        margin: 0 3em;
      }
    }
    div.toggle {
      cursor: pointer;
    }
    div.toggle {
      @media (min-width: 992px) {
        display: none;
      }
      svg {
        width: 1.5em;
        height: 1.5em;
      }
    }
    div.title {
      h3 {
        font-family: "Syne";
        font-weight: 700;
        color: #181818;
        font-size: 1.5rem;
      }
    }
    div.list {
      @media (max-width: 991px) {
        & {
          display: none;
        }
      }
      display: flex;
      gap: 4em;
      justify-content: space-evenly;
      width: 80%;
      ul {
        display: flex;
        justify-content: center;
        list-style: none;
        gap: 3em;
        margin: auto;
        li {
          a {
            text-decoration: none;
            font-family: "Syne";
            color: #181818;
            font-weight: 700;
            font-size: 1rem;
            transition: all 1s ease;
            &:hover {
              color: #999;
            }
          }
        }
      }
    }
    div.btn {
      box-sizing: border-box;
      margin-left: 5em;
      button {
        font-family: "Syne";
        background-color: transparent;
        width: 8.5em;
        height: 3.5em;
        border-radius: 2em;
        border: 1px solid #181818;
        color: #181818;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: border-color 0.5s ease;
        &:hover {
          border-color: transparent;
        }
      }
    }
  }
}
/*Description*/
section.description {
  @media (min-width: 992px) and (max-width: 1199px) {
    & {
      overflow: hidden;
      .container {
        display: flex;
        justify-content: space-around;
        align-items: center;
      }
    }
  }
  @media (max-width: 991px) {
    & {
      overflow: hidden;
    }
    div.container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      div.img {
        width: 100%;
        img {
          width: 100%;
        }
      }
      div.info {
        display: flex;
        margin-bottom: 1.5em;
        flex-direction: column;
        align-items: flex-start;
        align-content: center;
        justify-content: center;
        height: 20%;
        width: 50%;
        div.headings {
          align-self: center;
          text-align: center;
        }
        h1 {
          font-size: 2rem;
        }
        h4 {
          font-size: 1rem;
        }
        p {
          max-height: 30%;
          width: 100%;
        }
        div.btns {
          width: 100%;
          align-self: center;
          box-sizing: border-box;
        }
      }
    }
  }
  margin-top: 4em;
  overflow: hidden;
  font-family: "Syne";
  color: #181818;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    div.img {
      width: 50%;
    }
    div.info {
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: space-around;
      margin-left: 2em;
      align-content: center;
      height: 50vh;
      h4 {
        font-weight: 700;
      }
      h1 {
        font-size: 4rem;
        letter-spacing: -0.07em;
        font-weight: 400;
        font-stretch: expanded;
        word-spacing: -0.1em;
        margin: auto 0;
      }
      p {
        width: 50%;
      }
    }
    div.btns {
      @media (max-width: 368px) {
        & {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
      }
      button.white {
        font-family: "Syne";
        background-color: transparent;
        width: 8.5em;
        height: 3em;
        border-radius: 2em;
        border: 1px solid #181818;
        color: #181818;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        margin: 1em;
        transition: border-color 0.5s ease;
        &:hover {
          border-color: transparent;
        }
      }
      button.black {
        font-family: "Syne";
        background-color: #181818;
        width: 8.5em;
        height: 3em;
        border-radius: 2em;
        transition: all 1s ease;
        border: 1px solid #181818;
        color: #181818;
        font-size: 1rem;
        color: white;
        font-weight: 600;
        cursor: pointer;
        &:hover {
          background-color: black;
        }
      }
    }
  }
}
/*Image*/
section.img {
  height: auto;
  margin: 5em auto;
  img {
    width: 100%;
  }
}
/*Projects*/
section.projects {
  div.container {
    @media (max-width: 768px) {
      & {
        div.boxes {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          div {
            margin-bottom: 3em;
          }
        }
      }
    }
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    h1 {
      font-family: "Syne";
      color: #181818;
      font-size: 3rem;
      letter-spacing: -0.07em;
      font-weight: 400;
      font-stretch: expanded;
      word-spacing: -0.1em;
      margin: auto 0;
    }
    div.boxes {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 100%;
      margin-top: 4em;
      div.box1,
      div.box2 {
        width: 100%;
        transition: transform 1s ease;
        h2 {
          font-family: "Syne";
          color: #181818;
          font-weight: 400;
          font-size: 1.5rem;
        }
        &:hover {
          transform: translateY(-5%);
        }
      }
      img {
        width: 70%;
        cursor: pointer;
      }
    }
  }
}
/*Video*/
section.video {
  background-color: #181818;
  padding: 3em;
  h1 {
    color: white;
    font-family: "Poppins";
    font-size: 3.5rem;
    letter-spacing: -0.029em;
    word-spacing: -0.2em;
    font-weight: 400;
  }
  iframe {
    width: 100%;
  }
}
/*Cover*/
section.cover {
  padding: 2em;
  margin-top: 2em;
  div.container {
    @media (max-width: 600px) {
      & {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: center;
        div.demo {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 1.5em auto;
          justify-content: center;
        }
      }
    }
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 50%;
      height: 50%;
    }
    div.demo {
      width: 50%;
      h1 {
        color: #181818;
        font-family: "Syne";
        font-size: 3rem;
        font-weight: 500;
        word-spacing: -0.2em;
        letter-spacing: -0.029em;
      }
      button {
        font-family: "Syne";
        background-color: transparent;
        width: 8.5em;
        height: 3em;
        border-radius: 2em;
        border: 1px solid #181818;
        color: #181818;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        margin: 1em;
        transition: border-color 0.5s ease;
        &:hover {
          border-color: transparent;
        }
      }
    }
  }
}
/*Footer*/
footer {
  p {
    font-family: "Poppins";
    color: #999;
  }
}
</style>
