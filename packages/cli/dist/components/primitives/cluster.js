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
import { gapVariants } from "./tokens/spacing";
import { flexVariants } from "./tokens/flex";
export const Cluster = React.forwardRef((_a, ref) => {
    var { gap, className, flexDirection, justify, items } = _a, props = __rest(_a, ["gap", "className", "flexDirection", "justify", "items"]);
    return (_jsx("div", Object.assign({ className: cn("flex flex-wrap", gapVariants({ gap }), flexVariants({ flexDirection, justify, items }), className), ref: ref }, props)));
});
Cluster.displayName = "Cluster";
//# sourceMappingURL=cluster.js.map