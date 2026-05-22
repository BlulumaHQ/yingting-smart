import news1 from "@/assets/yt/news1.webp";
import news2 from "@/assets/yt/news2.webp";
import news3 from "@/assets/yt/news3.webp";
import news4 from "@/assets/yt/news4.webp";
import indHomepod from "@/assets/yt/ind_01.png";
import indSwitch from "@/assets/yt/ind_02.png";
import indAc from "@/assets/yt/ind_03.png";

export type NewsItem = {
  slug: string;
  date: string;
  category: string;
  title: string;
  subtitle: string;
  image: string;
  body: { type: "h2" | "h3" | "p" | "ul"; text?: string; items?: string[] }[];
};

export const NEWS: NewsItem[] = [
  {
    slug: "homekit-power-outage",
    date: "MAR 12, 2024",
    category: "Smart Home Planning",
    title: "What happens to your smart home during a power outage?",
    subtitle: "智能家居如遇停電要怎麼辦？ 智能家居規劃｜新竹智能家居規劃",
    image: news1,
    body: [
      { type: "p", text: "Many people worry when planning a smart home: if the power goes out, will the devices break? If the internet drops, will nothing work? Will automations still run? Will I have to reset everything?" },
      { type: "p", text: "The answer depends on whether it is a power outage or a network outage — they behave very differently. This article explains both." },
      { type: "h2", text: "1. How HomeKit actually works" },
      { type: "p", text: "Apple HomeKit runs on a simple architecture: smart devices (lighting, AC controllers), a home hub (HomePod or Apple TV), and your Wi-Fi network. Devices talk to each other through the local network, with the hub handling automation and remote access." },
      { type: "h2", text: "2. What happens during a power outage" },
      { type: "p", text: "When the power is cut: Wi-Fi goes down, the home hub powers off, and all smart devices lose power. Smart functionality pauses — but the devices themselves are not damaged. When power is restored, devices reboot, the hub re-connects automatically, and settings are preserved. No reset is required." },
      { type: "h2", text: "3. What about a network outage" },
      { type: "p", text: "If you are at home and Wi-Fi drops, devices that support Bluetooth or local control may still respond; cloud-only devices will pause. When you are away, remote control and live status both stop, but everything recovers as soon as the network returns." },
      { type: "h2", text: "4. Will my automations disappear?" },
      { type: "p", text: "No. HomeKit configuration is stored on the system, not in the cloud. Automations, scenes and accessory settings remain intact through outages." },
      { type: "h2", text: "5. How to make HomeKit more resilient" },
      { type: "ul", items: [
        "Design a proper Mesh Wi-Fi layout for complete coverage.",
        "Place the home hub in a stable network area, away from obstructions.",
        "Check the electrical panel and add surge protection where needed.",
        "Pair the hub with a UPS for critical setups."
      ] },
      { type: "p", text: "Smart-home stability is 80% network and electrical planning. With proper system design, your home recovers gracefully from any outage — no resets, no broken devices." }
    ]
  },
  {
    slug: "homekit-hub-requirement",
    date: "JUN 28, 2024",
    category: "Apple HomeKit Install",
    title: "Do you really need a HomePod or Apple TV to use HomeKit?",
    subtitle: "使用 HomeKit 一定要有 HomePod 或 Apple TV 嗎？",
    image: news2,
    body: [
      { type: "p", text: "A common question when planning an Apple smart home: do I need a HomePod? Can I use HomeKit with just an iPhone? Is a home hub mandatory? The honest answer — not always, but there is a real difference." },
      { type: "h2", text: "1. What HomeKit gives you" },
      { type: "p", text: "HomeKit is Apple's smart-home platform. It brings every HomeKit-certified accessory into the Home app — control lighting from your phone, build scene-based automations, use Siri voice, and manage your home remotely." },
      { type: "h2", text: "2. Using HomeKit without a hub" },
      { type: "p", text: "With only an iPhone you can still control devices on your home Wi-Fi, switch lights and AC manually, and use basic Siri commands. But functionality is limited to your local network." },
      { type: "h2", text: "3. Why a home hub matters" },
      { type: "ul", items: [
        "Remote control — adjust lights or AC from anywhere in the world.",
        "Reliable automation — schedules and triggers run consistently.",
        "Always-on coordination — the hub keeps accessories in sync."
      ] },
      { type: "h2", text: "4. HomePod vs Apple TV" },
      { type: "p", text: "Both can serve as a home hub. HomePod adds room-filling sound and hands-free Siri; Apple TV adds 4K entertainment with hub duties on the side. For a true voice-driven smart home, HomePod is typically the better choice." },
      { type: "h2", text: "5. The professional difference" },
      { type: "p", text: "Buying devices isn't the same as building a system. Network topology, hub placement, device compatibility, and scene design all matter. That is where proper planning pays off." }
    ]
  },
  {
    slug: "what-is-apple-homekit",
    date: "SEP 03, 2024",
    category: "Apple Smart Home",
    title: "What is Apple HomeKit?",
    subtitle: "什麼是 Apple HomeKit？Apple 智能家居安裝",
    image: news3,
    body: [
      { type: "p", text: "Apple HomeKit is Apple's smart-home integration platform. The idea is simple: every HomeKit-certified accessory in your home is managed from a single, beautifully designed interface — the Home app on your Apple devices." },
      { type: "h2", text: "1. What HomeKit can control" },
      { type: "ul", items: [
        "Smart lighting — switches, dimmers, scenes.",
        "Climate — AC controllers, fans, smart plugs.",
        "Security — smart locks, cameras, sensors.",
        "Voice — HomePod as the always-listening hub."
      ] },
      { type: "h2", text: "2. How it is structured" },
      { type: "p", text: "Three layers: HomeKit-certified devices, a home hub such as HomePod or Apple TV, and your control devices — iPhone, iPad, Apple Watch. Wi-Fi or Bluetooth connects them, the hub orchestrates." },
      { type: "h2", text: "3. Why people choose HomeKit" },
      { type: "ul", items: [
        "Privacy-first — end-to-end encryption, no cloud middleman.",
        "Tight Apple integration — effortless for Apple households.",
        "Intuitive — the Home app keeps everything in one place.",
        "Powerful automation — arrive home, lights rise; sleep, the house quiets."
      ] },
      { type: "p", text: "HomeKit isn't a single device — it is the connective tissue of a calm, well-considered smart home." }
    ]
  },
  {
    slug: "smart-home-for-older-homes",
    date: "2026 · 03 · 02",
    category: "Home Renovation",
    title: "Can older homes be upgraded to a smart home?",
    subtitle: "舊屋可以裝智能家居嗎？ 智能家居改造",
    image: news4,
    body: [
      { type: "p", text: "A common myth: smart homes are only for new builds, or only possible when wiring is planned during a renovation. In reality, most smart-home upgrades today can be installed with minimal disruption — no walls broken, no rewiring." },
      { type: "h2", text: "1. Can older homes be upgraded?" },
      { type: "p", text: "Yes. As long as basic electrical wiring is in place, most accessories can simply replace existing hardware: swap the wall switch, add a smart AC controller, plug in smart outlets, integrate voice control." },
      { type: "h2", text: "2. Will it require breaking walls?" },
      { type: "ul", items: [
        "Replace the switch module directly — no construction.",
        "Add a smart AC controller — even legacy units upgrade to remote operation.",
        "Use wireless integration through HomeKit — no extra control cabling."
      ] },
      { type: "h2", text: "3. Things we evaluate first" },
      { type: "ul", items: [
        "Neutral wire (N-line) availability — some smart switches require it.",
        "Wi-Fi or Mesh signal stability across the home.",
        "Electrical panel condition and capacity."
      ] },
      { type: "h2", text: "4. Where to start" },
      { type: "p", text: "You don't have to do everything at once. Smart lighting gives the most immediate impact, AC control improves comfort and energy use, and a HomePod hub ties the system together with voice." },
      { type: "p", text: "Smart living is no longer a privilege of new construction. With professional planning, any home can become quietly, beautifully intelligent." }
    ]
  }
];

