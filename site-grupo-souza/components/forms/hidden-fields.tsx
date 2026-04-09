"use client";

import { useEffect, useState } from "react";
import { captureTrackingData, type TrackingData } from "@/lib/tracking";

type HiddenFieldsProps = {
  formName: string;
};

export function HiddenFields({ formName }: HiddenFieldsProps) {
  const [data, setData] = useState<TrackingData | null>(null);

  useEffect(() => {
    setData(captureTrackingData(formName));
  }, [formName]);

  if (!data) return null;

  return (
    <>
      {Object.entries(data).map(([key, value]) => (
        <input key={key} type="hidden" name={key} value={value} />
      ))}
    </>
  );
}
