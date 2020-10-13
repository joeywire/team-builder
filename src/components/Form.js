import React from 'react';
import '../App.css';

function Form(props) {
    const {values, update, submit} = props;

    const onChange = (evt) => {
        const {name, value} = evt.target;
        update(name, value);
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }

    return (
        <div>
            <h2>Add a Team Member!</h2>
            <form className="form-container" onSubmit={onSubmit}>
                <label>Name:
                    <input 
                        type='text'
                        name='name'
                        onChange={onChange}
                        value={values.name}
                        placeholder='Enter Members Name'
                        maxLength='50'
                        />
                </label>
                <label>Email:
                    <input 
                        type='email'
                        name='email'
                        onChange={onChange}
                        value={values.email}
                        placeholder='Enter Members Email'
                        maxLength='50'
                        />
                </label>
                <label>Location:
                    <input 
                        type='text'
                        name='location'
                        onChange={onChange}
                        value={values.location}
                        placeholder='Enter Members Location'
                        maxLength='50'
                        />
                </label>
                <label>Role: 
                    <select name='role' value={values.role} onChange={onChange}>
                        <option value="">- Select One -</option>
                        <option value="Team Lead">Team Lead</option>
                        <option value="Customer Support">Customer Support</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Full-Stack Engineer">Full Stack Engineer</option>
                        <option value="Finance">Finance</option>
                    </select>
                </label>
                <div className='submit'>
                    <button>submit</button>
                </div>
            </form>
        </div>
    );
}

export default Form;