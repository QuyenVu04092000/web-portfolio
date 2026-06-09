"use client";

import psa_bg from "@/assets/images/psa_bg.png";
import ProjectDetailLayout, { ProjectDetailContent } from "@/components/ProjectDetailLayout";

const content: { en: ProjectDetailContent; vi: ProjectDetailContent } = {
  en: {
    title: "Building PSA-CMS: A Robust Content Management System for Pilots",
    client: "PSA International",
    role: "Front-end Developer",
    timeline: "09/2023 – Present",
    tech: "ReactJS, React-Redux",
    intro: "In the maritime industry, efficient management of pilot operations is crucial for smooth and safe vessel navigation. PSA-CMS was developed as a content management system (CMS) tailored for PSA International, one of the world's leading port operators. The system serves as the backbone for managing pilot information and delivering essential content to pilots via their mobile app — including news updates, vessel details, and operational data. Working closely with PSA's team, I contributed to building a scalable, user-friendly system using ReactJS and React-Redux for state management.",
    features: [
      { title: "📋 Pilot Information Management", body: "The system provides a centralized database to store and manage pilot records, ensuring that authorized personnel can access and update critical information in real time." },
      { title: "📰 News & Updates for Pilots", body: "A built-in news module allows PSA to publish and manage updates relevant to pilots, including operational changes, regulatory notices, and weather alerts." },
      { title: "🚢 Vessel & Port Information", body: "Pilots can access detailed vessel data, including specifications, schedules, and operational guidelines. This ensures they have all necessary information before assisting a ship into the port." },
      { title: "🔄 Seamless Content Management", body: "Administrators can easily update content across the pilot's app through a user-friendly interface, ensuring timely delivery of important information." },
      { title: "🔗 Integration with PSA's Existing Systems", body: "The CMS was designed to integrate with PSA's internal data sources, ensuring synchronization between the web platform and the mobile application used by pilots." },
    ],
    techStack: [
      { title: "⚛️ ReactJS for a Dynamic UI", body: "I built the web-based CMS using ReactJS, leveraging its component-based architecture to create a modular and maintainable system." },
      { title: "🔄 React-Redux for State Management", body: "To manage complex data flows efficiently, I implemented React-Redux, ensuring that updates to pilot and vessel data were synchronized across different components without performance bottlenecks." },
      { title: "🏗 Scalable & Maintainable Architecture", body: "The system was designed to be scalable, allowing PSA to add new features and integrate additional data sources in the future without major refactoring." },
    ],
    learnings: [
      { title: "✅ Deepened Expertise in ReactJS & React-Redux", body: "This project strengthened my ability to build complex React applications, improving my understanding of state management, component reusability, and performance optimization using Redux." },
      { title: "🤝 Collaboration with PSA's Development Team", body: "Working with PSA's internal teams provided valuable experience in cross-team collaboration, aligning business requirements with technical implementation." },
      { title: "🔗 Handling API Integrations with Third-Party Systems", body: "Integrating PSA-CMS with PSA's existing backend services required handling API interactions, data synchronization, and security considerations efficiently." },
    ],
    conclusion: "PSA-CMS was a high-impact project that provided pilots with a centralized, real-time information hub while enabling PSA to efficiently manage and distribute content. Through this experience, I honed my ReactJS and Redux skills, improved my ability to work in enterprise environments, and gained hands-on experience collaborating with third-party teams on large-scale projects.",
  },
  vi: {
    title: "Xây dựng PSA-CMS: Hệ thống quản lý nội dung mạnh mẽ cho phi công",
    client: "PSA International",
    role: "Front-end Developer",
    timeline: "09/2023 – Hiện tại",
    tech: "ReactJS, React-Redux",
    intro: "Trong ngành hàng hải, quản lý hoạt động phi công hiệu quả là rất quan trọng để đảm bảo điều hướng tàu thuyền an toàn và trơn tru. PSA-CMS được phát triển như một hệ thống quản lý nội dung (CMS) dành riêng cho PSA International, một trong những nhà khai thác cảng hàng đầu thế giới. Hệ thống phục vụ như nền tảng để quản lý thông tin phi công và cung cấp nội dung thiết yếu cho phi công qua ứng dụng di động của họ. Làm việc chặt chẽ với đội ngũ PSA, tôi đã đóng góp vào việc xây dựng hệ thống có thể mở rộng, thân thiện người dùng bằng ReactJS và React-Redux.",
    features: [
      { title: "📋 Quản lý thông tin phi công", body: "Hệ thống cung cấp cơ sở dữ liệu tập trung để lưu trữ và quản lý hồ sơ phi công, đảm bảo nhân viên được ủy quyền có thể truy cập và cập nhật thông tin quan trọng theo thời gian thực." },
      { title: "📰 Tin tức & Cập nhật cho phi công", body: "Module tin tức tích hợp cho phép PSA xuất bản và quản lý các cập nhật liên quan đến phi công, bao gồm thay đổi hoạt động, thông báo quy định và cảnh báo thời tiết." },
      { title: "🚢 Thông tin tàu & Cảng", body: "Phi công có thể truy cập dữ liệu tàu chi tiết, bao gồm thông số kỹ thuật, lịch trình và hướng dẫn vận hành. Điều này đảm bảo họ có đầy đủ thông tin cần thiết trước khi hỗ trợ tàu vào cảng." },
      { title: "🔄 Quản lý nội dung liền mạch", body: "Quản trị viên có thể dễ dàng cập nhật nội dung trên ứng dụng của phi công thông qua giao diện thân thiện, đảm bảo phân phối thông tin quan trọng kịp thời." },
      { title: "🔗 Tích hợp với hệ thống hiện có của PSA", body: "CMS được thiết kế để tích hợp với các nguồn dữ liệu nội bộ của PSA, đảm bảo đồng bộ hóa giữa nền tảng web và ứng dụng di động của phi công." },
    ],
    techStack: [
      { title: "⚛️ ReactJS cho UI động", body: "Tôi xây dựng CMS web bằng ReactJS, tận dụng kiến trúc component-based để tạo hệ thống module hóa và dễ bảo trì." },
      { title: "🔄 React-Redux cho Quản lý State", body: "Để quản lý luồng dữ liệu phức tạp hiệu quả, tôi triển khai React-Redux, đảm bảo cập nhật dữ liệu phi công và tàu được đồng bộ trên các component khác nhau mà không gây bottleneck hiệu suất." },
      { title: "🏗 Kiến trúc mở rộng được & Dễ bảo trì", body: "Hệ thống được thiết kế để có thể mở rộng, cho phép PSA thêm tính năng mới và tích hợp nguồn dữ liệu bổ sung trong tương lai mà không cần tái cấu trúc lớn." },
    ],
    learnings: [
      { title: "✅ Chuyên sâu hơn về ReactJS & React-Redux", body: "Dự án này củng cố khả năng xây dựng ứng dụng React phức tạp, cải thiện hiểu biết về quản lý state, tái sử dụng component và tối ưu hiệu suất bằng Redux." },
      { title: "🤝 Hợp tác với đội ngũ phát triển PSA", body: "Làm việc với các nhóm nội bộ của PSA cung cấp kinh nghiệm quý giá trong hợp tác liên nhóm, điều chỉnh yêu cầu kinh doanh với triển khai kỹ thuật." },
      { title: "🔗 Xử lý tích hợp API với hệ thống bên thứ ba", body: "Tích hợp PSA-CMS với các dịch vụ backend hiện có của PSA đòi hỏi xử lý hiệu quả các tương tác API, đồng bộ dữ liệu và các cân nhắc bảo mật." },
    ],
    conclusion: "PSA-CMS là dự án có tác động lớn, cung cấp cho phi công một trung tâm thông tin tập trung, thời gian thực trong khi cho phép PSA quản lý và phân phối nội dung hiệu quả. Qua trải nghiệm này, tôi đã rèn luyện kỹ năng ReactJS và Redux, cải thiện khả năng làm việc trong môi trường doanh nghiệp và tích lũy kinh nghiệm thực tiễn trong việc hợp tác với các nhóm bên thứ ba trên các dự án quy mô lớn.",
  },
};

export default function Psa_cms() {
  return <ProjectDetailLayout image={psa_bg} imageAlt="PSA-CMS" content={content} />;
}
