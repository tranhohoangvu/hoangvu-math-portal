export const SITE = {
  name: "Trần Hoàng Vũ",
  kind: "Trung tâm Bồi dưỡng Kiến thức",
  subject: "Bồi dưỡng kiến thức môn Toán THCS",
  tagline: "Toán THCS — dạy thật, hiểu thật.",
  teacher: "Cô Hồ Thị Hoa",
  teacherShort: "Cô Hoa",
  primaryWorkplace: "Trường TH & THCS Hoàng Văn Thụ",
  phone: "0914694426",
  phoneDisplay: "0914 694 426",
  tel: "tel:+84914694426",
  zalo: "https://zalo.me/0914694426",
  addressLine: "Số nhà 65, Thôn Tân An (Thôn 8 cũ), Xã Ea Kiết, Tỉnh Đắk Lắk",
  addressNew: "Số nhà 65, Thôn Tân An, Xã Ea Kiết, Tỉnh Đắk Lắk",
  addressOld: "Số nhà 65, Thôn 8, Xã Ea Kiết, Tỉnh Đắk Lắk",
  maps: "https://maps.app.goo.gl/qykwRStVVPw7TrLz5",
  mapsEmbed:
    "https://maps.google.com/maps?q=12.9222222,108.0299167&hl=vi&z=16&output=embed",
  grades: "6 · 7 · 8 · 9",
} as const;

export const TEACHER_INFO = {
  name: "Cô Hồ Thị Hoa",
  fullName: "Hồ Thị Hoa",
  shortName: "Cô Hoa",
  role: "Giáo viên môn Toán",
  primaryWorkplace: "Trường TH & THCS Hoàng Văn Thụ",
  tutoringPlace: "Trung tâm Bồi dưỡng Kiến thức Trần Hoàng Vũ",
  title: "Giáo viên Toán tại Trường TH & THCS Hoàng Văn Thụ",
  experience:
    "Công tác giảng dạy chính quy tại Trường TH & THCS Hoàng Văn Thụ · Trực tiếp bồi dưỡng ngoài giờ tại Trung tâm Bồi dưỡng Kiến thức Trần Hoàng Vũ (Thôn Tân An / Thôn 8 cũ, Ea Kiết)",
  quote:
    "Với tôi, không có học sinh nào dốt Toán. Chỉ cần tìm đúng phương pháp, kiên nhẫn tháo gỡ từng nút thắt và khơi gợi tư duy, các con đều sẽ yêu thích và làm chủ môn học này.",
  philosophy: [
    {
      title: "Hiểu bản chất, không học vẹt",
      desc: "Đi từ tư duy số học và hình học trực quan, giúp học sinh nắm chắc nguyên lý trước khi áp dụng giải bài.",
    },
    {
      title: "Chữa bài tận tay, rèn tính cẩn thận",
      desc: "Uốn nắn từng bước lập luận, cách trình bày sạch đẹp chuẩn barem để không mất điểm oan trong kỳ thi vào 10.",
    },
    {
      title: "Lộ trình riêng cho từng sức học",
      desc: "Học sinh hổng kiến thức được kiên nhẫn bù nền; học sinh khá giỏi được bồi dưỡng mở rộng dạng chuyên và luyện đề nâng cao.",
    },
  ],
  commitments: [
    "Cô Hồ Thị Hoa trực tiếp giảng dạy 100% tất cả các buổi — không giao lớp cho người khác hay trợ giảng.",
    "Quy mô lớp nhỏ, số lượng học sinh ít tại trung tâm để cô theo sát bài vở từng em.",
    "Báo cáo tiến độ minh bạch sau từng tuần, kết nối trực tiếp giữa phụ huynh và cô giáo.",
  ],
  highlights: [
    { num: "Chính quy", label: "Trường Hoàng Văn Thụ", desc: "Nơi công tác chính của cô" },
    { num: "100%", label: "Cô trực tiếp dạy", desc: "Tại Trung tâm Trần Hoàng Vũ" },
    { num: "Lớp nhỏ", label: "Số lượng ít kèm sát", desc: "Chữa bài tận tay trên lớp" },
    { num: "Lớp 6–9", label: "Bồi dưỡng & Vào 10", desc: "Bám sát chuẩn GDPT mới" },
  ],
} as const;

export const PROGRAMS = [
  {
    id: "lop-6",
    grade: "6",
    title: "Lớp 6",
    kicker: "Nền tảng",
    body: "Số học, phân số, tỉ lệ và hình học cơ bản. Xây chắc tư duy để các năm sau không bị hổng.",
  },
  {
    id: "lop-7",
    grade: "7",
    title: "Lớp 7",
    kicker: "Tư duy",
    body: "Số hữu tỉ, đại số, đường thẳng song song và tam giác. Rèn lập luận, không học vẹt.",
  },
  {
    id: "lop-8",
    grade: "8",
    title: "Lớp 8",
    kicker: "Bứt phá",
    body: "Đa thức, phương trình, tứ giác, định lý Thalès. Chữa từng bước, trình bày sạch.",
  },
  {
    id: "lop-9",
    grade: "9",
    title: "Lớp 9",
    kicker: "Về đích",
    body: "Hàm số, hệ thức lượng, đường tròn. Bám chương trình, nhắm thẳng kỳ thi vào 10.",
  },
  {
    id: "hsg",
    grade: "HSG",
    title: "Học sinh giỏi",
    kicker: "Nâng cao",
    body: "Dạng chuyên, mẹo giải nhanh, luyện đề HSG cấp trường và cấp huyện theo sức từng em.",
  },
  {
    id: "vao-10",
    grade: "10",
    title: "Luyện thi vào 10",
    kicker: "Đề thật",
    body: "Ôn theo chuyên đề, giải đề minh họa và đề các năm. Kỹ năng trình bày để không mất điểm oan.",
  },
] as const;

