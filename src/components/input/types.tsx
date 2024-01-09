import { ComponentProps } from "react";

export interface Props extends ComponentProps<"input"> {
    children: React.ReactNode;
}
