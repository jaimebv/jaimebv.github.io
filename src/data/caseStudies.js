export const seqamData = {
    id: "seqam",
    title: "Service Quality Manager",
    subtitle: "Enterprise-Grade Observability & Orchestration for the Edge-Cloud",
    overview: "In decentralized edge computing, ensuring consistent end-to-end service quality across heterogeneous infrastructures is a massive challenge. Traditional observability tools fail to correlate multi-source information across user devices, edge servers, and core networks simultaneously. SeQaM is a highly scalable, multi-tier telemetry and orchestration platform built to solve this, serving as the foundational data engine for modern edge environments.",
    role: "Lead Systems Architect & Product Owner",
    roleDescription: "I designed the end-to-end decoupled architecture, separating Central, Distributed, and Network components. I specified the strict JSON data schemas and API contracts allowing external services to interact with the system. I coordinated the agile execution, translating complex infrastructure requirements into actionable Kubernetes deployment epics. I reviewed and integrated the intelligent recommender system used for workload placement.",
    techStack: ["Kubernetes", "OpenTelemetry", "Clickhouse", "Nginx", "Redis", "REST APIs", "Kafka", "5G"],
    sections: [
        {
            title: "Problem",
            content: "Deploying systems at the edge require service quality guarantees, but currently 5G networkds, and edge worker nodes present unpredictable behavior. Traditional monitoring tools were unable to provide correlated, end-to-end fine-grained visibility across user equipment, 5G networks, and edge worker nodes. There was a critical need for a system that could not only monitor these diverse environments but also trigger synchronized load tests and collect deterministic telemetry to allow application owners and infra providers to pinpoint service degradations."
        },
        {
            title: "Requirements",
            list: [
                {
                    strong: "Functional Requirements:",
                    text: "Collect and aggregate telemetry from user equipment, networks, and edge servers; Execute sequential or concurrent load generation (CPU, GPU, memory, network); Expose aggregated data via an extensible REST API for external orchestrators; Dynamically rank optimal clusters for workload placement."
                },
                {
                    strong: "Non-functional Requirements:",
                    text: "Enterprise-grade scalability to handle high-throughput time-series data; Millisecond-level precision for synchronized event triggering; Decoupled and highly available architecture; Minimal footprint for edge agents deployed on constrained devices."
                }
            ]
        },
        {
            title: "System Functionality",
            list: [
                { strong: "Central Components (The Core Engine):", text: "I architected a central hub to ingest and process data. It utilizes a Main Collector built on a OpenTelemetry (otel-collector) and a Clickhouse Database for high-throughput time-series data storage. The logic is handled by Core Components, including an Event Orchestrator for managing system states and an Experiment Dispatcher that is synch with distributed event generators for automated testing workflows." },
                { strong: "Distributed Components (The Edge Agents):", text: "I designed lightweight agents deployed directly on User Equipment (UEs) and Edge Servers (Worker Nodes). These include a customizable Metrics Collector for host metrics (CPU, GPU, Memory, etc.) and a local synchronized Event Orchestrator capable of triggering commands and programmatically simulating computational stress." },
                { strong: "Network Components:", text: "For emulation purposes and the goal of capturing the complete E2E journey, I integrated Network Spies (using TCP DUMP), Network Loaders (utilizing iperf3) to track package flow and simulate network conditions across mobile networks and backhauls. This generates insights to identify the root cause of a service quality degradation within the laboratory set-up. Such input and knowledge was afterwards used to design and implement solutions for real scenarios." }
            ]
        },
        {
            title: "Architecture Decisions",
            list: [
                {
                    strong: "Kubernetes:",
                    text: "Selected for the core engine to ensure high availability, easy scaling of microservices, and seamless integration with enterprise cloud-edge deployments."
                },
                {
                    strong: "Clickhouse:",
                    text: "Chosen over traditional relational databases for its exceptional write throughput and fast analytical querying capabilities required for high-volume time-series telemetry."
                },
                {
                    strong: "OpenTelemetry:",
                    text: "Adopted to prevent vendor lock-in and standardize data collection (metrics, logs, traces) across heterogeneous edge applications."
                },
                {
                    strong: "Kafka:",
                    text: "Implemented as the messaging backbone to decouple real-time data ingestion from post-processing, ensuring resilience."
                },
                {
                    strong: "Redis:",
                    text: "Used as an in-memory cache to enable fast-response querying and state management for external systems that orchestrate corrective actions."
                }
            ]
        },
        {
            title: "Results",
            content: "Successfully demonstrated adaptive workload placement in a enterprise Proof-of-Concept with SAP and T-Systems. SAP's APEIRORA stack successfully queried the SeQaM API to dynamically rank and place workloads across the cloud-edge continuum, which was showcased at the General Assembly 8ra Community."
        },
        {
            title: "Lessons Learned",
            content: "Designing for telemetry ingestion requires strict data homogenization at the edge, OTEL is suitable for generating slow logs, but not for real-time processing. Distributed synchronized collectors and event orchestrators are far more efficient for real-time data processing than centralizing raw data. By standardizing the input schemas early via OpenTelemetry, I avoided massive bottlenecks in the core engine, proving that standardizing data contracts is as critical as the infrastructure itself."
        }
    ]
};

