import Container from "@/components/Container";
import Image from "next/image";
import mobileHeroImage from "../public/image-hero-mobile.png";
import desktopHeroImage from "../public/image-hero-desktop.png";
import { Button } from "@/components/ui/button";
import databizImg from "../public/client-databiz.svg";
import audiophileImg from "../public/client-audiophile.svg";
import meetImg from "../public/client-meet.svg";
import makerImg from "../public/client-maker.svg";

const HomePage = () => {
  return (
    <Container>
      <section className="mt-10 h-screen  grid-cols-2 items-center justify-center  md:grid">
        <div className="col-start-2 row-span-2 h-auto w-auto items-center justify-center md:relative ">
          <div className="relative mx-auto h-[50vh] w-full md:hidden ">
            <Image
              src={mobileHeroImage}
              fill
              alt="mobile hero image"
              className=" object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="relative mx-auto hidden h-[70vh] w-3/4 md:inline-block">
            <Image
              src={desktopHeroImage}
              fill
              alt="desktop hero image"
              className="object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 33vw"
            />
          </div>
        </div>
        <div className="row-start-1 space-y-4 pb-10 text-center md:mx-auto md:h-1/2 md:w-2/3 md:space-y-10 md:pt-28 md:text-start">
          <h1 className="text-4xl font-bold text-AlmostBlack md:text-7xl">
            Make remote work
          </h1>
          <p className="text-base text-MediumGray md:text-lg">
            Get your team in sync, no matter your location.Streamline processes,
            create team rituals, and watch productivity soar.
          </p>
          <Button
            variant="default"
            className="rounded-2xl px-6 py-6 text-base text-AlmostWhite"
          >
            Learn More
          </Button>
        </div>
        <div className="mx-auto flex w-full items-center justify-center gap-x-8">
          <Image
            src={databizImg}
            alt="databiz"
            className="inline-block h-10 w-14 object-contain md:w-[7rem]"
          />
          <Image
            src={audiophileImg}
            alt="audiophile"
            className="inline-block w-14 object-contain  md:w-[7rem]"
          />
          <Image
            src={meetImg}
            alt="meet"
            className="inline-block w-14 object-contain md:w-[7rem]"
          />
          <Image
            src={makerImg}
            alt="maker"
            className="inline-block w-14 object-contain md:w-[7rem]"
          />
        </div>
      </section>
    </Container>
  );
};

export default HomePage;
