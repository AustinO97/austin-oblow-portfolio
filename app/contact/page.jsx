"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectLabel,
  SelectTrigger,
  SelectValue,
  SelectItem,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "emailjs-com";

const info = [
  {
    label: "Phone",
    icon: <FaPhoneAlt />,
    value: "561-452-2064",
  },
  {
    label: "Email",
    icon: <FaEnvelope />,
    value: "austinoblow97@gmail.com",
  },
];

const Contact = () => {
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Firstname is required"),
    lastName: Yup.string().required("Lastname is required"),
    email: Yup.string().email().required("Email is required"),
    phone: Yup.string().required("Phone is required"),
    service: Yup.string().required("Service is required"),
    message: Yup.string().required("Message is required"),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
      honeypot: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      if (values.honeypot) {
        alert("Bot detected");
        return;
      }

      try {
        console.log("Form values:", values);

        await emailjs.send(
          "service_euq5kho",
          "template_cf8p3h4",
          values,
          "w7HRjsIie8woopJIN",
        );
        alert("Message sent successfully!");
        resetForm();
      } catch (error) {
        console.error("Error sending message:", error);
        alert("Failed to send message. Please try again.");
      }
    },
  });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-non">
            <form
              onSubmit={formik.handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-yellow-200">Get in touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <Input
                  name="firstName"
                  type="text"
                  placeholder="Firstname"
                  {...formik.getFieldProps("firstName")}
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <div>{formik.errors.firstName}</div>
                ) : null}
                <Input
                  name="lastName"
                  type="text"
                  placeholder="Lastname"
                  {...formik.getFieldProps("lastName")}
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <div>{formik.errors.lastName}</div>
                ) : null}
                <Input
                  name="email"
                  type="email"
                  placeholder="Email address"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email ? (
                  <div>{formik.errors.email}</div>
                ) : null}
                <Input
                  name="phone"
                  type="tel"
                  placeholder="Phone number"
                  {...formik.getFieldProps("phone")}
                />
                {formik.touched.phone && formik.errors.phone ? (
                  <div>{formik.errors.phone}</div>
                ) : null}
              </div>
              <Select
                name="service"
                value={formik.values.service}
                onValueChange={(value) =>
                  formik.setFieldValue("service", value)
                }
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">
                      Web Development
                    </SelectItem>
                    <SelectItem value="Logo Design">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {formik.touched.service && formik.errors.service ? (
                <div>{formik.errors.service}</div>
              ) : null}

              <Textarea
                className="h-[200px]"
                placeholder="Type your message here."
                name="message"
                {...formik.getFieldProps("message")}
              />
              {formik.touched.message && formik.errors.message ? (
                <div>{formik.errors.message}</div>
              ) : null}
              <div style={{ display: "none" }}>
                <label htmlFor="honeypot">Honeypot</label>
                <input
                  id="honeypot"
                  name="honeypot"
                  type="text"
                  {...formik.getFieldProps("honeypot")}
                />
              </div>
              <Button type="submit" size="md" className="max-w-40">
                Send message
              </Button>
            </form>
          </div>
          <div className="flex-1 items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-8">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-[#4F75FF] rounded-md flex items-center">
                    <div className="text-[28px] m-3">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.label}</p>
                    <h3 className="text-xl">{item.value}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
