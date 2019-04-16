<template>
  <div class="container-fluid">
    <h1 class="title">Characters</h1>
    <div class="container">
      <input
        class="input"
        type="text"
        placeholder="Enter character name to search.Type @ to view all. Search is debounced"
        @input="handleInput"
        v-model.trim="searchTerm"
      >
      <div class="body">
        <h3
          class="subtitle"
          :class="{searching}"
        >
          <template v-if="searching">
            <span v-if="searchTerm=='@'">Fetcing all</span>
            <span v-else>Searching {{searchTerm}}</span>
          </template>
          <span v-else-if="searchDone">Search results</span>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import { debounce } from '@/helpers/decorators';
import { sleepMs } from '@/helpers';

const SEARCH_IDLE = 0;
const SEARCH_SEARCHING = 1;
const SEARCH_DONE = 2;

export default {
  data: () => ({
    searchTerm: null,
    searchState: SEARCH_IDLE,
  }),

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
      if (this.searchTerm == '') this.searchState = SEARCH_IDLE;
      else this.search();
    },
    @debounce(200)
    async search() {
      this.searchState = SEARCH_SEARCHING;
      await sleepMs(2000);
      this.searchState = SEARCH_DONE;
    },
  },
};
</script>

<style scoped lang="scss">
.body {
  margin-top: 20px;
}
</style>
