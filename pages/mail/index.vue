<template>
  <div>
    <Gnb />
    <div class="page-guide-content">
      <h2 class="page-guide-title">MAIL</h2>
      <h3 class="page-guide-title4">
        지메일, 야후, 아웃룩(웹, 앱)<br><br>

        2023-12-04 날짜<br>
        layout.html 주석 참고 (각 페이지에도 주석처리 되어있음)<br>
        멤버, 쿠폰, 로얄티, 금액, 배너, 상품목록, 푸터
      </h3>
      <div class="guide-table">
        <table>
          <thead>
            <tr>
              <th width="10%">1depth</th>
              <th width="10%">2depth en</th>
              <th width="15%">2depth ko</th>
              <th width="15%">page ID</th>
              <th width="15%">html</th>
              <th width="10%">name</th>
              <th width="8%">progress</th>
              <th>memo</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="depth1 center bold">Layout</td>
              <td class="depth2"></td>
              <td class="depth3"></td>
              <td class="depth4"></td>
              <td><a href="../mail/html/layout/layout.html" target="_blank">layout.html</a></td>
              <td>sally</td>
              <td></td>
              <td>2023-11-07<br>2023-11-13 문구 수정<br>2023-11-20 카테고리 수정</td>
            </tr>
            <tr class="none">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="depth1 center bold">Order</td>
              <td class="depth2">Abandoned cart</td>
              <td class="depth3">구매 유도</td>
              <td class="depth4">MA-CMM-500001</td>
              <td><a href="../mail/html/order/cart.html" target="_blank">cart.html</a></td>
              <td>sally</td>
              <td>O</td>
              <td></td>
            </tr>
            <tr>
              <td class="depth1 center bold"></td>
              <td class="depth2">Back in stock</td>
              <td class="depth3">재입고알림</td>
              <td class="depth4">MA-CMM-500002</td>
              <td><a href="../mail/html/order/stock.html" target="_blank">stock.html</a></td>
              <td>sally</td>
              <td>O</td>
              <td></td>
            </tr>
            <tr>
              <td class="depth1 center bold"></td>
              <td class="depth2">Order Confirmation</td>
              <td class="depth3">주문 완료</td>
              <td class="depth4">MA-CMM-500003</td>
              <td><a href="../mail/html/order/order.html" target="_blank">order.html</a></td>
              <td>sally</td>
              <td>O</td>
              <td></td>
            </tr>
            <tr>
              <td class="depth1 center bold"></td>
              <td class="depth2">Payment Transaction Failed Reminder</td>
              <td class="depth3">결제 실패</td>
              <td class="depth4">MA-CMM-500004</td>
              <td><a href="../mail/html/order/payment.html" target="_blank">payment.html</a></td>
              <td>sally</td>
              <td>O</td>
              <td>2023-11-29 td &gt; width:190px; 스타일 추가</td>
            </tr>
            <tr>
              <td class="depth1 center bold"></td>
              <td class="depth2">PG Refund Failed</td>
              <td class="depth3">PG 환불 오류</td>
              <td class="depth4">MA-CMM-500029</td>
              <td><a href="../mail/html/order/payment2.html" target="_blank">payment2.html</a></td>
              <td>sally</td>
              <td>O</td>
              <td>2023-11-29 td &gt; width:190px; 스타일 추가</td>
            </tr>
            <tr>
              <td class="depth1 center bold"></td>
              <td class="depth2">Manual Refund Failed </td>
              <td class="depth3">수기 환불 오류</td>
              <td class="depth4">MA-CMM-500030</td>
              <td><a href="../mail/html/order/payment3.html" target="_blank">payment3.html</a></td>
              <td>sally</td>
              <td>O</td>
              <td>2023-11-29 td &gt; width:190px; 스타일 추가</td>
            </tr>
            <tr>
              <td class="depth1 center bold"></td>
              <td class="depth2">RMA created</td>
              <td class="depth3">FO/BO에서 반품접수</td>
              <td class="depth4">MA-CMM-500005</td>
              <td><a href="../mail/html/order/rma.html" target="_blank">rma.html</a></td>
              <td>sally</td>
              <td>O</td>
              <td></td>
            </tr>
            <tr>
              <td class="depth1 center bold"></td>
              <td class="depth2">Refund Complete</td>
              <td class="depth3">환불 완료</td>
              <td class="depth4">MA-CMM-500006</td>
              <td><a href="../mail/html/order/refund.html" target="_blank">refund.html</a></td>
              <td>sally</td>
              <td>O</td>
              <td>2023-12-14 (주석 참고 Total Estimated Refund 만 노출 되어야 할 경우로 인한 수정)</td>
            </tr>
            <tr>
              <td class="depth1 center bold"></td>
              <td class="depth2">Refund failed for Cancellation</td>
              <td class="depth3">주문취소 후 환불실패</td>
              <td class="depth4">MA-CMM-500007</td>
              <td><a href="../mail/html/order/refund_failed.html" target="_blank">refund_failed.html</a></td>
              <td>sally</td>
              <td>O</td>
              <td>2023-11-27 박스 수정<br>2023-11-28 word-break:break-word 추가<br>2023-11-29 td &gt; width:190px; 스타일 추가</td>
            </tr>
            <tr>
              <td class="depth1 center bold"></td>
              <td class="depth2">Refund failed for Return</td>
              <td class="depth3">반품완료 후 환불실패</td>
              <td class="depth4">MA-CMM-500008</td>
              <td><a href="../mail/html/order/refund_failed2.html" target="_blank">refund_failed2.html</a></td>
              <td>sally</td>
              <td>O</td>
              <td>2023-11-27 박스 수정<br>2023-11-29 td &gt; width:190px; 스타일 추가</td>
            </tr>
            <tr>
              <td class="depth1 center bold"></td>
              <td class="depth2">Partial Return</td>
              <td class="depth3">미도착 안내</td>
              <td class="depth4">MA-CMM-500009</td>
              <td><a href="../mail/html/order/partial.html" target="_blank">partial.html</a></td>
              <td>sally</td>
              <td>O</td>
              <td></td>
            </tr>
            <tr>
              <td class="depth1 center bold"></td>
              <td class="depth2">Out of Stock Notification</td>
              <td class="depth3">품절 알림</td>
              <td class="depth4">MA-CMM-500010</td>
              <td><a href="../mail/html/order/stock_noti.html" target="_blank">stock_noti.html</a></td>
              <td>sally</td>
              <td>O</td>
              <td></td>
            </tr>
            <tr class="none">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="depth1 center bold">Delivery</td>
              <td class="depth2">Delay Monitor</td>
              <td class="depth3">배송 지연</td>
              <td class="depth4">MA-CMM-500011</td>
              <td><a href="../mail/html/delivery/delay.html" target="_blank">delay.html</a></td>
              <td>sally</td>
              <td>O</td>
              <td></td>
            </tr>
            <tr>
              <td class="depth1 center bold"></td>
              <td class="depth2">Shipped by Brand</td>
              <td class="depth3">공급사 출고</td>
              <td class="depth4">MA-CMM-500012</td>
              <td><a href="../mail/html/delivery/shipped.html" target="_blank">shipped.html</a></td>
              <td>sally</td>
              <td>O</td>
              <td></td>
            </tr>
            <tr>
              <td class="depth1 center bold"></td>
              <td class="depth2">Shipping Notification</td>
              <td class="depth3">출고 완료</td>
              <td class="depth4">MA-CMM-500013</td>
              <td><a href="../mail/html/delivery/shipping_noti.html" target="_blank">shipping_noti.html</a></td>
              <td>sally</td>
              <td>O</td>
              <td></td>
            </tr>
            <tr>
              <td class="depth1 center bold"></td>
              <td class="depth2">Delivered Notification</td>
              <td class="depth3">배송 완료</td>
              <td class="depth4">MA-CMM-500014</td>
              <td><a href="../mail/html/delivery/delivery_noti.html" target="_blank">delivery_noti.html</a></td>
              <td>sally</td>
              <td>O</td>
              <td></td>
            </tr>
            <tr class="none">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="depth1 center bold">Member</td>
              <td class="depth2">Reset Password</td>
              <td class="depth3">비밀번호 재설정</td>
              <td class="depth4">MA-CMM-500015</td>
              <td><a href="../mail/html/member/password.html" target="_blank">password.html</a></td>
              <td>sally</td>
              <td>O</td>
              <td></td>
            </tr>
            <tr>
              <td class="depth1 center bold"></td>
              <td class="depth2">Welcome to W concept</td>
              <td class="depth3">회원가입</td>
              <td class="depth4">MA-CMM-500016</td>
              <td><a href="../mail/html/member/welcome.html" target="_blank">welcome.html</a></td>
              <td>sally</td>
              <td>O</td>
              <td>2023-11-28</td>
            </tr>
            <tr>
              <td class="depth1 center bold"></td>
              <td class="depth2">(Loyalty Program) W INSIDER</td>
              <td class="depth3">등급변경 (INSIDER)</td>
              <td class="depth4">MA-CMM-500017</td>
              <td><a href="../mail/html/member/winsider.html" target="_blank">winsider.html</a></td>
              <td>sally</td>
              <td>O</td>
              <td>2023-11-28</td>
            </tr>
            <tr>
              <td class="depth1 center bold"></td>
              <td class="depth2">(Loyalty Program) W ICON</td>
              <td class="depth3">등급 변경 (ICON)</td>
              <td class="depth4">MA-CMM-500018</td>
              <td><a href="../mail/html/member/wicon.html" target="_blank">wicon.html</a></td>
              <td>sally</td>
              <td>O</td>
              <td>2023-11-28</td>
            </tr>
            <tr>
              <td class="depth1 center bold"></td>
              <td class="depth2">APP Download</td>
              <td class="depth3">최초 APP 다운</td>
              <td class="depth4">MA-CMM-500019</td>
              <td><a href="../mail/html/member/app.html" target="_blank">app.html</a></td>
              <td>sally</td>
              <td>O</td>
              <td>2023-11-28</td>
            </tr>
            <tr>
              <td class="depth1 center bold"></td>
              <td class="depth2">Newsletter</td>
              <td class="depth3">뉴스레터 구독</td>
              <td class="depth4">MA-CMM-500020</td>
              <td><a href="../mail/html/member/newsletter.html" target="_blank">newsletter.html</a></td>
              <td>sally</td>
              <td>O</td>
              <td>2023-11-28</td>
            </tr>
            <tr>
              <td class="depth1 center bold"></td>
              <td class="depth2">Birthday Gift</td>
              <td class="depth3">생일</td>
              <td class="depth4">MA-CMM-500021</td>
              <td><a href="../mail/html/member/birthday.html" target="_blank">birthday.html</a></td>
              <td>sally</td>
              <td>O</td>
              <td>2023-11-28</td>
            </tr>
            <tr>
              <td class="depth1 center bold"></td>
              <td class="depth2">Review Reminding</td>
              <td class="depth3">상품평 리마인드</td>
              <td class="depth4">MA-CMM-500022</td>
              <td><a href="../mail/html/member/review.html" target="_blank">review.html</a></td>
              <td>sally</td>
              <td>O</td>
              <td></td>
            </tr>
            <tr>
              <td class="depth1 center bold"></td>
              <td class="depth2">Coupon Reminding (Sign-Up, Level-Up, Brithday Coupon)</td>
              <td class="depth3">쿠폰 리마인드</td>
              <td class="depth4">MA-CMM-500023</td>
              <td><a href="../mail/html/member/coupon.html" target="_blank">coupon.html</a></td>
              <td>sally</td>
              <td>O</td>
              <td></td>
            </tr>
            <tr>
              <td class="depth1 center bold"></td>
              <td class="depth2">Out of Stock Notification</td>
              <td class="depth3">재구매 유도</td>
              <td class="depth4">MA-CMM-500033</td>
              <td><a href="../mail/html/member/retention.html" target="_blank">retention.html</a></td>
              <td>harper</td>
              <td>O</td>
              <td></td>
            </tr>
            <tr class="none">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="depth1 center bold">Display</td>
              <td class="depth2">Random in Order</td>
              <td class="depth3">랜덤 쿠폰</td>
              <td class="depth4">MA-CMM-500024</td>
              <td><a href="../mail/html/display/display.html" target="_blank">display.html</a></td>
              <td>sally</td>
              <td>O</td>
              <td>2023-11-28</td>
            </tr>
            <tr class="none">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="depth1 center bold">Unsubscribe</td>
              <td class="depth2">Unsubscribe</td>
              <td class="depth3">PC</td>
              <td class="depth4">MA-CMM-600001</td>
              <td><a href="https://dev-public-wcus.s3.amazonaws.com/static/publish/pc/pc/html/etc/unsubscribe.html"
                  target="_blank">unsubscribe.html</a></td>
              <td>sally</td>
              <td>O</td>
              <td></td>
            </tr>
            <tr>
              <td class="depth1 center bold"></td>
              <td class="depth2"></td>
              <td class="depth3">MO</td>
              <td class="depth4"></td>
              <td><a href="https://dev-public-wcus.s3.amazonaws.com/static/publish/mo/mo/html/etc/unsubscribe.html"
                  target="_blank">unsubscribe.html</a></td>
              <td>sally</td>
              <td>O</td>
              <td></td>
            </tr>
            <tr class="none">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td class="depth1 center bold">운영</td>
              <td class="depth2">Temporary Password Check</td>
              <td class="depth3">운영자 임시 비밀번호 안내</td>
              <td class="depth4">MA-CMM-500031</td>
              <td><a href="../mail/html/temporary/temporary.html" target="_blank">temporary.html</a></td>
              <td>sally</td>
              <td>O</td>
              <td></td>
            </tr>
            <tr>
              <td class="depth1 center bold"></td>
              <td class="depth2">Email Verification Number Check</td>
              <td class="depth3">운영자 이메일 인증 번호 안내</td>
              <td class="depth4">MA-CMM-500032</td>
              <td><a href="../mail/html/verification/verification.html" target="_blank">verification.html</a></td>
              <td>harper</td>
              <td>O</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
   
<script setup>
import Gnb from '@/components/Guide/Gnb.vue';
</script>
  
<style lang="scss">
  @import "@/assets/scss/mobile/common.scss";
  @import "@/assets/scss/mobile/guide.scss";
</style>