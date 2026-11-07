# Báo cáo kiểm thử và chất lượng — Portfolio A3 FIT4014

## 1. Thông tin báo cáo

| Trường | Giá trị |
|---|---|
| Sản phẩm | Portfolio A3 — Khoàng Văn Nên |
| Phiên bản tham chiếu | v1.0 theo [CHANGELOG.md](CHANGELOG.md); chưa xác nhận đây là bản phát hành đã được nghiệm thu |
| Ngày lập tài liệu | 07/11/2026 |
| Phạm vi | Portfolio, điều hướng, thẻ dự án, Todo demo, form liên hệ, responsive và tài liệu |
| Cơ sở rubric | `FIT4014_Đề kiểm tra_Đáp án kiểm tra A3_V01_09.2026.docx`, TC4 (20%); liên kết các tiêu chí khác tại [bảng đối chiếu](docs/RUBRIC_GAP_ANALYSIS.md) |
| Trạng thái | **Đã smoke-test một phần trên browser local; chưa đủ đánh giá rubric, chưa có tệp minh chứng E04–E09** |

## 2. Cơ sở và giới hạn

Báo cáo kết hợp rà soát mã nguồn với smoke test giới hạn trên local browser và đối chiếu đề/rubric chính thức. Các kết quả từng phần được ghi theo từng ca bên dưới. Chưa có screenshot/video/log được lưu thành tệp, chưa chạy Lighthouse/validator và chưa kiểm tra trên thiết bị thật hoặc URL public.

Website là ứng dụng tĩnh; repository chưa mô tả bộ kiểm thử tự động. Mọi dòng trạng thái **CHƯA KIỂM THỬ** cần được thực hiện trên máy và cập nhật cùng ngày, môi trường, kết quả quan sát và mã minh chứng. Không suy diễn “đạt” từ việc chức năng có mặt trong mã nguồn.

## 3. Môi trường kiểm thử

Điền thông tin sau khi kiểm thử thực tế:

| Thành phần | Thông tin cần ghi |
|---|---|
| Thiết bị / hệ điều hành | Chưa ghi nhận |
| Trình duyệt và phiên bản | VS Code integrated browser, Chromium 150.0.7871.250 / Electron 43.8.3 theo user-agent; UA báo macOS 10.15.7, chưa xác minh host OS |
| Bản kiểm thử | Mã nguồn làm việc cục bộ, phục vụ bằng Python 3.9.6 `http.server` tại `http://127.0.0.1:8765/`; không phải URL public |
| Viewport | 375×900, 768×900, 1440×900 CSS px; các kiểm tra khác dùng viewport 1440×900 |
| Ngày, người kiểm thử | 07/11/2026; kiểm tra hỗ trợ qua Copilot, người học cần tự chạy/đối chiếu trên MacBook |
| URL/revision hoặc commit hash | Bản local trong worktree; chưa khóa revision/commit để nộp |

## 4. Quy ước trạng thái

- **CHƯA KIỂM THỬ:** chưa có bằng chứng thực thi.
- **Một phần:** chỉ thực hiện được một phần bước; ghi rõ phần đã thử và phần còn thiếu.
- **Đạt / Không đạt / Bị chặn:** chỉ điền sau khi chạy, kèm bước tái hiện và minh chứng.
- Lần smoke test này không lưu screenshot/video/log làm tệp minh chứng; chỉ lưu quan sát trong báo cáo. Không để trạng thái một phần bị hiểu là hoàn thành ca.

## 5. Danh sách ca kiểm thử

