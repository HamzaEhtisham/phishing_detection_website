// ✅ src/data/phishingQuizData.js

export const phishingQuizTopics = [
  {
    id: "topic_1",
    title: "What is Phishing?",
    prompts: [
      {
        question:
          "You receive an email from your bank asking you to “verify your account within 1 hour.” What is the safest action?",
        options: [
          "Click the link and log in immediately",
          "Call the bank using their official website number",
          "Reply to the email asking for confirmation",
          "Ignore and delete without checking",
        ],
        correctAnswer: 1,
      },
      {
        question: "A phishing email often tries to:",
        options: [
          "Educate users about security",
          "Offer free antivirus software",
          "Trick users into revealing sensitive information",
          "Send harmless promotional messages",
        ],
        correctAnswer: 2,
      },
      {
        question: "Which of the following best describes phishing?",
        options: [
          "Hacking through Wi-Fi networks",
          "Sending fraudulent communications posing as trusted entities",
          "Installing ransomware",
          "Using DDoS attacks",
        ],
        correctAnswer: 1,
      },
      {
        question: "The psychological element most exploited in phishing is:",
        options: ["Laziness", "Trust", "Intelligence", "Speed"],
        correctAnswer: 1,
      },
      {
        question:
          "You get a message claiming your email password will expire today; it includes a link. What should you do first?",
        options: [
          "Open the link immediately",
          "Verify the sender’s authenticity",
          "Change password through that link",
          "Share the link with friends",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which of the following is not a phishing channel?",
        options: ["SMS", "Email", "Social media", "BIOS firmware"],
        correctAnswer: 3,
      },
      {
        question: "Phishing attacks are most effective because they:",
        options: [
          "Use advanced encryption",
          "Exploit human behavior",
          "Infect systems automatically",
          "Require admin access",
        ],
        correctAnswer: 1,
      },
      {
        question: "Which is an example of spear phishing?",
        options: [
          "Random spam emails",
          "A personalized email to a company’s finance manager",
          "Pop-up advertisements",
          "Generic malware infection",
        ],
        correctAnswer: 1,
      },
      {
        question: "The best preventive measure against phishing is:",
        options: [
          "Using only mobile devices",
          "User awareness and training",
          "Ignoring all emails",
          "Regular PC restarts",
        ],
        correctAnswer: 1,
      },
      {
        question: "The term “phishing” originated because attackers were:",
        options: [
          "Fishing for personal information",
          "Coding fake websites",
          "Encrypting hard drives",
          "Testing email servers",
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: "topic_2",
    title: "How Phishing Works (Anatomy of an Attack)",
    prompts: [
      {
        question:
          "An attacker researches an employee’s LinkedIn profile before crafting an email. Which attack phase is this?",
        options: ["Delivery", "Reconnaissance", "Exploitation", "Exfiltration"],
        correctAnswer: 1,
      },
      {
        question:
          "You receive an email urging you to “reset your password now” with a branded button. Which phase does this represent?",
        options: [
          "Crafting the lure & deception stage",
          "Reconnaissance",
          "C2 communication",
          "Data exfiltration",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "A user enters their credentials into a fake login page. What is occurring?",
        options: [
          "Malware installation",
          "Credential harvesting",
          "Reconnaissance",
          "Delivery",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "An email with a malicious attachment successfully arrives in your inbox. Which phase is this?",
        options: ["Exploitation", "Delivery", "Interaction", "Lure creation"],
        correctAnswer: 1,
      },
      {
        question:
          "Attackers sending millions of phishing emails at once is an example of:",
        options: [
          "C2 channel",
          "Automated reconnaissance",
          "Mass delivery using botnets",
          "Exfiltration",
        ],
        correctAnswer: 2,
      },
      {
        question:
          "A phishing page that relays your login attempt to the real website to bypass MFA is known as:",
        options: [
          "Static phishing",
          "Proxy-based phishing attack",
          "Social login attack",
          "Credential stuffing",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "The attacker installs spyware after you open a document attachment. Which stage?",
        options: [
          "Delivery",
          "Exploitation / Installation of malware",
          "Reconnaissance",
          "Exfiltration",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "A compromised machine starts sending data to an external server regularly. This indicates:",
        options: [
          "Credential harvesting",
          "Command & control communication (C2)",
          "Reconnaissance",
          "Lure crafting",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "An attacker uses stolen credentials to access a payroll system. Which stage is this?",
        options: [
          "Exploitation & misuse of data",
          "Delivery",
          "Reconnaissance",
          "Interaction",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "A user clicks a link because the message claims their 'account will be disabled today.' This reflects:",
        options: [
          "Technical vulnerability",
          "Psychological manipulation (urgency trigger)",
          "Browser failure",
          "Network misconfiguration",
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "topic_3",
    title: "Recognizing Red Flags",
    prompts: [
      {
        question:
          "You receive an email from “IT Support,” but the reply-to address belongs to a Gmail account. What is the red flag?",
        options: [
          "Clear formatting",
          "Suspicious sender domain",
          "Too many images",
          "Long subject line",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "A message says, “Your payroll will be suspended unless you verify now.” This represents which common tactic?",
        options: [
          "Accuracy",
          "Urgency manipulation",
          "Technical update",
          "Scheduled maintenance",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "You hover over a link labeled “www.bank.com,” but it shows “www.bank-security-check.net.” What red flag is this?",
        options: [
          "Non-urgent message",
          "Link mismatch and typosquatting",
          "Missing attachments",
          "Large file size",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "An email addressed “Dear Customer” claims your employee record needs updating. What’s suspicious?",
        options: [
          "Generic greeting used instead of personalized name",
          "Use of bold text",
          "Normal salutation",
          "Simple formatting",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "You receive an attachment titled “Invoice_0725.exe” from an unknown sender. What red flag stands out?",
        options: [
          "File is too small",
          "Executable attachment from an unexpected source",
          "Logo quality",
          "No CC recipients",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "A message contains poor grammar and unusual sentence structure. What does this indicate?",
        options: [
          "Official communication",
          "Possibly machine translated or attacker-written content",
          "Internal memo",
          "Confidential approval",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "A social media message claims you won a free iPhone but you never entered any contest. What is the red flag?",
        options: [
          "Normal support content",
          "“Too good to be true” offer",
          "Regular promotion",
          "Technical update",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "You notice the sender's company logo is stretched and blurry. This is an example of:",
        options: [
          "Perfect branding",
          "Visual inconsistency indicating possible phishing page/email",
          "High-quality corporate design",
          "Internal customization",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "You receive an email late at night from a colleague who never works after hours, asking for confidential files. What red flag is most relevant?",
        options: [
          "Normal workflow",
          "Behavioral anomaly in timing and request nature",
          "Correct email format",
          "Short subject line",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "A message asks you to “Enable Macros” to view a document. Why is this suspicious?",
        options: [
          "Macros improve quality",
          "Macros are required for safe browsing",
          "Macros can run malicious code inside documents—major red flag",
          "It increases file size",
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: "topic_4",
    title: "Email Header & Link Inspection",
    prompts: [
      {
        question:
          "You inspect the header and see SPF = “Fail.” What does this indicate?",
        options: [
          "Email is fully verified",
          "Sender IP is not authorized for that domain",
          "Email is encrypted",
          "Email is from internal network",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "The “From” address shows your manager, but the “Return-Path” shows a strange foreign domain. What is likely happening?",
        options: [
          "Normal routing",
          "Display name conflict",
          "Email spoofing attempt",
          "Server maintenance",
        ],
        correctAnswer: 2,
      },
      {
        question:
          "You hover over a button labeled “Update Password,” and the link shows a non-HTTPS site. What should you conclude?",
        options: [
          "Safe company page",
          "Possibly insecure or malicious link",
          "Link is broken",
          "Certificate is optional",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "An email’s Received chain shows it originated from an IP not associated with your company. Why is this a red flag?",
        options: [
          "Emails must always come from localhost",
          "Origin IP helps identify spoofing or compromised servers",
          "All emails should have the same IP",
          "Emails never travel through multiple servers",
        ],
        correctAnswer: 1,
      },
      {
        question: "DKIM fails during header inspection. What does this imply?",
        options: [
          "Email content might have been altered in transit",
          "Email is guaranteed safe",
          "Server time is incorrect",
          "Signature not required",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "A link appears as “www.microsoft.com,” but after hovering, it displays “m1crosoft-sec-login.net.” What technique is being used?",
        options: [
          "Hashing",
          "Typosquatting & link masking",
          "Port scanning",
          "Tunneling",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "You find an email with a newly registered domain created 3 days ago. Why is this suspicious?",
        options: [
          "New domains are always safe",
          "Attackers often register new domains for quick phishing campaigns",
          "Email filters prefer new domains",
          "Older domains block emails",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "An attacker embeds an invisible link behind an image. What tactic is this?",
        options: [
          "Redirection via image hyperlinking (obfuscation)",
          "Domain aging",
          "Macro injection",
          "Header forwarding",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "You see an email where the SPF passes but DKIM fails. What is most likely?",
        options: [
          "Email is secure",
          "Sender IP is valid but message content may be altered",
          "Domain expiration warning",
          "Multi-factor authentication issue",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "You hover over a link and notice it redirects through multiple unknown websites before landing on a login page. What does this indicate?",
        options: [
          "Normal corporate routing",
          "Multi-layer security",
          "Potential malicious redirect chain used to hide phishing pages",
          "Browser update needed",
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: "topic_5",
    title: "Attachment & File-Based Threats",
    prompts: [
      {
        question:
          "You receive a file named “PaymentDetails.pdf.exe.” What is the red flag?",
        options: [
          "PDF is too large",
          "Double extension hiding an executable file",
          "File name is too long",
          "Email has no greeting",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "An email asks you to “Enable Content” in an attached document. What should you suspect?",
        options: [
          "Document needs formatting",
          "Macro-based malware delivery attempt",
          "File is corrupted",
          "Printer issue",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "You receive a ZIP file from an unknown sender with a password in the message. What is suspicious?",
        options: [
          "File compression",
          "Encrypted ZIP used to bypass security scans",
          "File is small",
          "Sender used uppercase letters",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "A vendor sends an invoice, but you're not responsible for processing invoices. What is this?",
        options: [
          "Standard operation",
          "Role mismatch—likely phishing attempt via malicious attachment",
          "Friendly communication",
          "Accidental email",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "A scanned PDF opens with a prompt to update Adobe Reader. What should you assume?",
        options: [
          "Normal update",
          "Potential malicious script embedded in PDF prompting fake updates",
          "Software optimization",
          "Missing font",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "An employee receives an encrypted Excel file but was not expecting it. What should they do first?",
        options: [
          "Enter the password",
          "Immediately open the file",
          "Verify the sender and purpose through a separate communication channel",
          "Upload it to shared drive",
        ],
        correctAnswer: 2,
      },
      {
        question:
          "The attachment preview feature in cloud storage helps because:",
        options: [
          "It downloads files faster",
          "It bypasses network monitoring",
          "It allows viewing without executing the file locally, reducing risk",
          "It reduces storage cost",
        ],
        correctAnswer: 2,
      },
      {
        question:
          "You run a suspicious attachment in a sandbox, and it starts contacting external IP addresses. What does this indicate?",
        options: [
          "Normal file behavior",
          "Potential malware trying to establish command & control communication",
          "Software update",
          "Network optimization",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "An email claims to be from HR but the file inside contains JavaScript code. Why is this suspicious?",
        options: [
          "HR always uses JavaScript",
          "JavaScript attachments are uncommon and often malicious in corporate workflows",
          "JavaScript files run safer",
          "Script automates attendance",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "You receive an attachment with an extension “.xlsm,” but you expected “.xlsx.” What should you conclude?",
        options: [
          "It's just a color change",
          "File is macro-enabled and may contain active scripts—needs caution",
          "File is corrupted",
          "It’s a temporary file",
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "topic_6",
    title: "Social Engineering & Human Exploitation",
    prompts: [
      {
        question:
          "You receive a call from “IT Support” asking for your password to fix an urgent issue. What should you do?",
        options: [
          "Provide the password since they sound professional",
          "Ask them to email confirmation",
          "Verify through official IT channels before responding",
          "Ignore the call",
        ],
        correctAnswer: 2,
      },
      {
        question:
          "An attacker researches an employee’s LinkedIn and creates a believable HR pretext. What technique is being used?",
        options: ["Vishing", "Pretexting", "Tailgating", "Credential stuffing"],
        correctAnswer: 1,
      },
      {
        question:
          "You receive an SMS claiming your bank account is frozen. What type of attack is this?",
        options: ["Vishing", "Smishing", "Pretexting", "Malware injection"],
        correctAnswer: 1,
      },
      {
        question:
          "A caller pretends to be your manager and requests financial documents. What should you do?",
        options: [
          "Send the documents immediately",
          "Ask for verification through internal channels",
          "Appear cooperative to avoid conflict",
          "Ignore and block the number",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "An attacker impersonates a vendor requesting payment details. What are they exploiting?",
        options: [
          "Technical flaws",
          "Human trust",
          "Database vulnerabilities",
          "MFA gaps",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Someone tailgates you into a secure office area. This is an example of:",
        options: [
          "Social engineering",
          "Malware",
          "Password spraying",
          "Reconnaissance",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "You receive an email from “HR” with 'Updated Salary Structure' attached. What should you do?",
        options: [
          "Directly open it",
          "Forward it to colleagues",
          "Inspect the sender address and verify legitimacy",
          "Download it to check later",
        ],
        correctAnswer: 2,
      },
      {
        question:
          "An attacker pressures you to act quickly by saying “system will shut down in 10 minutes.” What tactic is this?",
        options: [
          "Technical exploitation",
          "Urgency principle",
          "Reverse engineering",
          "MFA bypass",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Someone posing as an auditor asks for your system login. What should you do?",
        options: [
          "Give temporary access",
          "Ask a coworker",
          "Refuse and report it",
          "Share limited credentials",
        ],
        correctAnswer: 2,
      },
      {
        question:
          "A fake WhatsApp message claiming to be CEO asks for gift card codes. This attack relies on:",
        options: [
          "Complex malware",
          "Authority exploitation",
          "System misconfiguration",
          "Encryption failure",
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "topic_7",
    title: "Password & MFA Security",
    prompts: [
      {
        question:
          "You receive an MFA push notification you didn’t initiate. What should you do?",
        options: [
          "Approve it",
          "Ignore and report it",
          "Restart device",
          "Approve repeated prompts",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "A phishing page steals your password then asks for OTP. Which attack is this?",
        options: [
          "Password spraying",
          "MFA fatigue attack",
          "Real-time phishing proxy",
          "Brute force",
        ],
        correctAnswer: 2,
      },
      {
        question:
          "A colleague shares their password with a team member. This increases the risk of:",
        options: [
          "MFA bypass",
          "Credential compromise",
          "Software malfunction",
          "Network latency",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "An attacker steals your password but MFA blocks login because:",
        options: [
          "Wrong browser",
          "Attacker lacks second factor",
          "Works only in office hours",
          "System glitch",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Message pretending to be cybersecurity team asking for password is:",
        options: [
          "Legitimate maintenance",
          "Password reset",
          "Credential phishing",
          "MFA enrollment",
        ],
        correctAnswer: 2,
      },
      {
        question: "Using the same password everywhere increases risk of:",
        options: [
          "Zero-day",
          "Credential stuffing",
          "Encryption failure",
          "Firewall issue",
        ],
        correctAnswer: 1,
      },
      {
        question: "System asking for extra verification due to foreign IP is:",
        options: [
          "Social engineering",
          "Conditional access control",
          "Firewall enforcement",
          "Patch management",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Approving repeated MFA prompts out of frustration causes compromise. This attack is:",
        options: [
          "Push fatigue attack",
          "SQL injection",
          "DDoS",
          "Brute forcing",
        ],
        correctAnswer: 0,
      },
      {
        question: "SIM swapping is used to steal:",
        options: [
          "Device settings",
          "Email provider",
          "Your second authentication factor",
          "Password manager",
        ],
        correctAnswer: 2,
      },
      {
        question: "Login requiring password + fingerprint is:",
        options: [
          "Single-factor",
          "Two-factor authentication",
          "Passwordless",
          "No authentication",
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "topic_8",
    title: "Reporting Phishing & Incident Response",
    prompts: [
      {
        question:
          "You receive a suspicious bank email. What should you do first?",
        options: [
          "Delete it",
          "Report to security",
          "Forward to coworkers",
          "Reply",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Coworker clicked a suspicious link but says 'nothing happened.' What should they do?",
        options: ["Ignore", "Wait", "Report immediately", "Restart laptop"],
        correctAnswer: 2,
      },
      {
        question: "Unsure about an email? Best action?",
        options: [
          "Open it",
          "Mark spam",
          "Report even if unsure",
          "Ask friends",
        ],
        correctAnswer: 2,
      },
      {
        question: "Most important info to include when reporting phishing?",
        options: [
          "Personal opinion",
          "Email header and link details",
          "Only subject",
          "Summary without evidence",
        ],
        correctAnswer: 1,
      },
      {
        question: "Forwarding phishing email to team members is:",
        options: [
          "Helpful",
          "Neutral",
          "Risky and should be avoided",
          "Required",
        ],
        correctAnswer: 2,
      },
      {
        question:
          "IT asks you to reset password after reporting phishing. You should:",
        options: ["Delay", "Ignore", "Reset immediately", "Log out only"],
        correctAnswer: 2,
      },
      {
        question:
          "Security blocks malicious domain after your report. This means:",
        options: [
          "Reporting was unnecessary",
          "Early reporting prevents compromise",
          "Incident resolves itself",
          "Domain was harmless",
        ],
        correctAnswer: 1,
      },
      {
        question: "You deleted a phishing email before reporting. What now?",
        options: [
          "Stay silent",
          "Report even without email",
          "Recover it only",
          "Recreate from memory",
        ],
        correctAnswer: 1,
      },
      {
        question: "You get suspicious login alerts. Whom should you contact?",
        options: ["HR", "Legal", "Security/IT", "Front desk"],
        correctAnswer: 2,
      },
      {
        question:
          "Incident team asks for screenshots after reporting. This means:",
        options: [
          "They are blaming you",
          "They need more data for investigation",
          "Report was incorrect",
          "Issue already resolved",
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "topic_9",
    title: "Post-Phishing Response & Recovery",
    prompts: [
      {
        question:
          "You clicked a suspicious link but entered no info. First step?",
        options: [
          "Ignore",
          "Report to security",
          "Delete history",
          "Restart PC",
        ],
        correctAnswer: 1,
      },
      {
        question: "You entered your password into a phishing page. What now?",
        options: [
          "Log out and continue",
          "Disable account",
          "Change password immediately",
          "Wait",
        ],
        correctAnswer: 2,
      },
      {
        question:
          "After opening suspicious attachment, device is slow. Best action?",
        options: [
          "Keep working",
          "Disconnect from internet",
          "Delete temp files",
          "Update OS",
        ],
        correctAnswer: 1,
      },
      {
        question: "Login attempts from foreign countries indicate:",
        options: [
          "Routine scanning",
          "Account compromise",
          "System update",
          "VPN malfunction",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Security asks user to enable MFA after credential theft because:",
        options: [
          "Restore deleted files",
          "Block unauthorized access",
          "Speed up login",
          "Avoid password resets",
        ],
        correctAnswer: 1,
      },
      {
        question: "Repeated MFA prompts you didn’t initiate suggest:",
        options: [
          "Network downtime",
          "Someone trying to log in",
          "MFA app malfunction",
          "Account deactivation",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Browser auto-downloads a file after malicious link click. You should:",
        options: [
          "Open the file",
          "Delete quietly",
          "Report and stop using device",
          "Upload to cloud",
        ],
        correctAnswer: 2,
      },
      {
        question:
          "IT asking for time and screenshot of suspicious email means:",
        options: [
          "They doubt your claim",
          "Need evidence for investigation",
          "Reinstall OS needed",
          "Punish sender",
        ],
        correctAnswer: 1,
      },
      {
        question: "Colleague clicked link but 'did nothing else.' You advise:",
        options: ["No action", "Wait", "Report it anyway", "Clear cache"],
        correctAnswer: 2,
      },
      {
        question: "Which behavior is a sign of device compromise?",
        options: [
          "System normal",
          "Pop-ups and unknown apps",
          "Antivirus updating",
          "Longer boot after updates",
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "topic_10",
    title: "Role_specific-Scenario",
    prompts: [
      {
        question:
          "A finance officer receives an email from a vendor requesting a bank account update for future payments. What should they do?",
        options: [
          "Update the bank details immediately",
          "Ignore the email",
          "Verify with the vendor using official contact channels",
          "Forward it to coworkers",
        ],
        correctAnswer: 2,
      },
      {
        question:
          "A CEO receives an email asking them to urgently approve a wire transfer while traveling. Red flag?",
        options: [
          "The urgency and unusual request",
          "The email is polite",
          "The message includes greetings",
          "The email is short",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "An HR manager receives a resume PDF that requires enabling macros. What should they do?",
        options: [
          "Enable macros to read it",
          "Delete without reporting",
          "Report it as suspicious",
          "Forward it to a colleague",
        ],
        correctAnswer: 2,
      },
      {
        question:
          "A developer gets an email saying 'Critical security patch — install now' with a link. Correct action?",
        options: [
          "Download immediately",
          "Verify through official documentation",
          "Ignore the patch",
          "Run it in a sandbox yourself",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "IT admin receives a request to reset a password urgently. What should the admin do?",
        options: [
          "Reset immediately",
          "Ask for identity verification",
          "Ignore the request",
          "Share a default password",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Support rep gets a call asking for account details. What must they do first?",
        options: [
          "Provide the details",
          "Transfer the call to HR",
          "Authenticate the caller",
          "Continue casually",
        ],
        correctAnswer: 2,
      },
      {
        question:
          "A marketing employee receives a collaboration link redirecting to a login page. This is a sign of:",
        options: [
          "Normal partnership process",
          "Branding survey",
          "Credential phishing",
          "Browser update",
        ],
        correctAnswer: 2,
      },
      {
        question:
          "Academic staff receives an .exe file from a student claiming portal issues. What should they do?",
        options: [
          "Run it",
          "Reply asking for another version",
          "Report and avoid opening the attachment",
          "Upload to campus portal",
        ],
        correctAnswer: 2,
      },
      {
        question:
          "Sales employee receives login verification link for a discount. Correct response?",
        options: [
          "Enter login details",
          "Share with friends",
          "Check if the domain matches official services",
          "Click first then verify",
        ],
        correctAnswer: 2,
      },
      {
        question:
          "Sysadmin sees multiple reset requests from an employee who didn’t initiate them. This indicates:",
        options: [
          "Normal reset attempt",
          "Account compromise attempt",
          "Device malfunction",
          "Attacker testing antivirus",
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "topic_11",
    title: "Safe Social Media & Public Info Hygiene",
    prompts: [
      {
        question:
          "You receive a friend request from someone with your colleague’s name/photo but the account is new. What’s the safest response?",
        options: [
          "Accept the request",
          "Message them on another platform for confirmation",
          "Ignore the request",
          "Report immediately",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "An attacker gathers your birthday, hometown, and school from social media. What attack is likely?",
        options: [
          "SQL injection",
          "Social engineering to bypass authentication questions",
          "DDoS attack",
          "Network sniffing",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Friend tags you in a giveaway with a suspicious external link. What should you do?",
        options: [
          "Click the link",
          "Ignore it",
          "Remove the tag and warn your friend",
          "Repost it",
        ],
        correctAnswer: 2,
      },
      {
        question:
          "You posted a photo accidentally showing confidential info. Correct action?",
        options: [
          "Delete the post and inform supervisor",
          "Edit the caption",
          "Leave it",
          "Blur and reupload before deletion",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "A message claims your Instagram violated guidelines and asks you to click a link. This is:",
        options: [
          "Routine verification",
          "Social media phishing",
          "Security audit",
          "Password reminder",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Coworker posts office photo showing ID cards/screens. Biggest risk?",
        options: [
          "Loss of likes",
          "Brand reputation damage",
          "Leakage of confidential info",
          "Lower engagement",
        ],
        correctAnswer: 2,
      },
      {
        question:
          "Using same password for Facebook and corporate account results in what risk?",
        options: [
          "Website shutdown",
          "Unauthorized access to corporate account",
          "Deletion of FB posts",
          "Slow internet",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Influencer promotes investment group using shortened link. Safest step?",
        options: [
          "Preview the link using expander/scanner",
          "Open in incognito",
          "Ask others",
          "Disable antivirus",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Attacker creates fake profile using your public photos/info. What practice prevents this?",
        options: [
          "Posting more",
          "Limiting profile visibility",
          "Using VPN",
          "Following fewer people",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Sibling posts your personal details publicly. What should you do?",
        options: [
          "Ignore it",
          "Request removal or remove identifiable details",
          "Comment more details",
          "Block them",
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "topic_12",
    title: "Legal / Policy / Consequences",
    prompts: [
      {
        question:
          "Company delays breach reporting beyond legal time. Consequence?",
        options: [
          "More email traffic",
          "Regulatory fines for non-compliance",
          "Faster recovery",
          "Auto-dismissal of employees",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Employee shares login credentials with colleague. What violation?",
        options: [
          "Acceptable social media use",
          "Password confidentiality breach",
          "Bandwidth misuse",
          "Data retention violation",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Phishing attack is launched from another country. Which is correct?",
        options: [
          "Cannot be prosecuted",
          "Only victim country's laws apply",
          "International frameworks can enable prosecution",
          "No action possible",
        ],
        correctAnswer: 2,
      },
      {
        question:
          "User clicks phishing link, leaks data, but doesn't report. Result?",
        options: [
          "More storage use",
          "Delayed response worsening breach",
          "Better performance",
          "Auto password reset",
        ],
        correctAnswer: 1,
      },
      {
        question: "Breach due to no MFA. Consequence?",
        options: [
          "Criminal charges for customers",
          "Legal penalties for failing to protect data",
          "Free advertising",
          "Employee morale boost",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Terminated employee still has access and attacks org. Failure?",
        options: [
          "Poor asset procurement",
          "Ineffective access management",
          "Weak auditing",
          "Too much training",
        ],
        correctAnswer: 1,
      },
      {
        question: "Employee ignoring training — HR issues warning. This is:",
        options: [
          "Criminal",
          "Regulatory",
          "Organizational disciplinary action",
          "Technical malfunction",
        ],
        correctAnswer: 2,
      },
      {
        question:
          "Company suffers reputation damage from phishing breach. Long-term effect?",
        options: [
          "Increased trust",
          "Higher stock price",
          "Loss of clients & financial decline",
          "Better system stability",
        ],
        correctAnswer: 2,
      },
      {
        question: "Manager instructs staff to hide incident. Issue?",
        options: [
          "Improves morale",
          "Ensures compliance",
          "Violates ethical/reporting obligations",
          "Strengthens security",
        ],
        correctAnswer: 2,
      },
      {
        question:
          "Hacker running phishing operation is arrested. Likely outcome?",
        options: [
          "Mandatory training",
          "Civil fines, prison time, or both",
          "Promotion",
          "A warning letter",
        ],
        correctAnswer: 1,
      },
    ],
  },
  {
    id: "topic_13",
    title: "Ongoing Threat Trends & Real Case Studies",
    prompts: [
      {
        question:
          "Vendor email requests updated bank details but domain is slightly different. This represents:",
        options: [
          "Random spam",
          "Business Email Compromise (BEC)",
          "DDoS attack",
          "System upgrade",
        ],
        correctAnswer: 1,
      },
      {
        question: "CEO voice is impersonated using AI in voicemail. This is:",
        options: [
          "SQL injection",
          "Deepfake-assisted phishing",
          "Password violation",
          "Network sniffing",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "QR code at restaurant redirects to login page. What is happening?",
        options: [
          "Cloud failure",
          "Quishing (QR phishing)",
          "WPA2 attack",
          "Normal marketing",
        ],
        correctAnswer: 1,
      },
      {
        question: "Fake Microsoft 365 login page targets:",
        options: [
          "Local hardware",
          "Cloud credentials",
          "Wi-Fi encryption",
          "USB devices",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Fake job offer via LinkedIn followed by malicious form. Attack relies on:",
        options: [
          "Random guessing",
          "Trust-building via social media",
          "Hardware weakness",
          "Router issues",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "SMS about package delivery leads to fake payment page. This is:",
        options: [
          "Smishing",
          "Privilege escalation",
          "Data compression",
          "Software patching",
        ],
        correctAnswer: 0,
      },
      {
        question:
          "Phishing email with no links/attachments asks for files directly. Trend?",
        options: [
          "Malware-driven attack",
          "BEC simplicity (no payload phishing)",
          "Hardware sabotage",
          "DNS poisoning",
        ],
        correctAnswer: 1,
      },
      {
        question:
          "Attackers use OAuth permissions instead of stealing passwords. Technique?",
        options: [
          "Zero-day",
          "Token-based phishing",
          "SQL truncation",
          "VPN tunneling",
        ],
        correctAnswer: 1,
      },
      {
        question: "Multiple MFA push prompts until user accepts. Threat?",
        options: [
          "MFA-fatigue attack",
          "Botnet attack",
          "Physical breach",
          "Drive-by download",
        ],
        correctAnswer: 0,
      },
      {
        question: "Criminals impersonate govt officials via WhatsApp. This is:",
        options: [
          "Hardware failure",
          "Multi-channel social engineering",
          "Network misconfiguration",
          "Firewall bypass",
        ],
        correctAnswer: 1,
      },
    ],
  },
];

// ---------------- PAGE 2 ----------------

export const phishingAttackCategories = [
  {
    id: "email_message",
    title: "Email / message-based",
    subtopics: [
      {
        name: "Generic Email Phishing",
        prompts: [
          {
            question: "Generic phishing emails usually:",
            options: [
              "Target many users with generic content",
              "Use personal details of one target",
              "Send physical letters",
              "Encrypt local files",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        name: "Spear-phishing",
        prompts: [
          {
            question: "Spear-phishing uses:",
            options: [
              "Personal or company information for targeted deception",
              "Fake antivirus software",
              "Spam filters",
              "Firewalls",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        name: "Whaling / Executive Targeting",
        prompts: [
          {
            question: "Whaling attacks focus on:",
            options: [
              "High-value individuals like executives",
              "Customer support teams",
              "Marketing interns",
              "Network admins only",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        name: "Business Email Compromise (BEC) / CEO Fraud",
        prompts: [
          {
            question: "BEC attacks involve:",
            options: [
              "Impersonating executives for fraudulent transfers",
              "Sending mass spam emails",
              "Website defacement",
              "Software updates",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        name: "Clone Phishing",
        prompts: [
          {
            question: "Clone phishing reuses:",
            options: [
              "Legitimate email threads with swapped links/attachments",
              "New email templates",
              "Public social media posts",
              "Antivirus alerts",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        name: "Invoice / Payment Diversion Scams",
        prompts: [
          {
            question: "Invoice scams aim to:",
            options: [
              "Change payment instructions to attacker's account",
              "Offer discounts on products",
              "Confirm order deliveries",
              "Request product reviews",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        name: "Attachment-based Phishing (Macro Malware)",
        prompts: [
          {
            question: "Macro malware is often found in:",
            options: [
              "Malicious documents requiring macros to be enabled",
              "Plain text emails",
              "Image files",
              "PDFs without active content",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        name: "Credential-Harvesting Pages (Fake Login Pages)",
        prompts: [
          {
            question: "Fake login pages are designed to:",
            options: [
              "Steal user credentials",
              "Provide legitimate access",
              "Offer software downloads",
              "Display advertisements",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        name: "OAuth Consent Phishing",
        prompts: [
          {
            question: "OAuth phishing tricks users into:",
            options: [
              "Granting malicious apps access to their accounts",
              "Updating their operating system",
              "Changing their email password securely",
              "Installing antivirus software",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        name: "Reply-Chain / Thread Hijacking",
        prompts: [
          {
            question: "Thread hijacking involves:",
            options: [
              "Inserting attacker into existing email conversations",
              "Starting new email chains",
              "Deleting old emails",
              "Archiving messages",
            ],
            correctAnswer: 0,
          },
        ],
      },
    ],
  },
  {
    id: "web_url",
    title: "Web / URL / domain-based",
    subtopics: [
      {
        name: "Typosquatting / Domain Squatting",
        prompts: [
          {
            question: "Typosquatting involves:",
            options: [
              "Using domains that look similar to legitimate ones",
              "Sending fake SMS messages",
              "Voice phishing calls",
              "Hardware keyloggers",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        name: "Homograph / IDN Spoofing",
        prompts: [
          {
            question: "Homograph attacks use:",
            options: [
              "Similar Unicode characters to mimic domains",
              "Exact domain replicas",
              "IP addresses directly",
              "Encrypted connections",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        name: "Pharming / DNS Hijack",
        prompts: [
          {
            question: "Pharming redirects users to malicious sites by:",
            options: [
              "Manipulating DNS settings",
              "Sending phishing emails",
              "Using fake Wi-Fi hotspots",
              "Physical access to devices",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        name: "Drive-by Download / Malvertising",
        prompts: [
          {
            question: "Malvertising delivers malware through:",
            options: [
              "Malicious online advertisements",
              "Direct email attachments",
              "SMS messages",
              "Phone calls",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        name: "SEO Poisoning",
        prompts: [
          {
            question: "SEO poisoning involves:",
            options: [
              "Ranking malicious sites high in search results",
              "Sending unsolicited emails",
              "Creating fake social media profiles",
              "Using voice calls to deceive",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        name: "QR Code Phishing",
        prompts: [
          {
            question: "QR Code phishing tricks users into:",
            options: [
              "Scanning malicious codes that open phishing sites",
              "Downloading updates from trusted apps",
              "Encrypting files locally",
              "Resetting passwords safely",
            ],
            correctAnswer: 0,
          },
        ],
      },
    ],
  },
  {
    id: "telephony_sms",
    title: "Telephony & SMS",
    subtopics: [
      {
        name: "Vishing (Voice Phishing)",
        prompts: [
          {
            question: "Vishing attacks are carried out via:",
            options: ["Phone calls", "Emails", "QR codes", "Browser pop-ups"],
            correctAnswer: 0,
          },
        ],
      },
      {
        name: "Smishing (SMS Phishing)",
        prompts: [
          {
            question: "Smishing uses which medium?",
            options: ["SMS/Text messages", "Websites", "Emails", "Social apps"],
            correctAnswer: 0,
          },
        ],
      },
      {
        name: "Callback / Missed-call Scams",
        prompts: [
          {
            question: "Callback scams lure victims to:",
            options: [
              "Call back a premium or attacker number",
              "Visit a legitimate website",
              "Download a safe application",
              "Reply to an email",
            ],
            correctAnswer: 0,
          },
        ],
      },
    ],
  },
  {
    id: "social_platforms",
    title: "Social platforms & apps",
    subtopics: [
      {
        name: "Social Media Phishing / Profile Reconnaissance",
        prompts: [
          {
            question: "Social media phishing uses:",
            options: [
              "Messages or fake profiles to trick users",
              "Official company announcements",
              "Secure login portals",
              "Encrypted chat applications",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        name: "Angler Phishing (Customer-service Impersonation)",
        prompts: [
          {
            question: "Angler phishing involves:",
            options: [
              "Fake social replies posing as customer support",
              "Official customer service calls",
              "Automated email responses",
              "In-person support",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        name: "Fake Apps / App Store Phishing",
        prompts: [
          {
            question: "Fake apps trick users into:",
            options: [
              "Downloading malicious or look-alike mobile applications",
              "Updating legitimate apps",
              "Using secure app stores",
              "Verifying app permissions",
            ],
            correctAnswer: 0,
          },
        ],
      },
    ],
  },
  {
    id: "network_infra",
    title: "Network & infrastructure",
    subtopics: [
      {
        name: "Evil-Twin Wi-Fi / Rogue AP",
        prompts: [
          {
            question: "An Evil Twin Wi-Fi is:",
            options: [
              "A fake hotspot that steals user data",
              "A VPN connection",
              "A firewall rule",
              "A proxy cache",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        name: "Man-in-the-Middle (MitM) Phishing",
        prompts: [
          {
            question: "MitM attacks involve:",
            options: [
              "Intercepting traffic to capture credentials",
              "Direct connection to servers",
              "Using secure protocols",
              "Offline data storage",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        name: "Session Hijacking / Cookie Theft",
        prompts: [
          {
            question: "Session hijacking steals:",
            options: [
              "Active user sessions or cookies",
              "Encrypted network packets",
              "Hardware identifiers",
              "Software licenses",
            ],
            correctAnswer: 0,
          },
        ],
      },
    ],
  },
  {
    id: "advanced_media",
    title: "Advanced / multimedia / social engineering",
    subtopics: [
      {
        name: "Deepfake / Synthetic Media Impersonation",
        prompts: [
          {
            question: "Deepfake phishing may use:",
            options: [
              "AI-generated video or audio to impersonate someone",
              "Encrypted email",
              "Static website redirects",
              "Image compression",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        name: "Pretexting / In-person Social Engineering",
        prompts: [
          {
            question: "Pretexting relies on:",
            options: [
              "Creating a believable fabricated scenario to gain information",
              "Technical vulnerabilities",
              "Automated scripts",
              "Random guessing",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        name: "Watering-hole Attacks",
        prompts: [
          {
            question: "Watering-hole attacks compromise:",
            options: [
              "Websites frequently visited by a target group",
              "Individual email accounts",
              "Home Wi-Fi networks",
              "Public cloud storage",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        name: "Supply-chain / Vendor Compromise",
        prompts: [
          {
            question: "Supply-chain attacks leverage:",
            options: [
              "Compromised vendor channels to distribute malware or phish",
              "Direct attacks on end-users",
              "Physical theft of devices",
              "Brute-force password attacks",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        name: "Clipboard Hijacking",
        prompts: [
          {
            question: "Clipboard hijacking malware replaces:",
            options: [
              "Copied cryptocurrency wallet addresses",
              "Text in documents",
              "Browser history",
              "System settings",
            ],
            correctAnswer: 0,
          },
        ],
      },
    ],
  },
  {
    id: "physical_offline",
    title: "Physical / offline vectors",
    subtopics: [
      {
        name: "USB Drop / Rogue USBs",
        prompts: [
          {
            question: "USB Drop attacks rely on:",
            options: [
              "Human curiosity to plug unknown USBs",
              "Network penetration testing",
              "Social media ads",
              "VPN setup",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        name: "Mail / Physical Letter Phishing",
        prompts: [
          {
            question: "Physical letter phishing uses:",
            options: [
              "Printed letters with malicious links or QR codes",
              "Email attachments",
              "SMS messages",
              "Voice calls",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        name: "On-site Social Engineering",
        prompts: [
          {
            question: "On-site social engineering involves:",
            options: [
              "Impersonating staff to gain physical access",
              "Remote network access",
              "Email-based deception",
              "Automated system attacks",
            ],
            correctAnswer: 0,
          },
        ],
      },
    ],
  },
  {
    id: "other_variants",
    title: "Other noteworthy variants",
    subtopics: [
      {
        name: "Malicious Chatbots / Automated Scams",
        prompts: [
          {
            question: "Malicious chatbots are used to:",
            options: [
              "Trick users into revealing credentials or clicking links",
              "Improve customer support",
              "Scan QR codes safely",
              "Encrypt user data",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        name: "Pop-up / Browser Alert Phishing",
        prompts: [
          {
            question: "Pop-up phishing uses:",
            options: [
              "Fake browser alerts warning of infections to get users to call or click",
              "Legitimate system notifications",
              "Secure website certificates",
              "Antivirus software updates",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        name: "Credential Stuffing (related risk)",
        prompts: [
          {
            question: "Credential stuffing is:",
            options: [
              "Using stolen credentials from one breach to try logging into other services",
              "A method to securely store passwords",
              "A type of multi-factor authentication",
              "A way to generate strong, unique passwords",
            ],
            correctAnswer: 0,
          },
        ],
      },
    ],
  },
];
