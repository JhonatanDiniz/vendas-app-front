import { TextareaHTMLAttributes } from 'react'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLElement>{
    onChange: (value: any) => void;
    label: string;
    id: string;
    columnClass?: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
    onChange, 
    label, 
    id, 
    columnClass,
    ...textAreaProps
}:TextAreaProps) =>{
    return(
        <div className= {`field column ${columnClass}`}>
            <label htmlFor={id} className="label">{label}</label>
            <div className="control">
                    <textarea className="textarea" id={id} {...textAreaProps} onChange={event => {
                        if(onChange){
                            onChange(event.target.value)
                        }
                    }} />
            </div>
        </div>
    )
}