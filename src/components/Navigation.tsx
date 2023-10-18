import { useNavigate } from "react-router-dom";
const Navigation = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar">
        <div className="row">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#" onClick={() => navigate("/")}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => navigate("/store")}>
                Store
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => navigate("/about")}>
                About
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default Navigation;
