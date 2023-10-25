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
        level: {
            "1": "text-4xl lg:text-5xl leading-none",
            "2": "text-3xl transition-colors first:mt-0 leading-none",
            "3": "text-2xl leading-none",
            "4": "text-xl leading-none",
        },
        weight: {
            base: "font-semibold",
            bold: "font-extrabold",
        },
    },
    defaultVariants: {
        level: "1",
        weight: "base",
    },
});
const Heading = React.forwardRef((_a, ref) => {
    var { level = "1", children, className, textAlign, weight, color } = _a, props = __rest(_a, ["level", "children", "className", "textAlign", "weight", "color"]);
    const Comp = `h${level}`;
    return (_jsx(Comp, Object.assign({ className: cn(headingVariants({ level, weight }), textVariants({ textAlign, color }), className), ref: ref }, props, { children: children })));
});
Heading.displayName = "Heading";
export { Heading };
//# sourceMappingURL=heading.js.map