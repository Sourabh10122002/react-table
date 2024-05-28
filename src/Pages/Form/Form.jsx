import './Form.css';
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const FormData = ({ data, setData }) => {

    const updatedData = [...data];
    const navigate = useNavigate();
    const location = useLocation();
    const idx = location.state || {}
    console.log(idx);

    const handleChange = (e) => {
        const { name, value } = e.target;
        const [mainProp, subProp] = name.split(".");
        if (subProp) {
            updatedData[idx][mainProp][subProp] = value;
        } else {
            updatedData[idx][name] = value;
        }
        setData(updatedData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/');
    };

    const handleHome = () => {
        navigate('/');
    }

    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit}>
                <label className='label-field'>
                    ID:
                </label>
                <input type="text" className='input-field' name="id" value={data[idx].id} onChange={handleChange} />
                <label className='label-field'>
                    Name:
                </label>
                <input type="text" className='input-field' name="name" value={data[idx].name} onChange={handleChange} />
                <label className='label-field'>
                    Username:
                </label>
                <input type="text" className='input-field' name="username" value={data[idx].username} onChange={handleChange} />
                <label className='label-field'>
                    Zipcode:
                </label>
                <input type="text" className='input-field' name="address.zipcode" value={data[idx].address.zipcode} onChange={handleChange} />
                <label className='label-field'>
                    Phone:
                </label>
                <input type="text" className='input-field' name="phone" value={data[idx].phone} onChange={handleChange} />
                <label className='label-field'>
                    City:
                </label>
                <input type="text" className='input-field' name="address.city" value={data[idx].address.city} onChange={handleChange} />
                <label className='label-field'>
                    Suite:
                </label>
                <input type="text" className='input-field' name="address.suite" value={data[idx].address.suite} onChange={handleChange} />
                <button className='submitBtn' type='submit'>Submit</button>
                <button className='cancel-form-btn' onClick={handleHome}>Cancel</button>
            </form>
        </div>
    );
};

export default FormData;
