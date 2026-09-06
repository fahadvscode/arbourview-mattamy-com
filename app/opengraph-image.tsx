import { ImageResponse } from "next/og";

export const alt = "Arbourview by Mattamy Homes — WideLot™ homes in Georgetown";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          background: "linear-gradient(165deg, #181614 0%, #2D2B27 58%, #3A342C 100%)",
          padding: "64px",
          color: "#F6F2EA",
          fontFamily: "ui-serif, Georgia, serif",
        }}
      >
        <div
          style={{
            fontSize: 16,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "#A17F3F",
            marginBottom: 16,
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          Pre-construction · Georgetown, Ontario · Builder & WideLot™
        </div>
        <div style={{ fontSize: 56, lineHeight: 1.1, fontWeight: 600, maxWidth: 980 }}>
          Arbourview by Mattamy Homes
        </div>
        <div
          style={{
            marginTop: 20,
            width: 80,
            height: 3,
            background: "#A17F3F",
          }}
        />
        <div
          style={{
            marginTop: 24,
            fontSize: 24,
            maxWidth: 880,
            color: "#EBE4D6",
            fontFamily: "ui-sans-serif, system-ui, sans-serif",
          }}
        >
          Townhomes and detached WideLot™ homes at 10114 Eighth Line, Georgetown.
        </div>
      </div>
    ),
    { ...size },
  );
}
