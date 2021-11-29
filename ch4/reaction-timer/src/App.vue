<template>
  <div class="timer">
    <h1>Reaction Timer</h1>
    <button @click="start" :disabled="isPlaying">Play</button>
    <Block v-if="isPlaying" :delay="delay" @end="endGame" />
    <Result v-if="showResults" :score="score" />
  </div>
</template>
<script >
import Block from "./components/Block.vue";
import Result from "./components/Results.vue";
export default {
  name: "App",
  components: {
    Block,
    Result,
  },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false,
    };
  },
  methods: {
    start() {
      this.delay = 200 + Math.random() * 5000;
      this.isPlaying = true;
      // console.log(this.delay);
      this.showResults = false;
    },
    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResults = true;
    },
  },
};
</script>


<style>
.timer {
  text-align: center;
}
</style>
