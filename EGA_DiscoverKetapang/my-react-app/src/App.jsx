import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Welcomepages from "./pages/Welcomepages";
import Loginpages from "./pages/Loginpages";
import Registerpages from "./pages/Registerpages";
import Homepages from "./pages/Homepages";
import Wisatapages from "./pages/Wisatapages";
import WisatapagesA from "./pages/WisatapagesA";
import WisatapagesS from "./pages/WisatapagesS";
import Editakunpages from "./pages/Editakunpages";
import Akunsayapages from "./pages/Akunsayapages";
import Daftarpemandu from "./pages/Daftarpemandu";
import Datapemandu from "./pages/Datapemandu";
import Profilpemandu from "./pages/Profilpemandu";
import Profilpemandu1 from "./pages/Profilpemandu1";
import Profilpemandu2 from "./pages/Profilpemandu2";
import Profilpemandu3 from "./pages/Profilpemandu3";
import Artikelpages from "./pages/Cardartikel";
import Testimonipages from "./pages/Testimonipages";
import DetailWisataA1 from "./pages/detailwisataA1";
import DetailWisataA2 from "./pages/detailwisataA2";
import DetailWisataA3 from "./pages/detailwisataA3";
import DetailWisataS2 from "./pages/detailwisataS2";
import Paymentpages from "./pages/Paymentpages";
import Donepayment from "./pages/Donepaymentpages";
import Formpembayaran from "./pages/Formpembayaran";
import Paketwisata1 from "./pages/Paketwisata1";
import Paketwisata2 from "./pages/Paketwisata2";
import Paketwisata3 from "./pages/Paketwisata3";

function App() {
  return (
    <>
      {/* <Navbarcomponent /> */}
      <Routes>
        <Route path="/" element={<Welcomepages />} />
        <Route path="/login" element={<Loginpages />} />
        <Route path="/register" element={<Registerpages />} />
        <Route path="/home" element={<Homepages />} />
        <Route path="/wisata" element={<Wisatapages />} />
        <Route path="/wisataS" element={<WisatapagesS />} />
        <Route path="/wisataA" element={<WisatapagesA />} />
        <Route path="/daftarpemandu" element={<Daftarpemandu />} />
        <Route path="/datapemandu" element={<Datapemandu />} />
        <Route path="/profilpemandu" element={<Profilpemandu />} />
        <Route path="/profilpemandu1" element={<Profilpemandu1 />} />
        <Route path="/profilpemandu2" element={<Profilpemandu2 />} />
        <Route path="/profilpemandu3" element={<Profilpemandu3 />} />
        <Route path="/testimoni" element={<Testimonipages />} />
        <Route path="/artikel" element={<Artikelpages />} />
        <Route path="/edit" element={<Editakunpages />} />
        <Route path="/akunsaya" element={<Akunsayapages />} />
        <Route path="/detailWisataA1" element={<DetailWisataA1 />} />
        <Route path="/detailwisataA2" element={<DetailWisataA2 />} />
        <Route path="/detailwisataA3" element={<DetailWisataA3 />} />
        <Route path="/detailwisataS2" element={<DetailWisataS2 />} />
        <Route path="/payment" element={<Paymentpages />} />
        <Route path="/done" element={<Donepayment />} />
        <Route path="/form" element={<Formpembayaran />} />
        <Route path="/paketwisata1" element={<Paketwisata1 />} />
        <Route path="/paketwisata2" element={<Paketwisata2 />} />
        <Route path="/paketwisata3" element={<Paketwisata3 />} />
      </Routes>
      {/* <Footercomponent /> */}
    </>
  );
}

export default App;
