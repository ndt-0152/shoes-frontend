import Link from 'next/link';
import React from 'react';

export interface IHeader {}

const Header: React.FC<IHeader> = React.memo(() => {
  return (
    <div>
      {/* Top Header */}
      <div className="Announcement ">
        <div className="container">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center display-none">
              <p>0123456789</p>
              <p>ndt@gmail.com</p>
            </div>
            <div className=" col-12 col-lg-6 justify-content-center justify-content-lg-end d-flex align-items-center">
              <Link href="/">
                <a>
                  <i className="fab fa-facebook-f"></i>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <i className="fab fa-instagram"></i>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <i className="fab fa-youtube"></i>
                </a>
              </Link>
              <Link href="/">
                <a>
                  <i className="fab fa-pinterest-p"></i>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="header">
        <div className="container">
          <div className="pc-header">
            <div className="row">
              <div className="col-md-3 col-4 d-flex align-items-center">
                <Link
                  // className="navbar-brand"
                  href="/"
                >
                  <a>
                    <div className="wrap-logo">
                      <img
                        alt="logo"
                        src="images/my_logo.jpg"
                        width={83}
                        height={63}
                      />
                      <div>Kingsport</div>
                    </div>
                  </a>
                </Link>
              </div>
              <div className="col-md-6 col-8 d-flex align-items-center">
                <form className="input-group">
                  <input
                    type="search"
                    className="form-control rounded search"
                    placeholder="Search"
                  />
                  <button type="submit" className="search-button">
                    search
                  </button>
                </form>
              </div>
              <div className="col-md-3 d-flex align-items-center justify-content-end Login-Register">
                <div className="btn-group">
                  <button
                    type="button"
                    className="name-button dropdown-toggle"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Hi, ndt
                  </button>
                  <div className="dropdown-menu">
                    <div className="dropdown-item">
                      <Link href="/profile">
                        <a>Profile</a>
                      </Link>
                    </div>
                    <div className="dropdown-item">
                      <Link href="/">
                        <a>Logout</a>
                      </Link>
                    </div>
                  </div>
                </div>

                <Link href="/cart">
                  <a>
                    <i className="fas fa-shopping-bag"></i>
                    <span className="badge">4</span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Header;
