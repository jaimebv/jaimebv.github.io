export const seqamData = {
    id: "seqam",
    title: "Service Quality Manager",
    subtitle: "Enterprise-Grade Observability & Orchestration for the Edge-Cloud",
    overview: "In decentralized edge computing, ensuring consistent end-to-end service quality across heterogeneous infrastructures is a massive challenge. Traditional observability tools fail to correlate multi-source information across user devices, edge servers, and core networks simultaneously. SeQaM is a highly scalable, multi-tier telemetry and orchestration platform built to solve this. It serves as the foundational data engine for modern edge environments, actively deployed in high-stakes Proof-of-Concepts with enterprise partners like SAP and T-Systems for workload placement in federated edge environments.",
    role: "Lead Systems Architect & Product Owner",
    roleDescription: "I spearheaded the end-to-end product strategy and system architecture. I designed SeQaM's decoupled infrastructure—separating Central, Distributed, and Network components—to handle massive data ingestion and real-time event orchestration. Beyond the architecture, I owned the agile execution, translating complex infrastructure requirements into actionable K8s deployment epics, defining strict JSON data schemas, and designing the REST API that allows external Services to interact with the system.",
    techStack: ["Kubernetes", "OpenTelemetry", "Clickhouse", "Nginx", "Redis", "Distributed Systems Design", "REST APIs", "Kafka", "5G"],
    sections: [
        {
            title: "System Architecture: Designing for Enterprise Scalability",
            content: "As the Lead Systems Architect, I designed SeQaM as a decoupled, multi-tier system to handle massive data ingestion and real-time event orchestration. To ensure the system could scale to enterprise demands, I led the migration of this architecture into a Kubernetes (K8s) environment, integrating proxies for traffic routing, caches and messaging queues for fast-response and state management.",
            list: [
                { strong: "Central Components (The Core Engine):", text: "I architected the central hub to ingest and process data. It utilizes a Main Collector built on a OpenTelemetry (otel-collector) and a Clickhouse Database for high-throughput time-series data storage. The logic is handled by Core Components, including an Event Orchestrator for managing system states and an Experiment Dispatcher for automated testing workflows." },
                { strong: "Distributed Components (The Edge Agents):", text: "I designed lightweight agents deployed directly on User Equipment (UEs) and Edge Servers (Worker Nodes). These include a customizable Metrics Collector for host metrics (CPU, GPU, Memory) and a local synchronized Event Orchestrator capable of triggering commands and programmatically simulating computational stress." },
                { strong: "Network Components:", text: "For emulation purposes and the goal of capturing the complete E2E journey, I integrated Network Spies (using TCP DUMP), Network Loaders (utilizing iperf3) to track package flow and simulate network conditions across mobile networks and backhauls. This generates insights to identify the root cause of a service quality degradation within the laboratory set-up. Such input and knowledge was afterwards used to design and implement solutions for real scenarios. " }
            ]
        },
        {
            title: "Defining Core Product Capabilities",
            content: "Translating this distributed architecture into a deliverable product required strict prioritization. As Product Owner, I defined the following core capabilities:",
            list: [
                { strong: "Deterministic Event Orchestration:", text: "The system implements data schemes for homogenize the inputs and events being handled. Events include commands for monitoring, changing frequency of sampling, generating load, etc. I defined an schema allowing the Experiment Dispatcher to trigger sequential or concurrent execution of CPU, GPU, memory, and network loads at precise microsecond timestamps." },
                { strong: "Universal Telemetry Ingestion:", text: "The product leverages OpenTelemetry to standardize data collection from the edge applications. I ensured the system aggregated spans, custom metrics, and host analytics per specific experiment segment, allowing for immediate root-cause analysis." },
                { strong: "Extensible REST API:", text: "To allow external orchestrators to act on SeQaM's data, I defined a robust API component. This API abstracts the underlying data complexity, providing actionable statistics to external Services." }
            ]
        },
        {
            title: "The Business Outcome: Enterprise PoC with SAP and T-Systems",
            content: "The true validation of SeQaM's architecture was its application in a high-stakes enterprise Proof of Concept. Using SeQaM's API and aggregated data, I led the implementation of an Intelligent Recommender System for performance-sensitive workloads. We successfully integrated this system with SAP and T-Systems. Specifically, SAP's platform mesh system (APEIRORA stack) queries our recommender API. SeQaM analyzes real-time and historical telemetry across the cloud-edge continuum and returns a dynamically ranked list of optimal Kubernetes clusters for workload placement. The integrated system was presented at the General Assembly 8ra Community, where technologies to be used in the Next European Cloud-Edge Continuum where showcased."
        }
    ]
};

