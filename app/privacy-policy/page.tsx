import React from 'react';
import bg from '/public/assets/Tokenomics-bg.png';
import Section from '../components/common/section';

const page = () => {
  return (
    <div
      className='bg-cover bg-center min-h-screen bg-no-repeat lazy-bg'
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <Section className='pt-16 md:pt-20 flex flex-col'>
        <h2 className='font-avon text-gradient text-4xl uppercase mb-4 text-left md:text-left'>
          Privacy Policy
        </h2>
        <p className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
          {' '}
          At Rise, accessible from www.riseofmemes.com, we are committed to
          safeguarding your privacy and ensuring the protection of your personal
          information. This privacy policy outlines how we collect, use,
          disclose, and protect your data when you interact with our website and
          participate in our play-to-earn game on the Solana blockchain.
        </p>
        {/****************  point 1****************/}
        <div>
          <h2 className='py-4 font-avon text-2xl md:text-4xl text-gradient  uppercase mb-4 text-left md:text-left'>
            1. Information We Collect{' '}
          </h2>
          <p className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-center text-wrap md:text-left no-scrollbar'>
            {' '}
            To provide you with the best possible experience, we collect various
            types of information, which can be categorized as follows:
          </p>
          <p className='py-3 text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
            {' '}
            Personal Information
          </p>
          <p className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm text-left md:text-lg  text-wrap md:text-left no-scrollbar'>
            {' '}
            When you interact with our website, you may provide us with certain
            personal information, including:
          </p>
          <ul className='list-disc pl-5   md:pl-10 py-3'>
            <li className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
              Name: Used for identification and communication.
            </li>
            <li className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
              Email Address: Required for sending newsletters, promotional
              materials, and updates about special offers.
            </li>
            <li className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
              Home Address: Necessary for the delivery of purchased items or
              services.
            </li>
          </ul>

          <p className='py-3 text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
            {' '}
            Non-Personal Information{' '}
          </p>
          <p className='py-3 text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
            {' '}
            We also collect non-personal information to enhance your user
            experience and improve our services. This may include:
          </p>
          <ul className='list-disc pl-5   md:pl-10 py-3'>
            <li className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
              IP Address: Helps us understand where our users are located and
              enhances site security.
            </li>
            <li className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
              Browser and Device Characteristics: Information about the type of
              browser and device you are using to access our site.
            </li>
            <li className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
              Operating System: Information about the software environment of
              your device.
            </li>
            <li className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
              Referring URLs: Tracks how you arrived at our website.
            </li>
            <li className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
              Location Information: Provides insights into geographic patterns
              of usage.
            </li>
            <li className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
              Usage Data: Information on how often you visit different parts of
              the website, helping us identify popular features and areas for
              improvement.
            </li>
          </ul>
          <p className='py-3 text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
            {' '}
            Mobile Information (if accessing via mobile)
          </p>
          <p className='py-3 text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
            {' '}
            If you access our website from a mobile device, we may collect the
            following information:
          </p>
          <ul className='list-disc pl-5   md:pl-10 py-3'>
            <li className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
              Mobile Device ID: A unique identifier for your mobile device.{' '}
            </li>
            <li className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
              Model and Manufacturer: Information regarding the specific model
              of your device.
            </li>
            <li className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
              Operating System and Version Information: Details about the mobile
              operating system running on your device.
            </li>
          </ul>

          <p className='py-3 text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
            {' '}
            Contact Form
          </p>
          <p className='py-3 text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
            {' '}
            We offer a contact form where you can submit your email address to
            receive updates on special offers. This is optional and at your
            discretion.
          </p>
        </div>
        {/****************  point 02****************/}
        <div>
          <h2 className='py-4 font-avon text-2xl md:text-4xl text-gradient  uppercase mb-4 text-left md:text-left'>
            {' '}
            2. Methods of Information Collection{' '}
          </h2>
          <p className=' py-3 text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
            {' '}
            We gather information through various methods, including:
          </p>
          <ul className='list-disc pl-5   md:pl-10 py-3'>
            <li className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
              Contact Forms: When you fill out a form to subscribe to
              newsletters or receive information about offers.{' '}
            </li>
            <li className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
              Analytics Tools: We utilize various tools to analyze user behavior
              and website performance.
            </li>
            <li className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
              Tracking Pixels: We may use pixels to monitor the effectiveness of
              our advertising and track user engagement.
            </li>
          </ul>
        </div>
        {/****************  point 03****************/}
        <div>
          <h2 className='py-4 font-avon text-2xl md:text-4xl text-gradient  uppercase mb-4 text-left md:text-left'>
            {' '}
            3. Use of Information
          </h2>
          <p className=' py-3 text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
            {' '}
            The information we collect is used for several key purposes:
          </p>
          <ul className='list-disc pl-5   md:pl-10 py-3'>
            <li className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
              Service Improvement: We analyze user data to enhance our website
              functionality and user experience.
            </li>
            <li className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
              Communication: We use your contact information to send purchased
              package items to your home address, as well as to inform you about
              new products, services, or promotional offers through newsletters.
            </li>
            <li className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
              User Engagement: By understanding your preferences and behaviors,
              we can tailor our offerings to better meet your needs.
            </li>
          </ul>
        </div>

        {/****************  point 04****************/}
        <div>
          <h2 className='py-4 font-avon text-2xl md:text-4xl text-gradient  uppercase mb-4 text-left md:text-left'>
            {' '}
            4. Information Sharing
          </h2>
          <p className=' py-3 text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
            {' '}
            Your privacy is paramount to us. We do not sell, trade, or otherwise
            transfer your personal information to third parties without your
            explicit consent. We may share information only in the following
            scenarios:{' '}
          </p>
          <ul className='list-disc pl-5   md:pl-10 py-3'>
            <li className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
              Legal Requirements: If required by law, we may disclose your
              information to comply with legal obligations or protect our
              rights.
            </li>
          </ul>
        </div>
        {/****************  point 05****************/}
        <div>
          <h2 className='py-4 font-avon text-2xl md:text-4xl text-gradient  uppercase mb-4 text-left md:text-left'>
            {' '}
            5. User Rights
          </h2>
          <p className=' py-3 text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
            As a user, you have several rights concerning your personal
            information, including:
          </p>
          <ul className='list-disc pl-5   md:pl-10 py-3'>
            <li className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
              Access and Portability: You have the right to request access to
              your personal data and receive a copy in a commonly used format.
            </li>
            <li className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
              Rectification: You may request corrections to any inaccurate or
              incomplete personal information.
            </li>
            <li className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
              Restricting or Limiting Processing: You can ask us to restrict or
              limit the processing of your personal information under certain
              circumstances.
            </li>
            <li className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
              Deletion: You have the right to request the deletion of your
              personal data when it is no longer necessary for the purposes for
              which it was collected.
            </li>
            <li className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
              Right to be Informed: You have the right to be informed about the
              collection and use of your personal information.
            </li>
            <li className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
              Objection to Processing: You can object to the processing of your
              personal data in certain situations.
            </li>
            <li className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
              Revocation of Consent: If we are relying on your consent to
              process your information, you have the right to withdraw that
              consent at any time.
            </li>
            <li className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
              Complaints: You can lodge a complaint with a supervisory authority
              if you believe your rights have been violated.
            </li>
            <li className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
              Rights Related to Automated Decision-Making: You have rights
              concerning any automated decision-making processes, including
              profiling.
            </li>
          </ul>
        </div>

        {/****************  point 06****************/}
        <div>
          <h2 className='py-4 font-avon text-2xl md:text-4xl text-gradient  uppercase mb-4 text-left md:text-left'>
            {' '}
            6. Data Security
          </h2>
          <p className=' py-3 text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
            We take the security of your personal information seriously and
            implement a variety of security measures to protect it, including:
          </p>
          <ul className='list-disc pl-5   md:pl-10 py-3'>
            <li className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
              Encryption: Sensitive information is encrypted during transmission
              to safeguard against unauthorized access.
            </li>
            <li className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
              Secure Servers: Our data is stored on secure servers with limited
              access to ensure its safety.
            </li>
            <li className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
              Regular Security Assessments: We conduct routine assessments of
              our security protocols to identify and address vulnerabilities.
            </li>
          </ul>
        </div>

        {/****************  point 07****************/}
        <div>
          <h2 className='py-4 font-avon text-2xl md:text-4xl text-gradient  uppercase mb-4 text-left md:text-left'>
            {' '}
            7. Cookies and Tracking Technologies
          </h2>
          <p className=' py-3 text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
            Our website uses cookies and similar tracking technologies to
            improve your experience. Cookies are small text files placed on your
            device that help us understand how you interact with our website.
            They can enhance your browsing experience by:
          </p>
          <ul className='list-disc pl-5   md:pl-10 py-3'>
            <li className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
              Remembering Preferences: Cookies can help remember your
              preferences and settings for future visits.
            </li>
            <li className='text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
              Analyzing Traffic: They help us analyze site traffic and user
              behavior, allowing us to make data-driven improvements.
            </li>
          </ul>
          <p className=' py-3 text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
            You have the option to accept or decline cookies through your
            browser settings. However, declining cookies may limit your ability
            to use certain features of our website.
          </p>
        </div>
        {/****************  point 08****************/}
        <div>
          <h2 className='py-4 font-avon text-2xl md:text-4xl text-gradient  uppercase mb-4 text-left md:text-left'>
            {' '}
            8. Third-Party Services
          </h2>
          <p className=' py-3 text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
            We do not utilize third-party payment processors for transactions on
            our website. However, we may provide links to our social media
            accounts (such as Telegram and Discord) to facilitate user
            engagement. We encourage you to review their privacy policies as we
            do not control their data handling practices.
          </p>
        </div>

        {/****************  point 09****************/}
        <div>
          <h2 className='py-4 font-avon text-2xl md:text-4xl text-gradient  uppercase mb-4 text-left md:text-left'>
            {' '}
            9. Children’s Privacy
          </h2>
          <p className=' py-3 text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
            Our website is intended solely for individuals who are 18 years of
            age or older. We do not knowingly collect personal information from
            anyone under 18. If we become aware that we have inadvertently
            collected such information, we will take steps to delete it as soon
            as possible.
          </p>
        </div>
        {/****************  point 10****************/}
        <div>
          <h2 className='py-4 font-avon text-2xl md:text-4xl text-gradient  uppercase mb-4 text-left md:text-left'>
            {' '}
            10. Changes to This Privacy Policy
          </h2>
          <p className=' py-3 text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
            We may update our privacy policy periodically to reflect changes in
            our practices or for other operational, legal, or regulatory
            reasons. We will notify you of any significant changes by posting
            the new privacy policy on this page, and we encourage you to review
            it regularly for updates.
          </p>
        </div>
        {/****************  point 11****************/}
        <div>
          <h2 className='py-4 font-avon text-2xl md:text-4xl text-gradient  uppercase mb-4 text-left md:text-left'>
            {' '}
            11. Contact Us
          </h2>
          <p className=' py-3 text-[#fff1de] text-shadow-effect-para font-[500] font-cinzel text-sm md:text-lg text-left md:text-left no-scrollbar'>
            If you have any questions, concerns, or requests regarding this
            privacy policy or your personal information, please feel free to
            contact us at: Email: contact@riseofmemes.com
          </p>
        </div>
      </Section>
    </div>
  );
};

export default page;
