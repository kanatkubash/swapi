<template>
  <div class="container-fluid">
    <div class="tile is-ancestor">
      <div class="tile is-4 is-parent is-vertical">
        <div class="tile is-child box people">
          <router-link to="/characters">
            <p class="title">Characters</p>
          </router-link>
        </div>
        <div class="tile is-child box ships">
          <a>
            <p class="title">Ships (coming soon...)</p>
          </a>
        </div>
      </div>
      <div class="tile is-4 is-parent is-vertical">
        <div class="tile is-child box planets">
          <a>
            <p class="title">Planets (coming soon...)</p>
          </a>
        </div>
      </div>
      <div class="tile is-4 is-parent is-vertical">
        <div class="tile is-child box films">
          <a>
            <p class="title">Films (coming soon...)</p>
          </a>
        </div>
        <div class="tile is-child box vehicles">
          <a>
            <p class="title">Vehicles (coming soon...)</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import '~assets/colors.scss';

.container-fluid {
  padding: 20px;
  .box {
    border-radius: 0;
    min-height: 400px;
    padding: 0;
    display: flex;
    a {
      flex: 1 1;
      padding: 20px;
      display: flex;
      position: relative;
      .title {
        z-index: 2;
        color: $white;
      }
      &:hover:before {
        background: transparent;
      }
      &:before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(black, 0.2);
        transition: background 0.3s;
      }
    }

    &.people {
      background: url(https://www.fanjackets.com/wp-content/uploads/2015/12/Star-Wars-Han-Solo-Leather-Vest-Jacket-400x400.png);
      background-size: cover;
      a {
        align-items: flex-end;
      }
    }
    &.ships {
      background: url('https://media.wired.com/photos/592712c0f3e2356fd800b60c/master/w_1132,c_limit/rouge_3.jpg');
      background-size: cover;
      a {
        align-items: flex-end;
      }
    }
    &.planets {
      background: url('https://vignette.wikia.nocookie.net/battlefront/images/a/ae/Pillio.jpg/revision/latest/scale-to-width-down/1000?cb=20171121084150');
      background-size: cover;
      background-position: top right;
      a {
        align-items: flex-end;
      }
    }
    &.films {
      background: url('https://lumiere-a.akamaihd.net/v1/images/the-last-jedi-theatrical-poster-tall-a_6a776211.jpeg?region=0%2C53%2C1536%2C768&width=960');
      background-size: cover;
      background-position: top right;
      a {
        align-items: flex-end;
      }
    }
    &.vehicles {
      background: url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/ad2b5b64939783.5ae2a160a5b9c.jpg');
      background-size: cover;
      background-position: top right;
      a {
        align-items: flex-end;
      }
    }
  }
}
</style>
