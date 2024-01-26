import Header from "@/components/Header";
import Body from "@/components/Body";

export default function Home() {
  return (
    <main>
      <Header />
      <video src="/vesta-home.mp4" autoPlay muted loop style={{ width: '100%' }} />
      <Body />
    </main>
  );
}
