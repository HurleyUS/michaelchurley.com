"use client";

import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { LaunchEvents, useAnalytics } from "@/lib/analytics";
import { CATEGORIES, type Category, type Piece, parseKind } from "@/lib/portfolio/pieces";
import { cn } from "@/lib/utils";

function Media({
  piece,
  className,
  active,
  eager = false,
  fit = "cover",
}: {
  piece: Piece;
  className?: string;
  active: boolean;
  eager?: boolean;
  fit?: "cover" | "contain";
}) {
  const host = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isVideo = piece.src.endsWith(".mp4");
  const [load, setLoad] = useState(eager || !isVideo);
  const [inView, setInView] = useState(eager);

  useLayoutEffect(() => {
    const el = host.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        const visible = Boolean(entry?.isIntersecting);
        setInView(visible);
        if (visible) setLoad(true);
      },
      { rootMargin: eager ? "0px" : "240px 0px", threshold: 0.01 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [eager]);

  useEffect(() => {
    if (active) setLoad(true);
  }, [active]);

  const playing = active || inView;

  useEffect(() => {
    const el = videoRef.current;
    if (!el || !load) return;
    if (playing) {
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, [playing, load]);

  return (
    <div
      ref={host}
      className={cn("relative w-full overflow-hidden bg-muted", className)}
      style={{ aspectRatio: String(piece.aspect) }}
    >
      {load && piece.src.endsWith(".mp4") ? (
        <video
          ref={videoRef}
          src={piece.src}
          className={cn(
            "absolute inset-0 h-full w-full",
            fit === "contain" ? "object-contain" : "object-cover",
          )}
          muted
          loop
          playsInline
          autoPlay={playing}
          preload={eager ? "auto" : "metadata"}
        />
      ) : load ? (
        // eslint-disable-next-line @next/next/no-img-element
        // biome-ignore lint/performance/noImgElement: local work stills
        <img
          src={piece.src}
          alt=""
          className={cn(
            "absolute inset-0 h-full w-full",
            piece.category === "marks" || fit === "contain" ? "object-contain" : "object-cover",
          )}
          loading={eager ? "eager" : "lazy"}
        />
      ) : null}
    </div>
  );
}

function gridFor(category: Category) {
  if (category === "marks") return "grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4";
  if (category === "interfaces") return "grid grid-cols-2 gap-6 sm:grid-cols-3";
  return "grid gap-6 sm:grid-cols-2";
}

export default function Gallery({ pieces, kind }: { pieces: Piece[]; kind?: string }) {
  const { trackPortfolio } = useAnalytics();
  const [selected, setSelected] = useState<Category | "all">(() => parseKind(kind));
  const [picked, setPicked] = useState<Piece | null>(null);
  const [hoverId, setHoverId] = useState<string | null>(null);

  const visible = useMemo(
    () => (selected === "all" ? pieces : pieces.filter((p) => p.category === selected)),
    [pieces, selected],
  );

  const sections = useMemo(() => {
    if (selected !== "all") {
      const meta = CATEGORIES.find((c) => c.id === selected);
      return meta ? [{ ...meta, items: visible }] : [];
    }
    return CATEGORIES.map((category) => ({
      ...category,
      items: pieces.filter((p) => p.category === category.id),
    })).filter((section) => section.items.length > 0);
  }, [pieces, selected, visible]);

  const leadIds = useMemo(
    () =>
      new Set(
        sections
          .flatMap((section) => section.items)
          .slice(0, 4)
          .map((piece) => piece.id),
      ),
    [sections],
  );

  const pickedIndex = picked ? visible.findIndex((p) => p.id === picked.id) : -1;

  const go = (delta: number) => {
    if (!picked || visible.length === 0) return;
    const next = visible[(pickedIndex + delta + visible.length) % visible.length];
    if (next) setPicked(next);
  };

  useEffect(() => {
    trackPortfolio(LaunchEvents.PORTFOLIO_VIEW);
  }, [trackPortfolio]);

  useEffect(() => {
    if (!picked) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        go(1);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        go(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [picked, pickedIndex, visible]);

  const openPiece = (piece: Piece) => {
    setPicked(piece);
    trackPortfolio(LaunchEvents.PORTFOLIO_ITEM_CLICK, {
      portfolio_title: piece.title,
      portfolio_slug: piece.id,
      portfolio_category: piece.category,
    });
  };

  const setKind = (next: Category | "all") => {
    setSelected(next);
    window.history.replaceState(
      null,
      "",
      next === "all" ? "/portfolio" : `/portfolio?kind=${next}`,
    );
  };

  return (
    <>
      <div className="flex flex-wrap items-center justify-center gap-2">
        <button
          type="button"
          data-kind="all"
          onClick={() => setKind("all")}
          className={cn(
            "rounded-full px-3 py-1 text-sm transition-colors",
            selected === "all"
              ? "bg-primary text-primary-foreground"
              : "bg-muted text-muted-foreground hover:text-foreground",
          )}
          aria-pressed={selected === "all"}
        >
          All
          <span className="ml-1 text-xs opacity-70">{pieces.length}</span>
        </button>
        {CATEGORIES.map((category) => {
          const count = pieces.filter((p) => p.category === category.id).length;
          if (count === 0) return null;
          return (
            <button
              key={category.id}
              type="button"
              data-kind={category.id}
              onClick={() => setKind(category.id)}
              className={cn(
                "rounded-full px-3 py-1 text-sm transition-colors",
                selected === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground",
              )}
              aria-pressed={selected === category.id}
            >
              {category.label}
              <span className="ml-1 text-xs opacity-70">{count}</span>
            </button>
          );
        })}
      </div>

      {visible.length === 0 ? (
        <div className="py-12 text-center text-muted-foreground">
          <p>No work in this category yet.</p>
        </div>
      ) : (
        sections.map((section) => (
          <section key={section.id} className="flex flex-col gap-md">
            <h2 className="text-lg font-bold">{section.label}</h2>
            <div className={gridFor(section.id)}>
              {section.items.map((piece) => (
                <button
                  key={piece.id}
                  type="button"
                  onClick={() => openPiece(piece)}
                  onMouseEnter={() => setHoverId(piece.id)}
                  onMouseLeave={() => setHoverId((id) => (id === piece.id ? null : id))}
                  onFocus={() => setHoverId(piece.id)}
                  onBlur={() => setHoverId((id) => (id === piece.id ? null : id))}
                  className="group relative overflow-hidden rounded-lg border bg-card text-left transition-shadow hover:shadow-lg"
                >
                  <Media
                    piece={piece}
                    active={hoverId === piece.id}
                    eager={leadIds.has(piece.id)}
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent p-4 pt-12">
                    <h3 className="font-bold text-white">{piece.title}</h3>
                    <p className="text-xs text-white/70">{piece.href ? "Live site" : "Motion"}</p>
                  </div>
                </button>
              ))}
            </div>
          </section>
        ))
      )}

      <Dialog open={picked !== null} onOpenChange={(open) => !open && setPicked(null)}>
        <DialogContent className="flex h-[100dvh] max-h-[100dvh] w-full max-w-none flex-col gap-0 overflow-hidden rounded-none p-0 sm:h-auto sm:max-h-[92dvh] sm:w-[min(96vw,80rem)] sm:rounded-lg">
          {picked ? (
            <>
              <div className="flex items-start justify-between gap-4 px-6 pb-2 pr-14 pt-6">
                <div className="min-w-0 space-y-1">
                  <DialogTitle>{picked.title}</DialogTitle>
                  <DialogDescription>
                    {picked.category === "sites"
                      ? "Website"
                      : picked.category === "interfaces"
                        ? "Interface"
                        : "Mark"}
                  </DialogDescription>
                </div>
                {picked.href ? (
                  <Button asChild size="sm">
                    <a
                      href={picked.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() =>
                        trackPortfolio(LaunchEvents.PORTFOLIO_DEMO_CLICK, {
                          portfolio_title: picked.title,
                          portfolio_slug: picked.id,
                          portfolio_category: picked.category,
                        })
                      }
                    >
                      Visit site
                    </a>
                  </Button>
                ) : null}
              </div>

              <div className="relative flex min-h-[55dvh] w-full flex-1 items-center justify-center bg-black sm:min-h-[70dvh]">
                {picked.src.endsWith(".mp4") ? (
                  <video
                    key={picked.src}
                    src={picked.src}
                    className="max-h-[70dvh] max-w-full object-contain"
                    muted
                    loop
                    playsInline
                    autoPlay
                    controls
                    preload="auto"
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  // biome-ignore lint/performance/noImgElement: local work stills
                  <img
                    key={picked.src}
                    src={picked.src}
                    alt=""
                    className="max-h-[70dvh] max-w-full object-contain"
                  />
                )}
                {visible.length > 1 ? (
                  <>
                    <button
                      type="button"
                      aria-label="Previous"
                      className="absolute left-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border bg-background/80 text-lg backdrop-blur-sm"
                      onClick={() => go(-1)}
                    >
                      <PiCaretLeftLight />
                    </button>
                    <button
                      type="button"
                      aria-label="Next"
                      className="absolute right-2 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border bg-background/80 text-lg backdrop-blur-sm"
                      onClick={() => go(1)}
                    >
                      <PiCaretRightLight />
                    </button>
                  </>
                ) : null}
              </div>
            </>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}
