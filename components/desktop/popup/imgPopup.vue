<template>
    <div :class="['pop-layer', { 'is-visible': isVisible }]" v-if="isVisible">
        <div class="dim" @click="closePopup"></div>
        <div class="pop-wrap">
            <div class="pop-content v2">
                <div>
                    <!-- 스켈레톤 UI: 이미지를 로드하기 전까지 보여줍니다 -->
                    <div v-if="!isImageLoaded" class="skeleton"></div>
                    <!-- 이미지가 로드되면 스켈레톤을 대체 -->
                    <img :src="props.imgSrc" :alt="props.imgAlt" @load="onImageLoad" @error="onImageError" />
                </div>
            </div>
            <div class="btn-wrap">
                <a @click="closePopup" class="btn-type5">{{ props.leftText }}</a>
                <a @click="closePopup" class="btn-type5 v2">{{ props.rightText }}</a>
            </div>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref, watch, defineProps, defineExpose } from 'vue';

// Props 정의
const props = defineProps<{
    imgSrc?: string;
    imgAlt?: string;
    leftText: string;
    rightText: string;
}>();

const isVisible = ref(false);
const isImageLoaded = ref(false);  // 이미지 로드 상태

// 이미지가 로드되었을 때 호출되는 함수
const onImageLoad = () => {
    isImageLoaded.value = true;
};

const onImageError = () => {
    console.error('이미지 로드 실패:', props.imgSrc);
};


// 팝업 열기/닫기 함수
const openPopup = () => {
    isImageLoaded.value = false;  // 팝업을 열 때는 항상 스켈레톤을 먼저 보여줌
    isVisible.value = true;
};

const closePopup = () => {
    isVisible.value = false;
};

// 스크롤 막기/허용
watch(isVisible, (newVal) => {
    document.body.style.overflow = newVal ? 'hidden' : '';
});

// openPopup, closePopup 함수 외부 노출
defineExpose({ openPopup, closePopup });
</script>
  
<style scoped>
.skeleton {
    width: 100%;
    height: 443px;
    background-color: #e0e0e0;
    border-radius: 8px;
}

/* 이미지를 로드하기 전까지 애니메이션 추가 가능 */
.skeleton::before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, rgba(240, 240, 240, 0.6) 25%, rgba(200, 200, 200, 0.6) 50%, rgba(240, 240, 240, 0.6) 75%);
    background-size: 200% 100%;
    animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
    0% {
        background-position: -200% 0;
    }

    100% {
        background-position: 200% 0;
    }
}</style>
  