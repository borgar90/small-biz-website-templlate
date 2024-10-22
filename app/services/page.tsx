import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Briefcase, LineChart, Wrench } from "lucide-react"
import Link from "next/link"

export default function Services() {
  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Services</h1>
        <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Comprehensive solutions tailored to meet your business needs and drive growth.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 md:gap-12">
        <Card>
          <CardHeader>
            <Briefcase className="h-8 w-8 mb-2" />
            <CardTitle>Business Consulting</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Strategic guidance to optimize your business operations and maximize growth potential.</p>
            <Button variant="outline" asChild>
              <Link href="/contact">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <LineChart className="h-8 w-8 mb-2" />
            <CardTitle>Market Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">In-depth market research and competitor analysis to inform your business strategy.</p>
            <Button variant="outline" asChild>
              <Link href="/contact">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Wrench className="h-8 w-8 mb-2" />
            <CardTitle>Implementation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4">Expert execution of strategies and solutions to achieve your business objectives.</p>
            <Button variant="outline" asChild>
              <Link href="/contact">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}