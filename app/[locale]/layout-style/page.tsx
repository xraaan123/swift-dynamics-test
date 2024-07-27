'use client'

// import { shapes } from "@/constant"
import { Button, Col, Row } from "antd"
import { useState } from "react"
import 'antd/dist/reset.css';
import CustomButton from "@/components/CustomButton";

const Layout = () => {
    const [months, setMonths] = useState([
        "square-square", "square-rectangle", "square-trapezoid",
        "square-parallelogram", "circle-circle", "circle-oval"
    ])
    const [rows, setRows] = useState([
        months.slice(0, 3),
        months.slice(3)
    ]);

    const handleSwapClick = () => {
        setRows((prevRows) => [prevRows[1], prevRows[0]]);
    }

    const shuffleAllButtons = () => {
        // Create a new array of buttons to shuffle
        const shuffledButtons = [...months].sort(() => Math.random() - 0.5);
        setMonths(shuffledButtons);
        setRows([
            shuffledButtons.slice(0, 3),
            shuffledButtons.slice(3)
        ]);
    };

    const moveShape = (direction: string) => {
        setRows((prevRows) => {
            let [firstRow, secondRow] = prevRows;
            if (direction === 'right') {
                const lastButton = secondRow[secondRow.length - 1];
                const secondLastButton = firstRow[firstRow.length - 1];

                firstRow = [lastButton, ...firstRow.slice(0, -1)];
                secondRow = [secondLastButton, ...secondRow.slice(0, -1)];
            } else if (direction === 'left') {
                const firstButton = firstRow[0];
                const secondButton = secondRow[0];

                firstRow = [...firstRow.slice(1), secondButton];
                secondRow = [...secondRow.slice(1), firstButton];
            }
            return [firstRow, secondRow];
        });
    };

    return (
        <div className="p-20 text-center ">
            <Row justify='center' gutter={16}>
                <Col>
                    <CustomButton
                        shapes={['triangle-left']}
                        label='Move shape'
                        handleClick={() => moveShape('left')}
                    />
                </Col>
                <Col>
                    <CustomButton
                        shapes={['triangle-up', 'triangle-down']}
                        label='Move shape'
                        handleClick={handleSwapClick}
                    />
                </Col>
                <Col>
                    <CustomButton
                        shapes={['triangle-right']}
                        label='Move shape'
                        handleClick={() => moveShape('right')}
                    />
                </Col>
            </Row>

            <div className="mt-20">
                {rows.map((row, index) => (
                    <Row key={index} justify='center' gutter={16}
                        className="my-3">
                        {row.map((button, btnIndex) => (
                            <Col key={btnIndex}>
                                <Button
                                    className="h-auto w-[386px]"
                                    onClick={shuffleAllButtons}>
                                    <div className={`${button}`}>
                                    </div>
                                </Button>
                            </Col>
                        ))}
                    </Row>
                ))}
            </div>
        </div>
    )
}

export default Layout