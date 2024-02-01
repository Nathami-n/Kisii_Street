import { Navbar, Hero } from "./";

const Header = () => {
  return (
    <>
      <section className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </section>
      <section>
        <Hero/>
      </section>
    </>
  );
};

export default Header;
