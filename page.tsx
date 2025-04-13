
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const NavBar = () => (
  <nav className="bg-green-700 text-white py-4 px-6 mb-6 shadow-md">
    <div className="max-w-6xl mx-auto flex justify-between items-center">
      <div className="text-xl font-bold">Madrasatut-Tarbiyatul Islam</div>
      <ul className="flex space-x-4 text-sm">
        <li><a href="/" className="hover:underline">Home</a></li>
        <li><a href="#apply" className="hover:underline">Apply</a></li>
        <li><a href="#fees" className="hover:underline">Fees</a></li>
        <li><a href="#portal" className="hover:underline">Portals</a></li>
        <li><a href="#news" className="hover:underline">News</a></li>
      </ul>
    </div>
  </nav>
);

export default function PortalPages() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-green-50">
      <NavBar />
      <div className="max-w-4xl mx-auto space-y-10 p-6">

        {/* Application Form */}
        <section id="apply" className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Student Application Form</h2>
          <form className="space-y-4">
            <Input placeholder="Student Full Name" name="name" value={form.name} onChange={handleChange} />
            <Input placeholder="Parent's Email" name="email" value={form.email} onChange={handleChange} />
            <Input placeholder="Phone Number" name="phone" value={form.phone} onChange={handleChange} />
            <Textarea placeholder="Additional Information" name="message" value={form.message} onChange={handleChange} />
            <Button type="submit">Submit Application</Button>
          </form>
        </section>

        {/* School Fee Info */}
        <section id="fees" className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-green-700 mb-4">School Fees</h2>
          <p className="text-gray-700">
            Payment can be made in full or in two installments. Online payment integration (Paystack/Flutterwave)
            coming soon. For now, payments are made via bank transfer or in person.
          </p>
        </section>

        {/* Student & Staff Portal Info */}
        <section id="portal" className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-green-700 mb-4">Student & Staff Portals</h2>
          <p className="text-gray-700">
            Students can check results and access learning materials. Staff can upload lesson plans and manage records.
            Login functionality coming soon.
          </p>
        </section>

        {/* News & Events */}
        <section id="news" className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-bold text-green-700 mb-4">News & Events</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>📅 Resumption Date: Shawwal 10</li>
            <li>📢 Eid Break: Ramadan 28 - Shawwal 9</li>
            <li>🕌 Qur’an Competition coming soon!</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