export const greenShiftData = {
    id: "greenshift",
    title: "GreenShift",
    subtitle: "Architecting ESG Compliance and CO2 Transparency for Virtualized Workloads",
    overview: "With the enforcement of the EU's Corporate Sustainability Reporting Directive (CSRD), enterprise datacenters and IT application owners must report their environmental impact. GreenShift is a software-defined energy attribution platform designed for KVM-based systems that successfully bridges the \"passthrough gap\" between physical hypervisors and isolated Kubernetes pods, estimating service-level energy consumption and carbon footprints.",
    role: "Lead Systems Architect & Product Owner",
    roleDescription: "I defined the system's architecture, technical feasibility, software components, system specifications and integration guidelines. I designed the communication bridge between physical hypervisors and isolated Kubernetes pods. I specified the product roadmap, breaking the engineering effort into a strict, three-phase agile delivery plan. I coordinated the integration of Carbon and Energy models with established state-of-the-art methodologies. I also coordinated the technical management with the stakeholders",
    techStack: ["KVM Virtualization (Proxmox/OpenNebula/OpenStack)", "eBPF", "RAPL Interfaces", "Kubernetes", "Grafana", "Prometheus", "Thanos", "Kafka", "REST API"],
    sections: [
        {
            title: "Problem",
            content: "Enterprise datacenters lacked off-the-shelf tooling to attribute physical host power consumption to isolated, containerized workloads running inside virtual machines on top of multi-tenant datacenter infrastructure. This \"passthrough gap\" prevented datacenter providers from offering transparent \"Energy & CO2-as-a-Metric\" reporting required for modern ESG compliance."
        },
        {
            title: "Requirements",
            list: [
                {
                    strong: "Functional Requirements:",
                    text: "Read physical hardware sensors and cross-reference with grid carbon intensity; Pass energy budgets securely from the hypervisor to the guest VM; Attribute total guest VM energy to individual Kubernetes Pods and Namespaces; Expose aggregated carbon metrics via a REST API."
                },
                {
                    strong: "Non-functional Requirements:",
                    text: "Extremely low system overhead (cannot degrade host performance); Secure communication across the hypervisor boundary; Avoidance of vendor lock-in for future hardware compatibility."
                }
            ]
        },
        {
            title: "System Functionality",
            list: [
                { strong: "Host Telemetry & Carbon Agent (DC Agent).", text: "An agent running directly on the hypervisor (Datacenter Agent) that utilizes BPF probes to read physical hardware sensors. This agent does not just calculate raw power, but instead it incorporates both an Energy Model and a Carbon Model. This allows the system to cross-reference real-time energy consumption with grid carbon intensity to estimate CO2 emissions." },
                { strong: "Passthrough Pipeline.", text: "To securely cross the hypervisor boundary, I defined a custom communication bridge to stream the real-time energy and carbon data from the host directly into the isolated guest environment." },
                { strong: "In-VM Guest Attributor.", text: "A lightweight agent deployed within the virtual machine. It ingests the total energy and carbon data provided by the Host Agent and uses a Pod Energy Model to attribute it to individual Kubernetes Pods." },
                { strong: "Green Core.", text: "A Core module aggregates energy from PDUs and hypervisors to generate the attribution model." }
            ]
        },
        {
            title: "Architecture Decisions",
            list: [
                {
                    strong: "eBPF:",
                    text: "Chosen for the Host Agent because it provides safe, low-overhead observability directly at the kernel level without requiring kernel modifications."
                },
                {
                    strong: "Statistical Sampling vs. Exact Tracking:",
                    text: "I decided to enforce statistical sampling rather than tracking sub-millisecond context switches; the trade-off was a minor, acceptable margin of error in exchange for preserving system stability and performance."
                },
                {
                    strong: "Deferred GPU Tracking:",
                    text: "I scoped the MVP to focus only on CPU/Memory, intentionally deferring GPU tracking because shared-GPU environments lack standard cross-vendor APIs, avoiding early vendor lock-in."
                }
            ]
        },
        {
            title: "Results",
            content: "Successfully delivered a viable, low-overhead architectural blueprint and MVP intalled in the datacenter of o company. The system was initially validated in a Proof-of-Concept in partnership with OpenNebula, and then a product version was installed within the infrastructure of Reply."
        },
        {
            title: "Lessons Learned",
            content: "In observability, absolute precision can be the enemy of system stability. Accepting a statistical sampling approach instead of enforcing exact millisecond tracking was a critical compromise that saved the host from CPU starvation, highlighting that architectural success often relies on knowing what *not* to build."
        }
    ]
};

