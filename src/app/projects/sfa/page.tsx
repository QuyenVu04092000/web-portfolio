"use client";

import sfa_bg from "@/assets/images/sfa.png";
import ProjectDetailLayout, { ProjectDetailContent } from "@/components/ProjectDetailLayout";

const content: { en: ProjectDetailContent; vi: ProjectDetailContent } = {
  en: {
    title: "SFA (DigiSale): Empowering Sales Teams with Technology",
    client: "MLTech Soft",
    role: "Mobile Developer",
    timeline: "4 months",
    tech: "React Native, React Hooks, Tailwind CSS",
    intro: "DigiSale is an innovative Sales Force Automation (SFA) application designed to help businesses optimize and streamline their sales activities. The app empowers sales teams with tools to track performance, manage leads, and improve sales efficiency. Through a user-friendly interface and seamless mobile experience, DigiSale enables salespeople to perform tasks with ease and stay connected with their sales data on the go.",
    features: [
      { title: "1. Sales Activity Management", body: "DigiSale makes it easy to schedule appointments, track leads, and manage customer interactions. With a simple and intuitive interface, sales reps can stay organized without missing any crucial follow-ups." },
      { title: "2. Performance Tracking", body: "Managers and teams can gain real-time insights into their sales performance through detailed metrics and reports. These help businesses identify top performers, measure success, and make data-driven decisions." },
      { title: "3. Enhanced Sales Efficiency", body: "By automating repetitive tasks, DigiSale reduces the time spent on manual processes. Salespeople can spend more time with clients and less time on paperwork." },
      { title: "4. Mobile-first Design", body: "With React Native, DigiSale is optimized for both Android and iOS, ensuring that sales reps can stay connected and productive wherever they are." },
      { title: "5. Customizable Dashboards", body: "Sales teams can access visual reports and track their progress toward sales goals using interactive, customizable dashboards. Each user can personalize their view to match their needs." },
    ],
    techStack: [
      { title: "1. React Native", body: "React Native powers the cross-platform mobile experience, ensuring DigiSale works seamlessly on both Android and iOS devices. This allows businesses to target both mobile operating systems without building separate apps." },
      { title: "2. React Hooks", body: "React Hooks were used for managing the application state and handling side effects. This made it easier to write clean, maintainable code and manage the app's data flow." },
      { title: "3. Tailwind CSS for Styling", body: "For styling the application, I used Tailwind CSS, a utility-first CSS framework that enabled me to build responsive layouts quickly, making DigiSale a truly mobile-first application." },
    ],
    learnings: [
      { title: "1. Deepened Knowledge of React Native", body: "Working on DigiSale was an incredible opportunity to hone my React Native skills. I learned how to build mobile-first applications and implement performance tracking systems in real-time, gaining a deeper understanding of managing complex data in mobile applications." },
      { title: "2. Applying Tailwind CSS to React Native", body: "While I was already familiar with Tailwind CSS in web development, applying it to React Native was a unique learning experience requiring a different approach, but it was an efficient way to style the app while keeping design consistent." },
      { title: "3. Deploying the App to Play Store and App Store", body: "The deployment process was another major learning curve. Releasing an app to both Google Play and the Apple App Store posed challenges related to platform-specific configurations, submission guidelines, and optimization." },
    ],
  },
  vi: {
    title: "SFA (DigiSale): Trao quyền cho đội ngũ bán hàng bằng công nghệ",
    client: "MLTech Soft",
    role: "Mobile Developer",
    timeline: "4 tháng",
    tech: "React Native, React Hooks, Tailwind CSS",
    intro: "DigiSale là ứng dụng Sales Force Automation (SFA) sáng tạo được thiết kế để giúp doanh nghiệp tối ưu hóa và hợp lý hóa các hoạt động bán hàng. Ứng dụng trao quyền cho đội ngũ bán hàng với công cụ theo dõi hiệu suất, quản lý khách hàng tiềm năng và cải thiện hiệu quả bán hàng. Thông qua giao diện thân thiện người dùng và trải nghiệm di động liền mạch, DigiSale giúp nhân viên bán hàng thực hiện công việc dễ dàng và luôn kết nối với dữ liệu bán hàng khi di chuyển.",
    features: [
      { title: "1. Quản lý hoạt động bán hàng", body: "DigiSale giúp dễ dàng lên lịch cuộc hẹn, theo dõi khách hàng tiềm năng và quản lý tương tác khách hàng. Với giao diện đơn giản và trực quan, nhân viên bán hàng có thể giữ tổ chức mà không bỏ lỡ bất kỳ theo dõi quan trọng nào." },
      { title: "2. Theo dõi hiệu suất", body: "Quản lý và nhóm có thể có được thông tin chi tiết thời gian thực về hiệu suất bán hàng thông qua các số liệu và báo cáo chi tiết, giúp doanh nghiệp xác định người có hiệu suất cao và đưa ra quyết định dựa trên dữ liệu." },
      { title: "3. Nâng cao hiệu quả bán hàng", body: "Bằng cách tự động hóa các tác vụ lặp đi lặp lại, DigiSale giảm thời gian dành cho các quy trình thủ công. Nhân viên bán hàng có thể dành nhiều thời gian hơn với khách hàng và ít thời gian hơn cho giấy tờ." },
      { title: "4. Thiết kế Mobile-first", body: "Với React Native, DigiSale được tối ưu hóa cho cả Android và iOS, đảm bảo nhân viên bán hàng có thể kết nối và năng suất ở bất cứ đâu." },
      { title: "5. Dashboard tùy chỉnh", body: "Đội ngũ bán hàng có thể xem báo cáo trực quan và theo dõi tiến độ hướng tới mục tiêu bán hàng bằng dashboard tương tác, có thể tùy chỉnh. Mỗi người dùng có thể cá nhân hóa giao diện theo nhu cầu của mình." },
    ],
    techStack: [
      { title: "1. React Native", body: "React Native cung cấp trải nghiệm di động đa nền tảng, đảm bảo DigiSale hoạt động liền mạch trên cả thiết bị Android và iOS, cho phép doanh nghiệp nhắm mục tiêu cả hai hệ điều hành di động mà không cần xây dựng app riêng biệt." },
      { title: "2. React Hooks", body: "React Hooks được dùng để quản lý state ứng dụng và xử lý side effects. Điều này giúp dễ dàng viết code sạch, dễ bảo trì và quản lý luồng dữ liệu của app." },
      { title: "3. Tailwind CSS cho Styling", body: "Để style ứng dụng, tôi dùng Tailwind CSS, một framework CSS utility-first giúp xây dựng layout responsive nhanh chóng, làm cho DigiSale trở thành ứng dụng mobile-first thực sự." },
    ],
    learnings: [
      { title: "1. Hiểu sâu hơn về React Native", body: "Làm việc với DigiSale là cơ hội tuyệt vời để rèn luyện kỹ năng React Native. Tôi học cách xây dựng ứng dụng mobile-first và triển khai hệ thống theo dõi hiệu suất thời gian thực, hiểu sâu hơn về quản lý dữ liệu phức tạp trong ứng dụng di động." },
      { title: "2. Áp dụng Tailwind CSS cho React Native", body: "Dù đã quen với Tailwind CSS trong phát triển web, áp dụng nó cho React Native là trải nghiệm học hỏi độc đáo đòi hỏi cách tiếp cận khác, nhưng là cách hiệu quả để style ứng dụng trong khi giữ thiết kế nhất quán." },
      { title: "3. Phát hành lên Play Store và App Store", body: "Quá trình triển khai là một thử thách lớn. Phát hành app lên cả Google Play và Apple App Store đặt ra các thách thức liên quan đến cấu hình đặc thù nền tảng, hướng dẫn nộp app và tối ưu hóa." },
    ],
  },
};

export default function SFA() {
  return <ProjectDetailLayout image={sfa_bg} imageAlt="DigiSale SFA" content={content} />;
}
