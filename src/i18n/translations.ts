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
      title: "Senior Frontend Engineer",
      subtitle: "React · Next.js · TypeScript",
      roles: ["React Developer", "Next.js Developer", "TypeScript Engineer", "Frontend Architect"],
      description:
        "I build production-grade React applications for high-volume business and financial workflows, from frontend architecture to performance and real-time UX.",
      viewCaseStudy: "View Case Study",
      downloadResume: "Download Resume",
      hireMe: "Get In Touch",
      seeWork: "See My Work",
      location: "Ho Chi Minh City · Open to remote / US-hours meetings",
    },
    stats: {
      experience: "Years with React",
      performance: "Faster PDF Rendering",
      invoices: "E-invoices Supported",
      promotion: "Promoted: Junior → Senior",
    },
    projects: {
      eyebrow: "Real-world Results",
      title: "Featured Projects",
      description: "Production systems I've shipped — from architecture to deployment.",
      visitSite: "Visit Live Site",
      items: [
        {
          results: [
            "Reduced PDF rendering time by ~90% via server-side offloading (wkhtmltopdf)",
            "Handles tens of millions of e-invoices in production",
            "Real-time status updates via WebSocket",
          ],
        },
        {
          results: [
            // TODO(Buck): replace with measurable technical metrics (Lighthouse score, LCP before/after)
            "Rebuilt multi-step booking UI with VI/EN i18n support",
            "TODO(Buck): Lighthouse score before/after optimisation",
            "TODO(Buck): LCP improvement (e.g. from X s to Y s)",
          ],
        },
        {
          results: [
            // TODO(Buck): replace with measurable technical metrics
            "Built product catalog and checkout flow for 500+ SKUs",
            "TODO(Buck): performance metric (bundle size, Lighthouse, LCP)",
            "TODO(Buck): specific technical contribution worth measuring",
          ],
        },
        {
          results: [
            // TODO(Buck): replace with measurable technical metrics
            "CMS dashboard covering news, vessels, and pilot records with role-based UI",
            "TODO(Buck): Lighthouse score or Core Web Vitals improvement",
            "TODO(Buck): specific technical metric",
          ],
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
        {
          // TODO(Buck): list only testing tools you have actually used (e.g. Jest, React Testing Library, Playwright)
          name: "Testing",
          items: ["TODO(Buck): Jest / React Testing Library / Playwright — list only tools used"],
        },
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
          name: "Languages",
          items: ["Vietnamese (native)", "English — TODO(Buck): level / TOEIC score"],
        },
      ],
    },
    about: {
      eyebrow: "About Me",
      title: "A Bit About Me",
      description:
        "Senior Frontend Engineer with 5+ years building React/Next.js + TypeScript applications. Currently owning frontend architecture for a high-scale e-invoicing platform at Webcash Vietnam: data fetching and caching with React Query, global state with Zustand, real-time updates via WebSocket. Previously led frontend for e-commerce and distributor-management products, including third-party payment integration, code review and mentoring. I care about clear component boundaries, predictable async state, and fast, accessible UIs.",
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
      mobileEyebrow: "Other Projects",
      mobileTitle: "Mobile Projects",
      mobileDescription: "Mobile applications I've developed.",
      viewDetail: "View Detail",
      projects: [
        {
          title: "WeTax",
          description:
            "High-scale e-invoicing platform supporting tens of millions of invoices for enterprise clients. Features real-time invoice management, server-side PDF generation, and WebSocket-powered notifications.",
        },
        {
          title: "VDental",
          description:
            "Dental booking platform connecting US-based clients with Vietnamese clinics. Booking flows, appointment management, real-time chat, and VI/EN multi-language support.",
        },
        {
          title: "Lothashop",
          description:
            "E-commerce app for product purchase, loyalty-point accumulation, and Lothamilk agent registration. Catalog, checkout, and promotions for 500+ SKUs.",
        },
        {
          title: "PSA-CMS",
          description:
            "CMS dashboard for pilot management — news, vessels, and pilot records with role-based admin/pilot UI and REST API integration.",
        },
      ],
      mobileProjects: [
        {
          title: "DigiSale Sales Force Automation (SFA)",
          description:
            "Sales force automation app helping businesses manage activities, track performance, and improve sales efficiency.",
        },
        {
          title: "MydigitalPA",
          description:
            "App for pilots to manage license upgrades, job listings, news, and notifications. Admin panel for managing pilots, jobs, and alerts.",
        },
        {
          title: "Pilot Audit",
          description:
            "App for pilots to view audit results, history, schedule, status, and details.",
        },
        {
          title: "Career Guidance App for LOF",
          description:
            "Skill self-training app enabling users to connect, share knowledge, and grow professionally.",
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
      title: "Senior Frontend Engineer",
      subtitle: "React · Next.js · TypeScript",
      roles: ["React Developer", "Next.js Developer", "TypeScript Engineer", "Frontend Architect"],
      description:
        "Tôi xây dựng ứng dụng React production-grade cho nghiệp vụ tài chính và kinh doanh khối lượng lớn — từ kiến trúc frontend đến tối ưu hiệu suất và UX thời gian thực.",
      viewCaseStudy: "Xem Case Study",
      downloadResume: "Tải CV",
      hireMe: "Liên hệ",
      seeWork: "Xem dự án",
      location: "TP. Hồ Chí Minh · Sẵn sàng làm việc remote / giờ Mỹ",
    },
    stats: {
      experience: "Năm với React",
      performance: "Tăng tốc render PDF",
      invoices: "Hóa đơn điện tử đã hỗ trợ",
      promotion: "Thăng tiến: Junior → Senior",
    },
    projects: {
      eyebrow: "Kết quả thực tế",
      title: "Dự án nổi bật",
      description: "Các hệ thống production tôi đã ship — từ kiến trúc đến triển khai.",
      visitSite: "Xem trang web",
      items: [
        {
          results: [
            "Giảm thời gian render PDF ~90% bằng server-side offloading (wkhtmltopdf)",
            "Xử lý hàng chục triệu hóa đơn điện tử trên môi trường production",
            "Cập nhật trạng thái thời gian thực qua WebSocket",
          ],
        },
        {
          results: [
            "Xây dựng lại luồng đặt lịch đa ngôn ngữ VI/EN",
            "TODO(Buck): Lighthouse score trước/sau tối ưu",
            "TODO(Buck): cải thiện LCP (ví dụ từ X giây xuống Y giây)",
          ],
        },
        {
          results: [
            "Xây dựng catalog sản phẩm và luồng checkout cho 500+ SKU",
            "TODO(Buck): chỉ số hiệu suất (bundle size, Lighthouse, LCP)",
            "TODO(Buck): đóng góp kỹ thuật cụ thể đáng đo lường",
          ],
        },
        {
          results: [
            "Dashboard CMS quản lý tin tức, tàu thuyền và hồ sơ phi công với phân quyền",
            "TODO(Buck): Lighthouse score hoặc cải thiện Core Web Vitals",
            "TODO(Buck): chỉ số kỹ thuật cụ thể",
          ],
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
        {
          name: "Testing",
          items: ["TODO(Buck): Jest / React Testing Library / Playwright — chỉ liệt kê tools đã dùng"],
        },
        {
          name: "Tooling",
          items: ["Vite", "Webpack", "Git", "Docker"],
        },
        {
          name: "AI-Assisted Dev",
          items: ["Cursor", "Claude Code", "GitHub Copilot"],
        },
        {
          name: "Ngôn ngữ",
          items: ["Tiếng Việt (bản ngữ)", "Tiếng Anh — TODO(Buck): trình độ / điểm TOEIC"],
        },
      ],
    },
    about: {
      eyebrow: "Về tôi",
      title: "Một chút về tôi",
      description:
        "Senior Frontend Engineer với 5+ năm xây dựng ứng dụng React/Next.js + TypeScript. Hiện đang sở hữu kiến trúc frontend cho nền tảng hóa đơn điện tử quy mô lớn tại Webcash Vietnam: tìm nạp và cache dữ liệu với React Query, global state với Zustand, cập nhật thời gian thực qua WebSocket. Trước đây dẫn đầu frontend cho e-commerce và hệ thống quản lý phân phối, bao gồm tích hợp thanh toán, code review và mentoring. Tôi quan tâm đến ranh giới component rõ ràng, async state đoán trước được và UI nhanh, dễ tiếp cận.",
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
      mobileEyebrow: "Dự án khác",
      mobileTitle: "Ứng dụng di động",
      mobileDescription: "Các ứng dụng di động tôi đã phát triển.",
      viewDetail: "Xem chi tiết",
      projects: [
        {
          title: "WeTax",
          description:
            "Nền tảng hóa đơn điện tử quy mô lớn hỗ trợ hàng chục triệu hóa đơn cho khách hàng doanh nghiệp. Quản lý hóa đơn thời gian thực, tạo PDF server-side và thông báo qua WebSocket.",
        },
        {
          title: "VDental",
          description:
            "Nền tảng đặt lịch nha khoa kết nối khách hàng Mỹ với phòng khám Việt Nam. Luồng đặt lịch, quản lý lịch hẹn, chat thời gian thực và hỗ trợ đa ngôn ngữ VI/EN.",
        },
        {
          title: "Lothashop",
          description:
            "Ứng dụng e-commerce cho mua sắm, tích điểm thưởng và đăng ký đại lý Lothamilk. Catalog, checkout và khuyến mãi cho 500+ SKU.",
        },
        {
          title: "PSA-CMS",
          description:
            "Dashboard CMS quản lý phi công — tin tức, tàu thuyền, hồ sơ với UI phân quyền admin/phi công và tích hợp REST API.",
        },
      ],
      mobileProjects: [
        {
          title: "DigiSale Sales Force Automation (SFA)",
          description:
            "Ứng dụng tự động hóa bán hàng giúp doanh nghiệp quản lý hoạt động, theo dõi hiệu suất và cải thiện hiệu quả bán hàng.",
        },
        {
          title: "MydigitalPA",
          description:
            "Ứng dụng cho phi công quản lý nâng cấp giấy phép, công việc, tin tức và thông báo. Admin quản lý phi công, công việc và cảnh báo.",
        },
        {
          title: "Pilot Audit",
          description: "Ứng dụng cho phi công xem kết quả kiểm tra, lịch sử, lịch trình và chi tiết kiểm tra.",
        },
        {
          title: "Career Guidance App for LOF",
          description:
            "Ứng dụng tự đào tạo kỹ năng, giúp người dùng kết nối, chia sẻ kiến thức và phát triển sự nghiệp.",
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
