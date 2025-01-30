export default function DashboardPageLoader() {
  return (
    <div className="flex items-center justify-center h-[70dvh]">
      <style jsx>
        {`
          .loader {
            display: flex;
            justify-content: center;
            align-items: center;
          }

          .spinner {
            width: 150px;
            height: 150px;
            position: relative;
            animation: rotation 0.1s linear infinite;
            border-radius: 100em;
          }

          .path {
            stroke-dasharray: 100;
            stroke-dashoffset: 20;
            stroke-linecap: round;
          }

          @keyframes rotation {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 66 66"
        height="100px"
        width="100px"
        className="animate-spin"
      >
        <defs>
          <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
            <stop stopOpacity="1" stopColor="#2563eb" offset="0%" />
            <stop stopOpacity="0" stopColor="#000" offset="100%" />
          </linearGradient>
        </defs>
        <circle
          cx="33"
          cy="33"
          r="20"
          stroke="url(#gradient)"
          strokeWidth="2.5"
          fill="transparent"
        />
      </svg>
    </div>
  );
}
