import React from 'react';
import './Form.css';

const Form = () => {
    const [result, setResult] = React.useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult('Sending....');
        const formData = new FormData(event.target);

        formData.append('access_key', '53d381eb-b09f-4201-97ba-25c8572c01f6');

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult('Form Submitted Successfully');
            event.target.reset();
        } else {
            console.log('Error', data);
            setResult(data.message);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <div className="form-container">
                <div className="form-dsc">
                    <h3>You can Book and Appointment Here !</h3>
                    <p className="visage">
                        We're always on the duty of protecting the FUTURE of our
                        clients.
                    </p>
                </div>
                <div className="form-data">
                    <input
                        type="text"
                        placeholder="Your Name"
                        name="your name"
                        required
                    />

                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                        hidden
                    />

                    <input
                        type="text"
                        placeholder="Phone Number"
                        name="Phone Number"
                        required
                        hidden
                    />

                    <input
                        type="hidden"
                        name="subject"
                        value={`${Name} sent  a message from Omas Legal`}
                    />

                    {/* <input type='radio' placeholder='Gender' name='gender'  required/>Male
                    <input type='radio'  placeholder='Gender' name='gender' required/>Female
                    <input type='radio' placeholder='Gender' name='gender'  required/>Other*/}
                    {/* <select name='subject' id='subject' required>
                        <option value='Corprate Law'>Corprate Law</option>
                        <option value='Family Law'>Family Law</option>
                        <option value='Criminal Law'>Criminal Law</option>
                        <option value='Real Estate Law'>Real Estate Law</option>
                    </select> */}

                    <textarea
                        name="message"
                        id="message"
                        cols="30"
                        rows="10"
                        placeholder="Drop a Message"
                    />

                    <button className="btn-1" type="submit">
                        Submit
                    </button>
                </div>
                <span>{result}</span>
            </div>
        </form>
    );
};

export default Form;
