import { FOOTDATA, HEADER } from "../../db/db";
import Button from "../Button";
import SocialFooter from "./SocialFooter";

function Footer() {
  return (
    <footer className={`${FOOTDATA.textColor === ""? "text-black" : FOOTDATA.textColor} pt-5 lg:pt-15 relative bg-bottom bg-cover bg-no-repeat`}  style={{ backgroundImage: FOOTDATA.backgroundImage }}>
      <div className="relative z-[1] max-w-screen-xl mx-auto px-4 pb-5">
        <div className="grid grid-cols-12 md:gap-7.5 gap-5">
          {/* Company Section */}
          {/* <div className="lg:col-span-2 sm:col-span-3 col-span-5">
            <div className="sm:mb-12">
              <h3 className="mb-5 text-base md:text-lg font-bold font-nunito uppercase">Company</h3>
              <ul className="mt-1.25 space-y-2.5">
                {[
                  { label: "Home", href: "index.html" },
                  { label: "About Us", href: "about-us.html" },
                  { label: "Our Team", href: "team.html" },
                  { label: "Booking", href: "booking.html" },
                  { label: "Contact Us", href: "contact.html" }
                ].map((item, i) => (
                  <li key={i} className="relative pl-3.75 flex items-center gap-2 before:content-['\f105'] before:absolute before:left-0 before:text-xxs before:font-['FontAwesome']">
                    <a className="text-sm" href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}

          {/* Useful Link Section */}
          {/* <div className="lg:col-span-2 sm:col-span-3 col-span-7">
            <div className="sm:mb-12">
              <h3 className="mb-5 text-base md:text-lg font-bold font-nunito uppercase">Useful Link</h3>
              <ul className="mt-1.25 space-y-2.5">
                {[
                  { label: "Shop", href: "shop-columns-sidebar.html" },
                  { label: "Checkout", href: "shop-checkout.html" },
                  { label: "Cart", href: "shop-cart.html" },
                  { label: "Login", href: "shop-login.html" },
                  { label: "Register", href: "shop-login.html" }
                ].map((item, i) => (
                  <li key={i} className="relative pl-3.75 flex items-center gap-2 before:content-['\f105'] before:absolute before:left-0 before:text-xxs before:font-['FontAwesome']">
                    <a className="text-sm" href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div> */}

          {/* Contact Section */}
          <div className="lg:col-span-4 sm:col-span-6 col-span-12">
            <div>
              <h3 className="mb-5 md:mb-7.5 text-base md:text-lg font-bold font-nunito uppercase">Contáctanos</h3>
              <ul className="space-y-5">
                <li className="relative pl-4.75 text-sm leading-6 font-lato">
                  <i className="ti-location-pin absolute left-0 top-1.5 text-xl"></i>
                  <strong className="pl-1">DIRECCIÓN</strong><br />
                  {HEADER.location}
                </li>
                <li className="relative pl-4.75 text-sm leading-6 font-lato">
                  <i className="ti-mobile absolute left-0 top-1.5 text-xl"></i>
                  <strong className="pl-1">TELÉFONO</strong><br />
                  { HEADER.cellphone }
                </li>
                <li className="relative pl-4.75 text-sm leading-6 font-lato">
                  <i className="ti-email absolute left-0 top-1.5 text-xl"></i>
                  <strong className="pl-1">CORREO</strong><br />
                  {HEADER.email}
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-4 lg:col-start-9 col-span-12">
            <div className="mb-12">
              <h3 className="mb-5 md:mb-8 text-base md:text-lg font-bold font-nunito uppercase">{FOOTDATA.subTitleEnd}</h3>
              <p className="mb-5 text-sm leading-6">
                {FOOTDATA.textEnd}
              </p>
              <form className="flex gap-2 mb-5" method="post">
                {/* <input type="email" className="flex-auto border-2 rounded-3xl px-5 py-2.5 text-sm" placeholder="Your Email Address" required /> */}
                <Button variant="secondary">Suscribirse</Button>
              </form>
              <ul className="flex gap-2">
                {FOOTDATA.socialItems.map((item, idx) => (
                  <SocialFooter
                    key={idx}
                    ref={item.socialRef}
                    icon={item.socialIcon}
                    style={item.socialStyle}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-3 bg-[#f9e8f9]">
        <div className="max-w-screen-xl mx-auto px-4">
          <div className="grid grid-cols-12">
            <div className="sm:col-span-6 col-span-12 text-center md:text-left text-sm text-black opacity-70 cursor-default">
              Copyright © <span className="current-year">2025</span>
            </div>
            <div className="sm:col-span-6 col-span-12 text-center md:text-right">
              <ul className="text-sm text-black opacity-70">
                <li className="inline-block pr-3.5 relative after:absolute after:right-0">
                  <a href="contact.html">Desarrollado por Facturala.pe</a>
                </li>
                {/* <li className="inline-block pl-3 relative">
                  <a className="hover:text-primary duration-500" href="contact.html">Privacy Policy</a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
