
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { checkUser } from "@/lib/checkUser";
import { Toaster } from "sonner";
import Link from "next/link";
import { Github, Linkedin, LinkedinIcon, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
// import { checkUser } from "@/lib/checkUser";


const inter= Inter({subsets:["latin"]})



export default async  function RootLayout({ children }) {
   await checkUser();
  return (
    <ClerkProvider appearance={{
      baseTheme:dark
    }}>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className}`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* header */}
            <Header/> 
            <main className="min-h-screen">
            {children}
            </main>
            <Toaster richColors/>
            {/* footer */}
            
            <footer className="bg-muted/50 py-12">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p className="text-lg mb-4">Want to connect?</p>
        <div className="flex justify-center items-center gap-6 flex-wrap">
          <Button variant="ghost" asChild className="gap-2 text-gray-400 hover:text-gray-200">
            <Link
              href="https://www.linkedin.com/in/aakanksha-tiwari-34869b249/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
              
            </Link>
          </Button>

          <Button variant="ghost" asChild className="gap-2 text-gray-400 hover:text-gray-200">
            <Link
              href="mailto:aakankshatiwari2004@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Mail className="h-5 w-5" />
              
            </Link>
          </Button>

          <Button variant="ghost" asChild className="gap-2 text-gray-400 hover:text-gray-200">
            <Link
              href="https://github.com/aakanksha004"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              
            </Link>
          </Button>
        </div>
      </div>
    </footer>

          </ThemeProvider>
       
      </body>
    </html>
    </ClerkProvider>
  );
}
