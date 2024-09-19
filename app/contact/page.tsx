/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import {
  ChevronDownCircleIcon,
  MailIcon,
  MapPin,
  PhoneCallIcon,
} from "lucide-react";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    service: "Select a service",
  });
  const [emailError, setEmailError] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Improved email validation
    if (name === "email") {
      setEmailError(
        value.includes("@") && value.includes(".")
          ? ""
          : "Please enter a valid email address"
      );
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (emailError) {
      setSubmitStatus("Please correct the errors before submitting.");
      return;
    }
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus("Message sent successfully!");
        // Reset form after successful submission
        setFormData({
          name: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          service: "Select a service",
        });
      } else {
        setSubmitStatus("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSubmitStatus("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="px-3">
      <div className="flex flex-col gap-y-5">
        {/* Phone number */}
        <div className="flex items-center py-3 pl-3">
          <PhoneCallIcon className="h-10 w-7 mr-5 text-green-600" />
          <div className="flex flex-col">
            <p className="text-muted-foreground">Phone</p>
            <p>+234-9059952426</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center py-3 pl-2">
          <MailIcon className="h-10 w-7 mr-5 text-pink-600" />
          <div className="flex flex-col">
            <p className="text-muted-foreground">Email</p>
            <p>okuruchristian@gmail.com</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center py-3 pl-2">
          <MapPin className="h-10 w-10 mr-5 text-purple-600" />
          <div className="flex flex-col">
            <p className="text-muted-foreground">Address</p>
            <p>#21 Pipeline Road, Baruwa, Gate Bus Stop. Ipaja, Lagos.</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="p-6 border-2 rounded-lg my-5">
        <div>
          <h1 className="font-bold text-3xl mb-4">Let's work together!</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              className="bg-border p-3 rounded-xl"
              placeholder="First Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              className="bg-border p-3 rounded-xl"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="grid grid-cols-1 space-y-4">
            <input
              className="bg-border p-3 rounded-xl"
              placeholder="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <input
              className="bg-input p-3 rounded-xl"
              placeholder="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          {/* Dropdown menu */}
          <div className="relative">
            <select
              className="w-full bg-input p-3 rounded-xl appearance-none"
              name="service"
              value={formData.service}
              onChange={handleInputChange}
              required
            >
              <option value="Select a service">Select a Service</option>
              <option value="Front-End Development">Front-End Development</option>
            </select>
            <ChevronDownCircleIcon className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </div>
  );
}
