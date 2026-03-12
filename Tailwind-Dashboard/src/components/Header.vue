<script setup>
import { ref } from 'vue';

const darkMode = ref(false)

const handleClick = () => {
  darkMode.value = !darkMode.value

  if (darkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}

</script>


<template>
  <header class="bg-blue-50 dark:bg-gray-900 h-[235px] ronded-b-[20px] pt-8 
  px-6 mb-[1000px] md:mb-[470px] xl:mb-[200px]">
    <h1 class="text-blue-950 dark:text-white text-2xl font-bold mb-1">Social Media Dashboard</h1>
    <p class="text-gray-600 dark:text-gray-400 font-bold mb-6">Total Followers: 23,004</p>
    <hr class="bg-black mb-[19px]"/>
    <div class="flex justify-between">
      <p class="text-gray-600 dark:text-gray-400 font-bold">Dark Mode</p>
      <label for="darkmode" class="border relative bg-zinc-400 
      peer-checked:bg-togglegradient
      w-12 h-6 rounded-full overflow-hidden cursor-pointer p-[3px]">
      <input v-on:click="handleClick" id="darkmode" type="checkbox" class="peer sr-only"/>
      <div class="w-full h-full peer-checked:bg-togglegradient
      absolute top-0 left-0"></div>
      <div class="w-[16px] h-[16px] bg-gray-200   rounded-full 
      peer-checked:translate-x-[24px] transition-all"></div>
      </label>
    </div>
  </header>
</template>