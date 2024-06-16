import React, { useState, useEffect, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import './ManageContacts.css';

const ManageContacts = () => {
    const { user } = useContext(AuthContext);
    const [contacts, setContacts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchContacts();
    }, []);

    const fetchContacts = async () => {
        if (user && user.token) {
            try {
                const response = await fetch('http://localhost:5000/api/contacts', {
                    headers: {
                        'Authorization': `Bearer ${user.token}`,
                    },
                });
                if (!response.ok) {
                    throw new Error('Failed to fetch contacts');
                }
                const data = await response.json();
                setContacts(data);
            } catch (error) {
                setError(error.message);
            }
        } else {
            setError('User not authenticated or token is missing');
        }
    };

    if (error) return <div>Error: {error}</div>;

    return (
        <div className="manage-contacts">
            <h3>Manage Contacts</h3>
            <ul>
                {contacts.map(contact => (
                    <li key={contact._id}>
                        <p>{contact.message}</p>
                        <p><strong>{contact.name}</strong> - {contact.email}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ManageContacts;
