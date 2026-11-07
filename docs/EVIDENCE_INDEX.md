# Chỉ mục minh chứng A3 — E01–E09

## Rubric tham chiếu

Rubric chính thức trong `FIT4014_Đề kiểm tra_Đáp án kiểm tra A3_V01_09.2026.docx` phân bổ: TC1 15%, TC2 20%, TC3 25%, TC4 20%, TC5 10%, TC6 5%, TC7 5%. Xem [bảng đối chiếu và nội dung tiêu chí](RUBRIC_GAP_ANALYSIS.md).

Các trạng thái dưới đây phân biệt **tài liệu/source đã tồn tại** với **bằng chứng thực thi**. Không có ảnh chụp/trình duyệt, log, screencast, kết quả Lighthouse hay validator được ghi nhận là đã thu thập trong lượt này. Không dùng sơ đồ wireframe thay screenshot sản phẩm.

## Danh mục E01–E09

| ID | Tiêu chí liên quan | Minh chứng cần có | Hiện có / còn thiếu | Vị trí cần điền sau khi thu thập |
|---|---|---|---|---|
| E01 | TC1, TC5, TC7 | README, cây thư mục/revision nộp; nguồn đề/rubric; khai báo AI và nguồn tham khảo. Có thể dùng ảnh repository hoặc bản lưu tài liệu theo yêu cầu giảng viên. | Tài liệu README/AI log/References có trong source; chưa có ảnh/revision package được chụp. | Chưa thu thập |
| E02 | TC2 | Wireframe desktop + mobile/tablet, kích thước viewport, thành phần/chú thích/luồng. | `WIREFRAME.svg` có ba frame 1440/768/375 và ghi chú luồng; cần người học rà trực quan trên MacBook, đối chiếu từng frame với CSS và thêm trace ID nếu cần. Đây vẫn là sơ đồ, không phải ảnh giao diện chạy. | Rà soát cần làm |
| E03 | TC1, TC2, TC5 | Phân tích phạm vi/yêu cầu, giả định-rủi ro, tiêu chí, trade-off; đối chiếu rubric chính thức. | Tài liệu và rubric matrix hiện có; cần người học rà lại tính đúng với đề, chưa có minh chứng giảng viên nghiệm thu. | Chưa thu thập |
| E04 | TC3 | Ảnh/chụp màn hình portfolio desktop và điều hướng, URL/revision, ngày, trình duyệt; Todo link nếu phù hợp. | Smoke test local có; ảnh/revision package chưa lưu. | Chưa thu thập |
| E05 | TC3, TC4 | Ảnh ở 375/768/1440 px, ghi DevTools mô phỏng hay thiết bị thật; nhận xét overflow/che khuất/usability. | Đã đo document/body width bằng viewport trong integrated browser; chưa rà visual clipping và chưa có ảnh. | Chưa thu thập |
| E06 | TC3, TC4 | Screencast/ảnh theo bước Todo T11–T15: thêm, sửa, hoàn thành, xóa, tải lại; ghi origin và kết quả LocalStorage. | Smoke test local thêm/hoàn thành/lưu/xóa; sửa chỉ thử với prompt stub; không có ảnh/video lưu. | Chưa thu thập |
| E07 | TC3, TC4 | Bằng chứng bàn phím/focus, reduced motion và form: thử rỗng/trắng/email sai/valid; chỉ xác nhận `mailto:` mở, không gửi thư. | Reduced-motion và whitespace validation smoke-tested; keyboard/form đủ luồng chưa xác nhận; chưa có ảnh. | Chưa thu thập |
| E08 | TC3, TC4 | Kiểm tra URL công khai portfolio/Todo, thời gian, browser, revision nếu biết, tình trạng tải và so sánh bản local. | README có ghi nhận cũ về khác biệt online/local; lần kiểm tra hiện tại CHƯA THỰC HIỆN. | Chưa thu thập |
| E09 | TC4 | Báo cáo Lighthouse và HTML/CSS validator: công cụ/phiên bản, URL/revision, mode/device, ngày, metric/lỗi/cảnh báo. Có thể bổ sung Console/network log nếu rubric yêu cầu. | CHƯA KIỂM THỬ; không có số liệu hoặc báo cáo được xác nhận. | Chưa thu thập |

## TC6 — demo và bảo vệ

`DEMO_7_PHUT.md` là kịch bản, không phải bằng chứng trình bày. Nếu giảng viên yêu cầu chứng minh demo, hỏi yêu cầu định dạng nộp và lưu screencast/biên bản thực tế theo quy định; không thêm giả lập thành một ảnh kết quả.

## Quy tắc thu thập

- Dùng dữ liệu thử không nhạy cảm; không công khai thông tin liên lạc/ảnh cá nhân ngoài phạm vi yêu cầu.
- Ghi thời gian, người chạy, thiết bị, OS/browser/version, URL/revision và ca liên quan.
- Giữ ảnh/log nguyên trạng; nếu che dữ liệu riêng tư thì ghi chú chính xác phần đã che.
- Tên tệp gợi ý (chỉ đặt sau khi tạo tệp thật): `E01-project-revision.png`, `E04-portfolio-desktop.png`, `E05-viewport-375.png`, `E06-todo-flow.mp4`, `E09-lighthouse.html`.
- Cập nhật trạng thái/đường dẫn ở đây và trạng thái ca tương ứng trong [báo cáo kiểm thử](../test_report.md). Screenshot giao diện tĩnh không tự chứng minh luồng tương tác.