export const greenShiftData = {
    id: "greenshift",
    title: "GreenShift",
    subtitle: "Architecting ESG Compliance and CO2 Transparency for Virtualized Workloads",
    overview: "With the enforcement of the EU's Corporate Sustainability Reporting Directive (CSRD), enterprise datacenters must accurately report their environmental impact. However, no off-the-shelf tool currently bridges the 'passthrough gap' between physical hypervisor energy sensors and isolated guest Kubernetes pods. GreenShift is a software-defined energy attribution platform designed for KVM-based systems. It successfully estimates service-level energy consumption and carbon footprints, empowering datacenter providers to offer 'Energy & CO2-as-a-Metric' to their tenants. System was implemented in partnership with industry leading OpenNebula (ESP).",
    role: "Lead Systems Architect & Product Owner",
    roleDescription: "I was tasked with defining the system's architecture and technical feasibility, system boundaries, and product roadmap for this platform. I designed a secure, two-layer architecture utilizing virtual sockets to pass real-time energy budgets from a Host Telemetry Agent directly into a Guest Attributor. Collected data is finally grouped based on K8s namespaces and manifests (pod, deployment, etc.) through a well-defined and secure API for datacenter and customer dashboards. As Product Owner, I managed the strategic trade-offs—such as enforcing statistical sampling to prevent system overhead and integrating a Carbon Model for emissions tracking—and structured the engineering effort into a strict, three-phase agile delivery plan.",
    techStack: ["KVM Virtualization (Proxmox/OpenNebula)", "eBPF", "RAPL Interfaces", "virtio-vsock", "Green IT", "Kubernetes", "Grafana", "Prometheus", "REST API"],
    sections: [
        {
            title: "System Architecture: Bridging the Passthrough Gap",
            content: "To solve the lack of visibility between bare-metal hardware and containerized workloads, I designed a decoupled, multi-layer architecture:",
            list: [
                { strong: "Host Telemetry & Carbon Agent (DC Agent).", text: "An agent running directly on the hypervisor (Datacenter Agent) that utilizes BPF probes to read physical hardware sensors. This agent does not just calculate raw power, but instead it incorporates both an Energy Model and a Carbon Model. This allows the system to cross-reference real-time energy consumption with grid carbon intensity to estimate CO2 emissions." },
                { strong: "Passthrough Pipeline.", text: "To securely cross the hypervisor boundary, I defined a custom communication bridge (utilizing virtual sockets) to stream the real-time energy and carbon data from the host directly into the isolated guest environment." },
                { strong: "In-VM Guest Attributor.", text: "A lightweight agent deployed within the virtual machine. It ingests the total energy and carbon data provided by the Host Agent and uses a Pod Energy Model to attribute it to individual Kubernetes Pods." },
                { strong: "Green Core.", text: "A Core module aggregates Pods data into deployments or jobs and exposes a REST API to external systems (e.g., dashboards, external orchestrators)." }

            ]
        },
        {
            title: "Strategic Product Decisions & Trade-offs",
            content: "A successful architecture required defining what not to build. As the Product Owner, I established strict operational constraints to ensure the system remained feasible and performant:",
            list: [
                { strong: "Overhead vs. Accuracy:", text: "I determined that tracking sub-millisecond context switches created excessive system overhead; therefore, I mandated a statistical sampling approach to balance minor attribution errors against system stability." },
                { strong: "Defining System Boundaries:", text: "I clearly scoped the MVP to focus on CPU and memory energy allocation. I documented that GPU energy tracking in shared or partitioned environments currently lacks a standard cross-vendor API, meaning it was deferred from the initial PoC to avoid vendor lock-in and ensure reliable deliverables." },
                { strong: "Methodology Validation:", text: "I aligned our software estimation models with the methodologies validated by other schemas, ensuring our approach to attribute energy and carbon was grounded in state-of-the-art methodologies." }
            ]
        },
        {
            title: "The Business Outcome: PoC with OpenNebula",
            content: "To guide the engineering teams, I phased the Proof-of-Concept into a structured, agile delivery roadmap. I successfully delivered a viable, low-overhead architectural blueprint and phased roadmap, working in cooperation with international industry players."
        }
    ]
};

