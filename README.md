# Portfolio A3 — Khoàng Văn Nên

Portfolio cá nhân cho bài kiểm tra A3 — FIT4014, giới thiệu hành trình học tập và định hướng Frontend của sinh viên năm nhất ngành Công nghệ thông tin tại Trường Đại học Đại Nam. Website tập trung vào giao diện responsive, cấu trúc semantic và một demo Todo tương tác.

## Live Demo

- **Portfolio:** [dainenvn.github.io/khoanganhnen](https://dainenvn.github.io/khoanganhnen/)
- **Todo List:** [Mở demo Todo](https://dainenvn.github.io/khoanganhnen/demos/todo.html)

> Đã kiểm tra các URL trên GitHub Pages trả về thành công ngày 07/11/2026. Bản đang publish khác mã nguồn cục bộ ở phần mô tả mở đầu của trang; các tài nguyên CSS, ảnh và Todo demo đều truy cập được. Cần publish lại để nội dung portfolio trực tuyến đồng bộ với mã nguồn mới nhất.

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
├── docs/                   # Tài liệu yêu cầu, wireframe và kịch bản demo
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

Website dùng đường dẫn tương đối như `./assets/css/styles.css` và `./demos/todo.html`, nên các tài nguyên hoạt động dưới đường dẫn project site của GitHub Pages. Các URL chính của trang và demo đã được kiểm tra truy cập; việc kiểm thử thực tế trên từng thiết bị/trình duyệt vẫn cần thực hiện riêng.

## Description cho GitHub Repository

> Portfolio A3 môn FIT4014 của Khoàng Văn Nên — sinh viên CNTT Đại học Đại Nam, định hướng Frontend. Xây dựng bằng HTML, CSS, JavaScript; có giao diện responsive và demo Todo List.

## Giới hạn

- Dữ liệu Todo chỉ lưu trên trình duyệt hiện tại, không đồng bộ giữa thiết bị.
- Form liên hệ cần ứng dụng email mặc định; không có backend gửi thư.
- Ba dự án ngoài Todo là nội dung giới thiệu ý tưởng/bài thực hành, chưa có demo hoàn chỉnh trong repository.
- Chưa có số liệu Lighthouse, báo cáo validator hoặc kết quả kiểm thử đa thiết bị được xác nhận trong README này.
