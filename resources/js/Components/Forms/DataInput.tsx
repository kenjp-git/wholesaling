import { InputHTMLAttributes } from 'react';
import BaseInput from './BaseInput';

type InputProps = {
    className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function DataInput(props: InputProps) {
    const defaultClassName = "px-1 py-0 w-full border-none focus:bg-yellow-100 focus:ring-0 focus:border-transparent"
    const { className, ...rest } = props;
    const classes = `${defaultClassName} ${className}`;

    return (
        <BaseInput
            className={classes}
            {...rest}
        />
    );
}
