# Phân tích yêu cầu và thiết kế — FIT4014 A3

## 1. Cơ sở và mục tiêu

Tài liệu được đối chiếu với đề và rubric chính thức trong `FIT4014_Đề kiểm tra_Đáp án kiểm tra A3_V01_09.2026.docx` do người học bổ sung. Đây là đồ án cuối kỳ A3, hoàn thiện Portfolio CV V9, đánh giá CLO1–CLO6 và chiếm 60% tổng điểm học phần. Bản trích rubric, trọng số và các khoảng trống theo tiêu chí nằm trong [đánh giá rubric](RUBRIC_GAP_ANALYSIS.md).

Mục tiêu sản phẩm: giới thiệu Khoàng Văn Nên, sinh viên CNTT, qua một website tĩnh dễ điều hướng, đọc trên nhiều kích thước màn hình, có một demo tương tác thật và có thể triển khai trên GitHub Pages. Website không có backend; phần liên hệ mở ứng dụng email và Todo lưu ở trình duyệt hiện tại.

## 2. Phạm vi

### Trong phạm vi hiện tại

- Portfolio một trang gồm Giới thiệu, Kỹ năng, Dự án, Liên hệ và chân trang.
- Bốn thẻ dự án có nội dung chi tiết; chỉ Todo có demo hoạt động trong repository.
- Demo Todo độc lập, hỗ trợ thêm/sửa/hoàn thành/xóa và LocalStorage.
- Form liên hệ kiểm tra đầu vào rồi mở ứng dụng email qua `mailto:`.
- Tổ chức mã nguồn tĩnh: `index.html`, `assets/css/styles.css`, ảnh trong `assets/img/`, `demos/todo.html`, `demos/todo.js`.
- Hướng dẫn chạy bằng HTTP server tĩnh và dự kiến triển khai GitHub Pages.

### Ngoài phạm vi / giới hạn

- Không có đăng nhập, API server, cơ sở dữ liệu hoặc gửi email ở phía máy chủ.
- Todo không đồng bộ giữa thiết bị/trình duyệt.
- Landing Page, Weather Dashboard và Blog là ý tưởng/bài thực hành, chưa phải ba ứng dụng chạy được trong repository; Weather Dashboard chưa gọi API.
- Việc nộp bài, kiểm thử trên thiết bị thật, ảnh chụp, Lighthouse, validator và xác nhận bản publish cần do sinh viên thực hiện.

## 3. Đối tượng, nhu cầu và luồng chính

| Đối tượng | Nhu cầu | Luồng đáp ứng |
|---|---|---|
| Giảng viên/hội đồng | Hiểu mục tiêu, xem năng lực và xác minh sản phẩm | Mở portfolio → điều hướng các khu vực → xem chi tiết → mở Todo |
| Nhà tuyển dụng/người xem | Tìm nhanh hồ sơ và cách liên hệ | Xem giới thiệu/kỹ năng → xem dự án → chọn email/điện thoại hoặc form |
| Người dùng Todo | Quản lý một danh sách việc đơn giản | Thêm → cập nhật trạng thái/sửa → xóa → tải lại để kiểm tra lưu cục bộ |

Mục tiêu “tìm nội dung trong tối đa ba thao tác” là yêu cầu thiết kế cần kiểm tra bằng T02; chưa có quan sát người dùng để khẳng định đã đạt.

## 4. Yêu cầu và tiêu chí chấp nhận

