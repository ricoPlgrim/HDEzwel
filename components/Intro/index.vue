<template>
    <div class="text_contents">
        <div class="text_box">
            <span ref="patienceRef" class="text patience">patience</span>
            <span ref="challengeRef" class="text challenge">challenge</span>
            <span ref="failureRef" class="text failure">failure</span>
        </div>
    </div>
    <div class="dimd" ref="dimd"></div>
</template>
  
<script setup lang="ts">
import { onMounted, ref, defineEmits } from 'vue'
import { gsap } from 'gsap'

const patienceRef = ref<HTMLSpanElement | null>(null)
const challengeRef = ref<HTMLSpanElement | null>(null)
const failureRef = ref<HTMLSpanElement | null>(null)
const dimd = ref<HTMLDivElement | null>(null)

//emit 정의
const emit = defineEmits(['dimdHideComplete']);


// dimdHide 콜백 함수 정의
const dimdHide = () => {
    gsap.to(dimd.value, {
        top: "-100%",
        duration: 1,
        ease: 'Expo.InOut',
        delay: 1.5,
        onUpdate: () => {
            if (dimd.value) {
                const currentTop = parseFloat(window.getComputedStyle(dimd.value).top);  // top 값을 숫자로 변환

                if (dimd.value.parentElement) {  // parentElement가 존재하는지 확인
                    const parentHeight = dimd.value.parentElement.clientHeight;  // 부모 요소의 높이
                    const targetTop = -0.5 * parentHeight;  // -50%에 해당하는 픽셀 값 계산

                    console.log(`Current top: ${currentTop}px, Target top: ${targetTop}px`);

                    // top 값이 -50% 또는 그보다 작을 때 콘솔 출력 및 span 요소들에 active 클래스 추가
                    if (currentTop <= targetTop) {
                        console.log("Top is now -50% or below");
                        // 각 span 요소에 'active' 클래스를 추가
                        if (patienceRef.value) patienceRef.value.classList.add('active');
                        if (challengeRef.value) challengeRef.value.classList.add('active');
                        if (failureRef.value) failureRef.value.classList.add('active');
                    }
                }
            }
        },
        onComplete: () =>{
            emit( 'dimdHideComplete' );
        }
    });
};



onMounted(() => {
    // GSAP Timeline을 사용하여 순차 애니메이션 적용
    const tl = gsap.timeline({ delay: 1, ease: 'Expo.InOut' })
    const tl2 = gsap.timeline({ delay: 1, ease: 'Expo.InOut' })
    const tl3 = gsap.timeline({ delay: 1, ease: 'Expo.InOut' })

    // 'patience' 애니메이션
    tl.fromTo(patienceRef.value,
        { opacity: 0, top: "80%" },  // 시작 상태
        { opacity: 1, top: "50%", duration: 1 }  // 애니메이션 목표 상태
    )
    tl.fromTo(patienceRef.value,
        { left: "-20%" },  // 시작 상태
        { left: "0", duration: 1 }  // 애니메이션 목표 상태
    )

    // 'challenge' 애니메이션
    tl3.fromTo(challengeRef.value,
        { opacity: 0, top: "45%" },  // 시작 상태
        { opacity: 1, top: "50%", duration: 1 }  // 애니메이션 목표 상태
    )

    // 'failure' 애니메이션 및 onComplete에서 dimdHide 호출
    tl2.fromTo(failureRef.value,
        { opacity: 0, top: "20%" },  // 시작 상태
        { opacity: 1, top: "50%", duration: 1 }  // 애니메이션 목표 상태
    )
    tl2.fromTo(failureRef.value,
        { left: "86.6666%" },  // 시작 상태
        { left: "66.6666%", duration: 1, onComplete: dimdHide }  // onComplete에서 dimdHide 호출
    )
})
</script>
  
<style scoped lang="scss">
.text_contents {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    z-index: 20;

    .text_box {
        position: relative;
        width: 1000px;
        height: 300px;

        span {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 33.3333%;
            text-align: center;
            font-size: 4rem;
            color: #fff;
            text-transform: uppercase;
            font-family: "Roboto";
            font-weight: bold;

            &:nth-child(1) {
                left: 0;
            }

            &:nth-child(2) {
                left: 33.3333%;
            }

            &:nth-child(3) {
                left: 66.6666%;
            }
            &.active{
                color: #111;
            }
        }
    }
}

.dimd {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: #000;
    z-index: 10;
}
</style>
  