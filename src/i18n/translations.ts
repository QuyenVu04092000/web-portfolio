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
      roles: ["Senior Frontend Engineer", "Next.js Engineer", "TypeScript Engineer", "Frontend Architect"],
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
      ],
      otherProjects: [
        {
          title: "VDental",
          company: "MLTech Soft",
          role: "Frontend Developer",
          techChips: ["React", "Next.js", "TypeScript", "i18n"],
          summary: "Rebuilt multi-step booking UI with VI/EN internationalization support.",
          link: "https://vdental.ai/vi",
        },
        {
          title: "Lothashop",
          company: "MLTech Soft",
          role: "Frontend Developer",
          techChips: ["React", "TypeScript", "E-commerce"],
          summary: "Built product catalog and checkout flow for 500+ SKUs.",
          link: "https://www.lothashop.vn/",
        },
        {
          title: "PSA-CMS",
          company: "MLTech Soft",
          role: "Frontend Developer",
          techChips: ["React", "TypeScript", "REST API"],
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
        "Senior Frontend Engineer with 5+ years building React/Next.js + TypeScript applications. Currently owning frontend architecture for WeTax, a high-scale e-invoicing platform at Webcash Vietnam. Previously led frontend for e-commerce and distributor-management products, including payment integration and mentoring.",
      description:
        "Senior Frontend Engineer with 5+ years building React/Next.js + TypeScript applications. Currently owning frontend architecture for WeTax, a high-scale e-invoicing platform at Webcash Vietnam: data fetching and caching with React Query, global state with Zustand, real-time updates via WebSocket. Previously led frontend for e-commerce and distributor-management products at MLTech Soft, including third-party payment integration, code review, and mentoring junior developers. I care about clear component boundaries, predictable async state, and fast, accessible UIs.",
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
      roles: ["Senior Frontend Engineer", "Next.js Engineer", "TypeScript Engineer", "Frontend Architect"],
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
      ],
      otherProjects: [
        {
          title: "VDental",
          company: "MLTech Soft",
          role: "Frontend Developer",
          techChips: ["React", "Next.js", "TypeScript", "i18n"],
          summary: "Xây dựng lại luồng đặt lịch đa bước với hỗ trợ đa ngôn ngữ VI/EN.",
          link: "https://vdental.ai/vi",
        },
        {
          title: "Lothashop",
          company: "MLTech Soft",
          role: "Frontend Developer",
          techChips: ["React", "TypeScript", "E-commerce"],
          summary: "Xây dựng catalog sản phẩm và luồng checkout cho 500+ SKU.",
          link: "https://www.lothashop.vn/",
        },
        {
          title: "PSA-CMS",
          company: "MLTech Soft",
          role: "Frontend Developer",
          techChips: ["React", "TypeScript", "REST API"],
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
        "Senior Frontend Engineer với 5+ năm xây dựng ứng dụng React/Next.js + TypeScript. Hiện đang sở hữu kiến trúc frontend cho WeTax, nền tảng hóa đơn điện tử quy mô lớn tại Webcash Vietnam. Trước đây dẫn đầu frontend cho e-commerce và hệ thống quản lý phân phối tại MLTech Soft, bao gồm tích hợp thanh toán và mentoring.",
      description:
        "Senior Frontend Engineer với 5+ năm xây dựng ứng dụng React/Next.js + TypeScript. Hiện đang sở hữu kiến trúc frontend cho WeTax, nền tảng hóa đơn điện tử quy mô lớn tại Webcash Vietnam: tìm nạp và cache dữ liệu với React Query, global state với Zustand, cập nhật thời gian thực qua WebSocket. Trước đây dẫn đầu frontend cho e-commerce và hệ thống quản lý phân phối tại MLTech Soft, bao gồm tích hợp thanh toán bên thứ ba, code review và mentoring junior developers. Tôi quan tâm đến ranh giới component rõ ràng, async state đoán trước được và UI nhanh, dễ tiếp cận.",
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
