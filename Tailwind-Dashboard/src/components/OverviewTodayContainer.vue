<script setup>
import data from '../../data/data.json';
import OverviewTodayCard from './OverviewTodayCard.vue';
</script>

<template>
    <section>
    <h2 class="text-gray-900 dark:text-white text-2xl font-bold
    mb-[27px] ml-8">Overview - Today</h2>
    
  <div class="flex flex-wrap">
    <OverviewTodayCard 
      v-for="object in data['Overview-Today']" 
      :key="object.id" 
      :data="object"
      
    />
</div> 
  </section>
</template>