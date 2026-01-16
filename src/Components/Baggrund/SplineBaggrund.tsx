// Import af Spline komponent fra @splinetool/react-spline
import Spline from '@splinetool/react-spline';

// Komponent der renderer en Spline baggrund
export default function SplineBackground() {
  return (
    // Main element med fuld højde og bredde, fast positioneret som baggrund
    <main style={{ height: '100vh', width: '100vw', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
      {/* Spline komponent med specifik scene URL */}
      <Spline
        scene="https://prod.spline.design/56pz9PRnisoIRSD8/scene.splinecode"
      />
    </main>
  );
}
