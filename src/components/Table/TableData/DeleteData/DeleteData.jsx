import React from 'react'
import './DeleteData.css';
const DeleteData = ({ showSwitch, unShow, handleDelete, num }) => {
    return (
        <div className='delete-popup-container' style={{ display: showSwitch }}>
            <div className="delete-icons">
                <img src="./images/real-delete.svg" alt="delete" />
                <span onClick={unShow}>
                    <img src="./images/cross.svg" className='cross' alt="cross" />
                </span>
            </div>
            <div className="delete-user">
                <h4>Delete user?</h4>
                <p>Are you sure you want to delete this user? This action cannot be undone.</p>
            </div>
            <div className="buttons-delete-cancel">
                <button className='delete-done' onClick={() => handleDelete(num)}>Delete</button>
                <button className='cancel-done' onClick={unShow}>Cancel</button>
            </div>
        </div>
    )
}

export default DeleteData