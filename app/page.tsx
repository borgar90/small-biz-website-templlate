import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, Trophy, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Welcome to Your Business
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Professional solutions for your business needs. We help you grow and succeed in today's competitive market.
              </p>
            </div>
            <div className="space-x-4">
              <Button asChild>
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4">
                  <Building2 className="h-6 w-6" />
                  <h3 className="text-xl font-bold">Professional Service</h3>
                </div>
                <p className="mt-4 text-muted-foreground">
                  Expert solutions tailored to your business needs with years of industry experience.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4">
                  <Users className="h-6 w-6" />
                  <h3 className="text-xl font-bold">Dedicated Team</h3>
                </div>
                <p className="mt-4 text-muted-foreground">
                  Our skilled professionals are committed to delivering exceptional results.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4">
                  <Trophy className="h-6 w-6" />
                  <h3 className="text-xl font-bold">Proven Results</h3>
                </div>
                <p className="mt-4 text-muted-foreground">
                  Track record of success with numerous satisfied clients across industries.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
                Ready to Get Started?
              </h2>
              <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                Contact us today to discuss how we can help your business grow.
              </p>
            </div>
            <Button className="group" asChild>
              <Link href="/contact">
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}