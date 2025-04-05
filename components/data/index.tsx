export const navItems = [
  { name: "Home", link: "#home" },
  { name: "Work", link: "#projects" },
  { name: "About", link: "#aboutus" },
  { name: "Blog", link: "#testimonials" },
  { name: "Let's Connect", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a JS Animation library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "Family Tree App",
    des: "Connect with your family through a beautifully designed app showcasing relations visually.",
    fullDes:
      "Family Tree is a social networking app tailored for families. It allows users to add and define relationships, visualizing them in a tree structure. The app supports chat and member invitations, fostering better family connection in a digital space.",
    technology: ["Flutter", "Firebase", "Cloud Firestore"],
    skillsGained: ["Relationship modeling", "Graph-based UI", "Firebase Auth", "Real-time sync"],
    img: "/family-tree.png",
    iconLists: ["/flutter.svg", "/firebase.svg"],
    link: "/",
  },
  {
    id: 2,
    title: "Mentor Fox",
    des: "An e-learning marketplace with live chat and video call functionality.",
    fullDes:
      "Mentor Fox connects mentors and learners through a modern education platform. It includes features like live chat, video calls, scheduling, and a review system to support learning in multiple formats.",
    technology: ["Flutter", "Firebase", "Jitsi Meet API"],
    skillsGained: ["Video call integration", "Chat system", "Push notifications", "Role-based access"],
    img: "/mentor-fox.png",
    iconLists: ["/flutter.svg", "/firebase.svg"],
    link: "/",
  },
  {
    id: 3,
    title: "FRIMLINE",
    des: "A user-friendly shopping app for easy e-commerce browsing.",
    fullDes:
      "FRIMLINE is an e-commerce app integrated with WooCommerce API, designed for smooth product browsing, cart management, and real-time inventory updates.",
    technology: ["Flutter", "WooCommerce API"],
    skillsGained: ["REST API integration", "E-commerce flows", "State management", "Order tracking"],
    img: "/frimline.png",
    iconLists: ["/flutter.svg", "/woo.svg"],
    link: "/",
  },
  {
    id: 4,
    title: "Brand Mania",
    des: "Create business-themed images using pre-built frames and share instantly.",
    fullDes:
      "Brand Mania helps users create business-friendly social media images using pre-designed frames across categories like festivals, team, and motivational quotes.",
    technology: ["Flutter", "Firebase"],
    skillsGained: ["Image editing features", "Dynamic frame rendering", "Storage integration"],
    img: "/brand-mania.png",
    iconLists: ["/flutter.svg", "/firebase.svg"],
    link: "/",
  },
  {
    id: 5,
    title: "The Prelims Master",
    des: "A complete exam prep app for central and state-level competitive exams.",
    fullDes:
      "The Prelims Master offers test series, study materials, and video content for government exam aspirants, integrated with user analytics and real-time scoring.",
    technology: ["Flutter", "Firebase", "Cloud Functions"],
    skillsGained: ["Quiz systems", "Video player integration", "Authentication & scoring logic"],
    img: "/prelims-master.png",
    iconLists: ["/flutter.svg", "/firebase.svg"],
    link: "/",
  },
  {
    id: 6,
    title: "ISMART Homes",
    des: "Society management app for bookings, complaints, and notifications.",
    fullDes:
      "ISMART Homes lets residents manage society activities like hall bookings, complaint submissions, and notice viewing through a centralized app.",
    technology: ["Flutter", "Firebase"],
    skillsGained: ["Community management logic", "Push notifications", "Real-time updates"],
    img: "/ismart-homes.png",
    iconLists: ["/flutter.svg", "/firebase.svg"],
    link: "/",
  },
  {
    id: 7,
    title: "Royal Star Marketing (RSM)",
    des: "MLM company app with supply chain & marketing network system.",
    fullDes:
      "RSM enables marketing executives to manage their downline, product orders, and commissions using an intuitive multi-level marketing dashboard.",
    technology: ["Flutter", "Firebase"],
    skillsGained: ["MLM tree logic", "Downline management", "Commission calculations"],
    img: "/rsm.png",
    iconLists: ["/flutter.svg", "/firebase.svg"],
    link: "/",
  },
  {
    id: 8,
    title: "The Market Theory User App",
    des: "Food delivery and restaurant booking app like Zomato/Swiggy.",
    fullDes:
      "An end-to-end food ordering solution allowing users to browse restaurants, order food, and make reservations with integrated real-time tracking.",
    technology: ["Android (Java)", "Firebase", "Google Maps API"],
    skillsGained: ["Location tracking", "Firebase Auth", "Cart and delivery management"],
    img: "/market-theory.png",
    iconLists: ["/android.svg", "/firebase.svg"],
    link: "/",
  },
  {
    id: 9,
    title: "iWingzy",
    des: "Live location food delivery app with categorized menu.",
    fullDes:
      "iWingzy helps users browse menus, place food orders, and track live delivery. The app focuses on minimal design and fast order placement.",
    technology: ["Android (Java)"],
    skillsGained: ["Live order tracking", "Custom delivery UI", "Location permission handling"],
    img: "/iwingzy.png",
    iconLists: ["/android.svg"],
    link: "/",
  },
  {
    id: 10,
    title: "Face Recognition Attendance App",
    des: "Attendance system using TensorFlow-based facial recognition.",
    fullDes:
      "This project uses facial recognition to mark attendance securely, minimizing proxy attendance using machine learning with TensorFlow.",
    technology: ["Android", "TensorFlow Lite", "CameraX"],
    skillsGained: ["Face detection", "Model training & integration", "Camera handling"],
    img: "/face-recognition.png",
    iconLists: ["/android.svg", "/tensorflow.svg"],
    link: "/",
  },
  {
    id: 11,
    title: "BookmaiPrint",
    des: "Print e-commerce platform with custom order builder.",
    fullDes:
      "BookmaiPrint is a full-stack print-on-demand e-commerce site where users can upload custom designs and place personalized orders.",
    technology: ["React", "Node.js", "MongoDB"],
    skillsGained: ["Full-stack development", "Custom cart system", "File uploads"],
    img: "/bookmaiprint.png",
    iconLists: ["/react.svg", "/node.svg"],
    link: "/",
  },
  {
    id: 12,
    title: "GiftHamper",
    des: "Gifting platform with AI-based recommendations and fast delivery.",
    fullDes:
      "GiftHamper is an e-commerce app that recommends gifts based on AI models and ensures delivery within 10 minutes for local users.",
    technology: ["React", "Node.js", "Express", "Socket.IO"],
    skillsGained: ["AI-based filtering", "Real-time tracking", "Order logistics"],
    img: "/gifthamper.png",
    iconLists: ["/react.svg", "/node.svg"],
    link: "/",
  },
  {
    id: 13,
    title: "Bespoke Matrimony",
    des: "Matrimony app with compatibility matching and social login.",
    fullDes:
      "This app allows users to match based on compatibility scores, verified identities, and seamless onboarding via social media.",
    technology: ["Android", "Firebase", "Google Login"],
    skillsGained: ["Matrimony matching logic", "Social login integration", "User profile building"],
    img: "/bespoke.png",
    iconLists: ["/android.svg", "/firebase.svg"],
    link: "/",
  },
  {
    id: 14,
    title: "Amati",
    des: "Animated React PWA with intro walkthrough and offline support.",
    fullDes:
      "Amati is a React-based progressive web app that includes animated onboarding screens and offline functionality for high engagement.",
    technology: ["React", "Framer Motion", "PWA"],
    skillsGained: ["Intro screen design", "PWA configuration", "Smooth animation control"],
    img: "/amati.png",
    iconLists: ["/react.svg", "/motion.svg"],
    link: "/",
  },
  {
    id: 15,
    title: "Gamerji",
    des: "Gaming event platform and CMS for organizers and users.",
    fullDes:
      "Gamerji is a competitive gaming platform used by Vi and others. It includes a powerful CMS, leaderboard system, and real-time socket communication.",
    technology: ["React", "Node.js", "Socket.IO"],
    skillsGained: ["Real-time communication", "Leaderboard logic", "CMS development"],
    img: "/gamerji.png",
    iconLists: ["/react.svg", "/node.svg", "/socket.svg"],
    link: "/",
  },
  {
    id: 16,
    title: "Accufix Tools",
    des: "Shopify-based e-commerce store with custom theme and UX.",
    fullDes:
      "Accufix Tools is a custom Shopify storefront for power tools, featuring a clean theme, product filters, and an intuitive shopping experience.",
    technology: ["Shopify", "Liquid", "JavaScript"],
    skillsGained: ["Shopify theme editing", "Product filtering", "Checkout customization"],
    img: "/accufix.png",
    iconLists: ["/shopify.svg", "/liquid.svg"],
    link: "/",
  },
  {
    id: 17,
    title: "Appointment Management System",
    des: "Multi-vendor platform for scheduling and managing appointments.",
    fullDes:
      "A robust appointment management web app with role-based access, vendor dashboards, and real-time appointment control.",
    technology: ["React", "Node.js", "MongoDB"],
    skillsGained: ["Calendar integration", "Role-based logic", "CRUD dashboards"],
    img: "/appointment.png",
    iconLists: ["/react.svg", "/node.svg", "/automation.svg"],
    link: "/",
  },
  {
    id: 18,
    title: "Pactools",
    des: "Shopify storefront connected with SAP APIs for seamless order sync.",
    fullDes:
      "Pactools is a Shopify-based store integrated with SAP backend for inventory, pricing, and order sync, built for enterprise-level operations.",
    technology: ["Shopify", "Liquid", "SAP API"],
    skillsGained: ["SAP integration", "Enterprise e-com logic", "Inventory sync"],
    img: "/pactools.png",
    iconLists: ["/shopify.svg", "/liquid.svg", "/sap.svg"],
    link: "/",
  },
  {
    id: 19,
    title: "SSN - Sky Sports Network",
    des: "Built with Flutter, SSN is your go-to app for real-time sports action, streaming each game live with smooth performance and intuitive UI.",
    fullDes:
      "SSN is a comprehensive live sports streaming app that offers users real-time access to games, scores, and highlights. Built with performance and UX in mind, it integrates a smooth video player, live updates, and interactive animations to elevate the sports viewing experience on mobile devices.",
    technology: ["Flutter", "Firebase", "Video Player", "REST API"],
    skillsGained: [
      "Live video streaming integration",
      "Optimizing real-time UI updates",
      "Managing high-performance data flow",
      "Implementing animated sports dashboards"
    ],
    img: "/ssn.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/",
  }

];



