// import {
//   createElement,
//   ElementType,
//   forwardRef,
//   PropsWithChildren,
// } from "react";
// import classNames from "classnames";
// import { sprinkles, Sprinkles } from "../../theme/sprinkles.css";

// type HTMLProperties = Omit<
//   React.HTMLAttributes<HTMLElement>,
//   "as" | "color" | "height" | "width"
// >;

// type AllProps = Sprinkles & { as?: ElementType } & HTMLProperties;

// type BoxProps = PropsWithChildren<AllProps>;
//
// export const Box = forwardRef<HTMLElement, BoxProps>(
//   ({ as = "div", className, ...rest }, ref) => {
//     const sprinklesProps: Record<string, unknown> = {};
//     const nativeProps: Record<string, unknown> = {};
//
//     for (const key in rest) {
//       if (sprinkles.properties.has(key as keyof Sprinkles)) {
//         sprinklesProps[key] = rest[key as keyof typeof rest];
//       } else {
//         nativeProps[key] = rest[key as keyof typeof rest];
//       }
//     }
//
//     return createElement(as, {
//       ref,
//       className: classNames(sprinkles(sprinklesProps), className),
//       ...rest,
//     });
//   }
// );
//
// Box.defaultProps = {
//   // space: 2,
// };

export {};
