"use client";

import { Calendar, MapPin, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const upcomingEvents = [
  {
    title: "Natal Bersama",
    date: "April 15, 2024",
    time: "7:00 PM",
    location: "GSG Petrus Kanisius",
    description: "Join us for an evening of christmast celebration.",
    image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3"
  },
  {
    title: "Bakti Sosial",
    date: "April 20, 2024",
    time: "9:00 AM",
    location: "Sekitaran Kota Wisata",
    description: "Serve our community by helping at the local streets",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3"
  },
  {
    title: "Outing",
    date: "May 5, 2024",
    time: "2:00 PM",
    location: "Puncak Resort",
    description: "Develop your leadership skills through interactive sessions and discussions.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3"
  }
];

export default function Events() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Upcoming Events</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto">
            Join us in our upcoming events and activities. Be part of our growing community and
            strengthen your faith journey.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="overflow-hidden">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${event.image})` }}
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Clock className="h-4 w-4 mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {event.description}
                  </p>
                  <Button className="w-full">Register Now</Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}