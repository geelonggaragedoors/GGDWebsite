import React from 'react';
import { ProductContent } from '../contentTypes';

export const GALLERY_CONTENT: Record<string, ProductContent> = {
  "Videos": {
    title: "Garage Door Video Gallery",
    intro: "See our doors in action: Installation demos, noise tests, and product showcases.",
    description: (
      <>
        <p className="mb-8">
          They say a picture is worth a thousand words, but a video lets you hear the difference. 
          Watch our library of installation highlights, product reviews, and "noise tests" to see why Geelong Garage Doors is the region's trusted expert.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-pt-dark-grey-1 mb-2">Merlin Commander - Noise Test</h3>
            <div className="aspect-video rounded-lg overflow-hidden shadow-md">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Jg83v_Yj6qU" title="Merlin" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-pt-dark-grey-1 mb-2">B&D Panelift Icon - Features</h3>
            <div className="aspect-video rounded-lg overflow-hidden shadow-md">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Cmx80ckoWOc" title="B&D" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-pt-dark-grey-1 mb-2">Industrial Shutter Operation</h3>
            <div className="aspect-video rounded-lg overflow-hidden shadow-md">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/cWSB1zePwso" title="Roller Door" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
          <div>
            <h3 className="font-bold text-pt-dark-grey-1 mb-2">Smart Phone Control (myQ)</h3>
            <div className="aspect-video rounded-lg overflow-hidden shadow-md">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/4sF7C7Y7W7w" title="myQ" frameBorder="0" allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </>
    ),
    features: [
      { title: "Real Installs", text: "See our actual work in Geelong homes." },
      { title: "Sound Checks", text: "Hear how quiet a Belt Drive really is." },
      { title: "Tutorials", text: "Learn how to operate manual release cords." },
      { title: "Product Demos", text: "Deep dives into B&D and Merlin features." }
    ],
    internalLinks: [
      { label: "View Photo Gallery", url: "/photos/", image: "/images/generated/photos.png" },
      { label: "Subscribe to YouTube", url: "https://www.youtube.com/@GeelongGarageDoors", image: "/images/generated/contact-us.png" }
    ]
  }
};
