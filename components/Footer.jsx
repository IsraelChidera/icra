import Image from 'next/image'
import React from 'react';
import footerVector1 from '../public/images/footer-vector-1.svg';
import footerVector2 from '../public/images/footer-vector-2.svg';
import line from '../public/images/footer-line-vector.svg';
import logo from '../public/images/logo.svg';
import facebook from '../public/images/facebook.png';
import twitter from '../public/images/twitter.png';
import linkedin from '../public/images/linkedin.png';
import youtube from '../public/images/youtube.png';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='about spacing-btw-elements'>      
      <Image src={footerVector1} alt="curved vector" className='footerCurveVector1' />
      <Image src={footerVector2} alt="curved vector" className='footerCurveVector2' />

      <div className='flex-footer-details'>
        <div>
          <Image src={logo} alt="logo" />
        </div>

        <div className='not-mobile'>
          <Image src={line} alt="straight line vector" />
        </div>

        <ul>
          <li>
            <Link href="#">
              ABOUT
            </Link>
          </li>

          <li>
            <Link href="#">
              SERVICES
            </Link>
          </li>

          <li>
            <Link href="#">
              TECHNOLOGIES
            </Link>
          </li>

          <li>
            <Link href="#">
              HOW TO
            </Link>
          </li>

          <li>
            <Link href="#">
              JOIN ICRA
            </Link>
          </li>

          <li>
            <Link href="#">
              ABOUT
            </Link>
          </li>
        </ul>

        <div className='not-mobile'>
          <Image src={line} alt="straight line vector" />
        </div>

        <ul>
          <li>
            <Link href="#">
              F.A.Q
            </Link>
          </li>

          <li>
            <Link href="#">
              SITEMAP
            </Link>
          </li>

          <li>
            <Link href="#">
              CONDITIONS
            </Link>
          </li>

          <li>
            <Link href="#">
              LICENSES
            </Link>
          </li>

        </ul>

        <div className='not-mobile'>
          <Image src={line} alt="straight line vector" />
        </div>

        <div>
          <h4>SOCIALIZE WITH ICRA</h4>
          <div className='footer-socials'>
            <Image src={twitter} alt="twitter logo" />
            <Image src={facebook} alt="facebook logo" />
            <Image src={linkedin} alt="linkedin logo" />
            <Image src={youtube} alt="youtube logo" />
          </div>
        </div>
      </div>

      <div className='footnotes'>
        <p>
          2023 &copy; ICRA LANDING PAGE - BY ISRAEL CHIDERA - ALL RIGHTS
          RESERVED
        </p>
      </div>
    </footer>
  )
}

export default Footer