export const mapekData = {
    id: "mapek",
    title: "MAPE-K Edge AI",
    subtitle: "Self-Healing Infrastructure & Closed-Loop Control for Edge AI",
    overview: "Performance-sensitive Edge AI applications, such as real-time computer vision, require strict latency guarantees. Volatile mobile networks and constrained edge servers often cause severe degradation. To move beyond passive monitoring, I designed a Closed-Loop Intelligent Controller built on a continuous Monitor-Analyze-Plan-Execute-Knowledge (MAPE-K) framework. This system autonomously diagnoses bottlenecks and triggers sub-second mitigation strategies—such as dynamic network path selection (5G vs. Wi-Fi) or workload migration—to maintain strict End-to-End Service Quality.",
    role: "Lead Systems Architect & Product Owner",
    roleDescription: "I designed the overarching autonomous control architecture, bridging multi-layer metrics collection with an intelligent Decision Engine. To ensure long-term scalability, I architected the Service Planner to utilize decoupled, containerized 'Recommender Modules' operating via strict API contracts. On the product side, I defined the optimization guardrails—prioritizing window-based stability (P95/P99 latency) over unfeasible per-request tracking—and coordinated the cross-functional work packages (WP0-WP8) required to integrate the AI models, telemetry agents, and network infrastructure.",
    techStack: ["Autonomous Systems", "MAPE-K Control Loops", "5G/Wi-Fi Telemetry", "Distributed Tracing", "Edge Computing", "Containerized AI Modules"],
    sections: [
        {
            title: "System Architecture: Real-time Service Quality Assurance",
            content: "To solve this, I architected a closed monitoring and control loop that ingest data from multiple edge clusters and network providers to provide real-time service quality assurance:",
            list: [
                { strong: "SeQaM.", text: "A service quality manager that runs on the edge clusters and collects, aggregates and correlates distributed metrics to identify the root cause of service quality degradation." },
                { strong: "SP Core.", text: "Acts as the centralized brain of the system. It is responsible for retriving service quality data from SeQaM and employing AI-powered models to estimate network and processing (inference) latency if using a certain network provider or edge cluster to determine the most suitable combination that ensures the best service quality for the Edge AI workloads." },
                { strong: "SP Agent.", text: "A distributed agent that runs on the client side and interacts with the Core to implement the mitigation actions on the application, while keeping it as a black box." }
            ]
        },
        {
            title: "The Business Outcome: PoC with ENG",
            content: "The system was implemented in a Federated Edge Platform distributed accross Europe in partnership with ENG (ITA).",
        }
    ]
};

