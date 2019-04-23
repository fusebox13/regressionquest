<template>
  <b-list-group-item href="" class="flex-column align-items-start bg-dark text-white">
    <div class="d-flex w-100 justify-content-between">
      <div class="mb-2">
        <h5 style="display: inline-block; margin-right: 1em" class="mb-1">{{description | ucfirst}}</h5>
        <b-badge variant="secondary" pill>{{features.length}} feature(s)</b-badge>
        <hr class="my-2 diag">
      </div>
      <div v-b-tooltip.hover title="Add Feature">
        <fa @click="ADD_FEATURE(index)" icon="plus-circle" class="addFeature" size="lg"/>
      </div>
    </div>
    <FeatureList 
        :features="features"
        :page-id="index" 
    />
  </b-list-group-item>
</template>

<script>
import { mapMutations } from "vuex";
import FeatureList from "@/components/FeatureList";
export default {
  name: "PageGroup",
  components: {
    FeatureList
  },
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
<style lang="scss">
  .addFeature {
    &:hover {
      color: lightgreen;
    }
  }

  hr.diag {
    height: 6px;
    background: url("../assets/hr-diag.png") repeat-x 0 0;
    border: 0;
  }
</style>