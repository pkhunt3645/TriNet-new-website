'use client'
import * as React from "react";
import { smoothScrollToId } from "@/utils/commonUtils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    href?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, href, ...props }, ref) => {

        if (href?.startsWith("#") && !props.onClick) {
            const navigationId = href.replace("#", "");
            return (
                <button ref={ref} {...props} onClick={() => smoothScrollToId(navigationId)}>
                    {children}
                </button>
            )
        }

        return (
            <button ref={ref} {...props}>
                {children}
            </button>
        );
    }
);

Button.displayName = "Button";

export default Button;