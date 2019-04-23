<template>
  <section>
    <b-list-group v-for="(page, pindex) in pages" class="mb-3" :key="pindex">
      <PageGroup :description="page.description" :index="pindex" :features="page.features"/>
    </b-list-group>
  </section>
</template>

<script>
import PageGroup from "@/components/PageGroup";
import FeatureList from "@/components/FeatureList";
import Feature from "@/components/Feature";
import Defect from "@/components/Defect";
import { mapMutations } from "vuex";
export default {
  name: "PageGroups",
  components: {
    PageGroup,
    Defect,
    FeatureList
  },
  props: {
    pages: Array,
  }
};
</script>