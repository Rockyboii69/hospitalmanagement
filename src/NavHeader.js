function NavHeader() {
  return (
    <ul
      className="nav nav-pills mb-3 bg-light pt-2 pb-2"
      id="pills-tab"
      role="tablist"
    >
      <li className="nav-item">
        <a
          className="nav-link active"
          id="pills-home-tab"
          data-toggle="pill"
          href="#pills-home"
          role="tab"
          aria-controls="pills-home"
          aria-selected="true"
        >
          Patient
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          id="pills-profile-tab"
          data-toggle="pill"
          href="#pills-profile"
          role="tab"
          aria-controls="pills-profile"
          aria-selected="false"
        >
          Clinic
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link"
          id="pills-contact-tab"
          data-toggle="pill"
          href="#pills-contact"
          role="tab"
          aria-controls="pills-contact"
          aria-selected="false"
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default NavHeader;
