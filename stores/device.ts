// stores/device.ts
import { defineStore } from 'pinia';

export const useDeviceStore = defineStore('device', {
  state: () => ({
    device: 'desktop', // 기본 값 설정
  }),
  actions: {
    detectDevice() {
      const userAgent = navigator.userAgent;
      this.device = /mobile/i.test(userAgent) ? 'mobile' : 'desktop'; // 모바일 감지
    },
    setDevice(device: string) {
      this.device = device; // 디바이스 상태 업데이트
    },
  },
});
