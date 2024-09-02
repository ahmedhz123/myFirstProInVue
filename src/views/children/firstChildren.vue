<template>
  <div class="comp_one">
    <div class="container">
      <div class="beau">
        <h4>BEAUTIFUL</h4>
        <p>A LOT OF CUSTOMER</p>
      </div>
      <div class="quality">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path
            fill="#121212"
            d="M372.2 52c0 20.9-12.4 39-30.2 47.2L448 192l104.4-20.9c-5.3-7.7-8.4-17.1-8.4-27.1c0-26.5 21.5-48 48-48s48 21.5 48 48c0 26-20.6 47.1-46.4 48L481 442.3c-10.3 23-33.2 37.7-58.4 37.7l-205.2 0c-25.2 0-48-14.8-58.4-37.7L46.4 192C20.6 191.1 0 170 0 144c0-26.5 21.5-48 48-48s48 21.5 48 48c0 10.1-3.1 19.4-8.4 27.1L192 192 298.1 99.1c-17.7-8.3-30-26.3-30-47.1c0-28.7 23.3-52 52-52s52 23.3 52 52z"
          />
        </svg>
        <h4>CUSTOMER QUALITY</h4>
        <P
          >Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum ratione
          sapiente rem recusandae ut, qndus nostrum numquam!</P
        >
      </div>
      <div class="date"><p>OCTOBER 21, 2022</p></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div.comp_one {
  margin-top: 3em;
  div.container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25em, 1fr));
    & {
      @media (max-width: 420px) {
        & {
          display: flex;
          flex-direction: column;
          align-items: center;
          align-content: center;
          justify-content: center;
          div.beau {
            display: flex;
            flex-direction: column;
            align-items: center;
            align-content: center;
            justify-content: center;
            h4 {
              margin: 0 auto;
            }
          }
        }
      }
    }
    svg {
      width: 25px;
    }
    div.beau {
      display: flex;
      justify-content: space-around;
      align-items: flex-start;
      h4 {
        font-family: "Syne";
        color: #181818;
        font-weight: 700;
      }
      p {
        color: #181818;
        font-family: "Poppins";
        font-weight: 500;
      }
    }
    div.quality {
      display: flex;
      flex-direction: column;
      align-items: center;
      h4 {
        font-family: "Poppins";
        font-weight: 400;
        color: #181818;
      }
      p {
        color: #181818;
        font-family: "Syne";
        font-size: 2rem;
        width: 100%;
        text-align: center;
      }
    }
    div.date {
      p {
        font-family: "Syne";
        font-weight: 600;
        color: #181818;
      }
    }
  }
}
</style>