| ID | Hạng mục | Bước kiểm thử / tiêu chí quan sát | Trạng thái hiện tại | Minh chứng |
|---|---|---|---|---|
| T01 | Tải trang portfolio | Mở local; xác nhận nội dung, CSS, ảnh, lỗi console và trường hợp mạng ngoại tuyến phù hợp mục tiêu. | Một phần — local portfolio và Todo trả HTTP 200; title portfolio đúng; chưa kiểm tra ngoại tuyến/console đầy đủ. | E04 |
| T02 | Điều hướng | Mở từng liên kết Giới thiệu, Kỹ năng, Dự án, Liên hệ; ghi nếu đích bị header che hoặc không đúng. | Một phần — nhấn Kỹ năng đưa hash tới `#skills`; chưa chạy các liên kết còn lại. | E04 |
| T03 | Chi tiết dự án | Mở/đóng bốn thẻ bằng chuột và bàn phím; kiểm tra nội dung phản ánh đúng trạng thái thật; liên kết Todo hoạt động. | Một phần — đã mở thẻ chi tiết đầu tiên; ba thẻ còn lại và liên kết Todo chưa xác nhận trong ca này. | E04 |
| T04 | Giao diện theo viewport | Dùng 375, 768, 1440 px; ghi viewport thực, tràn ngang có/không, thành phần bị che và thao tác khó. Không coi `overflow-x:hidden` là bằng chứng không tràn. | Một phần — document/body scrollWidth lần lượt bằng 375/768/1440; chưa rà visual clipping/che khuất, `overflow-x:hidden` có thể che lỗi. | E05 |
| T05 | Bàn phím/focus | Dùng Tab/Shift+Tab/Enter; thử skip link, nav, details, form, Todo; ghi điểm focus bị mất/điều khiển không thao tác được. | CHƯA KIỂM THỬ — automation không chuyển focus ổn định khỏi BODY; cần người học thử bàn phím thật trên MacBook. | E07 |
| T06 | Form liên hệ | Thử trường rỗng, chỉ khoảng trắng, email sai và đầu vào hợp lệ; xác nhận validation và `mailto:` mở đúng. Không gửi email thật. | Một phần — tên chỉ có khoảng trắng nhận thông báo validation; email sai, trường rỗng và luồng `mailto:` chưa kiểm tra. | E07 |
| T07 | URL công khai | Mở URL portfolio và Todo trên mạng; ghi thời điểm, URL, revision nếu biết, lỗi tải và khác biệt so với local. | CHƯA KIỂM THỬ — chỉ kiểm tra server local. | E08 |
| T08 | Validator / hiệu năng | Chạy HTML/CSS validator và Lighthouse; lưu phiên bản công cụ, URL/revision, điều kiện chạy, toàn bộ metric/cảnh báo. Không ghi điểm trước khi chạy. | CHƯA KIỂM THỬ | E09 |
| T09 | Chuyển động giảm | Bật `prefers-reduced-motion`; xác nhận cuộn/transition không gây chuyển động ngoài mong đợi. | Một phần — media preference giảm được nhận và computed `scroll-behavior` là `auto`; chưa kiểm tra mọi animation/transition. | E07 |
| T10 | Tài liệu và liên kết | Mở README, wireframe, yêu cầu, kịch bản, report, rubric matrix, References, AI log, release notes; kiểm tra link đích. | Một phần — script kiểm tra đường dẫn Markdown tương đối không thiếu; chưa duyệt thủ công mọi liên kết. | E01–E03 |
| T11 | Todo — thêm | Thêm nội dung hợp lệ, chuỗi chỉ khoảng trắng và giới hạn độ dài; ghi kết quả/bộ đếm/validation quan sát được. | Một phần — thêm hợp lệ và thông báo cho chuỗi trắng đã quan sát; giới hạn tối đa chưa thử. | E06 |
| T12 | Todo — sửa | Sửa một mục; thử hủy, chuỗi trắng và quá giới hạn; kiểm tra nội dung cuối. | Một phần — edit handler cập nhật nội dung khi `prompt` được stub trong browser; native prompt không được browser harness hỗ trợ, nên thao tác người dùng thực chưa xác nhận. | E06 |
| T13 | Todo — hoàn thành | Đánh dấu/bỏ đánh dấu; xác nhận trạng thái và bộ đếm cập nhật. | Đạt trong smoke test local — checkbox/bộ đếm hiển thị `1/1`; không có screenshot lưu. | E06 |
| T14 | Todo — xóa | Xóa một mục/cuối cùng; xác nhận mục biến mất và thông báo danh sách rỗng. | Đạt trong smoke test local — mục thử nghiệm bị xóa, trạng thái rỗng hiện; dữ liệu thử đã được dọn. | E06 |
| T15 | Todo — lưu trữ | Tải lại cùng origin và trình duyệt; ghi dữ liệu còn/mất. Nếu có thể, kiểm tra quyền lưu bị chặn mà không xóa dữ liệu người dùng. | Đạt trong smoke test local — mục thử nghiệm và trạng thái hoàn thành vẫn còn sau reload; mục thử đã xóa sau đó. | E06 |

