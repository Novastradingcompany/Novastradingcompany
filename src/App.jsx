import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Landing        from "./pages/Landing";
import Chat           from "./pages/Chat";
import Glossary       from "./pages/Glossary";
import Examples       from "./pages/Examples";
import BearPutSpread  from "./pages/BearPutSpread";
import BullCallSpread from "./pages/BullCallSpread";
import IronCondor     from "./pages/IronCondor";
import Contact        from "./pages/Contact";
import AboutNova      from "./pages/AboutNova";
import Guestbook      from "./pages/Guestbook";
import Disclaimer     from "./pages/Disclaimer";
import Comingsoon     from "./pages/Comingsoon";
import Messages       from "./pages/Messages";
import ThankYou       from "./pages/ThankYou";
import Messagespage   from "./pages/Messages";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"                element={<Landing        />} />
        <Route path="/chat"            element={<Chat           />} />
        <Route path="/glossary"        element={<Glossary       />} />
        <Route path="/examples"        element={<Examples       />} />
        <Route path="/bear-put-spread" element={<BearPutSpread />} />
        <Route path="/bullcallspread"  element={<BullCallSpread/>} />
        <Route path="/ironcondor"      element={<IronCondor     />} />
        <Route path="/contact"         element={<Contact        />} />
        <Route path="/about-nova"      element={<AboutNova      />} />
        <Route path="/guestbook"       element={<Guestbook      />} />
        <Route path="/disclaimer"      element={<Disclaimer     />} />
        <Route path="/Comingsoon"      element={<Comingsoon     />} />
        <Route path="/messages"        element={<Messages       />} />
        <Route path="/thankyou"        element={<ThankYou       />} />
        <Route path="/MessagesPage"    element={<Messagespage   />} />
      </Routes>
    </Router>
  );
}
