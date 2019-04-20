<template>
  <b-list-group-item variant="danger">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">{{description}}</h5>
    </div>
  </b-list-group-item>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "Defect",
  props: {
    description: String,
  }
};
</script>