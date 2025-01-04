import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <Card className="max-w-3xl mx-auto">
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              I&apos;m a Full Stack Developer specializing in building exceptional digital experiences. 
              With a strong foundation in Next.js, TypeScript, and modern web technologies, 
              I create responsive and performant applications that solve real-world problems.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

