<template>
  <section>
     <b-list-group v-for="(defect, defectId) in defects" :key="defectId">
        <Defect
          v-if="!defect.deleted" 
          :defect="defect" 
          :visible="visible"
          :defectId="defectId"
          :featureId="featureId"
          :pageId="pageId"/>
      </b-list-group>
  </section>
</template>

<script>
import { mapMutations } from "vuex";
import Defect from "@/components/Defect";

export default {
  name: "DefectList",
  components: {
    Defect
  },
  props: {
    defects: Array,
    visible: Boolean,
    featureId: Number,
    pageId: Number
  }
};
</script>