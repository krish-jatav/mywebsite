"use client";
import React from 'react';
import Image from "next/image";
import { skillsData } from "../../../constant";
import { Marquee } from "../../../animation";

export default function Skillsdata() {
	return (
		<section className="my-[5rem]  rounded-3xl ">
			<div className="w-full flex flex-col gap-[50px]">
				<Marquee baseVelocity={-1}>
					<div className="flex m-0 gap-x-[40px] items-center mr-[20px]">
						{skillsData.map((item) => (
							<div
								className="w-[5rem] h-[5rem]"
								key={item.id}>
								<Image
									src={item.src}
									alt="asd"
									width={200}
									height={50}
									className="w-[5rem] h-[5rem]"
								/>
							</div>
						))}
					</div>
				</Marquee>
				<Marquee baseVelocity={1}>
					<div className="flex m-0 gap-x-[40px] items-center mr-[20px]">
						{skillsData.map((item) => (
							<div
								className="w-[5rem] h-[5rem]"
								key={item.id}>
								<Image
									src={item.src}
									alt="asd"
									width={200}
									height={50}
									className="w-[5rem] h-[5rem]"
								/>
							</div>
						))}
					</div>
				</Marquee>
			</div>
		</section>
	);
}
