// export default function ContactMe() {
//   return (
//     <section id="Contact" className="contact--section">
//       <div>
//         <p className="sub--title">Get In Touch</p>
//         <h2>Contact Me</h2>
//         <p className="text-lg">
//           I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Drop me a message below.
//         </p>
//       </div>
//       <form className="contact--form--container">
//         <div className="container">
//           <label htmlFor="first-name" className="contact--label">
//             <span className="text-md">First Name</span>
//             <input
//               type="text"
//               className="contact--input text-md"
//               name="first-name"
//               id="first-name"
//               required
//             />
//           </label>
//           <label htmlFor="last-name" className="contact--label">
//             <span className="text-md">Last Name</span>
//             <input
//               type="text"
//               className="contact--input text-md"
//               name="last-name"
//               id="last-name"
//               required
//             />
//           </label>
//           <label htmlFor="email" className="contact--label">
//             <span className="text-md">Email</span>
//             <input
//               type="email"
//               className="contact--input text-md"
//               name="email"
//               id="email"
//               required
//             />
//           </label>
//           <label htmlFor="phone-number" className="contact--label">
//             <span className="text-md">phone-number</span>
//             <input
//               type="number"
//               className="contact--input text-md"
//               name="phone-number"
//               id="phone-number"
//               required
//             />
//           </label>
//         </div>
//         <label htmlFor="choode-topic" className="contact--label">
//           <span className="text-md">Choose a topic</span>
//           <select id="choose-topic" className="contact--input text-md">
//             <option>Select One...</option>
//             <option>Item 1</option>
//             <option>Item 2</option>
//             <option>Item 3</option>
//           </select>
//         </label>
//         <label htmlFor="message" className="contact--label">
//           <span className="text-md">Message</span>
//           <textarea
//             className="contact--input text-md"
//             id="message"
//             rows="8"
//             placeholder="Type your message..."
//           />
//         </label>
//         <label htmlFor="checkboc" className="checkbox--label">
//           <input type="checkbox" required name="checkbox" id="checkbox" />
//           <span className="text-sm">I accept the terms</span>
//         </label>
//         <div>
//           <button className="btn btn-primary contact--form--btn">Submit</button>
//         </div>
//       </form>
//     </section>
//   );
// }

const formSpreeUrl = process.env.REACT_APP_FORMSPREE_URL;

import { useState } from "react";

export default function ContactMe() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    try {
      const res = await fetch(formSpreeUrl, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setStatus("✅ Message Sent Successfully!");
        e.target.reset(); // Clear form
      } else {
        setStatus("❌ Something went wrong. Please try again.");
      }
    } catch (err) {
      setStatus("❌ Network error. Please try again later.");
    }
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
        <p className="text-lg">
          I’m always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Drop me a message below.
        </p>
      </div>

      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>
            <input type="text" className="contact--input text-md" name="First Name" required />
          </label>

          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>
            <input type="text" className="contact--input text-md" name="Last Name" required />
          </label>

          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>
            <input type="email" className="contact--input text-md" name="Email" required />
          </label>

          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>
            <input type="tel" className="contact--input text-md" name="Phone" />
          </label>
        </div>

        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>
          <select id="choose-topic" className="contact--input text-md" name="Topic">
            <option>Select One...</option>
            <option>Project Collaboration</option>
            <option>Job Opportunity</option>
            <option>Other</option>
          </select>
        </label>

        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea className="contact--input text-md" name="Message" rows="8" placeholder="Type your message..." required />
        </label>

        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="Terms Accepted" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>

        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>

      {status && <p style={{ marginTop: "10px", color: status.includes("✅") ? "green" : "red" }}>{status}</p>}
    </section>
  );
}
