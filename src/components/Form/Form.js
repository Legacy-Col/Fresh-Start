import React from 'react';
import'./Form.css'


const Form = () => {
    return (
        <form>
            <div className='form-container'>
                <div className='form-dsc'>
                    <h3>You can Book and Appointment Here !</h3>
                    <p className='visage'>We're always on the duty of protecting the FUTURE of our clients.</p>
                </div>
                <div className='form-data'>
                    <input type='text' placeholder='Your Name' name='your name' required/>
                
                    <input type='email' placeholder='Email' name='email' required/>

                    <input type='text' placeholder='Phone Number' name='Phone Number' required/>
                
                    <input type='radio' placeholder='Gender' name='gender'  required/>Male
                    <input type='radio'  placeholder='Gender' name='gender' required/>Female
                    <input type='radio' placeholder='Gender' name='gender'  required/>Other
                
                    <select name='subject' id='subject' required>
                        <option value='Corprate Law'>Corprate Law</option>
                        <option value='Family Law'>Family Law</option>
                        <option value='Criminal Law'>Criminal Law</option>
                        <option value='Real Estate Law'>Real Estate Law</option>
                    </select>

                    <textarea name='message' id='message' cols='30' rows='10'
                        placeholder='Drop a Message' />
                
                    <button className='btn-1' type='button'>Reset</button>
                    <button className='btn-1' type='submit'>Submit</button>
                </div>
            </div>
        </form>
    )
}

export default Form;
