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
import { flexVariants, gapVariants, paddingVariants } from "./tokens";
export const FlexBox = React.forwardRef((_a, ref) => {
    var { p, gap, className, flexDirection, wrap, justify, items } = _a, props = __rest(_a, ["p", "gap", "className", "flexDirection", "wrap", "justify", "items"]);
    return (_jsx("div", Object.assign({ className: cn("flex flex-wrap", paddingVariants({ p }), gapVariants({ gap }), flexVariants({ flexDirection, justify, items, wrap }), className), ref: ref }, props)));
});
FlexBox.displayName = "FlexBox";
//# sourceMappingURL=flex-box.js.map