# Đối chiếu rubric chính thức — FIT4014 A3

## Nguồn và cách đánh giá

Rubric được trích từ file do người học cung cấp: **`FIT4014_Đề kiểm tra_Đáp án kiểm tra A3_V01_09.2026.docx`**. Bài A3 là đồ án cuối kỳ Portfolio CV V9, trọng số 60% tổng điểm học phần. Tên các tiêu chí, trọng số và ý nghĩa dưới đây bám nội dung file; đánh giá hiện trạng là rà soát source/tài liệu, không phải nghiệm thu của giảng viên.

**Quy ước:** “Có trong source” không đồng nghĩa đã kiểm thử. Các nhận định trải nghiệm, responsive, hiệu năng, URL và nộp bài vẫn cần bằng chứng. Không suy ra điểm cụ thể.

## Bảng đối chiếu TC1–TC7

| Tiêu chí / trọng số | Yêu cầu chính thức (tóm lược) | Nội dung hiện có | Phần thiếu / rủi ro | Phương án khắc phục và bằng chứng cần có |
|---|---|---|---|---|
| **TC1 — 15%** Phân tích yêu cầu, mục tiêu và phạm vi | Yêu cầu đầy đủ, lập luận chặt chẽ; giả định, rủi ro và tiêu chí kiểm chứng rõ. | `docs/REQUIREMENTS_AND_DESIGN.md` có mục tiêu, phạm vi, luồng, yêu cầu FR/NFR, tiêu chí, giả định/rủi ro và liên kết ca thử. | Nội dung vừa được mở rộng nhưng tiêu chí “tối đa 3 thao tác” chưa đo; cần đối chiếu từ ngữ rubric/đề đầy đủ và cập nhật trạng thái theo bằng chứng. | Giữ bảng tiêu chí có ID; chạy các ca được dẫn chiếu; bổ sung kết quả/thay đổi nếu yêu cầu thực tế khác. E01/E03 + test report. |
| **TC2 — 20%** Thiết kế giao diện và lựa chọn kỹ thuật HTML5/CSS3 | Wireframe chặt chẽ; so sánh phương án, trade-off và khả năng mở rộng/cải tiến. | `docs/WIREFRAME.svg` hiện có frame desktop 1440, tablet 768, mobile 375; có thứ tự khu vực/breakpoint và ghi chú thao tác. Tài liệu phân tích có so sánh nền tảng, layout, details, LocalStorage, mailto và mở rộng. | SVG là sơ đồ khái quát, chưa được rà trực quan trên MacBook, chưa map từng vùng về ID FR/NFR và chưa xác nhận mọi chi tiết với CSS chạy. | Rà ba frame trên MacBook, đối chiếu CSS/HTML, thêm ID FR/NFR nếu rubric/giảng viên cần truy xuất, ghi revision/ảnh thật nếu được yêu cầu. E02. |
| **TC3 — 25%** Triển khai website tĩnh responsive | Website hoàn thiện/chạy ổn định, đáp ứng yêu cầu; cấu trúc tài nguyên rõ, dễ kiểm tra/tái sử dụng. | Source có semantic HTML, metadata, skip link/landmark, alt, external CSS, CSS Grid/Flexbox và breakpoint; Todo có CRUD/localStorage; form mở mailto; thư mục tài nguyên rõ. Đã thêm thông báo validation cho chuỗi trắng. | Chưa xác minh hoạt động ổn định/URL; CSS Todo và JS form portfolio còn inline; CSS có nhiều ghi đè dồn cuối file; `overflow-x:hidden` có thể che lỗi tràn thay vì giải quyết; accessibility chỉ mới rà source. | Chạy syntax/validator và T01–T07, E04/E08; kiểm tra lỗi Console. Cân nhắc tách CSS/JS inline và dọn cascade sau khi xác nhận phạm vi, không thay giao diện khi chưa được duyệt. |
| **TC4 — 20%** Kiểm thử responsive, đánh giá và minh chứng | Bằng chứng đầy đủ/chi tiết/tái lập; đánh giá bằng metric/tiêu chí; ghi nguyên nhân lỗi và hướng cải tiến. | `test_report.md` có T01–T15, bước tái lập và một số kết quả smoke test local; E01–E09 có kế hoạch thu thập. | Chưa có ảnh/log/screencast lưu, metric Lighthouse/validator, kiểm tra URL public, hoàn tất kiểm tra responsive/accessibility, defect log hay retest. Nhiều ca mới một phần/CHƯA KIỂM THỬ. | Chạy test trên bản/revision được ghi; lưu viewport/browser/date; rà visual overflow, ghi Todo/form, lấy metric thật, tạo defect ID + nguyên nhân + sửa + retest. E04–E09. |
| **TC5 — 10%** Báo cáo kỹ thuật, README và tài liệu hóa | Báo cáo/README chuyên nghiệp, nhất quán; hướng dẫn dùng đầy đủ, có trích dẫn phù hợp. | `README.md`, `CHANGELOG.md`, requirement/design, release notes, report, AI log, evidence index và demo script đã có; report ghi một số kết quả smoke test thật. | Cần xác nhận Live Demo/đồng bộ deployed; kiểm tra thủ công liên kết và nội dung cuối; chưa có bộ hồ sơ minh chứng kiểm thử hoàn chỉnh. | README có đường chạy; giữ trạng thái chưa xác minh cho phần chưa chạy; dẫn rubric chính thức trong References; rà link và cập nhật report sau các lần test. E01/E03. |
| **TC6 — 5%** Demo, trình bày và trả lời câu hỏi | Demo chuyên nghiệp, mạch lạc; xử lý tình huống; bảo vệ quyết định kỹ thuật. | `docs/DEMO_7_PHUT.md` có lịch 7 phút, bối cảnh/case study, thao tác responsive/accessibility, giới hạn và câu hỏi luyện tập. | Chưa tập/chấm thời lượng thực tế; chất lượng thuyết trình chưa thể đánh giá. Mọi metric hiệu năng phải có kết quả thật. | Tập thử 7 phút trên MacBook, luyện thao tác và phản biện; chỉ đưa kết quả Lighthouse/validator sau khi có E09. |
| **TC7 — 5%** Liêm chính, tác phong, nộp bài | Trách nhiệm cá nhân/nhóm, tuân thủ quy định, khai báo nguồn và công cụ (đặc biệt AI). | `docs/AI_LOG.md` khai báo Copilot/AI, phạm vi hỗ trợ, việc không thực hiện và trách nhiệm người học; `docs/REFERENCES.md` dẫn nguồn rubric. Lịch sử Git hiện có các commit trước đó. | Cần người học đọc lại, xác nhận nhật ký phản ánh đúng mọi lần dùng AI, trích dẫn nguồn ngoài nếu đã dùng, tuân thủ hướng dẫn nộp bài và tạo minh chứng/revision cuối. Trạng thái hiện tại có thay đổi tài liệu chưa commit. | Cập nhật AI log trung thực; lưu lịch sử/ảnh Git theo yêu cầu giảng viên; tự quyết định commit/push (không thực hiện tự động); nộp đúng hạn/đúng định dạng. |

