import './InputForm.css'

function InputForm({TextInput}) {
    return(
        <>
            <div className='InputLongContainer'>
                <label className='LongLabel' htmlFor={TextInput}>{TextInput}</label>
                <input className='InputLong' type="text" name={TextInput} />
            </div>
        </>
    )

}

export default InputForm;