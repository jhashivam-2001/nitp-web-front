import React from "react"
import "./css/importantlink.css"
import ieee from "./img/ieee.svg"
import corona from "./img/corona.svg"
import nss from "./img/nss.svg"
import josaa from "./img/josaa.svg"
import asme from "./img/asme.svg"
import teqip from "./img/teqip.svg"
import chanakya from "./img/chanakya.svg"

const Importantlink = () => {
  return (
    <div className="link-row">
      <div className="link-col">
        <a href="http://exam.nitp.ac.in/">
          <div className="implink">
            <img className="linkimg" src={chanakya} alt="chanakya" />
            <h3>CHANAKYA</h3>
          </div>
        </a>
        <a href="https://tcfnitp.tech/">
          <div className="implink">
            <img className="linkimg" src={corona} alt="corona" />
            <h3>CORONA</h3>
          </div>
        </a>
        <a href="https://nss.gov.in/">
          <div className="implink">
            <img className="linkimg" src={nss} alt="nss" />
            <h3>NSS</h3>
          </div>
        </a>
        <a href="https://josaa.nic.in/webinfocms/Public/home.aspx">
          <div className="implink">
            <img className="linkimg" src={josaa} alt="josaa" />
            <h3>JOSAA</h3>
          </div>
        </a>
      </div>
      <div className="link-col">
        <a href="http://www.nitp.ac.in/asme/index.html">
          <div className="implink">
            <img className="linkimg" src={asme} alt="asme" />
            <h3>ASME</h3>
          </div>
        </a>
        <a href="https://www.teqip.in/">
          <div className="implink">
            <img className="linkimg" src={teqip} alt="teqip" />
            <h3>TEQIP</h3>
          </div>
        </a>
        <a href="http://ieee.nitp.ac.in/new/index.html">
          <div className="implink">
            <img className="linkimg" src={ieee} alt="ieee" />
            <h3>IEEE</h3>
          </div>
        </a>
      <a href="https://tcfnitp.tech/">
        <div className="implink">
          <img className="linkimg" src={chanakya} alt="chanakya" />
          <h3>CHANAKYA</h3>
        </div>
        </a>
      </div>
    </div>
  )
}
export default Importantlink
