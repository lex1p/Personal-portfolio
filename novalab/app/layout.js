import { TaskBar } from "./components/server/TaskBar";
import "./globals.css";

export const metadata = {
  title: "novalabs",
  description: "Best AI Portfolio for Novalabs owns by Prince Adu",
}


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="">
      {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/all.min.css"></link> */}
      
      <body>
        {children}
        <TaskBar />
      </body>
    </html>
  );
}
