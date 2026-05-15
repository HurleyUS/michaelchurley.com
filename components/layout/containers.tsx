import { cn } from "@/lib/utils";

export function ContainerBoxed({
  children,
  props,
  propsInner,
}: {
  children: React.ReactNode;
  props?: React.HTMLAttributes<HTMLDivElement>;
  propsInner?: {
    className?: string;
  } & Partial<React.HTMLAttributes<HTMLDivElement>>;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-stretch justify-start gap-md p-md w-full max-w-[1170px] mx-auto",
        props?.className,
      )}
      {...props}
    >
      <div
        className={cn("flex flex-col items-stretch justify-start gap-md", propsInner?.className)}
        {...propsInner}
      >
        {children}
      </div>
    </div>
  );
}

export function ContainerBoxedCenter({
  children,
  props,
  propsInner,
}: {
  children: React.ReactNode;
  props?: React.HTMLAttributes<HTMLDivElement>;
  propsInner?: {
    className?: string;
  } & Partial<React.HTMLAttributes<HTMLDivElement>>;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-stretch lg:items-center justify-center gap-md p-md w-full max-w-[1170px] mx-auto",
        props?.className,
      )}
      {...props}
    >
      <div
        className={cn(
          "flex flex-col items-stretch lg:items-center justify-center gap-md",
          propsInner?.className,
        )}
        {...propsInner}
      >
        {children}
      </div>
    </div>
  );
}
