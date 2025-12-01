import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import Banner from "@/components/banner/Banner";
import Carousel from "@/components/carousel/Carousel";
import ServicesCarousel from "@/components/servicesCarousel/ServicesCarousel";
import Portfolio from "@/components/portfolio/Portfolio";
import Video from "@/components/video/Video";
import CarouselFoot from "@/components/CarouselFoot/CarouselFoot";
import Footer from "@/components/Footer/Footer";

export function HomePage() {
  return (
    <>
      <Header />

      <Navbar />

      <main>
        <Banner />

        <Carousel variant="imgcarousel" />

        <section id="productos">
          <ServicesCarousel />
        </section>

        <section id="portafolio">
          <Portfolio />
        </section>

        <Video />

        <Carousel variant="teamcarousel" />

        <CarouselFoot />

        <section id="contáctanos">
          <Footer />
        </section>

        {/* <section
                     id="contacto"
                     className="h-screen bg-gradient-to-tr from-red-300 to-blue-700 flex items-center justify-center"
                  >
                  <h2 className="text-4xl font-bold text-red-800">Footer</h2>
               </section> */}
      </main>
    </>
  );
}
