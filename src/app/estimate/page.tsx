'use client';
import { useState } from 'react';

export default function Estimate() {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', address: '', details: '' });
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); alert('Thank you! We will contact you within 24 hours.'); };

  return (
    <>
      <section className="bg-gradient-to-r from-primary-blue to-blue-600 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Get Free Estimate</h1>
          <p className="text-xl">Call (225) 324-0219 or fill out the form below</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-custom max-w-3xl">
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
            <div><label className="block font-semibold mb-2">Name *</label><input type="text" required className="w-full border border-gray-300 rounded-lg p-3" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} /></div>
            <div className="grid md:grid-cols-2 gap-6">
              <div><label className="block font-semibold mb-2">Phone *</label><input type="tel" required className="w-full border border-gray-300 rounded-lg p-3" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} /></div>
              <div><label className="block font-semibold mb-2">Email</label><input type="email" className="w-full border border-gray-300 rounded-lg p-3" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} /></div>
            </div>
            <div><label className="block font-semibold mb-2">Address *</label><input type="text" required className="w-full border border-gray-300 rounded-lg p-3" value={formData.address} onChange={(e) => setFormData({...formData, address: e.target.value})} /></div>
            <div><label className="block font-semibold mb-2">Project Details</label><textarea rows={5} className="w-full border border-gray-300 rounded-lg p-3" placeholder="Describe your project..." value={formData.details} onChange={(e) => setFormData({...formData, details: e.target.value})}></textarea></div>
            <button type="submit" className="btn-primary w-full text-lg">Submit Request</button>
          </form>
        </div>
      </section>
    </>
  );
}
