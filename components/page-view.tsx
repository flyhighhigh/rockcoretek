"use client";

import { GeneralEvents } from "../lib/types/static-types";
import * as React from "react";

export function PageView({ ingestKey }: { ingestKey: GeneralEvents["ingestKey"] }) {
  React.useEffect(() => {
    // Mock analytics - replace with your preferred analytics solution
    console.log("Page view tracked:", ingestKey);
  }, [ingestKey]);

  return null;
}
