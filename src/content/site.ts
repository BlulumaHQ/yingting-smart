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
  categoryZh?: string;
  title: string;
  titleZh?: string;
  subtitle: string;
  subtitleZh?: string;
  image: string;
  body: { type: "h2" | "h3" | "p" | "ul"; text?: string; textZh?: string; items?: string[]; itemsZh?: string[] }[];
};

export const NEWS: NewsItem[] = [
  {
    slug: "homekit-power-outage",
    date: "MAR 12, 2024",
    category: "Smart Home Planning",
    categoryZh: "智慧家庭規劃",
    title: "What happens to your smart home during a power outage?",
    titleZh: "智慧家庭遇到停電時會發生什麼事？",
    subtitle: "智能家居如遇停電要怎麼辦？ 智能家居規劃｜新竹智能家居規劃",
    subtitleZh: "停電、斷網、自動化與設備恢復的完整說明。",
    image: news1,
    body: [
      { type: "p", text: "Many people worry when planning a smart home: if the power goes out, will the devices break? If the internet drops, will nothing work? Will automations still run? Will I have to reset everything?", textZh: "很多人在規劃智慧家庭時都會擔心：如果停電，設備會不會壞掉？如果網路斷線，是不是全部都不能用？自動化還會執行嗎？是不是要重新設定？" },
      { type: "p", text: "The answer depends on whether it is a power outage or a network outage — they behave very differently. This article explains both.", textZh: "答案取決於遇到的是停電，還是網路中斷；兩者的狀況完全不同。這篇文章會分別說明。" },
      { type: "h2", text: "1. How HomeKit actually works", textZh: "1. HomeKit 實際上如何運作" },
      { type: "p", text: "Apple HomeKit runs on a simple architecture: smart devices (lighting, AC controllers), a home hub (HomePod or Apple TV), and your Wi-Fi network. Devices talk to each other through the local network, with the hub handling automation and remote access.", textZh: "Apple HomeKit 的架構很清楚：智慧設備（燈光、冷氣控制器等）、家庭中樞（HomePod 或 Apple TV），以及家中的 Wi‑Fi 網路。設備透過區域網路彼此溝通，由家庭中樞處理自動化與遠端存取。" },
      { type: "h2", text: "2. What happens during a power outage", textZh: "2. 停電時會發生什麼事" },
      { type: "p", text: "When the power is cut: Wi-Fi goes down, the home hub powers off, and all smart devices lose power. Smart functionality pauses — but the devices themselves are not damaged. When power is restored, devices reboot, the hub re-connects automatically, and settings are preserved. No reset is required.", textZh: "停電時，Wi‑Fi 會停止、家庭中樞會關機，所有需要供電的智慧設備也會失去電力。智慧功能會暫停，但設備本身不會因此損壞。復電後，設備會重新啟動，中樞會自動連線，原本設定也會保留，不需要重新設定。" },
      { type: "h2", text: "3. What about a network outage", textZh: "3. 如果只是網路中斷呢" },
      { type: "p", text: "If you are at home and Wi-Fi drops, devices that support Bluetooth or local control may still respond; cloud-only devices will pause. When you are away, remote control and live status both stop, but everything recovers as soon as the network returns.", textZh: "如果你人在家中但 Wi‑Fi 中斷，支援藍牙或本地控制的設備仍可能回應；只依賴雲端的設備則會暫停。若人在外面，遠端控制與即時狀態會停止，但網路恢復後就會自動回復。" },
      { type: "h2", text: "4. Will my automations disappear?", textZh: "4. 自動化設定會消失嗎？" },
      { type: "p", text: "No. HomeKit configuration is stored on the system, not in the cloud. Automations, scenes and accessory settings remain intact through outages.", textZh: "不會。HomeKit 設定會保存在系統中，不是停電就消失。自動化、情境與配件設定都會在停電或斷線後保留。" },
      { type: "h2", text: "5. How to make HomeKit more resilient", textZh: "5. 如何讓 HomeKit 更穩定" },
      { type: "ul", items: [
        "Design a proper Mesh Wi-Fi layout for complete coverage.",
        "Place the home hub in a stable network area, away from obstructions.",
        "Check the electrical panel and add surge protection where needed.",
        "Pair the hub with a UPS for critical setups."
      ], itemsZh: [
        "規劃完整覆蓋的 Mesh Wi‑Fi 網路。",
        "將家庭中樞放在訊號穩定、少遮蔽的位置。",
        "檢查電箱狀況，必要時加入突波保護。",
        "重要系統可搭配 UPS 不斷電設備。"
      ] },
      { type: "p", text: "Smart-home stability is 80% network and electrical planning. With proper system design, your home recovers gracefully from any outage — no resets, no broken devices.", textZh: "智慧家庭的穩定度，有很大一部分來自網路與電力規劃。只要系統設計正確，家就能在停電或斷網後優雅恢復，不需要重設，也不會造成設備損壞。" }
    ]
  },
  {
    slug: "homekit-hub-requirement",
    date: "JUN 28, 2024",
    category: "Apple HomeKit Install",
    categoryZh: "Apple HomeKit 安裝",
    title: "Do you really need a HomePod or Apple TV to use HomeKit?",
    titleZh: "使用 HomeKit 一定需要 HomePod 或 Apple TV 嗎？",
    subtitle: "使用 HomeKit 一定要有 HomePod 或 Apple TV 嗎？",
    subtitleZh: "家庭中樞、遠端控制與自動化穩定性的差異。",
    image: news2,
    body: [
      { type: "p", text: "A common question when planning an Apple smart home: do I need a HomePod? Can I use HomeKit with just an iPhone? Is a home hub mandatory? The honest answer — not always, but there is a real difference.", textZh: "規劃 Apple 智慧家庭時，最常被問到的是：一定要買 HomePod 嗎？只有 iPhone 可以用 HomeKit 嗎？家庭中樞是不是必要？誠實地說，不一定，但差異很明顯。" },
      { type: "h2", text: "1. What HomeKit gives you", textZh: "1. HomeKit 能帶來什麼" },
      { type: "p", text: "HomeKit is Apple's smart-home platform. It brings every HomeKit-certified accessory into the Home app — control lighting from your phone, build scene-based automations, use Siri voice, and manage your home remotely.", textZh: "HomeKit 是 Apple 的智慧家庭平台。它能將所有 HomeKit 認證配件整合到「家庭」App 中，讓你用手機控制燈光、建立情境自動化、使用 Siri 語音，並遠端管理家中設備。" },
      { type: "h2", text: "2. Using HomeKit without a hub", textZh: "2. 沒有家庭中樞也能使用嗎" },
      { type: "p", text: "With only an iPhone you can still control devices on your home Wi-Fi, switch lights and AC manually, and use basic Siri commands. But functionality is limited to your local network.", textZh: "只有 iPhone 時，你仍可在家中 Wi‑Fi 範圍內控制設備、手動開關燈光與空調，也能使用基本 Siri 指令。但功能會限制在本地網路內。" },
      { type: "h2", text: "3. Why a home hub matters", textZh: "3. 為什麼家庭中樞很重要" },
      { type: "ul", items: [
        "Remote control — adjust lights or AC from anywhere in the world.",
        "Reliable automation — schedules and triggers run consistently.",
        "Always-on coordination — the hub keeps accessories in sync."
      ], itemsZh: [
        "遠端控制——在任何地方調整燈光或空調。",
        "穩定自動化——排程與觸發條件能持續執行。",
        "常駐協調——中樞會讓配件保持同步。"
      ] },
      { type: "h2", text: "4. HomePod vs Apple TV", textZh: "4. HomePod 與 Apple TV 的差異" },
      { type: "p", text: "Both can serve as a home hub. HomePod adds room-filling sound and hands-free Siri; Apple TV adds 4K entertainment with hub duties on the side. For a true voice-driven smart home, HomePod is typically the better choice.", textZh: "兩者都能作為家庭中樞。HomePod 提供充滿空間感的聲音與免持 Siri；Apple TV 則以 4K 娛樂為主，同時具備中樞功能。若想打造真正以語音為核心的智慧家庭，HomePod 通常更適合。" },
      { type: "h2", text: "5. The professional difference", textZh: "5. 專業規劃的差異" },
      { type: "p", text: "Buying devices isn't the same as building a system. Network topology, hub placement, device compatibility, and scene design all matter. That is where proper planning pays off.", textZh: "買設備不等於完成一套系統。網路拓撲、中樞位置、設備相容性與情境設計都會影響使用體驗，這正是專業規劃的價值。" }
    ]
  },
  {
    slug: "what-is-apple-homekit",
    date: "SEP 03, 2024",
    category: "Apple Smart Home",
    categoryZh: "Apple 智慧家庭",
    title: "What is Apple HomeKit?",
    titleZh: "什麼是 Apple HomeKit？",
    subtitle: "什麼是 Apple HomeKit？Apple 智能家居安裝",
    subtitleZh: "了解 Apple HomeKit 如何整合燈光、空調、安全與語音控制。",
    image: news3,
    body: [
      { type: "p", text: "Apple HomeKit is Apple's smart-home integration platform. The idea is simple: every HomeKit-certified accessory in your home is managed from a single, beautifully designed interface — the Home app on your Apple devices.", textZh: "Apple HomeKit 是 Apple 的智慧家庭整合平台。概念很簡單：家中所有 HomeKit 認證配件，都能在 Apple 裝置上的「家庭」App 中以同一個清楚漂亮的介面管理。" },
      { type: "h2", text: "1. What HomeKit can control", textZh: "1. HomeKit 可以控制什麼" },
      { type: "ul", items: [
        "Smart lighting — switches, dimmers, scenes.",
        "Climate — AC controllers, fans, smart plugs.",
        "Security — smart locks, cameras, sensors.",
        "Voice — HomePod as the always-listening hub."
      ], itemsZh: [
        "智慧燈光——開關、調光與情境。",
        "空調環境——冷氣控制器、風扇與智慧插座。",
        "安全設備——智慧門鎖、攝影機與感應器。",
        "語音控制——以 HomePod 作為隨時待命的中樞。"
      ] },
      { type: "h2", text: "2. How it is structured", textZh: "2. HomeKit 的架構" },
      { type: "p", text: "Three layers: HomeKit-certified devices, a home hub such as HomePod or Apple TV, and your control devices — iPhone, iPad, Apple Watch. Wi-Fi or Bluetooth connects them, the hub orchestrates.", textZh: "它由三層組成：HomeKit 認證設備、HomePod 或 Apple TV 等家庭中樞，以及你的控制裝置——iPhone、iPad、Apple Watch。Wi‑Fi 或藍牙負責連接，中樞負責協調。" },
      { type: "h2", text: "3. Why people choose HomeKit", textZh: "3. 為什麼選擇 HomeKit" },
      { type: "ul", items: [
        "Privacy-first — end-to-end encryption, no cloud middleman.",
        "Tight Apple integration — effortless for Apple households.",
        "Intuitive — the Home app keeps everything in one place.",
        "Powerful automation — arrive home, lights rise; sleep, the house quiets."
      ], itemsZh: [
        "隱私優先——端對端加密，不需要額外雲端中介。",
        "Apple 深度整合——對 Apple 使用者非常自然。",
        "直覺操作——所有設備都集中在家庭 App。",
        "強大自動化——回家時燈光亮起，入睡時家安靜下來。"
      ] },
      { type: "p", text: "HomeKit isn't a single device — it is the connective tissue of a calm, well-considered smart home.", textZh: "HomeKit 不是單一設備，而是一個安靜、完整、有邏輯的智慧家庭系統核心。" }
    ]
  },
  {
    slug: "smart-home-for-older-homes",
    date: "JAN 15, 2025",
    category: "Home Renovation",
    categoryZh: "住宅改造",
    title: "Can older homes be upgraded to a smart home?",
    titleZh: "老屋也可以升級成智慧家庭嗎？",
    subtitle: "舊屋可以裝智能家居嗎？ 智能家居改造",
    subtitleZh: "不大動工程，也能讓既有住宅安靜升級。",
    image: news4,
    body: [
      { type: "p", text: "A common myth: smart homes are only for new builds, or only possible when wiring is planned during a renovation. In reality, most smart-home upgrades today can be installed with minimal disruption — no walls broken, no rewiring.", textZh: "很多人以為智慧家庭只適合新成屋，或必須在裝修時先預留線路。其實現在多數智慧家庭升級都能以低干擾方式完成，不一定需要敲牆或重新配線。" },
      { type: "h2", text: "1. Can older homes be upgraded?", textZh: "1. 老屋可以升級嗎？" },
      { type: "p", text: "Yes. As long as basic electrical wiring is in place, most accessories can simply replace existing hardware: swap the wall switch, add a smart AC controller, plug in smart outlets, integrate voice control.", textZh: "可以。只要基本電路狀況正常，多數配件都能直接替換既有設備，例如更換牆面開關、加入冷氣控制器、使用智慧插座，或整合語音控制。" },
      { type: "h2", text: "2. Will it require breaking walls?", textZh: "2. 需要敲牆嗎？" },
      { type: "ul", items: [
        "Replace the switch module directly — no construction.",
        "Add a smart AC controller — even legacy units upgrade to remote operation.",
        "Use wireless integration through HomeKit — no extra control cabling."
      ], itemsZh: [
        "直接替換開關模組——不需要工程。",
        "加入冷氣控制器——舊型冷氣也能升級遠端操作。",
        "透過 HomeKit 無線整合——不需額外控制線。"
      ] },
      { type: "h2", text: "3. Things we evaluate first", textZh: "3. 我們會先評估什麼" },
      { type: "ul", items: [
        "Neutral wire (N-line) availability — some smart switches require it.",
        "Wi-Fi or Mesh signal stability across the home.",
        "Electrical panel condition and capacity."
      ], itemsZh: [
        "是否有中性線——部分智慧開關會需要。",
        "全屋 Wi‑Fi 或 Mesh 訊號是否穩定。",
        "電箱狀況與容量是否足夠。"
      ] },
      { type: "h2", text: "4. Where to start", textZh: "4. 從哪裡開始" },
      { type: "p", text: "You don't have to do everything at once. Smart lighting gives the most immediate impact, AC control improves comfort and energy use, and a HomePod hub ties the system together with voice.", textZh: "不需要一次全部完成。智慧燈光最容易帶來立即感受，冷氣控制能改善舒適與能源使用，而 HomePod 中樞則能用語音把整套系統串起來。" },
      { type: "p", text: "Smart living is no longer a privilege of new construction. With professional planning, any home can become quietly, beautifully intelligent.", textZh: "智慧生活不再只是新成屋的特權。透過專業規劃，任何住宅都能安靜而漂亮地變得更智慧。" }
    ]
  }
];

