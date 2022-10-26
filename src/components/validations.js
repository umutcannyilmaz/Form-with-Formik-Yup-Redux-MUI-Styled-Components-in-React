import { object, string, number, date, InferType } from 'yup';
const validations = object({
    name:string().required("Name is a required field"),
    surname:string().required("Surname is a required field"),
    email: string().email("E-mail must be a valid email").required("E-mail is a required field"),
    phonenumber: number().required("Phone number is a required field"),
    gender:string().required("Gender is a required field"),
    city:string().required("City is a required field"),

});

export default validations;
