import { Link, useLocation } from 'react-router-dom';

const footerInfo1 = [
  'Website terms of use',
  'Terms and Conditions for Online Product Sales',
  'Online Privacy Policy',
  'Cookie Policy',
];

const footerInfo2 = [
  'customerserviceeurope@diptyqueparis.com',
  "Service Clients, Diptyque SAS, 5 avenue de l'Opéra, 75001, Paris.",
  '+33 (0)1 56 81 17 00',
  'Copyright © Diptyque. All Rights Reserved',
];

const snsIconSrc = [
  {
    name: 'facebook',
    imgSrc:
      'https://raw.githubusercontent.com/2mightyMt/diptyqueStatic1/9ebc19aa230c350039a13b9e168b7c5437811893/images/footer/facebook.svg',
  },
  {
    name: 'instagram',
    imgSrc:
      'https://raw.githubusercontent.com/2mightyMt/diptyqueStatic1/9ebc19aa230c350039a13b9e168b7c5437811893/images/footer/instagram.svg',
  },
  {
    name: 'twitter',
    imgSrc:
      'https://raw.githubusercontent.com/2mightyMt/diptyqueStatic1/9ebc19aa230c350039a13b9e168b7c5437811893/images/footer/twitter.svg',
  },
  {
    name: 'youtube',
    imgSrc:
      'https://raw.githubusercontent.com/2mightyMt/diptyqueStatic1/9ebc19aa230c350039a13b9e168b7c5437811893/images/footer/youtube.svg',
  },
  {
    name: 'linkedin',
    imgSrc:
      'https://raw.githubusercontent.com/2mightyMt/diptyqueStatic1/9ebc19aa230c350039a13b9e168b7c5437811893/images/footer/linkedin.svg',
  },
];

const Footer = () => {
  const location = useLocation();
  const isMain = location.pathname === '/';
  const footerTextStyle = 'text-body4 text-lightgrey-1';
  return (
    <footer
      className={`mx-auto w-full px-10 py-[50px] bg-darkgrey-3 tablet:py-0 tablet:px-[60px] mobile:px-4 ${isMain && 'hidden'}`}
    >
      <div className="footer-info flex flex-row justify-between items-center px-[80px] py-[100px] tablet:py-[80px] tablet:flex-col tablet:gap-[80px] tablet:px-0 mobile:py-[60px]">
        <Link to="/" className="footer-logo-area">
          <h1>
            <img
              src="https://github.com/2mightyMt/diptyqueStatic1/blob/main/images/footer/logo_white.png?raw=true"
              alt="diptyque"
              className="w-[20vw] min-w-[200px] tablet:w-[184px]"
            />
            <span className="sr-only">DIPTYQUE</span>
          </h1>
        </Link>
        <div className="footer-info-area flex flex-row justify-between w-[52vw] tablet:w-full mobile:flex-col mobile:gap-[60px]">
          <div className="flex flex-col gap-5">
            {footerInfo1.map((item, idx) => (
              <span key={idx} className={footerTextStyle}>
                {item}
              </span>
            ))}
          </div>
          <div className="flex flex-col gap-5">
            {footerInfo2.map((item, idx) => (
              <span key={idx} className={footerTextStyle}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-darkgrey-1"></div>
      <div className="footer-sns flex flex-row gap-5 justify-center items-center mx-auto py-[100px] tablet:py-[80px] mobile:py-[60px]">
        {snsIconSrc.map((item, idx) => (
          <div key={idx}>
            <img src={item.imgSrc} alt={item.name} />
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
