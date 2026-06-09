"use client";

import career from "@/assets/images/career.png";
import ProjectDetailLayout, { ProjectDetailContent } from "@/components/ProjectDetailLayout";

const content: { en: ProjectDetailContent; vi: ProjectDetailContent } = {
  en: {
    title: "Building the Career Guidance App for LOF: Empowering Users to Succeed Professionally",
    client: "International Dairy Products JSC",
    role: "Mobile Developer",
    timeline: "11 months",
    tech: "Flutter, State Management (BLoC Cubit), Socket for Chat",
    intro: "In an ever-changing world, individuals need the tools to adapt, grow, and make informed decisions about their professional futures. The Career Guidance App for LOF is designed to provide users with a self-training platform that promotes skill development, fosters knowledge-sharing, and connects them with like-minded individuals. The application was developed using Flutter for a cross-platform experience, while BLoC Cubit was implemented for state management. Socket was integrated for real-time communication, allowing users to engage in live chat and exchange ideas.",
    features: [
      { title: "🎯 Skill Self-Training", body: "The app provides a structured approach to self-training with learning modules, interactive exercises, and assessments. Users can track their progress as they move through different topics, ensuring they stay on track with their personal development." },
      { title: "🌐 Knowledge Sharing", body: "The Career Guidance App encourages users to connect and share knowledge with others. By providing a platform for peer-to-peer interaction, the app allows users to engage with experienced professionals and mentors, exchanging advice and resources." },
      { title: "🧠 Self-Discovery", body: "Through personalized assessments, challenges, and feedback, users can discover their strengths and identify areas for improvement. The app includes personality tests, career aptitude assessments, and skill evaluations." },
      { title: "💬 Live Chat", body: "With Socket integration, users can engage in real-time chat with mentors, peers, and other professionals, facilitating instant communication for questions, guidance, or career-related discussions." },
      { title: "🌟 Success Tracking", body: "The app includes a goal-setting system and progress tracking, helping users stay motivated and see tangible evidence of their growth and accomplishments." },
    ],
    techStack: [
      { title: "📱 Flutter for Cross-Platform Development", body: "Developing the Career Guidance App in Flutter allowed us to create a seamless, cross-platform experience for both iOS and Android users. Flutter's flexibility and ease of use made it an ideal choice for building a feature-rich app that runs smoothly on multiple platforms." },
      { title: "🔄 State Management with BLoC Cubit", body: "We used BLoC Cubit for state management to maintain a clean architecture and ensure optimal app performance. By using this pattern, we ensured the app remains scalable and responsive, while making it easy to manage the app's state." },
      { title: "💬 Socket for Real-Time Communication", body: "Integrating Socket for real-time chat allows users to engage with mentors and peers instantly. This technology ensures that users receive immediate responses to their queries and can hold live conversations with others in the community." },
    ],
    learnings: [
      { title: "✅ Mastering Flutter Development", body: "Building the Career Guidance App in Flutter provided me with an in-depth understanding of cross-platform mobile development. I learned how to efficiently design and implement user interfaces that work across both iOS and Android platforms." },
      { title: "🧠 State Management with BLoC Cubit", body: "I delved deeper into state management using BLoC Cubit, understanding the power of separating business logic from the UI layer, which made the app more organized and easier to maintain." },
      { title: "💬 Socket Integration for Chat", body: "Integrating Socket for real-time chat taught me how to handle live communication between users and manage real-time data efficiently." },
      { title: "🤝 Collaboration with S3Corp", body: "I had the opportunity to work closely with S3Corp, the development partner for this project. This collaboration taught me how to work with external teams effectively and understand client requirements." },
    ],
    conclusion: "The Career Guidance App for LOF empowers users to take charge of their professional growth. By combining self-training, knowledge-sharing, self-discovery, and real-time chat, this app provides a holistic approach to career development. Working with Flutter, BLoC Cubit, and Socket allowed me to gain invaluable experience in cross-platform development, state management, and real-time communication.",
  },
  vi: {
    title: "Xây dựng ứng dụng Hướng nghiệp cho LOF: Trao quyền cho người dùng thành công trong sự nghiệp",
    client: "International Dairy Products JSC",
    role: "Mobile Developer",
    timeline: "11 tháng",
    tech: "Flutter, Quản lý State (BLoC Cubit), Socket cho Chat",
    intro: "Trong thế giới liên tục thay đổi, mọi người cần công cụ để thích nghi, phát triển và đưa ra quyết định sáng suốt về tương lai nghề nghiệp. Ứng dụng Hướng nghiệp cho LOF được thiết kế để cung cấp nền tảng tự đào tạo thúc đẩy phát triển kỹ năng, nuôi dưỡng chia sẻ kiến thức và kết nối người dùng với những người có cùng chí hướng. Ứng dụng được phát triển bằng Flutter cho trải nghiệm đa nền tảng, BLoC Cubit cho quản lý state và Socket cho giao tiếp thời gian thực.",
    features: [
      { title: "🎯 Tự đào tạo kỹ năng", body: "Ứng dụng cung cấp cách tiếp cận có cấu trúc cho tự đào tạo với các module học, bài tập tương tác và đánh giá. Người dùng có thể theo dõi tiến độ khi học qua các chủ đề khác nhau." },
      { title: "🌐 Chia sẻ kiến thức", body: "Ứng dụng khuyến khích người dùng kết nối và chia sẻ kiến thức với nhau. Bằng cách cung cấp nền tảng tương tác peer-to-peer, ứng dụng cho phép người dùng tương tác với các chuyên gia và mentors có kinh nghiệm." },
      { title: "🧠 Khám phá bản thân", body: "Thông qua các đánh giá cá nhân hóa, thách thức và phản hồi, người dùng có thể khám phá điểm mạnh và xác định các lĩnh vực cần cải thiện. Ứng dụng bao gồm bài kiểm tra tính cách, đánh giá năng lực nghề nghiệp và đánh giá kỹ năng." },
      { title: "💬 Chat trực tiếp", body: "Với tích hợp Socket, người dùng có thể tham gia chat thời gian thực với mentors, bạn bè và các chuyên gia khác, tạo điều kiện giao tiếp tức thì cho các câu hỏi, hướng dẫn hoặc thảo luận liên quan đến sự nghiệp." },
      { title: "🌟 Theo dõi thành công", body: "Ứng dụng bao gồm hệ thống đặt mục tiêu và theo dõi tiến độ, giúp người dùng duy trì động lực và thấy bằng chứng cụ thể về sự tăng trưởng và thành tích của họ." },
    ],
    techStack: [
      { title: "📱 Flutter cho Phát triển đa nền tảng", body: "Phát triển ứng dụng bằng Flutter cho phép tạo trải nghiệm liền mạch, đa nền tảng cho cả người dùng iOS và Android. Sự linh hoạt của Flutter làm cho nó trở thành lựa chọn lý tưởng để xây dựng app giàu tính năng chạy mượt mà trên nhiều nền tảng." },
      { title: "🔄 Quản lý State với BLoC Cubit", body: "Chúng tôi dùng BLoC Cubit để duy trì kiến trúc sạch và đảm bảo hiệu suất app tối ưu. Pattern này đảm bảo app vẫn có thể mở rộng và responsive, trong khi dễ quản lý state của app." },
      { title: "💬 Socket cho Giao tiếp thời gian thực", body: "Tích hợp Socket cho chat thời gian thực cho phép người dùng tương tác với mentors và bạn bè tức thì, đảm bảo người dùng nhận phản hồi ngay lập tức và có thể trò chuyện trực tiếp." },
    ],
    learnings: [
      { title: "✅ Làm chủ Flutter", body: "Xây dựng ứng dụng bằng Flutter cung cấp hiểu biết sâu về phát triển di động đa nền tảng. Tôi học cách thiết kế và triển khai UI hiệu quả trên cả iOS và Android." },
      { title: "🧠 Quản lý State với BLoC Cubit", body: "Tôi tìm hiểu sâu hơn về quản lý state bằng BLoC Cubit, hiểu sức mạnh của việc tách biệt business logic khỏi UI layer, làm cho app được tổ chức tốt hơn và dễ bảo trì hơn." },
      { title: "💬 Tích hợp Socket cho Chat", body: "Tích hợp Socket dạy tôi cách xử lý giao tiếp trực tiếp giữa người dùng và quản lý dữ liệu thời gian thực hiệu quả." },
      { title: "🤝 Hợp tác với S3Corp", body: "Tôi có cơ hội làm việc chặt chẽ với S3Corp, đối tác phát triển cho dự án này, dạy tôi cách làm việc hiệu quả với nhóm bên ngoài và hiểu yêu cầu khách hàng." },
    ],
    conclusion: "Ứng dụng Hướng nghiệp cho LOF trao quyền cho người dùng kiểm soát sự phát triển nghề nghiệp. Bằng cách kết hợp tự đào tạo, chia sẻ kiến thức, khám phá bản thân và chat thời gian thực, app cung cấp cách tiếp cận toàn diện cho phát triển sự nghiệp. Làm việc với Flutter, BLoC Cubit và Socket cho phép tôi tích lũy kinh nghiệm vô giá trong phát triển đa nền tảng, quản lý state và giao tiếp thời gian thực.",
  },
};

export default function Career() {
  return <ProjectDetailLayout image={career} imageAlt="Career Guidance LOF" content={content} />;
}
