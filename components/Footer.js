export default function Footer() {
  return (
    <footer className="bg-[#0B1221] border-t border-[#1E2A44] py-10 px-6 sm:px-12 text-center md:text-left">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        {/* Left Side */}
        <div className="space-y-2 text-gray-400 text-sm sm:text-base font-sans">
          <p>
            © {new Date().getFullYear()} Kartik Bhaskar <span className="text-gray-500">(StatixGrowth)</span>
          </p>
          <p>
            For support:{" "}
            <a href="mailto:support@statixgrowth.info" className="underline hover:text-cyan-400 transition-colors">
              support@statixgrowth.info
            </a>
          </p>
        </div>

        {/* Right Side - Links */}
        <div className="flex flex-wrap items-center justify-center md:justify-end gap-5 text-sm sm:text-base font-sans">
          <a
            href="https://docs.google.com/document/d/18LiUaifx-sieWYf50FTvy7KL_vJoX2DMfz5-wXogW70/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="https://docs.google.com/document/d/1cGV6aVSpg10M1CiEFRjSjOmZsbkrCmDDxWh5r5zAUZQ/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            Terms & Conditions
          </a>
          <a
            href="https://docs.google.com/document/d/1HzQbaHacvVXYxit2XoRnZuW9xCxbrH9WmY9ld-ii8kg/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            Refund Policy
          </a>
          <a
            href="https://www.statixgrowth.info/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-cyan-400 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </footer>
  );
}
