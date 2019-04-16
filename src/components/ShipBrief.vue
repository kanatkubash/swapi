<template>
  <div>
    <div class="card">
      <header class="card-header">
        <div class="card-header-title is-flex apart">
          <span>{{ship.name}}</span>
          <span>{{ship.MGLT}}</span>
        </div>
      </header>
      <div class="card-content">
        <div class="content">
          <span class="is-flex apart">
            <b>Manufacturer:</b><span>{{ship.manufacturer}}</span>
          </span>
          <span class="is-flex apart">
            <b>Cost:</b><span>{{ship.cost_in_credits}}</span> </span>
          <span class="is-flex apart">
            <b>Model:</b><span>{{ship.model}}
            </span>
          </span>
          <span class="is-flex apart">
            <b>Class:</b><span>{{ship.starship_class}}
            </span>
          </span>
          <span class="is-flex apart">
            <b>Crew:</b><span>{{ship.crew}}
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['ship'],
};
</script>

<style>
</style>
