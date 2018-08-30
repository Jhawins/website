import React, { Component } from 'react';

import logo from '../../static/images/kernelcon_w_trans.png';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className='footer-bar'>
        <div className='container footer'>
          <div className='footer-brand'>
            <div className='footer-logo'>
              <img src={logo}
                height="30"
                alt="logo"/>
            </div>
            <div className='footer-social'>
              <a href='http://twitter.com/_kernelcon_'
                target='_blank'
                rel='noopener noreferrer'>
                <svg className='footer-social-icons'
                  aria-labelledby='twitter-icon'
                  role='img'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title id='twitter-icon'>Twitter icon</title>
                  <path d='M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z'/>
                </svg>
              </a>
              <a href='#'
                target='_blank'
                rel='noopener noreferrer'>
                <svg className='footer-social-icons'
                  aria-labelledby='facebook-icon'
                  role='img'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title id='facebook-icon'>Facebook icon</title>
                  <path d='M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0'/>
                </svg>
              </a>
              <a href='#'
                target='_blank'
                rel='noopener noreferrer'>
                <svg className='footer-social-icons'
                  aria-labelledby='linkedin-icon'
                  role='img'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <title id='linkedin-icon'>LinkedIn icon</title>
                  <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/>
                </svg>
              </a>
            </div>
          </div>
          <span className='footer-options'>
            <div className='footer__menu'>
              <div className='copy'>Copyright 2018 Kernelcon, LLC. All Rights Reserved.</div>
              
            </div>
          </span>
        </div>
      </div>
    );
  }
}

export default Footer;
