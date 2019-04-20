<template>
  <b-list-group-item  variant="primary">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{feature.description}}</h5>
      <b-form-input v-if="feature.editable" v-model="text" placeholder="Feature"></b-form-input>
    </div>
  </b-list-group-item>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Defect",
  props: {
    feature: Object,
    pageId: Number,
    featureId: Number
  },
  computed: {
    text: {
      get () {
        return this.$store
          .state
          .TestSuite
          .pages[this.pageId]
          .features[this.featureId]
          .description;
      },
      set (value) {
        this.UPDATE_FEATURE_DESCRIPTION({
          description: value, 
          pageId: this.pageId, 
          featureId: this.featureId
        });
      }
    }
  },
  methods: {
    ...mapMutations("TestSuite", ["UPDATE_FEATURE_DESCRIPTION"])
  }
};
</script>