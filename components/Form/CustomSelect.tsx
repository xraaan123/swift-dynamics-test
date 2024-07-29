import { Select, Input, InputNumber } from "antd"
import { useEffect, useState } from "react";
import { countries } from "@/config/countries";

const { Option } = Select

interface Props {
    value: string;
    onChange: (value: string) => void;
    countryCode: string;
}

const CustomSelect = ({ value = '', onChange, countryCode }: Props) => {
    const [selectedCountryCode, setSelectedCountryCode] = useState(countryCode);

    useEffect(() => {
        setSelectedCountryCode(countryCode);

    }, [countryCode])


    const handleCountryCodeChange = (value: string) => {
        setSelectedCountryCode(value);

        onChange(`${value}${value}`);
    }

    const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(`${selectedCountryCode}${e.target.value}`);
    }

    const filterOption = (input: string, option: any) => {
        const { value, children } = option.props;
        const lowerInput = input.toLowerCase();

        const lowerChildren = typeof children === 'string' ? children.toLowerCase() : '';

        return (
            lowerChildren.includes(lowerInput) || // Filter by country name
            value.toLowerCase().includes(lowerInput) // Filter by country code
        );
    };

    return (
        <div className="flex items-center">
            <Select
                value={countryCode}
                onChange={handleCountryCodeChange}
                className="mr-2"
                showSearch
                filterOption={filterOption}
            >
                {countries.map(({ dial_code, name }) => (
                    <Option key={dial_code} value={dial_code}>
                        {name} ({dial_code})
                    </Option>
                ))}
            </Select>
            <Input
                type="tel"
                value={value.replace(selectedCountryCode, '').replace(/\D/g, '')}
                onChange={handlePhoneNumberChange}
                placeholder="Enter phone number"
                className="w-full"
            />
        </div>
    )
}

export default CustomSelect