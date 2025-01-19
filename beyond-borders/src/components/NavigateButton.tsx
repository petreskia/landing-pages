import { Link } from "react-router";

interface NavigateButtonProps {
  text: string; // Text displayed on the button
  className: string; // CSS class for styling the button
  to: string; // Path to navigate to
}

export default function NavigateButton({
  text,
  className,
  to,
}: NavigateButtonProps) {
  return (
    <Link to={to} className={`navigate-button ${className}`}>
      {text}
    </Link>
  );
}
