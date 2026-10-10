const META={version:'1.0.64',checked:'6 October 2026',publisher:'Published by William Baptist | Tidy Desk Digital'};
const SOURCES=[
  [
    "S1",
    "UK National Cyber Security Centre: advice for staff",
    "https://www.ncsc.gov.uk/information/top-tips-for-staff",
    "Staff habits support, but do not replace, security protections on computers and accounts."
  ],
  [
    "S2",
    "UK National Cyber Security Centre: checking deceptive messages",
    "https://www.ncsc.gov.uk/guidance/phishing",
    "Use a separate trusted way to check requests, several security protections and supportive reporting."
  ],
  [
    "S3",
    "UK National Cyber Security Centre: protect important accounts",
    "https://www.ncsc.gov.uk/collection/small-organisations-guide-to-cyber-security/secure-your-important-online-accounts",
    "Use different strong passwords, approved tools that store passwords and extra sign-in checks. Sign-in methods that use your device or a physical key can resist fake login pages."
  ],
  [
    "S4",
    "UK National Cyber Security Centre: extra sign-in checks",
    "https://www.ncsc.gov.uk/collection/mfa-for-your-corporate-online-services/why-mfa-matters",
    "Benefits and limits of a second check when signing in."
  ],
  [
    "S5",
    "UK National Cyber Security Centre: advice for people using work devices",
    "https://www.ncsc.gov.uk/guidance/end-user-devices-advice-end-users",
    "Work-managed devices, travel, physical security and reporting loss."
  ],
  [
    "S6",
    "UK National Cyber Security Centre: handling security problems",
    "https://www.ncsc.gov.uk/collection/small-business-guidance--response-and-recovery",
    "Prepare for problems, stop further harm and restore safe work."
  ],
  [
    "S7",
    "UK data protection regulator: personal information problems",
    "https://ico.org.uk/for-organisations/report-a-breach/personal-data-breach/personal-data-breaches-a-guide/",
    "When personal information is lost, wrongly shared, changed, damaged, unavailable or accessed without permission; likely harm, records and who must be told."
  ],
  [
    "S8",
    "UK data protection regulator: first steps after a personal information problem",
    "https://ico.org.uk/for-organisations/advice-for-small-organisations/personal-data-breaches/72-hours-how-to-respond-to-a-personal-data-breach/",
    "Stop further harm, find out what happened and assess the likely harm to people."
  ],
  [
    "S9",
    "UK National Cyber Security Centre: Cyber Essentials approval scheme",
    "https://www.ncsc.gov.uk/cyberessentials/overview",
    "A separate scheme checking security protections on computers and accounts. Staff training is not this approval."
  ],
  [
    "S10",
    "UK data protection regulator: Data (Use and Access) Act 2025",
    "https://ico.org.uk/about-the-ico/what-we-do/legislation-we-cover/data-use-and-access-act-2025/",
    "Changes to UK data protection law."
  ],
  [
    "S12",
    "UK National Cyber Security Centre: square scanning codes",
    "https://www.ncsc.gov.uk/blog-post/qr-codes-whats-real-risk",
    "A code scanned with a phone camera can open a deceptive website."
  ],
  [
    "S13",
    "US Federal Trade Commission: public wireless networks",
    "https://consumer.ftc.gov/articles/are-public-wi-fi-networks-safe-what-you-need-know",
    "A protected connection does not prove a website or request is trustworthy. This is practical advice, not UK law."
  ],
  [
    "S15",
    "UK National Cyber Security Centre: protected work connections",
    "https://www.ncsc.gov.uk/collection/device-security-guidance/infrastructure/virtual-private-networks",
    "An approved private-network connection (VPN) connects to work systems. Workplace design and policy decide when one is needed."
  ],
  [
    "S14",
    "Swiss National Cyber Security Centre: imitation voices and payment fraud",
    "https://www.ncsc.admin.ch/ncsc/en/home/aktuell/im-fokus/2024/wochenrueckblick_14.html",
    "Computer-made voices or videos can imitate a manager. Use established payment checks. This is not UK law."
  ],
  [
    "S11",
    "UK Parliament: proposed Cyber Security and Resilience law",
    "https://bills.parliament.uk/bills/4035",
    "A proposal being considered by Parliament in the checked record, not an existing universal duty for staff."
  ]
];
const MODULES=[
  {
    "id": "remote",
    "title": "Your workspace is part of security",
    "minutes": 5,
    "sources": [
      "S5",
      "S2",
      "S13",
      "S15"
    ],
    "goal": "Choose an approved connection and a suitable place for work.",
    "sections": [
      [
        "Start with the approved setup",
        "Use your approved work device and connection. A public network can copy a trusted network name. Use the protected connection your workplace requires, but remember that it does not make every website or download safe.",
        [
          "Do not ignore warnings that the site's identity or connection cannot be trusted.",
          "Do not install a file that changes device settings because a page asking you to join the network asks you to.",
          "Ask your work computer support team for an approved alternative if the normal connection is unavailable."
        ]
      ],
      [
        "Protect what people can see and hear",
        "A protected connection does not stop someone reading your screen or hearing a customer call. Choose a place private enough for the information. Lock the screen when you step away.",
        [
          "Keep work devices with you or locked away. Do not leave them unattended in public.",
          "Do not let someone else use a work device while you are signed in.",
          "Check your workplace rules before working in another country."
        ]
      ],
      [
        "A deadline is not an exception",
        "If work cannot be done safely, explain what is blocked and ask for an approved route. Personal email, unapproved devices and disabled protection can turn a small delay into a security problem.",
        [
          "Know an urgent and out-of-hours reporting route.",
          "Use approved storage so work is not held only on a laptop.",
          "Prioritise personal safety if equipment is stolen."
        ]
      ]
    ],
    "takeaway": "Approved device. Approved connection. Appropriate surroundings."
  },
  {
    "id": "phishing",
    "title": "Read the request, not the polish",
    "minutes": 6,
    "sources": [
      "S1",
      "S2",
      "S12",
      "S13"
    ],
    "goal": "Check a message without using the route supplied by the message.",
    "sections": [
      [
        "A convincing message can still be unsafe",
        "Criminals use messages and calls to trick people into sharing information, approving access, installing software or sending money. These requests can also arrive through square codes scanned by a phone camera. Good spelling, familiar names and expected timing do not prove the request is genuine. Someone else may have gained access to a real account.",
        [
          "Pause when a request is urgent, secret or changes the normal process.",
          "A scanned code can open an unsafe website. The code itself is not proof of trust.",
          "Ask for help even if you are unsure."
        ]
      ],
      [
        "Use a route you already trust",
        "Open the service using your usual bookmark or app. Contact the person using a number in your workplace contact list or an established conversation, not details supplied by the suspicious request. A padlock means the connection is protected while travelling between your device and the service; it does not prove the business or request is honest.",
        [
          "Do not open an attachment just to investigate it.",
          "For payment changes, follow the checking and approval process.",
          "Use the approved tool for reporting suspicious messages; avoid spreading attachments."
        ]
      ],
      [
        "If you already clicked",
        "Stop using the suspicious page and report as soon as you can. Say whether you opened it, entered a password, approved an extra sign-in check, downloaded a file or ran it. Opening a page does not always mean someone gained access, but the team needs the facts.",
        [
          "Never put passwords or sign-in codes in a report.",
          "Use a known backup contact if someone else may have access to your normal account.",
          "Training is only one protection. Nobody can spot every attack."
        ]
      ]
    ],
    "takeaway": "Unexpected action? Pause, check independently, report concerns."
  },
  {
    "id": "accounts",
    "title": "Protect how you sign in",
    "minutes": 5,
    "sources": [
      "S3",
      "S4",
      "S5"
    ],
    "goal": "Reject unexpected access requests and keep sign-in secrets private.",
    "sections": [
      [
        "One account, one password",
        "Use a different strong password for each account. A work-approved password manager, a tool that stores and creates passwords, can help. Protect that tool with a strong password and an extra sign-in check if available. A long phrase made from unrelated words can help with passwords you must remember; follow your workplace rules.",
        [
          "Do not base passwords on public details about you.",
          "Do not install a personal password tool for work without approval.",
          "Never share a password with a manager, colleague or caller."
        ]
      ],
      [
        "An extra check when signing in",
        "An extra sign-in check adds protection beyond a password. Criminals can still trick people into sharing some codes or approving a check. Approve only a sign-in you started, for the intended service. Where your workplace supports and approves them, sign-in methods that use your device or a physical key can protect against fake login pages.",
        [
          "Reject and report unexpected approval sign-in requests.",
          "Do not read out a one-time code to a caller.",
          "Repeated sign-in requests are not something to clear by approving one."
        ]
      ],
      [
        "Use the approved way to regain access",
        "A lost phone or locked account is a reason to get help, not to share someone else's account. Keep backup sign-in codes in the secure place your workplace approves. If you entered a password on a suspicious page, report it and change it through the genuine service or your work computer support team.",
        [
          "Your support team may also need to sign the account out on devices or apps where it is already signed in.",
          "Do not paste backup sign-in codes into chat or a shared document.",
          "Ask for an approved alternative if you cannot use the normal method."
        ]
      ]
    ],
    "takeaway": "Unique passwords. Approved tools. Only approve sign-ins you started."
  },
  {
    "id": "social",
    "title": "Pressure does not replace permission",
    "minutes": 6,
    "sources": [
      "S2",
      "S5",
      "S14"
    ],
    "goal": "Handle impersonation and payment requests without bypassing checks.",
    "sections": [
      [
        "People and authority can be imitated",
        "An attacker may claim to be a director, supplier or your work computer support team technician. Names, job roles and project details can be public or stolen. Voice and video can be manipulated too. A convincing person is not the same as an approved request.",
        [
          "Urgency and secrecy are reasons to pause.",
          "Use a known independent route to check.",
          "A senior person's apparent request does not remove controls."
        ]
      ],
      [
        "Protect the process",
        "Check new bank details through the established supplier process and required approvals. Do not install software that lets someone control your device from elsewhere or disclose secrets because a caller claims to be helping. A smaller test payment is still a payment, not a safe substitute for checks.",
        [
          "Do not use the new phone number supplied in the payment email.",
          "Do not buy gift cards to satisfy an urgent request you have not checked.",
          "Ask the person with permission to approve an exception."
        ]
      ],
      [
        "A safe refusal can be simple",
        "Say: \"I need to check this through our normal process.\" For unfamiliar visitors, use reception or the approved contact. Do not lend badges or permit access simply because a visitor carries equipment.",
        [
          "Be polite; do not put yourself at physical risk.",
          "If money has already moved, report urgently so approved staff can contact the bank.",
          "Do not send another payment to try to reverse the first."
        ]
      ]
    ],
    "takeaway": "Check the change through a known contact. Keep required approvals. Ask for help under pressure."
  },
  {
    "id": "data",
    "title": "New tool, new destination",
    "minutes": 6,
    "sources": [
      "S5",
      "S7",
      "S8"
    ],
    "goal": "Check recipients, contents and access before sharing.",
    "sections": [
      [
        "Check purpose, person and permission",
        "Before sharing, ask what is needed, who is approved and which route is approved. Check the full recipient address, attachment contents and link permissions. A correct email can still contain the wrong file.",
        [
          "Share the minimum information needed.",
          "Do not make a restricted link public just to fix access.",
          "Address suggestions and display names can hide mistakes."
        ]
      ],
      [
        "Tools also receive your information",
        "Personal email, automatic writing tools, translation sites and file conversion websites receive the information you put into them. A familiar or free tool is not automatically approved for work. Removing names may still leave enough details to identify someone.",
        [
          "Keep work information out of unapproved tools.",
          "Never put passwords or sign-in codes into a writing tool or document.",
          "Follow workplace rules for how long information is kept, backup copies and how to remove information safely."
        ]
      ],
      [
        "A security problem is more than theft",
        "Personal information can be wrongly shared, lost, changed, damaged or made unavailable. These problems can affect people even if nothing was stolen. Report a suspected problem as soon as you can.",
        [
          "Asking to recall an email does not prove it was removed from the recipient's inbox.",
          "A promise to delete a file is useful information, not proof that all risk is gone.",
          "Let the responsible team assess the likely harm. Do not forward the file to a wider group."
        ]
      ]
    ],
    "takeaway": "Check the recipient, contents and access before you send."
  },
  {
    "id": "devices",
    "title": "Keep protections in place",
    "minutes": 5,
    "sources": [
      "S1",
      "S5",
      "S9"
    ],
    "goal": "Use approved software and report loss or unusual behaviour.",
    "sections": [
      [
        "Managed settings have a purpose",
        "Do not disable protection to finish a task. Use approved installation routes. Allow required security updates through the managed process and report repeated failures. Search results and pop-ups are not approval from your work computer support team.",
        [
          "Do not use permission to change important device settings for routine work unless approved.",
          "Ask for an approved solution when a tool is blocked.",
          "Different protections protect against different risks."
        ]
      ],
      [
        "Protect the physical device",
        "Lock your screen when stepping away. Keep devices, memory sticks and other equipment secure. Do not connect found memory sticks or unknown equipment to find the owner. Use your workplace process for found or lost equipment.",
        [
          "Use approved chargers and cables.",
          "Do not leave equipment visible in a vehicle.",
          "Do not lend a device while you are signed in."
        ]
      ],
      [
        "Report the problem, do not experiment",
        "Report a lost device immediately, even if you hope to find it. A message demanding money to unlock files, or files changing unexpectedly, needs urgent help. A slow device alone does not prove harmful software is present, but repeated problems need support.",
        [
          "Do not install repair tools, pay a demand or use an outside repair shop yourself.",
          "Follow your workplace instructions about stopping work and disconnecting the device from networks.",
          "Do not reset or erase it without approval. That can remove evidence of what happened."
        ]
      ]
    ],
    "takeaway": "Keep protections on. Use approved tools. Report loss or security concerns as soon as you can."
  },
  {
    "id": "incidents",
    "title": "Report early, report clearly",
    "minutes": 7,
    "sources": [
      "S2",
      "S5",
      "S6",
      "S7",
      "S8"
    ],
    "goal": "Make a useful report without investigating or spreading the security problem.",
    "sections": [
      [
        "You do not need proof",
        "Report suspicious sign-ins, lost devices, wrong recipients and suspected harmful software as soon as you can. Reporting a problem caught before harm was done helps too. Give the facts and say what you do not know. Staff should be able to ask for help without blame.",
        [
          "Use the urgent contact when immediate help is needed.",
          "Use a known backup contact if someone else may have access to your normal account.",
          "Do not keep opening a suspicious file to prove there is a problem."
        ]
      ],
      [
        "Stop further harm without destroying evidence",
        "Stop the risky activity and follow your workplace instructions. If harmful software is suspected, follow the agreed steps for disconnecting the device. Do not reset it, erase evidence, decide to pay a demand or contact an attacker yourself. Decisions about demands for money need senior approval and specialist advice.",
        [
          "Record the time, device or account and what you did.",
          "Keep the original message through the approved reporting tool.",
          "Leave passwords, codes and unnecessary personal details out of the report."
        ]
      ],
      [
        "A short report from the facts is enough to start",
        "Say what happened, when, which device or service was involved, and what you did. \"I entered my password at 14:10\" is more useful than \"I was hacked.\" The responsible team investigates and decides who else must be told.",
        [
          "Say whether you approved an extra sign-in check, downloaded or ran a file, or sent information.",
          "Do not send suspicious material to everyone.",
          "If money has already been sent to the wrong place, report it urgently."
        ]
      ]
    ],
    "takeaway": "Stop. Trusted reporting route. Facts, not secrets."
  },
  {
    "id": "law",
    "title": "Know your part, know the limits",
    "minutes": 6,
    "sources": [
      "S7",
      "S8",
      "S9",
      "S10",
      "S11"
    ],
    "goal": "Report as soon as you can and leave legal decisions to the responsible team. Know what a course record does and does not prove.",
    "sections": [
      [
        "The organisation assesses the problem",
        "A personal-data breach is a security problem involving loss, destruction, change, damage, improper sharing or access to information about people who can be identified. It can also include that information being unavailable. The organisation deciding why and how the information is used assesses reporting to the UK data protection regulator and keeps the breach record. It must tell the regulator unless a risk to people's rights and freedoms is unlikely. This assessment includes possible harm to privacy, fraud, discrimination and other harm to the people affected. A required report must be made without unnecessary delay and, where possible, within 72 hours of that deciding organisation becoming aware. If the risk to those people is high, that organisation must also tell them without unnecessary delay.",
        [
          "Staff should report internally as soon as they can. The 72 hours is not permission to wait.",
          "An organisation handling information for that deciding organisation, following its instructions, must tell it without unnecessary delay once it becomes aware of a personal-data breach. It must do this regardless of the risk threshold for reporting to the regulator. It must not wait 72 hours. The deciding organisation then assesses its own reporting duty.",
          "The responsible team decides whether the regulator or affected people must be told.",
          "The organisation deciding why and how the information is used records every personal-data breach and the reasons for its decisions, even when it does not need to tell the regulator."
        ]
      ],
      [
        "Current rules, not a forecast",
        "Law and guidance were checked on 6 October 2026. The Data (Use and Access) Act 2025 changes data protection law, but secure handling and quick reporting are still needed. A separate rule for public phone and internet service providers changed their reporting deadline from 24 to 72 hours. This is not a deadline for ordinary staff to wait before reporting.",
        [
          "Your sector rules and contracts may add duties. This course gives general information, not legal advice.",
          "The proposed Cyber Security and Resilience law was still being considered by Parliament on 6 October 2026. It was not yet law. Its proposed main duties concern essential services and certain technology service providers, not ordinary small-business staff.",
          "No unconfirmed rule for 2027 is presented as law. Check official guidance again before later use; a review after 26 October 2026 is recommended."
        ]
      ],
      [
        "Learning is not formal approval",
        "Cyber Essentials is a separate scheme that checks an organisation's security protections on computers and accounts. Passing this course does not give the organisation that approval or prove it meets every legal requirement. The completion record is made in your browser; nobody independently checks who completed it.",
        [
          "Managers still need suitable security protections and a plan for handling problems.",
          "Know your workplace reporting contacts, sharing rules and approved tools.",
          "Ask for help if workplace instructions are missing or disagree."
        ]
      ]
    ],
    "takeaway": "Report as soon as you can. Let the responsible team assess. A course record is not formal approval."
  }
];
