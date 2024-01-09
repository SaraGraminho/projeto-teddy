import * as T from "./types";

export const Button = ({ children, ...props }: T.Props) => {
    return (
        <button
            {...props}
            className="w-full border-none bg-gradient-to-r from-sky-500 to-indigo-500 p-3.5 text-2xl text-white outline-none"
        >
            {children}
        </button>
    );
};
