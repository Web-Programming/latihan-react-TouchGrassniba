// src/components/AddUser.js

import React from 'react';

const AddUser = ({ name, email, role, onChangeName, onChangeEmail, onChangeRole, onAddUser }) => {
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
            <button className="btn btn-primary" onClick={onAddUser}>
                Tambah Pengguna
            </button>
        </div>
    );
};

export default AddUser;
