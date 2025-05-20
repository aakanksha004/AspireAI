
import { SignedOut, SignedIn,UserButton, SignInButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { ChevronDown, FileText, FileTextIcon, GraduationCap, LayoutDashboard, PenBox, StarsIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Header = () => {

  
  return (
    <header className="fixed top-0 w-full border-b bg-background/80 backdrop-blur-md z-50 supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <Image
            src="/LOGO.png"
            alt="AspireAI logo"
            width={200}
            height={60}
            className="h-28 py-1 w-auto object-contain "
          />
        </Link>
        <div className="flex items-center space-x-2 md:space-x-4">
          <SignedIn>
            <Link href={"/dashboard"}>
              <Button variant="outline" className="hover:bg-muted hover:text-primary cursor-pointer" >
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden md:block">Industry Insights</span>
              </Button>
            </Link>
          

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="hover:bg-muted hover:text-primary cursor-pointer">
                <StarsIcon className="h-4 w-4" />
                <span className="hidden md:block">Growth Tools</span>
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
  <DropdownMenuItem className="hover:bg-muted hover:text-primary cursor-pointer">
    <Link href={'/resume'} className="flex items-center gap-2 w-full">
      <FileText className="h-4 w-4" />
      <span>Build Resume</span>
    </Link>
  </DropdownMenuItem>

  <DropdownMenuItem className="hover:bg-muted hover:text-primary cursor-pointer">
    <Link href={'/ai-cover-letter'} className="flex items-center gap-2 w-full">
      <PenBox className="h-4 w-4" />
      <span>Cover Letter</span>
    </Link>
  </DropdownMenuItem>

  <DropdownMenuItem className="hover:bg-muted hover:text-primary cursor-pointer">
    <Link href={'/interview'} className="flex items-center gap-2 w-full">
      <GraduationCap className="h-4 w-4" />
      <span>Interview Prep</span>
    </Link>
  </DropdownMenuItem>
</DropdownMenuContent>

          </DropdownMenu>
          </SignedIn>

     <SignedOut>
        <SignInButton>
            <Button variant='outline'>Sign In</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton 
        appearance={{
            elements:{
                avatarBox: "h-12 w-12",
                userButtonPopoverCard: "shadow-xl",
                userPreviewMainIdentifier: "font-semibold",
            },
        }}
        afterSignOutUrl="/"
        />
      </SignedIn>
        </div>
      </nav>
     
    </header>
  );
};

export default Header;
