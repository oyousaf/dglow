import React from "react";

const Treatments = () => {
  return (
    <div name="treatments" className="w-full py-[10rem] px-4 font-bold">
      <h1 className="text-pink-500 text-center font-bold text-5xl md:text-7xl">
        Treatments
      </h1>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 py-4 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 ease-in-out duration-500 bg-white">
          <h2 className="text-2xl text-pink-500 text-center py-8">Bleaching</h2>
          <div className="text-center font-bold">
            <p className="py-2 border-b mx-8 mt-4">Full Face - £10</p>
            <p className="py-2 border-b mx-8">Full Back - £20</p>
            <p className="py-2 border-b mx-8">Full Stomach - £20</p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 ease-in-out duration-500 bg-white">
          <h2 className="text-2xl text-pink-500 text-center py-8">
            Eye Treatments
          </h2>
          <div className="text-center">
            <p className="py-2 border-b mx-8 mt-4">Eyebrow Tinting - £6</p>
            <p className="py-2 border-b mx-8">Eyelash Tinting - £10</p>
            <p className="py-2 border-b mx-8">
              Eyebrow Shaping and Tinting - £12
            </p>
            <p className="py-2 border-b mx-8">Henna Brows - £20</p>
            <p className="py-2 border-b mx-8">
              Eyebrow tinting, Eyebrow Shaping with Eyelash Tint - £20
            </p>
            <p className="py-2 border-b mx-8">
              Individual Eyelash Extensions - £25
            </p>
            <p className="py-2 border-b mx-8">Eyelash Perming - £20</p>
            <p className="py-2 mx-8">
              Semi-Permanent Eyelashes from £45 (skin test will be required
              prior to treatment)
            </p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 ease-in-out duration-500 bg-white">
          <h2 className="text-2xl text-pink-500 text-center py-8">Facials</h2>
          <div className="text-center">
            <p className="py-2 border-b mx-8 mt-4">
              Mini-Facial (Cleanse, Scrub, Mask and Moisturise) - £15
            </p>
            <p className="py-2 border-b mx-8">
              Deep Cleanse (Cleanse, Deep Cleanse, Facial Massage, Exfoliate,
              Steam, Mask and Moisturise) - £30
            </p>
            <p className="py-2 border-b mx-8">
              Herbal Facial (Cleanse, Deep Cleanse, Facial Massage, Exfoliate,
              Steam, Mask and Moisturise using that herbal goodness) - £35
            </p>
            <p className="py-2 border-b mx-8">
              Lightening/Brightening Facial (Cleanse, Deep Cleanse, Facial
              Massage, lightening Scrub, Steam and Special Lightening Mask and
              Moisturise) - £35
            </p>
            <p className="py-2 border-b mx-8">
              Dermaplaning facial (Cleanse, Double cleanse, Dermaplane, Steam,
              Mask and Moisturise) - £40
            </p>
            <p className="py-2 border-b mx-8">
              Microdermabrasion - £40 per session or buy 6 sessions for £200
            </p>
            <p className="py-2 border-b mx-8">
              High Frequency - £35 per session
            </p>
            <p className="py-2 border-b mx-8">Galvanic - £35 per session</p>
            <p className="py-2  mx-8">
              Dermapen/Microneedling - £35 per session or 4 sessions for £500
            </p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 ease-in-out duration-500 bg-white">
          <h2 className="text-2xl text-pink-500 text-center py-8">
            Hairdressing
          </h2>
          <div className="text-center">
            <p className="py-2 border-b mx-8 mt-4">Dry Haircut from £12</p>
            <p className="py-2 border-b mx-8">
              Wash, Cut and Blow-Dry from £25
            </p>
            <p className="py-2 border-b mx-8">Kiddies Haircut from £8</p>
            <p className="py-2 border-b mx-8">Full Head Colouring from £35</p>
            <p className="py-2 border-b mx-8">Roots Retouch from £20</p>
            <p className="py-2 border-b mx-8">
              Colour Correction/Stripping from £40
            </p>
            <p className="py-2 border-b mx-8">Full-head Highlights from £55</p>
            <p className="py-2 border-b mx-8 ">Half-head Highlights from £35</p>
            <p className="py-2 border-b mx-8">
              Hair Extension Weaving from £6 per row
            </p>
            <p className="py-2 border-b mx-8">
              Hair Extension Glued from £5 per row
            </p>
            <p className="py-2 border-b mx-8">
              Hair Extension removing from £5
            </p>
            <p className="py-2 border-b mx-8">Micro Rings fitted from £200</p>
            <p className="py-2 border-b mx-8">Fusion Bonding from £200</p>
            <p className="py-2 border-b mx-8">Perming from £100</p>
            <p className="py-2 border-b mx-8">
              Straightening/Relaxing hair from £80
            </p>
            <p className="py-2 mx-8">
              Keratin Hair Treatment from £200 (skin tests required prior to
              treatment)
            </p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 ease-in-out duration-500 bg-white">
          <h2 className="text-2xl text-pink-500 text-center py-8">
            Hair & Makeup
          </h2>
          <div className="text-center">
            <p className="py-2 border-b mx-8 mt-4">Party Hair from £35</p>
            <p className="py-2 border-b mx-8">Party Makeup from £35</p>
            <p className="py-2 border-b mx-8">Bridal Trial from £50</p>
            <p className="py-2 border-b mx-8">
              Nikkah/Engagement/Reception Hair and Makeup from £200
            </p>
            <p className="py-2 border-b mx-8">
              Bridal Hair and Makeup from £350
            </p>
            <p className="py-2 mx-8">
              Walima Hair and Makeup from £350 (Deposit required to secure
              booking)
            </p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 ease-in-out duration-500 bg-white">
          <h2 className="text-2xl text-pink-500 text-center py-8">
            IPL Hair Removal
          </h2>
          <div className="text-center">
            <p className="py-2 border-b mx-8 mt-4">Full Face - £40</p>
            <p className="py-2 border-b mx-8">Half Face - £30</p>
            <p className="py-2 border-b mx-8">Upper Lip - £20</p>
            <p className="py-2 border-b mx-8">Chin - £20</p>
            <p className="py-2 border-b mx-8">Sides of face - £25</p>
            <p className="py-2 border-b mx-8">Cheek Bones - £20</p>
            <p className="py-2 border-b mx-8">Neck - £25</p>
            <p className="py-2 border-b mx-8">Hands - £30</p>
            <p className="py-2 border-b mx-8">Half Arms - £50</p>
            <p className="py-2 border-b mx-8">Full Arms - £80</p>
            <p className="py-2 border-b mx-8">Underarms - £40</p>
            <p className="py-2 border-b mx-8">Feet - £30</p>
            <p className="py-2 border-b mx-8">Half legs - £70</p>
            <p className="py-2 border-b mx-8">Full legs - £120</p>
            <p className="py-2 border-b mx-8">Bikini Line - £40</p>
            <p className="py-2 border-b mx-8">Bikini Full - £80</p>
            <p className="py-2 border-b mx-8">Abdominal Line - £30</p>
            <p className="py-2 border-b mx-8">Stomach Full - £70</p>
            <p className="py-2 border-b mx-8">Chest - £50</p>
            <p className="py-2 border-b mx-8">Half Back - £50</p>
            <p className="py-2 border-b mx-8">Full Back - £100</p>
            <p className="py-2 mx-8 text-pink-500">
              Pay for 6 treatments and get 2 free!
            </p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 ease-in-out duration-500 bg-white">
          <h2 className="text-2xl text-pink-500 text-center py-8">
            Manicures/Pedicures
          </h2>
          <div className="text-center">
            <p className="py-2 border-b mx-8 mt-4">Manicure - £10</p>
            <p className="py-2 border-b mx-8">Manicure with Shellac - £15</p>
            <p className="py-2 border-b mx-8">
              Manicure Deluxe - £25 (With hot oil or paraffin wax)
            </p>
            <p className="py-2 border-b mx-8">Pedicure - £10</p>
            <p className="py-2 border-b mx-8">Pedicure with Shellac - £15</p>
            <p className="py-2  mx-8">
              Pedicure Deluxe - £25 (With hot oil or paraffin wax)
            </p>
          </div>
          <h2 className="text-2xl text-pink-500 text-center py-8 mt-8">Massages</h2>
          <div className="text-center">
            <p className="py-2 border-b mx-8 mt-4">Full body - £40</p>
            <p className="py-2 border-b mx-8">Legs - £15</p>
            <p className="py-2 border-b mx-8">Arms - £12</p>
            <p className="py-2 border-b mx-8">Back - £15</p>
            <p className="py-2 border-b mx-8">Indian Head Massage - £15</p>
            <p className="py-2 border-b mx-8">Hot Stone Back Massage - £25</p>
            <p className="py-2 mx-8">Full Body Scrub and Massage - £45</p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 ease-in-out duration-500 bg-white">
          <h2 className="text-2xl text-pink-500 text-center py-8">Mehndi</h2>
          <div className="text-center">
            <p className="py-2 border-b mx-8 mt-4">Single Designs from £5</p>
            <p className="py-2 border-b mx-8">Full Hands from £10</p>
            <p className="py-2 mx-8">Bridal from £100</p>
          </div>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 ease-in-out duration-500 bg-white">
          <h2 className="text-2xl text-pink-500 text-center py-8">
            Threading/Waxing
          </h2>
          <div className="text-center">
            <p className="py-2 border-b mx-8 mt-4">Eyebrows - £5</p>
            <p className="py-2 border-b mx-8">Eyebrows Reshape - £5</p>
            <p className="py-2 border-b mx-8">Chin - £4</p>
            <p className="py-2 border-b mx-8">Full Face - £10</p>
            <p className="py-2 border-b mx-8">Neck - £5</p>
            <p className="py-2 border-b mx-8">Sides of face - £5</p>
            <p className="py-2 border-b mx-8">Forehead - £5</p>
            <p className="py-2 border-b mx-8">Half Arms - £8</p>
            <p className="py-2 border-b mx-8">Full Arms - £10</p>
            <p className="py-2 border-b mx-8">Half Legs - £10</p>
            <p className="py-2 border-b mx-8">Full Legs - £18</p>
            <p className="py-2 border-b mx-8">Bikini Line - £5</p>
            <p className="py-2 border-b mx-8">Bikini Full - £15</p>
            <p className="py-2 border-b mx-8">Underarms - £5</p>
            <p className="py-2 mx-8">Back/Stomach - £10</p>
            <p className="py-2 mx-8 mt-8 text-pink-400 text-2xl">
              Wax 'n' Glow Deals
            </p>
            <p className="py-2 border-b mx-8 mt-4">
              Full Arms, Full Legs and Under Arms - £20
            </p>
            <p className="py-2 border-b mx-8">
              Full Arms, Full Legs, Under Arms with Stomach or Back - £30
            </p>
            <p className="py-2 border-b mx-8">
              Full Arms, Full Legs, Brazilian/Hollywood + Under Arms - £35
            </p>
            <p className="py-2 border-b mx-8">
              Full Arms, Full Legs, Brazilian/Hollywood, Under Arms + Full Face
              - £50
            </p>
            <p className="py-2 mx-8">Full Body Wax from £60</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatments;
