// pages/refund-policy.js

import Head from 'next/head';
import React from 'react';

export default function RefundPolicy() {
  return (
    <>
      <Head>
        <title>Refund & Cancellation Policy | StatixGrowth</title>
      </Head>
      <main className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6">Refund & Cancellation Policy</h1>

        <p className="mb-4">
          Effective Date: 14-May-2024
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">1. Introduction</h2>
        <p className="mb-4">
          Welcome to StatixGrowth ("we," "us," or "our"). We are committed to providing you with high-quality digital services and experiences. This Refund & Cancellation Policy outlines our stance on refunds and cancellations for purchases made through our platform.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">2. No Refund Policy</h2>
        <p className="mb-4">
          2.1. All of our services and digital products are provided on an "as-is" basis. We do not offer refunds once a purchase is completed, except where required by applicable law.
        </p>
        <p className="mb-4">
          2.2. Refunds or exchanges will not be granted under circumstances including, but not limited to:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Change of mind</li>
          <li>Dissatisfaction with the service or product</li>
          <li>Technical issues related to user’s device or compatibility</li>
          <li>Cancellation of a subscription after service delivery</li>
        </ul>

        <h2 className="text-xl font-semibold mt-8 mb-2">3. Exceptions</h2>
        <p className="mb-4">
          3.1. Legal Obligations: If required by Indian consumer protection laws, we will provide refunds for specific circumstances outlined by law.
        </p>
        <p className="mb-4">
          3.2. Defective or Non-Conforming Products/Services: If you believe the product or service you received is defective or not as described, please contact us within 2 days of purchase. We will assess the issue and may offer a resolution such as a correction or replacement.
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">4. Contact Us</h2>
        <p className="mb-4">
          If you have any questions or concerns regarding this Refund & Cancellation Policy, you can reach us at:
          <br />
          <a href="mailto:help@statixgrowth.info" className="text-blue-600">help@statixgrowth.info</a>
        </p>

        <h2 className="text-xl font-semibold mt-8 mb-2">5. Changes to this Policy</h2>
        <p className="mb-4">
          We reserve the right to update or modify this Refund & Cancellation Policy at any time. Any changes will be posted on this page.
        </p>
        <p className="mb-4">
          By using our platform and completing a purchase, you acknowledge and agree to the terms outlined in this policy.
        </p>

        <p className="mt-8">StatixGrowth<br />Owner: Kartik Bhaskar<br />Date: 14-May-2024</p>
      </main>
    </>
  );
}
