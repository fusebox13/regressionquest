<template>
  <b-list-group-item class="mb-2" variant="dark">
    <div class="d-flex w-100 justify-content-between mb-2">
      <div v-if="!feature.editable">
        <fa :icon="featureIsCollapsed(pageId, featureId)?'caret-square-down':'caret-square-up'" @click="collapse" class="addDefect" size="lg"/>
        <span class="mb-1 feature-name">{{feature.description}}</span>
        <b-badge variant="secondary" pill>{{feature.defects.length}} defects(s)</b-badge>
      </div>
       <div v-if="!feature.editable && !featureIsCollapsed(pageId, featureId)" v-b-tooltip.hover title="Add Defect"  @click="ADD_DEFECT({pageId: pageId, featureId: featureId})">
        <fa icon="plus-circle" class="addDefect" size="lg"/>
      </div>
      <b-form-input 
        ref="input" 
        v-if="feature.editable" 
        v-model="text" 
        @blur="onBlur"
        @keyup.enter="onKeyupEnter"
        @keyup.escape="onKeyupEscape"
        placeholder="Feature"></b-form-input>
    </div>
    <transition name="smooth">
      <DefectList 
        v-if="!featureIsCollapsed(pageId, featureId)"
        :defects="feature.defects" 
        :featureId="featureId" 
        :pageId="pageId"/>
    </transition>
  </b-list-group-item>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import DefectList from "@/components/DefectList";
export default {
  name: "Feature",
  components: {
    DefectList
  },
  props: {
    feature: Object,
    pageId: Number,
    featureId: Number
  },
  mounted() {
    if(this.feature.editable) {
      this.$refs.input.focus();
    }
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
    },
    ...mapGetters("TestSuite", ["featureIsCollapsed"])
  },
  methods: {
    addFeature() {
      if(this.text.length) {
        this.TOGGLE_FEATURE_EDIT_MODE({
          editable: this.feature.editable,
          pageId: this.pageId, 
          featureId: this.featureId
        })
      }
    },
    collapse() {
      this.TOGGLE_COLLAPSE_FEATURE({
        pageId: this.pageId,
        featureId: this.featureId
      });
    },
    deleteFeature() {
      if(this.feature.editable) {
        this.DELETE_FEATURE({
          pageId: this.pageId, 
          featureId: this.featureId
        })
      }
    },
    onKeyupEnter() {
      this.addFeature();
    },
    onKeyupEscape() {
      this.deleteFeature();
    },
    onBlur() {
      this.deleteFeature();
    },
    ...mapMutations("TestSuite", [
        "UPDATE_FEATURE_DESCRIPTION", 
        "DELETE_FEATURE",
        "TOGGLE_FEATURE_EDIT_MODE",
        "TOGGLE_COLLAPSE_FEATURE",
        "ADD_DEFECT"
      ])
  }
};
</script>
<style scoped lang="scss">
  .feature-name {
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