import { Navbar } from "~/components/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="container">
      <Navbar />
      <main>{children}</main>
    </section>
  );
}
