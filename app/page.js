'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
          setActiveSection(section.getAttribute('id'));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 py-10"
    >
      <div className="max-w-4xl mx-auto pb-16 px-4 sm:px-6 lg:px-8">
        <motion.header 
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 text-center"
        >
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Privacy Policy</h1>
          <p className="mt-3 text-lg text-gray-600">Last updated March 12, 2025</p>
        </motion.header>

        <div className="bg-white shadow-lg overflow-hidden rounded-xl">
          <div className="px-4 py-6 sm:p-8 prose lg:prose-lg max-w-none">
            {/* Introduction */}
            <p>
              This Privacy Notice for Onur Dursun ("we," "us," or "our"), describes how
              and why we might access, collect, store, use, and/or share ("process")
              your personal information when you use our services ("Services"),
              including when you:
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-2">
              <li>
                Download and use our mobile application (DurakGO), or any other
                application of ours that links to this Privacy Notice
              </li>
              <li>
                Engage with us in other related ways, including any sales,
                marketing, or events
              </li>
            </ul>

            <p className="mt-4">
              Questions or concerns? Reading this Privacy Notice will help you
              understand your privacy rights and choices. We are responsible for making
              decisions about how your personal information is processed. If you do not
              agree with our policies and practices, please do not use our Services. If
              you still have any questions or concerns, please contact us at{" "}
              <a href="mailto:onur.ds@outlook.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                onur.ds@outlook.com
              </a>.
            </p>

            {/* Summary Section */}
            <h2 id="summary" className="text-2xl font-bold mt-10 mb-6 text-gray-800 border-b pb-2">SUMMARY OF KEY POINTS</h2>
            <p>
              This summary provides key points from our Privacy Notice, but you
              can find out more details about any of these topics by clicking the
              link following each key point or by using our table of contents below
              to find the section you are looking for.
            </p>

            <div className="space-y-4 mt-4">
              <p>
                <strong>What personal information do we process?</strong> When you visit, use, or
                navigate our Services, we may process personal information depending on
                how you interact with us and the Services, the choices you make, and the
                products and features you use. <a href="#what-info">Learn more about personal information you
                  disclose to us.</a>
              </p>

              <p>
                <strong>Do we process any sensitive personal information?</strong> Some of the
                information may be considered "special" or "sensitive" in certain
                jurisdictions, for example your racial or ethnic origins, sexual orientation,
                and religious beliefs. We do not process sensitive personal information.
              </p>

              <p>
                <strong>Do we collect any information from third parties?</strong> We do not collect any
                information from third parties.
              </p>

              <p>
                <strong>How do we process your information?</strong> We process your information to
                provide, improve, and administer our Services, communicate with you, for
                security and fraud prevention, and to comply with law. We may also
                process your information for other purposes with your consent. We process
                your information only when we have a valid legal reason to do so. <a href="#how-process">Learn
                more about how we process your information.</a>
              </p>

              <p>
                <strong>In what situations and with which parties do we share
                personal information?</strong> We may share information in specific situations and with
                specific third parties. <a href="#when-share">Learn more about when and with whom we share
                your personal information. </a>
              </p>

              <p>
                <strong>How do we keep your information safe?</strong> We have adequate
                organizational and technical processes and procedures in place to protect
                your personal information. However, no electronic transmission over the
                internet or information storage technology can be guaranteed to be 100%
                secure, so we cannot promise or guarantee that hackers, cybercriminals, or
                other unauthorized third parties will not be able to defeat our security and
                improperly collect, access, steal, or modify your information. <a href="#info-safe">Learn more
                about how we keep your information safe.</a>
              </p>

              <p>
                <strong>What are your rights?</strong> Depending on where you are located
                geographically, the applicable privacy law may mean you have certain
                rights regarding your personal information. <a href="#privacy-rights">Learn more about your privacy
                rights.</a>
              </p>

              <p>
                <strong>How do you exercise your rights?</strong> The easiest way to exercise your
                rights is by submitting a data subject access request, or by contacting us.
                We will consider and act upon any request in accordance with applicable
                data protection laws.
              </p>

              <p>
                Want to learn more about what we do with any information we
                collect? <a href="#toc" className="text-blue-600 hover:text-blue-800 transition-colors">Review the Privacy Notice in full</a>.
              </p>
            </div>

            {/* Table of Contents */}
            <h2 id="toc" className="text-2xl font-bold mt-10 mb-6 text-gray-800 border-b pb-2">TABLE OF CONTENTS</h2>
            <ol className="list-decimal pl-5 space-y-2">
              <li>
                <a 
                  href="#what-info" 
                  className={`hover:text-blue-800 transition-colors ${activeSection === 'what-info' ? 'text-blue-600 font-medium' : 'text-blue-600'}`}
                >
                  WHAT INFORMATION DO WE COLLECT?
                </a>
              </li>
              <li>
                <a 
                  href="#how-process" 
                  className={`hover:text-blue-800 transition-colors ${activeSection === 'how-process' ? 'text-blue-600 font-medium' : 'text-blue-600'}`}
                >
                  HOW DO WE PROCESS YOUR INFORMATION?
                </a>
              </li>
              <li>
                <a 
                  href="#when-share" 
                  className={`hover:text-blue-800 transition-colors ${activeSection === 'when-share' ? 'text-blue-600 font-medium' : 'text-blue-600'}`}
                >
                  WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?
                </a>
              </li>
              <li>
                <a 
                  href="#cookies" 
                  className={`hover:text-blue-800 transition-colors ${activeSection === 'cookies' ? 'text-blue-600 font-medium' : 'text-blue-600'}`}
                >
                  DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?
                </a>
              </li>
              <li>
                <a 
                  href="#how-long" 
                  className={`hover:text-blue-800 transition-colors ${activeSection === 'how-long' ? 'text-blue-600 font-medium' : 'text-blue-600'}`}
                >
                  HOW LONG DO WE KEEP YOUR INFORMATION?
                </a>
              </li>
              <li>
                <a 
                  href="#info-safe" 
                  className={`hover:text-blue-800 transition-colors ${activeSection === 'info-safe' ? 'text-blue-600 font-medium' : 'text-blue-600'}`}
                >
                  HOW DO WE KEEP YOUR INFORMATION SAFE?
                </a>
              </li>
              <li>
                <a 
                  href="#privacy-rights" 
                  className={`hover:text-blue-800 transition-colors ${activeSection === 'privacy-rights' ? 'text-blue-600 font-medium' : 'text-blue-600'}`}
                >
                  WHAT ARE YOUR PRIVACY RIGHTS?
                </a>
              </li>
              <li>
                <a 
                  href="#dnt" 
                  className={`hover:text-blue-800 transition-colors ${activeSection === 'dnt' ? 'text-blue-600 font-medium' : 'text-blue-600'}`}
                >
                  CONTROLS FOR DO-NOT-TRACK FEATURES
                </a>
              </li>
              <li>
                <a 
                  href="#updates" 
                  className={`hover:text-blue-800 transition-colors ${activeSection === 'updates' ? 'text-blue-600 font-medium' : 'text-blue-600'}`}
                >
                  DO WE MAKE UPDATES TO THIS NOTICE?
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className={`hover:text-blue-800 transition-colors ${activeSection === 'contact' ? 'text-blue-600 font-medium' : 'text-blue-600'}`}
                >
                  HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                </a>
              </li>
              <li>
                <a 
                  href="#review" 
                  className={`hover:text-blue-800 transition-colors ${activeSection === 'review' ? 'text-blue-600 font-medium' : 'text-blue-600'}`}
                >
                  HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
                </a>
              </li>
            </ol>

            {/* Main Content - Section 1 */}
            <section id="what-info">
              <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-800 border-b pb-2">1. WHAT INFORMATION DO WE COLLECT?</h2>
              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-700">Personal information you disclose to us</h3>
              <p className="italic">In Short: We collect personal information that you provide to us.</p>
              <p className="mt-3">
                We collect personal information that you voluntarily provide to us when you
                express an interest in obtaining information about us or our products and
                Services, when you participate in activities on the Services, or otherwise
                when you contact us.
              </p>
              
              <p className="mt-4"><strong>Sensitive Information.</strong> We do not process sensitive information.</p>
              
              <p className="mt-4"><strong>Payment Data.</strong> We may collect data necessary to process your payment if
                you choose to make purchases, such as your payment instrument number,
                and the security code associated with your payment instrument. All
                payment data is handled and stored by Google Play. You may find their
                privacy notice link(s) here: <a href="https://play.google.com/intl/en-US_us/about/play-terms/index.html" className="text-blue-600 hover:text-blue-800 transition-colors break-words">
                  https://play.google.com/intl/en-US_us/about/play-terms/index.html
                </a>.
              </p>
              
              <p className="mt-4"><strong>Application Data.</strong> If you use our application(s), we also may collect the
                following information if you choose to provide us with access or permission:</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>
                  <strong>Geolocation Information.</strong> We may request access or permission to
                  track location-based information from your mobile device, either
                  continuously or while you are using our mobile application(s), to provide
                  certain location-based services. If you wish to change our
                  access or permissions, you may do so in your device's settings.
                </li>
                <li>
                  <strong>Mobile Device Data.</strong> We automatically collect device information
                  (such as your mobile device ID, model, and manufacturer), operating
                  system, version information and system configuration information,
                  device and application identification numbers, browser type and
                  version, hardware model Internet service provider and/or mobile
                  carrier, and Internet Protocol (IP) address (or proxy server). If you
                  are using our application(s), we may also collect information about
                  the phone network associated with your mobile device, your mobile
                  device's operating system or platform, the type of mobile device you
                  use, your mobile device's unique device ID, and information about
                  the features of our application(s) you accessed.
                </li>
              </ul>
              
              <p className="mt-4">
                This information is primarily needed to maintain the security and operation
                of our application(s), for troubleshooting, and for our internal analytics and
                reporting purposes.
              </p>
              
              <p className="mt-4">
                All personal information that you provide to us must be true, complete, and
                accurate, and you must notify us of any changes to such personal
                information.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-700">Information automatically collected</h3>
              <p className="italic">
                In Short: Some information — such as your Internet Protocol (IP) address
                and/or browser and device characteristics — is collected automatically
                when you visit our Services.
              </p>
              
              <p className="mt-3">
                We automatically collect certain information when you visit, use, or
                navigate the Services. This information does not reveal your specific
                identity (like your name or contact information) but may include device and
                usage information, such as your IP address, browser and device
                characteristics, operating system, language preferences, referring URLs,
                device name, country, location, information about how and when you use
                our Services, and other technical information. This information is primarily
                needed to maintain the security and operation of our Services, and for our
                internal analytics and reporting purposes.
              </p>
              
              <p className="mt-4">
                Like many businesses, we also collect information through cookies and
                similar technologies.
              </p>
              
              <p className="mt-4">The information we collect includes:</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>
                  <strong>Log and Usage Data.</strong> Log and usage data is service-related,
                  diagnostic, usage, and performance information our servers
                  automatically collect when you access or use our Services and
                  which we record in log files. Depending on how you interact with us,
                  this log data may include your IP address, device information,
                  browser type, and settings and information about your activity in the
                  Services (such as the date/time stamps associated with your usage,
                  pages and files viewed, searches, and other actions you take such
                  as which features you use), device event information (such as
                  system activity, error reports (sometimes called "crash dumps"), and
                  hardware settings).
                </li>
                <li>
                  <strong>Device Data.</strong> We collect device data such as information about your
                  computer, phone, tablet, or other device you use to access the
                  Services. Depending on the device used, this device data may
                  include information such as your IP address (or proxy server), device
                  and application identification numbers, location, browser type,
                  hardware model, Internet service provider and/or mobile carrier,
                  operating system, and system configuration information.
                </li>
              </ul>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-700">Google API</h3>
              <p>
                Our use of information received from Google APIs will adhere to{" "}
                <a href="https://developers.google.com/terms/api-services-user-data-policy" className="text-blue-600 hover:text-blue-800 transition-colors">
                  Google API Services User Data Policy
                </a>, including the{" "}
                <a href="https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes" className="text-blue-600 hover:text-blue-800 transition-colors">
                  Limited Use requirements
                </a>.
              </p>
            </section>

            {/* Section 2 */}
            <section id="how-process">
              <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-800 border-b pb-2">2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
              <p className="italic">
                In Short: We process your information to provide, improve, and
                administer our Services, communicate with you, for security and fraud
                prevention, and to comply with law. We may also process your information for other
                purposes with your consent.
              </p>
              
              <p className="mt-3">
                We process your personal information for a variety of reasons,
                depending on how you interact with our Services, including:
              </p>
              
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>
                  <strong>To deliver and facilitate delivery of services to the user.</strong> We may
                  process your information to provide you with the requested service.
                </li>
                <li>
                  <strong>To respond to user inquiries/offer support to users.</strong> We may
                  process your information to respond to your inquiries and solve any
                  potential issues you might have with the requested service.
                </li>
                <li>
                  <strong>To evaluate and improve our Services, products, marketing, and
                  your experience.</strong> We may process your information when we
                  believe it is necessary to identify usage trends, determine the
                  effectiveness of our promotional campaigns, and to evaluate and
                  improve our Services, products, marketing, and your experience.
                </li>
              </ul>
            </section>

            {/* Section 3 */}
            <section id="when-share">
              <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-800 border-b pb-2">3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
              <p className="italic">
                In Short: We may share information in specific situations described in this
                section and/or with the following third parties.
              </p>
              
              <p className="mt-3">
                <strong>Vendors, Consultants, and Other Third-Party Service Providers.</strong> We
                may share your data with third-party vendors, service providers,
                contractors, or agents ("third parties") who perform services for us or on
                our behalf and require access to such information to do that work. We have
                contracts in place with our third parties, which are designed to help
                safeguard your personal information. This means that they cannot do
                anything with your personal information unless we have instructed them to
                do it. They will also not share your personal information with any
                organization apart from us. They also commit to protect the data they hold
                on our behalf and to retain it for the period we instruct.
              </p>
              
              <p className="mt-4">The third parties we may share personal information with are as follows:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li><strong>Cloud Computing Services:</strong> Google Cloud Platform</li>
                <li><strong>Web and Mobile Analytics:</strong> Google Analytics</li>
                <li><strong>Website Testing:</strong> Google Play Console</li>
              </ul>
              
              <p className="mt-4">We also may need to share your personal information in the following situations:</p>
              <ul className="list-disc pl-5 mt-2 space-y-2">
                <li>
                  <strong>Business Transfers.</strong> We may share or transfer your information in
                  connection with, or during negotiations of, any merger, sale of
                  company assets, financing, or acquisition of all or a portion of our
                  business to another company.
                </li>
                <li>
                  <strong>When we use Google Maps Platform APIs.</strong> We may share your
                  information with certain Google Maps Platform APIs (e.g., Google
                  Maps API, Places API). Google Maps uses GPS, Wi-Fi, and cell
                  towers to estimate your location. GPS is accurate to about 20
                  meters, while Wi-Fi and cell towers help improve accuracy when
                  GPS signals are weak, like indoors. This data helps Google Maps
                  provide directions, but it is not always perfectly precise.
                </li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="cookies">
              <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-800 border-b pb-2">4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
              <p className="italic">
                In Short: We may use cookies and other tracking technologies to collect
                and store your information.
              </p>
              
              <p className="mt-3">
                We may use cookies and similar tracking technologies (like web beacons
                and pixels) to gather information when you interact with our Services.
                Some online tracking technologies help us maintain the security of our
                Services, prevent crashes, fix bugs, save your preferences, and assist with
                basic site functions.
              </p>
              
              <p className="mt-4">
                We also permit third parties and service providers to use online tracking
                technologies on our Services for analytics and advertising, including to help
                manage and display advertisements, to tailor advertisements to your
                interests, or to send abandoned shopping cart reminders (depending on
                your communication preferences). The third parties and service providers
                use their technology to provide advertising about products and services
                tailored to your interests which may appear either on our Services or on
                other websites.
              </p>
              
              <p className="mt-4">
                Specific information about how we use such technologies and how you can
                refuse certain cookies is set out in our Cookie Notice.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3 text-gray-700">Google Analytics</h3>
              <p>
                We may share your information with Google Analytics to track and analyze
                the use of the Services. The Google Analytics Advertising Features that we
                may use include: Google Analytics Demographics and Interests Reporting.
                To opt out of being tracked by Google Analytics across the Services, visit{" "}
                <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:text-blue-800 transition-colors">
                  https://tools.google.com/dlpage/gaoptout
                </a>. You can opt out of Google
                Analytics Advertising Features through Ads Settings and Ad Settings for
                mobile apps. Other opt out means include{" "}
                <a href="http://optout.networkadvertising.org/" className="text-blue-600 hover:text-blue-800 transition-colors">
                  http://optout.networkadvertising.org/
                </a> and{" "}
                <a href="http://www.networkadvertising.org/mobile-choice" className="text-blue-600 hover:text-blue-800 transition-colors">
                  http://www.networkadvertising.org/mobile-choice
                </a>. For more information on
                the privacy practices of Google, please visit the{" "}
                <a href="https://policies.google.com/privacy" className="text-blue-600 hover:text-blue-800 transition-colors">
                  Google Privacy & Terms page
                </a>.
              </p>
            </section>

            {/* Section 5 */}
            <section id="how-long">
              <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-800 border-b pb-2">5. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
              <p className="italic">
                In Short: We keep your information for as long as necessary to fulfill the
                purposes outlined in this Privacy Notice unless otherwise required by law.
              </p>
              
              <p className="mt-3">
                We will only keep your personal information for as long as it is necessary
                for the purposes set out in this Privacy Notice, unless a longer retention
                period is required or permitted by law (such as tax, accounting, or other
                legal requirements).
              </p>
              
              <p className="mt-4">
                When we have no ongoing legitimate business need to process your
                personal information, we will either delete or anonymize such information,
                or, if this is not possible (for example, because your personal information
                has been stored in backup archives), then we will securely store your
                personal information and isolate it from any further processing until deletion
                is possible.
              </p>
            </section>

            {/* Section 6 */}
            <section id="info-safe">
              <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-800 border-b pb-2">6. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
              <p className="italic">
                In Short: We aim to protect your personal information through a system of
                organizational and technical security measures.
              </p>
              
              <p className="mt-3">
                We have implemented appropriate and reasonable technical and
                organizational security measures designed to protect the security of any
                personal information we process. However, despite our safeguards and
                efforts to secure your information, no electronic transmission over the
                Internet or information storage technology can be guaranteed to be 100%
                secure, so we cannot promise or guarantee that hackers, cybercriminals, or
                other unauthorized third parties will not be able to defeat our security and
                improperly collect, access, steal, or modify your information. Although we
                will do our best to protect your personal information, transmission of
                personal information to and from our Services is at your own risk. You
                should only access the Services within a secure environment.
              </p>
            </section>

            {/* Section 7 */}
            <section id="privacy-rights">
              <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-800 border-b pb-2">7. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
              <p className="italic">
                In Short: You may review, change, or terminate your account at any time,
                depending on your country, province, or state of residence.
              </p>
              
              <p className="mt-3">
                <strong>Withdrawing your consent:</strong> If we are relying on your consent to process
                your personal information, which may be express and/or implied consent
                depending on the applicable law, you have the right to withdraw your
                consent at any time. You can withdraw your consent at any time by
                contacting us by using the contact details provided in the section "{" "}
                <a href="#contact" className="text-blue-600 hover:text-blue-800 transition-colors">
                  HOW CAN YOU CONTACT US ABOUT THIS NOTICE?
                </a>
                " below.
              </p>
              
              <p className="mt-4">
                However, please note that this will not affect the lawfulness of the
                processing before its withdrawal nor, when applicable law allows, will it
                affect the processing of your personal information conducted in reliance on
                lawful processing grounds other than consent.
              </p>
              
              <p className="mt-4">
                <strong>Cookies and similar technologies:</strong> Most Web browsers are set to accept
                cookies by default. If you prefer, you can usually choose to set your
                browser to remove cookies and to reject cookies. If you choose to remove
                cookies or reject cookies, this could affect certain features or services of
                our Services.
              </p>
              
              <p className="mt-4">
                If you have questions or comments about your privacy rights, you may
                email us at{" "}
                <a href="mailto:onur.ds@outlook.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                  onur.ds@outlook.com
                </a>.
              </p>
            </section>

            {/* Section 8 */}
            <section id="dnt">
              <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-800 border-b pb-2">8. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
              <p>
                Most web browsers and some mobile operating systems and mobile
                applications include a Do-Not-Track ("DNT") feature or setting you can
                activate to signal your privacy preference not to have data about your
                online browsing activities monitored and collected. At this stage, no uniform
                technology standard for recognizing and implementing DNT signals has
                been finalized. As such, we do not currently respond to DNT browser
                signals or any other mechanism that automatically communicates your
                choice not to be tracked online. If a standard for online tracking is adopted
                that we must follow in the future, we will inform you about that practice in a
                revised version of this Privacy Notice.
              </p>
            </section>

            {/* Section 9 */}
            <section id="updates">
              <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-800 border-b pb-2">9. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
              <p className="italic">
                In Short: Yes, we will update this notice as necessary to stay compliant
                with relevant laws.
              </p>
              
              <p className="mt-3">
                We may update this Privacy Notice from time to time. The updated version
                will be indicated by an updated "Revised" date at the top of this Privacy
                Notice. If we make material changes to this Privacy Notice, we may notify
                you either by prominently posting a notice of such changes or by directly
                sending you a notification. We encourage you to review this Privacy Notice
                frequently to be informed of how we are protecting your information.
              </p>
            </section>
            
            {/* Section 10 */}
            <section id="contact">
              <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-800 border-b pb-2">10. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
              <p>
                If you have questions or comments about this notice, you may email us at{" "}
                <a href="mailto:onur.ds@outlook.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                  onur.ds@outlook.com
                </a>{" "}
                or contact us by post at:
              </p>
              
              <div className="mt-4 pl-4 border-l-4 border-gray-200 py-2">
                <p className="font-medium">Onur Dursun</p>
                <p>Atasehir</p>
                <p>Istanbul, Turkiye 34750</p>
              </div>
            </section>
            
            {/* Section 11 */}
            <section id="review">
              <h2 className="text-2xl font-bold mt-10 mb-6 text-gray-800 border-b pb-2">11. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h2>
              <p>
                Based on the applicable laws of your country, you may have the right to
                request access to the personal information we collect from you, details
                about how we have processed it, correct inaccuracies, or delete
                your personal information. You may also have the right to withdraw your consent
                to our processing of your personal information. These rights may be limited
                in some circumstances by applicable law. To request to review, update, or
                delete your personal information, please fill out and{" "}
                <a href="#contact" className="text-blue-600 hover:text-blue-800 transition-colors">
                  submit a data subject access request
                </a>.
              </p>
            </section>
            
            
          </div>
        </div>
        
        {/* Footer */}
        <footer className="mt-8 text-center text-sm text-gray-500">
          <p>© 2025 Onur Dursun. All rights reserved.</p>
          <p className="mt-1">
            DurakGO - Metro Schedules of Ankara
          </p>
          <p className="mt-1">
            Contact: <a href="mailto:onur.ds@outlook.com" className="text-blue-600 hover:underline">onur.ds@outlook.com</a>
          </p>
        </footer>
      </div>
    </motion.div>
  );}