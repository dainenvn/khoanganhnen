# Portfolio A3 — Khoàng Văn Nên

Portfolio cá nhân cho bài kiểm tra A3 — FIT4014, giới thiệu hành trình học tập và định hướng Frontend của sinh viên năm nhất ngành Công nghệ thông tin tại Trường Đại học Đại Nam. Website tập trung vào giao diện responsive, cấu trúc semantic và một demo Todo tương tác.

## Live Demo

- **Portfolio:** [dainenvn.github.io/khoanganhnen](https://dainenvn.github.io/khoanganhnen/)
- **Todo List:** [Mở demo Todo](https://dainenvn.github.io/khoanganhnen/demos/todo.html)

> README trước đó ghi nhận các URL GitHub Pages truy cập được ngày 07/11/2026 và bản publish có phần mô tả mở đầu khác mã nguồn cục bộ. Đây là ghi nhận có sẵn, chưa được kiểm tra lại trong lượt hoàn thiện tài liệu này; hãy xác minh URL và đồng bộ bản publish trước khi nộp.

## Mục tiêu

Thực hành xây dựng portfolio tĩnh có cấu trúc rõ ràng, dễ điều hướng và sử dụng trên nhiều kích thước màn hình; đồng thời áp dụng HTML, CSS và JavaScript nền tảng vào một sản phẩm có thể xem trực tuyến.

## Thông tin sinh viên

| Thông tin | Nội dung |
|---|---|
| Họ tên | Khoàng Văn Nên |
| Mã sinh viên | 2071020140 |
| Lớp | CNTT 20-01 |
| Trường | Đại học Đại Nam |
| Học phần | FIT4014 |
| Định hướng | Frontend Developer |

## Tính năng hiện có

- Các khu vực Giới thiệu, Kỹ năng, Dự án và Liên hệ; điều hướng bằng liên kết neo.
- Bốn thẻ trình bày ý tưởng/bài thực hành, có phần chi tiết mở rộng.
- Giao diện responsive dùng Flexbox, CSS Grid và media queries; có skip link, focus bàn phím và hỗ trợ `prefers-reduced-motion`.
- Demo Todo List tại `demos/todo.html`: thêm, sửa, đánh dấu hoàn thành, xóa và lưu dữ liệu bằng `localStorage` trong trình duyệt hiện tại.
- Biểu mẫu liên hệ kiểm tra trường bắt buộc rồi mở ứng dụng email mặc định qua `mailto:`; website không gửi thư qua máy chủ.

> Todo List là demo tương tác có trong mã nguồn. Landing Page, Weather Dashboard và Blog được giới thiệu như ý tưởng/bài thực hành; không mô tả chúng là ứng dụng hoàn chỉnh. Weather Dashboard hiện chưa kết nối API thời tiết.

## Công nghệ

- HTML5, CSS3, JavaScript thuần (ES6+).
- Flexbox, CSS Grid, media queries và các thuộc tính accessibility.
- Google Fonts (Plus Jakarta Sans, JetBrains Mono); cần Internet để tải font, có font hệ thống thay thế.
- GitHub Pages để lưu trữ website tĩnh.

## Cấu trúc dự án

```text
.
├── index.html              # Trang portfolio chính và biểu mẫu liên hệ
├── assets/
│   ├── css/styles.css      # Giao diện và responsive
│   └── img/avatar.jpg      # Ảnh đại diện
├── demos/
│   ├── todo.html           # Giao diện demo Todo
│   └── todo.js             # Xử lý Todo và localStorage
├── docs/
│   ├── REQUIREMENTS_AND_DESIGN.md # Phân tích yêu cầu và thiết kế
│   ├── RUBRIC_GAP_ANALYSIS.md # Đối chiếu TC1–TC7 theo rubric chính thức
│   ├── REFERENCES.md         # Nguồn tham khảo
│   ├── WIREFRAME.svg        # Wireframe responsive: desktop/tablet/mobile
│   ├── DEMO_7_PHUT.md       # Kịch bản thuyết trình 7 phút
│   ├── AI_LOG.md            # Khai báo sử dụng AI
│   ├── EVIDENCE_INDEX.md    # Chỉ mục minh chứng E01–E09
│   └── RELEASE_NOTES.md     # Ghi chú phiên bản
├── test_report.md           # Smoke test local một phần; cần hoàn thiện kết quả/minh chứng
├── CHANGELOG.md            # Nhật ký thay đổi
└── README.md               # Tài liệu dự án
```

## Chạy thử trên máy

Không cần cài Node.js, npm, backend hay cơ sở dữ liệu. Có thể mở `index.html` trực tiếp, nhưng nên chạy HTTP server cục bộ:

1. Clone repository và chuyển vào thư mục dự án:

   ```bash
   git clone https://github.com/dainenvn/khoanganhnen.git
   cd khoanganhnen
   ```

2. Khởi chạy server bằng Python 3:

   **Windows (PowerShell/Command Prompt):**
   ```powershell
   py -m http.server 8000
   ```
   Nếu không có lệnh `py`, dùng `python -m http.server 8000`.

   **macOS / Linux:**
   ```bash
   python3 -m http.server 8000
   ```

3. Mở các địa chỉ:
   - Portfolio: <http://localhost:8000/>
   - Todo List: <http://localhost:8000/demos/todo.html>

Nhấn `Ctrl+C` trong terminal để dừng server.

## Xem trên máy tính, tablet và điện thoại

- Trên máy tính, mở Live Demo bằng trình duyệt hiện đại.
- Trên tablet hoặc điện thoại, mở cùng đường dẫn Live Demo trong trình duyệt của thiết bị.
- Khi kiểm tra tại chỗ, dùng chế độ responsive/device toolbar của DevTools để xem các kích thước màn hình khác nhau.

Website dùng đường dẫn tương đối như `./assets/css/styles.css` và `./demos/todo.html`, phù hợp với đường dẫn project site của GitHub Pages. README trước đây ghi nhận đã kiểm tra URL chính; cần chạy lại và ghi kết quả mới trong [báo cáo kiểm thử](test_report.md). Việc kiểm thử từng thiết bị/trình duyệt cũng cần thực hiện riêng.

## Description cho GitHub Repository

> Portfolio A3 môn FIT4014 của Khoàng Văn Nên — sinh viên CNTT Đại học Đại Nam, định hướng Frontend. Xây dựng bằng HTML, CSS, JavaScript; có giao diện responsive và demo Todo List.

## Giới hạn

- Dữ liệu Todo chỉ lưu trên trình duyệt hiện tại, không đồng bộ giữa thiết bị.
- Form liên hệ cần ứng dụng email mặc định; không có backend gửi thư.
- Ba dự án ngoài Todo là nội dung giới thiệu ý tưởng/bài thực hành, chưa có demo hoàn chỉnh trong repository.
- Chưa có số liệu Lighthouse, báo cáo validator hoặc kết quả kiểm thử đa thiết bị được xác nhận trong README này.

## Tài liệu A3

- [Phân tích yêu cầu và thiết kế](docs/REQUIREMENTS_AND_DESIGN.md), [đối chiếu rubric TC1–TC7](docs/RUBRIC_GAP_ANALYSIS.md), [nguồn tham khảo](docs/REFERENCES.md) và [wireframe responsive](docs/WIREFRAME.svg).
- [Kịch bản demo 7 phút](docs/DEMO_7_PHUT.md).
- [Báo cáo kiểm thử](test_report.md) (một số smoke test local; phần lớn kiểm thử/minh chứng còn thiếu) và [chỉ mục minh chứng E01–E09](docs/EVIDENCE_INDEX.md).
- [Khai báo sử dụng AI](docs/AI_LOG.md) và [ghi chú phiên bản](docs/RELEASE_NOTES.md).

> Bản rubric chính thức được người học cung cấp dưới dạng DOCX trong thư mục Downloads. Ma trận là đánh giá hỗ trợ theo file đó, không phải điểm số do giảng viên chấm. Wireframe có ba frame desktop/tablet/mobile nhưng cần được rà với source và yêu cầu; xem TC2 trong ma trận.
