<template>
  <h1>Hello World</h1>
  <JobList :jobs="Jobs" :order="order" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Job, JobOrder } from "./types/Jobs";
import JobList from "./components/JobList.vue";

export default defineComponent({
  name: "App",
  components: { JobList },
  setup() {
    const Jobs = ref<Job[]>([
      {
        title: " farm worker ",
        location: " lon lon ranch ",
        salary: 30000,
        id: " 1 ",
      },
      {
        title: " quarryman ",
        location: " death mountain ",
        salary: 40000,
        id: " 2 ",
      },
      {
        title: " flute player ",
        location: " the lost woods ",
        salary: 35000,
        id: " 3 ",
      },
      {
        title: " fisherman ",
        location: " lake hylia ",
        salary: 21000,
        id: " 4 ",
      },
      {
        title: " prison guard ",
        location: " gerudo valley ",
        salary: 32000,
        id: " 5 ",
      },
    ]);

    const order = ref<JobOrder>("title");

    const handleOrder = (order: JobOrder) => {
      console.log(order);
    };

    handleOrder("id");

    return { Jobs, order };
  },
});
</script>

<style></style>
