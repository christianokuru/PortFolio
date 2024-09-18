/* eslint-disable react/no-unescaped-entities */
"use client";

import { MailIcon, MapPin, PhoneCallIcon } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [selectedService, setSelectedService] = useState("Select a Service");

  return (
    <div className="px-2">
      <div className="flex flex-col gap-y-5">
        {/* Phone number */}
        <div className="flex items-center py-3 border border-border bg-secondary rounded-xl pl-2">
          <PhoneCallIcon className="h-10 w-7 mr-5 text-green-600" />
          <div className="flex flex-col">
            <p className="text-muted-foreground">Phone</p>
            <p>+234-9059952426</p>
          </div>
        </div>

        <div className="flex items-center py-3 border border-border bg-secondary rounded-xl pl-2">
          <MailIcon className="h-10 w-7 mr-5 text-pink-600" />
          <div className="flex flex-col">
            <p className="text-muted-foreground">Email</p>
            <p>okuruchristian@gmail.com</p>
          </div>
        </div>

        {/* Phone number */}
        <div className="flex items-center py-3 border border-border bg-secondary rounded-xl pl-2">
          <MapPin className="h-10 w-10 mr-5 text-purple-600" />
          <div className="flex flex-col">
            <p className="text-muted-foreground">Address</p>
            <p>#21 Pipeline Road, Baruwa, Gate Bus Stop. Ipaja, Lagos.</p>
          </div>
        </div>
      </div>

      {/* form */}
      <div>
        <div>
          <h1>Let's work together!</h1>
        </div>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              className="bg-input p-3 rounded-xl"
              placeholder="First Name"
            />
            <input className="bg-input p-3 rounded-xl" placeholder="Surname" />
          </div>
          <div className="grid grid-cols-1 space-y-4">
            <input className="bg-input p-3 rounded-xl" placeholder="Email" />
            <input
              className="bg-input p-3 rounded-xl"
              placeholder="Phone Number"
            />
          </div>
          {/* dropdown menu */}
          <div className="relative">
            <select className="w-full bg-input p-3 rounded-xl"></select>
          </div>
        </form>
      </div>
    </div>
  );
}
