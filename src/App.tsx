import { css } from '../styled-system/css';
import { scrollFade } from '../styled-system/patterns';

export default function App() {
  return (
    <div
      className={css(scrollFade.raw({ x: 32, inset: 56 }), {
        width: '320px',
        overflowX: 'auto',
      })}
    >
      <div style={{ width: '640px', padding: '16px' }}>
        Scrollable content. The right edge should fade out through a mask.
      </div>
    </div>
  );
}
