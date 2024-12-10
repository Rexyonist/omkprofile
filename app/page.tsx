import { ArrowRight, Calendar, Cross, Users } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1505673542670-a5e3ff5b14a3?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <Cross className="mx-auto mb-8 h-16 w-16 text-blue-600 dark:text-blue-400" />
          <h1 className="text-3xl md:text-3xl font-semibold mb-6">Paroki Maria Bunda Segala Bangsa Kota Wisata</h1>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">OMK Wilayah 8 Santo Yakobus</h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Empowering young Catholics to grow in faith, serve others, and build a community of love and understanding.
          </p>
          <Button asChild size="lg">
            <Link href="/about">
              Learn More <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our History</h2>
          <div className="max-w-3xl mx-auto prose dark:prose-invert">
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The Saint James Youth Organization was founded in with the vision of creating a vibrant community for young Catholics. Named after Saint James, who exemplified unwavering faith and dedication to God&apos;s service, our organization continues to inspire young people to live their faith actively and meaningfully.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Users className="h-8 w-8 mb-4 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Community</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Join our growing family of young Catholics.</p>
              <Button variant="outline" asChild>
                <Link href="/about">About Us</Link>
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Calendar className="h-8 w-8 mb-4 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Events</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Discover upcoming activities and gatherings.</p>
              <Button variant="outline" asChild>
                <Link href="/events">View Events</Link>
              </Button>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-shadow">
              <Cross className="h-8 w-8 mb-4 text-blue-600 dark:text-blue-400" />
              <h3 className="text-xl font-semibold mb-2">Faith Journey</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Explore our spiritual content and resources.</p>
              <Button variant="outline" asChild>
                <Link href="/content">View Content</Link>
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}