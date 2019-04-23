<template>
  <section>   
    <!-- Description -->
    <b-form-group v-if="defect.createdAt === 0"
      :id="dynamicDOMId('description-label')"
      label="Description:"
      :label-for="dynamicDOMId('description-textarea')"
      description="Provide a short description."
      :state="descriptionState"
    >
      <b-form-input 
        :id="dynamicDOMId('description-label')"
        ref="input"
        @blur="onBlur"
        @keyup.enter="onKeyupEnter"
        @keyup.escape="onKeyupEscape" 
        v-model="description"
        :state="descriptionState"
        placeholder="Defect Description"></b-form-input>
    </b-form-group>

    <!-- Expected Behavior -->
    <b-form-group v-show="defect.createdAt"
      :id="dynamicDOMId('expected-behavior-label')"
      label="Expected Behavior:"
      :label-for="dynamicDOMId('expected-behavior-textarea')"
      description="What is the expected behavior?"
    >
      <b-form-textarea
        ref="expectedBehavior"
        :id="dynamicDOMId('expected-behavior-textarea')"
        v-model="expectedBehavior"
        placeholder="What is the expected behavior?"
        rows="3"
        max-rows="6"
      ></b-form-textarea>
    </b-form-group>

    <!-- Actual Behavrior -->
    <b-form-group v-show="defect.createdAt"
      :id="dynamicDOMId('current-behavior-label')"
      label="Current Behavior:"
      :label-for="dynamicDOMId('current-behavior-textarea')"
      description="What is the current behavior?"
    >
      <b-form-textarea
        :id="dynamicDOMId('current-behavior-textarea')"
        v-model="currentBehavior"
        placeholder="What is the current behavior?"
        rows="3"
        max-rows="6"
      ></b-form-textarea>
    </b-form-group>

    <!-- Steps To Reproduce -->
    <b-form-group v-show="defect.createdAt"
      :id="dynamicDOMId('steps-to-reproduce-label')"
      label="Steps To Reproduce:"
      :label-for="dynamicDOMId('steps-to-reproduce-textarea')"
      description="How do you reproduce this bug? (Be Detailed)"
    >
      <b-form-textarea
        :id="dynamicDOMId('steps-to-reproduce-textarea')"
        v-model="stepsToReproduce"
        :placeholder="stepsToReproducePlaceholder"
        rows="3"
        max-rows="6"
      ></b-form-textarea>
    </b-form-group>

    <b-button-group v-show="defect.createdAt">
      <b-button 
        :tabindex="defect.severity === 1 || defect.severity === 0?'':'-1'"
        :variant="defect.severity === 1 || defect.severity === 0 ?'info':'secondary'" 
        @click="updateSeverity(1)">Low</b-button>
      <b-button 
        :tabindex="defect.severity === 2 || defect.severity === 0?'':'-1'"
        :variant="defect.severity === 2  || defect.severity === 0 ?'success':'secondary'" 
        @click="updateSeverity(2)">Medium</b-button>
      <b-button 
        :tabindex="defect.severity === 3 || defect.severity === 0?'':'-1'"
        :variant="defect.severity === 3  || defect.severity === 0 ?'warning':'secondary'" 
        @click="updateSeverity(3)">High</b-button>
      <b-button 
        :tabindex="defect.severity === 4 || defect.severity === 0?'':'-1'"
        :variant="defect.severity === 4  || defect.severity === 0 ?'danger':'secondary'" 
        @click="updateSeverity(4)">Critical</b-button>
    </b-button-group>

    <b-progress class="mt-2" :max="100" v-show="defect.createdAt">
      <b-progress-bar :value="progress" variant="success"></b-progress-bar>
    </b-progress> 

    <b-row class="justify-content-md-end mt-2">
      <b-col cols="auto">
        <b-button 
          @click="cancelEditMode"
          variant="outline-secondary" 
          class="mr-1" 
          tabindex="-1">Cancel</b-button>
        <b-button 
          :variant="completeButtonDisabled?'outline-success':'success'" 
          :disabled="completeButtonDisabled"
          @click="commitDefect">{{defect.createdAt === 0?'Add Defect':'Update'}}</b-button>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import Defect from "@/components/Defect";

