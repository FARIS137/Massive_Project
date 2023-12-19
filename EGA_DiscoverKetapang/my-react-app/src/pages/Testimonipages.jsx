// Import statements (keep your existing imports)
import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import axios from "axios"; // Don't forget to import axios
import Navbarwisata from "../Component/Fragments/Navbarwisata";
import Footercomponent from "../Component/Fragments/Footercomponent";

const Testimonipages = () => {
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axios.get("http://localhost:5000/ulasan");
        setTestimonials(response.data);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };
    fetchTestimonials();
  }, []);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const feedbackText = event.target.feedback.value;

    if (feedbackText) {
      try {
        // Send a new testimonial to the Express API
        await axios.post("http://localhost:5000/ulasan", {
          ulasan: feedbackText,
        });

        // Fetch updated testimonials after adding a new one
        const response = await axios.get("http://localhost:5000/ulasan");
        setTestimonials(response.data);

        // setTestimonials((prevTestimonials) => [
        //   ...prevTestimonials,
        //   newTestimonial,
        // ])
        event.target.feedback.value = "";
      } catch (error) {
        console.error("Error adding testimonial:", error);
      }
    }
  };

  return (
    <div className="">
      <div className="navbar-banner ">
        <Navbarwisata className="Navbarwisata" />
        <div className="banner-content">
          <div className="banner-text" style={{ textAlign: "center" }}>
            Ulasan Para Wisatawan
          </div>
        </div>
      </div>
      <div className="cardtestimoni">
        <h2 className="text-cardtestimoni">"Apa Kata Mereka ?"</h2>
      </div>
      <div className="swiper-container ">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            360: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            992: {
              slidesPerView: 3,
            },
          }}
          modules={[Pagination]}
          className="mySwiper swiper-testimoni"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index} swiperslide-tes>
              <div className="swiper-slide-content">
                <p>{testimonial.ulasan}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="feedback-card">
        <h2>Kirim Ulasan</h2>
        <form onSubmit={handleFormSubmit}>
          <textarea
            id="feedback"
            name="feedback"
            rows="10"
            cols="50"
            placeholder="Masukkan ulasan disini"
          ></textarea>
          <button type="submit">Kirim</button>
        </form>
      </div>
      <Footercomponent></Footercomponent>
    </div>
  );
};

export default Testimonipages;