export const mapekData = {
    id: "mapek",
    title: "MAPE-K Edge AI",
    subtitle: "Self-Healing Infrastructure & Closed-Loop Control for Edge AI",
    overview: "Performance-sensitive Edge AI applications, such as real-time computer vision, require strict latency guarantees that volatile mobile networks often disrupt. To move beyond passive monitoring, I architected a Closed-Loop Intelligent Controller based on the MAPE-K (Monitor-Analyze-Plan-Execute-Knowledge) framework, dynamically mitigating bottlenecks to maintain strict End-to-End Service Quality.",
    role: "Lead Systems Architect & Product Owner",
    roleDescription: "I designed the autonomous control architecture and the MAPE-K feedback loop. I specified the API contracts for the decoupled Service Planner and Recommender Modules. I coordinated cross-functional work packages integrating AI models, telemetry agents, and network infrastructure. I reviewed the optimization guardrails to ensure window-based stability.",
    techStack: ["Autonomous Systems", "MAPE-K Control Loops", "5G/Wi-Fi Telemetry", "Distributed Tracing", "Edge Computing", "Containerized AI Modules"],
    sections: [
        {
            title: "Problem",
            content: "Edge AI workloads were suffering from severe degradation due to unpredictable network latency and constrained edge server GPU resources. Passive monitoring alerted operators to failures but couldn't react fast enough, requiring an autonomous system to detect, diagnose, and resolve bottlenecks in real-time."
        },
        {
            title: "Requirements",
            list: [
                {
                    strong: "Functional Requirements:",
                    text: "Ingest real-time metrics from distributed edge clusters and network providers; Estimate network and inference latency using AI-powered recommender models; Trigger dynamic network path selection (e.g., between two 5G providers) or workload migrations; Execute mitigation actions while treating the core application as a black box."
                },
                {
                    strong: "Non-functional Requirements:",
                    text: "Sub-second decision and execution latency; Decoupled and pluggable AI models; Resilience against partial metric data loss."
                }
            ]
        },
        {
            title: "System Functionality",
            list: [
                { strong: "SeQaM.", text: "A service quality manager that runs on the edge clusters and collects, aggregates and correlates distributed metrics to identify the root cause of service quality degradation." },
                { strong: "SP Core.", text: "Acts as the centralized brain of the system. It is responsible for retriving service quality data from SeQaM and employing AI-powered models to estimate network and processing (inference) latency if using a certain network provider or edge cluster to determine the most suitable combination that ensures the best service quality for the Edge AI workloads." },
                { strong: "SP Agent.", text: "A distributed agent that runs on the client side and interacts with the Core to implement the mitigation actions on the application, while keeping it as a black box." }
            ]
        },
        {
            title: "Architecture Decisions",
            list: [
                {
                    strong: "MAPE-K Framework:",
                    text: "Selected because it provides a proven, structured methodology for building autonomous, self-healing systems that clearly separates concerns (monitoring vs. planning vs. execution)."
                },
                {
                    strong: "Containerized Recommender Modules:",
                    text: "I chose to deploy the AI decision engines as decoupled containers with strict API contracts, rather than hardcoding the logic. This trade-off added slight network latency but allowed data scientists to update AI models independently without system downtime and accelerating the system implementation time."
                },
                {
                    strong: "Window-Based Stability Tracking:",
                    text: "I opted to prioritize P95/P99 latency over per-request tracking. Tracking every request was computationally unfeasible; aggregating by time-windows drastically reduced overhead while maintaining service quality guarantees."
                }
            ]
        },
        {
            title: "Results",
            content: "Successfully deployed the closed-loop controller in a Federated Edge Platform distributed across Europe in partnership with IONOS. The system demonstrated autonomous diagnosis and sub-second mitigation of network bottlenecks, preserving Edge AI inference latency."
        },
        {
            title: "Lessons Learned",
            content: "When implementing autonomous control loops, the \"Execute\" phase must be completely decoupled from the application logic. By treating the AI application as a black box and acting purely on infrastructure and network routing, I ensured the control loop could scale generically across different workloads without requiring custom application rewrites."
        }
    ]
};

