"use client";
import * as React from "react";


function cn2(...classes: Array<string | undefined | null | false>) {
return classes.filter(Boolean).join(" ");
}


export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
return (
<div
className={cn2(
// base container styles
"rounded-2xl border bg-[var(--panel)] border-[var(--border)]/60",
className
)}
{...props}
/>
);
}


export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
return <div className={cn2("p-6 pb-0", className)} {...props} />;
}


export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
return (
<h3
className={cn2(
"text-lg font-semibold leading-none tracking-tight text-[var(--text)]",
className
)}
{...props}
/>
);
}


export function CardDescription({ className, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
return <p className={cn2("text-sm text-[var(--subtext)]", className)} {...props} />;
}


export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
return <div className={cn2("p-6 pt-4", className)} {...props} />;
}


// (Optional) You can add CardFooter later if needed:
// export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
// return <div className={cn2("p-6 pt-0", className)} {...props} />;
// }