<template>
  <b-container class="testsuite pb-1 mt-4">
    <b-row class="mb-3 justify-content-md-end ">
      <b-col cols="4">
        <b-input-group class="mt-3">
          <b-form-input v-model="form.groupName"></b-form-input>
          <b-input-group-append>
            <b-button variant="outline-light" @click="addGroup(form.groupName)">Add Page</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>
    <PageGroups :pages="pages"/>
  </b-container>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import PageGroups from "@/components/PageGroups";

export default {
  name: "TestSuite",
  components: {
    PageGroups
  },
  data() {
    return {
      form: {
        groupName: ""
      },
      group: {}
    };
  },
  computed: {
    ...mapState("TestSuite", ["pages"])
  },
  methods: {
    ...mapMutations("TestSuite", ["ADD_FEATURE"]),
    ...mapActions("TestSuite", ["addGroup"])
  },
  created() {
  }
};
</script>