import React, { useState } from 'react';
import Modal from '../UI/Modal';
import Button from '../UI/Button';

const ConsultationFormModal = ({ isOpen, onClose }) => {
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const today = new Date().toISOString().split('T')[0]; // yyyy-mm-dd

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!date || !name.trim() || !phone.trim()) {
      setError('Please fill in all fields.');
      return;
    }

    setSubmitting(true);

    try {
      const response = await fetch('http://192.168.31.218:4000/schedule-consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ date, name, phone })
      });

      const data = await response.json();

      if (response.ok) {
        setSuccess('Consultation scheduled successfully!');
        setDate('');
        setName('');
        setPhone('');
      } else {
        setError(data.error || 'Failed to schedule consultation.');
      }
    } catch (err) {
      setError('Failed to schedule consultation. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Schedule Free Consultation">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-white mb-1">
            Select Date
          </label>
          <input
            type="date"
            id="date"
            min={today}
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-white mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-md border border-gray-600 bg-gray-800 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        {success && <p className="text-green-500 text-sm">{success}</p>}
        <div className="flex justify-end">
          <Button type="submit" variant="primary" size="md" disabled={submitting}>
            {submitting ? 'Scheduling...' : 'Schedule'}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default ConsultationFormModal;