export const ceaData = {
    id: "cea",
    title: "Configurable Edge Application (CEA)",
    subtitle: "Designing a Distributed Edge Load Emulator",
    overview: "As part of a European consortium building next-generation cloud-edge infrastructure, our engineering teams faced a critical bottleneck: How do we reliably test the performance and scalability of distributed edge nodes under realistic, highly variable conditions? We needed a system capable of generating cross-platformcontrolled computational and network loads with adaptable performance characteristics to emulate real-world edge applications. Furthermore, the system had to be cross-platform compatible, operating seamlessly across Linux servers, Raspberry Pis, and mobile operating systems (Android/iOS).",
    role: "Systems Architect",
    roleDescription: "I designed the system's architecture to be distributed, cross-platform compatible and highly scalable and flexible. I also defined the system's product requirements to ensure it met the defined functionalities.",
    techStack: ["OpenTelemetry", "Distributed Systems", "Containerized Load Testing", "Cross-Platform Compatibility"],
    sections: [
        {
            title: "System Architecture: Breaking Down the Complexity",
            content: "To solve this, I architected the Configurable Edge Application (CEA). Instead of building a monolithic system, I designed a scalable, three-tier distributed architecture to separate orchestration from execution:",
            list: [
                { strong: "Global Manager (GloM).", text: "Acts as the centralized brain of the testing suite. Exposes a REST API endpoint to initiate or stop client-server operations across specified hosts globally." },
                { strong: "Distributed Manager (DiM).", text: "Implements node-level lifecycle management. Deployed locally on client/server hosts, the DiM connects to the GloM via reactive channels. It tracks underlying application instances, knows their state (busy/free), and deploy or kills instances on demand." },
                { strong: "The Worker Instances (CEA).", text: "The dynamic execution units that generate the load. Instances provide a uniform interface for management and wait for DiM commands to act either as a client generating load or as a server processing requests." }
            ]
        },
        {
            title: "Defining Core Product Capabilities",
            content: "With the architecture defined, I translated the system into strict product requirements to ensure it met the defined testing parameters:",
            list: [
                { strong: "Dynamic Topology (1-to-N Pairing):", text: "Real-world edge servers handle multiple clients simultaneously. I designed the system to support multiple CEA instances operating as clients targeting a single CEA instance operating as a server." },
                { strong: "Customizable Load Profiling:", text: "I defined requirements for instances to mimic specific edge profiles (e.g., heavy machine learning video processing vs. lightweight V2I messaging). This includes configuring specific CPU load (measured in synthetic 'Bogo' operations) and network traffic volume." },
                { strong: "Enterprise-Grade Observability:", text: "A testing tool is useless without metrics. I mandated OpenTelemetry integration to collect granular tracing spans during each operational cycle. I specifically designed spans to isolate pure CPU processing time from network uplink/downlink time, allowing for precise load type identification." }
            ]
        },
        {
            title: "From Architecture to Execution:",
            content: "To bridge the gap between architectural design and agile delivery, I broke these modules down into actionable Epics and User Stories for the development team.",
            list: [
                { strong: "Task 1 (Backend/API):", text: "Implement the GloM POST /Run REST endpoint to accept JSON payloads defining client/server host IPs and core instructions." },
                { strong: "Task 2 (Infrastructure):", text: "Establish a persistent websocket connection between the GloM and distributed DiM nodes." },
                { strong: "Task 3 (Worker/Logic):", text: "Develop the DiM logic to check the array of local CEA instances and transition their state from free to busy upon receiving a start command." },
                { strong: "Task 4 (Observability):", text: "Instrument the CEA client worker to generate an OpenTelemetry span strictly measuring the execution time of requested Bogo operations before data transmission." },
                { strong: "Outcome:", text: "By structuring the problem into clear architectural domains and defined product increments, the engineering team could build, deploy, and scale the load emulator iteratively, enabling successful stress-testing of the consortium's edge infrastructure." }
            ]
        }
    ]
};



