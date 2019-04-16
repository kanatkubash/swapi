<template>
  <div>
    <div class="card">
      <header class="card-header">
        <router-link :to="`/characters/${characterId}`"
                     class="card-header-title is-flex apart">
          <span>{{character.name}}</span>
          <span>{{character.birth_year}}</span>
        </router-link>
      </header>
      <div class="card-content">
        <div class="content">
          <span class="is-flex apart">
            <b>Height:</b><span>{{character.height}}</span>
          </span>
          <span class="is-flex apart">
            <b>Mass:</b><span>{{character.mass}}</span> </span>
          <span class="is-flex apart">
            <b>Hair color:</b><span>{{character.hair_color}}
            </span>
          </span>
          <span class="is-flex apart">
            <b>Skin color:</b><span>{{character.skin_color}}
            </span>
          </span>
          <span class="is-flex apart">
            <b>Eye color:</b><span>{{character.eye_color}}
            </span>
          </span>
        </div>
      </div>
      <footer class="card-footer">
        <p class="subtitle is-6">
          {{character.starships.length}} ships,
          {{character.vehicles.length}} vehicles
        </p>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: ['character'],

  computed: {
    characterId() {
      return this.character.url.match(/^.*\/(\d+)\/$/)[1];
    },
  },
};
</script>

<style scoped lang="scss">
</style>
