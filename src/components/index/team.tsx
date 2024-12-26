import Image from "next/image";
import React from "react";

export default function Team() {
  return (
    <div className="max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-10 mx-auto">
      <div className="max-w-2xl mx-auto text-left sm:text-center mb-10 lg:mb-14">
        <h2 className="text-3xl font-semibold md:text-5xl md:leading-tight">
          Our team
        </h2>
        <p className="mt-1 text-gray-600">Creative people</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12">
        {[
          {
            name: "David Forren",
            role: "Founder / CEO",
            image:
              "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
          },
          {
            name: "Amil Evara",
            role: "UI/UX Designer",
            image:
              "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
          },
          {
            name: "Ebele Egbuna",
            role: "Support Consultant",
            image:
              "https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
          },
          {
            name: "Maria Powers",
            role: "Director of Sales",
            image:
              "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
          },
          {
            name: "Delia Pawelke",
            role: "Front-end Developer",
            image:
              "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80",
          },
        ].map((member, index) => (
          <div key={index} className="text-center">
            <Image
              className="rounded-full mx-auto"
              src={member.image}
              alt={`${member.name} Avatar`}
              width={150}
              height={150}
            />
            <div className="mt-2 sm:mt-4">
              <h3 className="font-medium text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
