import { ReactNode } from "react";

export interface IButton {
  onClick: () => void;
  children: ReactNode;
  className?: string;
}