export const SCHEDULE_NOTE = {
  title: "Lịch học các khối lớp",
  status: "Công bố khi xếp lớp",
  description:
    "Thời khóa biểu cụ thể sẽ được cô Hoa thống nhất và thông báo trực tiếp tới phụ huynh sau khi chốt danh sách học sinh từng khối (Lớp 6, 7, 8, 9 & Luyện thi vào 10).",
  flexibility:
    "Giờ học được bố trí linh hoạt ngoài giờ chính khóa, tạo điều kiện thuận lợi nhất cho việc học tập và đưa đón của phụ huynh.",
} as const;

export const HOURS = [
  { day: "Lịch học dự kiến", time: "Sẽ công bố chi tiết sau khi xếp lớp" },
] as const;

export const FAQS = [
  {
    q: "Lớp đông không cô?",
    a: "Lớp nhỏ. Cô Hoa kèm sát từng em, chữa bài tại chỗ, phụ huynh nắm được tiến độ sau mỗi tuần.",
  },
  {
    q: "Có học thử không?",
    a: "Có. Gọi hoặc nhắn Zalo để xếp một buổi phù hợp lớp của con. Học phí và lịch cụ thể cô tư vấn trực tiếp.",
  },
  {
    q: "Học phí tính thế nào?",
    a: "Theo lớp và theo số buổi trong tháng. Không thu phí ẩn. Liên hệ cô Hoa để nghe mức phù hợp với con.",
  },
  {
    q: "Con yếu Toán từ trước thì sao?",
    a: "Bắt đầu từ chỗ đang hổng, không nhảy cóc. Mục tiêu trước hết là hiểu — điểm số sẽ theo sau.",
  },
] as const;

export const PROBLEMS = [
  {
    grade: "Lớp 6",
    prompt: "Tính giá trị của biểu thức",
    latex: "2/3 + 5/6",
    hint: "Quy đồng mẫu số 6.",
    answer: "3/2  (hay 1,5)",
  },
  {
    grade: "Lớp 7",
    prompt: "Giải phương trình",
    latex: "2x − 5 = 11",
    hint: "Chuyển vế, đổi dấu, rồi chia hai vế cho 2.",
    answer: "x = 8",
  },
  {
    grade: "Lớp 8",
    prompt: "Rút gọn",
    latex: "(x + 1)(x − 1)",
    hint: "Hằng đẳng thức (a + b)(a − b) = a² − b².",
    answer: "x² − 1",
  },
  {
    grade: "Lớp 9",
    prompt: "Cho f(x) = 2x − 3. Tính",
    latex: "f(5)",
    hint: "Thay x = 5 vào công thức hàm số.",
    answer: "f(5) = 7",
  },
] as const;

export const LEARNING_GOALS = [
  { id: "lay-goc", label: "Lấy lại căn bản, bù hổng kiến thức" },
  { id: "nang-cao", label: "Nâng cao điểm số trên lớp (8–9+)" },
  { id: "vao-10", label: "Luyện thi tuyển sinh vào lớp 10" },
  { id: "hsg", label: "Bồi dưỡng Học sinh giỏi (HSG)" },
] as const;

export const TIME_PREFERENCES = [
  { id: "toi-trong-tuan", label: "Tối trong tuần (sau giờ học chính khóa)" },
  { id: "cuoi-tuan", label: "Cuối tuần (Thứ 7 / Chủ nhật)" },
  { id: "linh-hoat", label: "Linh hoạt theo lịch xếp chung của lớp" },
] as const;

export function composeMessage(input: {
  parent: string;
  student: string;
  program: string;
  goal?: string;
  timeSlot?: string;
  phone: string;
  note: string;
}) {
  const lines = [
    `Dạ cô Hoa, em muốn đăng ký học Toán tại Trung tâm Trần Hoàng Vũ.`,
    input.student ? `Học sinh: ${input.student}.` : "",
    input.program ? `Khóa học: ${input.program}.` : "",
    input.goal ? `Mục tiêu: ${input.goal}.` : "",
    input.timeSlot ? `Thời gian mong muốn: ${input.timeSlot}.` : "",
    input.parent ? `Phụ huynh: ${input.parent}.` : "",
    input.phone ? `SĐT: ${input.phone}.` : "",
    input.note ? `Ghi chú: ${input.note}.` : "",
  ].filter(Boolean);
  return lines.join(" ");
}
