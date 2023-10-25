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
import { cn } from "@/lib/utils";
import { gapVariants, paddingVariants, } from "./tokens";
export const Reel = React.forwardRef((_a, ref) => {
    var { gap, className, noBar, p, children } = _a, props = __rest(_a, ["gap", "className", "noBar", "p", "children"]);
    return (_jsx("div", Object.assign({ ref: ref, className: cn("flex overflow-x-auto overflow-y-hidden", gapVariants({ gap }), paddingVariants({ p }), noBar && "no-scrollbar", className) }, props, { children: children })));
});
Reel.displayName = "Reel";
//# sourceMappingURL=reel.js.map