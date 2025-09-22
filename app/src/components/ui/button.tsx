"use client";
import * as React from "react";


// Simple className concatenator
function cn(...classes: Array<string | undefined | null | false>) {
return classes.filter(Boolean).join(" ");
}


export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}


export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
({ className, children, ...props }, ref) => {
return (
<button
ref={ref}
className={cn(
// sensible defaults (overridable)
"inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
"focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
// light-on-dark default styling (matches your homepage)
"bg-white text-black hover:bg-gray-100 focus:ring-white/30 focus:ring-offset-black",
className
)}
{...props}
>
{children}
</button>
);
}
);
Button.displayName = "Button";