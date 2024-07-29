import { countries } from "@/config/countries";

export const components = [
  {
    label: "Title:",
    name: "title",
    component: "select",
    options: ["Mr.", "Mrs.", "Ms."],
    rules: [
      {
        required: true,
        message: "Please select your title!",
      },
    ],
  },
  {
    label: "First name:",
    name: "firstName",
    component: "input",
    rules: [
      {
        required: true,
        message: "Please enter your first name!",
      },
    ],
  },
  {
    label: "Last name:",
    name: "lastName",
    component: "input",
    rules: [
      {
        required: true,
        message: "Please enter your last name!",
      },
    ],
  },
  {
    label: "Birthday:",
    name: "birthday",
    component: "datepicker",
    rules: [
      {
        required: true,
        message: "Please select your birthday!",
      },
    ],
  },
  {
    label: "Nationality:",
    name: "nationality",
    component: "select",
    options: countries.map((country) => ({
      name: country.name,
      code: country.dial_code,
      value: country.nationality, // or another unique identifier
    })),
    rules: [
      {
        required: true,
        message: "Please select your nationality!",
      },
    ],
  },
  {
    label: "Citizen ID:",
    name: "citizenId",
    component: "customInput",
    rules: [
      {
        required: true,
        message: "Please enter your citizen ID!",
      },
    ],
  },
  {
    label: "Gender:",
    name: "gender",
    component: "radio",
    options: ["Male", "Female", "Other"],
    rules: [
      {
        required: true,
        message: "Please select your gender!",
      },
    ],
  },
  {
    label: "Mobile phone:",
    name: "mobilePhone",
    component: "customSelect",
  },
  {
    label: "Passport no.:",
    name: "passportId",
    component: "input",
  },
  {
    label: "Expected salary:",
    name: "expectedSalary",
    component: "input",
    rules: [
      {
        required: true,
        message: "Please enter your expected salary!",
      },
    ],
  },
];

export const tableColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
  },
  {
    title: "Mobile number",
    dataIndex: "mobileNumber",
    key: "mobileNumber",
  },
  {
    title: "Nationality",
    dataIndex: "nationality",
    key: "nationality",
  },
];
