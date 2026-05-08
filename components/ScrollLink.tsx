"use client";

import type { CSSProperties, ReactNode, MouseEvent } from "react";

/**
 * In-page anchor link with explicit smooth-scroll behavior.
 *
 * Plain `<a href="#contact">` works fine in theory — but in some browsers
 * (and depending on how the App Router has rehydrated) the default jump
 * can feel sluggish or trigger a perceived "reload" because the browser
 * has to settle the URL change before scrolling. We sidestep all of that:
 *
 *   - preventDefault on click
 *   - call scrollIntoView({ behavior: "smooth" }) on the target ourselves
 *   - update the hash via history.replaceState so the URL still reflects
 *     the section, but no navigation event fires
 *
 * Renders as a real <a> with the proper href so right-click + open-in-new-tab,
 * keyboard activation, and screen readers all behave correctly.
 */
export default function ScrollLink({
  href,
  className,
  style,
  children,
  onClick,
  ariaLabel,
}: {
  href: string; // e.g. "#contact"
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
  onClick?: () => void;
  ariaLabel?: string;
}) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    // Let modifier-clicks (cmd/ctrl/shift/alt) and middle-click do their
    // browser-default thing — don't hijack "open in new tab".
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return;
    }

    const id = href.replace(/^#/, "");
    if (!id) return;
    const el = document.getElementById(id);
    if (!el) return;

    e.preventDefault();
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    // Reflect the hash in the URL without firing a navigation/hashchange
    // that the App Router or analytics might react to.
    history.replaceState(null, "", href);
    onClick?.();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={className}
      style={style}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  );
}
