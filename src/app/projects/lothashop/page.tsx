"use client";

import lothashop_bg from "@/assets/images/lothashop_bg.png";
import ProjectDetailLayout, { ProjectDetailContent } from "@/components/ProjectDetailLayout";

const content: { en: ProjectDetailContent; vi: ProjectDetailContent } = {
  en: {
    title: "Building Lothashop: A Smart Shopping App for Lothamilk Customers",
    client: "Lothamilk JSC",
    role: "Front-end Developer and Mobile Developer",
    timeline: "10 months",
    tech: "Next.js, Tailwind CSS, Flutter, VNPay Integration",
    intro: "Lothashop was built as a smart shopping application that allows users to purchase Lothamilk products, accumulate reward points, and register as a Lothamilk Personal Agent. This app empowers users to buy products for personal consumption or resell them to others with attractive promotions and vouchers. The project required integrating e-commerce functionalities, loyalty programs, personal agent registration, and payment processing via VNPay across both web (Next.js) and mobile (Flutter) platforms.",
    features: [
      { title: "🛒 Order Products Directly", body: "Customers can browse and purchase Lothamilk products directly from the app. The ordering system ensures a smooth and secure shopping experience, making it easy for users to get their favorite dairy products delivered to their doorstep." },
      { title: "🎟 Apply Vouchers & Promotions", body: "Lothashop offers an attractive rewards system where customers can apply vouchers and promotional discounts during checkout. This feature encourages customer loyalty and enhances the overall shopping experience." },
      { title: "👥 Register as a Personal Agent", body: "Customers can register to become agents, allowing them to purchase Lothamilk products in bulk and sell them to other consumers while enjoying special incentives and commissions." },
      { title: "📦 Track Orders in Real-Time", body: "Customers can monitor their orders from placement to delivery, ensuring transparency and trust in the purchasing process. They can also check their order history for better management of past purchases." },
      { title: "💳 Seamless Payments with VNPay", body: "We integrated VNPay, a leading payment gateway in Vietnam. Customers can pay conveniently through various methods, including online banking and QR code payments." },
    ],
    techStack: [
      { title: "🚀 Next.js for the Web Platform", body: "I used Next.js to build the web version of Lothashop, benefiting from its server-side rendering (SSR) and static site generation (SSG) capabilities for improved performance and SEO." },
      { title: "🎨 Tailwind CSS for Responsive UI", body: "For styling, I implemented Tailwind CSS, which allowed for rapid development of clean and responsive UI components, creating an intuitive and visually appealing shopping experience." },
      { title: "📱 Flutter for Mobile App Development", body: "Since Lothashop needed to be available on both Android and iOS, I used Flutter to build the mobile application. Flutter's cross-platform capabilities ensured a consistent experience across devices while reducing development time." },
      { title: "🔄 State Management with Cubit", body: "To efficiently manage the app's state, I implemented Cubit, a lightweight state management solution from the Bloc library, improving performance and maintaining a structured approach to data handling." },
      { title: "💰 VNPay Payment Integration", body: "One of the biggest technical challenges was integrating VNPay, which required collaboration with their development team. This allowed customers to pay securely via multiple payment methods." },
    ],
    learnings: [
      { title: "✅ Deepened React & React Hook Knowledge", body: "Working on the web platform helped me strengthen my understanding of React and React Hooks, optimizing state and lifecycle management within functional components." },
      { title: "📱 Exploring Flutter & State Management", body: "I had the opportunity to dive deeper into Flutter development, especially focusing on Cubit for state management. Learning how to manage complex application states efficiently was a valuable takeaway." },
      { title: "🎯 Releasing Apps to Google Play & Apple App Store", body: "The deployment process was a crucial learning experience, navigating the submission process for both Google Play and the Apple App Store including app reviews, compliance with platform guidelines, and performance optimization." },
      { title: "🔗 Collaboration with VNPay Teams", body: "Integrating VNPay required working closely with three different teams at VNPay to ensure proper implementation and troubleshooting of payment processing, improving my ability to manage third-party integrations." },
    ],
    conclusion: "Lothashop was a rewarding project that allowed me to work on a full-fledged e-commerce platform while gaining hands-on experience with Next.js, React, Flutter, VNPay, and state management techniques. With Lothashop now fully functional, customers can enjoy a seamless shopping experience — buying, earning rewards, and becoming Lothamilk agents — all in one place!",
  },
  vi: {
    title: "Xây dựng Lothashop: Ứng dụng mua sắm thông minh cho khách hàng Lothamilk",
    client: "Lothamilk JSC",
    role: "Front-end Developer và Mobile Developer",
    timeline: "10 tháng",
    tech: "Next.js, Tailwind CSS, Flutter, Tích hợp VNPay",
    intro: "Lothashop được xây dựng như một ứng dụng mua sắm thông minh cho phép người dùng mua sản phẩm Lothamilk, tích lũy điểm thưởng và đăng ký làm đại lý cá nhân Lothamilk. Ứng dụng tích hợp chức năng thương mại điện tử, chương trình khách hàng thân thiết, đăng ký đại lý cá nhân và xử lý thanh toán qua VNPay trên cả nền tảng web (Next.js) và di động (Flutter).",
    features: [
      { title: "🛒 Đặt hàng trực tiếp", body: "Khách hàng có thể xem và mua sản phẩm Lothamilk trực tiếp từ ứng dụng. Hệ thống đặt hàng đảm bảo trải nghiệm mua sắm mượt mà và an toàn, giúp người dùng nhận sản phẩm yêu thích tận nhà." },
      { title: "🎟 Áp dụng voucher & khuyến mãi", body: "Lothashop có hệ thống phần thưởng hấp dẫn cho phép khách hàng áp dụng voucher và giảm giá khi thanh toán, khuyến khích sự trung thành của khách hàng và nâng cao trải nghiệm mua sắm." },
      { title: "👥 Đăng ký làm đại lý cá nhân", body: "Khách hàng có thể đăng ký làm đại lý, cho phép họ mua sản phẩm Lothamilk với số lượng lớn và bán lại cho người tiêu dùng khác trong khi hưởng các ưu đãi và hoa hồng đặc biệt." },
      { title: "📦 Theo dõi đơn hàng thời gian thực", body: "Khách hàng có thể theo dõi đơn hàng từ lúc đặt đến khi giao, đảm bảo tính minh bạch và tin cậy. Họ cũng có thể xem lịch sử đơn hàng để quản lý các giao dịch trước đó." },
      { title: "💳 Thanh toán liền mạch với VNPay", body: "Chúng tôi tích hợp VNPay, cổng thanh toán hàng đầu tại Việt Nam. Khách hàng có thể thanh toán thuận tiện qua nhiều phương thức, bao gồm ngân hàng trực tuyến và thanh toán QR." },
    ],
    techStack: [
      { title: "🚀 Next.js cho Web", body: "Tôi dùng Next.js để xây dựng phiên bản web của Lothashop, tận dụng khả năng server-side rendering (SSR) và static site generation (SSG) để cải thiện hiệu suất và SEO." },
      { title: "🎨 Tailwind CSS cho UI Responsive", body: "Tôi triển khai Tailwind CSS để phát triển nhanh các UI component sạch và responsive, tạo trải nghiệm mua sắm trực quan và hấp dẫn về mặt thị giác." },
      { title: "📱 Flutter cho Mobile", body: "Vì Lothashop cần có mặt trên cả Android và iOS, tôi dùng Flutter để xây dựng ứng dụng di động. Khả năng đa nền tảng của Flutter đảm bảo trải nghiệm nhất quán trên các thiết bị trong khi giảm thời gian phát triển." },
      { title: "🔄 Quản lý state với Cubit", body: "Để quản lý state ứng dụng hiệu quả, tôi triển khai Cubit, giải pháp quản lý state nhẹ từ thư viện Bloc, cải thiện hiệu suất và duy trì cách tiếp cận có cấu trúc trong xử lý dữ liệu." },
      { title: "💰 Tích hợp thanh toán VNPay", body: "Một trong những thách thức kỹ thuật lớn nhất là tích hợp VNPay, đòi hỏi hợp tác với đội ngũ phát triển của họ. Điều này cho phép khách hàng thanh toán an toàn qua nhiều phương thức." },
    ],
    learnings: [
      { title: "✅ Hiểu sâu hơn về React & React Hooks", body: "Làm việc trên nền tảng web giúp tôi củng cố hiểu biết về React và React Hooks, tối ưu hóa quản lý state và vòng đời trong các functional components." },
      { title: "📱 Khám phá Flutter & Quản lý State", body: "Tôi có cơ hội tìm hiểu sâu hơn về phát triển Flutter, đặc biệt tập trung vào Cubit cho quản lý state. Học cách quản lý các trạng thái ứng dụng phức tạp một cách hiệu quả là một bài học quý giá." },
      { title: "🎯 Phát hành lên Google Play & App Store", body: "Quá trình triển khai là trải nghiệm học hỏi quan trọng, điều hướng quy trình nộp app cho cả Google Play và Apple App Store bao gồm đánh giá app, tuân thủ hướng dẫn nền tảng và tối ưu hiệu suất." },
      { title: "🔗 Hợp tác với đội ngũ VNPay", body: "Tích hợp VNPay đòi hỏi làm việc chặt chẽ với ba nhóm khác nhau tại VNPay để đảm bảo triển khai đúng cách và xử lý sự cố thanh toán, cải thiện khả năng quản lý tích hợp bên thứ ba của tôi." },
    ],
    conclusion: "Lothashop là dự án bổ ích cho phép tôi làm việc trên nền tảng thương mại điện tử đầy đủ tính năng trong khi tích lũy kinh nghiệm thực tiễn với Next.js, React, Flutter, VNPay và các kỹ thuật quản lý state. Với Lothashop đã hoạt động đầy đủ, khách hàng có thể tận hưởng trải nghiệm mua sắm liền mạch — mua hàng, tích điểm và trở thành đại lý Lothamilk — tất cả trong một nơi!",
  },
};

export default function Lothashop() {
  return <ProjectDetailLayout image={lothashop_bg} imageAlt="Lothashop" content={content} />;
}
