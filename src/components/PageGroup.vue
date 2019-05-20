<template>
  <b-list-group-item href="" class="flex-column align-items-start bg-dark text-white">
    <div class="d-flex w-100 justify-content-between align-items-center">
      <div class="mb-2">
        <fa :icon="pageIsCollapsed(index)?'caret-square-down':'caret-square-up'" @click="collapse" class="addDefect" size="lg"/>
        <span class="group-name">{{description | ucfirst}}</span>
        <b-badge variant="secondary" pill>{{features.length}} feature(s)</b-badge>
      </div>
      <div v-b-tooltip.hover title="Add Feature" v-if="!pageIsCollapsed(index)">
        <fa @click="ADD_FEATURE(index)" icon="plus-circle" class="addFeature" size="lg"/>
      </div>
    </div>
    <transition name="smooth">
      <FeatureList
        v-if="!pageIsCollapsed(index)"
        :features="features"
        :page-id="index" 
      />
    </transition>
  </b-list-group-item>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import FeatureList from "@/components/FeatureList";
export default {
  name: "PageGroup",
  components: {
    FeatureList
  },
  data() {
    return {
      collapsed: false
    }
  },

  props: {
    index: Number,
    description: String,
    features: Array
  },
  computed: {
    ...mapGetters("TestSuite", ["pageIsCollapsed"])
  },
  methods:{
    collapse() {
      this.TOGGLE_COLLAPSE_GROUP(this.index)
    },
    ...mapMutations("TestSuite", ["ADD_FEATURE", "TOGGLE_COLLAPSE_GROUP"]),
  },
  filters: {
    ucfirst(value) {
      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }
  },
};
</script>
<style lang="scss" scoped>
  .addFeature {
    &:hover {
      color: lightgreen;
    }
  }
  .group-name {
    margin-left: 1em;
    margin-right: 1em;
    font-size: 1.15em;
  }
  .smooth-enter-active{
    transition: opacity .5s;
  } 
  .smooth-enter, .smooth-leave-to {
    opacity: 0
  }
</style>