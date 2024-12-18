import { Path, useForm, UseFormRegister, SubmitHandler } from "react-hook-form";
import {NestedFields} from "./NestedFields.tsx";
import * as yup from "yup";

const schema = yup.object({
    amount: yup.number().positive().required(),
    damagedParts: 

})


interface IFormValues {
    amount: number;
    damagedParts: string[];

}

type InputProps = {
    label: Path<IFormValues>
    register: UseFormRegister<IFormValues>
    required: boolean
}


const Input = ({ label, register, required }: InputProps) => (
    <>
        <label>{label}</label>
        <input {...register(label, { required })} />
    </>
)

const SubmitData: () => void{
    console.log(Input);
}


const App = () => {
    const { register, handleSubmit } = useForm<IFormValues>()

    const onSubmit: SubmitHandler<IFormValues> = (data) => {
        alert(JSON.stringify(data))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <label></label>

            <label>Amount</label>
            <input {...register("amount")} />

            <label>Damaged Parts</label>
            <input {...register("damagedParts")}/>


            <button type="submit" onClick={() => SubmitData()}>Submit</button>
        </form>
    )
}
export default App;