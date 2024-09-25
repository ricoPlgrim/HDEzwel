// middleware/detectDevice.global.ts
export default defineNuxtRouteMiddleware((to, from) => {
  const userAgent = process.client ? navigator.userAgent : useRequestHeaders()['user-agent'] || ''
  const isMobile = /mobile|android|iphone|ipad|ipod/i.test(userAgent)

  // 모바일 페이지로 리디렉션
  if (isMobile && to.path !== '/mobile') {
    return navigateTo('/mobile')
  }

  // 데스크탑 페이지로 리디렉션
  if (!isMobile && to.path !== '/desktop') {
    return navigateTo('/desktop')
  }
})
