'use client'

import { Button, DatePicker, Input, Radio, RadioChangeEvent, Select } from 'antd'
import { useState } from 'react'

const CustomForm = () => {
    const [value, setValue] = useState(1);

    const onChange = (e: RadioChangeEvent) => {
        setValue(e.target.value);
    };

    return (
        <section className='p-4 m-auto max-w-full flex flex-col items-center'>
            <form className='m-2 p-2 border-2 border-black w-auto max-w-full rounded-lg'>
                <div className="flex flex-wrap w-full mb-2">
                    <div className="flex w-full items-center">
                        <div className=" flex items-center">
                            <span className='text-red-600'>*</span>
                            <span >Title:</span>
                            <Select
                                className="ml-2 w-full"
                                placeholder='Title'
                                showSearch
                                options={[
                                    { value: 'Mr.', label: 'Mr.' },
                                    { value: 'Mrs.', label: 'Mrs.' },
                                    { value: 'Ms.', label: 'Ms.' },
                                ]}
                            />
                        </div>

                        <div className="flex items-center ml-2">

                            <span className='text-red-600'>*</span>
                            <span>First name: </span>
                            <Input className="ml-1 w-fit" />
                        </div>

                        <div className="flex items-center ml-2">
                            <span className='text-red-600'>*</span>
                            <span >Last name:</span>
                            <Input className="w-fit" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col w-full">
                    <div className='flex w-full mb-2 items-center'>
                        <label className="flex items-center">
                            <span className='text-red-600'>*</span>
                            <span>Birthday:</span>
                            <DatePicker className="ml-2" placeholder="mm/dd/yy" format='MM-DD-YY' />
                        </label>

                        <label className="flex items-center ml-2">
                            <span className='text-red-600'>*</span>
                            <span>Nationality:</span>
                            <Select
                                className="ml-2 w-full"
                                showSearch
                                placeholder="-- Please Select --"
                                options={[
                                    { value: 'thai', label: 'Thai' },
                                    { value: 'british', label: 'British' },
                                    { value: 'canadian', label: 'Canadian' },
                                ]}
                            />
                        </label>
                    </div>

                    <div className='flex w-full mb-2 items-center'>
                        <label className="flex items-center">
                            <span className='text-red-600'>*</span>
                            <span>Citizen ID:</span>
                            <Input className="ml-1 w-fit" maxLength={13} />
                        </label>

                        <label className="flex items-center ml-2">
                            <span className='text-red-600'>*</span>
                            <span>Gender:</span>
                            <Radio.Group className="ml-2" onChange={onChange} value={value}>
                                <Radio value='male'>Male</Radio>
                                <Radio value='female'>Female</Radio>
                                <Radio value='unisex'>Unisex</Radio>
                            </Radio.Group>
                        </label>
                    </div>

                    <div className='flex w-full mb-2 items-center'>
                        <label className="flex items-center">
                            <span className='text-red-600'>*</span>
                            <span className="w-[170px]">Mobile Phone:</span>
                            <Select
                                className="ml-1 w-auto"
                                placeholder='Country Code'
                                showSearch
                                options={[
                                    { value: '+66', label: '+66' },
                                    { value: '+1', label: '+1' },
                                    { value: '+44', label: '+44' },
                                ]}
                            />
                            <Input className="ml-2 w-3/4" />
                        </label>
                    </div>


                    <label className="mb-2 flex items-center">
                        <span>Passport No:</span>
                        <Input className="ml-1 w-fit" />
                    </label>

                    <div className='flex w-full mb-2 items-center border-2 justify-between'>
                        <div>
                            <label className=" flex items-center">
                                <span className='text-red-600'>*</span>
                                <span>Expected Salary:</span>
                                <Input className="ml-1 w-fit" />
                            </label>
                        </div>

                        <div>
                            <Button type="primary" htmlType="submit" className="mr-4">Submit</Button>
                            <Button htmlType="button" >Reset</Button>
                        </div>
                    </div>


                </div>
            </form>
        </section >
    )
}

export default CustomForm