export default {
  name: "DefectList",
  components: {
    Defect
  },
  props: {
    defect: Object,
    featureId: Number,
    pageId: Number,
    defectId: Number
  },
  mounted() {
    if(this.defect.createdAt === 0) {
      this.$refs.input.focus();
    } else {
      this.$refs.expectedBehavior.focus();
    }
  },
  computed: {
    progress() {
      let progress = 0;

      if(this.defect.description.length >= 4) {
        progress+=20
      }

      if(this.defect.expectedBehavior.length) {
        progress+=20
      }

      if(this.defect.currentBehavior.length) {
        progress+=20
      }

      if(this.defect.stepsToReproduce.length) {
        progress+=20
      }

      if(this.defect.severity > 0) {
        progress+=20
      }

      return progress;
    },
    descriptionState() {
      return this.defect.description.length > 4;
    },
    completeButtonDisabled() {
      return this.defect.description.length  < 4;
    },
    stepsToReproducePlaceholder() {
      return "1. Login with the role " + this.role + "\n2. Goto ... ";
    },
    //Vuex Bindings
    description: {
      get() {
        return this.$store
          .state.TestSuite
          .pages[this.pageId]
          .features[this.featureId]
          .defects[this.defectId]
          .description;
      },
      set(value) {
        this.UPDATE_DEFECT_PROPERTY({
          pageId: this.pageId,
          featureId: this.featureId,
          defectId: this.defectId,
          key: "description",
          value: value
        })
      }
    },
    expectedBehavior: {
      get() {
        return this.$store
          .state.TestSuite
          .pages[this.pageId]
          .features[this.featureId]
          .defects[this.defectId]
          .expectedBehavior;
      },
      set(value) {
        this.UPDATE_DEFECT_PROPERTY({
          pageId: this.pageId,
          featureId: this.featureId,
          defectId: this.defectId,
          key: "expectedBehavior",
          value: value
        })
      }
    },
    currentBehavior: {
      get() {
        return this.$store
          .state.TestSuite
          .pages[this.pageId]
          .features[this.featureId]
          .defects[this.defectId]
          .currentBehavior;
      },
      set(value) {
        this.UPDATE_DEFECT_PROPERTY({
          pageId: this.pageId,
          featureId: this.featureId,
          defectId: this.defectId,
          key: "currentBehavior",
          value: value
        })
      }
    },
    stepsToReproduce: {
      get() {
        return this.$store
          .state.TestSuite
          .pages[this.pageId]
          .features[this.featureId]
          .defects[this.defectId]
          .stepsToReproduce;
      },
      set(value) {
        this.UPDATE_DEFECT_PROPERTY({
          pageId: this.pageId,
          featureId: this.featureId,
          defectId: this.defectId,
          key: "stepsToReproduce",
          value: value
        })
      }
    },
    ...mapState("TestSuite", ["role"])
  },
  methods: {
    dynamicDOMId(uniqueKey) {
      return `${uniqueKey}-${this.pageId}-${this.featureId}-${this.defectId}`
    },
    updateSeverity(severity) {
      if (this.defect.severity == severity) { severity = 0 }
      this.UPDATE_DEFECT_PROPERTY({
          pageId: this.pageId,
          featureId: this.featureId,
          defectId: this.defectId,
          key: "severity",
          value: severity
        })
    },
    commitDefect() {
      
      if(this.defect.createdAt > 0) {
        this.toggleEditMode();
      }
      else if(this.defect.description.length > 0) {
        this.COMMIT_DEFECT({
          pageId: this.pageId,
          featureId: this.featureId,
          defectId: this.defectId
        });
        
        this.$nextTick( () => {
          this.$refs.expectedBehavior.focus();
        });
      }
      else { /*Do Nothing */} 
      
    },
    deleteDefect() {
      if(this.defect.createdAt === 0 || this.defect.description.length === 0) {
        this.DELETE_DEFECT({
          pageId: this.pageId,
          featureId: this.featureId,
          defectId: this.defectId
        });
      }
    },
    onBlur() {
      //this.commitDefect();
    },
    onKeyupEnter() {
      this.commitDefect();
    },
    onKeyupEscape() {
      this.deleteDefect();
    },
    cancelEditMode() {
      if (this.defect.createdAt === 0) {
        this.deleteDefect()
      } else {
        this.toggleEditMode()
      }
    },
    toggleEditMode() {
      this.TOGGLE_DEFECT_EDIT_MODE({
          pageId: this.pageId,
          featureId: this.featureId,
          defectId: this.defectId,
          editable: this.defect.editable
        });
    },
    ...mapMutations("TestSuite", [
      "UPDATE_DEFECT_PROPERTY",
      "DELETE_DEFECT",
      "COMMIT_DEFECT",
      "TOGGLE_DEFECT_EDIT_MODE"
      ])
  }
};
</script>