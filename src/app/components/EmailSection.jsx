import React from "react";
import GithubIcon from "../../../public/icons8-instagram.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    }
    const JSONdata = JSON.stringify(data);
    const endpoint = "api/send";
  }
  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Contactez-moi
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          Lorem
        </p>
        <div className="socials flex flex-row gap-2 ">
          <Link href="https://instagram.com/le_r.dev?igshid=MzMyNGUyNmU2YQ%3D%3D&utm_source=qr" target="blank">
            <Image src={GithubIcon} alt="Github Icon"  />
          </Link>
          <Link href="https://www.linkedin.com/in/rapha%C3%ABl-raguette-093258189/" target="blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon"  />
          </Link>
        </div>
      </div>
      <div className="z-10">
       
      </div>
    </section>
  );
};

export default EmailSection;
