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
import { hiddenVariants } from "./tokens";
export const Hidden = React.forwardRef((_a, ref) => {
    var { above, below, className } = _a, props = __rest(_a, ["above", "below", "className"]);
    return (_jsx("div", Object.assign({ className: cn(hiddenVariants({ above, below }), className), ref: ref }, props)));
});
Hidden.displayName = "Hidden";
//# sourceMappingURL=hidden.js.map