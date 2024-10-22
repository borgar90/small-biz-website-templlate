import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Award, Heart } from "lucide-react"

export default function About() {
  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">About Us</h1>
        <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          We're dedicated to delivering exceptional service and value to our clients through innovative solutions and expert knowledge.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 md:gap-12">
        <Card>
          <CardHeader>
            <Clock className="h-8 w-8 mb-2" />
            <CardTitle>Our History</CardTitle>
          </CardHeader>
          <CardContent>
            Founded with a vision to transform the industry, we've grown through dedication and innovation.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Award className="h-8 w-8 mb-2" />
            <CardTitle>Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            To provide outstanding solutions that help our clients achieve their business goals.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Heart className="h-8 w-8 mb-2" />
            <CardTitle>Our Values</CardTitle>
          </CardHeader>
          <CardContent>
            Integrity, excellence, and innovation drive everything we do.
          </CardContent>
        </Card>
      </div>
    </div>
  )
}