"use client";

import { Instagram, Facebook, Youtube } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const socialPosts = [
  {
    platform: "Instagram",
    content: "Join us for our weekly youth prayer meeting! 🙏 #CatholicYouth #Faith",
    image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3",
    icon: Instagram
  },
  {
    platform: "Facebook",
    content: "Highlights from our recent community service project. Making a difference together! ❤️",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3",
    icon: Facebook
  },
  {
    platform: "Youtube",
    content: "New video: 'Finding Your Faith Journey' - Watch our latest youth testimony",
    image: "https://images.unsplash.com/photo-1460518451285-97b6aa326961?ixlib=rb-4.0.3",
    icon: Youtube
  }
];

export default function Content() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Our Content</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-2xl mx-auto">
            Stay connected with our community through our social media channels and latest updates.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialPosts.map((post, index) => (
              <Card key={index} className="overflow-hidden">
                <div 
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <post.icon className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                    <span className="font-semibold">{post.platform}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.content}
                  </p>
                  <Button variant="outline" className="w-full">
                    View Post
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Follow Us</h2>
          <div className="flex justify-center space-x-6">
            <Button variant="outline" size="lg">
              <Instagram className="h-5 w-5 mr-2" />
              Instagram
            </Button>
            <Button variant="outline" size="lg">
              <Facebook className="h-5 w-5 mr-2" />
              Facebook
            </Button>
            <Button variant="outline" size="lg">
              <Youtube className="h-5 w-5 mr-2" />
              YouTube
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}