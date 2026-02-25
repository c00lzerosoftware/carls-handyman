export const metadata = { title: 'Services | Carl\'s Handyman', description: 'Handyman services including home repairs, decks, fences, painting, and carpentry in Denham Springs.' };

export default function Services() {
  const services = [
    { title: 'Carpentry', items: ['Decks', 'Fences', 'Trim work', 'Framing'] },
    { title: 'Home Repairs', items: ['Drywall repair', 'Door/window repair', 'Soffit/fascia', 'General repairs'] },
    { title: 'Kitchen & Bath', items: ['Cabinet installation', 'Counter tops', 'Tile work', 'Updates'] },
    { title: 'Painting', items: ['Interior painting', 'Exterior painting', 'Deck staining', 'Cabinet painting'] },
    { title: 'Outdoor', items: ['Deck construction', 'Fence installation', 'Patio covers', 'Outdoor repairs'] },
    { title: 'Maintenance', items: ['Seasonal repairs', 'Preventive maintenance', 'Property upkeep', 'Handyman services'] },
  ];

  return (
    <>
      <section className="bg-gradient-to-r from-primary-blue to-blue-600 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">Professional handyman and home repair services</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4 text-primary-blue">{service.title}</h3>
                <ul className="space-y-2">
                  {service.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <span className="text-primary-orange">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <a href="tel:2253240219" className="btn-primary">Call for Free Estimate</a>
          </div>
        </div>
      </section>
    </>
  );
}
