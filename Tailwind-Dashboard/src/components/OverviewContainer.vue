<script setup>
import data  from '../../data/data.json';
import OverviewCard from './OverviewCard.vue';
import OverviewTodayCard from './OverviewTodayCard.vue';

console.log(data.overview);
</script>

<template>
  <section class="max-w-[1440px] flex flex-wrap
  gap-[30px] absolute top-[191px]
  mx-auto left-0 right-0 place-content-center">
    <OverviewCard v-for="object in data.overview" :key="object.id" :data="object"/>
  </section>
</template>