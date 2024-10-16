// src/components/UpdateUser.js

import React from 'react';

const UpdateUser = ({ name, email, role, onChangeName, onChangeEmail, onChangeRole, onUpdateUser }) => {
    return (
        <div className="mb-4">
            <input
                type="text"
                className="form-control mb-2"
                placeholder="Nama"
                value={name}
                onChange={(e) => onChangeName(e.target.value)}
            />
            <input
                type="email"
                className="form-control mb-2"
                placeholder="Email"
                value={email}
                onChange={(e) => onChangeEmail(e.target.value)}
            />
            <select
                className="form-control mb-2"
                value={role}
                onChange={(e) => onChangeRole(e.target.value)}
            >
                <option value="">Pilih Role</option>
                <option value="Mid Lane">Mid Lane</option>
                <option value="Jungle">Jungle</option>
                <option value="Exp Lane">Exp Lane</option>
                <option value="Gold Lane">Gold Lane</option>
            </select>
            <button className="btn btn-success" onClick={onUpdateUser}>
                Update Pengguna
            </button>
        </div>
    );
};

export default UpdateUser;
