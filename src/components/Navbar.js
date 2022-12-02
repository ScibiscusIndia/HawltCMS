import React from 'react'
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Hawlt</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        {/* <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li> */}
        {/* <li className="nav-item">
          <a className="nav-link" href="#">Link</a>
        </li> */}
        <li className="nav-item dropdown">
          {/* <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul> */}
        </li>
        {/* <li className="nav-item">
          <a className="nav-link disabled">Disabled</a>
        </li> */}
      </ul>
      <Link to = '/login' ><span style={{color:'black'}}>Logout <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAABmJLR0QA/wD/AP+gvaeTAAADvUlEQVRIid2VzW8VZRTGf+/cmVtaIkhpe20vLTEag3zVKmCCaKoRREIrEEjEpR8LN7Kzumo1RlbqQsPKf0EtQQWL38aGD4vg0sQPKKWUttAA9t7LzJzHxZ2pt71FjEtmNZm8c37nPOc554Xb5XG3OlDo2tMWkdnhpM1mthzTEjNdcXAW00Dkxf1LBw4O/y/I9e69OYk3QC9g8iUDE5JAQiaQgRQifZgp+X13DH5y6T9D/up+tkO4g5Jay4FvCkjehSy+YNjOhh++ODE3njf3w/SO5zYI9+N8gMLCOgqr76ewsHYOwEC0uJhvxjdsXvevkOvde3Nm6pdUmwJkIjJDEsGu7eTeeYvs7m7MRGyGmf0DMtU51D/a8XTjTSFCb0pqTgEWG9OrVlC8755y1l5y3PNAorDiXortK4ktLldbTiaf8Yp980IKXXvaEM9XSlRcs5Lc/l4y+ZZyD1CSTTlgsCxP87tvU2pfjSXVYgZmL02u7VxWBYnxd1W6aDrwWdqzDxf4UCyCNMNACahUxAUBTX2vUcj6YJbKFsQu3lktl8VPVjbZ2/QwfsNSwouXsMETYCIaGye+do1o7BKYYd8NcmN4hKCpEb9zUwooKxHb5iqISW0pwMyoaV8DwNUjR6kJI5BwH3/K2Nbd8NEhMJG9ETF16DAACx5qxyqkNovb5qlE9ekcmInMksUAROdHcUkPfGABDl8kthXx6EUA/MYGrMIAmBqqIdJk6n0nI566CkCmsX6uTVMXITMyd+XKyVy+gkvh5fPjVRCJc+kke0Bx6AwAi7Y9RclzVQDMKGQ87uzeVnbn8SFcAkgSOFddSWxHK1dF9PX3RBOTZFvz1PXso+i5GZvKjOmMx6LeHrKtecKxccLPv6oEgGwgDT2zuya3PNOaifSbTAFJ84vtK2l+bz/O97kxPMLUocPEFy6Sac6xePtWapa3oihi+MV9ZI8PVUoaxqXo7tbzZ0ZmQQCmHu86INPLM021mFL7Kpp6XyfIzdoUAITjE4y+2kdw7KcZcySSvp//4+dXqioBuLZxZ1Pol05hyqc/mBmFrI//xGPUru8gU19PNDFJ4cQQ4WdfUpMMagVg2AXegy2/Dk3MCwGY2Lh1vUPfYqqrbLLMZs3BnCangGln8aMtZ385VRmzatU3DB456WGPyOxcJYDE2t7NALIRz6lzLmBeCMCSwaOnwzBYJ7MDMgtn3SvVgFBmHzjfe6D599Mn54t3yzt+cm3nsljhDsQWi225k9WbdBmzP5ENRMW4P3XR7f/8DVqeHWtWJRp8AAAAAElFTkSuQmCC"></img></span> </Link>
    </div>
  </div>
</nav>
    </div>
  )
}
