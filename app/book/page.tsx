import { ContainerBoxedCenter } from "@/components/layout/containers";
import BookingForm from "@/components/booking/booking-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Meeting | Michael C. Hurley",
  description: "Schedule a 30-minute meeting with Michael C. Hurley to discuss business, technology, or collaboration opportunities.",
};

export default function BookPage() {
  return (
    <div className="w-full min-h-screen bg-linear-to-b from-Base to-Crust">
      <section className="py-12 pt-24">
        <ContainerBoxedCenter
          propsInner={{
            className: "flex flex-col items-center justify-center gap-md grow w-full",
          }}
        >
          <div className="text-center space-y-4 mb-8">
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              Book a Meeting
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Schedule a 30-minute call to discuss business opportunities, 
              technology projects, or collaboration ideas.
            </p>
          </div>
          
          <div className="w-full max-w-2xl bg-background/80 backdrop-blur-xs rounded-xl p-8 shadow-lg border border-border/50">
            <BookingForm />
          </div>

          <div className="text-center mt-8 space-y-2">
            <p className="text-sm text-muted-foreground">
              Prefer to reach out directly?
            </p>
            <div className="flex items-center justify-center gap-4 text-sm">
              <a
                href="mailto:michaelhurley.pj@gmail.com"
                className="text-primary hover:underline"
              >
                Email
              </a>
              <span className="text-muted-foreground">•</span>
              <a
                href="tel:+18285931935"
                className="text-primary hover:underline"
              >
                (828) 593-1935
              </a>
            </div>
          </div>
        </ContainerBoxedCenter>
      </section>
    </div>
  );
}
