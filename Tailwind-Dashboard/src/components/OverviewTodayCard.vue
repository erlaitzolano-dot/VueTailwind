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
    facebook: 'text-facebook',
    twitter: 'text-twitter',
    instagram: 'text-pink-500',
    youtube: 'text-red-600'
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
    <article class="bg-gray-100 w-[326px] h-[125px] mb-4 p-6
    rounded-[5px] mx-auto overflow-hidden dark:bg-gray-900
    hover:brightness-95 cursor-pointer hover:dark:brightness-125">
        <div class="flex items-center justify-between mb-4">
            <p class="text-sm text-gray-500 font-bold">{{ data.statsType }}</p>
            <img :src="networkLogos[data.network.toLowerCase()]" :alt="`logo ${data.network}`">
        </div>
        <div class="flex justify-between">
            <p class="text-[40px] font-bold text-blue-950 dark:text-white">
                {{ convertNumbertoK(data.stats) }}
            </p>
            <div class="flex items-center gap-1">
                <img :src="data.isUp ? iconup : icondown" alt="icon arrow" />
                <p :class="['text-xs font-bold', data.isUp ? 'text-green-400' : 'text-red-400']">
                    {{ data.porcentage }}%
                </p>
            </div>
        </div>
    </article>
</template>