export const dynamic = "force-dynamic";

import { ContainerBoxedCenter } from "@/components/layout/containers";
import Zaxbys from "@/components/dynamic/zaxbys";
import { Button } from "@/components/ui/button";
import HeroABTest from "@/components/hero/hero-ab-test";
import Image from "next/image";
import Link from "next/link";
import { PiCalendarPlusLight } from "react-icons/pi";
import BookingForm from "@/components/booking/booking-form";
import BookingModal from "@/components/booking/booking-modal";

export default function Home() {
  return (
    <>
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
              <h1 className="text-xl font-black">Hire Michael C. Hurley</h1>
              <p className="text-lg">
                I am a business operations and technology professional with over
                20 years of experience in management, sales, marketing + growth,
                graphic design, and software development.
              </p>
            </div>

            <div className="flex flex-col items-stretch justify-center gap-md grow w-full">
              <HeroABTest />
              <div className="flex items-center justify-end gap-md px-md w-full text-xs">
                <Link href="mailto:michaelhurley.pj@gmail.com">
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
      <section className="flex flex-col bg-Latte-Crust bg-gradient-to-b from-Latte-Crust to-Latte-Mantle dark:bg-Mocha-Crust dark:from-Mocha-Crust dark:to-Mocha-Mantle py-4xl">
        <ContainerBoxedCenter
          props={{
            className:
              "flex flex-col items-stretch lg:items-center justify-center gap-md p-md w-full max-w-[1345px] mx-auto p-0",
          }}
          propsInner={{
            className:
              "flex flex-col items-stretch lg:items-center justify-center gap-md grow w-full",
          }}
        >
          <div className="border-gradient-animated shadow-2xl w-full">
            <div className="flex flex-col items-stretch justify-start text-xs sm:text-center gap-md grow w-full bg-gradient-to-b from-background to-Latte-Crust dark:to-Mocha-Crust p-lg border-background rounded-lg">
              <h2 className="font-black">Proven Skills</h2>
              <p>
                I have 10,000 - 52,000 hours of active, professional career
                experience in management, technology, marketing and sales.
              </p>
              <div className="flex flex-col flex-wrap wrap sm:flex-row items-stretch justify-start sm:p-md gap-md sm:gap-0 text-xs grow w-full text-left">
                <div className="flex flex-col items-stretch justify-start grow w-full sm:w-1/2 md:w-1/4">
                  <h2 className="text-lg font-bold">Management</h2>
                  <ul className="list-disc ml-md">
                    <li>Leadership</li>
                    <li>Strategy</li>
                    <li>Operations</li>
                    <li>Sales</li>
                    <li>Marketing</li>
                    <li>Growth</li>
                  </ul>
                </div>

                <div className="flex flex-col items-stretch justify-start grow w-full sm:w-1/2 md:w-1/4">
                  <h2 className="text-lg font-bold">Technology</h2>
                  <ul className="list-disc ml-md">
                    <li>Software Development</li>
                    <li>Web Development</li>
                    <li>Graphic Design</li>
                    <li>UI/UX Design</li>
                    <li>Content Creation</li>
                    <li>Video Editing</li>
                  </ul>
                </div>

                <div className="flex flex-col items-stretch justify-start grow w-full sm:w-1/2 md:w-1/4">
                  <h2 className="text-lg font-bold">Marketing</h2>
                  <ul className="list-disc ml-md">
                    <li>Branding</li>
                    <li>Web Design</li>
                    <li>Messaging</li>
                    <li>Strategy</li>
                    <li>Distribution</li>
                  </ul>
                </div>

                <div className="flex flex-col items-stretch justify-start grow w-full sm:w-1/2 md:w-1/4">
                  <h2 className="text-lg font-bold">Sales</h2>
                  <ul className="list-disc ml-md">
                    <li>Direct to Customer + B2B</li>
                    <li>Strategy</li>
                    <li>Closing</li>
                    <li>Retention</li>
                    <li>Reputation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </ContainerBoxedCenter>
      </section>
      <section className="bg-Latte-Crust bg-gradient-radial from-Latte-Crust to-Latte-Mantle dark:bg-Mocha-Crust dark:from-Mocha-Crust dark:to-Mocha-Mantle overflow-visible">
        <section className="flex flex-col py-4xl">
          <ContainerBoxedCenter
            propsInner={{
              className:
                "flex flex-col items-stretch lg:items-center justify-center gap-md grow w-full",
            }}
          >
            <div className="flex flex-col items-stretch justify-start text-xs sm:text-center gap-md grow w-full">
              <h2 className="font-black text-md">
                Full-Stack Development + Sr. Level Software Engineering
              </h2>
              <p>
                Proficient in C, C derivative languages, Scripting languages,
                Web technologies, App development and tools associated with
                these:
              </p>

              <div className="flex flex-col md:flex-row items-stretch justify-start gap-md py-md text-xs grow w-full text-left">
                <div className="flex flex-col items-stretch justify-start grow w-full">
                  <h3 className="text-md font-bold">Languages</h3>
                  <ul className="list-disc ml-md">
                    <li>
                      C/C++/Objective-C/Zig/<strong>Swift</strong>
                    </li>
                    <li>Python/Perl/Ruby</li>
                    <li>
                      <strong>PHP</strong>/SQL/<strong>HTML</strong>/
                      <strong>CSS</strong>
                    </li>
                    <li>
                      Javascript/<strong>Typescript</strong>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col items-stretch justify-start grow w-full">
                  <h3 className="text-md font-bold">Frameworks</h3>
                  <ul className="list-disc ml-md">
                    <li>
                      <strong>React/Next.js</strong>
                    </li>
                    <li>
                      <strong>Wordpress + Elementor</strong>
                    </li>
                    <li>Laravel/Symfony</li>
                    <li>
                      <i>Drupal/Joomla/Elgg</i>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col items-stretch justify-start grow w-full">
                  <h3 className="text-md font-bold">Tools</h3>
                  <ul className="list-disc ml-md">
                    <li>
                      <strong>LazyGit</strong>/Git/<i>GitHub</i>
                    </li>
                    <li>AWS/GCP</li>
                    <li>
                      <strong>Vercel</strong>
                    </li>
                    <li>
                      <strong>
                        <u>zsh/tmux/neovim</u>
                      </strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </ContainerBoxedCenter>
        </section>
        <section className="flex flex-col py-4xl relative pb-6xl">
          <Image
            src="/pop-noodle.svg"
            width={3840}
            height={2160}
            alt=""
            className="absolute inset-0 pointer-events-none mix-blend-overlay w-full h-auto -z-[0] -translate-y-4xl"
          />
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
            <div className="flex flex-col items-stretch justify-start text-xs sm:text-center gap-md grow w-full">
              <h2 className="font-black">Education</h2>
              <div className="flex flex-col flex-wrap wrap sm:flex-row sm:flex-nowrap items-stretch justify-start gap-md sm:p-md text-xs grow w-full">
                <div className="flex flex-col items-stretch justify-start w-full sm:w-1/2 border-gradient-grayscale hover:border-gradient-animated">
                  <div className="flex flex-col items-stretch justify-start w-full bg-background rounded-lg p-md">
                    <h3 className="text-md font-bold">
                      Trident Technical College
                    </h3>
                    <p>
                      <strong>A.A.</strong> Commercial Graphics, 2001 - 2003
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-stretch justify-start w-full sm:w-1/2 border-gradient-grayscale hover:border-gradient-animated">
                  <div className="flex flex-col items-stretch justify-start w-full bg-background rounded-lg p-md">
                    <h3 className="text-md font-bold">College of Charleston</h3>
                    <p>
                      <strong>B.S.</strong> Computer Science, 2003 - 2007
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ContainerBoxedCenter>
        </section>
      </section>
      <section className="flex flex-col bg-gradient-to-b from-Mantle/50 to-Base/50 z-10 backdrop-opacity-50 backdrop-blur-lg relative">
        <div className="w-full p-0 bg-[length:720px_720px] bg-no-repeat bg-gradient-radial bg-center from-white-600/50 to-Latte-Mantle/0 h-2 dark:from-Mocha-Surface2/50 dark:to-Mocha-Mantle/0 absolute top-0">
          &nbsp;
        </div>
        <ContainerBoxedCenter
          props={{
            className:
              "flex flex-col items-stretch lg:items-center justify-center gap-md p-md w-full max-w-[1170px] mx-auto bg-[length:640px_640px] bg-no-repeat bg-gradient-radial from-Latte-Base to-Latte-Mantle/0 bg-[center_top_-320px] py-4xl dark:from-Mocha-Surface0 dark:to-Mocha-Mantle/0",
          }}
          propsInner={{
            className:
              "flex flex-col items-stretch lg:items-center justify-center gap-md grow w-full",
          }}
        >
          <div className="flex flex-col items-stretch justify-start text-xs sm:text-center gap-md grow w-full">
            <h2 className="font-black">Experience</h2>
            <div className="flex flex-col flex-wrap wrap sm:flex-row items-stretch justify-start text-xs text-left grow w-full">
              {/* Zaxby's Sylva/Waynesville, NC */}
              <Zaxbys />
              <div className="flex flex-col items-stretch justify-start p-md w-full sm:w-1/2">
                <h3 className="text-md font-bold">
                  <strong>Hustle Launch</strong>
                </h3>
                <p>
                  <strong>Director</strong>, 02/2024 - Present
                </p>
                <p>
                  MGR: 2.5k - <strong>$7k</strong>
                </p>
                <ul className="list-disc ml-md">
                  <li>
                    {
                      "Oversee all aspects of the company's success, including but not limited to: sales, marketing, finance, human resources, and technology."
                    }
                  </li>
                  <li>{"Responsible for the company's growth and success."}</li>
                  <li>
                    {
                      "Manage the company's finances, including but not limited to: revenue, expenses, and cash flow."
                    }
                  </li>
                  <li>
                    {
                      "Manage the company's human resources, including but not limited to: employee recruitment, training, and development."
                    }
                  </li>
                  <li>
                    {
                      "Manage the company's technology, including but not limited to: software development, hardware, and infrastructure."
                    }
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-stretch justify-start p-md w-full sm:w-1/2">
                <h3 className="text-md font-bold">
                  <strong>Kaibo, LLC D/B/A Realay.com</strong>
                </h3>
                <p>
                  <strong>Chief Technology Officer</strong>, 03/2023 - 04/2024
                </p>
                <p>
                  Salary: <strong>$60k++</strong>/yr
                </p>
                <ul className="list-disc ml-md">
                  {[
                    "Responsible for the development and maintenance of the company's technology, including but not limited to: infrastructure, database design, software engineering, user experience, design, video production, investment acquisition, direct to customer marketing, sales and growth strategy.",
                    "Support c-suite with technology and infrastructure for analyzing and monitoring operations, usage, and performance.",
                    "Support clients with usability, maintenance, and direct technical support for onboarding, integration, and troubleshooting.",
                    "Collaborate with clients to develop and implement solutions to meet their needs.",
                  ].map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-col items-stretch justify-start p-md w-full sm:w-1/2">
                <h3 className="text-md font-bold">
                  <strong>White Fox Studios</strong>
                </h3>
                <p>
                  <strong>Director</strong>, 02/2015 - 02/2024
                </p>
                <p>
                  Salary: $28k/yr - <strong>$60k++</strong>/yr
                </p>
                <ul className="list-disc ml-md">
                  {` - Responsible for all aspects of the company's success, including but not limited to: sales, marketing, finance, human resources, and technology.
 - Develop software and systems to support the business and business clients.
 - Sell marketing and web design services to clients.
 - Provide support and maintenance for clients' websites and online presence.
 - Collaborate with clients to develop and implement solutions to meet their needs.
 - Consult with clients on business strategy, marketing, and sales.
 - Conduct market research and analysis to inform business decisions and client marketing strategies.
 - Manage company finances:revenue, expenses, and cash flow.
 - Manage sales, marketing, and customer satisfaction.
 - Manage teams and staff: recruitment, training, development, performance, and compensation.`
                    .replace(/ - /g, "")
                    .split("\n")
                    .map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                </ul>
              </div>
              <div className="flex flex-col items-stretch justify-start p-md w-full sm:w-1/2">
                <h3 className="text-md font-bold">
                  <strong>{"Papa John's Waynesville/Franklin, NC"}</strong>
                </h3>
                <p>
                  <strong>Franchisee Partner</strong>, 06/2014 - 02/2015
                </p>
                <p>
                  Salary: $7.50/h - <strong>$27k</strong>/yr
                </p>
                <ul className="list-disc ml-md">
                  {` - Responsible for the management of the store's operations, including but not limited to: scheduling, customer service, inventory, sales, recruitment, human resources, cost analysis, budgeting and reporting to franchisee/corporate.
 - Manage the store's finances, including but not limited to: revenue, expenses, and cash flow.
 - Manage the store's sales, marketing, and customer satisfaction.`
                    .replace(/ - /g, "")
                    .split("\n")
                    .map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                </ul>
              </div>
              <div className="flex flex-col items-stretch justify-start p-md w-full sm:w-1/2">
                <h3 className="text-md font-bold">
                  <strong>{"Hurley's Creekside Dining & Rhum Bar"}</strong>
                </h3>
                <p>
                  <strong>Co-Owner/Operator</strong>, 07/2010 - 05/2014
                </p>
                <p>
                  AGR: $1.3M - <strong>${1.3 * 4.1}M</strong>
                </p>
                <p>
                  <strong>Acquired</strong> Arthur Robert Frady & Sons
                </p>
                <ul className="list-disc ml-md">
                  {` - Responsible for all aspects of the restaurant's success, including but not limited to: brand design, marketing, finance, human resources, and technology.
 - Manage the restaurant's finances, including but not limited to: revenue, expenses, and cash flow.
 - Manage the restaurant's human resources, including but not limited to: employee recruitment, training and working all positions, and development.
 - Manage the restaurant's technology, including but not limited to: software, hardware, and infrastructure.
 - Manage the restaurant's marketing, including but not limited to: advertising, social media, and public relations.
 - Manage the restaurant's branding, including but not limited to: logo, web & menu design, presentation, interior design, and signage.`
                    .replace(/ - /g, "")
                    .split("\n")
                    .map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                </ul>
              </div>
              <div className="flex flex-col items-stretch justify-start p-md w-full sm:w-1/2">
                <h3 className="text-md font-bold">
                  <strong>{"StudioTWLEVE"}</strong>
                </h3>
                <p>
                  <strong>Director</strong>, 01/2007 - 07/2010
                </p>
                <p>
                  ANP: $50k - <strong>$387k</strong>
                </p>
                <p>
                  <strong>Acquired</strong> TB Creative
                </p>
                <ul className="list-disc ml-md">
                  {` - Responsible for all aspects of the studio's success, including but not limited to: brand design, marketing, finance, human resources, and technology.
 - Manage the studio's finances, including but not limited to: revenue, expenses, and cash flow.
 - Manage the studio's human resources, including but not limited to: employee recruitment, training, and development.
 - Manage the studio's technology, including but not limited to: software, hardware, and infrastructure.
 - Manage the studio's marketing, including but not limited to: advertising, social media, and public relations.
 - Manage the studio's branding, including but not limited to: logo, web & menu design, presentation, interior design, and signage.`
                    .replace(/ - /g, "")
                    .split("\n")
                    .map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                </ul>
              </div>
              <div className="flex flex-col items-stretch justify-start p-md w-full sm:w-1/2">
                <h3 className="text-md font-bold">
                  <strong>{"Signs 'R' Us"}</strong>
                </h3>
                <p>
                  <strong>Production Manager</strong>, 07/2003 - 01/2007
                </p>
                <p>
                  Salary: $10.50/h - <strong>$42k</strong>/yr
                </p>
                <ul className="list-disc ml-md">
                  {` - Responsible for all sign design and production, including but not limited to: design team output, production + packaging, equipment maintenance, and supplies.
 - Design team output: design review, customer feedback, and revisions.
 - Production + packaging: ensure the quality of sign materials, materials, final product, and packaging presentation.
 - Equipment maintenance: repair, maintain and replace equipement as needed.
 - Supplies: manage raw material inventory.`
                    .replace(/ - /g, "")
                    .split("\n")
                    .map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                </ul>
              </div>
              <div className="flex flex-col items-stretch justify-start p-md w-full sm:w-1/2">
                <h3 className="text-md font-bold">
                  <strong>{"Corporate Cleaning Services, Inc."}</strong>
                </h3>
                <p>
                  <strong>Regional Manager</strong>, 06/1996 - 06/2003
                </p>
                <p>
                  Salary: $7.50/h - <strong>$35k</strong>/yr
                </p>
                <ul className="list-disc ml-md">
                  {` - Responsible for all customer satisfaction for all clients in the greater south carolina lowcountry area, including but not limited to: team management and deployment, crisis response, HR, supply distribution, scheduling, recruitment, training and compensation, transporation, cleaning and grounds maintenance.
 - Additionally resonsible for all logo design, web design, and marketing/advertising for the company.`
                    .replace(/ - /g, "")
                    .split("\n")
                    .map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                </ul>
              </div>
            </div>
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
            <p className="text-muted-foreground max-w-lg">
              Schedule a 30-minute call to discuss business opportunities, 
              technology projects, or collaboration ideas.
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
            <h2 className="font-black">Ready To Bring Me On Board?</h2>
            <p className="text-muted-foreground max-w-lg">
              Schedule a 30-minute call to discuss your project, business needs, 
              or collaboration opportunities.
            </p>
            <div className="flex flex-col flex-wrap wrap sm:flex-row items-center justify-center p-md text-xs grow w-full gap-md">
              <Link
                href="/book"
                className="block border-gradient-animated"
              >
                <Button size="lg" className="gap-2">
                  <PiCalendarPlusLight className="w-5 h-5" />
                  Book a Meeting
                </Button>
              </Link>
              <Link
                href="tel:+18285931935"
                className="block border-gradient-animated"
              >
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
