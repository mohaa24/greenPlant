import "./globals.css";
import NavBar from "./comps/NavBar/NavBar";
import Bubble from "./comps/NavBar/Bubble/Bubble";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="h-[100vh] 
    
    ">
      <NavBar />
      <Bubble/>
      <main className="text-black z-10">{children}</main>
    </div>
  );
}
