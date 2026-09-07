# ĐỀ XUẤT CẢI THIỆN & LỘ TRÌNH PHÁT TRIỂN (IMPROVEMENTS ROADMAP)
**Dự án**: Website Tuyển sinh & Cổng thông tin Toán THCS Trần Hoàng Vũ (Cô Hoa)  
**Địa điểm**: Thôn 8, Xã Ea Kiết, Cư M'gar, Đắk Lắk

---

## 📌 TỔNG QUAN

Tài liệu này tổng hợp toàn bộ các ý tưởng, đề xuất cải tiến về **Giao diện (UI)**, **Trải nghiệm người dùng (UX)** và **Chức năng (Features)** cho website. Bạn có thể sử dụng checklist này để theo dõi và thực hiện dần theo từng giai đoạn.

---

## 🚀 1. CHỨC NĂNG & TƯƠNG TÁC TUYỂN SINH (Ưu tiên cao)

- [x] **Thanh liên hệ nổi trên Mobile (Floating Contact Bar / FAB)**
  - *Mô tả*: Thêm thanh nút bấm hoặc cụm icon nổi cố định ở góc dưới màn hình gồm 2 nút: **Gọi ngay (`0914 694 426`)** và **Nhắn Zalo**.
  - *Lợi ích*: Phụ huynh lướt web trên điện thoại ở bất kỳ vị trí nào cũng có thể chạm gọi hoặc chat với cô Hoa ngay tức thì.

- [x] **Nâng cấp Form Đăng ký & Tích hợp QR Zalo**
  - *Mô tả*: 
    - Hiển thị thêm **Mã QR Zalo của cô Hoa** ngay cạnh nút Soạn tin nhắn để phụ huynh mở app Zalo quét kết bạn trực tiếp trên máy tính.
    - Bổ sung ô chọn thời gian học mong muốn (*Tối trong tuần / Cuối tuần*).
    - Thêm lựa chọn mục tiêu học tập (*Lấy lại gốc / Nâng cao điểm số / Luyện thi vào 10 / Ôn HSG*).

- [x] **Nhúng Google Maps tương tác trực tiếp (Embedded Map)**
  - *Mô tả*: Thay vì chỉ có nút bấm mở tab mới, nhúng trực tiếp một khung bản đồ Google Maps tương tác tại mục **Địa chỉ** (Số nhà 65, Thôn 8, Ea Kiết).
  - *Lợi ích*: Phụ huynh nhìn thấy ngay vị trí thực tế, khoảng cách và dễ hình dung đường đi đưa đón con.

---

## 📚 2. NÂNG CẤP TRẢI NGHIỆM HỌC TẬP (WIDGET TOÁN)

- [ ] **Chuyển đổi "Câu hỏi hôm nay" thành Mini-Quiz tương tác**
  - [ ] Thêm thanh Tab chọn lớp: **Lớp 6 | Lớp 7 | Lớp 8 | Lớp 9 | Vào 10**.
  - [ ] Thêm ô nhập câu trả lời + nút **"Kiểm tra đáp án"** (báo đúng/sai trước khi bấm xem lời giải).
  - [ ] Mở rộng ngân hàng câu hỏi (mỗi lớp 5–10 câu hỏi điển hình, có phân số, đại số, hình học cơ bản).
  - [ ] Thêm các câu đố vui toán học / mẹo tính nhanh rèn tư duy logic.

- [ ] **(Tùy chọn) Mini Test đánh giá trình độ nhanh**
  - Làm 3–5 câu trắc nghiệm nhanh 1 phút để phụ huynh biết con đang chắc hay hổng kiến thức phần nào, từ đó hệ thống gợi ý lớp học phù hợp tại cơ sở.

---

## 🎨 3. GIAO DIỆN & TRẢI NGHIỆM NGƯỜI DÙNG (UI/UX)

- [ ] **Bổ sung mục "Cảm nhận & Tiến bộ của Học sinh" (Testimonials)**
  - *Mô tả*: Thêm 3–4 trích dẫn ngắn từ phụ huynh/học sinh thực tế.
  - *Ví dụ*:
    > *"Con từ sợ môn Toán lớp 6, sau 2 tháng học cô Hoa đã tự tin làm bài kiểm tra 8.5 điểm."*  
    > *"Lớp nhỏ cô ngồi cạnh chữa từng lỗi trình bày, thi vào 10 đạt nguyện vọng 1."*
  - *Lợi ích*: Tăng 100% độ uy tín và sự tin tưởng cho các phụ huynh mới.

- [ ] **Badge trạng thái lớp học (Tạo điểm nhấn sĩ số)**
  - Gắn nhãn nổi bật trên mỗi thẻ chương trình học:
    - `Lớp nhỏ 5–8 học sinh`
    - `Kèm sát từng bài`
    - `Đang nhận học sinh`
    - `Luyện đề chuyên sâu`

- [ ] **Hiệu ứng chuyển động vi mô (Micro-animations)**
  - [ ] Hiệu ứng xuất hiện mềm mại (Fade Up / Slide In) khi cuộn chuột qua từng khối nội dung.
  - [ ] Hiệu ứng viền phát sáng màu vàng kim (`border-gold glow`) khi hover vào các thẻ chương trình học.

- [ ] **Thay thế ảnh thực tế**
  - Khi có ảnh chụp thực tế lớp học, góc bàn học và cô Hoa tại Ea Kiết, thay thế dần các ảnh mẫu trong thư mục `public/images/` để tạo cảm giác gần gũi và chân thực nhất.

---

## 📅 GỢI Ý KẾ HOẠCH TRIỂN KHAI THEO GIAI ĐOẠN

### 🔹 Giai đoạn 1: Tiện ích tuyển sinh thực dụng (Làm trước)
- [x] 1. Thêm nút Gọi / Zalo nổi góc màn hình mobile (Floating Contact Bar / FAB).
- [x] 2. Thêm QR Code Zalo vào form đăng ký.
- [x] 3. Nhúng khung Google Maps tại mục Địa chỉ.

### 🔹 Giai đoạn 2: Tăng tính tương tác học tập & Uy tín
- [ ] 4. Nâng cấp widget Toán (chọn lớp 6–9, nhập đáp án kiểm tra).
- [ ] 5. Thêm mục Cảm nhận phụ huynh (Testimonials) & Badge lớp nhỏ.

### 🔹 Giai đoạn 3: Hoàn thiện Thẩm mỹ & Hiệu ứng
- [ ] 6. Tinh chỉnh hiệu ứng hover / scroll animation.
- [ ] 7. Cập nhật ảnh chụp thực tế lớp học khi có ảnh.

---
*Tài liệu được tạo tự động cho dự án Toán THCS Trần Hoàng Vũ. Cập nhật trạng thái `[x]` khi hoàn thành từng mục.*
