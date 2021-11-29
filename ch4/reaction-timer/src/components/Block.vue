<template>
  <div class="block" v-if="showBlock" @click="stopTimer">Click Me</div>
</template>

<script>
export default {
  props: ["delay"],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    };
  },
  methods: {
    startTimer() {
      this.timer = setInterval(() => {
        this.reactionTime += 10;
      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
      this.$emit("end", this.reactionTime);
      console.log(this.reactionTime);
    },
  },
  mounted() {
    console.log("Mounted !!");
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay);
  },
  updated() {
    console.log("Updated !!");
  },
  unmounted() {
    console.log("Unmounted !!");
  },
};
</script>

<style>
.block {
  width: 400px;
  border-radius: 20px;
  background: #0fafa7;
  color: white;
  padding: 100px 0;
  margin: 40px auto;
}
</style>