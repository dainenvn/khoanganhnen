# Kịch bản demo Portfolio A3 — 7 phút

**Rubric liên quan:** A3.TC6 (5%); phần demo cũng hỗ trợ trình bày TC2/TC3/TC4.
**Thời lượng:** đúng 07:00 theo nhịp bên dưới.
**Cảnh báo:** nội dung này là kịch bản, không phải minh chứng đã chạy. Chỉ đọc số đo/kết quả thật sau khi đã thu thập chúng.

## Chuẩn bị trước khi bắt đầu

1. Mở bản/revision sẽ trình bày; kiểm tra địa chỉ URL, tải lại trang và chuẩn bị local backup.
2. Mở sẵn portfolio và `demos/todo.html`; dùng dữ liệu demo không cá nhân, ghi trước dữ liệu nào sẽ xóa.
3. Nếu trình diễn responsive, chuẩn bị DevTools tại viewport mục tiêu. Gọi rõ đây là mô phỏng viewport, không phải thiết bị thật.
4. Chỉ mở báo cáo Lighthouse/validator nếu đã chạy trên đúng revision. Nếu chưa, nói rõ **CHƯA KIỂM THỬ / CHƯA ĐO**, không ước lượng điểm.
5. Đóng tab/email có thông tin riêng tư; không gửi thư thật trong buổi demo.

## Lời dẫn, thao tác và thời lượng

| Thời gian | Trọng tâm/lời dẫn | Thao tác cụ thể |
|---|---|---|
| **00:00–00:35** | **Bối cảnh.** “Em trình bày Portfolio A3 FIT4014. Mục tiêu là giúp người xem nắm nhanh hồ sơ và định hướng Frontend; trong repository có một demo chức năng là Todo. Đây là website tĩnh, không có backend.” | Hiện đầu trang, chỉ tên, vai trò và hai nút điều hướng chính. |
| **00:35–01:15** | **Nhu cầu và phạm vi.** “Người xem có thể tìm thông tin qua Giới thiệu, Kỹ năng, Dự án, Liên hệ. Bốn thẻ dự án không đồng nghĩa bốn ứng dụng: Todo có demo; Landing Page, Weather Dashboard và Blog là ý tưởng/bài thực hành được mô tả.” | Dùng navigation mở các mục; dừng ở dự án và phân biệt rõ trạng thái từng thẻ. |
| **01:15–02:00** | **Thiết kế và lựa chọn.** “Wireframe có ba sơ đồ desktop, tablet và mobile để thể hiện thứ tự khu vực/breakpoint. Em chọn HTML/CSS/JavaScript tĩnh để giảm phụ thuộc; Grid/Flexbox để tổ chức layout; `<details>` để mở nội dung native; LocalStorage cho demo không cần server. Đánh đổi là Todo không đồng bộ, còn mailto phụ thuộc ứng dụng email.” | Mở một chi tiết dự án; chuyển tài liệu để chỉ ba frame nếu cần. Không gọi wireframe là screenshot. |
| **02:00–02:50** | **Triển khai.** “Trang dùng các landmark HTML, heading, alt ảnh, nhãn form, skip link và focus style trong source. CSS có breakpoint và hỗ trợ reduced motion. Những điểm này cần kiểm tra trên trình duyệt/assistive technology; không suy ra mức tuân thủ chỉ từ mã.” | Dùng Tab để đưa focus đến skip link/navigation và một summary; mở một summary bằng Enter. Nếu chưa rehearsal thì không khẳng định thao tác thành công. |
| **02:50–04:30** | **Case study — Todo.** “Bối cảnh là cần minh họa thao tác CRUD mà không cần server. Em dùng LocalStorage theo origin/trình duyệt; dữ liệu không đồng bộ. Tiêu chí quan sát là mục xuất hiện, trạng thái/bộ đếm cập nhật, thao tác sửa/xóa đúng và dữ liệu còn sau tải lại.” | Mở Todo; thêm một mục thử nghiệm; đánh dấu hoàn thành; sửa; tải lại để kiểm tra lưu; xóa mục. Nếu một bước không đạt, mô tả đúng lỗi và không giả lập kết quả. |
| **04:30–05:35** | **Responsive.** “CSS mobile-first bắt đầu với một cột; ở breakpoint tablet/desktop thay đổi bố cục và số cột. Wireframe đưa ra các sơ đồ ở 375, 768 và 1440 px; chúng là thiết kế, không thay thế kiểm thử giao diện.” | Trở về portfolio, mở DevTools Responsive, kiểm tra lần lượt 375 px và 768 px (thêm 1440 px nếu kịp); cuộn ngang và chỉ ghi nhận overflow/che khuất thật. Không tuyên bố đã thử điện thoại thật nếu chỉ dùng DevTools. |
| **05:35–06:20** | **Accessibility và form.** “Thao tác bàn phím, focus, reduced motion và validation cần được kiểm tra độc lập. Form chỉ mở email soạn sẵn qua `mailto:`; website không gửi thư.” | Tab qua form; thử một trường chỉ có khoảng trắng để xem validation mới; không nhập/thể hiện thông tin riêng. Hủy thao tác email nếu mở. |
| **06:20–07:00** | **Hiệu năng, giới hạn và kết luận.** “Hiệu năng cần báo cáo theo lần đo có môi trường/revision. Hiện tại nếu chưa có Lighthouse/validator thì em công khai là chưa đo, không đưa điểm dự kiến. Các bước tiếp theo là hoàn tất kiểm thử và bổ sung E01–E09. Em sẵn sàng giải thích trade-off.” | Nếu đã có E09 thật, mở và nêu URL, mode/device, ngày và số đo; nếu chưa, để phần giới hạn/báo cáo hiện trạng. Kết thúc đúng 07:00. |

