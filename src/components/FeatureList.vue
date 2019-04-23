<template>
  <section role="list">
    <b-list-group role="listitem" v-for="(feature, featureId) in features" :key="featureId">
      <Feature 
        :feature="feature" 
        :featureId="featureId"
        :pageId="pageId"/>
    </b-list-group>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
import Feature from "@/components/Feature";

export default {
  name: "FeatureList",
  components: {
    Feature
  },
  props: {
    features: Array,
    visible: Boolean,
    pageId: Number
  }
};
</script>