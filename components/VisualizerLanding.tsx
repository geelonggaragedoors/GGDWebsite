import React from 'react';
import { IMAGES } from '../constants';

interface VisualizerLandingProps {
  onStart: () => void;
}

const VisualizerLanding: React.FC<VisualizerLandingProps> = ({ onStart }) => {
  return (
    <>
      <style>{`
        .door-visualiser {
            font-family: "Urbanist", sans-serif;
            height: 100vh;
            width: 100%;
            overflow: hidden;
        }
        .door-visualiser .hero-wrapper {
            background-image: url(https://admin.bnd.com.au/media/kbzdpraf/bd-website-landing-page-image-01.png?rmode=max&width=8000&height=3742);
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: sans-serif;
        }
        .hero-card-wrapper {
            background-color: white;
            height: 100%;
            width: 100%;
            max-width: 720px;
            margin: 0 auto;
            padding: 120px 40px 0px 40px;
            box-sizing: border-box;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            z-index: 10;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
        .hero-logo-wrapper {
            margin-bottom: 2rem;
        }
        .hero-logo {
            height: 130px;
            width: auto;
            max-width: 100%;
            object-fit: contain;
        }
        .hero-title {
            font-size: 70px;
            font-weight: 700;
            color: black;
            line-height: 1.5;
            margin-bottom: 30px;
            word-break: break-word;
        }
        .hero-subtitle {
            font-size: 32px;
            font-weight: 500;
            color: black;
            margin-bottom: 4rem;
            word-break: break-word;
        }
        .button.primary {
            background-color: #E31E24;
            color: white;
            font-weight: 700;
            padding: 16px 48px;
            border-radius: 4px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
            font-size: 18px;
            transition: all 0.2s;
            margin-bottom: 2rem;
            display: inline-block;
            cursor: pointer;
            border: none;
            text-decoration: none;
        }
        .button.primary:hover {
            background-color: #c4151b;
            transform: translateY(-2px);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        }
        .hero-disclaimer-text {
            color: black;
            margin-top: auto;
            padding-top: 1.5rem;
            padding-bottom: 1.5rem;
            border-top: 1px solid #f3f4f6;
            width: 100%;
        }
        .hero-disclaimer-text p, .hero-disclaimer-text div {
            font-size: 14px;
            line-height: 17px;
            font-family: sans-serif;
            text-align: center;
            font-variation-settings: "wght" 500;
        }
        .text-pt-red { color: #E31E24; }
        
        p, div, dd, dt, th, td, span, a {
            font-family: "Urbanist", sans-serif;
            font-size: 17px; /* Fallback */
            font-size: 1.0625rem;
            font-variation-settings: "wght" 500;
            line-height: 1.5;
            word-break: break-word;
        }
        
        @media (min-width: 992px) {
            p, div, dd, dt, th, td, span, a {
                font-size: 17px;
                font-size: 1.0625rem;
            }
        }
        
        /* HTML specific overrides to match structure */
        main.no-header {
            padding-bottom: 0 !important;
        }
      `}</style>

      <main role="main" className="pb-3 no-header" style={{ paddingBottom: 0 }}>
        <div className="door-visualiser">
          <div className="hero-wrapper">
            <div className="hero-card-wrapper">
              <div className="flex flex-col items-center w-full">
                <div className="hero-logo-wrapper">
                  <img 
                    loading="lazy" 
                    src="/presets/logo-white.webp"
                    className="hero-logo" 
                    alt="B&D Garage Doors"
                  />
                </div>
                <h1 className="hero-title highlightPeriod">
                  Door Visualiser<span className="text-pt-red">.</span>
                </h1>
                <h2 className="hero-subtitle">
                  Transform your Garage Door
                </h2>
                
                <div className="button primary" onClick={onStart}>
                  Start Now
                </div>
              </div>

              <div className="hero-disclaimer-text">
                <p style={{ marginBottom: '12px' }}>
                  The B&D Door Visualiser is intended as a design guide only. &nbsp;While all door colours and finishes are represented as accurately as possible, we strongly recommend viewing an actual product sample before making a purchase.
                </p>
                <p>
                  Wooden & Timber Look and Natural-Look Finishes are designed to closely replicate realistic textures. However, variations in panel colour and texture may occur due to the sublimation and powder coating processes. All measurements displayed are approximate. &nbsp;Information provided within this tool is not intended for official quoting or measurement purposes. For more information, please call <b>13 62 63</b> or visit your nearest authorised B&D Dealer. © 2025 B&D Australia Pty Ltd. ABN 25 010 473 971. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default VisualizerLanding;
