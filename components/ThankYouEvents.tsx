"use client";

import { useEffect } from "react";
import { trackEvent, trackMetaLead } from "@/lib/analytics";

const TY_KEY = "arbourview_mattamy_com_ty_tracked";

export function ThankYouEvents() {
  useEffect(() => {
    try {
      if (sessionStorage.getItem(TY_KEY)) return;
      sessionStorage.setItem(TY_KEY, "1");
    } catch {
      /* continue */
    }
    trackEvent("form_submit");
    trackMetaLead();
  }, []);
  return null;
}
