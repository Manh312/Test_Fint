import './styles.scss';

import { footerData } from '@/components/Footer/mock';
import Container from '@/components/ui/Container';
import Icon from '@/components/ui/Icon';

import FImage from '../shared/FImage';
import FooterIcon from './FooterIcon/index';

const Footer = () => (
  <footer
    className="text-white font-sans"
    style={{
      backgroundImage: 'url(/assets/fint/footer-image-wide.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <Container className="py-[100px] relative z-20">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-9 xl:px-0 px-8">
        {/* Company Info */}
        <div id="left-col" className="flex flex-col space-y-4 justify-between">
          <div id="company-info" className="flex flex-col space-y-4">
            <FImage src="fint/fint-footer-logo.png" width={199} height={70} className="text-white" alt="fint-logo" />
            <p>{footerData.companyInfo.description}</p>
            <div className="space-y-3 pt-2 content-medium-16">
              <div className="flex items-center space-x-3">
                <FooterIcon iconName="isax-call-calling" />
                <span className="text-sm">{footerData.companyInfo.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <FooterIcon iconName="isax-sms" />
                <span className="text-sm">{footerData.companyInfo.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <FooterIcon iconName="isax-location" />
                <a href={footerData.companyInfo.address.url} target="_blank">
                  <span
                    className="text-sm hover:underline"
                  >
                    {footerData.companyInfo.address.label}
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Socials Icons */}
          <div id="social-media" className="hidden md:flex items-center justify-between ">
            <div className="flex items-center space-x-4 mb-4 sm:mb-0">
              <span className="font-semibold">Social:</span>
              {footerData.socials.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  className="bg-white/10 p-2 rounded-md hover:bg-white/20 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
            <p className="text-gray-400 block content-regular-14">{footerData.copyright}</p>
          </div>
        </div>

        <div
          id="right-col"
          className="flex flex-col justify-around items-stretch text-sm xl:pl-6 gap-12"
        >
          <div className="flex flex-row gap-8 justify-between">
            {/* Links các kiểu */}
            {footerData.links.map(linkCol => (
              <div key={linkCol.title}>
                <h3 className="text-lg font-semibold mb-4">{linkCol.title}</h3>
                <ul className={`space-y-2 ${linkCol.items.length <= 2 ? 'flex flex-col gap-4.5' : 'grid grid-cols-2 gap-4.5'}`}>
                  {linkCol.items.map(item => (
                    <li key={item.text}>
                      <a
                        href={item.href}
                        className="text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Map */}
          <a
            href={footerData.companyInfo.address.url}
            target="_blank"
            className="group relative block rounded-lg overflow-hidden shadow-lg"
          >
            {/* The Image */}
            <FImage
              src="fint/google-map.png"
              aspectRatio={151 / 63}
              alt={footerData.companyInfo.address.label}
              className="block w-full transition-transform duration-300 ease-in-out group-hover:scale-110"
            />

            {/* The Overlay */}
            <div
              className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-60"
            >
            </div>

            {/* The Icon and Text */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <Icon name="isax-map" size="5xl" />
              <p className="mt-2 font-semibold">Hiển thị trên Google Map</p>
            </div>
          </a>

          <div id="social-media" className="md:hidden flex items-center justify-between flex-col sm:flex-row gap-2">
            <div className="flex items-center space-x-4 sm:mb-0">
              <span className="font-semibold">Social:</span>
              {footerData.socials.map(social => (
                <a
                  key={social.name}
                  href={social.href}
                  className="bg-white/10 p-2 rounded-md hover:bg-white/20 transition-colors"
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
            <p className="text-gray-400 block content-regular-14">{footerData.copyright}</p>
          </div>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
