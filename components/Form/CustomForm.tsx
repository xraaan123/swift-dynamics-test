'use client'

import { AppDispatch, RootState } from '@/store';
import { Input, Button, Table, Form as AntForm, Select, DatePicker, Radio, RadioChangeEvent } from 'antd';
import { useDispatch, useSelector } from 'react-redux'
import { addSubmission, clearSubmissions } from '@/store/formSlice';
import { useEffect, useState } from 'react';
import { components, tableColumns } from '@/constant';
import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';
import { countries } from '@/config/countries';


const { Option } = Select;

const Form = () => {
    const dispatch = useDispatch<AppDispatch>();
    const submissions = useSelector((state: RootState) => state.form.submissions);
    const [isMounted, setIsMounted] = useState(false)
    const [value, setValue] = useState(1);
    const [selectedCountryCode, setSelectedCountryCode] = useState('+1');

    const [formInstance] = AntForm.useForm();

    const handleFinish = (values: any) => {
        // const formattedValues = {
        //     ...values,
        //     // birthDay: values.birthDay ? values.birthDay.format('YYYY-MM-DD') : null,
        // }

        // dispatch(addSubmission(formattedValues));
        // formInstance.resetFields();

        dispatch(addSubmission(values));
        formInstance.resetFields();
    }

    const handleClear = () => {
        dispatch(clearSubmissions());
    }

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const onChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
    };

    const handleNationalityChange = (value: string) => {
        const country = countries.find(c => c.nationality === value);

        console.log(value)

        if (country) {
            setSelectedCountryCode(country.dial_code);
            formInstance.setFieldsValue({
                mobilePhone: `${country.dial_code}${formInstance.getFieldValue('mobilePhone')?.replace(selectedCountryCode, '')}`
            })
        }
    }

    const handleDatePicker = () => {
        console.log('date')
    }

    const renderFormItem = (column: any) => {
        switch (column.component) {
            case 'input':
                return <Input />
            case 'datepicker':
                return <DatePicker onClick={handleDatePicker} />
            case 'select':
                return (
                    <Select showSearch onChange={column.name === 'nationality' ? handleNationalityChange : undefined}>
                        {Array.isArray(column.options) && column.options.map((option: any) => (
                            <Option
                                key={option.value || option}
                                value={option.value || option}
                            >
                                {option.value || option}
                            </Option>
                        ))}
                    </Select>

                )
            case 'radio':
                return (
                    <Radio.Group className="ml-2" onChange={onChange} value={value}>
                        {column.options.map((option: string) => (
                            <Radio key={option} value={option}>{option}</Radio>
                        ))}
                    </Radio.Group>
                )
            case 'customInput':
                return <CustomInput />
            case 'customSelect':
                return <CustomSelect
                    value={formInstance.getFieldValue(column.name) || ''}
                    onChange={(val) => formInstance.setFieldsValue({ [column.name]: val })}
                    countryCode={selectedCountryCode}
                />
            default:
                return null;
        }
    }

    const tableData = submissions.map((item, index) => {
        if (item.mobileNumber) {
            const country = countries.find(c => c.dial_code === item.mobileNumber.slice(0, item.mobileNumber.indexOf(' ')))

            return {
                key: index,
                name: `${item.title} ${item.firstName} ${item.lastName}`,
                gender: item.gender,
                mobilePhone: `${country?.dial_code || ''} ${item.mobileNumber.replace(country?.dial_code || '', '')}`,
                nationality: item.nationality,
                // birthDay: item.birthDay
            }
        }
        return null;
    }).filter(item => item !== null)

    return (
        <section className='p-4 m-auto max-w-full w-full flex flex-col items-center'>
            <div className="container mx-auto p-4 border-2 border-black max-w-full w-full rounded-lg">
                <AntForm form={formInstance} layout='vertical' onFinish={handleFinish}>
                    {components.map((component) => (
                        <AntForm.Item key={component.name} label={component.label} name={component.name} rules={component.rules}>
                            {renderFormItem(component)}
                        </AntForm.Item>
                    ))}
                    <AntForm.Item>
                        <Button type='primary' htmlType='submit'>
                            Submit
                        </Button>
                    </AntForm.Item>
                </AntForm>
            </div>
            {
                isMounted && (
                    <div className='mt-4'>
                        <Button onClick={handleClear} className='mb-4'>
                            Clear submissions
                        </Button>

                        <Table dataSource={submissions.map((item, index) => (
                            {
                                ...item,
                                key: index
                            }
                        ))}
                            columns={components.map((component) => ({
                                title: component.label,
                                dataIndex: component.name,
                                key: component.name
                            }))}
                        />
                    </div>
                )
            }
        </section>

    )
}

export default Form