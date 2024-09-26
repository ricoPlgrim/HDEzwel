<template>
    <div class="redirect-animation">Redirecting...</div>
</template>
  
<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'

// `ref`로 데이터 정의
const userAgent = ref('');
const isMobile = ref(false);
const router = useRouter();

// 페이지 로드 시 실행
onMounted(() => {
    // 처음 페이지 로드 시 userAgent 값 설정
    userAgent.value = navigator.userAgent;
    isMobile.value = /mobile|android|iphone|ipad|ipod/i.test(userAgent.value);
});

// computed를 사용해 모바일 여부에 따라 라우팅을 처리
const routeRedirect = computed(() => {
    if (isMobile.value) {
        return '/mobile';
    } else {
        return '/desktop';
    }
});

// watchEffect를 사용해 computed가 변경될 때 라우팅 처리
watchEffect(() => {
    if (routeRedirect.value) {
        router.push(routeRedirect.value);
    }
});

</script>

<style scoped>
.redirect-animation {
    font-size: 2em;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    opacity: 0;
    animation: fadeInOut 2s infinite; /* 2초 동안 애니메이션 반복 */
}

/* Fade in and out animation */
@keyframes fadeInOut {
    0%, 100% {
        opacity: 0;
    }
    50% {
        opacity: 1;
    }
}
</style>
