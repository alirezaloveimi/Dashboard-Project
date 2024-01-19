function Footer() {
  return (
    <footer className="footer my-5 md:mt-10">
      <div className="flex flex-col items-center md:flex-row md:justify-between">
        <p>Made With💖 by Alireza Delf </p>
        <ul className="flex items-center space-x-1 sm:space-x-3 mt-5 md:mt-0">
          <li className="px-4">
            <a href="#">Marketplace</a>
          </li>
          <li className="px-4">
            <a href="#">Blog</a>
          </li>
          <li className="px-4">
            <a href="#">License</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
