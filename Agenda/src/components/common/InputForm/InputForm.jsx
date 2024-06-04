import './InputForm.css'

function InputForm({TextInput, name}) {
    return(
        <>
            <div className='InputLongContainer'>
                <label className='LongLabel' htmlFor={name}>{TextInput}</label>
                <input className='InputLong' id={name} type="text" name={name} />
            </div>
        </>
    )

}

export default InputForm;