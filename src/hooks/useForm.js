import { useState } from "react"


export const useForm = ( initialState = {} ) => {
    
    const [values, setValues] = useState(initialState);

    const handleInputChange = ({ target }) => {

        setValues({
            ...values,
            [ target.name ]: target.value
        });

    }
    const reset = (newFormState = initialState ) => {
        setValues( newFormState );
    }



    return [ values, handleInputChange, reset ];

}
