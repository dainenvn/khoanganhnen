# Nhật ký sử dụng AI — Portfolio A3 FIT4014

## Khai báo

- **Công cụ:** AI assistant sử dụng Copilot SDK trong VS Code.
- **Ngày hỗ trợ:** 07/11/2026.
- **Mục đích:** rà soát mã nguồn/tài liệu, đọc đề và rubric chính thức, lập đối chiếu TC1–TC7 và biên tập hồ sơ A3.
- **Phạm vi thay đổi:** tài liệu Markdown, mở rộng sơ đồ wireframe SVG ba viewport (được người học duyệt), và các thay đổi JavaScript nhỏ để trường form liên hệ/Todo chỉ có khoảng trắng hiển thị thông báo validation thay vì bị bỏ qua im lặng. Không thay bố cục/CSS hoặc ảnh website.

## AI đã hỗ trợ

- Tóm tắt các đặc điểm có thể quan sát trong mã nguồn: cấu trúc portfolio, các thẻ dự án, Todo dùng LocalStorage, form liên hệ `mailto:` và wireframe.
- Đọc/trích xuất `FIT4014_Đề kiểm tra_Đáp án kiểm tra A3_V01_09.2026.docx`; dùng đúng trọng số TC1–TC7 (15%, 20%, 25%, 20%, 10%, 5%, 5%) để lập ma trận khoảng trống.
- Soạn/cập nhật phân tích yêu cầu, kịch bản demo, kế hoạch kiểm thử, chỉ mục minh chứng, ghi chú phát hành và trích dẫn nguồn rubric.
- Mở rộng `WIREFRAME.svg` thành sơ đồ cấu trúc desktop/tablet/mobile dựa theo CSS hiện tại. Đây là wireframe, không phải screenshot hay minh chứng giao diện chạy.
- Sửa validation form liên hệ và Todo để đầu vào chỉ có khoảng trắng không bị bỏ qua im lặng. Smoke test local xác nhận thông báo validation; xem phạm vi/chưa hoàn tất trong T06/T11.
- Đánh dấu rõ các kết quả kiểm thử và minh chứng chưa có thay vì tự tạo số liệu, ảnh hoặc trạng thái “Đạt”.

## Việc AI không thực hiện

- Chỉ chạy smoke test cục bộ trên integrated browser cho một phần T01–T06, T09–T15; không kiểm tra thiết bị thật, URL GitHub Pages, Lighthouse hay validator.
- Không lưu ảnh/video/log kiểm thử làm tệp minh chứng; thao tác sửa Todo dùng stub cho `prompt()` vì browser harness không hỗ trợ hộp thoại native.
- Không tạo ảnh chụp, log, điểm hiệu năng hoặc kết quả kiểm thử giả.
- Không thay đổi giao diện trực quan hoặc các chức năng sẵn có khác; không commit và không push.

## Trách nhiệm xác minh

Chủ dự án cần đọc lại và chỉnh nội dung theo rubric/quy định học phần; tự chạy từng ca kiểm thử, lưu minh chứng thật, xác nhận thông tin cá nhân/URL và chịu trách nhiệm về nội dung cuối cùng. Ma trận hiện dẫn rubric chính thức đã đọc, nhưng chỉ giảng viên/người chấm xác nhận mức điểm. Cập nhật nhật ký nếu có sử dụng AI thêm.

Nếu AI tiếp tục được dùng cho mã nguồn hoặc các phần khác, cần cập nhật nhật ký này để mô tả đúng công cụ, phạm vi và phần việc thực tế.
