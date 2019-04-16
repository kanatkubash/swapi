<template>
  <div class="container-fluid">
    <h1 class="title">Characters</h1>
    <div class="container">
      <input class="input"
             type="text"
             placeholder="Enter character name to search.Type @ to view all. Search is debounced"
             @input="handleInput"
             v-model.trim="searchTerm">
      <div class="body">
        <h3 class="subtitle"
            :class="{searching}">
          <template v-if="searching">
            <span v-if="searchTerm=='@'">Fetcing all</span>
            <span v-else>Searching {{searchTerm}}</span>
          </template>
          <span v-else-if="searchDone">
            Search results
            ({{peoples.length}} characters)</span>
        </h3>
        <transition-group name="fade-in"
                          duration="300"
                          tag="div"
                          class="columns is-multiline is-7">
          <character-brief v-for="character in peoples"
                           class="column is-one-third"
                           :key="character.url"
                           :character="character">
          </character-brief>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { debounce } from '@/helpers/decorators';
// import { sleepMs } from '@/helpers';
import { getAll, search } from '@/api/people';
import CharacterBrief from '@/components/CharacterBrief';

const SEARCH_IDLE = 0;
const SEARCH_SEARCHING = 1;
const SEARCH_DONE = 2;

export default {
  props: ['q'],
  data: () => ({
    searchTerm: null,
    searchState: SEARCH_IDLE,
    peoples: [],
  }),
  components: { CharacterBrief },

  beforeMount() {
    this.searchTerm = this.q || null;
    if (this.searchTerm && this.searchTerm != '') this.search();
  },
  computed: {
    searching() {
      return this.searchState == SEARCH_SEARCHING;
    },
    searchDone() {
      return this.searchState == SEARCH_DONE;
    },
    idle() {
      return this.searchState == SEARCH_IDLE;
    },
  },
  methods: {
    handleInput() {
      if (this.searchTerm == '') {
        this.searchState = SEARCH_IDLE;
        this.$router.replace({ query: null });
      } else {
        this.search();
        this.$router.replace({ query: { q: this.searchTerm } });
      }
    },
    // @debounce(400)
    async search() {
      this.searchState = SEARCH_SEARCHING;
      this.peoples.splice(0, this.peoples.length);
      if (this.searchTerm == '@')
        await getAll(data => this.peoples.push(...data));
      else await search(this.searchTerm, data => this.peoples.push(...data));
      this.searchState = SEARCH_DONE;
    },
  },
};
</script>

<style scoped lang="scss">
.body {
  margin-top: 20px;
  margin-bottom: 20px;
}
</style>