| ID | Yêu cầu | Tiêu chí chấp nhận | Cách xác minh |
|---|---|---|---|
| FR01 | Điều hướng đến Giới thiệu, Kỹ năng, Dự án, Liên hệ | Mỗi liên kết đến đúng vùng, không bị header che nội dung quan trọng | T02 |
| FR02 | Mở/đóng chi tiết bốn dự án | Thao tác được bằng chuột và bàn phím; nội dung đúng trạng thái thật của từng dự án | T03 |
| FR03 | Quản lý Todo | Thêm, sửa, đánh dấu hoàn thành, xóa; đầu vào rỗng/quá dài được xử lý rõ | T11–T14 |
| FR04 | Lưu Todo cục bộ | Sau tải lại cùng origin và trình duyệt, dữ liệu còn; nếu quyền lưu bị chặn, ứng dụng báo giới hạn | T15 |
| FR05 | Liên hệ | Trường bắt buộc và email sai định dạng bị chặn; nội dung hợp lệ tạo `mailto:`, không gửi thư trên server | T06 |
| NFR01 | Responsive | Kiểm tra ngang 375/768/1440 px, ghi rõ kích thước và lỗi tràn/che khuất/thao tác | T04 |
| NFR02 | Bàn phím và trợ năng | Có skip link, focus nhìn thấy, heading/landmark hợp lý, label và tên thao tác có nghĩa; xác nhận thực tế bằng bàn phím | T05 |
| NFR03 | Chất lượng mã | HTML5 semantic, tài nguyên dễ tìm; CSS Grid/Flexbox và JavaScript hoạt động; ghi rõ vùng inline và giới hạn tái sử dụng | T08, kiểm tra mã |
| NFR04 | Có thể truy cập công khai | Portfolio và Todo mở được tại URL nộp bài; revision online khớp revision dự định nộp | T07 |
| NFR05 | Có thể đánh giá lặp lại | Ghi môi trường, bước, kết quả, lỗi và minh chứng; cùng điều kiện có thể chạy lại | Báo cáo kiểm thử + E01–E09 |

## 5. Giả định, rủi ro và giảm thiểu

| Rủi ro/giả định | Ảnh hưởng | Giảm thiểu / cách xác minh |
|---|---|---|
| Trình duyệt hiện đại hỗ trợ HTML5, CSS Grid, Flexbox và LocalStorage | Có thể khác nhau giữa trình duyệt hoặc chế độ riêng tư | Chạy T01–T15 trên trình duyệt ghi trong báo cáo; mô tả lỗi thật |
| LocalStorage có thể bị chặn hoặc dữ liệu bị xóa | Todo không giữ dữ liệu sau lần dùng | Mã có cảnh báo khi ghi thất bại; chạy T15 và ghi giới hạn |
| Google Fonts cần mạng | Font có thể tải chậm/không tải | Có font hệ thống thay thế; đánh giá ảnh hưởng bằng kiểm tra ngoại tuyến/performance nếu cần |
| Ảnh đại diện và font ảnh hưởng tải trang | Điểm hiệu năng có thể giảm | Ghi Lighthouse trước khi đề xuất tối ưu; không tuyên bố điểm khi chưa đo |
| Bản GitHub Pages có thể khác mã local | Minh chứng không khớp source nộp | Kiểm tra URL, ngày và revision ở T07; README có ghi nhận trước đây cần xác minh lại |
| Form dùng `mailto:` và phụ thuộc cấu hình máy | Có thể không mở trình soạn thư | Xác minh chỉ việc mở ứng dụng email; không coi là gửi thành công |
| Một số kiểm tra hiện chỉ dựa trên mã nguồn | Không chứng minh trải nghiệm trên trình duyệt/assistive technology | Để trạng thái CHƯA KIỂM THỬ tới khi có kết quả và E tương ứng |

## 6. Wireframe, bố cục và khả năng cải tiến

[WIREFRAME.svg](WIREFRAME.svg) hiện có ba sơ đồ cấu trúc cho desktop 1440 px, tablet 768 px và mobile 375 px. Tệp ghi thứ tự khu vực, số cột theo breakpoint, điểm mở rộng của thẻ dự án, luồng Todo/form và một số hành vi bàn phím/focus. Nó là sơ đồ thiết kế, không phải screenshot hay bằng chứng responsive.

**Giới hạn còn lại:** các frame là sơ đồ khái quát; chưa được duyệt trực quan trên MacBook để xác nhận dễ đọc, chưa nối từng khối với ID FR/NFR và chưa kiểm thử xem CSS thực tế khớp mọi chi tiết. Xác minh wireframe và ghi nhận phiên bản trong E02 sau khi rà soát.

Ở kích thước nhỏ, thiết kế mã hiện tại dùng thứ tự nội dung dọc, menu có thể cuộn ngang, thẻ dự án một cột và form liên hệ một cột. Ở breakpoint lớn hơn, hero chuyển hai cột; CSS dự án chuyển hai cột từ 768 px và ba cột từ 1280 px. Đây là mô tả quy tắc trong stylesheet, không phải xác nhận kết quả hiển thị thực tế; kiểm tra bằng T04.

