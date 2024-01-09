import * as T from "./types";

export const Input = ({ children, ...props }: T.Props) => {
    return (
        <input
            {...props}
            className="mb-6 w-full divide-solid border-2 border-gray-200 p-3.5 outline-none text-black">
        </input>
    );
};
