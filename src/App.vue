<template>
  <div id="app">
    <h1>Stijn's assessment</h1>
    <div v-if="data">
      <h2>{{data.title}}</h2>
      <table :class="{valid: isValid, invalid: !isValid}">
        <tbody>
          <tr>
            <th>Rank</th>
            <th>Real rank</th>
            <th>Team</th>
            <th>Points</th>
            <th>Goals scored</th>
            <th>Goals against</th>
          </tr>
          <tr v-for="(item, index) in sortedTable">
            <td>{{index + 1}}</td>
            <td>{{item.rank}}</td>
            <td>{{item.competitor.name}}</td>
            <td>{{item.points}}</td>
            <td>{{item.goalPlus}}</td>
            <td>{{item.goalMinus}}</td>
          </tr>
        </tbody>
      </table>
      <div><button @click="ascending = !ascending">Reverse this sh##</button></div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: 'app',
  data () {
    return {
      ascending: false
    }
  },
  computed: {
    data() {
      return this.$store.state.data;
    },
    sortedTable() {
      const sorted = _.sortBy(this.data.rankingItems, 'goalPlus');
      if (!this.ascending) {
        sorted.reverse()
      }
      return sorted;
    },
    isValid() {
      return _.sum(this.sortedTable.map(item => item.goalPlus)) === _.sum(this.sortedTable.map(item => item.goalMinus));
    }
  },
  created() {
    this.$store.dispatch('load');
  }
}
</script>

<style scoped>
  .valid {
    background-color: lightgreen;
  }
  .invalid {
    background-color: lightcoral;
  }
</style>