export const ceaData = {
    id: "cea",
    title: "Configurable Edge Application (CEA)",
    subtitle: "Designing a Distributed Edge Load Emulator",
    overview: "Testing the performance of next-generation cloud-edge infrastructure requires reliably emulating realistic, highly variable workloads. The Configurable Edge Application (CEA) is a cross-platform, distributed edge load emulator designed to generate controlled computational and network loads across Linux servers, Raspberry Pis, and mobile OS environments.",
    role: "Systems Architect",
    roleDescription: "I designed the scalable, three-tier distributed architecture separating orchestration from execution. I specified the product requirements, including dynamic topologies and customizable load profiling. I coordinated the development by breaking down the architecture into actionable Epics and User Stories for backend, infrastructure, and observability.",
    techStack: ["OpenTelemetry", "C#", "Python", "Distributed Systems", "Containerized Load Testing", "Cross-Platform Compatibility"],
    sections: [
        {
            title: "Problem",
            content: "Current edge infrastructure providers lack a reliable way to stress-test distributed edge nodes under realistic conditions. They needed a tool that could instantly deploy across heterogeneous hardware, mimic specific application profiles (like ML video processing or V2I messaging), and coordinate client-server load generation acrross federated infrastructure."
        },
        {
            title: "Requirements",
            list: [
                {
                    strong: "Functional Requirements:",
                    text: "Provide a REST endpoint to globally start/stop client-server load operations; Support dynamic 1-to-N pairings (multiple clients targeting one server); Generate customizable CPU loads (synthetic 'Bogo' operations) and network traffic; Collect granular tracing isolating CPU processing time from network transit time."
                },
                {
                    strong: "Non-functional Requirements:",
                    text: "Cross-platform compatibility (Linux, RPi OS, Android/iOS); High scalability to emulate thousands of concurrent edge clients; Real-time reactive communication between global and local managers."
                }
            ]
        },
        {
            title: "System Functionality",
            list: [
                { strong: "Global Manager (GloM).", text: "Acts as the centralized brain of the testing suite. Exposes a REST API endpoint to initiate or stop client-server operations across specified hosts globally." },
                { strong: "Distributed Manager (DiM).", text: "Implements node-level lifecycle management. Deployed locally on client/server hosts, the DiM connects to the GloM via reactive channels. It tracks underlying application instances, knows their state (busy/free), and deploy or kills instances on demand." },
                { strong: "The Worker Instances (CEA).", text: "The dynamic execution units that generate the load. Instances provide a uniform interface for management and wait for DiM commands to act either as a client generating load or as a server processing requests." }
            ]
        },
        {
            title: "Architecture Decisions",
            list: [
                {
                    strong: "Three-Tier Distributed Architecture:",
                    text: "I chose to split the system into a Global Manager (GloM), Distributed Manager (DiM), and Workers. This prevented a monolithic bottleneck and ensured node-level lifecycle management could survive network partitions with the global orchestrator."
                },
                {
                    strong: "WebSockets for Infrastructure Control:",
                    text: "Selected persistent WebSockets over HTTP polling for the GloM-to-DiM connection to allow instant, low-latency push commands for starting/stopping massive distributed tests."
                },
                {
                    strong: "OpenTelemetry for Observability:",
                    text: "Implemented over custom logging solutions because it natively supports distributed trace context propagation, which was mandatory for correlating client requests with server processing times."
                }
            ]
        },
        {
            title: "Results",
            content: "Successfully delivered the architecture to the development team. The system reliably simulated concurrent complex workloads, validating the underlying cloud-edge infrastructure before production launch."
        },
        {
            title: "Lessons Learned",
            content: "I realized that when building distributed testing tools, the orchestrator (Global Manager) must never manage the micro-state of individual workers. Delegating the lifecycle management to local Distributed Managers (DiM) proved crucial; it kept the central API highly responsive and drastically reduced the blast radius if an individual worker crashed."
        }
    ]
};

