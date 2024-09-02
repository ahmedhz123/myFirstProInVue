<template>
  <div class="comp_two">
    <div class="container">
      <div class="beau">
        <h4>BEAUTIFUL</h4>
        <p>A LOT OF CUSTOMER</p>
      </div>
      <div class="quality">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.-->
          <path
            fill="#9fa2a8"
            d="M0 336c0 79.5 64.5 144 144 144l368 0c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"
          />
        </svg>
        <h4>CUSTOMER QUALITY</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          nobis quidem neque amet aperiam id non? A veritatis eos culpa.
        </p>
      </div>
      <div class="date"><p>OCTOBER 15, 2022</p></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
div.comp_two {
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