## 7. Quyết định kỹ thuật và trade-off

| Quyết định | Phương án được cân nhắc | Lựa chọn và lý do | Đánh đổi / hướng mở rộng |
|---|---|---|---|
| Nền tảng | HTML/CSS/JS tĩnh hoặc SPA framework | Tĩnh: ít phụ thuộc, triển khai trên hosting tĩnh đơn giản, phù hợp phạm vi một trang | Không có component framework; nếu portfolio lớn, tách component/bundler sau khi cần |
| Layout | Flexbox/Grid hoặc kích thước pixel cố định | Grid cho nhóm/thẻ; Flexbox cho hàng điều hướng và nhóm nút; media queries điều chỉnh bố cục | Cần kiểm tra nhiều viewport; hiện breakpoint rải trong stylesheet và có vùng inline |
| Nội dung dự án | Chi tiết `<details>` hoặc modal JavaScript | `<details>/<summary>` dùng phần tử HTML native và giảm JavaScript | Khả năng tùy chỉnh hạn chế; cần kiểm tra focus và hỗ trợ trình duyệt |
| Lưu Todo | LocalStorage hoặc backend/database | LocalStorage giữ demo chạy không cần tài khoản/server | Không đồng bộ, dữ liệu chỉ trên một origin/trình duyệt; có thể thay persistence nếu yêu cầu mở rộng |
| Liên hệ | `mailto:` hoặc API gửi thư | `mailto:` không cần backend, nêu rõ hành vi cho người dùng | Phụ thuộc ứng dụng email, không có xác nhận gửi |
| CSS/JS Todo | File tách riêng hoặc inline | CSS portfolio và JS Todo đã tách; một số CSS Todo và JS form portfolio còn inline | Khó tái sử dụng/kiểm tra hơn; đề xuất tách khi được duyệt, không thay đổi trong lượt này |

## 8. Đánh giá cấu trúc kỹ thuật từ source

Đây là kiểm tra tĩnh mã nguồn, không thay cho validator hoặc kiểm thử trình duyệt:

- `index.html` có doctype HTML, `lang="vi"`, charset, viewport, metadata description, header/nav/main/section/footer, một `h1`, heading cho các phần, skip link, nhãn form và alt cho ảnh.
- `assets/css/styles.css` dùng custom properties, Flexbox, Grid, media queries, focus-visible, forced-colors và `prefers-reduced-motion`. Có nhiều phần bổ sung/ghi đè dồn về cuối file; cần kiểm tra cascade và formatter, không chỉnh lại trong lượt này.
- `demos/todo.html` chứa CSS inline; `index.html` chứa JavaScript form inline; stylesheet portfolio và `demos/todo.js` được liên kết riêng.
- `demos/todo.js` thao tác DOM bằng `textContent`, có thao tác CRUD, lưu LocalStorage và thông báo khi ghi thất bại. Chưa xác minh hành vi trên trình duyệt.
- Rà soát phát hiện form portfolio và Todo trước đây bỏ qua im lặng nếu đầu vào sau `trim()` rỗng. Đã bổ sung thông báo validation cho trường chỉ chứa khoảng trắng; cần chạy lại T06 và T11 trên trình duyệt.

## 9. Trạng thái kiểm chứng

Chưa có minh chứng thực thi cho responsive, accessibility thực tế, hiệu năng, validator hay URL triển khai mới. Trạng thái hiện hành nằm trong [báo cáo kiểm thử](../test_report.md); yêu cầu thu thập từng bằng chứng ở [EVIDENCE_INDEX.md](EVIDENCE_INDEX.md). Không diễn giải mô tả yêu cầu hoặc kiểm tra source là kết quả chạy đạt.

## 10. Nguồn tham chiếu

- Trường Đại học Đại Nam, Khoa Công nghệ thông tin. *FIT4014 – Đề kiểm tra / Đáp án kiểm tra A3, phiên bản V01, 09/2026* (tệp DOCX do người học cung cấp trong thư mục Downloads). Chi tiết trích dẫn nội bộ: [REFERENCES.md](REFERENCES.md).
- Mã nguồn hiện tại trong repository: `index.html`, `assets/css/styles.css`, `demos/todo.html`, `demos/todo.js`; được dùng để mô tả hiện trạng, không xem là nguồn rubric.
