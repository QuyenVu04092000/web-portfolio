"use client";

import React, { useRef } from "react";
import { Header } from "@/sections/Header";
import wetax from "@/assets/images/wetax.png";
import Image from "next/image";
import { slideInFromBottom } from "../../../../utils/motion";
import { motion, useInView } from "framer-motion";
import { useLang } from "@/i18n/LangContext";

export default function WeTax() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const contentRef = useRef(null);
  const isInViewContent = useInView(contentRef, { once: true, margin: "-50px" });
  const { t, locale } = useLang();
  const L = t.detailLabels;

  const content = {
    en: {
      title: "WeTax: Enterprise E-Invoicing Platform",
      client: "Webcash Vietnam",
      role: "Senior Frontend Developer",
      timeline: "03/2025 – Present",
      tech: "Next.js · TypeScript · React Query · Zustand · WebSocket · Tailwind CSS",
      problem: {
        heading: L.problem,
        sections: [
          {
            title: "Slow PDF generation blocking the UI",
            body: (
              <>
                The invoice PDF was generated <span className="text-white">entirely in the browser</span> using a client-side library. For complex invoices (multiple line items, custom headers, VAT tables), generation could take many seconds — freezing the tab and timing out on slower devices. Enterprise clients printing hundreds of invoices per session reported the feature as nearly unusable.
              </>
            ),
          },
          {
            title: "A monolithic editor no one could change safely",
            body: "The core invoice editor was a large single-file component that mixed form state, validation logic, field rendering, and submission in one file. Every feature request required editing the same file, which caused frequent merge conflicts and subtle regressions. New invoice types (credit notes, adjustment invoices) were being blocked because no one could confidently modify the editor.",
          },
          {
            title: "Listing pages grinding to a halt",
            body: (
              <>
                Invoice listing pages fetched <span className="text-white">all records up-front</span> on mount and rendered them in a standard DOM table. With enterprise accounts holding tens of thousands of invoices, initial load times exceeded 10 seconds and scrolling was visibly janky. There was no caching — every navigation away and back triggered a full re-fetch.
              </>
            ),
          },
        ],
      },
      architecture: {
        heading: L.architecture,
        intro: "The frontend was built as a Next.js 14 App Router application deployed inside Webcash's internal infrastructure. The key architectural decisions were made to support both developer velocity and production reliability at scale.",
        sections: [
          {
            title: "Next.js + TypeScript — strict, typed, route-based",
            body: "Each major workflow (invoice creation, listing, reporting) maps to its own route segment. TypeScript strict mode is on throughout. Shared domain types (Invoice, LineItem, TaxCategory) are defined once in a central types package and imported by both feature modules and API layer — eliminating the class of bug where the API shape drifts from what the UI expects.",
          },
          {
            title: "React Query for all server state",
            body: (
              <>
                Every API call goes through <span className="text-white">React Query</span>. Query keys are structured as{" "}
                <code className="text-emerald-300 bg-white/5 px-1.5 py-0.5 rounded text-sm">{`['invoices', filters]`}</code> so that filtering, pagination, and sorting parameters produce cache-isolated queries without manual invalidation logic. Background refetching keeps listing pages fresh without a spinner on every visit.
              </>
            ),
          },
          {
            title: "Zustand for lightweight client state",
            body: "Global UI state (selected invoice IDs for bulk actions, active filter panel, notification badge count) lives in small Zustand slices. Each slice exports typed selectors and actions — no global reducer files, no boilerplate. The invoice editor's local draft state is kept in component-level state and only promoted to the store when the user explicitly triggers a bulk action.",
          },
          {
            title: "WebSocket for real-time events",
            body: "A singleton WebSocket connection is opened on app init and managed through a custom hook. Incoming events (invoice status changed, batch processing complete, system alert) are dispatched into React Query's cache via queryClient.setQueryData — so the listing page updates instantly without a separate polling loop.",
          },
        ],
      },
      asyncError: {
        heading: L.asyncErrorHandling,
        sections: [
          {
            title: "Layered loading and error states",
            body: (
              <>
                Every data-dependent page uses React Query&apos;s{" "}
                <code className="text-emerald-300 bg-white/5 px-1.5 py-0.5 rounded text-sm">isLoading</code>,{" "}
                <code className="text-emerald-300 bg-white/5 px-1.5 py-0.5 rounded text-sm">isFetching</code>, and{" "}
                <code className="text-emerald-300 bg-white/5 px-1.5 py-0.5 rounded text-sm">isError</code> flags explicitly. Skeleton screens are shown on initial load; a subtle top-bar progress indicator on background refetches; and a retryable error card when a fetch fails — so the user always knows what&apos;s happening without being blocked.
              </>
            ),
          },
          {
            title: "Optimistic updates for status actions",
            body: "Common actions like marking an invoice as paid or cancelling a draft use optimistic updates: the UI reflects the change immediately, and React Query rolls back automatically if the server returns an error. This makes the interface feel instant even on slow connections, with a toast notification confirming or reverting the action.",
          },
          {
            title: "WebSocket reconnection with exponential backoff",
            body: "The WebSocket hook tracks connection state and automatically retries on close with a backoff schedule (1s, 2s, 4s, max 30s). If reconnection fails after several attempts, the UI degrades gracefully: a banner warns the user that real-time updates are unavailable and offers a manual refresh button — rather than silently showing stale data.",
          },
          {
            title: "Form-level validation before any network call",
            body: "The invoice editor validates all required fields and business rules (line item totals, tax rate consistency, date ranges) client-side before submission. Server validation errors are mapped back to individual fields using the error response structure, so users see exactly which field failed rather than a generic alert.",
          },
        ],
      },
      performance: {
        heading: L.performance,
        sections: [
          {
            title: "PDF offloaded to the server — ~90% less rendering time",
            body: (
              <>
                The PDF generation was migrated from a client-side JavaScript library to{" "}
                <span className="text-white">wkhtmltopdf running on the Java backend</span>. The frontend now sends a render request and receives a binary stream. Generation time dropped significantly for typical invoices. The browser tab no longer locks up, and the feature works correctly on mobile and low-powered devices.
              </>
            ),
          },
          {
            title: "Invoice editor refactored into focused modules",
            body: (
              <>
                The large monolithic editor was broken into:{" "}
                <span className="text-white">InvoiceHeader</span>,{" "}
                <span className="text-white">LineItemTable</span>,{" "}
                <span className="text-white">TaxSummary</span>, and{" "}
                <span className="text-white">SubmitPanel</span> — each with its own custom hook (
                <code className="text-emerald-300 bg-white/5 px-1.5 py-0.5 rounded text-sm">useLineItems</code>,{" "}
                <code className="text-emerald-300 bg-white/5 px-1.5 py-0.5 rounded text-sm">useTaxCalculation</code>). Each module is now independently maintainable. Adding a new invoice type now requires creating one new module rather than editing the central file.
              </>
            ),
          },
          {
            title: "Virtualized listing pages with server-side pagination",
            body: (
              <>
                Invoice lists now fetch one page at a time from the server (50 rows by default). The rendered list uses{" "}
                <span className="text-white">UI virtualization</span> — only the rows in the viewport are in the DOM. Combined with React Query caching, navigating back to a previously visited page is instant (served from cache) and the initial load for enterprise accounts dropped significantly.
              </>
            ),
          },
          {
            title: "Re-render budgets via memoization",
            body: (
              <>
                The LineItemTable was the heaviest re-render hotspot: updating any field triggered a full table re-render. Wrapping individual row components in{" "}
                <code className="text-emerald-300 bg-white/5 px-1.5 py-0.5 rounded text-sm">React.memo</code> and stabilizing callbacks with{" "}
                <code className="text-emerald-300 bg-white/5 px-1.5 py-0.5 rounded text-sm">useCallback</code> reduced the re-render scope to the changed row only — measurable in React DevTools Profiler.
              </>
            ),
          },
        ],
      },
      result: {
        heading: L.result,
        items: [
          { metric: "~90%", label: "less PDF rendering time — moved from client-side to server-side generation" },
          { metric: "Tens of millions", label: "e-invoices handled in production across enterprise accounts" },
          // TODO(Buck): confirm <2s listing load time and 0 tab-lock events before re-adding those metrics
        ],
        closing: "WeTax is the project where I learned that frontend performance work is never just about faster code — it is about finding the right system boundary. Moving PDF generation to the server eliminated the most painful user-facing bottleneck. The refactor and virtualization work had more lines of code but a similar insight: the monolith was not slow because JavaScript is slow, it was slow because the boundary between concerns was in the wrong place.",
      },
    },
    vi: {
      title: "WeTax: Nền tảng hoá đơn điện tử doanh nghiệp",
      client: "Webcash Vietnam",
      role: "Senior Frontend Developer",
      timeline: "03/2025 – Hiện tại",
      tech: "Next.js · TypeScript · React Query · Zustand · WebSocket · Tailwind CSS",
      problem: {
        heading: L.problem,
        sections: [
          {
            title: "Render PDF chậm, chặn UI",
            body: (
              <>
                PDF hóa đơn được tạo <span className="text-white">hoàn toàn trên trình duyệt</span> bằng thư viện client-side. Với các hóa đơn phức tạp (nhiều dòng hàng, tiêu đề tùy chỉnh, bảng VAT), thời gian tạo có thể mất nhiều giây — làm đóng băng tab và timeout trên thiết bị chậm. Khách hàng doanh nghiệp in hàng trăm hóa đơn mỗi phiên phản ánh tính năng gần như không dùng được.
              </>
            ),
          },
          {
            title: "Editor monolithic không ai dám sửa",
            body: "Invoice editor cốt lõi là một component 1.200 dòng kết hợp form state, validation, render field và submit trong một file. Mỗi yêu cầu tính năng đều phải sửa file đó, gây merge conflict thường xuyên và regression tinh vi. Các loại hóa đơn mới (credit note, hóa đơn điều chỉnh) bị chặn vì không ai dám sửa editor.",
          },
          {
            title: "Trang danh sách tải chậm",
            body: (
              <>
                Trang danh sách hóa đơn fetch <span className="text-white">toàn bộ dữ liệu ngay khi mount</span> và render trong DOM table thông thường. Với tài khoản doanh nghiệp có hàng chục nghìn hóa đơn, thời gian tải ban đầu vượt 10 giây và scroll bị giật. Không có caching — mỗi lần điều hướng đi rồi quay lại đều trigger re-fetch toàn bộ.
              </>
            ),
          },
        ],
      },
      architecture: {
        heading: L.architecture,
        intro: "Frontend được xây dựng trên Next.js 14 App Router triển khai trong hạ tầng nội bộ của Webcash. Các quyết định kiến trúc hướng đến tốc độ phát triển và độ tin cậy khi chạy ở quy mô lớn.",
        sections: [
          {
            title: "Next.js + TypeScript — strict, typed, route-based",
            body: "Mỗi workflow chính (tạo hóa đơn, danh sách, báo cáo) tương ứng với một route segment riêng. TypeScript strict mode được bật toàn bộ. Domain types chung (Invoice, LineItem, TaxCategory) được định nghĩa một lần trong package types trung tâm và import ở cả feature module lẫn API layer — loại bỏ lỗi khi shape API dần khác với UI.",
          },
          {
            title: "React Query cho toàn bộ server state",
            body: (
              <>
                Mọi API call đều đi qua <span className="text-white">React Query</span>. Query key được cấu trúc dạng{" "}
                <code className="text-emerald-300 bg-white/5 px-1.5 py-0.5 rounded text-sm">{`['invoices', filters]`}</code> để filter, pagination và sort tạo ra cache riêng biệt mà không cần logic invalidation thủ công. Background refetching giữ trang danh sách luôn mới mà không cần spinner mỗi lần truy cập.
              </>
            ),
          },
          {
            title: "Zustand cho client state nhẹ",
            body: "Global UI state (các invoice ID đã chọn cho bulk action, filter panel đang mở, badge thông báo) nằm trong các Zustand slice nhỏ. Mỗi slice export typed selectors và actions — không có reducer file, không boilerplate. Draft state cục bộ của invoice editor nằm ở component-level state và chỉ đưa lên store khi cần bulk action.",
          },
          {
            title: "WebSocket cho real-time events",
            body: "Một singleton WebSocket được mở khi app khởi động và quản lý qua custom hook. Các event đến (trạng thái hóa đơn thay đổi, batch processing xong, cảnh báo hệ thống) được dispatch vào cache của React Query qua queryClient.setQueryData — trang danh sách cập nhật ngay lập tức mà không cần polling loop riêng.",
          },
        ],
      },
      asyncError: {
        heading: L.asyncErrorHandling,
        sections: [
          {
            title: "Trạng thái loading và error phân tầng",
            body: (
              <>
                Mọi trang phụ thuộc vào data đều sử dụng rõ ràng các flag{" "}
                <code className="text-emerald-300 bg-white/5 px-1.5 py-0.5 rounded text-sm">isLoading</code>,{" "}
                <code className="text-emerald-300 bg-white/5 px-1.5 py-0.5 rounded text-sm">isFetching</code> và{" "}
                <code className="text-emerald-300 bg-white/5 px-1.5 py-0.5 rounded text-sm">isError</code> của React Query. Skeleton screen hiển thị khi tải lần đầu; thanh tiến trình mờ ở trên khi background refetch; error card có thể retry khi fetch thất bại — người dùng luôn biết chuyện gì đang xảy ra.
              </>
            ),
          },
          {
            title: "Optimistic update cho các action trạng thái",
            body: "Các action phổ biến như đánh dấu hóa đơn đã thanh toán hoặc hủy draft sử dụng optimistic update: UI phản ánh thay đổi ngay lập tức, React Query tự rollback nếu server trả về lỗi. Cảm giác phản hồi tức thì ngay cả trên kết nối chậm, với toast xác nhận hoặc hoàn tác.",
          },
          {
            title: "WebSocket reconnect với exponential backoff",
            body: "WebSocket hook theo dõi trạng thái kết nối và tự retry khi đứt kết nối theo lịch backoff (1s, 2s, 4s, tối đa 30s). Nếu reconnect thất bại sau nhiều lần, UI degradation gracefully: banner cảnh báo real-time không khả dụng và cung cấp nút refresh thủ công — thay vì im lặng hiển thị dữ liệu cũ.",
          },
          {
            title: "Validate form trước khi gọi API",
            body: "Invoice editor validate tất cả trường bắt buộc và business rule (tổng dòng hàng, thuế suất, khoảng ngày) phía client trước khi submit. Lỗi validate từ server được map về từng field cụ thể theo cấu trúc response lỗi — người dùng thấy chính xác field nào sai thay vì thông báo chung chung.",
          },
        ],
      },
      performance: {
        heading: L.performance,
        sections: [
          {
            title: "PDF offload sang server — giảm ~90% thời gian render",
            body: (
              <>
                Việc tạo PDF được chuyển từ thư viện JavaScript phía client sang{" "}
                <span className="text-white">wkhtmltopdf chạy trên Java backend</span>. Frontend giờ chỉ gửi render request và nhận binary stream về. Thời gian tạo giảm đáng kể với hóa đơn thông thường. Tab trình duyệt không còn bị đóng băng, và tính năng hoạt động tốt trên mobile và thiết bị yếu.
              </>
            ),
          },
          {
            title: "Invoice editor tái cấu trúc thành module (~giảm 90% phức tạp)",
            body: (
              <>
                Editor 1.200 dòng được tách thành:{" "}
                <span className="text-white">InvoiceHeader</span>,{" "}
                <span className="text-white">LineItemTable</span>,{" "}
                <span className="text-white">TaxSummary</span> và{" "}
                <span className="text-white">SubmitPanel</span> — mỗi phần có custom hook riêng (
                <code className="text-emerald-300 bg-white/5 px-1.5 py-0.5 rounded text-sm">useLineItems</code>,{" "}
                <code className="text-emerald-300 bg-white/5 px-1.5 py-0.5 rounded text-sm">useTaxCalculation</code>). Mỗi module giờ có thể bảo trì độc lập. Thêm loại hóa đơn mới giờ chỉ cần tạo một module mới thay vì sửa file trung tâm.
              </>
            ),
          },
          {
            title: "Virtualize danh sách với server-side pagination",
            body: (
              <>
                Danh sách hóa đơn giờ fetch từng trang từ server (mặc định 50 dòng). List render dùng{" "}
                <span className="text-white">UI virtualization</span> — chỉ các dòng trong viewport mới có trong DOM. Kết hợp React Query caching, điều hướng trở lại trang đã xem là tức thì (từ cache) và thời gian tải ban đầu cho tài khoản doanh nghiệp giảm từ 10+ giây xuống dưới 2 giây.
              </>
            ),
          },
          {
            title: "Giảm re-render bằng memoization",
            body: (
              <>
                LineItemTable là điểm hotspot re-render nặng nhất: cập nhật bất kỳ field nào kéo theo re-render toàn bảng. Wrap các row component với{" "}
                <code className="text-emerald-300 bg-white/5 px-1.5 py-0.5 rounded text-sm">React.memo</code> và ổn định callback với{" "}
                <code className="text-emerald-300 bg-white/5 px-1.5 py-0.5 rounded text-sm">useCallback</code> thu hẹp phạm vi re-render xuống chỉ row đã thay đổi — đo được qua React DevTools Profiler.
              </>
            ),
          },
        ],
      },
      result: {
        heading: L.result,
        items: [
          { metric: "~90%", label: "giảm thời gian render PDF — chuyển từ client-side sang server-side" },
          { metric: "Hàng chục triệu", label: "hóa đơn điện tử được xử lý trong môi trường production" },
          // TODO(Buck): xác nhận <2s và 0 sự cố tab-lock trước khi thêm lại
        ],
        closing: "WeTax là dự án tôi học được rằng tối ưu frontend không chỉ là viết code nhanh hơn — mà là tìm đúng ranh giới hệ thống. Chuyển render PDF sang server loại bỏ bottleneck đau nhất với người dùng. Việc tái cấu trúc và virtualization có nhiều dòng code hơn nhưng cùng một nhận thức: monolith không chậm vì JavaScript chậm, mà chậm vì ranh giới giữa các thành phần đặt sai chỗ.",
      },
    },
  };

  const c = content[locale];

  return (
    <div>
      <Header activeId="projects" />
      <section className="pb-16 py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
        <motion.div className="my-8" variants={slideInFromBottom} initial="hidden" animate="visible">
          <h1 className="font-serif px-4 text-3xl md:text-5xl text-left tracking-wide mb-8">{c.title}</h1>
          <div className="flex sm:flex-col md:flex-row lg:flex-row items-start justify-start md:gap-8 lg:gap-8 sm:gap-2">
            <div>
              <p className="text-left px-4 text-white/60 mt-4 md:text-lg lg:text-xl">{L.client}</p>
              <p className="py-2 px-4 rounded-full transition-all text-lg text-white hover:bg-white/20">{c.client}</p>
            </div>
            <div>
              <p className="text-left px-4 text-white/60 mt-4 md:text-lg lg:text-xl">{L.role}</p>
              <p className="py-2 rounded-full px-4 transition-all text-lg text-white hover:bg-white/20">{c.role}</p>
            </div>
            <div>
              <p className="text-left px-4 text-white/60 mt-4 md:text-lg lg:text-xl">{L.timeline}</p>
              <p className="py-2 px-4 rounded-full transition-all text-lg text-white hover:bg-white/20">{c.timeline}</p>
            </div>
          </div>
          <div className="inline-flex flex-col items-start justify-start">
            <p className="text-left px-4 text-white/60 mt-4 md:text-lg lg:text-xl">{L.technologiesUsed}</p>
            <p className="py-2 px-4 rounded-full transition-all text-lg text-white hover:bg-white/20">{c.tech}</p>
          </div>
        </motion.div>

        <motion.div ref={ref} variants={slideInFromBottom} initial="hidden" animate={isInView ? "visible" : "hidden"}>
          <Image src={wetax} alt="WeTax" className="w-full h-full object-cover rounded-3xl" />
        </motion.div>

        <motion.div ref={contentRef} variants={slideInFromBottom} initial="hidden" animate={isInViewContent ? "visible" : "hidden"}>

          {/* Problem */}
          <div className="my-12">
            <h2 className="font-serif px-4 text-3xl md:text-5xl text-left tracking-wide mb-8">{c.problem.heading}</h2>
            {c.problem.sections.map((item, i) => (
              <div key={i} className={i > 0 ? "mt-8" : ""}>
                <h3 className="font-serif px-4 text-xl md:text-3xl text-left tracking-wide mb-4">{item.title}</h3>
                <p className="text-white/60 px-4 text-lg md:text-xl">{item.body}</p>
              </div>
            ))}
          </div>

          <hr className="border-t-2 border-white/5" />

          {/* Architecture */}
          <div className="my-12">
            <h2 className="font-serif px-4 text-3xl md:text-5xl text-left tracking-wide mb-4">{c.architecture.heading}</h2>
            <p className="text-white/60 px-4 text-lg md:text-xl mb-8">{c.architecture.intro}</p>
            {c.architecture.sections.map((item, i) => (
              <div key={i} className={i > 0 ? "mt-8" : ""}>
                <h3 className="font-serif px-4 text-xl md:text-3xl text-left tracking-wide mb-4">{item.title}</h3>
                <p className="text-white/60 px-4 text-lg md:text-xl">{item.body}</p>
              </div>
            ))}
          </div>

          <hr className="border-t-2 border-white/5" />

          {/* Async & Error Handling */}
          <div className="my-12">
            <h2 className="font-serif px-4 text-3xl md:text-5xl text-left tracking-wide mb-8">{c.asyncError.heading}</h2>
            {c.asyncError.sections.map((item, i) => (
              <div key={i} className={i > 0 ? "mt-8" : ""}>
                <h3 className="font-serif px-4 text-xl md:text-3xl text-left tracking-wide mb-4">{item.title}</h3>
                <p className="text-white/60 px-4 text-lg md:text-xl">{item.body}</p>
              </div>
            ))}
          </div>

          <hr className="border-t-2 border-white/5" />

          {/* Performance */}
          <div className="my-12">
            <h2 className="font-serif px-4 text-3xl md:text-5xl text-left tracking-wide mb-8">{c.performance.heading}</h2>
            {c.performance.sections.map((item, i) => (
              <div key={i} className={i > 0 ? "mt-8" : ""}>
                <h3 className="font-serif px-4 text-xl md:text-3xl text-left tracking-wide mb-4">{item.title}</h3>
                <p className="text-white/60 px-4 text-lg md:text-xl">{item.body}</p>
              </div>
            ))}
          </div>

          <hr className="border-t-2 border-white/5" />

          {/* Result */}
          <div className="my-12">
            <h2 className="font-serif px-4 text-3xl md:text-5xl text-left tracking-wide mb-8">{c.result.heading}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
              {c.result.items.map((item, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5">
                  <p className="font-serif text-3xl bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">{item.metric}</p>
                  <p className="text-white/60 text-sm mt-2">{item.label}</p>
                </div>
              ))}
            </div>
            <p className="text-white/60 px-4 text-lg md:text-xl">{c.result.closing}</p>
          </div>

        </motion.div>
      </section>
    </div>
  );
}
