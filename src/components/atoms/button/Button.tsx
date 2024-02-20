import { IButton } from "./types";

const Button = ({ onClick, children, className = "" }: IButton) => {
  return (
    <div>
      <button className={`${className} button`} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
