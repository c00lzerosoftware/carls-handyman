export const metadata = { title: 'Project Gallery | Carl\'s Handyman' };

export default function Gallery() {
  return (
    <>
      <section className="bg-gradient-to-r from-primary-blue to-blue-600 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl font-bold mb-4">Our Work</h1>
          <p className="text-xl">Quality craftsmanship on every project</p>
        </div>
      </section>
      <section className="py-16">
        <div className="container-custom text-center">
          <p className="text-xl mb-8">5.0 star rated quality work. Call to discuss your project and see examples of similar work.</p>
          <a href="tel:2253240219" className="btn-primary">Call (225) 324-0219</a>
        </div>
      </section>
    </>
  );
}
