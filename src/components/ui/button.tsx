import type { ButtonHTMLAttributes, ReactNode, Ref } from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "sm" | "md";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  ref?: Ref<HTMLButtonElement>;
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className = "",
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return `button button--${variant} button--${size}${className ? ` ${className}` : ""}`;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ref,
  ...props
}: ButtonProps) {
  return (
    <button
      ref={ref}
      className={buttonStyles({ variant, size, className })}
      {...props}
    >
      {children}
    </button>
  );
}
