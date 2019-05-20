<template>
  <b-list-group-item :class="dynamicSeverityClass">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1 defect-header" @click="toggleDefectEditMode">{{defect.description?defect.description:"Create A New Defect"}}</h5>
      <fa v-if="defect.editable" @click="softDeleteDefect" icon="trash"></fa>
    </div>
    <hr class="my-2 diag" v-if="defect.editable"/>
      <DefectDetails
        v-if="defect.editable"
        :defect="defect"
        :pageId="pageId"
        :featureId="featureId"
        :defectId="defectId"
      />
  </b-list-group-item>
</template>

<script>
import { mapMutations } from "vuex";
import DefectDetails from "@/components/DefectDetails";
export default {
  name: "Defect",
  components: {
    DefectDetails
  },
  props: {
    defect: Object,
    pageId: Number,
    featureId: Number,
    defectId: Number,
  },
  computed: {
    dynamicSeverityClass() {
      return {
        'bg-dark': this.defect.editable === true || this.defect.severity === 0,
        'bg-info': this.defect.editable === false && this.defect.severity === 1,
        'bg-success':this.defect.editable === false && this.defect.severity === 2,
        'bg-warning':this.defect.editable === false && this.defect.severity === 3,
        'bg-danger':this.defect.editable === false && this.defect.severity === 4,
        'text-white': this.defect.editable === true || this.defect.severity !== 3,
        'mb-1': true
      }
    },
    description: {
      get() {
        return this.$store
          .state
          .TestSuite
          .pages[this.pageId]
          .features[this.featureId]
          .defects[this.defectId]
          .description;
      },
      set(value) {
        this.UPDATE_DEFECT_DESCRIPTION({
          description: value, 
          pageId: this.pageId, 
          featureId: this.featureId,
          defectId: this.defectId
        });
      }
    }
  },
  methods: {
    toggleDefectEditMode() {
      this.TOGGLE_DEFECT_EDIT_MODE({
        editable: this.defect.editable,
        pageId: this.pageId, 
        featureId: this.featureId,
        defectId: this.defectId
      });
    },
    deleteDefect() {
      if(this.defect.editable) {
        this.DELETE_DEFECT({
          pageId: this.pageId,
          featureId: this.featureId,
          defectId: this.defectId
        });
      }
    },
    softDeleteDefect() {
      if(this.defect.editable) {
        this.SOFT_DELETE_DEFECT({
          pageId: this.pageId,
          featureId: this.featureId,
          defectId: this.defectId
        });
      }
    },
    ...mapMutations("TestSuite", [
      "UPDATE_DEFECT_DESCRIPTION",
      "DELETE_DEFECT",
      "SOFT_DELETE_DEFECT",
      "TOGGLE_DEFECT_EDIT_MODE",
      "TOGGLE_DEFECT_EDITOR"
      ])
  }
};
</script>
<style lang="scss" scoped>
 hr.diag {
  
  color: yellow;
  // background: url("../assets/hr-diag.png") repeat-x 0 0;
}

.fa-trash:hover {
  color: red;
  transition: .25s ease-in-out;
  cursor: pointer;
}

.defect-header:hover {
  cursor: pointer;
}
</style>