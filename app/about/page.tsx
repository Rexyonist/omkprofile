"use client";

import { Heart, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function About() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
          <div className="max-w-3xl mx-auto prose dark:prose-invert">
            <p className="text-lg text-gray-600 dark:text-gray-300 text-center">
              We are a dynamic Catholic youth organization dedicated to fostering spiritual growth,
              community service, and fellowship among young people.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card className="p-8">
              <Target className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-gray-600 dark:text-gray-300">
                To create a thriving community of young Catholics who are deeply rooted in faith,
                actively engaged in service, and committed to spreading God&apos;s love in the modern world.
              </p>
            </Card>

            <Card className="p-8">
              <Heart className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-4" />
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-gray-600 dark:text-gray-300">
                To empower young Catholics through spiritual formation, leadership development,
                and community service, fostering a lifelong commitment to faith and social justice.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Faith",
                description: "Nurturing a deep and personal relationship with God through prayer and worship."
              },
              {
                title: "Service",
                description: "Dedicating ourselves to helping others and making a positive impact in our community."
              },
              {
                title: "Community",
                description: "Building strong relationships and supporting each other in our spiritual journey."
              }
            ].map((value, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}