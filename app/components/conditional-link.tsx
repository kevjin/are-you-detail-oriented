import { Link } from "@remix-run/react";

export function ConditionalLink({
  to,
  condition,
  children,
  className,
  ...props
}: {
  to?: string;
  condition: boolean;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) {
  return !!to && condition ? (
    <Link to={to} className={className} {...props}>
      {children}
    </Link>
  ) : (
    <div className={className}>{children}</div>
  );
}
