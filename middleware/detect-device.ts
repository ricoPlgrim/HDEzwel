// middleware/detect-device.ts
import { defineNuxtRouteMiddleware } from 'nuxt/app';
import { useDeviceStore } from '@/stores/device'; // Pinia 스토어 가져오기

export default defineNuxtRouteMiddleware(() => {
  const deviceStore = useDeviceStore();
  const userAgent = navigator.userAgent;
  const device = /mobile/i.test(userAgent) ? 'mobile' : 'desktop';

  // Pinia 스토어에 디바이스 상태 저장
  deviceStore.setDevice(device);
});
