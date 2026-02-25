import { FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

export const metadata = { title: 'Contact | Carl\'s Handyman' };

export default function Contact() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary-blue to-blue-600 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl">Get in touch for a free estimate</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <FaPhone className="text-primary-orange text-2xl mt-1" />
                <div><h3 className="font-bold text-lg mb-2">Phone</h3><a href="tel:2253240219" className="text-2xl text-primary-orange hover:underline">(225) 324-0219</a></div>
              </div>
              <div className="flex items-start gap-4">
                <FaMapMarkerAlt className="text-primary-orange text-2xl mt-1" />
                <div><h3 className="font-bold text-lg mb-2">Address</h3><p>8033 Versailles Ave<br />Denham Springs, LA 70706</p></div>
              </div>
              <div className="flex items-start gap-4">
                <FaClock className="text-primary-orange text-2xl mt-1" />
                <div><h3 className="font-bold text-lg mb-2">Hours</h3><p>Monday - Friday: 7:00 AM - 5:00 PM<br />Weekends: Closed</p></div>
              </div>
            </div>
            <div className="bg-primary-orange text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Free Estimates</h3>
              <p className="text-lg mb-6">Call today for your no-obligation free estimate. We'll discuss your project and provide an honest assessment.</p>
              <a href="tel:2253240219" className="bg-white text-primary-orange hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition block text-center">(225) 324-0219</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
