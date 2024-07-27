'use client'

import { MouseEventHandler } from 'react';

interface Props {
    shapes: Array<string>;
    label?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

const CustomButton = ({ shapes, label, handleClick }: Props) => {

    const checkShapesLength = () => {
        if (shapes.length > 1) {
            return (
                <div className="flex gap-2">
                    {shapes.map((shape, index) => (
                        <div key={index} className={shape}></div>
                    ))}
                </div>
            )
        } else {
            return <div className={shapes[0]}></div>
        }
    }

    return (
        <div className='flex flex-col h-full' >
            <button
                className="h-auto hover:bg-[#ffa200] p-3 px-16 rounded-lg active:bg-[#6eda78]"
                onClick={handleClick}>
                <div className="flex flex-col items-center">
                    {checkShapesLength()}
                </div>
            </button >
            <label
                className='border border-black rounded-xl px-2 bg-[#6eda78] mt-auto mb-8'
            >
                {label}
            </label>
        </div>
    )
}

export default CustomButton