export type Product = {
  slug: string;
  name: string;
  nameZh?: string;
  tagline: string;
  taglineZh?: string;
  description: string;
  descriptionZh?: string;
  image: string;
  features: string[];
  featuresZh?: string[];
  specs: { label: string; value: string }[];
  specsZh?: { label: string; value: string }[];
};

export const PRODUCTS: Product[] = [
  {
    slug: "apple-homepod",
    name: "Apple HomePod",
    nameZh: "Apple HomePod",
    tagline: "Smart speaker · Home hub",
    taglineZh: "智慧喇叭 · 家庭中樞",
    description:
      "HomePod is more than an exceptional speaker — it is the central hub of an Apple HomeKit smart home. Through Siri, control lights, climate, curtains and scenes with a single sentence. Automated routines such as Coming Home or Goodnight run on their own, and remote control keeps you in touch with the house from anywhere. The Apple ecosystem, distilled into a single quiet presence in the room.",
    descriptionZh:
      "HomePod 不只是聲音出色的喇叭，也是 Apple HomeKit 智慧家庭的核心中樞。透過 Siri，一句話就能控制燈光、空調、窗簾與情境。回家、晚安等自動化流程可自行執行，遠端控制也讓你在任何地方都能掌握家中狀態。Apple 生態系，被濃縮成空間裡安靜而穩定的存在。",
    image: indHomepod,
    features: [
      "Hands-free Siri voice control",
      "Runs HomeKit automations as the home hub",
      "Room-filling, computational audio",
      "Remote access from anywhere",
      "End-to-end encrypted privacy"
    ],
    featuresZh: [
      "免持 Siri 語音控制",
      "作為家庭中樞執行 HomeKit 自動化",
      "充滿空間感的計算音訊",
      "支援隨時隨地遠端控制",
      "端對端加密隱私保護"
    ],
    specs: [
      { label: "Role", value: "Home Hub · Voice Assistant" },
      { label: "Protocol", value: "HomeKit · AirPlay 2 · Matter" },
      { label: "Voice", value: "Siri, always-on" },
      { label: "Ecosystem", value: "Apple iPhone · iPad · Apple Watch" }
    ],
    specsZh: [
      { label: "角色", value: "家庭中樞 · 語音助理" },
      { label: "協定", value: "HomeKit · AirPlay 2 · Matter" },
      { label: "語音", value: "Siri，隨時待命" },
      { label: "生態系", value: "Apple iPhone · iPad · Apple Watch" }
    ]
  },
  {
    slug: "light-switch",
    name: "Light Switch",
    nameZh: "智慧燈控開關",
    tagline: "Smart lighting control",
    taglineZh: "智慧燈光控制",
    description:
      "Smart lighting switches replace traditional wall switches, giving full control of every lamp from your phone or Siri — brightness, scene presets, scheduled on/off. Curate cinematic moods for the living room, soften the home for sleep, or have everything quietly turn off when you leave. Through HomeKit, light becomes a material you compose with.",
    descriptionZh:
      "智慧燈控開關可取代傳統牆面開關，讓每一盞燈都能透過手機或 Siri 控制，包括亮度、情境預設與排程開關。你可以為客廳營造電影般氛圍，讓睡前光線自然柔和，也能在離家時讓燈光安靜關閉。透過 HomeKit，光成為可以被細緻編排的生活素材。",
    image: indSwitch,
    features: [
      "Replaces existing wall switches",
      "App and Siri voice control",
      "Brightness dimming and scene presets",
      "Schedules and away-mode automation",
      "Full integration with HomeKit scenes"
    ],
    featuresZh: [
      "直接取代既有牆面開關",
      "支援 App 與 Siri 語音控制",
      "亮度調整與情境預設",
      "排程與離家模式自動化",
      "完整整合 HomeKit 情境"
    ],
    specs: [
      { label: "Installation", value: "Direct switch replacement" },
      { label: "Control", value: "Home App · Siri · Manual" },
      { label: "Features", value: "Dimming · Scenes · Scheduling" },
      { label: "Protocol", value: "HomeKit certified" }
    ],
    specsZh: [
      { label: "安裝", value: "直接替換牆面開關" },
      { label: "控制", value: "家庭 App · Siri · 手動" },
      { label: "功能", value: "調光 · 情境 · 排程" },
      { label: "協定", value: "HomeKit 認證" }
    ]
  },
  {
    slug: "ac-controller",
    name: "AC Controller",
    nameZh: "冷氣智慧控制器",
    tagline: "Smart climate control",
    taglineZh: "智慧空調控制",
    description:
      "The smart AC controller upgrades any conventional air conditioner into a connected device. Using infrared signals modelled from your remote, you can set power, temperature and fan speed from your phone or Siri. Pre-cool the home before you arrive, or let automation respond to room temperature on its own — comfort, quietly aligned to your rhythm.",
    descriptionZh:
      "冷氣智慧控制器能將既有冷氣升級為可連線控制的設備。透過模擬遙控器的紅外線訊號，你可以用手機或 Siri 設定開關、溫度與風速。回家前先預冷空間，或讓自動化依照室溫自行調整，讓舒適安靜貼合你的生活節奏。",
    image: indAc,
    features: [
      "Works with existing AC units via IR",
      "Remote temperature & mode control",
      "Siri voice automation",
      "Schedule and trigger-based scenes",
      "Improves energy efficiency"
    ],
    featuresZh: [
      "透過紅外線支援既有冷氣",
      "遠端調整溫度與模式",
      "支援 Siri 語音自動化",
      "排程與條件觸發情境",
      "提升能源使用效率"
    ],
    specs: [
      { label: "Compatibility", value: "Most split-type AC units" },
      { label: "Control", value: "Home App · Siri · Scheduling" },
      { label: "Signal", value: "Infrared (IR) emulation" },
      { label: "Protocol", value: "HomeKit certified" }
    ],
    specsZh: [
      { label: "相容性", value: "多數分離式冷氣" },
      { label: "控制", value: "家庭 App · Siri · 排程" },
      { label: "訊號", value: "紅外線 IR 模擬" },
      { label: "協定", value: "HomeKit 認證" }
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
