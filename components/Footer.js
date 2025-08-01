import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-4 py-10 text-center text-sm">
      <div className="max-w-4xl mx-auto space-y-4">
        <p>
          © {new Date().getFullYear()} <span className="font-semibold">statixgrowth.info</span>. All rights reserved.
        </p>

        <div className="flex flex-wrap justify-center gap-6 text-sm">
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms & Conditions
          </Link>
          <Link href="/refund-policy" className="hover:underline">
            Refund & Cancellation Policy
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact Us
          </Link>
        </div>

        <p>
          For support:{" "}
          <a href="mailto:support@statixgrowth.info" className="underline">
            support@statixgrowth.info
          </a>
        </p>

        <div className="text-xs opacity-70 leading-relaxed max-w-3xl mx-auto">
          This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, this site is NOT endorsed by
          Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc. As stipulated by law, we do not make any
          guarantees about your ability to get results or earn money with our ideas, tools, or strategies. All product names,
          logos, brands and trademarks are property of their respective owners.
        </div>
      </div>
    </footer>
  );
}
