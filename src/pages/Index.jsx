import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <header className="w-full bg-white shadow">
        <div className="container mx-auto py-6 px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">DevRecruit</h1>
          <nav>
            <Button variant="outline" className="mr-2">Login</Button>
            <Button>Sign Up</Button>
          </nav>
        </div>
      </header>
      <main className="container mx-auto flex flex-col items-center py-12 px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Find the Best Developers for Your Team
        </h2>
        <p className="text-center text-gray-600 mb-8">
          We connect you with top-notch developers to help you build and scale your projects.
        </p>
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-center">Get Started</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input id="name" type="text" placeholder="Your Name" />
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your Email" />
              </div>
              <Button type="submit" className="w-full">Submit</Button>
            </form>
          </CardContent>
        </Card>
      </main>
      <Separator className="my-12" />
      <footer className="w-full bg-white shadow py-6">
        <div className="container mx-auto text-center text-gray-600">
          &copy; 2023 DevRecruit. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;