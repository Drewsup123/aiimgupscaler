import styles from "./PrivacyPolicy.module.sass";

const PrivacyPolicy = () => {
    return (
        <div className={`route ${styles.wrapper}`}>
            <h1>Privacy Policy</h1>
            <h2>
                Welcome to AI IMG TOOLS (referred to as the “Company”, “we”,
                “us”, or “our”). Your privacy matters to us, and we are
                dedicated to safeguarding your personal information and
                preserving your privacy rights. If you have any queries or
                concerns about this policy or our practices, please reach out to
                us at support@aiimgtools.com. By accessing our website at
                http://aiimgtools.com and utilizing our services, you are
                entrusting us with your personal details. We appreciate this
                trust and are committed to maintaining your privacy. This policy
                outlines our approach to privacy, explaining how we handle your
                information, what we collect, and your rights related to this
                information. We encourage you to review this policy carefully.
                If you disagree with any part of this privacy notice, please
                refrain from using our website and services. This policy applies
                to all information gathered through our website,
                http://iaiimgtools.com, and any associated services, sales,
                marketing, or events (collectively referred to as the “Services”
                in this notice).
            </h2>
            <hr />
            <h3>1. What Information Is Collected?</h3>
            <p>
                Our Services automatically collect certain information (via
                Google Analytics) when you visit or navigate them. While this
                information does not directly identify you, it may include
                specifics such as your IP address, device and browser traits,
                operating system, language preferences, referral URLs, device
                name, location, and usage patterns. This data primarily aids us
                in maintaining the security and functionality of our Services
                and is also used for analytics and reporting.
            </p>
            <h3>2. How Do We Utilize Your Information?</h3>
            <p>
                We utilize the information collected through our Services for
                various purposes, relying on legitimate business interests,
                contractual agreements, your consent, or compliance with legal
                obligations. These purposes include:
            </p>
            <ul>
                <li>
                    Facilitating Account Creation and Logon: If you connect your
                    account with a third-party account (e.g., Google), we use
                    the authorized information to simplify the account creation
                    and logon process.
                </li>
                <li>
                    Marketing and Promotions: Subject to your preferences, we,
                    or our third-party marketing partners, may use your
                    information for marketing. You can opt-out at any time
                    (refer to “WHAT ARE YOUR PRIVACY RIGHTS” below).
                </li>
                <li>
                    Order Fulfilment and Management: Your information may be
                    used to process and manage orders, payments, returns, and
                    exchanges.
                </li>
                <li>
                    Account Management: Your information helps us manage and
                    maintain your account.
                </li>
                <li>
                    Service Delivery: We may use your data to deliver requested
                    services.
                </li>
                <li>
                    User Support: Your information assists us in responding to
                    inquiries and resolving any issues with our Services.
                </li>
            </ul>
            <h3>3. Will Your Information Be Shared with Anyone?</h3>
            <p>We may process or share your data based on:</p>
            <ul>
                <li>
                    Consent: With your specific agreement for a particular
                    purpose.
                </li>
                <li>
                    Legitimate Interests: When necessary for our reasonable
                    business objectives.
                </li>
                <li>
                    Contract Performance: To fulfill our contractual obligations
                    to you.
                </li>
                <li>
                    Legal Requirements: When legally mandated, such as in
                    response to court orders or governmental requests.
                </li>
            </ul>
            <h3>4. How Are Your Uploaded Images Handled?</h3>
            <p>
                Your uploaded images are processed and enlarged using our AI
                network, stored temporarily for 12 hours, and then permanently
                deleted. These images will never be used for other purposes or
                shared.
            </p>
            {/* I STOPPED HERE DOUBLE CHECK THE ABOVE SECTION */}
            <h3>5. Account Management</h3>
            <p>
                You must provide accurate and current information when creating
                an account. Failure to comply may result in immediate
                termination. You are responsible for the confidentiality and
                security of your password and must notify us immediately of any
                security breach.
            </p>
            <h3>6. Liability Limitations</h3>
            <p>
                As permitted by law, we are not liable for any indirect or
                consequential losses. Our total liability is capped at the
                amount you paid for the Services.
            </p>
            <h3>7. Third-Party Links</h3>
            <p>
                We have no control over third-party websites linked to our
                Service and accept no responsibility for them. We advise you to
                review their terms and privacy policies.
            </p>
            <h3>8. Termination Rights</h3>
            <p>
                You may stop using our Services at any time. We may also suspend
                or terminate your access at our discretion. If inactive for 12
                consecutive months, we may delete your account, giving prior
                notice via email.
            </p>
            <h3>9. Changes to Terms</h3>
            <p>
                These Terms may be updated periodically, with the current
                version available on our website. Any significant reduction in
                your rights will be communicated to you. By continuing to use
                the Services, you accept the updated Terms.
            </p>
            <h3>10. Contact Us</h3>
            <p>
                [Provide contact information or directions for how users may get
                in touch with you.]
            </p>
        </div>
    );
};

export default PrivacyPolicy;
