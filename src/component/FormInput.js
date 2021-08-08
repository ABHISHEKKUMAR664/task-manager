import React from 'react'

const FormInput = () => {
    return (
        <div>
            <form autoComplete="off">
       <input type="text" id="taskmanger" name="taskmanger" 
       required placeholder="what needs to be done?"></input>
       <button type="submit">create</button>
     </form>

        </div>
    )
}

export default FormInput;
