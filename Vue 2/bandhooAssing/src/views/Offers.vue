<template>
  <div class="offers">
    <div class="buttons">
      <button
        :class="{ active: buttons.contractorDetails }"
        @click="() => handleShow('contractorDetails')"
      >
        Contractor Details
      </button>
      <button
        :class="{ active: buttons.auth }"
        @click="() => handleShow('auth')"
      >
        AuthUser Details
      </button>
      <button
        :class="{ active: buttons.offers }"
        @click="() => handleShow('offers')"
      >
        Offers
      </button>
      <button
        :class="{ active: buttons.permissions }"
        @click="() => handleShow('permissions')"
      >
        Permissions
      </button>
      <button
        :class="{ active: buttons.address }"
        @click="() => handleShow('address')"
      >
        Address
      </button>
      <button
        :class="{ active: buttons.attachement }"
        @click="() => handleShow('attachement')"
      >
        Attachments
      </button>
      <button
        :class="{ active: buttons.tenders }"
        @click="() => handleShow('tenders')"
      >
        Tenders
      </button>
    </div>
    <div>
      <div v-if="buttons.contractorDetails">
        <p><span>Id :</span> {{ data.contractors.id }}</p>
        <p>
          <span>Name :</span> {{ data.contractors.firstName }}
          {{ data.contractors.lastName }}
        </p>
        <p><span>Mobile :</span> {{ data.contractors.mobile }}</p>
      </div>
      <div v-if="buttons.auth">
        <p><span>UId :</span> {{ data.contractors.authUser.uId }}</p>
        <p><span>RolesStr :</span> {{ data.contractors.authUser.rolesStr }}</p>
        <p><span>Mobile :</span> {{ data.contractors.authUser.mobile }}</p>
        <p>
          <span>DefaultRole :</span>
          {{ data.contractors.authUser.defaultRole }}
        </p>
      </div>
      <div v-if="buttons.permissions">
        <p>
          <span>Progress :</span> {{ data.contractors.permissions.Progress }}
        </p>
        <p>
          <span>PurchaseOrders :</span>
          {{ data.contractors.permissions.PurchaseOrders }}
        </p>
        <p>
          <span>Projects :</span>
          {{ data.contractors.permissions.Projects }}
        </p>
        <p>
          <span>Offers :</span>
          {{ data.contractors.permissions.Offers }}
        </p>
        <p>
          <span>BidderPQList :</span>
          {{ data.contractors.permissions.BidderPQList }}
        </p>
        <p>
          <span>Tender :</span>
          {{ data.contractors.permissions.Tender }}
        </p>
        <p>
          <span>Gigs :</span>
          {{ data.contractors.permissions.Gigs }}
        </p>
        <p>
          <span>Gigs :</span>
          {{ data.contractors.permissions.Gigs }}
        </p>
      </div>
      <div v-if="buttons.address">
        <p>
          <span>Email :</span>
          {{ data.contractors.company.address.email }}
        </p>
        <p>
          <span>Line1 :</span>
          {{ data.contractors.company.address.line1 }}
        </p>
        <p>
          <span>line2 :</span>
          {{ data.contractors.company.address.line2 }}
        </p>
        <p>
          <span>city :</span>
          {{ data.contractors.company.address.city }}
        </p>
        <p>
          <span>pincode :</span>
          {{ data.contractors.company.address.pincode }}
        </p>
      </div>
      <div v-if="buttons.attachement">
        <li
          v-for="attch in data.contractors.company.attachments"
          :key="attch.name"
        >
          <p>
            <span>Description :</span>
            {{ attch.description }}
          </p>
          <p>
            <span>Name :</span>
            {{ attch.name }}
          </p>
          <p>
            <span>Url :</span>
            {{ attch.url }}
          </p>
        </li>
      </div>
      <div v-if="buttons.tenders">
        <p>
          <span>CompanyId :</span>
          {{ data.tenders.companyId }}
        </p>
        <p>
          <span>CompanyId :</span>
          {{ data.tenders.companyId }}
        </p>
        <p>
          <span>Id :</span>
          {{ data.tenders.id }}
        </p>
        <p>
          <span>Description :</span>
          {{ data.tenders.description }}
        </p>
        <p>
          <span>DocNumber :</span>
          {{ data.tenders.docNumber }}
        </p>
      </div>
      <div v-if="buttons.offers">
        <h3>Not any offer is available</h3>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Offers",
  data() {
    return {
      data: [],
      loading: false,
      buttons: {
        offers: false,
        contractorDetails: true,
        auth: false,
        permissions: false,
        address: false,
        attachement: false,
        tenders: false,
      },
    };
  },
  created() {
    this.loading = true;
    axios.get("http://localhost:3002/data").then((res) => {
      this.data = res.data;
      this.loading = false;
    });
  },
  methods: {
    handleShow(el) {
      for (let key in this.buttons) {
        if (key === el) {
          this.buttons[key] = true;
        } else {
          this.buttons[key] = false;
        }
      }
      //   console.log(this.data.tenders);
    },
  },
};
</script>

<style scoped>
button {
  cursor: pointer;
  background: rgb(1, 117, 40);
  border: none;
  padding: 10px;
  margin: 5px;
  border-radius: 10px;
  font-weight: bold;
  color: white;
}
.active {
  background: rgb(12, 27, 238);
}
span {
  font-weight: bold;
}
li {
  list-style: none;
}
.offers {
  background: #d9f5e871;
  border-radius: 5px;
  padding: 5px;
  min-height: 80vh;
}
span {
  font-weight: bold;
  color: #02693bbe;
}
p {
  list-style: none;
  background: #b2f1d4ad;
  /* display: inline-block; */
  padding: 5px;
  margin: 5px;
}
li {
  list-style: none;
  background: #b2f1d4ad;
  /* display: inline-block; */
  padding: 5px;
  margin: 5px;
}
</style>