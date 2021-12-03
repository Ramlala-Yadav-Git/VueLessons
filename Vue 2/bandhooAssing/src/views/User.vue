<template>
  <div class="user">
    <div v-if="load">
      <h3>Loading data ...</h3>
    </div>
    <div>
      <h3><span>Name :</span> {{ data.name }}</h3>
      <p><span>Company Id : </span> {{ data.ownerCompanyId }}</p>
      <p><span>ContractorId : </span> {{ data.contractorId }}</p>
      <p><span>PrincipalEmployer : </span> {{ data.principalEmployer }}</p>
      <p><span>Address : </span> {{ data.address }}</p>
      <p><span>Food : </span> {{ data.food }}</p>
      <p><span>Housing : </span> {{ data.housing }}</p>
      <p><span>SupervisorMobile : </span> {{ data.supervisorMobile }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "User",
  data() {
    return {
      data: [],
      load: false,
    };
  },
  methods: {},
  created() {
    this.load = true;
    axios.get("http://localhost:3001/projects").then((res) => {
      this.data = res.data;
      this.load = false;
      console.log(this.data);
    });
  },
};
</script>

<style scoped>
.user {
  background: #d9f5e871;
  border-radius: 5px;
  padding: 5px;
  min-height: 80vh;
}
span {
  font-weight: bold;
  color: #02693bbe;
}
</style>
