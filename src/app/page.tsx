import Link from 'next/link';
import { FaStar, FaCheckCircle, FaTools, FaHammer, FaPaintBrush } from 'react-icons/fa';

const basePath = process.env.NODE_ENV === 'production' ? '/carls-handyman' : '';

export default function Home() {
  return (
    <>
      <section className="bg-gradient-to-br from-primary-blue via-blue-600 to-primary-blue text-white py-20">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center gap-1 text-yellow-400 text-3xl mb-4">
              <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Expert Handyman Services in Denham Springs
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              5.0 Star Rating - No Job Too Small - Free Estimates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`${basePath}/estimate`} className="btn-primary text-lg">
                Get Free Estimate
              </Link>
              <a href="tel:2253240219" className="btn-secondary text-lg">
                Call (225) 324-0219
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-gray-600">Quality home repair and improvement services</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FaHammer className="text-5xl text-primary-orange mb-4" />
              <h3 className="text-xl font-bold mb-3">Carpentry</h3>
              <p>Decks, fences, trim work, framing, and all carpentry needs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FaTools className="text-5xl text-primary-orange mb-4" />
              <h3 className="text-xl font-bold mb-3">Home Repairs</h3>
              <p>Drywall, doors, windows, soffit, fascia, and general repairs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <FaPaintBrush className="text-5xl text-primary-orange mb-4" />
              <h3 className="text-xl font-bold mb-3">Painting</h3>
              <p>Interior, exterior, deck staining, and all painting services</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Carl's Handyman?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {['Perfect 5.0 star rating', 'Over 5 years experience', 'Quality workmanship', 'Honest pricing', 'Reliable and on-time', 'Licensed and insured'].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-orange text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Call today for your free estimate!</p>
          <a href="tel:2253240219" className="bg-white text-primary-orange hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition inline-block">
            (225) 324-0219
          </a>
        </div>
      </section>
    </>
  );
}