export const wsnData = {
    id: "wsn",
    title: "Wireless Sensor Network for Environmental and Pollutant Monitoring",
    subtitle: "From Requirements to Real Product",
    overview: "Operating in highly distributed and harsh environments requires rock-solid hardware and software. I architected and led the development from concept to product of a scalable, RTOS-based embedded platform for remote environmental monitoring, leveraging TinyML for sensor calibration and an event-driven architecture with resilient cellular/Wi-Fi failovers.",
    role: "Embedded IoT Engineer & Technical Lead",
    roleDescription: "I designed the event-driven, multi-threaded C++ firmware architecture in FreeRTOS. I specified the abstracted Communication Handler for resilient telemetry and failovers. I coordinated the full product lifecycle from requirements to hardware prototyping and deployment.",
    techStack: [
        "C/C++",
        "FreeRTOS",
        "Embedded Systems Architecture",
        "Hardware Prototyping",
        "I2C & UART Multiplexing",
        "Cellular IoT & MQTT/HTTP"
    ],
    sections: [
        {
            title: "Problem",
            content: "Remote environmental monitoring stations suffered from blocked execution threads, data drift from raw sensors, and frequent offline periods due to volatile cellular networks. A new firmware architecture was required that could handle concurrent I/O asynchronously, self-heal network drops, and apply machine learning calibration directly on the edge."
        },
        {
            title: "Requirements",
            list: [
                {
                    strong: "Functional Requirements:",
                    text: "Asynchronously poll environmental sensors without blocking the RTOS scheduler; Dynamically detect and initialize I2C sensors via a multiplexer; Apply on-device calibration (Linear Regression, ML models) prior to transmission; Perform OTA (Over-The-Air) firmware updates with automatic rollback."
                },
                {
                    strong: "Non-functional Requirements:",
                    text: "Fault-tolerant connectivity with automated WiFi/Cellular failover; Thread-safe peripheral access (UART/I2C) to prevent bus collisions; Extreme power efficiency using RTC-aware sampling constraints."
                }
            ]
        },
        {
            title: "System Functionality",
            list: [
                { strong: "Dynamic Sensor Hub & Multiplexing:", text: "I integrated a I2C multiplexer and designed a dynamic bus-scanning algorithm. This allows the firmware to automatically detect, initialize, and pull configuration parameters for dynamically attached sensors on the fly, making hardware revisions seamless." },
                { strong: "Smart Edge Calibration:", text: "Raw environmental data often drifts. I proposed to implement an on-device calibration engine that applies mathematical corrections, including configurable Offsets, Linear Regression, Multivariate Linear Regression models, and neural networks, before the data is ever packaged for the cloud." },
                { strong: "Time-Windowed Sampling Constraints:", text: "To optimize power and data usage, I designed an RTC-aware constraint engine that dynamically adjusts or blocks sensor sampling based on the time of day (e.g., Morning vs. Midnight) or the day of the week (Weekday vs. Weekend). The window is independent for each sensor port in the platform, allowing maximal functional flexibility." }
            ]
        },
        {
            title: "Architecture Decisions",
            list: [
                {
                    strong: "FreeRTOS:",
                    text: "Selected to utilize preemptive multitasking, queues, and mutexes, which were necessary to decouple sensor polling from high-latency cellular network transmissions."
                },
                {
                    strong: "Event-Driven ISR Scheduling:",
                    text: "I chose to use hardware timers and Interrupt Service Routines (ISRs) to simply queue tasks rather than execute them. This trade-off slightly increased RAM usage for queues but guaranteed deterministic timing for the core system ticks."
                },
                {
                    strong: "Abstracted OOP Hardware Layer:",
                    text: "I used C++ OOP principles to abstract sensor ports. While it added minor overhead compared to pure C structs, it allowed the hardware to scale and swap sensors dynamically without requiring complete firmware rewrites."
                },
                {
                    strong: "Dual-Modem Failover State Machine:",
                    text: "I implemented a strict hardware/software watchdog and failover loop. Why? Because manual resets in remote environments (like the Galapagos) are impossible. The system aggressively tries to recover cellular, falls back to WiFi, and finally triggers a hard OS reboot."
                }
            ]
        },
        {
            title: "Results",
            content: "The platform was successfully launched and deployed nationwide in 2022 and is still in operation, including critical installations in the Galapagos Islands. The system continuously monitors pollutants in real-time with exceptional uptime. The novel architecture and firmware approach led to several filed patents."
        },
        {
            title: "Lessons Learned",
            content: "In embedded systems deployed to inaccessible locations, you must code for the absolute worst-case hardware failure. Assuming the cellular modem will lock up or the I2C bus will stall forced me to implement aggressive mutex guarding and hardware watchdogs. Resilience isn't an add-on feature; it is the core foundation of remote IoT architecture."
        }
    ]
};

