import { ReactNode } from "react";

export default function ErrorMessage({children}:{children:ReactNode}) {
  return (
    <p className="text-red-400 mt-1">{children}</p>
  )
}
