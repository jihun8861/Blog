const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-10">
      <div className="container mx-auto text-center px-4">
        <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;