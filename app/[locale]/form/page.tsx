// import { Select, Input, DatePicker, DatePickerProps, Radio } from "antd";

import CustomForm from "@/components/CustomForm";
import CustomTable from "@/components/CustomTable";

const Page = () => {

    // const [value, setValue] = useState(1);


    // const onChange: DatePickerProps['onChange'] = (date, dateString) => {
    //     console.log(date, dateString);
    // }

    return (
        <div className="flex flex-col">
            <CustomForm />
            <CustomTable />
        </div>
    )
}

export default Page