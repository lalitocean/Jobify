import React from "react";
import {Label} from "../ui/label";
import {Input} from "../ui/input";
import {Button} from "../ui/button";

const Contact = () => {
  return (
    <section className="min-h-[80vh] mt-15 px-5">
      <div className="max-w-2xl mx-auto border-1 shadow-2xs rounded-2xl ">
        <form className="bg-white p-5">
          <div className="grid md:grid-cols-1 gap-6 mb-6">
            <div>
              <Label className="block text-gray-700 mb-2" htmlFor="name">
                Name
              </Label>
              <Input
                type="text"
                id="name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-600 shadow-xs"
                placeholder="Your name"
              />
            </div>
            <div>
              <Label className="block text-gray-700 mb-2" htmlFor="email">
                Email
              </Label>
              <Input
                type="email"
                id="email"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-600 shadow-xs"
                placeholder="Your email"
              />
            </div>
          </div>
          <div className="mb-6">
            <Label className="block text-gray-700 mb-2" htmlFor="subject">
              Subject
            </Label>
            <Input
              type="text"
              id="subject"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-600 shadow-xs"
              placeholder="Message subject"
            />
          </div>
          <div className="mb-6">
            <Label className="block text-gray-700 mb-2" htmlFor="message">
              Message
            </Label>
            <textarea
              id="message"
              rows="5"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:border-teal-600"
              placeholder="Your message"
            ></textarea>
          </div>
          <Button className="w-full bg-red-600 text-white py-3 rounded-lg font-medium hover:bg-red-700 transition-colors">
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
