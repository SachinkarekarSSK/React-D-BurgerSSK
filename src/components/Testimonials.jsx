import React from "react";
import TestimonialCard from '../components/TestimonialCard'


const Testimonials = () => {
  return (
    <>

    <div className="testimonial" id="about">
        <div className="small-container my-7">
          <h2 className="text-center font-semibold text-xl">Customer Review</h2>
          <div className="flex  flex-wrap ">
            <TestimonialCard name={'Sean Parker'} reviews={"Customizable burger bliss! Fresh, user-friendly, and the taste is unmatched. This place is a burger lover's dream!"}  img={'https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjJ8fHBlcnNvbnxlbnwwfDB8MHx8fDA%3D&w=500'}/>

            <TestimonialCard name={'Priyanka Kapoor'} reviews={"Outstanding burgers! Customization is top-notch. Quick delivery. My new favorite burger spot!"} img={'https://images.unsplash.com/photo-1615473967657-9dc21773daa3?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fHBlcnNvbnxlbnwwfDB8MHx8fDA%3D&w=500'}/>

            <TestimonialCard name={'Cindrella george'} reviews={"Burger perfection! Customization made easy. Fast delivery. I'm hooked on these burgers!"} img={'https://images.unsplash.com/photo-1527423460268-0b3795a97e7f?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHBlcnNvbnxlbnwwfDB8MHx8fDA%3D&w=500'}/>
        </div>
        </div>
        </div>

    </>
  );
};
export default Testimonials;