export const wsnData = {
    id: "wsn",
    title: "Wireless Sensor Network for Environmental and Pollutant Monitoring",
    subtitle: "From Requirements to Real Product",
    overview: "I architected and led the development of a highly scalable, RTOS-based embedded platform designed for remote environmental and pollutant monitoring. Operating in highly distributed and often harsh environments, the system leverages edge computing for real-time sensor calibration, I2C multiplexing for dynamic sensor payloads, and a highly resilient telemetry pipeline featuring automated failovers between Cellular (GPRS/SIM800) and WiFi networks.",
    role: "Embedded IoT Engineer & Technical Lead",
    roleDescription: "I led the development of a Wireless Sensor Network for Environmental and Pollutant Monitoring from the requirements collection, through firmware development and system integration, hardware prototyping, product design, and finally product launch. My focus was on architecting a fault-tolerant FreeRTOS environment, designing the modular C++ firmware architecture, and ensuring rock-solid remote connectivity.",
    techStack: [
        "C/C++",
        "FreeRTOS (ESP32)",
        "Embedded Systems Architecture",
        "Hardware Prototyping",
        "Product Design",
        "I2C & UART Multiplexing",
        "Cellular IoT & MQTT/HTTP",
        "Sensor Calibration",
        "Unit/Integration/System Testing"
    ],
    sections: [
        {
            title: "System Architecture: Breaking Down the Complexity",
            content: "To solve the complexity of managing concurrent sensor polling, network I/O, and processing without blocking the system, I architected an event-driven, multi-threaded firmware design using FreeRTOS. Key architectural decisions included:",
            list: [
                { strong: "Deterministic Scheduling:", text: "I implemented a hardware timer-driven scheduler operating at 1 MHz, which triggers an Interrupt Service Routine (ISR). To keep the ISR extremely lean, it utilizes `xQueueSendFromISR` to defer the heavy lifting of sensor data acquisition to a dedicated FreeRTOS task.." },
                { strong: "Decoupled Telemetry Pipeline:", text: "Network transmission can inherently block execution. To mitigate this, I designed an asynchronous `Transmitter` task that listens to a FreeRTOS queue (`_transmitter_queue`). Sensor payloads are formatted into JSON and queued for transmission, allowing the sensor hub to continue polling precisely on schedule regardless of network latency.." },
                { strong: "Resource Guarding:", text: "Given the shared nature of the I2C bus among multiplexers and various sensors, I implemented an `I2CBusGuard` mutex system to prevent bus collisions and ensure thread-safe peripheral access." },
                { strong: "Leverage OOP:", text: "I decided to leverage OOP to create a modular, plug-and-play ecosystem that allowed the hardware to scale without firmware rewrites. Sensors connected to the hub are created following a sensor template. Furthermore, a port structure allows the hub to be used with any sensor that implements the same interface, while abstracting it from the hardware." }
            ]
        },
        {
            title: "Defining Core Product Capabilities",
            content: "With the architecture defined, I developed a modular, plug-and-play ecosystem that allowed the hardware to scale without firmware rewrites.",
            list: [
                {
                    strong: "Dynamic Sensor Hub & Multiplexing:",
                    text: "I integrated a I2C multiplexer and designed a dynamic bus-scanning algorithm. This allows the firmware to automatically detect, initialize, and pull configuration parameters for dynamically attached sensors on the fly, making hardware revisions seamless."
                },
                {
                    strong: "Smart Edge Calibration:",
                    text: "Raw environmental data often drifts. I proposed an on-device calibration engine that applies mathematical corrections at the edge—including configurable Offsets, Linear Regression, and Multivariate Linear Regression models—before the data is ever packaged for the cloud."
                },
                {
                    strong: "Time-Windowed Sampling Constraints:",
                    text: "To optimize power and data usage, I designed an RTC-aware constraint engine that dynamically adjusts or blocks sensor sampling based on the time of day (e.g., Morning vs. Midnight) or the day of the week (Weekday vs. Weekend)."
                }
            ]
        },
        {
            title: "Engineering Challenges & Designing for Resilience",
            content: "Deploying hardware in remote locations means physical maintenance is virtually impossible. The system had to be self-healing.",
            list: [
                {
                    strong: "Abstracted & Resilient Connectivity:",
                    text: "I built a Communication Handler abstraction layer that seamlessly handles both WiFi and Cellular modems. I implemented an automated failover state machine: if a network connection drops or HTTP/MQTT requests fail, the system attempts a controlled modem power-cycle, followed by a switch in communication topology (e.g., Cellular to WiFi), and finally an OS-level watchdog restart if all recovery attempts are exhausted."
                },
                {
                    strong: "UART Contention Management:",
                    text: "The cellular module requires heavy AT-command usage. I utilized a custom uart_manager mutex to guarantee atomic UART transactions between the FreeRTOS tasks and the modem, eliminating race conditions during HTTP POSTs and MQTT publishes."
                },
                {
                    strong: "Local Field Diagnostics:",
                    text: "For on-site technicians, I implemented a debounced hardware interrupt that spins up a local WiFi Access Point and a captive portal Web Server. This allows secure, in-field access to live HTML data streams, RTC time synchronization, and the downloading of gzipped historical `.csv` logs directly from the onboard SD card."
                }
            ]
        },
        {
            title: "The Business Outcome: A WSN deployed nationwide",
            content: "The WSN developed was deployed nationwide in 2024, with multiple nodes deployed in different locations from the country and the Galapagos islands. The system is currently in operation and is monitoring the environment and pollutant levels in real-time. Several patents were filed for the system and the firmware developed."
        }
    ]
};
