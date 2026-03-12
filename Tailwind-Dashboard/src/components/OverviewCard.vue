<script setup>

import facebooklogo from '../assets/images/icon-facebook.svg';
import twitterlogo from '../assets/images/icon-twitter.svg';
import instagramlogo from '../assets/images/icon-instagram.svg';
import youtubelogo from '../assets/images/icon-youtube.svg';
import iconup from '../assets/images/icon-up.svg';
import icondown from '../assets/images/icon-down.svg';

const networkLogos = {
        facebook: facebooklogo,
        twitter: twitterlogo,
        instagram: instagramlogo,
        youtube: youtubelogo
    };

const networkColors = {
        facebook: 'bg-facebook',
        twitter: 'bg-twitter',
        instagram: 'bg-instagramgradient',
        youtube: 'bg-red-600'

    };

const convertNumbertoK = (number) => {
  if (number >= 10000) {
    return (number / 1000).toFixed(1) + 'K';
  }
  return number.toString();
};


defineProps({
    data: {
        type: Object,
        required: true
    }

});
</script>

<template>
    <article class="bg-gray-100 w-[326px] h-[216px] mb-4
    ronded-[5px] mx-auto overflow-hidden text-center dark:bg-gray-900
    hover:brightness-95 cursor-pointer hover:darkbrightness-125
    rounded-[5px]">
    <div :class= "[networkColors[data.network.toLowerCase()], 'h-1', 'mb-8']"></div>
    <div class="flex items-center place-content-center gap-2">
    <img :src="networkLogos[data.network.toLowerCase()]" :alt="`logo ${data.network}`">
        <p class="text-xs text-gray-500 font-bold">{{ data.user }}</p>
        </div>
        <p class="text-[56px] font-bold text-blue-950
        dark:text-white">{{convertNumbertoK(data.audience)}}</p>
        <p class="uppercase tracking-[5px] text-gray-500
        text-xs ">{{ data.audienceType }}</p>
    <div class="flex items-center place-content-center gap-1">
        <img :src="data.isUp ? iconup : icondown" alt="icon arrow" />
        <p :class="['text-xs font-bold', data.isUp ? 'text-green-400' : 'text-red-400']">
        {{ data.today }} Today
        </p>
    </div>
    </article>
</template>