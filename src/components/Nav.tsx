import { ArrowRight as ArrowRightIcon, EqualIcon, XIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import Logo from "./Logo";

const links = [
  { to: "/product", label: "Product" },
  { to: "/technology", label: "Technology" },
  { to: "/about", label: "About" },
  { to: "/faqs", label: "FAQs" },
];

const HEADER_HEIGHT = 44; // h-11 — pill radius is half this
const PILL_RADIUS = `${HEADER_HEIGHT / 2}px`;

export default function Nav() {
  const location = useLocation();
  const [openPath, setOpenPath] = useState<string | null>(null);
  const open = openPath === location.pathname;
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function handleClick(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenPath(null);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4">
      <div className="site-container flex items-start justify-between gap-4">
        {/* Left pill — absolute overlay so expansion doesn't push page content */}
        <div className="relative shrink-0">
          <div
            className="pointer-events-none flex h-11 items-center gap-4 pl-2 pr-6 opacity-0"
            aria-hidden="true"
          >
            <div className="size-8 shrink-0" />
            <Logo />
          </div>

          <div
            ref={navRef}
            className="absolute top-0 left-0 z-50 min-w-full overflow-hidden bg-[#f5f5f4]/80 shadow-sm backdrop-blur-md"
            style={{ borderRadius: PILL_RADIUS }}
          >
            <div className="flex h-11 items-center gap-4 pl-2 pr-6">
              <button
                type="button"
                className="flex size-8 shrink-0 cursor-pointer items-center justify-center rounded-full border-[1.5px] border-[#e7e5e4] bg-[#e7e5e4] transition-colors hover:bg-[#d6d3d1]"
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpenPath(open ? null : location.pathname)}
              >
                {open ? (
                  <XIcon
                    size={20}
                    className="text-[#0c0a09]"
                    aria-hidden
                    strokeWidth={2}
                  />
                ) : (
                  <EqualIcon
                    size={20}
                    className="text-[#0c0a09]"
                    aria-hidden
                    strokeWidth={2}
                  />
                )}
              </button>
              <Link
                to="/"
                className="inline-flex shrink-0 items-center"
                aria-label="Volantis home"
                onClick={() => setOpenPath(null)}
              >
                <Logo />
              </Link>
            </div>

            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <nav
                  className="flex flex-col gap-1 px-4 pb-4"
                  aria-label="Main navigation"
                >
                  {links.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      onClick={() => setOpenPath(null)}
                      className={({ isActive }) =>
                        `cursor-pointer rounded-md px-2 py-2 text-sm font-medium transition-colors ${
                          isActive
                            ? "bg-[#e7e5e4] text-neutral-900"
                            : "text-neutral-600 hover:bg-[#eceae8] hover:text-neutral-900"
                        }`
                      }
                    >
                      {link.label}
                    </NavLink>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Right CTA pill */}
        <Link
          to="/intake"
          className="flex h-11 shrink-0 items-center gap-2 rounded-full bg-white/80 pl-4 pr-2 backdrop-blur-md transition hover:bg-white"
        >
          <span className="font-mono text-base font-bold tracking-[-0.04em] text-[#0c0a09] uppercase">
            Get in Touch
          </span>
          <span className="flex size-8 items-center justify-center rounded-full bg-[#ff5500]">
            <ArrowRightIcon
              size={16}
              className="text-white shrink-0"
              aria-hidden
              strokeWidth={2}
            />
          </span>
        </Link>
      </div>
    </header>
  );
}
