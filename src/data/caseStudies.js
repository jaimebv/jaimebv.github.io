export const seqamData = {
    id: "seqam",
    title: "Service Quality Manager",
    subtitle: "Enterprise-Grade Observability & Orchestration for the Edge-Cloud",
    overview: "In decentralized edge computing, ensuring consistent end-to-end service quality across heterogeneous infrastructures is a massive challenge. Traditional observability tools fail to correlate multi-source information across user devices, 5G and Wi-Fi networks, and edge servers simultaneously. SeQaM is a scalable, multi-tier telemetry and orchestration platform built to solve this: it runs synchronized load experiments across the continuum, traces every action end to end, and turns the results into data-driven workload placement decisions, serving as the foundational data engine for modern edge environments.",
    role: "Lead Systems Architect & Product Owner",
    roleDescription: "I owned the product from vision to enterprise proof-of-concept: I analysed requirements with stakeholders, scoped the MVP, and shaped a phased roadmap that added capabilities step by step, managing and prioritising the backlog through agile sprints. As architect, I designed the end-to-end decoupled architecture, separating Central, Distributed, and Network components, and specified the strict JSON data schemas and API contracts that let external services interact with the system. I translated complex infrastructure requirements into actionable Kubernetes deployment epics, and reviewed and integrated the intelligent recommender system used for workload placement.",
    techStack: ["Kubernetes", "OpenTelemetry", "ClickHouse", "Prometheus", "Grafana", "RabbitMQ", "Kafka", "Redis", "Nginx", "Python / FastAPI", "REST APIs", "5G"],
    capabilities: [
        { area: "Product Ownership", title: "Product vision, phased roadmap and prioritised backlog" },
        { area: "Observability", title: "Correlated telemetry from device to edge to network" },
        { area: "Distributed Tracing", title: "Every experiment traced end to end" },
        { area: "Experiment Orchestration", title: "Synchronised load scenarios across the continuum" },
        { area: "5G & Network Insight", title: "Radio, throughput and router telemetry in one view" },
        { area: "Workload Placement", title: "Clusters ranked by latency, energy and CO2" },
        { area: "API & Contracts", title: "Schema-first APIs for external orchestrators" },
        { area: "Stakeholder Management", title: "Enterprise PoC with industry partners" }
    ],
    sections: [
        {
            title: "Problem",
            content: "Deploying systems at the edge requires service quality guarantees, but 5G networks and edge worker nodes behave unpredictably. Traditional monitoring tools were unable to provide correlated, fine-grained, end-to-end visibility across user equipment, mobile networks, and edge worker nodes. There was a critical need for a system that could not only monitor these diverse environments but also trigger synchronized load tests and collect deterministic telemetry, allowing application owners and infrastructure providers to pinpoint service degradations and decide where workloads should run."
        },
        {
            title: "Requirements",
            list: [
                {
                    strong: "Functional Requirements:",
                    text: "Collect and aggregate telemetry from user equipment, networks, and edge servers; execute sequential or concurrent load generation (CPU, GPU, memory, network) with static, random, increasing or decreasing profiles; emulate network conditions such as bandwidth limits; expose aggregated data via an extensible REST API for external orchestrators; dynamically rank optimal clusters for workload placement."
                },
                {
                    strong: "Non-functional Requirements:",
                    text: "Enterprise-grade scalability for high-throughput time-series and trace data; millisecond-resolution experiment timelines executed against a shared start time across nodes; decoupled and highly available architecture; minimal footprint for edge agents deployed on constrained devices; deployable on Kubernetes, containers or bare-metal virtual machines."
                }
            ]
        },
        {
            title: "Experiment Lifecycle",
            content: "An experiment is a declarative timeline of events. SeQaM turns it into coordinated actions on every node and a fully traced, analysable result.",
            steps: [
                { name: "Self-registration", text: "Agents on devices, edge nodes and network elements announce themselves and join the scenario dynamically." },
                { name: "Experiment definition", text: "A JSON timeline of commands such as CPU, GPU, memory or network load, bandwidth limits, workload migration or radio power changes." },
                { name: "Health check", text: "Every target component is verified before anything starts, so an experiment never runs half-deployed." },
                { name: "Synchronized dispatch", text: "The plan and a shared absolute start time are pushed to each agent, which then executes its events on its own clock." },
                { name: "Traced execution", text: "Each experiment is a parent trace and every action a child span, propagated across all components." },
                { name: "Correlated observation", text: "Host, network, 5G radio, energy and application metrics are collected and aligned to the experiment's time intervals." },
                { name: "Analysis & placement", text: "Per-interval statistics, plots and exports feed a scoring model that ranks clusters for workload placement." }
            ]
        },
        {
            title: "System Functionality",
            list: [
                { strong: "Central Components (The Core Engine):", text: "I architected a central hub to ingest, process and serve data. Telemetry flows through an OpenTelemetry-based Main Collector into a ClickHouse database built for high-throughput time-series and traces. A central orchestration service hosts the Event Orchestrator, which manages system state and commands, and the Experiment Dispatcher, which synchronizes with the distributed event generators for automated testing workflows. A web console, dashboards and the REST API sit on top." },
                { strong: "Distributed Components (The Edge Agents):", text: "I designed lightweight agents deployed directly on User Equipment (UEs) and Edge Servers (Worker Nodes). These include a customizable Metrics Collector for host metrics (CPU, GPU, memory, pressure, temperatures, I/O, pods) and a local Event Orchestrator capable of triggering commands and programmatically simulating computational stress, including on-demand stress workloads inside Kubernetes." },
                { strong: "Network Components:", text: "To capture the complete end-to-end journey, I integrated Network Spies (based on packet capture) and Network Loaders (based on iperf3) to track traffic and simulate network conditions across mobile networks and backhauls, together with router telemetry and network emulation for bandwidth shaping. This generates insights to identify the root cause of service quality degradation in the laboratory, knowledge that was later used to design and implement solutions for real scenarios." },
                { strong: "5G & Energy Telemetry:", text: "Radio-level measurements from 5G user equipment across multiple modem vendors (signal quality, cell and round-trip time), Wi-Fi link quality, and energy readings from metered power distribution, all correlated with the same experiment timeline." },
                { strong: "Workload Placement Engine:", text: "Benchmark clients on user devices measure every candidate worker, separating network time from compute time. A weighted cost model over latency, compute, energy, CO2 and CPU pressure turns the results into node probabilities and ranked clusters, exposed through a placement API." },
                { strong: "Flexible Deployment:", text: "The same scenario can be deployed with generated container compositions (including offline export for isolated sites), on Kubernetes across a central and several side clusters, or onto automatically provisioned virtual machines. A reverse relay lets the central platform reach devices behind NAT, such as local 5G modems." }
            ]
        },
        {
            title: "Architecture Decisions",
            list: [
                {
                    strong: "Kubernetes:",
                    text: "Selected for the core engine to ensure high availability, easy scaling of microservices, and seamless integration with enterprise cloud-edge deployments spanning a central cluster and multiple side clusters."
                },
                {
                    strong: "ClickHouse:",
                    text: "Chosen over traditional relational databases for its exceptional write throughput and fast analytical querying capabilities required for high-volume time-series telemetry and traces."
                },
                {
                    strong: "OpenTelemetry:",
                    text: "Adopted to prevent vendor lock-in and standardize data collection (metrics, logs, traces) across heterogeneous edge applications, with each experiment modelled as a trace so that every action is correlated end to end."
                },
                {
                    strong: "Distributed Scheduling over Central Triggering:",
                    text: "Instead of firing every command from the center, the dispatcher pushes the whole plan with a shared absolute start time and each agent executes locally. This removes network jitter from event timing, and clock drift across hosts is monitored and reported alongside the results."
                },
                {
                    strong: "Message Broker and Streaming, Each for Its Job:",
                    text: "A message broker with WebSockets connects components and fans live data out across API workers, while Kafka is used where it excels: decoupling high-volume trace ingestion from storage."
                },
                {
                    strong: "Redis:",
                    text: "Used as an in-memory cache for the latest metrics, live watchers and network snapshots, enabling fast-response querying and state management for external systems that orchestrate corrective actions."
                }
            ]
        },
        {
            title: "Results",
            content: "Successfully demonstrated adaptive workload placement in an enterprise Proof-of-Concept with SAP and T-Systems. SAP's ApeiroRA stack queried the SeQaM API to dynamically rank and place workloads across the cloud-edge continuum, which was showcased at the 8ra Community General Assembly."
        },
        {
            title: "Lessons Learned",
            content: "Designing for telemetry ingestion requires strict data homogenization at the edge. OpenTelemetry is well suited to traces and logs, but not to real-time processing. Distributed, synchronized collectors and event orchestrators are far more efficient for real-time data processing than centralizing raw data. By standardizing the input schemas early via OpenTelemetry, I avoided massive bottlenecks in the core engine, proving that standardizing data contracts is as critical as the infrastructure itself."
        }
    ]
};

