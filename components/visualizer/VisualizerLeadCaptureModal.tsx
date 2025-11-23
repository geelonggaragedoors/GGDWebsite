import React, { useState } from 'react';
import { LeadDetails } from '../../types/visualizer';
import VisualizerButton from './VisualizerButton';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (details: LeadDetails) => void;
  actionType: 'download' | 'email' | 'print' | 'share' | null;
}

const VisualizerLeadCaptureModal: React.FC<LeadCaptureModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  actionType
}) => {
  const [formData, setFormData] = useState<LeadDetails>({
    name: '',
    address: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', address: '', email: '', phone: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  const getTitle = () => {
    switch (actionType) {
      case 'download': return 'Download Your Design';
      case 'email': return 'Email Your Design';
      case 'print': return 'Print Your Design';
      case 'share': return 'Share Your Design';
      default: return 'Get Your Design';
    }
  };

  const getDescription = () => {
    switch (actionType) {
      case 'download': return 'Please provide your details to download your garage door design.';
      case 'email': return 'We\'ll email your design and follow up with a personalized quote.';
      case 'print': return 'Provide your details and we\'ll prepare your design for printing.';
      case 'share': return 'Share your design and get a personalized quote from our team.';
      default: return 'Please provide your contact details.';
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">{getTitle()}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-xl"
          >
            ×
          </button>
        </div>

        <p className="text-gray-600 mb-6">{getDescription()}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Property Address *
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex gap-3 pt-4">
            <VisualizerButton
              type="button"
              onClick={onClose}
              variant="outline"
              className="flex-1"
            >
              Cancel
            </VisualizerButton>
            <VisualizerButton
              type="submit"
              className="flex-1"
            >
              Continue
            </VisualizerButton>
          </div>
        </form>

        <div className="mt-4 text-xs text-gray-500 text-center">
          By continuing, you agree to receive follow-up communication from Geelong Garage Doors about your project.
        </div>
      </div>
    </div>
  );
};

export default VisualizerLeadCaptureModal;
