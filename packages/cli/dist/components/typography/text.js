var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { textVariants } from "./tokens";
const textCustomVariants = cva("inline-block [&>svg]:inline-block", {
    variants: {
        size: {
            base: "text-base leading-none",
            xs: "text-xs leading-none",
            sm: "text-sm leading-none",
            lg: "text-lg leading-none",
        },
        weight: {
            base: "font-normal",
            medium: "font-medium",
            bold: "font-bold",
        },
    },
    defaultVariants: {
        size: "base",
        weight: "base",
    },
});
const Text = React.forwardRef((_a, ref) => {
    var { withIcon, size, weight, className, tone, children, textAlign } = _a, props = __rest(_a, ["withIcon", "size", "weight", "className", "tone", "children", "textAlign"]);
    const Comp = withIcon ? "span" : "p";
    return (_jsx(Comp, Object.assign({ className: cn(textCustomVariants({ size, weight, className }), textVariants({ textAlign, tone })), ref: ref }, props, { children: children })));
});
Text.displayName = "Text";
export { Text };
//# sourceMappingURL=text.js.map