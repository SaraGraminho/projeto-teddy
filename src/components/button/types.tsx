import { ComponentProps } from "react";

export interface Props extends ComponentProps<"button"> {
    children: React.ReactNode;
}
