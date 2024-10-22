import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

export default function Portfolio() {
  const projects = [
    {
      title: "Business Growth Strategy",
      description: "Helped a client achieve 150% growth in revenue through strategic planning.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80"
    },
    {
      title: "Digital Transformation",
      description: "Led a complete digital transformation project for a traditional business.",
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80"
    },
    {
      title: "Market Expansion",
      description: "Successful market expansion strategy for an emerging brand.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
    }
  ]

  return (
    <div className="container py-12 md:py-24">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Our Portfolio</h1>
        <p className="mt-4 max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Showcasing our successful projects and the impact we've made for our clients.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3 md:gap-12">
        {projects.map((project, index) => (
          <Card key={index}>
            <div className="relative aspect-video overflow-hidden rounded-t-lg">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}