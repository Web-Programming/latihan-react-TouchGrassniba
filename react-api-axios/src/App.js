// src/App.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';

const roles = ["Mid Lane", "Jungle", "Exp Lane", "Gold Lane"];

const getRandomRole = () => {
    return roles[Math.floor(Math.random() * roles.length)];
};

const App = () => {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');
    const [updateId, setUpdateId] = useState(null);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('https://reqres.in/api/users');
            const usersWithRandomRoles = response.data.data.map(user => ({
                id: user.id,
                first_name: user.first_name,
                email: user.email,
                role: getRandomRole() 
            }));
            setUsers(usersWithRandomRoles);
        } catch (error) {
            console.error("Error fetching users:", error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const handleAddUser = async () => {
        if (!name || !email || !role) {
            alert("Harap Semua Data Diisi");
            return;
        }

        try {
            const response = await axios.post('https://reqres.in/api/users', {
                name,
                email,
                role: getRandomRole() 
            });
            setUsers([...users, { id: response.data.id, first_name: name, email, role }]);
            setName('');
            setEmail('');
            setRole('');
            alert("Akun Player HOK Berhasil Ditambahkan");
        } catch (error) {
            console.error("Error adding user:", error);
        }
    };

    const handleDeleteUser = async (id) => {
        const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus akun ini?");
        if (!confirmDelete) return;

        try {
            await axios.delete(`https://reqres.in/api/users/${id}`);
            setUsers(users.filter(user => user.id !== id));
        } catch (error) {
            console.error("Error deleting user:", error);
        }
    };

    const handleUpdateUser = async () => {
        if (!name || !email || !role) {
            alert("Harap Semua Data Diisi");
            return;
        }

        try {
            const response = await axios.put(`https://reqres.in/api/users/${updateId}`, {
                name,
                email,
                role 
            });
            setUsers(users.map(user => 
                user.id === updateId 
                    ? { ...user, first_name: response.data.name, email: response.data.email, role } 
                    : user
            ));
            setUpdateId(null);
            setName('');
            setEmail('');
            setRole('');
        } catch (error) {
            console.error("Error updating user:", error);
        }
    };

    return (
        <div className="container-fluid" style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
            <div className="row justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
                <div className="col-md-6">
                    <h1 className="mt-4 text-center">Akun Player Honor Of King</h1>
                    {updateId ? (
                        <UpdateUser
                            name={name}
                            email={email}
                            role={role}
                            onChangeName={setName}
                            onChangeEmail={setEmail}
                            onChangeRole={setRole}
                            onUpdateUser={handleUpdateUser}
                        />
                    ) : (
                        <AddUser
                            name={name}
                            email={email}
                            role={role}
                            onChangeName={setName}
                            onChangeEmail={setEmail}
                            onChangeRole={setRole}
                            onAddUser={handleAddUser}
                        />
                    )}
                    <UserList users={users} onEdit={(user) => {
                        setUpdateId(user.id);
                        setName(user.first_name);
                        setEmail(user.email);
                        setRole(user.role); 
                    }} onDelete={handleDeleteUser} />
                </div>
            </div>
        </div>
    );
};

export default App;