## 6. Quan sát từ mã nguồn (không phải kết quả chạy)

- Smoke test local xác nhận thêm, chuỗi trắng, đánh dấu hoàn thành, chỉnh sửa handler (với stub cho prompt), xóa và LocalStorage. Chưa hoàn tất mọi biên đầu vào; native prompt chưa kiểm tra được trong browser harness.
- Form liên hệ kiểm tra tính hợp lệ của trường rồi tạo liên kết `mailto:`; không có backend gửi thư. Smoke test local xác nhận tên chỉ chứa khoảng trắng báo validation; các nhánh còn lại của T06 CHƯA KIỂM THỬ.
- Trong VS Code browser harness, native `prompt()` không được hỗ trợ; luồng chỉnh sửa chỉ smoke-test bằng prompt stub, không xác nhận giao diện hộp thoại native.
- README ghi nhận bản GitHub Pages từng có khác biệt nội dung so với mã nguồn cục bộ. Cần kiểm tra lại URL trước khi nộp; ghi nhận này không thay thế kiểm thử hiện tại.
- Tài liệu yêu cầu đặt mục tiêu responsive 375/768/1440 px, nhưng chưa có số đo/kết quả viewport đính kèm.

## 7.1. Bảng metric / ghi nhận (điền sau khi chạy)

| Metric / quan sát | Cách ghi | Giá trị hiện tại |
|---|---|---|
| Viewport và cuộn ngang | Chiều rộng CSS px; có/không overflow; tên phần tử bị tràn nếu có | CHƯA KIỂM THỬ |
| Kết quả T01–T15 | Số Đạt / Không đạt / Bị chặn; đính kèm ID lỗi | CHƯA KIỂM THỬ |
| Lighthouse | Ghi từng category/score, phiên bản, URL, thiết bị/mode và ngày | CHƯA KIỂM THỬ — không có điểm ghi nhận |
| HTML/CSS validation | Ghi số lỗi/cảnh báo cùng công cụ/phiên bản và đầu vào | CHƯA KIỂM THỬ — không có kết quả |
| Accessibility | Ghi phương pháp/công cụ và lỗi quan sát; không suy ra WCAG compliance từ focus style | CHƯA KIỂM THỬ |
| Console/network | Ghi lỗi JS, tài nguyên lỗi, URL và bước tái hiện | CHƯA KIỂM THỬ |

## 7.2. Nhật ký lỗi và retest

| Defect ID | Ngày / môi trường | Ca liên quan | Bước tái hiện và kết quả thật | Nguyên nhân | Khắc phục | Kết quả retest / minh chứng |
|---|---|---|---|---|---|---|
| Chưa có bản ghi thực tế | — | — | CHƯA KIỂM THỬ | — | — | — |

## 8. Tổng kết và điều kiện đóng kiểm thử

**Kết luận hiện tại:** đã có smoke test cục bộ giới hạn cho một số ca, nhưng chưa có tệp screenshot/log để nộp, chưa kiểm tra bản public, chưa kiểm tra native prompt, validator/Lighthouse và nhiều tiêu chí chỉ đạt một phần hoặc CHƯA KIỂM THỬ. Không đủ dữ liệu để kết luận sản phẩm đạt toàn diện hoặc quy đổi điểm.

Trước khi nộp, người kiểm thử cần:

1. Chọn bản kiểm thử/môi trường; điền thiết bị, browser/version, viewport, URL/revision, ngày và người chạy.
2. Chạy T01–T15; thay CHƯA KIỂM THỬ bằng kết quả quan sát thật. Nếu lỗi, ghi defect, nguyên nhân, khắc phục và retest.
3. Thu thập E01–E09 theo [chỉ mục minh chứng](docs/EVIDENCE_INDEX.md); ảnh cần nêu môi trường và ca liên quan.
4. Chạy validator/Lighthouse và ghi đầy đủ công cụ, metric, kết quả/cảnh báo; tuyệt đối không ước lượng.
5. Đối chiếu [rubric chính thức](docs/RUBRIC_GAP_ANALYSIS.md) trước khi tuyên bố hoàn tất TC1–TC7.
