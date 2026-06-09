"use client";

import { useLang } from "@/i18n/LangContext";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import { ScrollReveal } from "@/components/ScrollReveal";

const testimonials = [
  {
    name: "Nguyen Minh Duc",
    role: "CTO, MLTech Soft",
    avatar: "NM",
    text: {
      en: "Quyen consistently delivers high-quality frontend work with great attention to detail. His ability to translate complex designs into performant React code is impressive. A reliable and proactive team member.",
      vi: "Quyen luôn hoàn thành công việc frontend chất lượng cao với sự chú ý đến từng chi tiết. Khả năng chuyển đổi thiết kế phức tạp thành code React hiệu suất cao của anh ấy thật ấn tượng.",
    },
  },
  {
    name: "Tran Thi Lan",
    role: "Product Manager, Webcash Vietnam",
    avatar: "TL",
    text: {
      en: "Working with Quyen on WeTax was a great experience. He improved our PDF rendering performance by 90% and refactored the invoice editor significantly — all while meeting tight deadlines.",
      vi: "Làm việc với Quyen trong dự án WeTax là một trải nghiệm tuyệt vời. Anh ấy cải thiện hiệu suất render PDF lên 90% và tái cấu trúc invoice editor đáng kể — tất cả trong khi vẫn đáp ứng deadline chặt chẽ.",
    },
  },
  {
    name: "David Chen",
    role: "Client, VDental Project",
    avatar: "DC",
    text: {
      en: "Quyen built our dental booking platform from scratch. The final product was pixel-perfect, fast, and our mobile traffic increased by 35% after launch. Highly recommend for any web project.",
      vi: "Quyen đã xây dựng nền tảng đặt lịch nha khoa của chúng tôi từ đầu. Sản phẩm cuối cùng hoàn hảo, nhanh, và lưu lượng mobile tăng 35% sau khi ra mắt.",
    },
  },
];

export const TestimonialsSection = () => {
  const { t, locale } = useLang();
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.title}
          description={t.testimonials.description}
        />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, i) => (
            <ScrollReveal key={item.name} delay={i * 0.15} direction="up">
            <Card className="px-6 py-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 flex items-center justify-center text-gray-900 font-semibold text-sm shrink-0">
                  {item.avatar}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{item.name}</p>
                  <p className="text-white/40 text-xs">{item.role}</p>
                </div>
              </div>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="size-4 text-emerald-300" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-white/60 text-sm leading-relaxed">
                &ldquo;{item.text[locale]}&rdquo;
              </p>
            </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};
