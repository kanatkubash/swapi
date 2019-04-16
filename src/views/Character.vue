<template>
  <div class="container-fluid">
    <h1 class="title">{{title}}</h1>
    <div class="container">
      <character-brief v-if="character"
                       :character="character">
      </character-brief>

      <template v-if="hasShips">
        <h3 class="title">Ships</h3>
        <div class="columns">
          <ship-brief v-for="ship in starships"
                      class="column is-one-third"
                      :key="ship.url"
                      :ship="ship">
            {{ship}}
          </ship-brief>
        </div>
      </template>

      <template v-if="hasVehicles">
        <h3 class="title">Vehicles</h3>
        <div class="columns is-multiline">
          <vehicle-brief v-for="vehicle in vehicles"
                         class="column is-one-third"
                         :key="vehicle.url"
                         :vehicle="vehicle">
            {{vehicle}}
          </vehicle-brief>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { get as getById } from '@/api/people';
import { get as getShipById } from '@/api/ship';
import { get as getVehicleById } from '@/api/vehicle';
import Vue from 'vue';
import CharacterBrief from '@/components/CharacterBrief';
import ShipBrief from '@/components/ShipBrief';
import VehicleBrief from '@/components/VehicleBrief';
import { property } from 'lodash';

export default {
  props: ['id'],
  data: () => ({ character: null, starships: [], vehicles: [] }),
  components: { CharacterBrief, VehicleBrief, ShipBrief },

  async beforeMount() {
    let character = await getById(this.id);

    if (character.starships) {
      character.starships.forEach(url =>
        getShipById(url.match(/\/(\d+)\//)[1]).then(s =>
          this.starships.push(s),
        ),
      );
    }

    if (character.vehicles) {
      character.vehicles.forEach(url =>
        getVehicleById(url.match(/\/(\d+)\//)[1]).then(v =>
          this.vehicles.push(v),
        ),
      );
    }

    this.character = Vue.observable(character);
  },
  computed: {
    title() {
      return this.character ? this.character.name : '';
    },
    hasShips() {
      return property('starships.length')(this.character) || 0;
    },
    hasVehicles() {
      return property('vehicles.length')(this.character) || 0;
    },
  },
};
</script>

<style scoped>
h3 {
  margin-top: 20px;
  text-align: left;
}
</style>
