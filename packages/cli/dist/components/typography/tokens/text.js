import { cva } from "class-variance-authority";
export const textVariants = cva("", {
    variants: {
        textAlign: {
            left: "text-left",
            center: "text-center",
            right: "text-right",
            justify: "text-justify",
            start: "text-start",
            end: "text-end",
        },
        tone: {
            primary: "text-primary",
            muted: "text-muted",
            destructive: "text-destructive",
        },
    },
});
//# sourceMappingURL=text.js.map