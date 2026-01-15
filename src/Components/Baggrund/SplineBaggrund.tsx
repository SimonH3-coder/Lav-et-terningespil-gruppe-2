import Spline from '@splinetool/react-spline';

export default function SplineBackground() {
  return (
    <main style={{ height: '100vh', width: '100vw', position: 'fixed', top: 0, left: 0, zIndex: -1 }}>
      <Spline
        scene="https://prod.spline.design/56pz9PRnisoIRSD8/scene.splinecode"
      />
    </main>
  );
}
