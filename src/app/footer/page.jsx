"use client"
import Link from "next/link";
import { FooterItem } from "../../../constant";
import ContactForm from "@/components/header/ContactForm";

export default function Footer() {
    return (
      <div   className="     overflow-hidden   w-full flex justify-center items-center      text-[#161614] ">
        <div className=" w-full  ">
          <div className="py-5  ">
            <h1 className="text-2xl"></h1>
          </div>
          {/* <div className="    items-center flex flex-col justify-center ">
            <div className=" text-center">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-[#DDDDD8] ">
         Hey there, Let's Collaborate!

            </h1>
            </div>
          </div> */}


          <div className="   justify-between text-sm ">

                 <ContactForm></ContactForm>


          </div>
         
        </div>
      </div>
    );
  }
