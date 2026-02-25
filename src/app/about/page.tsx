import { FaStar } from 'react-icons/fa';

export const metadata = { title: 'About | Carl\'s Handyman' };

export default function About() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary-blue to-blue-600 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">About Carl's Handyman</h1>
          <div className="flex gap-1 text-yellow-400 text-2xl">
            <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold mb-6">Quality Handyman Services</h2>
          <p className="text-lg mb-6">With a perfect 5.0 star rating, Carl's Handyman has built a reputation for quality workmanship and reliable service in Denham Springs. Whether it's a small repair or a major renovation project, we approach every job with the same level of professionalism and attention to detail.</p>
          <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
          <ul className="space-y-3 text-lg">
            <li>✓ Perfect 5.0 star customer rating</li>
            <li>✓ Over 5 years of experience</li>
            <li>✓ Quality materials and workmanship</li>
            <li>✓ Fair, honest pricing</li>
            <li>✓ Reliable and on-time service</li>
            <li>✓ Licensed and insured</li>
          </ul>
        </div>
      </section>
    </>
  );
}
