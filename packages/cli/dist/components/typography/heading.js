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
const headingVariants = cva("m-0 p-0", {
    variants: {
        as: {
            h1: "text-4xl lg:text-5xl leading-none",
            h2: "text-3xl transition-colors first:mt-0 leading-none",
            h3: "text-2xl leading-none",
            h4: "text-xl leading-none",
        },
        weight: {
            base: "font-semibold",
            bold: "font-extrabold",
        },
    },
    defaultVariants: {
        as: "h1",
        weight: "base",
    },
});
const Heading = React.forwardRef((_a, ref) => {
    var { as = "h1", children, className, textAlign, weight, tone } = _a, props = __rest(_a, ["as", "children", "className", "textAlign", "weight", "tone"]);
    const Comp = `${as}`;
    return (_jsx(Comp, Object.assign({ className: cn(headingVariants({ as, weight }), textVariants({ textAlign, tone }), className), ref: ref }, props, { children: children })));
});
Heading.displayName = "Heading";
export { Heading };
//# sourceMappingURL=heading.js.map