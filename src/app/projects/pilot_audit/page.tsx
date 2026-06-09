"use client";

import pilot_audit from "@/assets/images/pilot_audit.png";
import ProjectDetailLayout, { ProjectDetailContent } from "@/components/ProjectDetailLayout";

const content: { en: ProjectDetailContent; vi: ProjectDetailContent } = {
  en: {
    title: "Building Pilot Audit: Empowering Pilots with Comprehensive Audit Management",
    client: "PSA International",
    role: "Mobile Developer",
    timeline: "09/2023 – Present",
    tech: "MQTT, Swift",
    intro: "Effective audit management is essential for pilots to maintain safety standards, improve performance, and ensure regulatory compliance. Pilot Audit is a mobile application designed for PSA International's pilots to conveniently view their audit results, check audit history, keep track of audit schedules, monitor audit status, and access detailed audit reports. To deliver real-time updates and notifications, MQTT was integrated, enabling instant messaging and data synchronization. The iOS application was built using Swift, ensuring a smooth, responsive experience and full native integration with Apple's ecosystem.",
    features: [
      { title: "📊 Audit Results", body: "Pilots can easily view their audit results on the app. These results are critical for understanding performance and identifying areas that need improvement. The application allows pilots to track their audit scores and feedback from each assessment." },
      { title: "🕒 Audit History", body: "The app provides a comprehensive audit history, enabling pilots to look back at previous assessments, view trends in their performance, and analyze changes over time." },
      { title: "📅 Audit Schedule", body: "Pilots can view their upcoming audit schedules, ensuring they are prepared for upcoming assessments. The app notifies pilots about upcoming audits so they can plan accordingly." },
      { title: "📝 Audit Status", body: "The audit status feature allows pilots to check whether an audit is in progress, pending, or completed. Pilots can easily track the current status of any scheduled audit." },
      { title: "🔍 Audit Details", body: "Each audit comes with detailed information, including the criteria used for the assessment and any remarks provided by the auditors, giving pilots full transparency on their audit results." },
    ],
    techStack: [
      { title: "🛰️ MQTT for Real-Time Communication", body: "The app leverages MQTT for lightweight, real-time messaging between the server and the mobile app. This ensures low-latency updates and instant delivery of notifications — ideal for keeping pilots informed." },
      { title: "📱 Swift for Native iOS App Development", body: "The mobile app is built using Swift, ensuring a smooth, fast, and responsive user experience. Swift's powerful features and integration with iOS allow for seamless performance." },
    ],
    learnings: [
      { title: "✅ Deepened Expertise in Swift", body: "Building the iOS app in Swift has significantly enhanced my proficiency with iOS development. I've gained hands-on experience with iOS-specific features, including user interface design, notifications, and background tasks." },
      { title: "🧠 Mastering Real-Time Messaging with MQTT", body: "Implementing MQTT allowed me to learn more about real-time communication protocols and their integration into mobile applications — handling message queues and ensuring efficient data delivery." },
      { title: "🤝 Collaboration with PSA's Development Team", body: "Working with PSA's team strengthened my ability to collaborate with third-party teams, align technical requirements with business goals, and iterate based on user feedback." },
    ],
    conclusion: "Pilot Audit is a powerful tool for PSA International's pilots, providing them with real-time updates on their audits, easy access to detailed results, and a streamlined way to manage their audit schedules. By using MQTT for real-time communication and Swift for the iOS app, we've built a fast, responsive, and effective solution for pilots to stay on top of their audits.",
  },
  vi: {
    title: "Xây dựng Pilot Audit: Trao quyền cho phi công quản lý kiểm tra toàn diện",
    client: "PSA International",
    role: "Mobile Developer",
    timeline: "09/2023 – Hiện tại",
    tech: "MQTT, Swift",
    intro: "Quản lý kiểm tra hiệu quả là điều cần thiết để phi công duy trì tiêu chuẩn an toàn, cải thiện hiệu suất và đảm bảo tuân thủ quy định. Pilot Audit là ứng dụng di động được thiết kế cho phi công của PSA International để xem kết quả kiểm tra, kiểm tra lịch sử, theo dõi lịch trình, giám sát trạng thái và truy cập báo cáo chi tiết. MQTT được tích hợp để cung cấp cập nhật và thông báo thời gian thực. App iOS được xây dựng bằng Swift, đảm bảo trải nghiệm mượt mà và tích hợp native đầy đủ với hệ sinh thái Apple.",
    features: [
      { title: "📊 Kết quả kiểm tra", body: "Phi công có thể dễ dàng xem kết quả kiểm tra trên app. Các kết quả này rất quan trọng để hiểu hiệu suất và xác định các lĩnh vực cần cải thiện, cho phép phi công theo dõi điểm và phản hồi từ mỗi đánh giá." },
      { title: "🕒 Lịch sử kiểm tra", body: "Ứng dụng cung cấp lịch sử kiểm tra toàn diện, cho phép phi công xem lại các đánh giá trước, xem xu hướng hiệu suất và phân tích thay đổi theo thời gian." },
      { title: "📅 Lịch trình kiểm tra", body: "Phi công có thể xem lịch trình kiểm tra sắp tới, đảm bảo họ chuẩn bị cho các đánh giá sắp diễn ra. Ứng dụng thông báo cho phi công về các cuộc kiểm tra sắp tới." },
      { title: "📝 Trạng thái kiểm tra", body: "Tính năng trạng thái kiểm tra cho phép phi công kiểm tra xem cuộc kiểm tra đang diễn ra, đang chờ hay đã hoàn thành. Phi công có thể dễ dàng theo dõi trạng thái hiện tại của bất kỳ cuộc kiểm tra đã lên lịch nào." },
      { title: "🔍 Chi tiết kiểm tra", body: "Mỗi cuộc kiểm tra đi kèm thông tin chi tiết, bao gồm các tiêu chí được sử dụng cho đánh giá và bất kỳ nhận xét nào từ kiểm toán viên, cung cấp cho phi công sự minh bạch đầy đủ về kết quả kiểm tra." },
    ],
    techStack: [
      { title: "🛰️ MQTT cho Giao tiếp thời gian thực", body: "Ứng dụng tận dụng MQTT để nhắn tin thời gian thực nhẹ giữa server và app di động. Điều này đảm bảo cập nhật độ trễ thấp và phân phối thông báo tức thì — lý tưởng để giữ phi công được thông báo." },
      { title: "📱 Swift cho iOS Native", body: "App di động được xây dựng bằng Swift, đảm bảo trải nghiệm người dùng mượt mà, nhanh và responsive. Các tính năng mạnh mẽ của Swift và tích hợp với iOS cho phép hiệu suất liền mạch." },
    ],
    learnings: [
      { title: "✅ Chuyên sâu hơn về Swift", body: "Xây dựng app iOS bằng Swift đã nâng cao đáng kể kỹ năng phát triển iOS của tôi, tích lũy kinh nghiệm thực tiễn với các tính năng đặc thù iOS như thiết kế UI, thông báo và tác vụ nền." },
      { title: "🧠 Làm chủ MQTT", body: "Triển khai MQTT cho tôi tìm hiểu thêm về giao thức giao tiếp thời gian thực — xử lý hàng đợi tin nhắn và đảm bảo phân phối dữ liệu hiệu quả." },
      { title: "🤝 Hợp tác với đội ngũ PSA", body: "Làm việc với đội ngũ PSA củng cố khả năng hợp tác với nhóm bên thứ ba, điều chỉnh yêu cầu kỹ thuật với mục tiêu kinh doanh và lặp lại dựa trên phản hồi người dùng." },
    ],
    conclusion: "Pilot Audit là công cụ mạnh mẽ cho phi công của PSA International, cung cấp cập nhật thời gian thực về kiểm tra, truy cập dễ dàng vào kết quả chi tiết và cách hợp lý để quản lý lịch trình kiểm tra. Bằng cách dùng MQTT cho giao tiếp thời gian thực và Swift cho app iOS, chúng tôi đã xây dựng giải pháp nhanh, responsive và hiệu quả.",
  },
};

export default function PilotAudit() {
  return <ProjectDetailLayout image={pilot_audit} imageAlt="Pilot Audit" content={content} />;
}
