import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import Button from '../shared/small/Button';
import { Eye, EyeOff } from 'lucide-react';

const UserTable = () => {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: 'Alice Johnson',
      role: 'Admin',
      email: 'alice@example.com',
      password: 'alicepass',
    },
    {
      id: 2,
      name: 'Bob Smith',
      role: 'User',
      email: 'bob@example.com',
      password: 'bobpass123',
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);
  const [visiblePasswords, setVisiblePasswords] = useState({});

  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    password: '',
  });

  const handleInputChange = e => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleAddUser = () => {
    if (formData.name && formData.email && formData.role && formData.password) {
      setUsers(prev => [
        ...prev,
        {
          ...formData,
          id: prev.length + 1,
        },
      ]);
      setFormData({ name: '', role: '', email: '', password: '' });
      setIsModalOpen(false);
    } else {
      alert('Please fill all fields');
    }
  };

  const togglePasswordVisibility = id => {
    setVisiblePasswords(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const columns = [
    { name: 'Name', selector: row => row.name, sortable: true },
    { name: 'Role', selector: row => row.role, sortable: true },
    { name: 'Email', selector: row => row.email },
    {
      name: 'Password',
      cell: row => (
        <div className="flex items-center gap-2">
          <span>{visiblePasswords[row.id] ? row.password : '********'}</span>
          <button onClick={() => togglePasswordVisibility(row.id)} className="text-gray-600">
            {visiblePasswords[row.id] ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      ),
    },
  ];

  return (
    <div className="p-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold">User Table</h2>
        <div>
          <Button label="Add User" onClick={() => setIsModalOpen(true)} />
        </div>
      </div>

      <DataTable columns={columns} data={users} pagination highlightOnHover striped responsive />

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-[90%] max-w-md rounded-md bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-lg font-semibold">Add New User</h3>
            <div className="space-y-3">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full rounded border p-2"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="role"
                placeholder="Role"
                className="w-full rounded border p-2"
                value={formData.role}
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full rounded border p-2"
                value={formData.email}
                onChange={handleInputChange}
              />
              <div className="relative">
                <input
                  type={showPasswordModal ? 'text' : 'password'}
                  name="password"
                  placeholder="Password"
                  className="w-full rounded border p-2 pr-10"
                  value={formData.password}
                  onChange={handleInputChange}
                />
                <button
                  type="button"
                  className="absolute top-2 right-2 text-gray-600"
                  onClick={() => setShowPasswordModal(prev => !prev)}
                >
                  {showPasswordModal ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>
            <div className="mt-4 flex justify-end gap-2">
              <Button className="bg-red-500 hover:bg-red-600" label="Cancel" onClick={() => setIsModalOpen(false)} />
              <Button label="Add" onClick={handleAddUser} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserTable;
