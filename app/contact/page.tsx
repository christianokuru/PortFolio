/* eslint-disable react/no-unescaped-entities */
"use client";

import { Button } from "@/components/ui/button";
import { MailIcon, MapPin, PhoneCallIcon } from "lucide-react";
import { FormEvent, useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    countryCode: "+234", // Default country code
  });
  const [emailError, setEmailError] = useState("");
  const [submitStatus, setSubmitStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false); // State to handle loading

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
    setIsLoading(true); // Set loading to true
    setSubmitStatus(""); // Clear previous status

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus("Message sent successfully!😁");
        setFormData({
          name: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
          countryCode: "+234", // Reset to default country code
        });
      } else {
        setSubmitStatus("Failed to send message. Please try again.🥺");
      }
    } catch (error) {
      setSubmitStatus("An error occurred. Please try again later.🥺");
    } finally {
      setIsLoading(false); // Set loading to false
    }
  };

  return (
    <div className="px-3 lg:flex lg:justify-around lg:pt-6">
      <div className="flex flex-col gap-y-5 lg:justify-center">
        {/* Phone number */}
        <div className="flex items-center py-3 pl-3">
          <PhoneCallIcon className="h-10 w-7 mr-5 text-green-600" />
          <div className="flex flex-col">
            <p className="text-muted-foreground">Phone</p>
            <p className="leading-7 [&:not(:first-child)]:mt-2">+234-9059952426</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center py-3 pl-2">
          <MailIcon className="h-10 w-7 mr-5 text-pink-600" />
          <div className="flex flex-col">
            <p className="text-muted-foreground">Email</p>
            <p className="leading-7 [&:not(:first-child)]:mt-2">okuruchristian@gmail.com</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center py-3 pl-2">
          <MapPin className="h-10 w-10 mr-5 text-purple-600" />
          <div className="flex flex-col">
            <p className="text-muted-foreground">Address</p>
            <p className="leading-7 [&:not(:first-child)]:mt-2">#21 Pipeline Road, Baruwa, Gate Bus Stop. Ipaja, Lagos.</p>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="p-6 border-2 rounded-xl bg-card text-card-foreground my-5">
        <div>
          <h1 className="font-bold text-3xl leading-tight mb-4">Let's work together!</h1>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <input
              className="p-3 rounded-xl bg-input"
              placeholder="First Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <input
              className="bg-input p-3 rounded-xl"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="grid grid-cols-1 space-y-4">
            <input
              className="bg-input p-3 rounded-xl"
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
              type="tel" // Ensure input is numeric
              pattern="[0-9]*" // Allow only numeric characters
            />
            <textarea
              className="bg-input p-3 rounded-xl h-60"
              placeholder="Please type your Message..."
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>

          <Button type="submit" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </form>
        {submitStatus && (
          <p
            className={`mt-4 ${
              submitStatus.startsWith("Failed")
                ? "text-red-500"
                : "text-green-500"
            }`}
          >
            {submitStatus}
          </p>
        )}
      </div>
    </div>
  );
}
