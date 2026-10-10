export const dynamic = "force-dynamic";

import { ContainerBoxedCenter } from "@/components/layout/containers";
import { Button } from "@/components/ui/button";
import HeroABTest from "@/components/hero/hero-ab-test";
import Image from "next/image";
import Link from "next/link";
import { PiCalendarPlusLight } from "react-icons/pi";
import BookingForm from "@/components/booking/booking-form";
import BookingModal from "@/components/booking/booking-modal";
import ProductHuntNaarchyBanner from "@/components/product-hunt-naarchy-banner";
import ProductHuntOmadesignEmbed from "@/components/product-hunt-omadesign-embed";
import { formatWorkDates, RESUME } from "@/lib/resume";
import { PROFILE } from "@/lib/site-profile";
import type { Metadata } from "next";
import { JsonLd } from "@/components/seo/json-ld";
import { profilePageSchema } from "@/lib/structured-data";

export const metadata: Metadata = { alternates: { canonical: "/" } };

export default function Home() {
  return (
    <>
      <JsonLd data={profilePageSchema()} />
      <section className="flex flex-col bg-gradient-to-b from-Base to-Crust static">
        <Image
          src="/hero-bg.png"
          width={3840}
          height={1864}
          alt=""
          className="absolute inset-0 pointer-events-none mix-blend-overlay w-full h-auto"
        />
        <ContainerBoxedCenter
          propsInner={{
            className:
              "flex flex-col items-stretch lg:items-center justify-center gap-md grow w-full",
          }}
        >
          <div className="flex flex-col sm:flex-row items-stretch justify-center text-xs gap-md grow w-full relative">
            <div className="flex flex-col items-stretch justify-center grow w-full">
              <h1 className="text-xl font-black">{PROFILE.name}</h1>
              <p className="text-lg font-bold">{RESUME.headline}</p>
              <p className="text-sm">
                {RESUME.location} ·{" "}
                <Link href={PROFILE.telephoneHref} className="underline">
                  {PROFILE.telephoneDisplay}
                </Link>{" "}
                ·{" "}
                <Link href={`mailto:${PROFILE.email}`} className="underline">
                  {PROFILE.email}
                </Link>
              </p>
            </div>

            <div className="flex flex-col items-stretch justify-center gap-md grow w-full">
              <HeroABTest />
              <div className="flex items-center justify-end gap-md px-md w-full text-xs">
                <Link href={`mailto:${PROFILE.email}`}>
                  <Button variant="outline">Email Me</Button>
                </Link>
                <div className="relative coin-bounce">
                  <Link href="tel:+18285931935" className="relative z-10">
                    <Button variant="secondary" className="font-black">
                      Call or Text Me
                    </Button>
                  </Link>
                  <Image
                    src="/icon.gif"
                    width={32}
                    height={32}
                    alt=""
                    className="block absolute left-1/2 top-1/2 coin z-0"
                  />
                </div>
                <BookingModal iconOnly />
              </div>
            </div>
          </div>
        </ContainerBoxedCenter>
      </section>

      <ProductHuntNaarchyBanner />
      <ProductHuntOmadesignEmbed />
      <section
        id="who-is-michael-c-hurley"
        aria-labelledby="who-heading"
        className="flex flex-col bg-Latte-Crust bg-gradient-to-b from-Latte-Crust to-Latte-Mantle dark:bg-Mocha-Crust dark:from-Mocha-Crust dark:to-Mocha-Mantle py-4xl"
      >
        <ContainerBoxedCenter
          propsInner={{
            className:
              "flex flex-col items-stretch justify-center gap-md grow w-full max-w-[56rem] mx-auto",
          }}
        >
          <h2 id="who-heading" className="font-black">
            Who is Michael C. Hurley?
          </h2>
          <p className="text-sm">{RESUME.summary}</p>
        </ContainerBoxedCenter>
      </section>
      <section id="skills" aria-labelledby="skills-heading" className="flex flex-col py-4xl">
        <ContainerBoxedCenter
          propsInner={{
            className: "flex flex-col items-stretch justify-center gap-md grow w-full",
          }}
        >
          <div className="border-gradient-animated shadow-2xl w-full">
            <div className="flex flex-col items-stretch justify-start text-xs gap-md grow w-full bg-gradient-to-b from-background to-Latte-Crust dark:to-Mocha-Crust p-lg border-background rounded-lg">
              <h2 id="skills-heading" className="font-black sm:text-center">
                Core Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md text-left">
                {RESUME.skills.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-stretch justify-start">
                    <h3 className="text-md font-bold">{skill.name}</h3>
                    <ul className="list-disc ml-md">
                      {skill.keywords.map((keyword) => (
                        <li key={keyword}>{keyword}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ContainerBoxedCenter>
      </section>
      <section
        id="experience"
        aria-labelledby="experience-heading"
        className="flex flex-col bg-gradient-to-b from-Mantle/50 to-Base/50 py-4xl"
      >
        <ContainerBoxedCenter
          propsInner={{
            className: "flex flex-col items-stretch justify-center gap-md grow w-full",
          }}
        >
          <h2 id="experience-heading" className="font-black sm:text-center">
            Experience
          </h2>
          <div className="flex flex-col flex-wrap sm:flex-row items-stretch justify-start text-xs text-left grow w-full">
            {RESUME.work
              .filter((work) => !work.earlier)
              .map((work) => (
                <article
                  key={work.name}
                  className="flex flex-col items-stretch justify-start p-md w-full sm:w-1/2"
                >
                  <h3 className="text-md font-bold">
                    {work.position},{" "}
                    {work.url ? <Link href={work.url}>{work.name}</Link> : work.name}
                  </h3>
                  <p>
                    <strong>{formatWorkDates(work)}</strong>
                    {[work.location, work.description, work.note]
                      .filter(Boolean)
                      .map((item) => ` · ${item}`)}
                  </p>
                  <ul className="list-disc ml-md">
                    {work.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
          </div>
          <h3 id="earlier-roles" className="text-md font-bold sm:text-center">
            Earlier SEO and Marketing Roles
          </h3>
          <ul className="list-disc ml-md text-xs text-left">
            {RESUME.work
              .filter((work) => work.earlier)
              .map((work) => (
                <li key={work.name}>
                  <strong>
                    {work.position}, {work.name}
                  </strong>
                  {work.location ? `, ${work.location}` : ""} ({formatWorkDates(work)}):{" "}
                  {work.highlights.join(" ")}
                </li>
              ))}
          </ul>
        </ContainerBoxedCenter>
      </section>
      <section id="education" aria-labelledby="education-heading" className="flex flex-col py-4xl">
        <ContainerBoxedCenter
          propsInner={{
            className: "flex flex-col items-stretch justify-center gap-md grow w-full",
          }}
        >
          <h2 id="education-heading" className="font-black sm:text-center">
            Education
          </h2>
          <div className="flex flex-col sm:flex-row items-stretch justify-start gap-md text-xs grow w-full">
            {RESUME.education.map((edu) => (
              <div
                key={edu.institution}
                className="flex flex-col items-stretch justify-start w-full sm:w-1/2 border-gradient-grayscale hover:border-gradient-animated"
              >
                <div className="flex flex-col items-stretch justify-start w-full bg-background rounded-lg p-md">
                  <h3 className="text-md font-bold">{edu.institution}</h3>
                  <p>
                    <strong>{edu.studyType}</strong> {edu.area}, {edu.startDate} - {edu.endDate}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ContainerBoxedCenter>
      </section>
      {/* Contact Form Section */}
      <section id="book" className="flex flex-col bg-Latte-Mantle dark:bg-Mocha-Mantle py-4xl">
        <ContainerBoxedCenter
          props={{
            className:
              "flex flex-col items-stretch lg:items-center justify-center gap-md p-md w-full max-w-[800px] mx-auto p-0",
          }}
          propsInner={{
            className:
              "flex flex-col items-stretch lg:items-center justify-center gap-lg grow w-full",
          }}
        >
          <div className="flex flex-col items-center justify-start text-xs sm:text-center gap-md grow w-full">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
              <PiCalendarPlusLight className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-black">Book a Meeting</h2>
            <p className="text-muted-foreground max-w-[32rem]">
              Schedule a 30-minute call to discuss business opportunities, technology projects, or
              collaboration ideas.
            </p>
          </div>
          <div className="w-full bg-background rounded-lg p-lg border border-border shadow-sm">
            <BookingForm />
          </div>
        </ContainerBoxedCenter>
      </section>

      {/* CTA Section */}
      <section className="flex flex-col bg-Latte-Base dark:bg-Mocha-Base py-4xl">
        <ContainerBoxedCenter
          props={{
            className:
              "flex flex-col items-stretch lg:items-center justify-center gap-md p-md w-full max-w-[1170px] mx-auto p-0",
          }}
          propsInner={{
            className:
              "flex flex-col items-stretch lg:items-center justify-center gap-md grow w-full",
          }}
        >
          <div className="flex flex-col items-center justify-start text-xs sm:text-center gap-md grow w-full">
            <h2 className="font-black">Work with Michael</h2>
            <p className="text-muted-foreground max-w-[32rem]">
              Schedule a 30-minute call to discuss your project, business needs, or collaboration
              opportunities.
            </p>
            <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center p-md text-xs w-full max-w-[42rem] mx-auto gap-md">
              <Link href="/book" className="block border-gradient-animated">
                <Button size="lg" className="gap-2">
                  <PiCalendarPlusLight className="w-5 h-5" />
                  Book a Meeting
                </Button>
              </Link>
              <Link href="tel:+18285931935" className="block border-gradient-animated">
                <Button variant="secondary">Call or Text Me</Button>
              </Link>
              <Link href="#contact" className="block">
                <Button variant="outline">Send a Message</Button>
              </Link>
            </div>
          </div>
        </ContainerBoxedCenter>
      </section>
    </>
  );
}
