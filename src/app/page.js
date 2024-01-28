import Header from "@/components/Header";
import Body from "@/components/Body";
import Box from "@mui/system/Box";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Box sx={{ height: '100vh' }}>
        <video src="/vesta-home.mp4" autoPlay muted loop style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: '0',
          right: '0',
          bottom: '0',
          objectFit: 'cover',
          objectPosition: 'center',
        }} />
      </Box>
      <Body />
      <Footer />
    </main>
  );
}