## Trọng số chính thức

| TC | Trọng số |
|---|---:|
| TC1 | 15% |
| TC2 | 20% |
| TC3 | 25% |
| TC4 | 20% |
| TC5 | 10% |
| TC6 | 5% |
| TC7 | 5% |
| **Tổng** | **100%** |

## Kết luận mức độ đáp ứng hiện tại

- **TC1:** hồ sơ phân tích đã bổ sung, còn cần xác nhận bằng ca thử.
- **TC2:** trade-off được tài liệu hóa và wireframe có ba viewport; cần rà soát/traceability với yêu cầu và source trước khi xem là hoàn chỉnh.
- **TC3:** source thể hiện nhiều cấu phần được yêu cầu và đã có xử lý validation cho chuỗi trắng; một số kiểm tra trình duyệt local đã chạy, nhưng chưa có validator/public deployment. Một số phần inline và cascade phức tạp là rủi ro bảo trì.
- **TC4:** một số smoke test local đã chạy, nhưng chưa có tệp minh chứng và chưa đáp ứng đầy đủ kiểm thử/tái lập/metric.
- **TC5:** tài liệu handoff và nguồn chính thức được bổ sung; cần hoàn tất kiểm tra link/nội dung và gắn kết quả test đã thu thập.
- **TC6:** kịch bản 7 phút có nội dung/trình tự; chất lượng thuyết trình và hỏi đáp chỉ đánh giá được khi tập/trình bày.
- **TC7:** khai báo AI/nguồn đã có; người học cần kiểm tra tính đầy đủ và thực hiện quy trình nộp.

**Không đủ cơ sở để quy đổi thành điểm hoặc khẳng định đạt 10/10.** Trạng thái “CHƯA KIỂM THỬ” áp dụng cho hành vi trình duyệt, responsive thực tế, accessibility thực tế, URL hiện hành, validator, Lighthouse và minh chứng chưa thu thập.

## Các việc ưu tiên tiếp theo

1. Rà soát ba frame wireframe trên MacBook, đối chiếu với CSS/HTML, rồi hoàn thiện E02 nếu cần.
2. Tự chạy T01–T15 trên MacBook; thu E04–E09, lập lỗi và retest.
3. Xác nhận trang GitHub Pages có đúng revision dự định nộp.
4. Đọc lại README/AI log/References, đối chiếu toàn bộ TC với hướng dẫn giảng viên và cập nhật minh chứng thật.