## Nhịp thời gian

00:35 + 00:40 + 00:45 + 00:50 + 01:40 + 01:05 + 00:45 + 00:40 = **07:00**.

## Câu hỏi phản biện nên luyện

1. **Vì sao không dùng framework/backend?** Phạm vi là portfolio tĩnh và một demo nhỏ; giảm phụ thuộc, đổi lại thiếu component/server và đồng bộ dữ liệu.
2. **LocalStorage có giới hạn gì?** Theo origin/trình duyệt, có thể bị xóa/chặn, không đồng bộ; không phù hợp dữ liệu quan trọng.
3. **Form liên hệ có gửi được không?** Nó tạo `mailto:` để ứng dụng email gửi; website không có backend và không thể xác nhận thư đã gửi.
4. **Responsive/accessibility/performance đã đạt chưa?** Trả lời theo báo cáo có môi trường và E tương ứng; nếu chưa chạy, nói “CHƯA KIỂM THỬ/CHƯA ĐO”.
5. **Ba dự án còn lại đã hoàn chỉnh chưa?** Chưa; chúng được trình bày là ý tưởng/bài thực hành, không quảng bá là ứng dụng đã triển khai.

## Xử lý sự cố

- **URL public lỗi/nội dung cũ:** chuyển bản local, công khai chênh lệch; không nói online đã cập nhật.
- **LocalStorage không lưu:** giải thích kết quả quan sát, kiểm tra origin/quyền; không nạp dữ liệu giả.
- **Không có thiết bị di động:** ghi rõ DevTools mô phỏng viewport.
- **Email mở nhầm ứng dụng:** hủy, không gửi; giải thích `mailto:` cần app mặc định.
- **Không đủ thời gian:** bỏ qua cuộn nội dung phụ, giữ case study và giới hạn trung thực.

**Minh chứng demo:** kịch bản không thay cho video/bằng chứng trình bày. Làm theo yêu cầu nộp thực tế và cập nhật [chỉ mục E01–E09](EVIDENCE_INDEX.md) nếu giảng viên yêu cầu.