export const greenShiftData = {
    id: "greenshift",
    title: "GreenShift",
    subtitle: "Energy & Carbon Attribution from Datacenter Power to Kubernetes Workloads",
    overview: "With the EU's Corporate Sustainability Reporting Directive (CSRD), datacenter operators and application owners must report the energy and emissions of their IT services. Yet power is only measured at the host, PDU or facility level, while many tenants share every host. GreenShift is a multi-zone attribution platform that reconciles measured infrastructure power with workload telemetry to attribute energy and carbon down to VMs, nodes, namespaces, pods, workloads and tenants, without reading any customer payload and without ever affecting the workloads it measures.",
    role: "Lead Systems Architect & Product Owner",
    roleDescription: "I own the product end to end: requirements analysis with datacenter operators and application owners, an MVP focused on CPU energy, and a multi-phase roadmap that adds capabilities progressively, from static carbon factors towards live grid intensity. I manage and prioritise the backlog, align stakeholders, and break the work into gated, independently deliverable increments. As architect, I defined the system architecture, its trust zones and the attribution method, specified the components and the cross-zone contracts that connect them, and designed the security and multi-tenancy model. I coordinated the integration of energy and carbon models with established methodologies, and designed the agentic engineering workflow that augments the team's development process.",
    techStack: ["Kubernetes", "Kafka", "PostgreSQL", "Redis", "NGINX", "Python / FastAPI", "Prometheus", "Thanos", "MinIO", "Loki", "Helm", "KVM / libvirt", "Agentic Engineering"],
    metrics: [
        { value: "10 s", label: "Attribution resolution", detail: "Epoch-aligned windows joined exactly across independent streams" },
        { value: "3", label: "Trust zones", detail: "Hypervisor, customer cluster and Master, with outbound-only links" },
        { value: "6", label: "Attribution levels", detail: "VM, node, namespace, pod, workload and tenant" },
        { value: "0", label: "Inbound ports", detail: "Opened into hypervisors or customer clusters" }
    ],
    capabilities: [
        { area: "Energy Attribution", title: "Measured PDU power split host → VM → pod" },
        { area: "Multi-Tenancy", title: "Strict data isolation between tenants" },
        { area: "Security", title: "Outbound-only zones, least privilege by default" },
        { area: "Data Integrity", title: "Explicit confidence states, nothing fabricated" },
        { area: "Carbon Accounting", title: "CO2e per pod, namespace and workload" },
        { area: "Contract-First Design", title: "Versioned, idempotent cross-zone interfaces" },
        { area: "Product Ownership", title: "MVP-first, multi-phase product roadmap" },
        { area: "Agentic Engineering", title: "Architect-led, agent-augmented delivery" }
    ],
    sections: [
        {
            title: "Problem",
            content: "Datacenter providers could not tell their customers how much energy their services actually consumed. Physical power is metered per host or per PDU outlet, but each host runs VMs for several tenants, and inside those VMs Kubernetes packs many workloads together. This attribution gap made transparent \"Energy & CO2-as-a-Metric\" reporting impossible, both for operators offering it and for application owners who need it for ESG compliance."
        },
        {
            title: "Requirements",
            list: [
                {
                    strong: "Functional Requirements:",
                    text: "Combine metered PDU power with per-VM hypervisor observations; attribute energy from host to VM, and from VM to node, namespace, pod and workload; bind every VM to exactly one tenant; deliver each customer only the data of its own VMs; compute carbon emissions from energy; expose the results through a REST API and a dashboard inside the customer's cluster."
                },
                {
                    strong: "Non-functional Requirements:",
                    text: "Zero impact on hosted workloads, even when GreenShift itself fails; no inbound ports into hypervisors or customer clusters; strict tenant isolation; no access to customer payloads, files or logs; reuse of standard open-source measurement tools rather than forks; installable by the datacenter operator from delivered artifacts, without remote access for the vendor."
                }
            ]
        },
        {
            title: "Attribution Pipeline",
            content: "Two independent measurement streams meet in exactly one place, the Master, and only the result travels back to each tenant.",
            steps: [
                { name: "PDU metering", text: "Per-outlet PDU readings are polled and summed across redundant power feeds into 10-second host power windows." },
                { name: "Hypervisor observation", text: "A lightweight agent identifies every VM on the host and its share of host power, pushing outbound only." },
                { name: "Authenticated ingestion", text: "Observations are validated against the sender's identity and published to an event stream partitioned by host." },
                { name: "Host → VM attribution", text: "Both streams are joined per host and window, and the measured energy is split proportionally, with an explicit confidence state per result." },
                { name: "Tenant-scoped delivery", text: "Each customer cluster pulls, under its own identity, only the power of the VMs it is authorised for." },
                { name: "VM → pod attribution", text: "The measured VM power is exposed inside the VM as a native power source, so a standard pod energy model attributes it to pods and workloads." },
                { name: "Reporting", text: "Long-term metrics, carbon recording rules, an App Owner API and a dashboard, all running inside the customer's cluster." }
            ]
        },
        {
            title: "System Functionality",
            list: [
                { strong: "Hypervisor Zone:", text: "Native agents on each KVM host observe per-VM power without containers or inbound ports, and push authenticated observations to the Master on a fixed cadence." },
                { strong: "GreenShift Master (Core):", text: "A gateway, an ingestion API, infrastructure and VM mappers joined over an event stream, a tenant mapper, cluster registration and a customer power service, backed by a metadata store whose per-component grants enforce who may read or write what." },
                { strong: "Customer Cluster Agents:", text: "A registration service that maintains cluster membership, an attributor that pulls and caches authorised power, a bridge that exposes it to the pod energy model, and a long-term metrics stack with carbon calculation, an App Owner API and a dashboard." },
                { strong: "Operations & Delivery:", text: "Helm-packaged customer stack for operator-led installation, structured logging across all zones, and a hardware-free Kubernetes sandbox with simulated PDUs and hypervisors that runs the full pipeline in CI." }
            ]
        },
        {
            title: "Architecture Decisions",
            list: [
                {
                    strong: "Reuse open-source measurement, never fork it:",
                    text: "Instead of building or forking a pod energy model, measured VM power is exposed to an unmodified open-source model through its native sensor interface. This keeps the platform on upstream releases and lets the customer side rely on a widely adopted model."
                },
                {
                    strong: "The Master as the single trust boundary:",
                    text: "Infrastructure data and workload data meet only in the Master. Identity is always derived from the credential, never from request fields, and customer clusters pull by their own identity rather than by naming VMs, so one tenant can never ask for another tenant's data."
                },
                {
                    strong: "Outbound-only and fail-open by design:",
                    text: "No zone opens an inbound port, and no GreenShift failure may affect VMs, scheduling or applications. When data is missing or stale the system reports it explicitly instead of reusing old values."
                },
                {
                    strong: "Exact windows over approximate correlation:",
                    text: "All sources align to epoch-based 10-second windows and are joined exactly, with clock-skew limits and bounded lateness. Approximate joins were rejected because small timing errors silently corrupt a proportional split."
                },
                {
                    strong: "Event stream partitioned by host:",
                    text: "The attribution denominator is local to a host, so partitioning by host gives ordered, parallel processing without cross-partition coordination."
                },
                {
                    strong: "Membership by revision and digest:",
                    text: "A monotonic revision detects lost updates and a content digest detects silent divergence between zones, while full snapshots can rebase the state so a cluster never deadlocks after losing its own."
                },
                {
                    strong: "Carbon that never lies by omission:",
                    text: "Carbon starts from an operator-set annual grid factor, labelled with its method on every series. If it is not configured, no carbon is reported rather than a misleading zero, and live grid intensity is designed as the next increment. GPU attribution was deliberately deferred because shared-GPU environments lack standard cross-vendor power APIs."
                }
            ]
        },
        {
            title: "Agentic Engineering",
            content: "I designed an agentic engineering workflow that is integrated into the repository and augments the team: engineers set direction and make the decisions, while AI agents take on well-defined, repeatable parts of the delivery process.",
            list: [
                { strong: "Specialised roles:", text: "Agents act in clearly separated roles, such as architecture, quality review, interoperability and implementation support, each with a narrow, well-defined responsibility." },
                { strong: "Review loops:", text: "Specifications and interfaces go through structured review cycles before implementation, so inconsistencies between components are caught on paper rather than in production." },
                { strong: "Managed backlog of deviations:", text: "Differences between the architecture and the implementation are tracked as an explicit, prioritised backlog and resolved systematically rather than left to accumulate." },
                { strong: "Architecture as the contract:", text: "Precise specifications and interface contracts give people and agents the same source of truth, which is what makes the added speed reliable." }
            ]
        },
        {
            title: "Results",
            content: "GreenShift has been installed in a partner's datacenter, where it runs against real PDU and hypervisor telemetry and attributes measured energy to the virtual machines and Kubernetes workloads of its tenants. The customer-cluster stack is delivered as a packaged release for operator-led installation, and a hardware-free sandbox reproduces the complete pipeline for continuous integration."
        },
        {
            title: "Lessons Learned",
            content: "Honest attribution matters more than flattering numbers. On a lightly loaded host most of the power is idle and hypervisor overhead, so a system that only reports per-pod energy hides most of the bill. Reporting attributed, idle and overhead energy separately, with explicit confidence states, is what makes the figures defensible in an audit. On the delivery side, agentic tooling paid off only once the architecture was the contract: precise specifications and disciplined reviews turned added speed into reliable progress instead of faster inconsistency."
        }
    ]
};

