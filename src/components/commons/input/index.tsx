import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLElement>{
    onChange?: (value: any) => void;
    label: string;
    columnClasse?: string;
    id: string;
}

export const Input: React.FC<InputProps> = ({
    onChange,
     label, 
     columnClasse,
     id,
     ...propsInput
}: InputProps) =>{
    return(
        <div className={`field column ${columnClasse}`}>
            <label htmlFor={id} className="label">{label}</label>
            <div className="control">
                <input className="input" type="text" id={id} {...propsInput} onChange={event => {
                    if(onChange){
                        onChange(event.target.value)
                    }
                }} />
            </div>
        </div>
    )
}