// import React from "react";
// import ima1 from "../assets/bed4.jpg"; // Replace with actual image paths
// import ima2 from "../assets/t2.png";
// import ima3 from "../assets/bed3.jpg";
// import serviceOne from "../assets/spa2.jpg"; // Replace with actual image paths
// import serviceTwo from "../assets/gymm.png";
// import serviceThree from "../assets/meet.jpg";
// import serviceFour from "../assets/swimpool.jpg";
// import service5 from "../assets/kitfo2.webp";
// import service6 from "../assets/tej.jpg";
// import service7 from "../assets/fo3.jpg";


// const Services = () => {
//   return (
//     <div className="flex flex-col items-center gap-8 p-6 lg:p-12 mt-14">
//       {/* Text Section */}
//       <div className="w-full text-center lg:text-left">
//         <p className="text-black leading-relaxed text-2xl text-center mb-6 sm:mb-4">
//           Discover RORI Hotel Hawassa, a four-star retreat in Ethiopia's lakeside city.<br />
//           Enjoy spacious rooms, a heated pool, gym, wellness services, and diverse dining options.<br />
//           Relax at our unique Bubble Lounge, ideal for both leisure and business, in an eco-friendly setting.
//         </p>
//       </div>

//       {/* Rooms Section */}
//       <section className="bg-white sm:py-12">
//   {/* Heading */}
//   <h2 className="text-4xl font-bold text-center text-black mb-12">
//     Rooms
//   </h2>

//   {/* Room Cards */}
//   <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-4 lg:px-20">
//     {/* Deluxe Room */}
//     <div className=" group flex flex-col items-center p-6 border rounded-lg shadow-lg bg-white hover:shadow-BR transition-shadow">
//     <div className="overflow-hidden rounded-lg">
//       <img
//         src={ima1}
//         alt="Deluxe Room"
//         className="mx-auto rounded-lg transform transition-transform duration-300 group-hover:scale-110"
//       />
//         </div>
//       <div className="mt-4 text-center">
//         <h3 className="text-2xl font-semibold text-black">Deluxe Room</h3>
//         <p className="text-black mt-2">
//           A cozy and luxurious room with modern amenities.
//         </p>
//       </div>
//     </div>

//     {/* Executive Room */}
//     <div className=" group flex flex-col items-center p-6 border rounded-lg shadow-lg bg-white hover:shadow-BR transition-shadow">
//     <div className="overflow-hidden rounded-lg">
//       <img
//         src={ima2}
//         alt="Executive Room"
//         className="mx-auto rounded-lg transform transition-transform duration-300 group-hover:scale-110"
//       />
//        </div>
//       <div className="mt-4 text-center">
//         <h3 className="text-2xl font-semibold text-black">Executive Room</h3>
//         <p className="text-black mt-2">
//           Spacious and elegant with premium features.
//         </p>
//       </div>
//     </div>

//     {/* Suite Room */}
//     <div className="group flex flex-col items-center p-6 border rounded-lg shadow-lg bg-white hover:shadow-BR transition-shadow">
//   <div className="overflow-hidden rounded-lg">
//     <img
//       src={ima3}
//       alt="Suite Room"
//       className="mx-auto rounded-lg transform transition-transform duration-300 group-hover:scale-110"
//     />
//   </div>
//   <div className="mt-4 text-center">
//     <h3 className="text-2xl font-semibold text-black">Suite Room</h3>
//     <p className="text-black mt-2">
//       Experience ultimate luxury in our exclusive suite.
//     </p>
//   </div>
// </div>

//   </div>

//   {/* See More Button */}
//   <div className="text-center mt-12">
//     <a
//       href="/rooms"
//       className="px-6 py-2 text-lg font-medium text-white bg-BR rounded-md hover:bg-DBR transition-colors"
//     >
//       See More
//     </a>
//   </div>
// </section>

//       <section  id="services" className="py-16 bg-white w-full mt-0 sm:mt-6">
//   <div className="container mx-auto px-6">
//     <h2 className="text-3xl font-bold text-center text-black mt-3 mb-8 sm:mb-24"> Services   </h2>
    
    
//     {/* Row 1 */}
//     <div className="flex flex-col lg:flex-row items-center gap-6 mb-8">
//       <div className="flex-1">
//         <h3 className="text-xl  text-center text-black font-bold  mb-4">Spa</h3>
//         <p className="text-black sm:pl-12  sm:pr-5">
//         A very inviting space for luxury and relaxation awaits you at our Spa. 
//         Fulfill all your beauty wishes with our expert hairdressing services,
//          revitalizing hair treatments, flawless make-up, and rejuvenating manicures and pedicures.
//           Experience a personalized journey of indulgence, designed to leave you feeling completely renewed.  
//         </p>
//       </div>
//       <div className="flex-1">
//         <img
//           src={serviceOne}
//           alt="Service 1"
//           className="w-full h-64 sm:pl-8 object-cover rounded"
//         />
//       </div>
//     </div>

//     {/* Row 2 */}
//     <div className="flex flex-col lg:flex-row-reverse items-center gap-6 mb-8">
//       <div className="flex-1">
//         <h3 className="text-xl font-bold text-center text-black mb-4">Gym</h3>
//         <p className="text-black  sm:pl-5  sm:pr-12">
          
// Our gym is equipped with state-of-the-art equipment to help you reach your fitness goals,
//  paired with a team of dedicated professionals who provide top-tier personalized service 
//  to guide and support you every step of the way.
//         </p>
//       </div>
//       <div className="flex-1">
//         <img
//           src={serviceTwo}
//           alt="Service 2"
//           className="w-full h-64 object-cover rounded sm:mb-12"
//         />
//       </div>
//     </div>

