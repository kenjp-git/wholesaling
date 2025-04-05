import { InputHTMLAttributes } from 'react';

type InputProps = {
    className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function BaseBox(props: InputProps) {
    const { className, ...rest } = props;

    return (
        <div
            className={className}
            {...rest}
        >
            {props.children}
        </div>
    );
}
