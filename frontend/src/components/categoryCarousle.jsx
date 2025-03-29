import {Button} from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const categories = [
  "Software Developer",
  "Web Developer",
  "Mobile Developer",
  "Data Engineer",
  "AI Engineer",
  "Full Stack Developer",
  "Data Scientist",
  "Product Manager",
  "UX/UI Designer",
  "DevOps Engineer",
  "Cloud Engineer",
];

const categoryCarousle = () => {
  return (
    <>
      <Carousel className="w-full ">
        <CarouselContent className="flex items-center justify-center  ">
          {categories.map((category, index) => (
            <CarouselItem
              variant="outline"
              key={index}
              className="md:basis-1/2 lg:basis-1/2 "
            >
              <Button variant="outline" className="cursor-pointer rounded-full">
                {category}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </>
  );
};

export default categoryCarousle;