export type Product = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  features: string[];
  specs: { label: string; value: string }[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "apple-homepod",
    name: "Apple HomePod",
    tagline: "Smart speaker · Home hub",
    description:
      "HomePod is more than an exceptional speaker — it is the central hub of an Apple HomeKit smart home. Through Siri, control lights, climate, curtains and scenes with a single sentence. Automated routines such as Coming Home or Goodnight run on their own, and remote control keeps you in touch with the house from anywhere. The Apple ecosystem, distilled into a single quiet presence in the room.",
    image: indHomepod,
    features: [
      "Hands-free Siri voice control",
      "Runs HomeKit automations as the home hub",
      "Room-filling, computational audio",
      "Remote access from anywhere",
      "End-to-end encrypted privacy"
    ],
    specs: [
      { label: "Role", value: "Home Hub · Voice Assistant" },
      { label: "Protocol", value: "HomeKit · AirPlay 2 · Matter" },
      { label: "Voice", value: "Siri, always-on" },
      { label: "Ecosystem", value: "Apple iPhone · iPad · Apple Watch" }
    ]
  },
  {
    slug: "light-switch",
    name: "Light Switch",
    tagline: "Smart lighting control",
    description:
      "Smart lighting switches replace traditional wall switches, giving full control of every lamp from your phone or Siri — brightness, scene presets, scheduled on/off. Curate cinematic moods for the living room, soften the home for sleep, or have everything quietly turn off when you leave. Through HomeKit, light becomes a material you compose with.",
    image: indSwitch,
    features: [
      "Replaces existing wall switches",
      "App and Siri voice control",
      "Brightness dimming and scene presets",
      "Schedules and away-mode automation",
      "Full integration with HomeKit scenes"
    ],
    specs: [
      { label: "Installation", value: "Direct switch replacement" },
      { label: "Control", value: "Home App · Siri · Manual" },
      { label: "Features", value: "Dimming · Scenes · Scheduling" },
      { label: "Protocol", value: "HomeKit certified" }
    ]
  },
  {
    slug: "ac-controller",
    name: "AC Controller",
    tagline: "Smart climate control",
    description:
      "The smart AC controller upgrades any conventional air conditioner into a connected device. Using infrared signals modelled from your remote, you can set power, temperature and fan speed from your phone or Siri. Pre-cool the home before you arrive, or let automation respond to room temperature on its own — comfort, quietly aligned to your rhythm.",
    image: indAc,
    features: [
      "Works with existing AC units via IR",
      "Remote temperature & mode control",
      "Siri voice automation",
      "Schedule and trigger-based scenes",
      "Improves energy efficiency"
    ],
    specs: [
      { label: "Compatibility", value: "Most split-type AC units" },
      { label: "Control", value: "Home App · Siri · Scheduling" },
      { label: "Signal", value: "Infrared (IR) emulation" },
      { label: "Protocol", value: "HomeKit certified" }
    ]
  }
];

export const CONTACT = {
  phone: "03-5335135",
  phoneIntl: "+886-3-5335135",
  line: "@593ssbfh",
  lineUrl: "https://line.me/R/ti/p/%40593ssbfh",
  fb: "https://www.facebook.com/YouNeedSmartLife/",
  ig: "https://www.instagram.com/yt_smartlife/",
  address: "No. 500, Sec. 5, Zhonghua Rd., Xiangshan Dist., Hsinchu City",
  addressZh: "新竹市香山區中華路五段500號",
  hours: "Mon — Sun · 10:00 — 20:00",
  taxId: "83061544"
};
