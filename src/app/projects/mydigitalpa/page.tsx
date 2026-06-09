"use client";

import mydigitalpa from "@/assets/images/mydigitalpa.png";
import ProjectDetailLayout, { ProjectDetailContent } from "@/components/ProjectDetailLayout";

const content: { en: ProjectDetailContent; vi: ProjectDetailContent } = {
  en: {
    title: "Building MydigitalPA: Empowering Pilots with Efficient License Management and Job Tracking",
    client: "PSA International",
    role: "Mobile Developer",
    timeline: "09/2023 – Present",
    tech: "MQTT, Swift",
    intro: "In the maritime industry, pilots play a critical role in ensuring safe navigation and efficient operations at ports. MydigitalPA is a mobile application designed specifically for PSA International's pilots, helping them streamline and manage their license upgrading process, stay on top of job tasks, receive real-time news updates, and get instant notifications. The app integrates MQTT for real-time communication between the mobile app and the server, ensuring pilots are always up to date. Swift was used to build the iOS app, providing a native and responsive experience.",
    features: [
      { title: "🎓 License Management", body: "Pilots can easily track their license upgrading process, view required tasks, and receive reminders about key milestones. This feature ensures pilots stay on top of their professional development and comply with regulatory requirements." },
      { title: "📋 Job Management", body: "The app provides a detailed list of jobs for pilots to complete, including deadlines, vessel details, and operational instructions. Pilots can mark tasks as completed and receive updates when new tasks are assigned." },
      { title: "📰 News Feed", body: "MydigitalPA includes a news feed where pilots can catch up on important updates, including regulatory changes, PSA news, weather forecasts, and other relevant information." },
      { title: "🔔 Real-Time Notifications", body: "Using MQTT, the app delivers instant notifications to pilots regarding job updates, news, or critical information, ensuring they are always in the loop." },
      { title: "👨‍💼 Admin Panel", body: "The admin panel allows PSA International administrators to manage pilots, assign new jobs, send news updates, and broadcast notifications to pilots, ensuring activities and tasks are effectively managed." },
    ],
    techStack: [
      { title: "🛰️ MQTT for Real-Time Communication", body: "The app leverages MQTT for lightweight, real-time messaging between the server and the mobile app. This ensures low-latency updates and instant delivery of notifications, making it an ideal protocol for keeping pilots informed." },
      { title: "📱 Swift for Native iOS App Development", body: "The mobile app is built using Swift, ensuring a smooth, fast, and responsive user experience. Swift's powerful features and integration with iOS allow for seamless performance." },
    ],
    learnings: [
      { title: "✅ Deepened Expertise in Swift", body: "Building the iOS app in Swift has significantly enhanced my proficiency with iOS development. I've gained hands-on experience with iOS-specific features, including user interface design, notifications, and background tasks." },
      { title: "🧠 Mastering Real-Time Messaging with MQTT", body: "Implementing MQTT allowed me to learn more about real-time communication protocols and their integration into mobile applications. This experience taught me how to handle message queues and ensure efficient data delivery." },
      { title: "🤝 Collaboration with PSA's Development Team", body: "Working with PSA's team strengthened my ability to collaborate with third-party teams, align technical requirements with business goals, and iterate based on user feedback." },
    ],
    conclusion: "MydigitalPA is a powerful tool that helps PSA International's pilots efficiently manage their workflow, stay on top of their license upgrading process, and receive important updates in real time. By leveraging Swift for native development and MQTT for real-time messaging, we've built an app that ensures pilots have everything they need at their fingertips.",
  },
  vi: {
    title: "Xây dựng MydigitalPA: Trao quyền cho phi công quản lý giấy phép và theo dõi công việc hiệu quả",
    client: "PSA International",
    role: "Mobile Developer",
    timeline: "09/2023 – Hiện tại",
    tech: "MQTT, Swift",
    intro: "Trong ngành hàng hải, phi công đóng vai trò quan trọng trong việc đảm bảo điều hướng an toàn và hoạt động hiệu quả tại cảng. MydigitalPA là ứng dụng di động được thiết kế riêng cho phi công của PSA International, giúp họ hợp lý hóa và quản lý quy trình nâng cấp giấy phép, theo dõi công việc, nhận cập nhật tin tức thời gian thực và nhận thông báo tức thì. Ứng dụng tích hợp MQTT để giao tiếp thời gian thực giữa app di động và server. Swift được dùng để xây dựng app iOS, cung cấp trải nghiệm native và responsive.",
    features: [
      { title: "🎓 Quản lý giấy phép", body: "Phi công có thể dễ dàng theo dõi quy trình nâng cấp giấy phép, xem các tác vụ yêu cầu và nhận nhắc nhở về các cột mốc quan trọng. Tính năng này đảm bảo phi công theo kịp phát triển chuyên môn và tuân thủ yêu cầu quy định." },
      { title: "📋 Quản lý công việc", body: "Ứng dụng cung cấp danh sách chi tiết các công việc cần hoàn thành, bao gồm deadline, chi tiết tàu và hướng dẫn vận hành. Phi công có thể đánh dấu nhiệm vụ đã hoàn thành và nhận cập nhật khi có nhiệm vụ mới." },
      { title: "📰 Bảng tin", body: "MydigitalPA bao gồm bảng tin nơi phi công có thể cập nhật thông tin quan trọng, bao gồm thay đổi quy định, tin tức PSA, dự báo thời tiết và các thông tin liên quan khác." },
      { title: "🔔 Thông báo thời gian thực", body: "Sử dụng MQTT, ứng dụng gửi thông báo tức thì cho phi công về cập nhật công việc, tin tức hoặc thông tin quan trọng, đảm bảo họ luôn được thông báo." },
      { title: "👨‍💼 Bảng quản trị", body: "Bảng quản trị cho phép quản trị viên PSA International quản lý phi công, giao công việc mới, gửi cập nhật tin tức và phát thông báo tới phi công, đảm bảo các hoạt động và nhiệm vụ được quản lý hiệu quả." },
    ],
    techStack: [
      { title: "🛰️ MQTT cho Giao tiếp thời gian thực", body: "Ứng dụng tận dụng MQTT để nhắn tin thời gian thực nhẹ giữa server và app di động. Điều này đảm bảo cập nhật độ trễ thấp và phân phối thông báo tức thì, làm cho nó trở thành giao thức lý tưởng để giữ phi công được thông báo." },
      { title: "📱 Swift cho iOS Native", body: "App di động được xây dựng bằng Swift, đảm bảo trải nghiệm người dùng mượt mà, nhanh và responsive. Các tính năng mạnh mẽ của Swift và tích hợp với iOS cho phép hiệu suất liền mạch." },
    ],
    learnings: [
      { title: "✅ Chuyên sâu hơn về Swift", body: "Xây dựng app iOS bằng Swift đã nâng cao đáng kể kỹ năng phát triển iOS của tôi. Tôi đã tích lũy kinh nghiệm thực tiễn với các tính năng đặc thù iOS, bao gồm thiết kế UI, thông báo và tác vụ nền." },
      { title: "🧠 Làm chủ MQTT", body: "Triển khai MQTT cho tôi tìm hiểu thêm về giao thức giao tiếp thời gian thực và tích hợp của chúng vào ứng dụng di động. Trải nghiệm này dạy tôi cách xử lý hàng đợi tin nhắn và đảm bảo phân phối dữ liệu hiệu quả." },
      { title: "🤝 Hợp tác với đội ngũ PSA", body: "Làm việc với đội ngũ PSA củng cố khả năng hợp tác với nhóm bên thứ ba, điều chỉnh yêu cầu kỹ thuật với mục tiêu kinh doanh và lặp lại dựa trên phản hồi người dùng của tôi." },
    ],
    conclusion: "MydigitalPA là công cụ mạnh mẽ giúp phi công của PSA International quản lý quy trình làm việc hiệu quả, theo kịp quy trình nâng cấp giấy phép và nhận cập nhật quan trọng theo thời gian thực. Bằng cách tận dụng Swift cho native development và MQTT cho nhắn tin thời gian thực, chúng tôi đã xây dựng app đảm bảo phi công có mọi thứ cần thiết trong tầm tay.",
  },
};

export default function Mydigitalpa() {
  return <ProjectDetailLayout image={mydigitalpa} imageAlt="MydigitalPA" content={content} />;
}
