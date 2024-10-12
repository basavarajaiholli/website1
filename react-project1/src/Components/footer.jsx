const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-800 text-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 lg:px-16">
        {/* Resources Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Resources</h4>
          <ul>
            {resourcesLinks.map((link, index) => (
              <li key={index} className="mb-2">
                <a href={link.href} className="hover:underline">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Platform Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Platform</h4>
          <ul>
            {platformLinks.map((link, index) => (
              <li key={index} className="mb-2">
                <a href={link.href} className="hover:underline">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Community Section */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Community</h4>
          <ul>
            {communityLinks.map((link, index) => (
              <li key={index} className="mb-2">
                <a href={link.href} className="hover:underline">
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-sm text-gray-400">
        © 2024 Coaching Center. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
