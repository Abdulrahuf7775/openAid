export type MilestoneStatus = "Pending" | "Funded" | "Completed";
export type CampaignStatus = "Active" | "Funded" | "Completed";

export type Milestone = {
  title: string;
  amount: number;
  status: MilestoneStatus;
  deadline: string;
  description: string;
};

export type Expense = {
  description: string;
  amount: number;
  ipfsHash: string;
  date: string;
};

export type Donor = {
  name: string;
  amount: number;
  txHash: string;
};

export type Campaign = {
  id: string;
  title: string;
  organizer: string;
  category: string;
  location: string;
  status: CampaignStatus;
  goal: number;
  raised: number;
  daysLeft: number;
  transparencyScore: number;
  imageTone: string;
  summary: string;
  story: string;
  contractAddress: string;
  milestones: Milestone[];
  expenses: Expense[];
  donors: Donor[];
  updates: { title: string; date: string; body: string }[];
};

export const campaigns: Campaign[] = [
  {
    id: "solar-clinic-kaduna",
    title: "Solar Power for Kaduna Community Clinic",
    organizer: "HealthBridge Kaduna",
    category: "Health",
    location: "Kaduna, Nigeria",
    status: "Active",
    goal: 52000,
    raised: 38150,
    daysLeft: 18,
    transparencyScore: 96,
    imageTone: "from-forest via-emerald-700 to-gold",
    summary:
      "Install solar panels, battery backup, and cold-chain equipment for maternal care and vaccine storage.",
    story:
      "The clinic serves eight surrounding settlements but loses power daily. This campaign funds solar installation in milestones, with every invoice and receipt stored on IPFS and every transfer visible on-chain.",
    contractAddress: "0x8F12...A91c",
    milestones: [
      {
        title: "Site survey and equipment deposit",
        amount: 12000,
        status: "Completed",
        deadline: "2026-06-28",
        description: "Engineering audit, vendor deposit, and installation plan."
      },
      {
        title: "Panel and battery installation",
        amount: 28000,
        status: "Funded",
        deadline: "2026-07-21",
        description: "Install 24 panels, inverters, and lithium backup."
      },
      {
        title: "Cold-chain commissioning",
        amount: 12000,
        status: "Pending",
        deadline: "2026-08-08",
        description: "Final testing, nurse training, and vaccine fridge rollout."
      }
    ],
    expenses: [
      {
        description: "Electrical site inspection",
        amount: 1400,
        ipfsHash: "bafy...clinic-survey",
        date: "2026-05-18"
      },
      {
        description: "Vendor mobilization invoice",
        amount: 8600,
        ipfsHash: "bafy...solar-deposit",
        date: "2026-05-26"
      }
    ],
    donors: [
      { name: "Public donor", amount: 5000, txHash: "0xab2...901" },
      { name: "Diaspora Health Fund", amount: 18000, txHash: "0xf31...7aa" },
      { name: "Anonymous", amount: 250, txHash: "0xc90...11d" }
    ],
    updates: [
      {
        title: "Vendor selected",
        date: "2026-05-27",
        body: "Three quotes were reviewed and the selected vendor has uploaded a signed installation schedule."
      }
    ]
  },
  {
    id: "girls-stem-kigali",
    title: "STEM Labs for Girls in Kigali",
    organizer: "Future Makers Rwanda",
    category: "Education",
    location: "Kigali, Rwanda",
    status: "Active",
    goal: 34000,
    raised: 21780,
    daysLeft: 24,
    transparencyScore: 91,
    imageTone: "from-trust via-sky-600 to-gold",
    summary:
      "Equip three after-school labs with laptops, robotics kits, mentors, and public spending records.",
    story:
      "Each participating school receives funds only after equipment delivery is verified. Donors can follow lab setup, procurement receipts, and mentorship attendance reports.",
    contractAddress: "0x4B76...0Fd3",
    milestones: [
      {
        title: "Procure laptops",
        amount: 16000,
        status: "Funded",
        deadline: "2026-07-02",
        description: "Purchase rugged laptops and accessories for three labs."
      },
      {
        title: "Robotics kits and connectivity",
        amount: 11000,
        status: "Pending",
        deadline: "2026-07-24",
        description: "Arduino kits, sensors, routers, and one year of data."
      },
      {
        title: "Mentor stipends",
        amount: 7000,
        status: "Pending",
        deadline: "2026-08-18",
        description: "Support local mentors through the first cohort."
      }
    ],
    expenses: [],
    donors: [
      { name: "Open Builders DAO", amount: 12000, txHash: "0x91e...102" },
      { name: "Anonymous", amount: 1000, txHash: "0xd32...fe8" }
    ],
    updates: [
      {
        title: "School onboarding complete",
        date: "2026-05-30",
        body: "All three schools signed the participation agreement and nominated lab coordinators."
      }
    ]
  },
  {
    id: "flood-relief-accra",
    title: "Transparent Flood Relief Kits for Accra",
    organizer: "Civic Relief Ghana",
    category: "Disaster Relief",
    location: "Accra, Ghana",
    status: "Funded",
    goal: 45000,
    raised: 45000,
    daysLeft: 0,
    transparencyScore: 99,
    imageTone: "from-terracotta via-orange-600 to-sand",
    summary:
      "Emergency kits, medical supplies, and public delivery verification for flood-affected families.",
    story:
      "Funds are released by kit batches. Community monitors upload distribution photos and signed delivery sheets to IPFS before the next milestone unlocks.",
    contractAddress: "0xC1d8...88eB",
    milestones: [
      {
        title: "First 500 kits",
        amount: 17000,
        status: "Completed",
        deadline: "2026-06-12",
        description: "Food, water filters, and emergency bedding."
      },
      {
        title: "Medical supply run",
        amount: 13000,
        status: "Completed",
        deadline: "2026-06-18",
        description: "Basic medicines and clinic restock."
      },
      {
        title: "Second 500 kits",
        amount: 15000,
        status: "Funded",
        deadline: "2026-06-25",
        description: "Final procurement and delivery verification."
      }
    ],
    expenses: [
      {
        description: "Emergency kit supplier invoice",
        amount: 16840,
        ipfsHash: "bafy...kit-invoice",
        date: "2026-05-29"
      }
    ],
    donors: [
      { name: "Mutual Aid Circle", amount: 25000, txHash: "0x4ac...ed0" },
      { name: "Public donor", amount: 7000, txHash: "0x6de...411" }
    ],
    updates: [
      {
        title: "First delivery verified",
        date: "2026-06-01",
        body: "Local monitors uploaded distribution logs for the first kit batch."
      }
    ]
  }
];

export const stats = [
  { label: "Funds tracked", value: "$148K" },
  { label: "Receipt proofs", value: "72" },
  { label: "Countries", value: "8" },
  { label: "On-chain events", value: "1,284" }
];

export function getCampaign(id: string) {
  return campaigns.find((campaign) => campaign.id === id);
}

export function progressFor(campaign: Campaign) {
  return Math.min(100, Math.round((campaign.raised / campaign.goal) * 100));
}

export function currency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(amount);
}
