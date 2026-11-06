# Phân tích yêu cầu và thiết kế — FIT4014 A3

## Mục tiêu, phạm vi, ràng buộc
Website portfolio CV tĩnh giới thiệu sinh viên Khoàng Văn Nên, kỹ năng đang học, bốn ý tưởng/bài thực hành và kênh liên hệ. Mục tiêu là người xem tìm được thông tin trong tối đa ba thao tác điều hướng; nội dung đọc được trên điện thoại và máy tính; mã nguồn có thể chạy bằng HTTP server tĩnh và triển khai GitHub Pages. Không có backend, đăng nhập, cơ sở dữ liệu máy chủ hoặc gửi email trực tiếp từ website.

## Yêu cầu và tiêu chí chấp nhận
| Mã | Yêu cầu | Cách kiểm chứng |
|---|---|---|
| FR01 | Menu tới Giới thiệu/Kỹ năng/Dự án/Liên hệ | Nhấn từng liên kết, quan sát đúng mục |
| FR02 | Xem chi tiết bốn thẻ dự án | Mở/đóng từng thẻ bằng chuột và Enter |
| FR03 | Demo Todo thêm/sửa/xóa/hoàn thành | Chạy kịch bản T11–T15 |
| FR04 | Công việc được lưu cục bộ | Tải lại trang sau khi thêm công việc |
| NFR01 | Responsive | Kiểm thử 375, 768, 1440px, không tràn ngang |
| NFR02 | Hỗ trợ bàn phím | Tab/Shift+Tab/Enter, focus rõ ràng |
| NFR03 | Dễ bảo trì | Tách HTML, CSS, JS; không dùng backend |
| NFR04 | URL công khai | Mở GitHub Pages từ thiết bị khác |

## Giả định và rủi ro
- Giả định trình duyệt hiện đại hỗ trợ HTML5, CSS Grid, Flexbox và LocalStorage.
- Rủi ro trình duyệt chặn LocalStorage: ứng dụng vẫn dùng được trong phiên, có thông báo khi không lưu được.
- Rủi ro ảnh cá nhân nặng: cần đo Lighthouse và tối ưu sau khi có số liệu.
- Rủi ro liên kết email/GitHub chưa xác minh: sinh viên phải xác nhận trước khi nộp.
- Rủi ro font Google tải chậm khi mất mạng: đã có font hệ thống dự phòng.

## So sánh phương án (trade-off)
| Quyết định | Phương án A | Phương án B | Lựa chọn và đánh đổi |
|---|---|---|---|
| Website | HTML/CSS/JS tĩnh | Framework SPA | Tĩnh: ít phụ thuộc, dễ triển khai; đổi lại không có hệ thống component framework |
| Layout | Flexbox/Grid | Bố cục cố định pixel | Flex/Grid: responsive và dễ bảo trì; cần kiểm tra nhiều breakpoint |
| Lưu Todo | LocalStorage | Backend/database | LocalStorage: demo chạy không cần máy chủ; dữ liệu không đồng bộ thiết bị |
| Dự án | Thẻ details | Modal JavaScript | Details: hỗ trợ bàn phím gốc, ít JS; khả năng tùy biến hiệu ứng hạn chế |

## Sơ đồ bố cục
Xem `WIREFRAME.svg`: header, hero, skills, projects và contact. Đây là sơ đồ kỹ thuật của phiên bản này, không phải ảnh chụp kiểm thử.
