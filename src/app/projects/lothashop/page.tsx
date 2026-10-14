"use client";

import lothashop from "@/assets/images/lothashop.png";
import { ProjectDetailLayout, type ProjectDetailData } from "@/components/ProjectDetailLayout";

// ─── Sequence diagram ────────────────────────────────────────────────────────

const ACTORS = [
  { label: "User", cx: 64 },
  { label: "Frontend", cx: 192 },
  { label: "Backend", cx: 320 },
  { label: "Distributor", cx: 448 },
  { label: "VNPay", cx: 576 },
];

const MESSAGES = [
  { from: 64, to: 192, y: 65, label: "Submit checkout form", dashed: false },
  { from: 192, to: 320, y: 98, label: "Create order", dashed: false },
  { from: 320, to: 192, y: 130, label: "Order ID", dashed: true },
  { from: 320, to: 448, y: 188, label: "Offer order", dashed: false },
  { from: 448, to: 320, y: 222, label: "Accept", dashed: true },
  { from: 320, to: 192, y: 256, label: "Confirmed (socket)", dashed: true },
  { from: 192, to: 576, y: 322, label: "Redirect · payment URL", dashed: false },
  { from: 576, to: 192, y: 370, label: "vnp_ResponseCode", dashed: true },
  { from: 192, to: 320, y: 403, label: "Update payment status", dashed: false },
  { from: 320, to: 192, y: 434, label: "Paid · clear basket", dashed: true },
];

