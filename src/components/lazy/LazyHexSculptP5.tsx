import { lazy, Suspense, ComponentProps } from "react";

const HexSculptP5Component = lazy(() => import("@/components/HexSculptP5"));

export const LazyHexSculptP5 = (props: ComponentProps<typeof HexSculptP5Component>) => {
  return (
    <Suspense fallback={<div className="absolute inset-0" aria-hidden="true" />}>
      <HexSculptP5Component {...props} />
    </Suspense>
  );
};

export default LazyHexSculptP5;
