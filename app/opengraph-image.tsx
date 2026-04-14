import { ImageResponse } from 'next/og';

export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#1e3a5f',
        }}
      >
        <p
          style={{
            color: 'white',
            fontSize: 72,
            fontWeight: 700,
            margin: 0,
            letterSpacing: '-1px',
          }}
        >
          📡 Recall Radar
        </p>
        <p
          style={{
            color: '#93c5fd',
            fontSize: 36,
            margin: '16px 0 0',
            fontWeight: 400,
          }}
        >
          Safety Recalls &amp; Alerts
        </p>
      </div>
    ),
    size
  );
}