//     {/* Row 3 */}
//     <div className="flex flex-col lg:flex-row items-center gap-6">
//       <div className="flex-1">
//         <h3 className="text-xl font-bold text-center text-black mb-4">Meeting and Retreat</h3>
//         <p className="text-black">
//         Experience luxury and convenience in our fully equipped meeting facilities
//          and boardrooms, designed for success. From seamless event planning to elegant 
//          wedding services, we handle every detail with care. With four versatile conference 
//          halls, we can accommodate groups from 10 to 300, plus guided tours to nearby 
//          attractions after your event.
//         </p>
//       </div>
//       <div className="flex-1">
//         <img
//           src={serviceThree}
//           alt="Service 3"
//           className="w-full h-64 object-cover mb-6 sm:mb-16 rounded"
//         />
//       </div>
//     </div>


//   {/* Row 2 */}
//   <div className="flex flex-col lg:flex-row-reverse items-center gap-6  sm:mb-6">
//       <div className="flex-1">
//         <h3 className="text-xl font-bold text-center text-black mb-4">Swimming pool</h3>
//         <p className="text-black  sm:pl-5  sm:pr-12">
          
//         Dive into relaxation in our uniquely designed swimming pool, stretching 14 meters long, 
//         7 meters wide, and 1.8 meters deep. With a soothing water temperature of 30°C, it's
//          the perfect space for exercise or unwinding. Our open-air SPA, featuring bubbling 
//          waters, is a standout feature of our Wellness Center, offering a blissful escape 
//          that relaxes your muscles, relieves tension, and energizes your body and mind.
//         </p>
//       </div>
//       <div className="flex-1">
//         <img
//           src={serviceFour}
//           alt="Service 2"
//           className="w-full h-64 object-cover rounded"
//         />
//       </div>
//     </div>

    
//   </div>
// </section>



// <section className="bg-white py-10 px-4">
//   {/* Header */}
//   <h1 className="text-4xl text-center mb-6 sm:mb-10   font-bold text-black">Restaurants</h1>
//   <p className="  sm:pl-16  text-black sm:text-2xl mb-4 sm:mb-28"> There are more than five
//      Bar and restaurants Our Menus is designed by a professional and international executive 
//      chef with care and attention to detail having new contents, wide selection and 
//      presentation. <br/>Please let us know if you have any dietary requirement or allergies,
//       we can arrange a special diet menu for all blood type categories respectively.

// </p>   
//   <div className="flex flex-col sm:flex-row-reverse">
//     <div className="text-center px-4 mb-12 sm:pr-28">
//       <p className="mt-4 sm:pl-16 text-2xl text-black  sm:mb-4 sm:text-4xl">
//         Taste the essence of gourmet at Rori Restaurant - a fusion of<span className=" font-bold"> tradition</span> and innovation.
//       </p>
//     </div>

//     <div className="flex flex-col space-y-12 mx-auto">
//       {/* Margherita Pizza */}
//       <div className="relative group mb-7 sm:mb-28">
//         <img
//           src={service5}
//           alt="Margherita Pizza"
//           className="w-full   h-64 sm:h-auto  object-cover rounded-lg"
//         />
//         <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
//           <h2 className="text-2xl font-bold text-white">Kitfo</h2>
//           <p className="text-gray-300 mt-4 text-center px-4">
//             Kitfo, a beloved Ethiopian delicacy, features finely minced beef seasoned with
//             spiced butter and aromatic mitmita, served raw, lightly cooked, or fully cooked
//             for a rich and flavorful experience.
//           </p>
//         </div>
//       </div>
//     </div>
//   </div>

//   {/* Pasta Carbonara */}
//   <div className="flex flex-col sm:flex-row sm:pl-10 space-y-6 sm:space-y-0 sm:space-x-40">
//     {/* Pasta Image */}
//     <div className="relative group">
//       <img
//         src={service6}
//         alt="Pasta Carbonara"
//         className="w-full sm:w-auto h-auto max-h-96 object-cover rounded-lg"
//       />
//       <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
//         <h2 className="text-2xl font-bold text-white">Tej</h2>
//         <p className="text-gray-300 mt-4 text-center px-4">
//           Tej is Ethiopia's traditional honey wine, celebrated for its sweet, tangy flavor
//           and subtle spice notes, offering a truly authentic taste of Ethiopian culture.
//         </p>
//       </div>
//     </div>

//     {/* Caesar Salad Image */}
//     <div className="relative group">
//       <img
//         src={service7}
//         alt="Caesar Salad"
//         className="w-full h-auto max-h-96 object-cover rounded-lg"
//       />
//       <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity">
//         <h2 className="text-2xl font-bold text-white">Injera</h2>
//         <p className="text-gray-300 mt-4 text-center px-4">
//           Discover the unique flavor of Injera, a traditional Ethiopian flatbread with a
//           delightful spongy texture, perfect for savoring with every bite.
//         </p>
//       </div>
//     </div>
//   </div>

//   {/* See More Button */}
//   <div className="text-center mt-12">
//     <a
//       href="/"
//       className="px-6 py-2 text-lg font-medium text-white bg-BR rounded-md hover:bg-DBR transition-colors"
//     >
//       See More
//     </a>
//   </div>
// </section>




//     </div>
//   );
// };

// export default Services;
