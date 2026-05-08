import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Techity — IT you don't have to think about.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Whisper-styled OG image: navy bg, eyebrow rail, ultralight headline with
// italic accent on the second line, bottom ledger. Generated at build/
// request time so we don't ship a static PNG.
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "72px 80px",
          background: "#212835",
          color: "#efeae4",
          fontFamily: "Inter, sans-serif",
          position: "relative",
        }}
      >
        {/* Top-left wordmark stand-in */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            fontSize: 18,
            fontWeight: 600,
            letterSpacing: "0.22em",
            opacity: 0.9,
            textTransform: "uppercase",
          }}
        >
          Techity
        </div>

        {/* Eyebrow rail */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 18,
            marginTop: 110,
          }}
        >
          <div style={{ width: 56, height: 1, background: "#efeae4", opacity: 0.4 }} />
          <span
            style={{
              fontSize: 16,
              fontWeight: 500,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              opacity: 0.65,
            }}
          >
            Managed IT for small businesses
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: 36,
            fontWeight: 100,
            fontSize: 124,
            lineHeight: 0.92,
            letterSpacing: "-0.05em",
          }}
        >
          <span>IT you don’t have</span>
          <span
            style={{
              fontStyle: "italic",
              fontWeight: 200,
              opacity: 0.55,
            }}
          >
            to think about.
          </span>
        </div>

        {/* Bottom ledger */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            position: "absolute",
            left: 80,
            right: 80,
            bottom: 60,
            fontSize: 16,
            fontWeight: 500,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            opacity: 0.45,
          }}
        >
          <span>50.85°N / 4.35°E · Brussels</span>
          <span>hello@techity.io</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
