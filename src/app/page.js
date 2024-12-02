import MotionButton from "@/components/motionButton";
import Blob from "@/components/blobls.jsx"
import Gigan from "@/components/gigan";
import White from "@/components/whit"
import Footer from "@/components/footer"
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main>
        <div className="spline-container" >
          <Spline scene="https://prod.spline.design/w59ORhOjK1yp2PvE/scene.splinecode"/>
          <MotionButton />
        </div>
      <Blob/>
      <Gigan />
      <White/>
      <Footer />
    </main>
  );
}
