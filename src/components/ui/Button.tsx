import styles from "./Button.module.scss";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: ButtonVariant;
}

export default function Button({
  children,
  href,
  variant = "primary",
}: ButtonProps) {
  const className = `${styles.button} ${styles[variant]}`;

  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return <button className={className}>{children}</button>;
}