<template>
  <div class="testsuite">
    <b-row class="mb-3">
      <b-col cols="2">
        <b-input-group prepend="Add Group" class="mt-3">
          <b-form-input v-model="form.groupName"></b-form-input>
          <b-input-group-append>
            <b-button variant="outline-success" @click="addGroup(form.groupName)">Add</b-button>
          </b-input-group-append>
        </b-input-group>
      </b-col>
    </b-row>
    <PageGroups :pages="pages"/>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import PageGroups from "@/components/PageGroups";

export default {
  name: "TestSuite",
  components: {
    PageGroups,
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