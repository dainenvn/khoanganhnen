# Portfolio CV — Khoàng Văn Nên · 2071020140

**Học phần:** FIT4014 — A3, Đồ án website cá nhân và demo. **Lớp:** CNTT 20-01.

## Chức năng hiện có
- Trang portfolio HTML5/CSS3 với Giới thiệu, Kỹ năng, 4 thẻ ý tưởng/bài thực hành và Liên hệ.
- Điều hướng anchor, chi tiết dự án qua `<details>`, skip link, trạng thái focus, hỗ trợ reduced-motion.
- Demo Todo List độc lập ở `demos/todo.html`: thêm, sửa, đánh dấu hoàn thành, xóa và lưu bằng LocalStorage.
- Không có backend; các dự án Landing Page, Weather Dashboard và Blog là mô tả ý tưởng, **không phải ứng dụng demo đã hoàn thành**.

## Chạy trên máy
1. Giải nén ZIP, mở terminal tại thư mục chứa `index.html`.
2. Chạy `python3 -m http.server 8000`.
3. Truy cập `http://localhost:8000/` và demo `http://localhost:8000/demos/todo.html`.
4. Dừng server bằng Ctrl+C. Không cần npm hay backend.

## Cấu trúc
- `index.html` — HTML5 của portfolio.
- `assets/css/styles.css` — CSS responsive.
- `assets/img/avatar.jpg` — ảnh cá nhân cần xác nhận quyền sử dụng.
- `demos/todo.html`, `demos/todo.js` — ứng dụng Todo.
- `docs/REQUIREMENTS_AND_DESIGN.md`, `docs/WIREFRAME.svg` — phân tích và thiết kế.
- `docs/TEST_RESULTS.md`, `docs/EVIDENCE_INDEX.md` — kiểm thử và minh chứng.
- `docs/RELEASE_NOTES.md`, `docs/AI_LOG.md`, `docs/DEMO_7_PHUT.md` — bàn giao.

## Triển khai GitHub Pages
1. Tạo repository GitHub chứa toàn bộ mã nguồn (không đẩy mật khẩu/khóa API).
2. `git init`, `git add .`, `git commit -m "feat: portfolio A3 with todo demo"` (chỉ thực hiện trên máy của bạn); kết nối remote và push nhánh main.
3. GitHub → Settings → Pages → Deploy from a branch → main / (root).
4. Mở URL được GitHub cấp, kiểm tra cả trang chủ và Todo demo. Ghi URL thật và ảnh xác nhận vào Evidence Index.
5. Lịch sử Git của ZIP không được tạo giả; commit sau này phản ánh đúng hoạt động thực tế.

## Trước khi nộp
- Xác nhận địa chỉ email `daiba4887@gmail.com`, GitHub `github.com/khoangvannen`, thông tin cá nhân và quyền dùng ảnh.
- Kiểm tra responsive 375/768/1440px, Chrome/Firefox/Edge, keyboard, HTML/CSS Validator và Lighthouse.
- Điền kết quả thật và đường dẫn minh chứng vào `docs/TEST_RESULTS.md` và `docs/EVIDENCE_INDEX.md`.
- Chuẩn bị bảo vệ theo `docs/DEMO_7_PHUT.md`; không khẳng định điểm số khi chưa được giảng viên chấm.

## Tài liệu tham khảo
- MDN HTML: https://developer.mozilla.org/en-US/docs/Web/HTML
- MDN CSS: https://developer.mozilla.org/en-US/docs/Web/CSS
- MDN Web Storage: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
- GitHub Pages: https://docs.github.com/en/pages
- W3C HTML Validator: https://validator.w3.org/
