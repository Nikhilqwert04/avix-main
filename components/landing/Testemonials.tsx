import { Star } from "lucide-react";
import InfoPill from "../ui/InfoPill";
import MainHeading from "../ui/MainHeading";

type TestimonialCardProps = {
  name: string;
  role: string;
  quote: string;
  image: string;
};

function TestimonialCard({ name, role, quote, image }: TestimonialCardProps) {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      <div className="flex h-112.5 flex-col justify-between p-2">
        <div className="flex items-center justify-between p-2">
          <div>
            <h1>{name}</h1>
            <p className="text-[10px]">{role}</p>
          </div>
          <div className="flex gap-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill="white" stroke="white" />
            ))}
          </div>
        </div>
        <div className="max-w-70 text-sm font-semibold">{quote}</div>
      </div>
      <div className="absolute top-0 -z-99">
        <img className="-z-9 h-fit w-fit" src={image} alt={name} />
      </div>
    </div>
  );
}

const testimonials: TestimonialCardProps[] = [
  {
    name: "Daniel Roy",
    role: "Manager, BrightStack",
    quote:
      "They understood our workflow instantly. The AI integrations removed so much manual work and saved significant time.",
    image:
      "https://i.pinimg.com/736x/ce/1c/b1/ce1cb1c471f0011d93dacc29ce85b37a.jpg",
  },
  {
    name: "Sarah Chen",
    role: "CEO, NovaPulse",
    quote:
      "The automation they built transformed how our team operates. We went from hours of manual data entry.",
    image:
      "https://i.pinimg.com/1200x/3b/11/41/3b1141a3657aadacbb9c659388131123.jpg",
  },
  {
    name: "Marcus Webb",
    role: "CTO, Driftline",
    quote:
      "Outstanding execution from start to finish. Their AI solutions integrated seamlessly with our existing stack.",
    image:
      "https://i.pinimg.com/1200x/16/61/70/1661707d7524042da1b13236e832b2b7.jpg",
  },
];

export default function Testemonials() {
  return (
    <div className="flex flex-col gap-2">
      <InfoPill title="Testimonial" />
      <div>
        <MainHeading title="Clients Who’ve " className="text-start" />
        <MainHeading title="Seen the Difference" className="text-start" />
      </div>

      <div className="my-10 grid h-112.5 w-full grid-cols-3 gap-2.5">
        {testimonials.map((t) => (
          <TestimonialCard key={t.name} {...t} />
        ))}
      </div>
    </div>
  );
}
