<template>
  <section>
     <b-list-group v-for="(defect, dindex) in defects" :key="dindex">
        <Defect 
          :description="defect.description" 
          :visible="visible"
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