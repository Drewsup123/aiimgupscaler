import styles from "./TermsAndConditions.module.sass";

const TermsAndConditionsPage = () => {
    return (
        <div className={`route ${styles.wrapper}`}>
            <h1>Terms and Conditions</h1>
            <h2>
                By utilizing our Services, you accept these Terms and consent to
                adhere to our Privacy and Acceptable Use policies. If you're
                employing our Services on behalf of an organization, you're
                accepting these Terms in the organization's name.
            </h2>
            <hr />
            <h3>1. Your Information & Permissions</h3>
            <p>
                Using our Services entails providing items such as your
                documents, content, email address, etc. <br />
                ("Your Information"). Your Information remains yours. These
                Terms grant us no rights to Your Information, apart from the
                restricted rights required to provide the Services. We need your
                consent to host, back up, and share Your Information as
                required. Our Services allow you to edit, organize, share, and
                search, and these functions might need us to access and store
                Your Information. You grant us permission for these actions,
                which also applies to our trusted third-party collaborators.
            </p>
            <h3>2. Your Obligations</h3>
            <p>
                You must secure your password and account details, ensuring no
                unauthorized access. You agree not to misuse our Services. For
                instance, the following actions are prohibited: Probing,
                scanning, or testing the vulnerability of any system or network;
                Accessing, tampering with unauthorized or shared parts of the
                Services; Selling the Services through unauthorized channels;
                Creating or accessing accounts using non-official interfaces or
                APIs.
            </p>
            <h3>3. Software Usage</h3>
            <p>
                Some Services permit downloading client software ("Software")
                that may update itself. You're granted a limited, nonexclusive,
                nontransferable, revocable license to use the Software
                exclusively to access the Services. Open-source components will
                be governed by their licenses, which may supersede these Terms.
                You agree not to reverse engineer the Services unless prohibited
                by law.
            </p>
            <h3>4. Intellectual Property</h3>
            <p>
                The Services are protected by various laws, and these Terms
                don't confer any ownership rights. We appreciate feedback but
                retain the right to use it without obligation.
            </p>
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
            <p>support@aiimgtools.com</p>
        </div>
    );
};

export default TermsAndConditionsPage;
