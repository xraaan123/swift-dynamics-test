import { Input } from 'antd'
import React, { useState } from 'react'

const CustomInput: React.FC<{ onChange?: (value: string) => void }> = (props) => {
    const [value, setValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const rawValue = e.target.value.replace(/\D/g, '');

        if (rawValue.length <= 13) {
            const formattedValue = formatValue(rawValue);
            setValue(formattedValue);
            if (props.onChange) {
                props.onChange(formattedValue);
            }
        }
    }

    const formatValue = (value: string) => {
        const parts = [];

        parts.push(value.slice(0, 1));

        if (value.length > 1) parts.push(value.slice(1, 5));
        if (value.length > 5) parts.push(value.slice(5, 10));
        if (value.length > 10) parts.push(value.slice(10, 12));
        if (value.length > 12) parts.push(value.slice(12, 13));

        return parts.join('-');
    }

    //{...props}

    return (
        <Input value={value} onChange={handleChange} />
    )
}

export default CustomInput