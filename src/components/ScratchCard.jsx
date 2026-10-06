import React, { useEffect, useRef, useState } from "react";

export function ScratchCard() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const [isScratching, setIsScratching] = useState(false);
  const [revealed, setRevealed] = useState(false);

  const [sparkles, setSparkles] = useState([]);
  const [burst, setBurst] = useState(false);

  const lastPoint = useRef(null);
  const scratchCount = useRef(0);

  /*
   * Countdown target.
   *
   * This currently counts down to:
   * 20 November 2026, 12:00 AM IST
   */
  const TARGET_DATE = "2026-11-21T00:00:00+05:30";

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Reveal entire card after 40% is scratched
  const SCRATCH_THRESHOLD = 0.4;

  // =========================================================
  // COUNTDOWN
  // =========================================================

  useEffect(() => {
    const calculateTimeLeft = () => {
      const target = new Date(TARGET_DATE).getTime();
      const now = new Date().getTime();

      const difference = target - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        return;
      }

      setTimeLeft({
        days: Math.floor(
          difference / (1000 * 60 * 60 * 24)
        ),

        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),

        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),

        seconds: Math.floor(
          (difference / 1000) % 60
        ),
      });
    };

    calculateTimeLeft();

    const timer = setInterval(
      calculateTimeLeft,
      1000
    );

    return () => clearInterval(timer);
  }, []);

  // =========================================================
  // CANVAS SETUP
  // =========================================================

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;

    if (!canvas || !container) return;

    const setupCanvas = () => {
      const rect =
        container.getBoundingClientRect();

      const dpr =
        window.devicePixelRatio || 1;

      canvas.width =
        rect.width * dpr;

      canvas.height =
        rect.height * dpr;

      canvas.style.width =
        `${rect.width}px`;

      canvas.style.height =
        `${rect.height}px`;

      const ctx =
        canvas.getContext("2d");

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );

      // =====================================================
      // ROSE SCRATCH SURFACE
      // =====================================================

      const gradient =
        ctx.createLinearGradient(
          0,
          0,
          rect.width,
          rect.height
        );

      gradient.addColorStop(
        0,
        "#7f3f50"
      );

      gradient.addColorStop(
        0.25,
        "#8b4a5a"
      );

      gradient.addColorStop(
        0.5,
        "#9b5a68"
      );

      gradient.addColorStop(
        0.75,
        "#8b4a5a"
      );

      gradient.addColorStop(
        1,
        "#733746"
      );

      ctx.globalCompositeOperation =
        "source-over";

      ctx.fillStyle = gradient;

      ctx.fillRect(
        0,
        0,
        rect.width,
        rect.height
      );

      // =====================================================
      // SOFT SHIMMER ON ROSE SURFACE
      // =====================================================

      const shine =
        ctx.createLinearGradient(
          0,
          0,
          rect.width,
          rect.height
        );

      shine.addColorStop(
        0,
        "rgba(255,255,255,0.18)"
      );

      shine.addColorStop(
        0.4,
        "rgba(255,255,255,0)"
      );

      shine.addColorStop(
        0.7,
        "rgba(255,255,255,0.08)"
      );

      shine.addColorStop(
        1,
        "rgba(255,255,255,0.2)"
      );

      ctx.fillStyle = shine;

      ctx.fillRect(
        0,
        0,
        rect.width,
        rect.height
      );

      // =====================================================
      // INSTRUCTION
      // =====================================================

      ctx.fillStyle =
        "#fff8e7";

      ctx.font =
        "600 13px serif";

      ctx.textAlign =
        "center";

      ctx.textBaseline =
        "middle";

      ctx.fillText(
        "✦  SCRATCH TO REVEAL  ✦",
        rect.width / 2,
        rect.height / 2
      );
    };

    setupCanvas();

    window.addEventListener(
      "resize",
      setupCanvas
    );

    return () => {
      window.removeEventListener(
        "resize",
        setupCanvas
      );
    };
  }, []);

  // =========================================================
  // POINTER POSITION
  // =========================================================

  const getPosition = (e) => {
    const canvas =
      canvasRef.current;

    const rect =
      canvas.getBoundingClientRect();

    return {
      x:
        e.clientX -
        rect.left,

      y:
        e.clientY -
        rect.top,
    };
  };

  // =========================================================
  // SOFT BRUSH SCRATCH
  // =========================================================

  const scratchLine = (from, to) => {
    const canvas =
      canvasRef.current;

    if (!canvas) return;

    const ctx =
      canvas.getContext("2d");

    ctx.globalCompositeOperation =
      "destination-out";

    /*
     * Larger brush = softer, more natural
     * scratch/reveal area.
     */
    const brushSize = 34;

    const dx =
      to.x - from.x;

    const dy =
      to.y - from.y;

    const distance =
      Math.sqrt(
        dx * dx +
        dy * dy
      );

    /*
     * Add multiple soft circles between
     * pointer positions so fast movement
     * doesn't leave gaps.
     */
    const steps =
      Math.max(
        Math.ceil(distance / 6),
        1
      );

    for (
      let i = 0;
      i <= steps;
      i++
    ) {
      const t =
        i / steps;

      const x =
        from.x +
        dx * t;

      const y =
        from.y +
        dy * t;

      // =====================================================
      // SOFT RADIAL BRUSH
      // =====================================================

      const brush =
        ctx.createRadialGradient(
          x,
          y,
          0,
          x,
          y,
          brushSize
        );

      /*
       * Center = mostly erased
       * Middle = partially erased
       * Edge = extremely soft
       */
      brush.addColorStop(
        0,
        "rgba(0,0,0,0.85)"
      );

      brush.addColorStop(
        0.4,
        "rgba(0,0,0,0.55)"
      );

      brush.addColorStop(
        0.7,
        "rgba(0,0,0,0.20)"
      );

      brush.addColorStop(
        1,
        "rgba(0,0,0,0)"
      );

      ctx.fillStyle =
        brush;

      ctx.beginPath();

      ctx.arc(
        x,
        y,
        brushSize,
        0,
        Math.PI * 2
      );

      ctx.fill();
    }
  };

  // =========================================================
  // CHECK SCRATCH %
  // =========================================================

  const checkScratchPercentage = () => {
    const canvas =
      canvasRef.current;

    if (!canvas || revealed) return;

    const ctx =
      canvas.getContext("2d");

    const imageData =
      ctx.getImageData(
        0,
        0,
        canvas.width,
        canvas.height
      );

    const pixels =
      imageData.data;

    let transparentPixels = 0;
    let totalSamples = 0;

    /*
     * We don't need to inspect every pixel.
     * Every 32nd byte is enough for this interaction.
     */
    for (
      let i = 3;
      i < pixels.length;
      i += 32
    ) {
      totalSamples++;

      if (pixels[i] < 80) {
        transparentPixels++;
      }
    }

    if (!totalSamples) return;

    const scratched =
      transparentPixels /
      totalSamples;

    if (
      scratched >=
      SCRATCH_THRESHOLD
    ) {
      revealCard();
    }
  };

  // =========================================================
  // CREATE SPARKLES
  // =========================================================

  const createSparkles = () => {
    const particles =
      Array.from(
        { length: 42 },
        (_, index) => ({
          id:
            `${Date.now()}-${index}`,

          left:
            Math.random() * 100,

          top:
            Math.random() * 100,

          size:
            Math.random() * 5 + 3,

          delay:
            Math.random() * 0.7,

          duration:
            Math.random() * 0.9 + 0.9,

          rotation:
            Math.random() * 180,

          distance:
            Math.random() * 25 + 10,
        })
      );

    setSparkles(
      particles
    );

    setTimeout(() => {
      setSparkles([]);
    }, 3000);
  };

  // =========================================================
  // REVEAL
  // =========================================================

  const revealCard = () => {
    if (revealed) return;

    setRevealed(true);

    // Start reveal animation
    setBurst(true);

    createSparkles();

    const canvas =
      canvasRef.current;

    if (!canvas) return;

    /*
     * Once 40% is scratched, smoothly
     * remove the remaining coating.
     */
    requestAnimationFrame(() => {
      canvas.style.transition =
        "opacity 1.25s cubic-bezier(0.22, 1, 0.36, 1), transform 1.25s cubic-bezier(0.22, 1, 0.36, 1)";

      canvas.style.opacity =
        "0";

      canvas.style.transform =
        "scale(1.12) rotate(1deg)";
    });

    /*
     * Stop burst state after animation.
     */
    setTimeout(() => {
      setBurst(false);
    }, 1800);
  };

  // =========================================================
  // POINTER DOWN
  // =========================================================

  const handlePointerDown = (e) => {
    if (revealed) return;

    e.preventDefault();

    setIsScratching(true);

    const point =
      getPosition(e);

    lastPoint.current =
      point;

    scratchLine(
      point,
      {
        x:
          point.x + 0.1,

        y:
          point.y + 0.1,
      }
    );

    scratchCount.current++;

    checkScratchPercentage();
  };

  // =========================================================
  // POINTER MOVE
  // =========================================================

  const handlePointerMove = (e) => {
    if (
      !isScratching ||
      revealed
    ) {
      return;
    }

    e.preventDefault();

    const point =
      getPosition(e);

    if (lastPoint.current) {
      scratchLine(
        lastPoint.current,
        point
      );
    }

    lastPoint.current =
      point;

    scratchCount.current++;

    if (
      scratchCount.current %
        8 ===
      0
    ) {
      checkScratchPercentage();
    }
  };

  // =========================================================
  // POINTER UP
  // =========================================================

  const handlePointerUp = () => {
    setIsScratching(false);

    lastPoint.current =
      null;

    checkScratchPercentage();
  };

  // =========================================================
  // COUNTDOWN FORMAT
  // =========================================================

  const formatNumber = (number) =>
    String(number).padStart(
      2,
      "0"
    );

  const countdownItems = [
    {
      value: timeLeft.days,
      label: "Days",
    },
    {
      value: timeLeft.hours,
      label: "Hours",
    },
    {
      value: timeLeft.minutes,
      label: "Minutes",
    },
    {
      value: timeLeft.seconds,
      label: "Seconds",
    },
  ];

  // =========================================================
  // JSX
  // =========================================================

  return (
    <div className="w-full">

      {/* =====================================================
          SCRATCH CARD
      ====================================================== */}

      <div
        ref={containerRef}
        className="
          relative
          mx-auto
          w-full
          max-w-md
          h-32
          rounded-2xl
          overflow-hidden
          border-2
          border-gold-soft
          shadow-elegant
        "
      >

        {/* =================================================
            DATE UNDERNEATH
        ================================================== */}

        <div
          className="
            absolute
            inset-0
            flex
            flex-col
            items-center
            justify-center
            bg-cream
            z-0
          "
        >

          <p
            className="
              font-cinzel
              tracking-[0.25em]
              text-sage-deep
              text-sm
              sm:text-base
            "
          >
            SAVE THE DATE
          </p>

          <p
            className="
              font-script
              text-3xl
              sm:text-4xl
              text-rose-deep
              mt-1
            "
          >
            20th &amp; 21st Nov 2026
          </p>

        </div>

        {/* =================================================
            GOLDEN LIGHT BURST
        ================================================== */}

        <div
          className={`
            absolute
            inset-0
            pointer-events-none
            z-30
            ${
              burst
                ? "reveal-light-burst"
                : "opacity-0"
            }
          `}
        />

        {/* =================================================
            SPARKLES
        ================================================== */}

        <div
          className="
            absolute
            inset-0
            pointer-events-none
            z-40
          "
        >

          {sparkles.map(
            (sparkle) => (
              <span
                key={
                  sparkle.id
                }
                className="wedding-sparkle"
                style={{
                  left:
                    `${sparkle.left}%`,

                  top:
                    `${sparkle.top}%`,

                  width:
                    `${sparkle.size}px`,

                  height:
                    `${sparkle.size}px`,

                  animationDelay:
                    `${sparkle.delay}s`,

                  animationDuration:
                    `${sparkle.duration}s`,

                  "--sparkle-rotation":
                    `${sparkle.rotation}deg`,

                  "--sparkle-distance":
                    `${sparkle.distance}px`,
                }}
              />
            )
          )}

        </div>

        {/* =================================================
            SOFT SCRATCH CANVAS
        ================================================== */}

        <canvas
          ref={canvasRef}
          className="
            absolute
            inset-0
            w-full
            h-full
            cursor-pointer
            touch-none
            z-20
          "
          onPointerDown={
            handlePointerDown
          }
          onPointerMove={
            handlePointerMove
          }
          onPointerUp={
            handlePointerUp
          }
          onPointerCancel={
            handlePointerUp
          }
          onPointerLeave={
            handlePointerUp
          }
        />

      </div>

      {/* =====================================================
          COUNTDOWN
      ====================================================== */}

      <div
        className={`
          mt-8
          transition-all
          duration-1000
          ease-[cubic-bezier(0.22,1,0.36,1)]
          ${
            revealed
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8 pointer-events-none"
          }
        `}
        aria-hidden={!revealed}
      >

        <div
          className="
            flex
            justify-center
            gap-3
            sm:gap-6
          "
        >

          {countdownItems.map(
            (item) => (
              <div
                key={
                  item.label
                }
                className="
                  flex
                  flex-col
                  items-center
                  min-w-[68px]
                  sm:min-w-[90px]
                "
              >

                {/* Number card */}

                <div
                  className="
                    w-full
                    aspect-square
                    rounded-2xl
                    bg-cream
                    border
                    border-gold-soft
                    shadow-soft
                    flex
                    items-center
                    justify-center
                    backdrop-blur-sm
                  "
                >

                  <span
                    className="
                      font-cinzel
                      text-2xl
                      sm:text-4xl
                      text-rose-deep
                      tabular-nums
                    "
                  >
                    {formatNumber(
                      item.value
                    )}
                  </span>

                </div>

                {/* Label */}

                <span
                  className="
                    mt-2
                    text-xs
                    sm:text-sm
                    tracking-widest
                    uppercase
                    text-sage-deep
                  "
                >
                  {item.label}
                </span>

              </div>
            )
          )}

        </div>

      </div>

    </div>
  );
}