import { Gradient } from '@lib/gradient';
import { useEffect } from 'react';

export default function GradientCanvas() {
  useEffect(() => {
    const gradient = new Gradient();
    gradient.initGradient('.gradient-canvas');
  });

  return (
    <div className="relative max-w-5xl mx-auto h-28">
      <canvas
        className="absolute top-0 gradient-canvas"
        data-js-darken-top
        data-transition-in
      />
    </div>
  );
}
