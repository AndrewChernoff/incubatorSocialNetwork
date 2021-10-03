import { Field } from 'react-final-form';
import s from './FormsControl.module.css';

/* export const Textarea = ({ input, meta, ...props }) => {
    const hasError =  meta.error && meta.touched

    return (
        <div className={s.formControl + '' + (hasError ? s.error : '')}>
            <div >
                <textarea {...input} {...props} className={s.errorTextarea}/>
            </div>
            {hasError && <span className={s.errorSpan}>{meta.error}</span>}
        </div>
    )
} */

/* export const Input = ({ input, meta, ...props }) => {
    const hasError =  meta.error && meta.touched
    return (
        <div className={s.formControl + '' + (hasError ? s.error : '')}>
            <div >
                <input {...input} {...props} className={s.errorTextarea}/>
            </div>
            {hasError && <span className={s.errorSpan}>{meta.error}</span>}
        </div>
    )
} */

const Element = (Tag) => {
    const ElementForm = ({ input, meta, ...props }) => {
        const hasError = meta.error && meta.touched
        return (
            <div className={s.formControl + '' + (hasError ? s.error : '')}>
                <div >
                    <Tag {...input} {...props} className={hasError && s.errorTextarea} />
                </div>
                {hasError && <span className={s.errorSpan}>{meta.error}</span>}
            </div>
        )
    }

    return ElementForm
}

export const Textarea = Element('textarea')
export const Input = Element('input');

export const createForm = (label, placeholder, name, component, validate, type) => {
    return <div>
        <label>{label}</label>
        <Field placeholder={placeholder} name={name} component={component} validate={validate} type={type} />
    </div>
}

////Form for ProfileForm Componnet
export const profileDataForm = (label, placeholder, name, component, validate, type, initialValue) => {
    return <div>
        <label>{label}</label>
        <Field placeholder={placeholder} name={name} component={component} validate={validate} type={type} initialValue={initialValue} />
    </div>
}