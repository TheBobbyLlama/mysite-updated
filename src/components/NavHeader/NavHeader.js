import logo from "../../assets/images/logo.svg";
import "./NavHeader.css";

function generateLinkItem(component, key = 0) {
  return <li key={key}>{component}</li>;
}

export default function NavHeader({ children }) {
  let navButtons = null;

  if (children) {
    if (children.length) {
      navButtons = children.map((child, index) => {
        return generateLinkItem(child, index);
      });
    } else {
      navButtons = generateLinkItem(children);
    }
  }
  return (
    <div className="navigation">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
            <div className="logo">
              <a href="index.html">
                <img src={logo} alt="" />
              </a>
            </div>
          </div>

          <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
            <div className="primary-nav">
              <ul>{navButtons}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
