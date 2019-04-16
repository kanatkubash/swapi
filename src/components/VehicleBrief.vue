<template>
  <div>
    <div class="card">
      <header class="card-header">
        <div class="card-header-title is-flex apart">
          <span>{{vehicle.name}}</span>
          <span>{{vehicle.birth_year}}</span>
        </div>
      </header>
      <div class="card-content">
        <div class="content">
          <span class="is-flex apart">
            <b>Manufacturer:</b><span>{{vehicle.manufacturer}}</span>
          </span>
          <span class="is-flex apart">
            <b>Class:</b><span>{{vehicle.vehicle_class}}</span>
          </span>
          <span class="is-flex apart">
            <b>Model:</b><span>{{vehicle.model}}
            </span>
          </span>
          <span class="is-flex apart">
            <b>Cost:</b><span>{{vehicle.cost_in_credits}}
            </span>
          </span>
          <span class="is-flex apart">
            <b>Crew:</b><span>{{vehicle.crew}}
            </span>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['vehicle'],
};
</script>

<style>
</style>
