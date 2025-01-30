export default function ProtectedRouteLoader() {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <style jsx>
        {`
          @keyframes pl1-a {
            from {
              transform: rotate(0);
            }
            80%,
            to {
              animation-timing-function: steps(1, start);
              transform: rotate(90deg);
            }
          }
          @keyframes pl1-b {
            from {
              animation-timing-function: cubic-bezier(0.33, 0, 0.67, 0);
              width: 40px;
              height: 40px;
            }
            20% {
              animation-timing-function: steps(1, start);
              width: 40px;
              height: 0;
            }
            60% {
              animation-timing-function: cubic-bezier(0.65, 0, 0.35, 1);
              width: 0;
              height: 40px;
            }
            80%,
            to {
              width: 40px;
              height: 40px;
            }
          }
          @keyframes pl1-c {
            from {
              animation-timing-function: cubic-bezier(0.33, 0, 0.67, 0);
              width: 40px;
              height: 40px;
              transform: translate(0, 48px);
            }
            20% {
              animation-timing-function: cubic-bezier(0.33, 1, 0.67, 1);
              width: 40px;
              height: 88px;
              transform: translate(0, 0);
            }
            40% {
              animation-timing-function: cubic-bezier(0.33, 0, 0.67, 0);
              width: 40px;
              height: 40px;
              transform: translate(0, 0);
            }
            60% {
              animation-timing-function: cubic-bezier(0.33, 1, 0.67, 1);
              width: 88px;
              height: 40px;
              transform: translate(0, 0);
            }
            80%,
            to {
              width: 40px;
              height: 40px;
              transform: translate(48px, 0);
            }
          }

          .animate-pl1-rotate {
            animation: pl1-a 1.0s cubic-bezier(0.65, 0, 0.35, 1) infinite;
          }
          .animate-pl1-b {
            animation: pl1-b 1.0s cubic-bezier(0.65, 0, 0.35, 1) infinite;
          }
          .animate-pl1-c {
            animation: pl1-c 1.0s cubic-bezier(0.65, 0, 0.35, 1) infinite;
          }
        `}
      </style>
      <svg
        height="128px"
        width="128px"
        viewBox="0 0 128 128"
        className="block w-32 h-32"
      >
        <defs>
          <linearGradient y2="1" x2="1" y1="0" x1="0" id="pl-grad">
            <stop stopColor="#2563eb" offset="0%" />
            <stop stopColor="#ffffff" offset="100%" />
          </linearGradient>
          <mask id="pl-mask">
            <rect
              fill="url(#pl-grad)"
              height="128"
              width="128"
              y="0"
              x="0"
            ></rect>
          </mask>
        </defs>
        <g fill="var(--primary)">
          <g className="animate-pl1-rotate origin-center">
            <g transform="translate(20,20) rotate(0,44,44)">
              <g>
                <rect
                  height="40"
                  width="40"
                  rx="8"
                  ry="8"
                  className="animate-pl1-b"
                ></rect>
                <rect
                  transform="translate(0,48)"
                  height="40"
                  width="40"
                  rx="8"
                  ry="8"
                  className="animate-pl1-c"
                ></rect>
              </g>
              <g transform="rotate(180,44,44)">
                <rect
                  height="40"
                  width="40"
                  rx="8"
                  ry="8"
                  className="animate-pl1-b"
                ></rect>
                <rect
                  transform="translate(0,48)"
                  height="40"
                  width="40"
                  rx="8"
                  ry="8"
                  className="animate-pl1-c"
                ></rect>
              </g>
            </g>
          </g>
        </g>
        <g mask="url(#pl-mask)" fill="#2563eb">
          <g className="animate-pl1-rotate origin-center">
            <g transform="translate(20,20) rotate(0,44,44)">
              <g>
                <rect
                  height="40"
                  width="40"
                  rx="8"
                  ry="8"
                  className="animate-pl1-b"
                ></rect>
                <rect
                  transform="translate(0,48)"
                  height="40"
                  width="40"
                  rx="8"
                  ry="8"
                  className="animate-pl1-c"
                ></rect>
              </g>
              <g transform="rotate(180,44,44)">
                <rect
                  height="40"
                  width="40"
                  rx="8"
                  ry="8"
                  className="animate-pl1-b"
                ></rect>
                <rect
                  transform="translate(0,48)"
                  height="40"
                  width="40"
                  rx="8"
                  ry="8"
                  className="animate-pl1-c"
                ></rect>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </main>
  );
}
