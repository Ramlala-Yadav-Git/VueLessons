<template>
  <div class="home">
    <div v-if="loading">
      <h3>Loading data .....</h3>
    </div>
    <div>
      <button
        @click="handleComment"
        :class="{ comment: comments ? 'active' : '' }"
      >
        Comments
      </button>
      <button
        @click="handleAttachment"
        :class="{ comment: comments ? '' : 'active' }"
      >
        Attachments
      </button>
      <div v-if="comments">
        <ul>
          <li
            v-for="comment in data.comments"
            :key="comment.createdDateTimeSeconds"
          >
            <p><span>Title :</span> {{ comment.text }}</p>
          </li>
        </ul>
      </div>
      <div v-if="attachments">
        <ul>
          <li v-for="attachment in data.attachments" :key="attachment.name">
            <span>Name :</span> {{ attachment.name }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      data: [],
      loading: false,
      comments: true,
      attachments: false,
    };
  },
  methods: {
    handleComment() {
      this.comments = true;
      this.attachments = false;
    },
    handleAttachment() {
      this.attachments = true;
      this.comments = false;
    },
  },
  created() {
    this.loading = true;
    axios.get("http://localhost:3001/projects").then((res) => {
      this.data = res.data;
      this.loading = false;
      console.log(this.data.comments);
    });
  },
};
</script>
<style scoped>
.home {
  background: #d9f5e871;
  padding: 10px;
  border-radius: 5px;
}
li {
  list-style: none;
  background: #b2f1d4ad;
  /* display: inline-block; */
  padding: 5px;
  margin: 5px;
}
button {
  border: none;
  background: rgb(8, 236, 160);
  font-weight: bold;
  color: white;
  border-radius: 15px;
  padding: 8px;
  cursor: pointer;
  margin: 5px;
}
.comment {
  background: rgb(212, 214, 83);
}
span {
  font-weight: bold;
  color: #02693bbe;
}
</style>
