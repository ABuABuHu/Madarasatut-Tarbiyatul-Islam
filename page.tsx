
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function SchoolPortal() {
  const [tab, setTab] = useState("application");

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 p-4 font-sans">
      <h1 className="text-4xl font-bold text-center mb-6 text-green-700 tracking-wide">
        Madrasatut-Tarbiyatul Islam Portal
      </h1>
      <Tabs value={tab} onValueChange={setTab} className="max-w-5xl mx-auto">
        <TabsList className="flex justify-center mb-6 flex-wrap gap-2 bg-white shadow-md p-2 rounded-xl">
          <TabsTrigger value="application">Application</TabsTrigger>
          <TabsTrigger value="payment">Payments</TabsTrigger>
          <TabsTrigger value="student">Student</TabsTrigger>
          <TabsTrigger value="staff">Staff</TabsTrigger>
          <TabsTrigger value="parent">Parent-Teacher</TabsTrigger>
          <TabsTrigger value="news">News & Events</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>
        ...
      </Tabs>
    </div>
  );
}