export const experienceData = [
  {
    "title": "Fullstack Mobile App Developer",
    "description": "As a Fullstack Mobile App Developer, I bridged the gap between mobile frontends and backend services. This role challenged me to think about system design, scalability, and real-time data handling. It expanded my expertise in deploying secure, efficient, and scalable solutions end-to-end—both in mobile apps and server-side environments.",
    "points": [
      "Built scalable REST APIs and integrated them with mobile apps.",
      "Worked on cloud functions, authentication, and database schema design.",
      "Implemented CI/CD pipelines for rapid release cycles.",
      "Managed full project lifecycle and collaborated across teams.",
      "Strengthened problem-solving across both frontend and backend."
    ]
  },
  {
    "title": "Sr. Mobile App Developer",
    "description": "Transitioning to a Senior role marked a turning point. I was not only building apps but also influencing architecture, mentoring junior developers, and ensuring performance at scale. I began making technical decisions, optimizing complex state management, and aligning code with long-term maintainability.",
    "points": [
      "Led development on large-scale apps with deep Flutter/Dart integration.",
      "Took responsibility for performance bottlenecks and scalability.",
      "Mentored junior developers and participated in code reviews.",
      "Worked closely with UI/UX teams to maintain visual consistency.",
      "Built modular, testable, and maintainable codebases."
    ]
  },
  {
    "title": "Mobile App Developer",
    "description": "Starting out as a Mobile App Developer, I stepped into the world of cross-platform mobile development with excitement and curiosity. I focused on mastering the fundamentals — building responsive UIs, integrating APIs, and understanding mobile architectures. It was a learning-heavy phase where I absorbed industry standards, development best practices, and how to work collaboratively in agile teams.",
    "points": [
      "Gained hands-on experience with Flutter and Android (Java/Kotlin).",
      "Learned the full app lifecycle: from wireframes to Play Store deployment.",
      "Understood client requirements and translated them into real-world features.",
      "Built confidence in debugging and solving UI/UX inconsistencies."
    ]
  }
]





export const testimonials = [
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];