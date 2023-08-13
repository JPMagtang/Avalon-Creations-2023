import { useState } from "react";
import { useOutlet } from "@remix-run/react";

export default function AnimatedOutlet() {
  const [outlet] = useState(useOutlet())
  return outlet
}