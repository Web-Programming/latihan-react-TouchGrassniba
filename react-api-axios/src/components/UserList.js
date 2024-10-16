// src/components/UserList.js

import React from 'react';

const UserList = ({ users, onEdit, onDelete }) => {
    return (
        <div className="list-group">
            {users.map(user => (
                <div key={user.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <div>
                        {user.first_name} - {user.email} - {user.role} 
                    </div>
                    <div>
                        <button className="btn btn-warning btn-sm me-2" onClick={() => onEdit(user)}>Edit</button>
                        <button className="btn btn-danger btn-sm" onClick={() => onDelete(user.id)}>Hapus</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserList;
