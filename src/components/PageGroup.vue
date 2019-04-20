<template>
  <b-list-group-item href="" class="flex-column align-items-start"  variant="success">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{description | ucfirst}}</h5>
      <small>{{features.length}} feature(s)</small>
    </div>
    <button @click="ADD_FEATURE(index)">Add Feature</button>
  </b-list-group-item>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "PageGroup",
  props: {
    index: Number,
    description: String,
    features: Array
  },
  methods:{
    ...mapMutations("TestSuite", ["ADD_FEATURE"]),
  },
  filters: {
    ucfirst(value) {
      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
  },
};
</script>