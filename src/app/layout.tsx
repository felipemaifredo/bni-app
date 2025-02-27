
//
import "@/src/globals.css"

//
import type { Metadata } from "next"

//
export const metadata: Metadata = {
  title: "BNI App",
  themeColor: "#f95c53"
}

//
export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
        <div className="left_border"></div>
        <div className="right_border"></div>
      </body>
    </html>
  )
}
