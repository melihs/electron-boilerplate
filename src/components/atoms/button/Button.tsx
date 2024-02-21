import { IButton } from "./types";

const Button = ({ onClick, children, className = "" }: IButton) => {
  return (
    <button className={`${className} button`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
