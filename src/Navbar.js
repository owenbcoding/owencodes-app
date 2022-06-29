const Navbar = () => {
  return (
    <nav className="flex justify-around py-8 mx-auto bg-[#1e1f26]">
      <div>
        <h3 class="text-4xl font-medium text-teal-500"><a href="/">Owencodes</a></h3>
      </div>
      <div class="flex space-x-8">
        <li className="list-none text-4xl"><a href="#">About</a></li>
        <li className="list-none text-4xl"><a href="#">Projects</a></li>
        <li className="list-none text-4xl"><a href="#">Contact</a></li>
      </div>
    </nav>
  );
};

export default Navbar;
