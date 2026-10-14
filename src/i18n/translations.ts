export const translations = {
  en: {
    nav: {
      home: "Home",
      projects: "Projects",
      about: "About",
      resume: "Resume",
    },
    hero: {
      available: "Open to full-time · Remote-friendly",
      title: "Frontend Engineer",
      subtitle: "React · Next.js · TypeScript",
      roles: ["Frontend Engineer", "Next.js Engineer", "TypeScript Engineer", "Frontend Architect"],
      description:
        "I build production-grade React applications for high-volume business and financial workflows, from frontend architecture to performance and real-time UX.",
      viewCaseStudy: "View Case Study",
      downloadResume: "Download Resume",
      hireMe: "Get In Touch",
      seeWork: "See My Work",
      location: "Ho Chi Minh City · Open to remote / US-hours meetings",
    },
    stats: {
      experience: "years with React",
      performance: "less PDF rendering time",
      invoices: "e-invoices supported",
      promotion: "in 3 years at MLTech Soft",
    },
    projects: {
      eyebrow: "Selected Work",
      title: "Featured Projects",
      description: "Production systems I've shipped — from architecture to deployment.",
      visitSite: "Visit Live Site",
      readCaseStudy: "Read case study",
      items: [
        {
          title: "WeTax",
          company: "Webcash Vietnam",
          role: "Senior Frontend Developer",
          techChips: ["Next.js", "TypeScript", "React Query", "Zustand", "WebSocket"],
          summary: "High-scale e-invoicing platform for enterprise clients",
          results: [
            "~90% less PDF rendering time via server-side offloading",
            "Tens of millions of e-invoices in production",
            "Real-time status updates via WebSocket",
          ],
          link: "/web-portfolio/projects/wetax",
        },
        {
          title: "Lothashop",
          company: "MLTech Soft",
          role: "Middle Frontend Engineer",
          techChips: ["Next.js", "TypeScript", "Zustand", "VNPay", "socket.io"],
          summary: "VNPay checkout integration and real-time distributor matching for a dairy-products e-commerce platform.",
          results: [
            "3 delivery types × 2 payment methods in one checkout flow",
            "Real-time distributor matching with 60 s timeout via socket.io",
            "Shipped to production at lothashop.vn",
          ],
          link: "/web-portfolio/projects/lothashop",
        },
      ],
      otherProjects: [
        {
          title: "VDental",
          company: "MLTech Soft",
          role: "Middle Frontend Engineer",
          techChips: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"],
          summary: "Rebuilt multi-step booking UI with VI/EN internationalization support.",
          link: "https://vdental.ai/vi",
        },
        {
          title: "PSA-CMS",
          company: "PSA International",
          role: "Middle Frontend Engineer",
          techChips: ["React", "TypeScript", "Redux"],
          summary: "CMS dashboard covering news, vessels, and pilot records with role-based UI.",
          link: "https://psa-cms.mltechsoft.com",
        },
      ],
    },
    skills: {
      eyebrow: "Technical Skills",
      title: "What I Work With",
      aiNote:
        "I use AI tools to speed up implementation, but every change still goes through my own review, types and tests.",
      groups: [
        {
          name: "Core",
          items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
        },
        {
          name: "State & Data",
          items: ["React Query", "Zustand", "Redux", "Context API", "REST", "GraphQL", "WebSocket"],
        },
        {
          name: "Quality & Performance",
          items: [
            "Chrome DevTools",
            "Lighthouse / Core Web Vitals",
            "Code Splitting",
            "Virtualization",
            "Accessibility (a11y)",
          ],
        },
        // Testing group hidden (draft) until tool list is confirmed
        // TODO(Buck): uncomment and fill items once confirmed: { name: "Testing", items: ["Jest", "React Testing Library", "Playwright"] }
        {
          name: "Tooling",
          items: ["Vite", "Webpack", "Git", "Docker"],
        },
        {
          name: "AI-Assisted Dev",
          items: ["Cursor", "Claude Code", "GitHub Copilot"],
        },
        {
          // TODO(Buck): add English level / TOEIC score to show full entry
          name: "Languages",
          items: ["Vietnamese (native)", "English"],
        },
      ],
    },
    about: {
      eyebrow: "About Me",
      title: "A Bit About Me",
      descriptionShort:
        "Frontend Engineer with 5+ years building React/Next.js + TypeScript applications. Currently working on frontend architecture for WeTax, a high-scale e-invoicing platform at Webcash Vietnam. Previously led frontend for e-commerce and distributor-management products, including payment integration and mentoring.",
      description:
        "Frontend Engineer with 5+ years building React/Next.js + TypeScript applications. Currently working on the frontend architecture of WeTax, a high-scale e-invoicing platform at Webcash Vietnam: data fetching and caching with React Query, global state with Zustand, real-time updates via WebSocket. Previously led frontend for e-commerce and distributor-management products at MLTech Soft, including third-party payment integration, code review, and mentoring junior developers. I care about clear component boundaries, predictable async state, and fast, accessible UIs.",
      reads: "My Reads",
      readsDesc: "Explore the books shaping my perspectives",
      toolbox: "My Toolbox",
      toolboxDesc: "Technologies and tools I work with every day.",
      beyond: "Beyond the Code",
      beyondDesc: "Interests outside the screen.",
      hobbies: ["Beer", "Gaming", "Traveling", "Music", "Fitness", "Football", "Badminton"],
    },
    workExperience: {
      title: "Work Experience",
    },
    tape: {
      words: [
        "Performant",
        "Accessible",
        "Secure",
        "Interactive",
        "Scalable",
        "User Friendly",
        "Responsive",
        "Maintainable",
        "Search Optimized",
        "Usable",
        "Reliable",
      ],
    },
    testimonials: {
      eyebrow: "Kind Words",
      title: "What People Say",
      description: "Feedback from colleagues I've had the pleasure of working with.",
    },
    contact: {
      title: "Let's connect",
      description:
        "Open to full-time frontend roles. Send me a message and I'll get back to you within 24 hours.",
      replyTime: "Reply within 24 hours",
      available: "Open to full-time opportunities",
      form: {
        name: "Name",
        namePlaceholder: "Your name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        message: "Message",
        messagePlaceholder: "Tell me about the role or project...",
        send: "Send Message",
        sending: "Sending...",
        successTitle: "Message sent!",
        successDesc: "I'll get back to you within 24 hours.",
        sendAnother: "Send another message",
      },
    },
    footer: {
      crafted: "Crafted with care by Vu Duc Quyen (Buck)",
    },
    projectsPage: {
      eyebrow: "All Projects",
      title: "My Projects",
      description: "Production systems and client projects I've shipped across web and mobile.",
      mobileEyebrow: "Mobile Apps",
      mobileTitle: "Mobile (React Native)",
      mobileDescription: "React Native applications I've developed.",
      earlierEyebrow: "Earlier Mobile Work",
      earlierTitle: "Swift & Flutter Projects",
      earlierDescription: "Native iOS (Swift/PadOS) and Flutter apps built at MLTech Soft for PSA International and LOF.",
      viewDetail: "View Detail",
      projects: [
        {
          title: "WeTax",
          description:
            "High-scale e-invoicing platform supporting tens of millions of invoices for enterprise clients. Features real-time invoice management, server-side PDF generation, and WebSocket-powered notifications.",
        },
        {
          title: "Lothashop",
          description:
            "VNPay checkout integration with real-time distributor matching. Supports 3 delivery types, COD and VNPay payment, vouchers, Lothashop wallet, and guest checkout with automatic account registration.",
        },
        {
          title: "VDental",
          description:
            "Dental booking platform connecting US-based clients with Vietnamese clinics. Booking flows, appointment management, real-time chat, and VI/EN multi-language support.",
        },
        {
          title: "PSA-CMS",
          description:
            "CMS dashboard for pilot management — news, vessels, and pilot records with role-based admin/pilot UI and REST API integration.",
        },
      ],
      mobileProjects: [
        {
          title: "DigiSale · SFA",
          description:
            "Sales force automation app for field agents: visit check-in, order submission, product catalog, and performance reporting.",
        },
      ],
      earlierProjects: [
        {
          title: "MydigitalPA",
          description:
            "iPad app for PSA International pilots: license upgrade tracking, job assignments, news feed, and MQTT real-time notifications.",
        },
        {
          title: "Pilot Audit",
          description:
            "iPad app for PSA International pilots to track audit results, history, schedule, and status with live MQTT updates.",
        },
        {
          title: "Career Guidance",
          description:
            "Flutter app for LOF: real-time chat with mentors, multiple-choice skill assessments, and a progress dashboard.",
        },
      ],
    },
    detailLabels: {
      client: "Client",
      role: "Role",
      timeline: "Timeline",
      technologiesUsed: "Technologies Used",
      introduction: "Introduction",
      whatIs: "What is",
      keyFeatures: "Key Features",
      keyContributions: "Key Contributions",
      technologies: "Technologies and Tools",
      learnings: "Key Learnings and Challenges",
      conclusion: "Conclusion",
      problem: "Problem",
      architecture: "Architecture",
      asyncErrorHandling: "Async & Error Handling",
      performance: "Performance",
      result: "Result",
    },
  },
  vi: {
    nav: {
      home: "Trang chủ",
      projects: "Dự án",
      about: "Về tôi",
      resume: "CV",
    },
    hero: {
      available: "Tìm kiếm vị trí toàn thời gian · Remote",
      title: "Frontend Engineer",
      subtitle: "React · Next.js · TypeScript",
      roles: ["Frontend Engineer", "Next.js Engineer", "TypeScript Engineer", "Frontend Architect"],
      description:
        "Tôi xây dựng ứng dụng React production-grade cho nghiệp vụ tài chính và kinh doanh khối lượng lớn — từ kiến trúc frontend đến tối ưu hiệu suất và UX thời gian thực.",
      viewCaseStudy: "Xem Case Study",
      downloadResume: "Tải CV",
      hireMe: "Liên hệ",
      seeWork: "Xem dự án",
      location: "TP. Hồ Chí Minh · Sẵn sàng làm việc remote / giờ Mỹ",
    },
    stats: {
      experience: "năm với React",
      performance: "giảm thời gian render PDF",
      invoices: "hóa đơn điện tử đã hỗ trợ",
      promotion: "trong 3 năm tại MLTech Soft",
    },
    projects: {
      eyebrow: "Công việc đã làm",
      title: "Dự án nổi bật",
      description: "Các hệ thống production tôi đã ship — từ kiến trúc đến triển khai.",
      visitSite: "Xem trang web",
      readCaseStudy: "Đọc case study",
      items: [
        {
          title: "WeTax",
          company: "Webcash Vietnam",
          role: "Senior Frontend Developer",
          techChips: ["Next.js", "TypeScript", "React Query", "Zustand", "WebSocket"],
          summary: "Nền tảng hóa đơn điện tử quy mô lớn cho khách hàng doanh nghiệp",
          results: [
            "Giảm ~90% thời gian render PDF bằng server-side offloading",
            "Hàng chục triệu hóa đơn điện tử trong production",
            "Cập nhật trạng thái thời gian thực qua WebSocket",
          ],
          link: "/web-portfolio/projects/wetax",
        },
        {
          title: "Lothashop",
          company: "MLTech Soft",
          role: "Middle Frontend Engineer",
          techChips: ["Next.js", "TypeScript", "Zustand", "VNPay", "socket.io"],
          summary: "Tích hợp thanh toán VNPay và ghép nối distributor thời gian thực cho nền tảng e-commerce sữa Lothamilk.",
          results: [
            "3 loại giao hàng × 2 phương thức thanh toán trong một luồng checkout",
            "Ghép nối distributor thời gian thực với timeout 60 giây qua socket.io",
            "Đã ra production tại lothashop.vn",
          ],
          link: "/web-portfolio/projects/lothashop",
        },
      ],
      otherProjects: [
        {
          title: "VDental",
          company: "MLTech Soft",
          role: "Middle Frontend Engineer",
          techChips: ["Next.js", "TypeScript", "Tailwind CSS", "i18n"],
          summary: "Xây dựng lại luồng đặt lịch đa bước với hỗ trợ đa ngôn ngữ VI/EN.",
          link: "https://vdental.ai/vi",
        },
        {
          title: "PSA-CMS",
          company: "PSA International",
          role: "Middle Frontend Engineer",
          techChips: ["React", "TypeScript", "Redux"],
          summary: "Dashboard CMS quản lý tin tức, tàu thuyền và hồ sơ phi công với phân quyền.",
          link: "https://psa-cms.mltechsoft.com",
        },
      ],
    },
    skills: {
      eyebrow: "Kỹ năng kỹ thuật",
      title: "Công cụ tôi làm việc với",
      aiNote:
        "Tôi dùng công cụ AI để tăng tốc triển khai, nhưng mọi thay đổi vẫn qua review, types và tests của riêng tôi.",
      groups: [
        {
          name: "Core",
          items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS", "Tailwind CSS"],
        },
        {
          name: "State & Data",
          items: ["React Query", "Zustand", "Redux", "Context API", "REST", "GraphQL", "WebSocket"],
        },
        {
          name: "Chất lượng & Hiệu suất",
          items: [
            "Chrome DevTools",
            "Lighthouse / Core Web Vitals",
            "Code Splitting",
            "Virtualization",
            "Accessibility (a11y)",
          ],
        },
        // Testing group hidden (draft) until tool list is confirmed
        // TODO(Buck): uncomment once confirmed: { name: "Testing", items: [...] }
        {
          name: "Tooling",
          items: ["Vite", "Webpack", "Git", "Docker"],
        },
        {
          name: "AI-Assisted Dev",
          items: ["Cursor", "Claude Code", "GitHub Copilot"],
        },
        {
          // TODO(Buck): add English level / TOEIC score
          name: "Ngôn ngữ",
          items: ["Tiếng Việt (bản ngữ)", "Tiếng Anh"],
        },
      ],
    },
    about: {
      eyebrow: "Về tôi",
      title: "Một chút về tôi",
      descriptionShort:
        "Frontend Engineer với 5+ năm xây dựng ứng dụng React/Next.js + TypeScript. Hiện đang phụ trách kiến trúc frontend cho WeTax, nền tảng hóa đơn điện tử quy mô lớn tại Webcash Vietnam. Trước đây dẫn đầu frontend cho e-commerce và hệ thống quản lý phân phối tại MLTech Soft, bao gồm tích hợp thanh toán và mentoring.",
      description:
        "Frontend Engineer với 5+ năm xây dựng ứng dụng React/Next.js + TypeScript. Hiện đang phụ trách kiến trúc frontend của WeTax, nền tảng hóa đơn điện tử quy mô lớn tại Webcash Vietnam: tìm nạp và cache dữ liệu với React Query, global state với Zustand, cập nhật thời gian thực qua WebSocket. Trước đây dẫn đầu frontend cho e-commerce và hệ thống quản lý phân phối tại MLTech Soft, bao gồm tích hợp thanh toán bên thứ ba, code review và mentoring junior developers. Tôi quan tâm đến ranh giới component rõ ràng, async state đoán trước được và UI nhanh, dễ tiếp cận.",
      reads: "Sách tôi đọc",
      readsDesc: "Những cuốn sách định hình góc nhìn của tôi",
      toolbox: "Công cụ của tôi",
      toolboxDesc: "Các công nghệ và công cụ tôi dùng hàng ngày.",
      beyond: "Ngoài lập trình",
      beyondDesc: "Sở thích ngoài màn hình.",
      hobbies: ["Bia", "Gaming", "Du lịch", "Âm nhạc", "Thể hình", "Bóng đá", "Cầu lông"],
    },
    workExperience: {
      title: "Kinh nghiệm làm việc",
    },
    tape: {
      words: [
        "Hiệu suất cao",
        "Dễ tiếp cận",
        "Bảo mật",
        "Tương tác",
        "Mở rộng được",
        "Thân thiện người dùng",
        "Responsive",
        "Dễ bảo trì",
        "Tối ưu SEO",
        "Khả dụng",
        "Đáng tin cậy",
      ],
    },
    testimonials: {
      eyebrow: "Nhận xét",
      title: "Mọi người nói gì",
      description: "Phản hồi từ đồng nghiệp tôi đã có cơ hội làm việc cùng.",
    },
    contact: {
      title: "Kết nối với tôi",
      description:
        "Đang tìm kiếm vị trí frontend toàn thời gian. Gửi tin nhắn và tôi sẽ phản hồi trong vòng 24 giờ.",
      replyTime: "Phản hồi trong 24 giờ",
      available: "Sẵn sàng cho vị trí toàn thời gian",
      form: {
        name: "Họ tên",
        namePlaceholder: "Tên của bạn",
        email: "Email",
        emailPlaceholder: "email@cua-ban.com",
        message: "Tin nhắn",
        messagePlaceholder: "Mô tả vị trí hoặc dự án...",
        send: "Gửi tin nhắn",
        sending: "Đang gửi...",
        successTitle: "Đã gửi thành công!",
        successDesc: "Tôi sẽ phản hồi trong vòng 24 giờ.",
        sendAnother: "Gửi tin nhắn khác",
      },
    },
    footer: {
      crafted: "Được tạo ra với tâm huyết bởi Vu Duc Quyen (Buck)",
    },
    projectsPage: {
      eyebrow: "Tất cả dự án",
      title: "Dự án của tôi",
      description: "Các hệ thống production và dự án khách hàng tôi đã ship.",
      mobileEyebrow: "Ứng dụng di động",
      mobileTitle: "Mobile (React Native)",
      mobileDescription: "Các ứng dụng React Native tôi đã phát triển.",
      earlierEyebrow: "Dự án mobile trước đây",
      earlierTitle: "Dự án Swift & Flutter",
      earlierDescription: "Ứng dụng iOS native (Swift/PadOS) và Flutter xây dựng tại MLTech Soft cho PSA International và LOF.",
      viewDetail: "Xem chi tiết",
      projects: [
        {
          title: "WeTax",
          description:
            "Nền tảng hóa đơn điện tử quy mô lớn hỗ trợ hàng chục triệu hóa đơn cho khách hàng doanh nghiệp. Quản lý hóa đơn thời gian thực, tạo PDF server-side và thông báo qua WebSocket.",
        },
        {
          title: "Lothashop",
          description:
            "Tích hợp thanh toán VNPay với ghép nối distributor thời gian thực. Hỗ trợ 3 loại giao hàng, COD và VNPay, voucher, ví Lothashop, và checkout khách với đăng ký tài khoản tự động.",
        },
        {
          title: "VDental",
          description:
            "Nền tảng đặt lịch nha khoa kết nối khách hàng Mỹ với phòng khám Việt Nam. Luồng đặt lịch, quản lý lịch hẹn, chat thời gian thực và hỗ trợ đa ngôn ngữ VI/EN.",
        },
        {
          title: "PSA-CMS",
          description:
            "Dashboard CMS quản lý phi công — tin tức, tàu thuyền, hồ sơ với UI phân quyền admin/phi công và tích hợp REST API.",
        },
      ],
      mobileProjects: [
        {
          title: "DigiSale · SFA",
          description:
            "Ứng dụng tự động hóa bán hàng cho nhân viên thực địa: check-in ghé thăm, đặt hàng, danh mục sản phẩm và báo cáo hiệu suất.",
        },
      ],
      earlierProjects: [
        {
          title: "MydigitalPA",
          description:
            "Ứng dụng iPad cho phi công PSA International: theo dõi nâng cấp giấy phép, công việc, bảng tin và thông báo MQTT thời gian thực.",
        },
        {
          title: "Pilot Audit",
          description:
            "Ứng dụng iPad cho phi công PSA International theo dõi kết quả kiểm tra, lịch sử, lịch trình và trạng thái với cập nhật MQTT.",
        },
        {
          title: "Career Guidance",
          description:
            "Ứng dụng Flutter cho LOF: chat thời gian thực với mentor, bài thi trắc nghiệm đánh giá kỹ năng và dashboard theo dõi tiến độ.",
        },
      ],
    },
    detailLabels: {
      client: "Khách hàng",
      role: "Vai trò",
      timeline: "Thời gian",
      technologiesUsed: "Công nghệ sử dụng",
      introduction: "Giới thiệu",
      whatIs: "Giới thiệu về",
      keyFeatures: "Tính năng chính",
      keyContributions: "Đóng góp chính",
      technologies: "Công nghệ & Công cụ",
      learnings: "Kinh nghiệm & Thách thức",
      conclusion: "Kết luận",
      problem: "Vấn đề",
      architecture: "Kiến trúc",
      asyncErrorHandling: "Async & Xử lý lỗi",
      performance: "Hiệu suất",
      result: "Kết quả",
    },
  },
} as const;

export type Locale = keyof typeof translations;
export type Translations = (typeof translations)[Locale];
