# Portfolio CV — Khoàng Văn Nên

Website portfolio cá nhân giới thiệu Khoàng Văn Nên, sinh viên Công nghệ thông tin định hướng Frontend. Dự án được xây dựng bằng HTML, CSS và JavaScript thuần; không cần cài thư viện hay dịch vụ backend để xem website.

## Mục lục

- [Chức năng](#chức-năng)
- [Công nghệ sử dụng](#công-nghệ-sử-dụng)
- [Yêu cầu môi trường](#yêu-cầu-môi-trường)
- [Cài đặt và chạy thử](#cài-đặt-và-chạy-thử)
- [Cấu hình](#cấu-hình)
- [Chạy bằng Docker](#chạy-bằng-docker)
- [Thông tin liên hệ](#thông-tin-liên-hệ)

## Chức năng

- Giới thiệu cá nhân, định hướng nghề nghiệp và kỹ năng.
- Điều hướng tới các phần Giới thiệu, Kỹ năng, Dự án và Liên hệ.
- Trình bày bốn ý tưởng/bài thực hành: Landing Page Sản Phẩm, ứng dụng Todo List, Weather Dashboard và Blog Cá Nhân.
- Cung cấp demo Todo List độc lập tại `demos/todo.html`, hỗ trợ thêm, sửa, đánh dấu hoàn thành, xóa và lưu công việc trong `localStorage` của trình duyệt.
- Giao diện thích ứng với điện thoại, máy tính bảng và máy tính; có hỗ trợ thao tác bàn phím.
- Biểu mẫu liên hệ mở ứng dụng email mặc định để soạn thư; website không gửi dữ liệu qua máy chủ.

> Weather Dashboard, Landing Page và Blog được giới thiệu là ý tưởng/bài thực hành trong portfolio; không nên hiểu là các ứng dụng đã triển khai đầy đủ. Demo chạy được trong repository là Todo List.

## Công nghệ sử dụng

- HTML5 semantic.
- CSS3, Flexbox, CSS Grid và media queries.
- JavaScript ES6+ và DOM.
- `localStorage` để lưu dữ liệu Todo trên trình duyệt hiện tại.
- Google Fonts: Plus Jakarta Sans và JetBrains Mono (cần Internet để tải; có font hệ thống thay thế).
- Docker tùy chọn, dùng Nginx để phục vụ website tĩnh.

## Yêu cầu môi trường

### Mở trực tiếp

Trình duyệt hiện đại như Chrome, Firefox, Edge hoặc Safari. Mở `index.html` có thể xem portfolio, nhưng nên dùng máy chủ HTTP cục bộ để kiểm tra đầy đủ điều hướng và demo Todo.

### Chạy trên máy tính

- Python 3 (khuyến nghị) hoặc một HTTP server tĩnh tương đương.
- Không cần Node.js, npm, cơ sở dữ liệu hay API key.

### Chạy bằng Docker

- Docker Engine trên Linux hoặc Docker Desktop trên Windows/macOS.
- Có kết nối Internet lần đầu để tải image `nginx:alpine`.

## Cài đặt và chạy thử

### 1. Lấy mã nguồn

Nếu đã có thư mục dự án trên máy, mở terminal tại thư mục chứa `index.html`. Hoặc clone repository:

```bash
git clone https://github.com/dainenvn/khoanganhnen.git
cd khoanganhnen
```

### 2. Chạy máy chủ HTTP cục bộ

Chọn hướng dẫn theo hệ điều hành. Các lệnh chạy server cần được giữ mở trong terminal.

#### Windows

Mở PowerShell hoặc Command Prompt tại thư mục dự án:

```powershell
py -m http.server 8000
```

Nếu lệnh `py` không có nhưng đã cài Python:

```powershell
python -m http.server 8000
```

#### macOS

Mở Terminal, chuyển tới thư mục dự án rồi chạy:

```bash
python3 -m http.server 8000
```

#### Linux

Mở terminal tại thư mục dự án rồi chạy:

```bash
python3 -m http.server 8000
```

Nếu hệ thống chưa cài Python 3, hãy cài Python 3 bằng trình quản lý gói của bản phân phối Linux hoặc dùng Docker theo hướng dẫn bên dưới.

#### Mở website và demo

Khi server đã chạy, mở các địa chỉ sau trong trình duyệt:

- Portfolio: <http://localhost:8000/>
- Demo Todo List: <http://localhost:8000/demos/todo.html>

Để dừng server, nhấn `Ctrl+C` trong terminal đang chạy server. Có thể thay `8000` bằng cổng khác nếu cổng này đang được sử dụng; khi đó hãy dùng cổng mới trong địa chỉ trình duyệt.

## Cấu hình

Dự án không cần file cấu hình hay biến môi trường để chạy.

- **Nội dung portfolio:** chỉnh sửa `index.html`.
- **Giao diện:** chỉnh sửa `assets/css/styles.css`.
- **Ảnh đại diện:** thay `assets/img/avatar.jpg` (nên giữ tên file hoặc cập nhật đường dẫn ảnh trong `index.html`).
- **Demo Todo:** mã giao diện ở `demos/todo.html`, xử lý ở `demos/todo.js`.
- **Lưu Todo:** dữ liệu được lưu riêng trong `localStorage` của trình duyệt. Dữ liệu không đồng bộ giữa thiết bị hoặc trình duyệt; xóa dữ liệu trang web trong trình duyệt có thể làm mất danh sách.
- **Font chữ:** Google Fonts tải từ Internet; khi ngoại tuyến, trang dùng font hệ thống dự phòng.
- **Biểu mẫu liên hệ:** mở ứng dụng email mặc định với địa chỉ người nhận được thiết lập trong `index.html`. Biểu mẫu không có backend và không tự gửi thư.

## Chạy bằng Docker

Không cần tạo Dockerfile. Từ thư mục dự án, dùng image Nginx để phục vụ nội dung tĩnh ở cổng `8080`.

### macOS và Linux

```bash
docker run --rm --name portfolio -p 8080:80 \
  -v "$PWD:/usr/share/nginx/html:ro" nginx:alpine
```

### Windows PowerShell

Chạy tại thư mục dự án:

```powershell
docker run --rm --name portfolio -p 8080:80 `
  -v "${PWD}:/usr/share/nginx/html:ro" nginx:alpine
```

### Windows Command Prompt

Chạy tại thư mục dự án:

```cmd
docker run --rm --name portfolio -p 8080:80 -v "%cd%:/usr/share/nginx/html:ro" nginx:alpine
```

Sau khi container khởi động, mở:

- Portfolio: <http://localhost:8080/>
- Demo Todo List: <http://localhost:8080/demos/todo.html>

Nhấn `Ctrl+C` để dừng và xóa container. Thư mục được mount chỉ đọc; mã nguồn không bị thay đổi bởi container. Nếu cổng `8080` đang bận, đổi phần `8080:80` thành cổng trống khác, ví dụ `8081:80`.

## Thông tin liên hệ

- **Tên:** Khoàng Văn Nên
- **Email:** [daiba4887@gmail.com](mailto:daiba4887@gmail.com)
- **Điện thoại:** [+84 906 019 416](tel:+84906019416)
- **Khu vực:** Lai Châu, Việt Nam
