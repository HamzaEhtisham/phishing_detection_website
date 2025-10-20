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
    title: "Email / Message-Based Attacks",
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
        name: "Spear-Phishing",
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
        name: "Whaling",
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
    ],
  },
  {
    id: "web_url",
    title: "Web / URL / Domain-Based Attacks",
    subtopics: [
      {
        name: "Typosquatting",
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
        name: "Vishing",
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
        name: "Smishing",
        questions: [
          {
            question: "Smishing uses which medium?",
            options: ["SMS/Text messages", "Websites", "Emails", "Social apps"],
            correctAnswer: 0,
          },
        ],
      },
    ],
  },
  {
    id: "social_platforms",
    title: "Social Platforms & Apps",
    subtopics: [
      {
        name: "Fake Profiles",
        questions: [
          {
            question: "Fake social media profiles are used to:",
            options: [
              "Trick users into revealing information or clicking links",
              "Manage real company pages",
              "Block phishing sites",
              "Test social media features",
            ],
            correctAnswer: 0,
          },
        ],
      },
    ],
  },
  {
    id: "network_infra",
    title: "Network & Infrastructure Attacks",
    subtopics: [
      {
        name: "Evil Twin Wi-Fi",
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
    ],
  },
  {
    id: "advanced_media",
    title: "Advanced / Multimedia / Social Engineering",
    subtopics: [
      {
        name: "Deepfake Impersonation",
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
    ],
  },
  {
    id: "physical_offline",
    title: "Physical / Offline Vectors",
    subtopics: [
      {
        name: "USB Drop",
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
    ],
  },
  {
    id: "other_variants",
    title: "Other Noteworthy Variants",
    subtopics: [
      {
        name: "Malicious Chatbots",
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
    ],
  },
];
