"use client";

import Script from "next/script";
import { useConsent } from "@/lib/use-consent";

const clarityId = process.env.NEXT_PUBLIC_CLARITY_ID;

/**
 * Microsoft Clarity is only loaded after the visitor grants analytics
 * consent. Without an ID the component renders nothing, so local and preview
 * environments stay quiet.
 */
export function Analytics() {
  const consent = useConsent();

  if (consent !== "granted" || !clarityId) return null;

  return (
    <Script id="clarity-init" strategy="afterInteractive">
      {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window,document,"clarity","script",${JSON.stringify(clarityId)});`}
    </Script>
  );
}
