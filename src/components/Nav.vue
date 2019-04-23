<template>
  <b-navbar toggleable="lg" type="dark" fixed="top">
    <b-navbar-brand href="#">RegressionQuest</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-item-dropdown :text="this.role" right>
          <b-dropdown-item href="#" :active="hasRole('FCS Admin')" @click="SET_ROLE('FCS Admin')">FCS Admin</b-dropdown-item>
          <b-dropdown-item href="#" :active="hasRole('FCS User')" @click="SET_ROLE('FCS User')">FCS User</b-dropdown-item>
          <b-dropdown-item href="#" :active="hasRole('Customer Admin')" @click="SET_ROLE('Customer Admin')">Customer Admin</b-dropdown-item>
          <b-dropdown-item href="#" :active="hasRole('Customer User')" @click="SET_ROLE('Customer User')">Customer User</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown :text="this.environment" right>
          <b-dropdown-item href="#" :active="hasEnvironment('UAT')" @click="SET_ENVIRONMENT('UAT')">UAT</b-dropdown-item>
          <b-dropdown-item href="#" :active="hasEnvironment('Stage')" @click="SET_ENVIRONMENT('Stage')">Stage</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "NavBar",
  computed: {
    ...mapState("TestSuite", ["environment", "role"])
  },
  methods: {
    hasRole(role) {
      return role === this.role;
    },
    hasEnvironment(environment) {
      return environment === this.environment;
    },
    ...mapMutations("TestSuite", ["SET_ROLE", "SET_ENVIRONMENT"])
  }

};
</script>