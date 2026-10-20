import { defineConfig, definePattern } from '@pandacss/dev';

const scrollFade = definePattern({
  properties: {
    x: { type: 'number' },
    inset: { type: 'number' },
  },
  transform(props) {
    const x = props.x ?? 0;
    const inset = props.inset ?? 0;
    // Delete the pattern options so they are not treated as CSS declarations.
    delete props.x;
    delete props.inset;
    return {
      ...props,
      maskImage: `linear-gradient(to right, transparent 0, black ${inset}px, black calc(100% - ${x}px), transparent 100%)`,
      maskComposite: 'intersect',
    };
  },
});

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{ts,tsx}'],
  outdir: 'styled-system',
  patterns: { extend: { scrollFade } },
});
