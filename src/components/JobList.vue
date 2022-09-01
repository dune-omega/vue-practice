<template>
  <div class="job-list">
    <ul>
      <li v-for="job in jobs" :key="job.id"></li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Job, JobOrder } from "../types/Jobs";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    jobs: {
      required: true,
      type: Array as PropType<Job[]>,
    },
    order: {
      required: true,
      type: String as PropType<JobOrder>,
    },
  },
});
</script>

<style scoped></style>
