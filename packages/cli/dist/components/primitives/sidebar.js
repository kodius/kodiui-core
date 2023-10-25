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
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { gapVariants } from "./tokens";
const sidebarVariants = cva("flex flex-wrap", {
    variants: {
        side: {
            left: `[&>*:first-child]:grow [&>*:last-child]:grow-[999] [&>*:last-child]:basis-0 [&>*:last-child]:min-w-[50%]`,
            right: `[&>*:last-child]:grow [&>*:first-child]:basis-0 [&>*:first-child]:grow-[999] [&>*:first-child]:min-w-[50%]`,
        },
    },
    defaultVariants: {
        side: "left",
    },
});
export const Sidebar = (_a) => {
    var { children, gap, side = "left", className } = _a, props = __rest(_a, ["children", "gap", "side", "className"]);
    return (_jsx("div", Object.assign({ className: cn(gapVariants({ gap }), sidebarVariants({ side })) }, props, { children: children })));
};
//# sourceMappingURL=sidebar.js.map