function SequenceDiagram() {
  const W = 640;
  const H = 455;
  const lifelineTop = 32;
  const lifelineBottom = 448;

  return (
    <figure className="mb-2">
      <figcaption className="sr-only">
        Checkout and payment flow sequence diagram. Steps: (1) User submits checkout form to Frontend.
        (2) Frontend sends Create order to Backend. (3) Backend returns Order ID. Fast-delivery only —
        (4) Backend offers order to Distributor socket. (5) Distributor accepts. (6) Backend sends
        confirmation back via socket to Frontend. VNPay path — (7) Frontend redirects to VNPay with
        payment URL. (8) VNPay returns vnp_ResponseCode to the return URL. (9) Frontend calls Backend
        to update payment status. (10) Backend confirms paid; Frontend clears basket.
      </figcaption>

      <div className="overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          width="100%"
          style={{ minWidth: "560px" }}
          aria-hidden="true"
          focusable="false"
        >
          {ACTORS.map(({ label, cx }) => (
            <text
              key={label}
              x={cx}
              y={20}
              textAnchor="middle"
              fontSize="11"
              fontWeight="600"
              fill="rgba(255,255,255,0.75)"
              fontFamily="ui-sans-serif,system-ui,sans-serif"
            >
              {label}
            </text>
          ))}
          {ACTORS.map(({ label, cx }) => (
            <line
              key={`ul-${label}`}
              x1={cx - 42}
              y1={26}
              x2={cx + 42}
              y2={26}
              stroke="rgba(255,255,255,0.18)"
              strokeWidth={1}
            />
          ))}
          {ACTORS.map(({ label, cx }) => (
            <line
              key={`ll-${label}`}
              x1={cx}
              y1={lifelineTop}
              x2={cx}
              y2={lifelineBottom}
              stroke="rgba(255,255,255,0.07)"
              strokeWidth={1}
              strokeDasharray="3 4"
            />
          ))}
          <rect
            x={22}
            y={158}
            width={595}
            height={114}
            rx={4}
            fill="rgba(255,255,255,0.025)"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth={1}
            strokeDasharray="3 5"
          />
          <text
            x={28}
            y={170}
            fontSize="8.5"
            fill="rgba(255,255,255,0.3)"
            fontFamily="ui-sans-serif,system-ui,sans-serif"
            fontStyle="italic"
          >
            fast delivery only
          </text>
          <line x1={22} y1={291} x2={618} y2={291} stroke="rgba(255,255,255,0.06)" strokeWidth={1} />
          <text
            x={W / 2}
            y={305}
            textAnchor="middle"
            fontSize="8.5"
            fill="rgba(255,255,255,0.25)"
            fontFamily="ui-sans-serif,system-ui,sans-serif"
            letterSpacing="1"
          >
            VNPay payment
          </text>
          {MESSAGES.map(({ from, to, y, label, dashed }) => {
            const rightward = to > from;
            const tipX = rightward ? to - 2 : to + 2;
            const baseX = rightward ? tipX - 9 : tipX + 9;
            const midX = (from + to) / 2;
            return (
              <g key={`${from}-${to}-${y}`}>
                <line
                  x1={from}
                  y1={y}
                  x2={tipX}
                  y2={y}
                  stroke="rgba(255,255,255,0.45)"
                  strokeWidth={1.2}
                  strokeDasharray={dashed ? "4 3" : undefined}
                />
                <line
                  x1={baseX}
                  y1={y - 4}
                  x2={tipX}
                  y2={y}
                  stroke="rgba(255,255,255,0.45)"
                  strokeWidth={1.2}
                />
                <line
                  x1={baseX}
                  y1={y + 4}
                  x2={tipX}
                  y2={y}
                  stroke="rgba(255,255,255,0.45)"
                  strokeWidth={1.2}
                />
                <text
                  x={midX}
                  y={y - 5}
                  textAnchor="middle"
                  fontSize="9"
                  fill="rgba(255,255,255,0.55)"
                  fontFamily="ui-sans-serif,system-ui,sans-serif"
                >
                  {label}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      <p className="text-xs text-white/30 mt-2">
        COD path: steps 7–10 are skipped; the result page renders after order confirmation.
      </p>
    </figure>
  );
}

// ─── Order & payment states table ────────────────────────────────────────────

const STATE_ROWS = [
  { state: "Creating order", ui: "Loading spinner; Pay button disabled", can: "—" },
  { state: "Waiting for distributor", ui: "Live countdown (60 s), progress indicator, Cancel button", can: "Cancel order" },
  { state: "Redirecting to VNPay", ui: "Loading state; page redirects automatically", can: "—" },
  { state: "Payment success", ui: "Confirmation screen + order summary", can: "View order · Continue shopping" },
  { state: "Payment failed", ui: "Error message with reason from VNPay response code", can: "Retry payment" },
  { state: "No distributor available", ui: "Explanation: no fast-delivery coverage in time", can: "Switch to standard delivery" },
  { state: "Cancelled", ui: "Cancellation confirmation", can: "Start new order" },
];

function StatesTable() {
  return (
    <div className="overflow-x-auto">
      <table
        className="min-w-[520px] w-full text-sm border-collapse"
        aria-label="Order and payment states"
      >
        <thead>
          <tr>
            {(["State", "UI shown", "User can"] as const).map((h) => (
              <th
                key={h}
                scope="col"
                className="text-left py-2 px-3 text-white/40 text-xs font-semibold uppercase tracking-wider border-b border-white/10"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {STATE_ROWS.map((row, i) => (
            <tr key={row.state} className={i % 2 === 0 ? "bg-white/[0.025]" : ""}>
              <td className="py-2.5 px-3 text-white/80 font-medium align-top whitespace-nowrap">{row.state}</td>
              <td className="py-2.5 px-3 text-white/55 align-top">{row.ui}</td>
              <td className="py-2.5 px-3 text-white/55 align-top whitespace-nowrap">{row.can}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const data: ProjectDetailData = {
  title: "Lothashop",
  company: "MLTech Soft",
  role: "Middle Frontend Developer",
  timeline: "2023",
  platform: "Web",
  summary: "E-commerce platform for Lothamilk dairy products, covering B2C orders, dealer accounts, three delivery types, and VNPay integration.",
  tech: "Next.js 12 · TypeScript · MUI · Zustand · Formik + Yup · axios · socket.io-client · crypto-js",
  techChips: ["Next.js", "TypeScript", "MUI", "Zustand", "Formik", "socket.io", "VNPay"],
  coverImage: lothashop,
  coverImageAlt: "Lothashop e-commerce storefront",
  overview:
    "Lothashop is an e-commerce platform for Lothamilk's dairy products, serving B2C customers and registered dealer accounts who order from a network of regional distributors. Delivery options include self-pickup at a distributor location, fast delivery via GHN from a nearby distributor, and standard delivery via GHTK.",
  technicalHighlights: [
    {
      problem: "60-second distributor matching window with live countdown",
      approach: (
        <>
          Fast delivery depends on a nearby distributor accepting the order within 60 seconds. After the
          order is created, the checkout UI opens a socket.io connection, shows a live countdown, and lets
          the user cancel at any time. If no distributor accepts within the window, the flow routes to a
          failure page that explains the situation and prompts the user to try standard delivery instead.
        </>
      ),
      result: "User always gets clear feedback on distributor availability.",
    },
    {
      problem: "One checkout flow covering 3 delivery types × 2 payment methods × 2 account roles",
      approach: (
        <>
          The form branches across self-pickup, fast delivery (GHN), and standard delivery (GHTK), each
          paired with COD or VNPay. Dealer accounts add a further choice: the dealer pays upfront, or the
          end customer pays. Formik + Yup handled conditional validation; Zustand (persisted) held basket
          and draft-order state across navigation.
        </>
      ),
      result: "All checkout combinations shipped and working in production.",
    },
    {
      problem: "Guest checkout with automatic account registration on payment success",
      approach: (
        <>
          Guests can complete a purchase without an account. On a successful payment, the system
          automatically registers an account from the delivery information and attaches the order to it.
        </>
      ),
      result: "Guest purchases are attached to the automatically created account; no re-registration required.",
    },
  ],
  diagram: <SequenceDiagram />,
  diagramHeading: "Checkout flow",
  diagramCaption: "VNPay payment path shown. COD path skips the VNPay redirect steps. Fast-delivery distributor matching is in the shaded region.",
  extraTable: <StatesTable />,
  extraTableHeading: "Order & payment states",
  resultsNote: "Shipped to production at lothashop.vn.",
  lessons: (
    <ul className="flex flex-col gap-3">
      {[
        "Treat return URLs as display-only; confirm payment status from the backend before showing success or clearing the basket.",
        "Guard the payment submission button against double-submission — network retries can cause duplicate orders.",
        "Test timeout and cancellation branches explicitly in the checkout state machine.",
      ].map((item) => (
        <li key={item} className="flex gap-2 leading-relaxed">
          <span className="text-emerald-300 shrink-0 mt-0.5">→</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  ),
  prevProject: { label: "WeTax", href: "/web-portfolio/projects/wetax" },
  nextProject: { label: "VDental", href: "/web-portfolio/projects/vdental" },
};

export default function Lothashop() {
  return <ProjectDetailLayout data={data} />;
}
