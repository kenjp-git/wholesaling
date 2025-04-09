import { InputHTMLAttributes } from 'react';

type InputProps = {
    className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input(props: InputProps) {
    const { className, ...rest } = props;

    return (
        <input
            className={className}
            {...rest}
        />
    );
}
