# Nhật ký thay đổi

## v1.0 — 06/11/2026

Phiên bản đầu tiên của Portfolio CV Khoàng Văn Nên.

### Chức năng mới

- Tạo website portfolio giới thiệu cá nhân, kỹ năng, dự án và thông tin liên hệ bằng HTML5, CSS3 và JavaScript.
- Bổ sung bố cục đáp ứng cho điện thoại, máy tính bảng và máy tính; có điều hướng giữa các mục và hỗ trợ thao tác bàn phím.
- Thêm phần xem chi tiết cho bốn ý tưởng/bài thực hành: Landing Page Sản Phẩm, Todo List, Weather Dashboard và Blog Cá Nhân.
- Bổ sung demo Todo List có thể thêm, sửa, đánh dấu hoàn thành, xóa và lưu công việc bằng LocalStorage.
- Thêm biểu mẫu liên hệ mở ứng dụng email mặc định để soạn thư.

### Lỗi đã sửa

- Loại bỏ khai báo DOCTYPE, meta description và liên kết bỏ qua điều hướng bị lặp.
- Sửa liên kết trở về đầu trang bằng cách bổ sung điểm neo tương ứng.
- Thay các liên kết dự án trỏ về chính thẻ bằng phần chi tiết có thể mở/đóng.
- Chỉnh màu nền và cải thiện hiển thị điều hướng trên màn hình nhỏ.
- Gộp CSS trợ năng bị trùng, bổ sung trạng thái chi tiết dự án và hỗ trợ giảm chuyển động.
- Cải thiện văn bản thay thế và mức ưu tiên tải ảnh đại diện.

### Hạn chế còn tồn tại

- Weather Dashboard, Landing Page và Blog hiện là ý tưởng/bài thực hành được giới thiệu; chưa có demo hoàn chỉnh được xác nhận. Todo List là demo chạy được trong repository.
- Todo lưu dữ liệu trong LocalStorage của trình duyệt hiện tại, không đồng bộ giữa thiết bị và có thể mất khi người dùng xóa dữ liệu trang.
- Biểu mẫu liên hệ không gửi dữ liệu qua máy chủ; cần ứng dụng email mặc định để gửi thư.
- Google Fonts cần kết nối Internet; khi ngoại tuyến, trang dùng font hệ thống thay thế.
- Chưa xác nhận kết quả kiểm thử trình duyệt, kích thước màn hình, Lighthouse, W3C Validator và triển khai GitHub Pages.