// ✅ src/data/phishingQuizData.js

export const phishingQuizTopics = [
  {
    id: "topic_1",
    title: "What is Phishing?",
    questions: [
      {
        question: "What best describes phishing?",
        options: [
          "A cyber-attack that tricks users into revealing personal info",
          "A secure login process",
          "A password management tool",
          "A type of antivirus software",
        ],
        correctAnswer: 0,
      },
      {
        question: "Phishing is primarily used to:",
        options: [
          "Steal credentials or sensitive data",
          "Enhance system security",
          "Encrypt user files safely",
          "Monitor network performance",
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: "topic_2",
    title: "How Phishing Works (Anatomy of an Attack)",
    questions: [
      {
        question: "Which step usually starts a phishing attack?",
        options: [
          "Sending a deceptive message or link",
          "Installing antivirus software",
          "Network configuration",
          "User password reset",
        ],
        correctAnswer: 0,
      },
      {
        question: "The main element of a phishing attack is:",
        options: ["Deception", "Encryption", "Automation", "Optimization"],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: "topic_3",
    title: "Recognizing Red Flags",
    questions: [
      {
        question: "Which is a clear sign of phishing?",
        options: [
          "Misspelled URLs or strange domain names",
          "Official email from IT department",
          "Secure website with HTTPS",
          "Company newsletter",
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: "topic_4",
    title: "Email Header & Link Inspection",
    questions: [
      {
        question: "Where can you check if an email is spoofed?",
        options: [
          "In the email header details",
          "By reading the subject only",
          "By clicking the link directly",
          "By opening attachments",
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: "topic_5",
    title: "Attachments & Safe Handling",
    questions: [
      {
        question: "Suspicious attachments often contain:",
        options: [
          "Malware or macros",
          "Meeting invitations",
          "Company logos",
          "Plain text",
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: "topic_6",
    title: "Social Engineering & Pretexting",
    questions: [
      {
        question: "Social engineering attacks mainly rely on:",
        options: [
          "Human trust and manipulation",
          "Firewall bypassing",
          "Password cracking tools",
          "Strong encryption",
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: "topic_7",
    title: "Credential Theft & MFA",
    questions: [
      {
        question: "Multi-Factor Authentication (MFA) helps prevent:",
        options: [
          "Unauthorized access even if password is stolen",
          "Slow internet connection",
          "Network latency",
          "Antivirus conflicts",
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: "topic_8",
    title: "Reporting Process & Who to Contact",
    questions: [
      {
        question: "If you suspect a phishing email, what should you do first?",
        options: [
          "Report it to your security or IT team",
          "Reply to the sender for clarification",
          "Delete it immediately",
          "Forward it to friends",
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: "topic_9",
    title: "What to Do If You Clicked / Been Compromised",
    questions: [
      {
        question: "If you accidentally click a phishing link, you should:",
        options: [
          "Change your passwords and report immediately",
          "Ignore it",
          "Restart your computer only",
          "Clear your browser cache",
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: "topic_10",
    title: "Role-Specific Scenarios",
    questions: [
      {
        question: "Executives are often targeted by:",
        options: [
          "Whaling attacks",
          "SQL injections",
          "Brute-force attacks",
          "Adware campaigns",
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: "topic_11",
    title: "Safe Social Media & Public Info Hygiene",
    questions: [
      {
        question: "Oversharing on social media can help attackers with:",
        options: [
          "Spear-phishing personalization",
          "MFA setup",
          "Firewall updates",
          "Cloud storage backup",
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: "topic_12",
    title: "Legal / Policy / Consequences",
    questions: [
      {
        question: "Phishing within a company can lead to:",
        options: [
          "Disciplinary or legal consequences",
          "Salary bonus",
          "Promotion",
          "Software upgrade",
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: "topic_13",
    title: "Ongoing Threat Trends & Real Case Studies",
    questions: [
      {
        question: "Phishing trends evolve due to:",
        options: [
          "New technologies and attacker creativity",
          "Stable internet systems",
          "Increased employee awareness",
          "Hardware failures",
        ],
        correctAnswer: 0,
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
        questions: [
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
        questions: [
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
        questions: [
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
        questions: [
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
        questions: [
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
        questions: [
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
        questions: [
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
        questions: [
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
        questions: [
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
        questions: [
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
        questions: [
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
        questions: [
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
        questions: [
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
        questions: [
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
        questions: [
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
        questions: [
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
        questions: [
          {
            question: "Vishing attacks are carried out via:",
            options: [
              "Phone calls",
              "Emails",
              "QR codes",
              "Browser pop-ups",
            ],
            correctAnswer: 0,
          },
        ],
      },
      {
        name: "Smishing (SMS Phishing)",
        questions: [
          {
            question: "Smishing uses which medium?",
            options: ["SMS/Text messages", "Websites", "Emails", "Social apps"],
            correctAnswer: 0,
          },
        ],
      },
      {
        name: "Callback / Missed-call Scams",
        questions: [
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
        questions: [
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
        questions: [
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
        questions: [
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
        questions: [
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
        questions: [
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
        questions: [
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
        questions: [
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
        questions: [
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
        questions: [
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
        questions: [
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
        questions: [
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
        questions: [
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
        questions: [
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
        questions: [
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
        questions: [
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
        questions: [
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
        questions: [
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
