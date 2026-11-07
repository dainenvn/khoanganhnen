# Ghi chú phiên bản — Portfolio A3

## v1.0 — phiên bản được ghi trong CHANGELOG (06/11/2026)

**Trạng thái:** mốc phiên bản trong nhật ký thay đổi; chưa xác nhận là bản phát hành cuối cùng hoặc bản đang được GitHub Pages phục vụ.

### Nội dung

- Portfolio cá nhân với các phần Giới thiệu, Kỹ năng, Dự án và Liên hệ.
- Bố cục CSS responsive sử dụng Flexbox, CSS Grid và media queries.
- Bốn thẻ dự án có nội dung mở rộng: Landing Page, Todo List, Weather Dashboard và Blog.
- Demo Todo riêng hỗ trợ thêm, sửa, đánh dấu hoàn thành, xóa và lưu trong LocalStorage của trình duyệt.
- Form liên hệ kiểm tra trường bắt buộc và email rồi mở ứng dụng email thông qua `mailto:`; không gửi thư qua máy chủ.
- Tài liệu dự án gồm README, phân tích yêu cầu/thiết kế và wireframe.

### Giới hạn đã biết

- Todo không đồng bộ giữa thiết bị; dữ liệu phụ thuộc trình duyệt hiện tại.
- Form liên hệ cần ứng dụng email được cấu hình.
- Landing Page, Weather Dashboard và Blog là ý tưởng/bài thực hành được giới thiệu, không phải các ứng dụng hoàn chỉnh trong repository; Weather Dashboard chưa kết nối API thời tiết.
- Google Fonts cần Internet; có font hệ thống thay thế.
- Chênh lệch giữa nội dung đang publish và mã nguồn cục bộ từng được README ghi nhận; cần kiểm tra lại trước khi nộp.
- Kết quả responsive, trình duyệt, validator, Lighthouse và kiểm thử URL hiện chưa có báo cáo thực thi được xác nhận. Xem [báo cáo kiểm thử](../test_report.md).

## Tài liệu được hoàn thiện cho hồ sơ A3

Trong lượt rà soát rubric chính thức, bổ sung ma trận TC1–TC7, nguồn tham khảo, cập nhật phân tích yêu cầu/trade-off, kịch bản demo 7 phút, báo cáo kiểm thử ghi rõ các smoke test đã chạy và các hạng mục còn CHƯA KIỂM THỬ, khai báo AI và chỉ mục minh chứng E01–E09.
- Mở rộng wireframe thành ba sơ đồ cấu trúc desktop/tablet/mobile theo breakpoint hiện có; đây không phải ảnh screenshot và cần người học rà lại trên MacBook.

**Thay đổi mã nguồn nhỏ:** form liên hệ và Todo không còn bỏ qua im lặng khi đầu vào chỉ chứa khoảng trắng; trường không hợp lệ hiển thị native validation message. Smoke test local đã xác nhận nhánh này; các nhánh còn lại của T06/T11 vẫn cần kiểm tra. Layout/CSS không đổi.

Đây là cập nhật tài liệu và sửa validation nhỏ, không phải phát hành phiên bản mới. Không commit hoặc push trong lượt này.

## Trước khi tuyên bố phát hành/nộp bài

1. Đối chiếu toàn bộ TC1–TC7 với rubric chính thức.
2. Chạy các ca trong báo cáo kiểm thử, lưu kết quả thật và cập nhật trạng thái.
3. Thu thập minh chứng theo [EVIDENCE_INDEX.md](EVIDENCE_INDEX.md).
4. Kiểm tra lại URL công khai và xác nhận nội dung online khớp revision dự định nộp.