export const mapekData = {
    id: "mapek",
    title: "MAPE-K Edge AI",
    subtitle: "Self-Healing Infrastructure & Closed-Loop Control for Edge AI",
    overview: "Performance-sensitive Edge AI applications, such as real-time computer vision, require strict latency guarantees that volatile mobile networks often disrupt. To move beyond passive monitoring, I architected a Closed-Loop Intelligent Controller based on the MAPE-K (Monitor-Analyze-Plan-Execute-Knowledge) framework, dynamically mitigating bottlenecks to maintain strict End-to-End Service Quality.",
    role: "Lead Systems Architect & Product Owner",
    roleDescription: "I owned the product scope and roadmap, prioritising features against latency targets and coordinating cross-functional work packages that integrated AI models, telemetry agents, and network infrastructure with partners. I designed the autonomous control architecture and the MAPE-K feedback loop, specified the API contracts for the decoupled Service Planner and Recommender Modules, and reviewed the optimization guardrails to ensure window-based stability.",
    techStack: ["Autonomous Systems", "MAPE-K Control Loops", "5G/Wi-Fi Telemetry", "Distributed Tracing", "Edge Computing", "Containerized AI Modules"],
    capabilities: [
        { area: "Product Ownership", title: "Scope, roadmap and cross-team work packages" },
        { area: "Autonomous Control", title: "Closed-loop Monitor-Analyze-Plan-Execute cycle" },
        { area: "Edge AI Operations", title: "Latency guarantees for real-time inference" },
        { area: "Network Intelligence", title: "Dynamic selection between mobile providers" },
        { area: "Workload Mobility", title: "Automated migration between edge clusters" },
        { area: "Pluggable AI", title: "Containerised recommender models with stable APIs" },
        { area: "Stability", title: "Window-based P95/P99 guardrails" },
        { area: "Stakeholder Management", title: "Federated pilot across European edge sites" }
    ],
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
    roleDescription: "I analysed stakeholder needs and specified the product requirements, including dynamic topologies and customizable load profiling. I designed the scalable, three-tier distributed architecture separating orchestration from execution. I coordinated the development by breaking down the architecture into a prioritised backlog of Epics and User Stories for backend, infrastructure, and observability, delivered iteratively with the team.",
    techStack: ["OpenTelemetry", "C#", "Python", "Distributed Systems", "Containerized Load Testing", "Cross-Platform Compatibility"],
    capabilities: [
        { area: "Requirements Engineering", title: "From load profiles to dynamic topologies" },
        { area: "Distributed Architecture", title: "Three-tier global, local and worker design" },
        { area: "Load Emulation", title: "Configurable CPU and network load profiles" },
        { area: "Cross-Platform", title: "Linux, Raspberry Pi and mobile targets" },
        { area: "Real-Time Control", title: "Instant push commands over persistent channels" },
        { area: "Observability", title: "Processing time traced apart from network transit" },
        { area: "Scalability", title: "Built for thousands of concurrent clients" },
        { area: "Agile Delivery", title: "Architecture broken into epics and user stories" }
    ],
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
    overview: "Operating in highly distributed and harsh environments requires rock-solid hardware and software. I architected and led the development, from concept to product, of a scalable, RTOS-based embedded platform for remote environmental monitoring: a solar-powered station with hot-swappable sensor ports, on-device calibration, an event-driven firmware architecture, and self-recovering LTE, 2G and Wi-Fi connectivity.",
    role: "Embedded IoT Engineer & Technical Lead",
    roleDescription: "I led the product through its full lifecycle, from requirements analysis and early hardware prototypes to successive board revisions, nationwide deployment and continuous firmware improvements, balancing field needs against hardware and power constraints when prioritising features. Technically, I designed the event-driven, multi-threaded C++ firmware architecture in FreeRTOS and specified the abstracted Communication Handler for resilient telemetry and failovers.",
    techStack: ["C/C++", "FreeRTOS", "ESP32 (Dual-Core)", "Embedded Systems Architecture", "Hardware Prototyping", "I2C & UART Multiplexing", "LTE / 2G Cellular & Wi-Fi", "HTTP / MQTT / JSON", "Digital Signal Processing"],
    capabilities: [
        { area: "Product Lifecycle", title: "From requirements to nationwide deployment" },
        { area: "Real-Time Firmware", title: "Event-driven, multi-core RTOS design" },
        { area: "Connectivity", title: "Self-recovering LTE, 2G and Wi-Fi links" },
        { area: "Edge Calibration", title: "Regression models hot-loaded from storage" },
        { area: "Hardware Flexibility", title: "Plug-and-play, hot-swappable sensor ports" },
        { area: "Energy Efficiency", title: "Per-port power gating and time-windowed sampling" },
        { area: "Field Operations", title: "On-site web portal for live data and downloads" },
        { area: "Innovation", title: "Architecture recognised with patent filings" }
    ],
    sections: [
        {
            title: "Problem",
            content: "Remote environmental monitoring stations suffered from blocked execution threads, data drift from raw sensors, and frequent offline periods due to volatile cellular networks. A new platform was required that could handle many concurrent sensors asynchronously, recover from network drops on its own, correct sensor drift directly on the edge, and adapt to different sensor configurations without new firmware for every site."
        },
        {
            title: "Requirements",
            list: [
                {
                    strong: "Functional Requirements:",
                    text: "Asynchronously poll environmental sensors without blocking the RTOS scheduler; dynamically detect and initialize sensors attached to any port through a multiplexer; apply on-device calibration (offsets, linear and multivariate linear regression) before transmission; archive every measurement locally and transmit it to a remote backend; restrict sampling per sensor to configurable time windows; provide on-site access to live readings and stored data."
                },
                {
                    strong: "Non-functional Requirements:",
                    text: "Fault-tolerant connectivity with automatic recovery across cellular and Wi-Fi; thread-safe peripheral access (UART/I2C) to prevent bus collisions; power efficiency for an always-on, solar-powered station; a single firmware codebase across successive hardware revisions; field-configurable behaviour without reflashing."
                }
            ]
        },
        {
            title: "System Functionality",
            list: [
                { strong: "Dynamic Sensor Hub & Multiplexing:", text: "Six hot-pluggable external ports, each with its own multiplexer channel and power switch. At start-up the firmware scans every channel against a registry of known sensors, initializes whatever it finds, loads that sensor's sampling profile, and powers down empty ports. New sensor types are added through a plug-in driver pattern, making hardware revisions seamless." },
                { strong: "Multi-Parameter Sensing:", text: "Temperature, humidity, pressure, particulate matter (PM1.0, PM2.5, PM10), UV radiation, rainfall and ambient noise, plus continuous solar, battery and supply-rail power telemetry. Noise is measured by a dedicated DSP co-processor that applies standard frequency weightings and reports A-weighted equivalent sound levels." },
                { strong: "Smart Edge Calibration:", text: "Raw environmental data often drifts. A calibration engine applies per-variable models, including configurable offsets, linear regression and multivariate linear regression across a sensor's variables, before the data is ever packaged for the cloud. Models are loaded at runtime from configuration files, so a station can be recalibrated in the field without new firmware." },
                { strong: "Time-Windowed Sampling Constraints:", text: "To optimize power and data usage, I designed an RTC-aware constraint engine that enables or blocks sensor sampling based on the time of day (e.g., Morning vs. Midnight) or the day of the week (Weekday vs. Weekend). Each sensor port has its own window, and blocked ports are powered down entirely." },
                { strong: "Data Pipeline & Store-and-Forward:", text: "Readings are averaged per port with outlier rejection, archived on local storage as monthly files, and transmitted as structured JSON over HTTP, with MQTT support. A real-time clock keeps the timebase and is synchronised daily over whichever network is active, so data survives outages and remains complete on site." },
                { strong: "Field Web Portal:", text: "A physical button turns the station into a temporary, password-protected Wi-Fi access point with a local web portal for live sensor readings, monthly data downloads and clock adjustment, which switches itself off after a few minutes." }
            ]
        },
        {
            title: "Architecture Decisions",
            list: [
                {
                    strong: "FreeRTOS on a Dual-Core MCU:",
                    text: "Selected to utilize preemptive multitasking, queues, and mutexes, with tasks pinned to cores, which were necessary to decouple sensor polling from storage, the local web portal and high-latency cellular transmissions."
                },
                {
                    strong: "Event-Driven ISR Scheduling:",
                    text: "I chose to use hardware timers and Interrupt Service Routines (ISRs) to simply queue tasks rather than execute them. This trade-off slightly increased RAM usage for queues but guaranteed deterministic timing for the core system ticks."
                },
                {
                    strong: "Abstracted OOP Hardware Layer:",
                    text: "I used C++ OOP principles to abstract sensors and ports behind a common interface. While it added minor overhead compared to pure C structs, it allowed the hardware to scale and swap sensors dynamically without requiring complete firmware rewrites."
                },
                {
                    strong: "Tiered Connectivity Recovery:",
                    text: "Manual resets in remote environments (like the Galapagos) are impossible, so the Communication Handler escalates step by step: it retries, re-establishes the cellular data bearer, hard-resets the modem, can switch between cellular and Wi-Fi, and finally performs a controlled reboot."
                },
                {
                    strong: "Dedicated Acoustic Co-Processor:",
                    text: "Continuous high-rate audio filtering was moved to a separate processor that returns finished noise levels on request, keeping the main scheduler deterministic while still delivering standards-based sound measurements."
                },
                {
                    strong: "Configuration as Data:",
                    text: "Calibration models and node identity live in files on local storage, and build-time configuration is validated at compile time across hardware revisions. A field technician can recalibrate or re-identify a station without touching the firmware."
                }
            ]
        },
        {
            title: "Results",
            content: "The platform was successfully launched and deployed nationwide in 2022 and is still in operation, including critical installations in the Galapagos Islands. The system continuously monitors pollutants in real-time with exceptional uptime. The novel architecture and firmware approach led to several filed patents."
        },
        {
            title: "Lessons Learned",
            content: "In embedded systems deployed to inaccessible locations, you must code for the absolute worst-case hardware failure. Assuming the cellular modem will lock up or the I2C bus will stall forced me to implement aggressive mutex guarding, layered recovery logic and hardware modem resets. Resilience isn't an add-on feature; it is the core foundation of remote IoT architecture."
        }
    ]
};