export const eeaaRtosData = {
    id: "eeaa-rtos",
    title: "Edge-aware Tasks RTOS",
    subtitle: "Portable RTOS Abstraction for Edge-Cloud Task Orchestration",
    overview: "Edge-aware Tasks RTOS is a framework designed for modeling, creating, and observing task pairs with a portable RTOS abstraction layer. It wraps the RTOS primitives behind a stable interface (EEAA) adding task metadata, monitoring helpers, and client/server orchestration utilities, solving the problem of how to represent work split between local and remote execution contexts predictably on constrained devices.",
    role: "Embedded Systems Architect and SW Developer",
    roleDescription: "I designed the system architecture and the portable RTOS abstraction layer, and then fully implemented it (coding, testing, CI/CD, documentation). I specified the client/server task pairing model and the decoupled offloader controller routing logic. I orchestrated the framework's core modules including the EEAA task manager and the runtime facade to ensure product-grade lifecycle control.",
    techStack: ["C", "FreeRTOS", "ESP32", "Embedded Systems", "RTOS Architecture", "Distributed Tasks"],
    sections: [
        {
            title: "Problem",
            content: "Embedded edge AI systems struggle to model work that is split between a local client and a remote server role. Creating, cleaning up, and monitoring these cooperative task relationships predictably on constrained devices is difficult, often leading to resource leaks, inconsistent states during failures, and non-portable code locked to specific RTOS implementations."
        },
        {
            title: "Requirements",
            list: [
                {
                    strong: "Functional Requirements:",
                    text: "Provide a portable RTOS abstraction for tasks, queues, and mutexes; Model tasks with client (local) and server (remote/cooperating) roles exchanging messages via queues; Maintain real-time monitoring metadata (WCET, latency, host info) for tasks; Provide a product-grade runtime facade to start/stop the manager."
                },
                {
                    strong: "Non-functional Requirements:",
                    text: "Ensure zero resource leaks with strict cleanup correctness and rollback mechanisms; Isolate RTOS-specific implementation to guarantee portability; Maintain predictable resource usage with explicit heap allocations; Support low-latency hot monitoring alongside descriptive cold metadata."
                }
            ]
        },
        {
            title: "System Functionality",
            list: [
                { strong: "Application / Runtime Facade:", text: "Owns the developer-facing runtime lifecycle, exposing start/stop controls and diagnostics without exposing internal task management." },
                { strong: "Offloader Controller:", text: "Evaluates routing policies and applies LOCAL or REMOTE routing for client-side tasks based on task-manager snapshots." },
                { strong: "EEAA Task Manager:", text: "The core engine that owns task creation policy, runtime object lifetimes, stores monitoring state, and resolves runtime relationships." },
                { strong: "Portable RTOS & Board Layer:", text: "Maps abstract API calls to native FreeRTOS primitives and isolates board-specific hardware details (e.g., cycle counters)." }
            ]
        },
        {
            title: "Architecture Decisions",
            list: [
                {
                    strong: "Decoupled Task Manager:",
                    text: "Selected to coordinate creation, rollback, and monitoring without directly exposing RTOS APIs, ensuring that any failed creation step cleanly rolls back to prevent memory leaks on constrained edge devices."
                },
                {
                    strong: "Explicit Queue-based Messaging:",
                    text: "Chosen over hidden shared memory protocols to enforce a strict boundary between client and server roles, making data flow observable and deterministic."
                },
                {
                    strong: "Dual-State Monitoring (Hot vs. Cold):",
                    text: "Implemented separate low-latency \"hot\" runtime state arrays and descriptive \"cold\" metadata. They are synced via task indices to allow fast execution paths while still providing rich diagnostic telemetry."
                },
                {
                    strong: "Portability Abstraction:",
                    text: "Designed the port_interface_types and port_rtos layers to ensure the core task manager remains completely RTOS-agnostic, allowing future integration and broad RTOS support."
                }
            ]
        },
        {
            title: "Results",
            content: "Successfully developed and open-sourced a robust, production-ready RTOS framework. Delivered selectable runnable demos (e.g., happy path, hello-world) that demonstrate predictable edge-task creation, queue-based orchestration, and resilient lifecycle teardown."
        },
        {
            title: "Lessons Learned",
            content: "When designing frameworks for constrained devices, failure recovery is more important than the happy path. Ensuring that task creation rolls back perfectly upon failure required meticulous resource ownership design. Enforcing explicit messaging queues, rather than shared memory, vastly improves system observability and testability in embedded edge environments."
        }
    ]
};

