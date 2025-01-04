import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Globe } from "lucide-react";

const projects = [
  {
    title: "Noughts and Crosses",
    description:
      "A modern implementation of the classic game with AI opponent and multiplayer support",
    image: "/tic-tac-toe.png",
    github: "https://github.com/Sneha14-Gupta/noughts-crosses",
    demo: "https://noughts-and-crosses14.netlify.app/",
    tags: ["React.js", "TypeScript"],
  },
  {
    title: "Config-Auto ",
    description:
      "Tool for Car configuration files for various development environments",
    image: "/config-auto.png",
    github: "https://github.com/Sneha14-Gupta/config-auto",
    demo: "https://config-auto.vercel.app/",
    tags: ["Next.js", "TypeScript", "build tool"],
  },
  {
    title: "Rock Paper Scissors Lizard Spock",
    description:
      "Extended version of Rock Paper Scissors with beautiful animations and online multiplayer",
    image: "/rpsls.png",
    github: "https://github.com/Sneha14-Gupta/rock-paper-scissors-mania",
    demo: "https://rpsls-mania.netlify.app/",
    tags: ["Html", "Tailwind CSS", "JavaScript", "Parcel"],
  },
  {
    title: "Untitled-ui",
    description: "This is basically a form ",
    image: "/untitled-ui.png",
    github: "https://github.com/Sneha14-Gupta/untitled-ui",
    demo: "https://untitled-ui-pi.vercel.app/",
    tags: ["TypeScript", "Tailwind CSS", "React.js"],
  },
  {
    title: "Todomatic",
    description:
      "A feature-rich todo application with task categorization, reminders, and progress tracking",
    image: "/todo.png",
    github: "https://github.com/Sneha14-Gupta/TodoMatic-V2",
    demo: "https://todomatic-14.netlify.app/",
    tags: ["React", "TypeScript", "Tailwind CSS", "DaisyUI", "Vite"],
  },
  {
    title: "Pokedex",
    description:
      "An interactive Pokedex application showcasing detailed information about Pokemon",
    image: "/pokedex.png",
    github: "https://github.com/Sneha14-Gupta/pokedex",
    demo: "https://pokedex-14.netlify.app/",
    tags: ["React.js", "PokeAPI", "Tailwind CSS", "Fuzzy Search"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="group hover:shadow-lg transition-all duration-300 border-primary/20 bg-card overflow-hidden transform hover:-translate-y-2 hover:scale-105"
            >
              <CardHeader>
                <CardTitle className="transition-colors duration-300 group-hover:text-primary">
                  {project.title}
                </CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-hidden rounded-md mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-secondary/20 text-secondary rounded-full text-sm transition-colors duration-300 group-hover:bg-secondary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="transition-colors duration-300 group-hover:border-primary group-hover:text-primary"
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button
                  size="sm"
                  asChild
                  className="transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground"
                >
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="w-4 h-4 mr-2" />
                    Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