export const eeaaRtosData = {
    id: "eeaa-rtos",
    title: "Edge-aware Tasks RTOS",
    subtitle: "Portable RTOS Abstraction for Edge-Cloud Task Orchestration",
    overview: "Edge-aware Tasks RTOS is a framework designed for modeling, creating, and observing task pairs with a portable RTOS abstraction layer. It wraps the RTOS primitives behind a stable interface (EEAA) adding task metadata, monitoring helpers, and client/server orchestration utilities, solving the problem of how to represent work split between local and remote execution contexts predictably on constrained devices.",
    role: "Embedded Systems Architect and SW Developer",
    roleDescription: "I defined the requirements and scope, designed the system architecture and the portable RTOS abstraction layer, and then fully implemented it (coding, testing, CI/CD, documentation), releasing it incrementally as an open-source framework. I specified the client/server task pairing model and the decoupled offloader controller routing logic. I orchestrated the framework's core modules including the EEAA task manager and the runtime facade to ensure product-grade lifecycle control.",
    techStack: ["C", "FreeRTOS", "ESP32", "Embedded Systems", "RTOS Architecture", "Distributed Tasks"],
    capabilities: [
        { area: "Portability", title: "RTOS-agnostic abstraction layer" },
        { area: "Task Orchestration", title: "Client/server task pairs for edge offloading" },
        { area: "Offloading", title: "Policy-based local vs. remote routing" },
        { area: "Reliability", title: "Leak-free creation with full rollback" },
        { area: "Observability", title: "Hot runtime state with cold diagnostic metadata" },
        { area: "Deterministic Messaging", title: "Explicit queue-based data flow" },
        { area: "Developer Experience", title: "Clean runtime facade and runnable demos" },
        { area: "Open Source", title: "Documented, release-ready framework with CI/CD" }
    ],
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
    roleDescription: "I defined the end-to-end architecture, the agent orchestration model and the safety rules the platform enforces in code. I specified the note, skill and knowledge-access contracts that agents must honour, designed the governance model separating what agents may propose from what they may apply, and set the evaluation methodology: measured baselines, benchmarks and regression guards proven to fail when the defect is reintroduced. I set the product vision and drove delivery through a prioritised backlog of phased, independently shippable increments, each recorded in a decision log written to be picked up cold by a new engineer or agent.",
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
