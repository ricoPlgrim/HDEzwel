<template>
  <Intro v-if="showIntro" @dimdHideComplete="handleDimdHideComplete" />
  <Main />
</template>

<script setup>
import { ref } from 'vue'
import Intro from '@/components/Intro'
import Main from '@/components/Main/Visual'

const showIntro = ref(true)

const handleDimdHideComplete = () => {
  showIntro.value = false; // Intro가 끝나면 Main 컴포넌트로 전환
}


</script>