export const secondBrainData = {
    id: "second-brain",
    title: "Second Brain",
    subtitle: "A Governed Knowledge Platform for Multi-Agent Workflows",
    overview: "AI agents forget everything between sessions, and the usual fix, a vector store bolted onto a chatbot, produces answers nobody can verify and memory that any agent can silently corrupt. Second Brain is a knowledge management platform built for agentic workflows: it turns heterogeneous documents into a structured, versioned knowledge graph, delegates only the judgement-heavy work to a pluggable AI agent, and exposes a governed, auditable contract so any number of downstream agents can ground their work in knowledge where every answer traces back to the exact source line.",
    role: "Systems Architect & Lead Engineer",
    roleDescription: "I defined the end-to-end architecture, the agent orchestration model and the safety rules the platform enforces in code. I specified the note, skill and knowledge-access contracts that agents must honour, designed the governance model separating what agents may propose from what they may apply, and set the evaluation methodology: measured baselines, benchmarks and regression guards proven to fail when the defect is reintroduced. I drove delivery through phased, independently shippable increments, each recorded in a decision log written to be picked up cold by a new engineer or agent.",
    techStack: ["Agentic AI", "Claude Code", "OpenClaw", "Python", "FastAPI", "SQLite", "Knowledge Graphs", "Local Embeddings (Ollama)", "JSON Schema Contracts", "OKF / Markdown"],
    metrics: [
        { value: "2,211", label: "Automated tests", detail: "Including guards that fail the build on safety regressions" },
        { value: "100%", label: "Answer provenance", detail: "Every answer cites the source note and line" },
        { value: "68→100%", label: "Cross-document reach", detail: "Queries that find all relevant notes, not only the obvious one" },
        { value: "−75%", label: "Agent calls", detail: "273 → 69 per book via batch packing, ~6.5M tokens saved" },
        { value: "0", label: "Metered API paths", detail: "Subscription-only by construction, checkable at runtime" },
        { value: "13s→47ms", label: "Hot query path", detail: "Algorithmic rework, proven equivalent by replay" }
    ],
    capabilities: [
        {
            area: "Agent Orchestration",
            title: "Pluggable AI agent for judgement tasks"
        },
        {
            area: "Sessions & Context",
            title: "Scoped, short-lived agent sessions"
        },
        {
            area: "Memory & Knowledge",
            title: "Verifiable long-term memory"
        },
        {
            area: "Security",
            title: "Untrusted input is data, not instructions"
        },
        {
            area: "Authorization & Governance",
            title: "Agents propose, governed paths apply"
        },
        {
            area: "Evolving Workflows",
            title: "A knowledge model that grows itself"
        },
        {
            area: "Scalability",
            title: "Isolated tenants, measured performance"
        },
        {
            area: "Generalization",
            title: "Domain-neutral by design"
        }
    ],
    sections: [
        {
            title: "Problem",
            content: "Organisations adopting multi-agent workflows hit the same wall: agents have no durable, shared memory they can trust. Context windows forget between sessions, retrieval over raw files returns fragments without provenance, and letting autonomous agents rewrite their own memory lets errors compound silently. On top of that, every model call can become an uncontrolled, metered cost. The need was a knowledge layer that many agents can read from safely, that improves over time without drifting, and whose every answer can be verified by a human in seconds."
        },
        {
            title: "Requirements",
            list: [
                {
                    strong: "Functional Requirements:",
                    text: "Ingest heterogeneous sources (papers, books, web pages, meeting notes, decision records, transcripts, AI conversations) into one consistent note shape; extract concepts, claims, evidence and open questions and link them across documents; answer questions with line-level citations; detect gaps, duplicates and drift; support multiple isolated collections with their own configuration and agent."
                },
                {
                    strong: "Non-functional Requirements:",
                    text: "No metered model spend under any configuration; graceful degradation when the agent is unavailable; full auditability of agent-initiated changes; rebuildability of all derived state from the canonical notes; tenant isolation; defence against prompt injection from fetched content; generalization to any domain without code changes."
                }
            ]
        },
        {
            title: "Knowledge Pipeline",
            content: "Each stage is derived from the one before and never merged with it, so a bad import is always recoverable by stepping back.",
            steps: [
                { name: "Raw source", text: "The original file or URL, exactly as provided, after injection scanning and quarantine." },
                { name: "Converted Markdown", text: "PDFs and documents turned into text in a sandboxed converter, with table and math repair." },
                { name: "Templated Markdown", text: "Poured into the template for its source type." },
                { name: "Wiki note", text: "The brain-keeper produces a note with eight mandatory sections and full provenance." },
                { name: "Knowledge graph", text: "Concepts, claims, evidence and questions, linked across documents and tagged from a closed vocabulary." },
                { name: "Maintained layer", text: "Staleness, duplicates, drift and review history, curated nightly." },
                { name: "Governed answers", text: "A versioned, audited, read-only contract for downstream agents." }
            ]
        },
        {
            title: "System Functionality",
            list: [
                { strong: "Ingestion & Normalization:", text: "A single entry point converts, templates, normalizes and ingests any supported source, keeping provenance attached at every hop. Long documents such as full books are split into chapters by table of contents and ordinal detection, processed in parallel batches, and checked for 100% source coverage." },
                { strong: "Knowledge Graph & Retrieval:", text: "Four additive retrieval routes (shared terms, closed-vocabulary tags with aliases, concept hierarchy, and optional local passage embeddings) with a confidence gate that declines off-topic questions rather than guessing." },
                { strong: "Brain-keeper Agent:", text: "Asynchronous, cancellable agent jobs for extraction, tagging, duplicate adjudication, drift explanation, gap interpretation and answer writing, each validated against its schema before anything reaches the graph." },
                { strong: "Governed Agent Contract:", text: "Four stable endpoints (contract, answer, task context, read next) that downstream agents use to ground their work, with explicit scope, stated confidence, warnings and an audit record per call." },
                { strong: "Review & Maintenance:", text: "A human-in-the-loop review queue, mechanical repair routes that never write prose, lint against the note contract, and scheduled per-workspace maintenance." },
                { strong: "Operations:", text: "Health, integrity, billing-safety and embedding-staleness checks; backup, restore and isolated restore rehearsal; governance audit and quarantine inspection." }
            ]
        },
        {
            title: "Architecture Decisions",
            list: [
                { strong: "Agents only where the decision is semantic:", text: "Anything reachable by counting, thresholding or traversal stays deterministic. This kept the read path in milliseconds and confined model cost and non-determinism to the tasks that genuinely need judgement." },
                { strong: "Agent CLIs over model SDKs:", text: "Work is delegated to agent tools running on existing subscriptions rather than to metered APIs. There is no code path to a paid API at all, which turns a cost policy into a guarantee enforced by tests." },
                { strong: "From caller hand-off to a standing brain-keeper:", text: "An early in-process model runtime behaved like an autonomous agent inside a service meant to be deterministic. It was replaced first by a stateless caller hand-off, then by a per-workspace brain-keeper behind a job API, with every in-process runtime deleted." },
                { strong: "Markdown as the source of truth:", text: "Chosen over a database-first design so knowledge stays human-readable, diffable and portable, and so any corruption in derived state is fixed by rebuilding, never by patching the database." },
                { strong: "Closed vocabulary with aliases over free tagging or label embeddings:", text: "Label embeddings scored synonyms like “RTOS” and “real-time operating system” as less alike than terms that must stay apart. Declared aliases solve synonymy reliably, including private abbreviations no model has seen." },
                { strong: "Measure before scaling out:", text: "SQLite was kept over Neo4j and brute-force scoring over a vector database after load tests showed headroom, with explicit caps and a documented trigger for when to move." }
            ]
        },
        {
            title: "Results",
            content: "The platform runs multiple isolated knowledge bases across books, research papers, web content, meeting notes and long AI conversations, including a single transcript of about 745,000 characters. On its retrieval benchmark it reaches 83% top-1 and 95% top-3 accuracy with 100% provenance, and cross-document queries went from 68% to 100% coverage once vocabulary-driven expansion was added. Batch packing cut agent calls per book by 75%, nightly maintenance costs zero agent calls on an unchanged collection, and 2,211 automated tests, including guards for billing safety, self-containment and domain neutrality, protect every guarantee."
        },
        {
            title: "Lessons Learned",
            content: "In agentic systems the most dangerous failure looks like success: a silent fallback, a confident zero from a broken join, or a benchmark that cannot see the change it is cited for. I made those failures visible by design, with explicit warnings, capability states that separate “configured” from “verified”, and regression guards proven to bite by reintroducing the defect. The second lesson is that agent autonomy must be granted per operation rather than per agent: additive changes can be automated, while anything that changes the meaning of existing knowledge stays behind a governed, human-approved path."
        }
    ]
};
