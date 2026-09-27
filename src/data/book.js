// Table of contents extracted from the book's sample PDF.
export const bookData = {
    "title": "Mastering Personal AI Agents with OpenClaw 2.0",
    "subtitle": "The operator's guide to designing, securing and running personal AI agents",
    "author": "Jaime Burbano V.",
    "year": 2026,
    "edition": "Version 1.0",
    "pages": 373,
    "format": "PDF",
    "quote": "There is a difference between using AI and operating an AI system.",
    "summary": "An architecture-first guide to personal AI agents: how a message travels from channel to gateway to runtime, how sessions, memory and knowledge are kept clean, how capabilities are bounded by policy, and how agents are secured, cost-controlled and coordinated into multi-agent systems that keep working after the demo ends.",
    "audience": [
        "Solo developers building agents for real work",
        "Technical founders and operator-builders",
        "Engineers designing serious personal AI setups"
    ],
    "toc": [
        {
            "label": "Chapter 1",
            "title": "What OpenClaw Really Is",
            "page": 1,
            "sections": [
                {
                    "num": "1",
                    "title": "What Becomes Possible When OpenClaw Is Used Seriously",
                    "page": 1,
                    "subsections": [
                        {
                            "num": "1.1",
                            "title": "Why This Is Not Just a Chatbot",
                            "page": 2
                        },
                        {
                            "num": "1.2",
                            "title": "A Daily Memory and Work Journal",
                            "page": 3
                        },
                        {
                            "num": "1.3",
                            "title": "A Multi-Agent Command Center",
                            "page": 3
                        },
                        {
                            "num": "1.4",
                            "title": "A Business or Product Workflow Assistant",
                            "page": 3
                        },
                        {
                            "num": "1.5",
                            "title": "A Research and Content Pipeline",
                            "page": 4
                        },
                        {
                            "num": "1.6",
                            "title": "A Cost-Aware Hybrid AI System",
                            "page": 4
                        }
                    ]
                },
                {
                    "num": "2",
                    "title": "The One Mental Model You Need First",
                    "page": 5,
                    "subsections": []
                },
                {
                    "num": "3",
                    "title": "The Core Components of OpenClaw",
                    "page": 5,
                    "subsections": [
                        {
                            "num": "3.1",
                            "title": "Gateway",
                            "page": 5
                        },
                        {
                            "num": "3.2",
                            "title": "Agent Runtime",
                            "page": 6
                        },
                        {
                            "num": "3.3",
                            "title": "Agents and Sub-Agents",
                            "page": 7
                        },
                        {
                            "num": "3.4",
                            "title": "Sessions",
                            "page": 7
                        },
                        {
                            "num": "3.5",
                            "title": "Channels",
                            "page": 7
                        },
                        {
                            "num": "3.6",
                            "title": "Tools",
                            "page": 8
                        },
                        {
                            "num": "3.7",
                            "title": "Skills",
                            "page": 8
                        },
                        {
                            "num": "3.8",
                            "title": "Memory",
                            "page": 8
                        },
                        {
                            "num": "3.9",
                            "title": "Automations, Cron Jobs, and Heartbeats",
                            "page": 8
                        },
                        {
                            "num": "3.10",
                            "title": "Hooks and Webhooks",
                            "page": 9
                        },
                        {
                            "num": "3.11",
                            "title": "Control UI, Native Apps, and Managed Integration Surfaces",
                            "page": 9
                        }
                    ]
                },
                {
                    "num": "4",
                    "title": "The Personal AI Operating System Model",
                    "page": 10,
                    "subsections": [
                        {
                            "num": "4.1",
                            "title": "It Has a Persistent Host",
                            "page": 10
                        },
                        {
                            "num": "4.2",
                            "title": "It Has Multiple Interfaces",
                            "page": 10
                        },
                        {
                            "num": "4.3",
                            "title": "It Has Tools for Real Work",
                            "page": 10
                        },
                        {
                            "num": "4.4",
                            "title": "It Has Memory and State",
                            "page": 11
                        },
                        {
                            "num": "4.5",
                            "title": "It Has Workflow Governance",
                            "page": 11
                        }
                    ]
                },
                {
                    "num": "5",
                    "title": "What Makes OpenClaw Dangerous If You Do Not Configure It Properly",
                    "page": 11,
                    "subsections": [
                        {
                            "num": "5.1",
                            "title": "Shell, File, and Browser Access",
                            "page": 12
                        },
                        {
                            "num": "5.2",
                            "title": "Credential Exposure",
                            "page": 12
                        },
                        {
                            "num": "5.3",
                            "title": "Prompt Injection",
                            "page": 12
                        },
                        {
                            "num": "5.4",
                            "title": "Skills Supply-Chain Risk",
                            "page": 12
                        },
                        {
                            "num": "5.5",
                            "title": "Memory Poisoning",
                            "page": 12
                        },
                        {
                            "num": "5.6",
                            "title": "Misconfigured Automation",
                            "page": 13
                        }
                    ]
                },
                {
                    "num": "6",
                    "title": "What This Guide Will Teach You to Build",
                    "page": 13,
                    "subsections": []
                },
                {
                    "num": "7",
                    "title": "The Operating Mindset",
                    "page": 14,
                    "subsections": []
                },
                {
                    "title": "Final Laws of Chapter 1",
                    "page": 15,
                    "subsections": []
                }
            ]
        },
        {
            "label": "Chapter 2",
            "title": "OpenClaw Agents",
            "page": 17,
            "sections": [
                {
                    "num": "1",
                    "title": "What an OpenClaw Agent Actually Is",
                    "page": 17,
                    "subsections": []
                },
                {
                    "num": "2",
                    "title": "The Agent Boundary",
                    "page": 18,
                    "subsections": []
                },
                {
                    "num": "3",
                    "title": "The Workspace: The Agent's Private Home",
                    "page": 20,
                    "subsections": []
                },
                {
                    "num": "4",
                    "title": "Configuration Files: What Belongs Where",
                    "page": 21,
                    "subsections": [
                        {
                            "num": "4.1",
                            "title": "The Instruction Overload Trap",
                            "page": 23
                        }
                    ]
                },
                {
                    "num": "5",
                    "title": "Identity Design: SOUL.md , IDENTITY.md , and USER.md",
                    "page": 23,
                    "subsections": []
                },
                {
                    "num": "6",
                    "title": "AGENTS.md : The Agent's Local Constitution",
                    "page": 25,
                    "subsections": []
                },
                {
                    "num": "7",
                    "title": "First-Session Onboarding Interview",
                    "page": 26,
                    "subsections": []
                },
                {
                    "num": "8",
                    "title": "Memory for One Agent",
                    "page": 27,
                    "subsections": []
                },
                {
                    "num": "9",
                    "title": "Skills: Capability Packages With a Risk Model",
                    "page": 28,
                    "subsections": []
                },
                {
                    "num": "10",
                    "title": "Installing Skills from ClawHub and Local Sources",
                    "page": 28,
                    "subsections": []
                },
                {
                    "num": "11",
                    "title": "Creating Clear and Useful Skills",
                    "page": 29,
                    "subsections": []
                },
                {
                    "num": "12",
                    "title": "Organizing Many Skills",
                    "page": 30,
                    "subsections": []
                },
                {
                    "num": "13",
                    "title": "Assessing Whether a Skill Is Dangerous",
                    "page": 31,
                    "subsections": []
                },
                {
                    "num": "14",
                    "title": "Protecting Identity and Memory From Hazardous Skills",
                    "page": 32,
                    "subsections": []
                },
                {
                    "num": "15",
                    "title": "Tools, Permissions, and Sandboxing",
                    "page": 33,
                    "subsections": []
                },
                {
                    "num": "16",
                    "title": "Channels and Bindings",
                    "page": 34,
                    "subsections": [
                        {
                            "num": "16.1",
                            "title": "Telegram",
                            "page": 35
                        },
                        {
                            "num": "16.2",
                            "title": "WhatsApp",
                            "page": 35
                        },
                        {
                            "num": "16.3",
                            "title": "Discord and Slack-Style Rooms",
                            "page": 35
                        },
                        {
                            "num": "16.4",
                            "title": "CLI, Control UI, and WebChat",
                            "page": 35
                        }
                    ]
                },
                {
                    "num": "17",
                    "title": "Sessions: Continue, Reset, Isolate, or Start Fresh",
                    "page": 35,
                    "subsections": []
                },
                {
                    "num": "18",
                    "title": "Creating or Adding an Agent: Practical Lifecycle",
                    "page": 36,
                    "subsections": []
                },
                {
                    "num": "19",
                    "title": "One-Agent Patterns Before Multi-Agent Systems",
                    "page": 37,
                    "subsections": [
                        {
                            "num": "19.1",
                            "title": "Personal Memory Assistant",
                            "page": 37
                        },
                        {
                            "num": "19.2",
                            "title": "Repository Documentation Assistant",
                            "page": 38
                        },
                        {
                            "num": "19.3",
                            "title": "Research and Content Assistant",
                            "page": 38
                        },
                        {
                            "num": "19.4",
                            "title": "Voice-Note Workflow Assistant",
                            "page": 38
                        },
                        {
                            "num": "19.5",
                            "title": "Safe Experimental Skill Lab",
                            "page": 38
                        }
                    ]
                },
                {
                    "num": "20",
                    "title": "Verification: Proving the Agent Works Before Trusting It",
                    "page": 38,
                    "subsections": []
                },
                {
                    "num": "21",
                    "title": "Common First-Agent Mistakes",
                    "page": 39,
                    "subsections": []
                },
                {
                    "title": "Final Laws of Chapter 2",
                    "page": 40,
                    "subsections": []
                }
            ]
        },
        {
            "label": "Chapter 3",
            "title": "Zero to First Serious Agent",
            "page": 41,
            "sections": [
                {
                    "num": "1",
                    "title": "The installation mindset: build safely before building autonomously",
                    "page": 42,
                    "subsections": []
                },
                {
                    "num": "2",
                    "title": "Install OpenClaw and verify the gateway",
                    "page": 43,
                    "subsections": []
                },
                {
                    "num": "3",
                    "title": "Choose where OpenClaw should run",
                    "page": 45,
                    "subsections": []
                },
                {
                    "num": "4",
                    "title": "Understand the gateway before connecting channels",
                    "page": 47,
                    "subsections": []
                },
                {
                    "num": "5",
                    "title": "Connect the first channel: use Telegram as the beginner path",
                    "page": 48,
                    "subsections": []
                },
                {
                    "num": "6",
                    "title": "Create the first workspace",
                    "page": 49,
                    "subsections": []
                },
                {
                    "num": "7",
                    "title": "Write the first SOUL.md",
                    "page": 50,
                    "subsections": []
                },
                {
                    "num": "8",
                    "title": "Write the first AGENTS.md",
                    "page": 51,
                    "subsections": []
                },
                {
                    "num": "9",
                    "title": "Add memory without creating a memory swamp",
                    "page": 52,
                    "subsections": []
                },
                {
                    "num": "10",
                    "title": "Enable skills and hooks slowly",
                    "page": 53,
                    "subsections": []
                },
                {
                    "num": "11",
                    "title": "Add one safe automation",
                    "page": 54,
                    "subsections": []
                },
                {
                    "num": "12",
                    "title": "Set the first safe tool policy",
                    "page": 56,
                    "subsections": []
                },
                {
                    "num": "13",
                    "title": "Run the first onboarding interview",
                    "page": 58,
                    "subsections": []
                },
                {
                    "num": "14",
                    "title": "Verify the first serious setup",
                    "page": 59,
                    "subsections": []
                },
                {
                    "num": "15",
                    "title": "Common setup mistakes",
                    "page": 60,
                    "subsections": []
                },
                {
                    "num": "16",
                    "title": "A first serious agent blueprint",
                    "page": 62,
                    "subsections": []
                },
                {
                    "title": "Final Laws of Chapter 3",
                    "page": 63,
                    "subsections": []
                }
            ]
        },
        {
            "label": "Chapter 4",
            "title": "Gateway, Runtime, and Message Lifecycle",
            "page": 64,
            "sections": [
                {
                    "num": "1",
                    "title": "The Three-Tier Architecture",
                    "page": 64,
                    "subsections": [
                        {
                            "num": "1.1",
                            "title": "Layer One: Messaging and Event Surfaces",
                            "page": 65
                        },
                        {
                            "num": "1.2",
                            "title": "Layer Two: The Gateway Control Plane",
                            "page": 66
                        },
                        {
                            "num": "1.3",
                            "title": "Layer Three: The Agent Runtime",
                            "page": 66
                        }
                    ]
                },
                {
                    "num": "2",
                    "title": "The Lifecycle of a Message",
                    "page": 66,
                    "subsections": [
                        {
                            "num": "2.1",
                            "title": "Stage 1: An Event Arrives",
                            "page": 67
                        },
                        {
                            "num": "2.2",
                            "title": "Stage 2: The Adapter Normalizes the Event",
                            "page": 67
                        },
                        {
                            "num": "2.3",
                            "title": "Stage 3: The Gateway Enriches the Event",
                            "page": 68
                        },
                        {
                            "num": "2.4",
                            "title": "Stage 4: Routing Selects the Target Agent",
                            "page": 68
                        },
                        {
                            "num": "2.5",
                            "title": "Stage 5: The Session Key Is Resolved",
                            "page": 69
                        },
                        {
                            "num": "2.6",
                            "title": "Stage 6: The Run Enters the Queue",
                            "page": 69
                        },
                        {
                            "num": "2.7",
                            "title": "Stage 7: The Runtime Assembles Prompt and Context",
                            "page": 69
                        },
                        {
                            "num": "2.8",
                            "title": "Stage 8: The Model or Provider Receives the Call",
                            "page": 70
                        },
                        {
                            "num": "2.9",
                            "title": "Stage 9: The Tool Loop Runs If Needed",
                            "page": 71
                        },
                        {
                            "num": "2.10",
                            "title": "Stage 10: A Final Response Is Produced",
                            "page": 71
                        },
                        {
                            "num": "2.11",
                            "title": "Stage 11: State Is Persisted and Post-Processed",
                            "page": 71
                        },
                        {
                            "num": "2.12",
                            "title": "Stage 12: The Channel-Native Response Is Delivered",
                            "page": 72
                        }
                    ]
                },
                {
                    "num": "3",
                    "title": "Gateway Components as Operating Responsibilities",
                    "page": 72,
                    "subsections": [
                        {
                            "num": "3.1",
                            "title": "Gateway HTTP and WebSocket APIs",
                            "page": 72
                        },
                        {
                            "num": "3.2",
                            "title": "Session Manager",
                            "page": 73
                        },
                        {
                            "num": "3.3",
                            "title": "Channel Router",
                            "page": 73
                        },
                        {
                            "num": "3.4",
                            "title": "Queue and Run Dispatch",
                            "page": 73
                        },
                        {
                            "num": "3.5",
                            "title": "Automations and Cron Scheduler",
                            "page": 74
                        },
                        {
                            "num": "3.6",
                            "title": "Hooks, Plugins, and Webhooks",
                            "page": 74
                        },
                        {
                            "num": "3.7",
                            "title": "Persistence Coordination",
                            "page": 74
                        }
                    ]
                },
                {
                    "num": "4",
                    "title": "Runtime Modules as Execution Responsibilities",
                    "page": 74,
                    "subsections": [
                        {
                            "num": "4.1",
                            "title": "Prompt Assembler",
                            "page": 75
                        },
                        {
                            "num": "4.2",
                            "title": "Model Router",
                            "page": 75
                        },
                        {
                            "num": "4.3",
                            "title": "Tool Executor",
                            "page": 75
                        },
                        {
                            "num": "4.4",
                            "title": "Response Formatter",
                            "page": 76
                        }
                    ]
                },
                {
                    "num": "5",
                    "title": "Session Management and Context Continuity",
                    "page": 76,
                    "subsections": [
                        {
                            "num": "5.1",
                            "title": "Direct Messages, Groups, Topics, and Threads",
                            "page": 76
                        },
                        {
                            "num": "5.2",
                            "title": "Compaction and History",
                            "page": 76
                        },
                        {
                            "num": "5.3",
                            "title": "Workspace State",
                            "page": 77
                        }
                    ]
                },
                {
                    "num": "6",
                    "title": "Prompt Layers in Practice",
                    "page": 77,
                    "subsections": [
                        {
                            "num": "6.1",
                            "title": "Instruction and Capability Layers",
                            "page": 77
                        },
                        {
                            "num": "6.2",
                            "title": "History, Memory, and Workspace Context",
                            "page": 78
                        }
                    ]
                },
                {
                    "num": "7",
                    "title": "Persistence: Why OpenClaw Feels Continuous",
                    "page": 78,
                    "subsections": []
                },
                {
                    "num": "8",
                    "title": "Gateway as the Control Plane",
                    "page": 78,
                    "subsections": []
                },
                {
                    "num": "9",
                    "title": "Diagnosing Failures by Lifecycle Stage",
                    "page": 79,
                    "subsections": []
                },
                {
                    "num": "10",
                    "title": "Security Consequences of the Lifecycle",
                    "page": 80,
                    "subsections": []
                },
                {
                    "num": "11",
                    "title": "A Concrete Walkthrough",
                    "page": 80,
                    "subsections": []
                },
                {
                    "num": "12",
                    "title": "Design Principles for Serious Setups",
                    "page": 83,
                    "subsections": [
                        {
                            "num": "12.1",
                            "title": "Principle 1: Treat Every Trigger as an Input",
                            "page": 83
                        },
                        {
                            "num": "12.2",
                            "title": "Principle 2: Separate Routing From Context",
                            "page": 83
                        },
                        {
                            "num": "12.3",
                            "title": "Principle 3: Persist Decisions Outside the Chat When They Matter",
                            "page": 83
                        },
                        {
                            "num": "12.4",
                            "title": "Principle 4: Keep Gateway Surfaces Private and Intentional",
                            "page": 84
                        },
                        {
                            "num": "12.5",
                            "title": "Principle 5: Use Tools as Evidence",
                            "page": 84
                        }
                    ]
                },
                {
                    "num": "13",
                    "title": "The Chapter 4 Architecture Diagram",
                    "page": 84,
                    "subsections": []
                },
                {
                    "title": "Final Laws of Chapter 4",
                    "page": 86,
                    "subsections": []
                }
            ]
        },
        {
            "label": "Chapter 5",
            "title": "Capability Surfaces",
            "page": 87,
            "sections": [
                {
                    "num": "1",
                    "title": "From Lifecycle to Capability Surface",
                    "page": 87,
                    "subsections": []
                },
                {
                    "num": "2",
                    "title": "The Capability Map",
                    "page": 88,
                    "subsections": []
                },
                {
                    "num": "3",
                    "title": "Tools: Callable Actions Inside the Runtime Loop",
                    "page": 90,
                    "subsections": []
                },
                {
                    "num": "4",
                    "title": "The Tool Execution Path",
                    "page": 91,
                    "subsections": []
                },
                {
                    "num": "5",
                    "title": "The Policy Envelope Around Capability",
                    "page": 92,
                    "subsections": [
                        {
                            "num": "5.1",
                            "title": "A Simple Tool Policy Example",
                            "page": 93
                        },
                        {
                            "num": "5.2",
                            "title": "Tool Policy Does Not Read Your Mind",
                            "page": 94
                        }
                    ]
                },
                {
                    "num": "6",
                    "title": "Skills: Capability Guidance, Not Magic Powers",
                    "page": 95,
                    "subsections": []
                },
                {
                    "num": "7",
                    "title": "How Skills Enter Capability Decisions",
                    "page": 96,
                    "subsections": []
                },
                {
                    "num": "8",
                    "title": "Skills as Supply-Chain and Behavior Risk",
                    "page": 96,
                    "subsections": []
                },
                {
                    "num": "9",
                    "title": "Plugins: Installable Runtime Extensions",
                    "page": 97,
                    "subsections": [
                        {
                            "num": "9.1",
                            "title": "Plugin Activation and Runtime Surfaces",
                            "page": 99
                        }
                    ]
                },
                {
                    "num": "10",
                    "title": "Hooks: Extension Points, Not Automation Strategy Yet",
                    "page": 99,
                    "subsections": []
                },
                {
                    "num": "11",
                    "title": "Browser, Canvas, and Node/Device Surfaces",
                    "page": 101,
                    "subsections": [
                        {
                            "num": "11.1",
                            "title": "Browser Control",
                            "page": 101
                        },
                        {
                            "num": "11.2",
                            "title": "Canvas",
                            "page": 102
                        },
                        {
                            "num": "11.3",
                            "title": "Nodes and Devices",
                            "page": 103
                        }
                    ]
                },
                {
                    "num": "12",
                    "title": "Capability Installation and Enablement Workflow",
                    "page": 103,
                    "subsections": [
                        {
                            "num": "12.1",
                            "title": "Verification Commands Worth Knowing",
                            "page": 104
                        }
                    ]
                },
                {
                    "num": "13",
                    "title": "Capability Risk Matrix",
                    "page": 105,
                    "subsections": []
                },
                {
                    "num": "14",
                    "title": "Capability Patterns for Serious Agents",
                    "page": 106,
                    "subsections": [
                        {
                            "num": "14.1",
                            "title": "Research Agent",
                            "page": 107
                        },
                        {
                            "num": "14.2",
                            "title": "Documentation or Writing Agent",
                            "page": 107
                        },
                        {
                            "num": "14.3",
                            "title": "Browser Verification Agent",
                            "page": 107
                        },
                        {
                            "num": "14.4",
                            "title": "Automation Operator",
                            "page": 108
                        }
                    ]
                },
                {
                    "num": "15",
                    "title": "Common Capability Mistakes",
                    "page": 108,
                    "subsections": [
                        {
                            "num": "15.1",
                            "title": "Mistake 1: Treating Skills Like Tools",
                            "page": 108
                        },
                        {
                            "num": "15.2",
                            "title": "Mistake 2: Treating Tools Like Permissions",
                            "page": 108
                        },
                        {
                            "num": "15.3",
                            "title": "Mistake 3: Installing Plugins Without Runtime Verification",
                            "page": 109
                        },
                        {
                            "num": "15.4",
                            "title": "Mistake 4: Letting Browser Access Drift Into General Agents",
                            "page": 109
                        },
                        {
                            "num": "15.5",
                            "title": "Mistake 5: Treating All Event Surfaces as the Same Trust Boundary",
                            "page": 109
                        },
                        {
                            "num": "15.6",
                            "title": "Mistake 6: Assuming Sandbox Means Safe",
                            "page": 109
                        },
                        {
                            "num": "15.7",
                            "title": "Mistake 7: Giving Every Agent the Same Tool Profile",
                            "page": 109
                        },
                        {
                            "num": "15.8",
                            "title": "Mistake 8: Forgetting the Rollback Story",
                            "page": 109
                        }
                    ]
                },
                {
                    "title": "Final Laws of Chapter 5",
                    "page": 110,
                    "subsections": []
                }
            ]
        },
        {
            "label": "Chapter 6",
            "title": "Events, Heartbeats, Automations, Webhooks, and Loops",
            "page": 111,
            "sections": [
                {
                    "num": "1",
                    "title": "Time Is an Input",
                    "page": 111,
                    "subsections": []
                },
                {
                    "num": "2",
                    "title": "The Event-Driven OpenClaw Model",
                    "page": 113,
                    "subsections": []
                },
                {
                    "num": "3",
                    "title": "Heartbeats: Quiet Periodic Attention",
                    "page": 114,
                    "subsections": [
                        {
                            "num": "3.1",
                            "title": "A Small HEARTBEAT.md",
                            "page": 115
                        },
                        {
                            "num": "3.2",
                            "title": "Heartbeat Configuration as Operating Posture",
                            "page": 116
                        }
                    ]
                },
                {
                    "num": "4",
                    "title": "Automations: Scheduled Prompts With Audit Trails",
                    "page": 116,
                    "subsections": [
                        {
                            "num": "4.1",
                            "title": "Schedule Types",
                            "page": 117
                        },
                        {
                            "num": "4.2",
                            "title": "Cron Expression Warning",
                            "page": 118
                        },
                        {
                            "num": "4.3",
                            "title": "Managing Cron Jobs",
                            "page": 118
                        }
                    ]
                },
                {
                    "num": "5",
                    "title": "Choosing Between Heartbeat and Automation",
                    "page": 118,
                    "subsections": []
                },
                {
                    "num": "6",
                    "title": "Session Targets and Context Strategy",
                    "page": 119,
                    "subsections": []
                },
                {
                    "num": "7",
                    "title": "Hooks: Internal Events Inside the Gateway",
                    "page": 120,
                    "subsections": [
                        {
                            "num": "7.1",
                            "title": "Internal Hooks vs Plugin Hooks",
                            "page": 121
                        }
                    ]
                },
                {
                    "num": "8",
                    "title": "Webhooks: External Events With Trust Boundaries",
                    "page": 122,
                    "subsections": []
                },
                {
                    "num": "9",
                    "title": "Agent-to-Agent Events and Sub-Agent Results",
                    "page": 122,
                    "subsections": []
                },
                {
                    "num": "10",
                    "title": "Automation Queue Safety",
                    "page": 123,
                    "subsections": []
                },
                {
                    "num": "11",
                    "title": "Scheduled Operational Reports",
                    "page": 124,
                    "subsections": []
                },
                {
                    "num": "12",
                    "title": "Daily Memory Tracker Pattern",
                    "page": 125,
                    "subsections": []
                },
                {
                    "num": "13",
                    "title": "Business Meta-Analysis Jobs",
                    "page": 126,
                    "subsections": []
                },
                {
                    "num": "14",
                    "title": "When Cron Is Not Enough: Durable Automation",
                    "page": 127,
                    "subsections": []
                },
                {
                    "num": "15",
                    "title": "Avoiding Runaway Automation",
                    "page": 128,
                    "subsections": []
                },
                {
                    "num": "16",
                    "title": "Automation Design Templates",
                    "page": 129,
                    "subsections": []
                },
                {
                    "num": "17",
                    "title": "Safe Automation Checklist",
                    "page": 129,
                    "subsections": []
                },
                {
                    "title": "Final Laws of Chapter 6",
                    "page": 130,
                    "subsections": []
                }
            ]
        },
        {
            "label": "Chapter 7",
            "title": "Channels, Sessions, Threads, and Context Hygiene",
            "page": 131,
            "sections": [
                {
                    "num": "1",
                    "title": "Why One Giant Chat Destroys Context",
                    "page": 132,
                    "subsections": [
                        {
                            "num": "1.1",
                            "title": "Topic drift",
                            "page": 133
                        },
                        {
                            "num": "1.2",
                            "title": "Memory pollution",
                            "page": 133
                        },
                        {
                            "num": "1.3",
                            "title": "Retrieval confusion",
                            "page": 133
                        },
                        {
                            "num": "1.4",
                            "title": "Session bloat",
                            "page": 134
                        }
                    ]
                },
                {
                    "num": "2",
                    "title": "Channels, Rooms, Threads, Topics, and Sessions",
                    "page": 134,
                    "subsections": [
                        {
                            "num": "2.1",
                            "title": "Telegram topics",
                            "page": 135
                        },
                        {
                            "num": "2.2",
                            "title": "Discord channels and threads",
                            "page": 137
                        },
                        {
                            "num": "2.3",
                            "title": "Slack channels and threads",
                            "page": 138
                        },
                        {
                            "num": "2.4",
                            "title": "WhatsApp conversations",
                            "page": 138
                        },
                        {
                            "num": "2.5",
                            "title": "Webhooks and Automations",
                            "page": 139
                        }
                    ]
                },
                {
                    "num": "3",
                    "title": "Session Boundaries: The Hidden Architecture of Conversation",
                    "page": 139,
                    "subsections": [
                        {
                            "num": "3.1",
                            "title": "Direct messages are personal, not always isolated",
                            "page": 140
                        },
                        {
                            "num": "3.2",
                            "title": "Groups and channels create shared context",
                            "page": 141
                        },
                        {
                            "num": "3.3",
                            "title": "Threads and topics are bounded workspaces",
                            "page": 141
                        },
                        {
                            "num": "3.4",
                            "title": "Session expiration and reset choices",
                            "page": 142
                        },
                        {
                            "num": "3.5",
                            "title": "Continuity, rewind, forks, and recall boundaries",
                            "page": 142
                        }
                    ]
                },
                {
                    "num": "4",
                    "title": "Designing Topic Lanes",
                    "page": 143,
                    "subsections": [
                        {
                            "num": "4.1",
                            "title": "Starter lane map for a personal OpenClaw operator",
                            "page": 143
                        },
                        {
                            "num": "4.2",
                            "title": "Knowledge-base lane",
                            "page": 144
                        },
                        {
                            "num": "4.3",
                            "title": "Automations updates lane",
                            "page": 144
                        },
                        {
                            "num": "4.4",
                            "title": "Video research lane",
                            "page": 145
                        },
                        {
                            "num": "4.5",
                            "title": "Meeting prep lane",
                            "page": 145
                        },
                        {
                            "num": "4.6",
                            "title": "System health lane",
                            "page": 146
                        },
                        {
                            "num": "4.7",
                            "title": "Human approvals lane",
                            "page": 146
                        }
                    ]
                },
                {
                    "num": "5",
                    "title": "Routing Work by Topic",
                    "page": 147,
                    "subsections": [
                        {
                            "num": "5.1",
                            "title": "Match lane to workflow",
                            "page": 147
                        },
                        {
                            "num": "5.2",
                            "title": "Match topic to agent",
                            "page": 148
                        },
                        {
                            "num": "5.3",
                            "title": "Match outputs to the right destination",
                            "page": 148
                        },
                        {
                            "num": "5.4",
                            "title": "Use artifacts to reduce chat dependency",
                            "page": 149
                        }
                    ]
                },
                {
                    "num": "6",
                    "title": "Thread Naming Conventions",
                    "page": 149,
                    "subsections": [
                        {
                            "num": "6.1",
                            "title": "Project threads",
                            "page": 150
                        },
                        {
                            "num": "6.2",
                            "title": "Incident threads",
                            "page": 150
                        },
                        {
                            "num": "6.3",
                            "title": "Research threads",
                            "page": 151
                        },
                        {
                            "num": "6.4",
                            "title": "QA threads",
                            "page": 151
                        },
                        {
                            "num": "6.5",
                            "title": "Thread lifecycle",
                            "page": 152
                        }
                    ]
                },
                {
                    "num": "7",
                    "title": "Separating Logs, Decisions, Approvals, and Research",
                    "page": 152,
                    "subsections": [
                        {
                            "num": "7.1",
                            "title": "Logs should be boring",
                            "page": 153
                        },
                        {
                            "num": "7.2",
                            "title": "Decisions need durable homes",
                            "page": 153
                        },
                        {
                            "num": "7.3",
                            "title": "Approvals need silence around them",
                            "page": 153
                        },
                        {
                            "num": "7.4",
                            "title": "Research needs provenance",
                            "page": 154
                        }
                    ]
                },
                {
                    "num": "8",
                    "title": "When to Use DM, Group, Channel, Topic, or Thread",
                    "page": 154,
                    "subsections": [
                        {
                            "num": "8.1",
                            "title": "Use a DM for private owner instruction",
                            "page": 155
                        },
                        {
                            "num": "8.2",
                            "title": "Use a group or channel for shared operating context",
                            "page": 155
                        },
                        {
                            "num": "8.3",
                            "title": "Use a topic for recurring subdomains",
                            "page": 156
                        },
                        {
                            "num": "8.4",
                            "title": "Use a thread for bounded tasks",
                            "page": 156
                        },
                        {
                            "num": "8.5",
                            "title": "Use a separate agent when the boundary is about capability or risk",
                            "page": 156
                        }
                    ]
                },
                {
                    "num": "9",
                    "title": "Channel Security Implications",
                    "page": 156,
                    "subsections": [
                        {
                            "num": "9.1",
                            "title": "Mention gating is not just UX",
                            "page": 157
                        },
                        {
                            "num": "9.2",
                            "title": "Authorized users and allowed groups",
                            "page": 157
                        },
                        {
                            "num": "9.3",
                            "title": "Public and private spaces must not mix casually",
                            "page": 157
                        },
                        {
                            "num": "9.4",
                            "title": "Context visibility differs from trigger authorization",
                            "page": 158
                        },
                        {
                            "num": "9.5",
                            "title": "The workspace is private memory, not a sandbox by default",
                            "page": 158
                        }
                    ]
                },
                {
                    "num": "10",
                    "title": "Workspace Hygiene Checklist",
                    "page": 158,
                    "subsections": [
                        {
                            "num": "10.1",
                            "title": "Lane design",
                            "page": 158
                        },
                        {
                            "num": "10.2",
                            "title": "Session and routing hygiene",
                            "page": 159
                        },
                        {
                            "num": "10.3",
                            "title": "Memory and artifact hygiene",
                            "page": 159
                        },
                        {
                            "num": "10.4",
                            "title": "Security hygiene",
                            "page": 160
                        },
                        {
                            "num": "10.5",
                            "title": "Review cadence",
                            "page": 160
                        }
                    ]
                },
                {
                    "num": "11",
                    "title": "A Practical Reference Architecture",
                    "page": 160,
                    "subsections": [
                        {
                            "num": "11.1",
                            "title": "Personal operator version",
                            "page": 161
                        },
                        {
                            "num": "11.2",
                            "title": "Team or command-center version",
                            "page": 161
                        },
                        {
                            "num": "11.3",
                            "title": "Minimal starter version",
                            "page": 162
                        }
                    ]
                },
                {
                    "num": "12",
                    "title": "The Principle: Context Is an Operational Asset",
                    "page": 162,
                    "subsections": []
                },
                {
                    "title": "Final Laws of Chapter 7",
                    "page": 163,
                    "subsections": []
                }
            ]
        },
        {
            "label": "Chapter 8",
            "title": "Agent Inter-Communication",
            "page": 164,
            "sections": [
                {
                    "num": "1",
                    "title": "Verify the Base Before You Add More Agents",
                    "page": 165,
                    "subsections": []
                },
                {
                    "num": "2",
                    "title": "Communication Is Not Conversation",
                    "page": 166,
                    "subsections": []
                },
                {
                    "num": "3",
                    "title": "The Communication Mechanisms OpenClaw Gives You",
                    "page": 167,
                    "subsections": []
                },
                {
                    "num": "4",
                    "title": "Direct Agent Messaging with sessions_send",
                    "page": 169,
                    "subsections": []
                },
                {
                    "num": "5",
                    "title": "Sub-Agent Spawning with sessions_spawn",
                    "page": 170,
                    "subsections": []
                },
                {
                    "num": "6",
                    "title": "Shared Files and Durable Handoffs",
                    "page": 172,
                    "subsections": []
                },
                {
                    "num": "7",
                    "title": "Command-Center Communication Pattern",
                    "page": 173,
                    "subsections": []
                },
                {
                    "num": "8",
                    "title": "Thread Bindings and Routing for Agent Handoffs",
                    "page": 174,
                    "subsections": []
                },
                {
                    "num": "9",
                    "title": "Communication Protocols and Templates",
                    "page": 175,
                    "subsections": []
                },
                {
                    "num": "10",
                    "title": "The Orchestrator Role",
                    "page": 177,
                    "subsections": []
                },
                {
                    "num": "11",
                    "title": "Specialist Agent Result Formats",
                    "page": 178,
                    "subsections": []
                },
                {
                    "num": "12",
                    "title": "Failure Modes in Agent Communication",
                    "page": 180,
                    "subsections": []
                },
                {
                    "num": "13",
                    "title": "A Practical Multi-Agent Communication Blueprint",
                    "page": 181,
                    "subsections": []
                },
                {
                    "title": "Final Laws of Chapter 8",
                    "page": 184,
                    "subsections": []
                }
            ]
        },
        {
            "label": "Chapter 9",
            "title": "Memory Management",
            "page": 185,
            "sections": [
                {
                    "num": "1",
                    "title": "Memory as Engineered Durable State",
                    "page": 185,
                    "subsections": []
                },
                {
                    "num": "2",
                    "title": "The OpenClaw Memory Stack",
                    "page": 186,
                    "subsections": []
                },
                {
                    "num": "3",
                    "title": "Default Memory Files and Tools",
                    "page": 187,
                    "subsections": []
                },
                {
                    "num": "4",
                    "title": "Single-Agent Memory Architecture",
                    "page": 189,
                    "subsections": []
                },
                {
                    "num": "5",
                    "title": "The Memory Lifecycle",
                    "page": 191,
                    "subsections": []
                },
                {
                    "num": "6",
                    "title": "Compaction and Automatic Memory Flush",
                    "page": 193,
                    "subsections": []
                },
                {
                    "num": "7",
                    "title": "Retrieval Engineering Basics",
                    "page": 194,
                    "subsections": []
                },
                {
                    "num": "8",
                    "title": "Dreaming and Promotion Boundaries",
                    "page": 195,
                    "subsections": []
                },
                {
                    "num": "9",
                    "title": "Memory Pollution and Poisoning",
                    "page": 196,
                    "subsections": []
                },
                {
                    "num": "10",
                    "title": "Multi-Agent Memory Boundaries",
                    "page": 198,
                    "subsections": []
                },
                {
                    "num": "11",
                    "title": "The Memory Agent Pattern",
                    "page": 199,
                    "subsections": []
                },
                {
                    "num": "12",
                    "title": "Memory Templates",
                    "page": 200,
                    "subsections": []
                },
                {
                    "title": "Final Laws of Chapter 9",
                    "page": 201,
                    "subsections": []
                }
            ]
        },
        {
            "label": "Chapter 10",
            "title": "Knowledge Management and Second Brain",
            "page": 202,
            "sections": [
                {
                    "num": "1",
                    "title": "Why memory is not enough",
                    "page": 202,
                    "subsections": []
                },
                {
                    "num": "2",
                    "title": "Why OpenClaw knowledge fragments",
                    "page": 204,
                    "subsections": []
                },
                {
                    "num": "3",
                    "title": "The purpose of a unified knowledge base",
                    "page": 205,
                    "subsections": []
                },
                {
                    "num": "4",
                    "title": "Raw sources vs preprocessed knowledge",
                    "page": 206,
                    "subsections": []
                },
                {
                    "num": "5",
                    "title": "Markdown workspace as source of truth",
                    "page": 207,
                    "subsections": []
                },
                {
                    "num": "6",
                    "title": "memory-wiki as a compiled claim/evidence layer",
                    "page": 208,
                    "subsections": []
                },
                {
                    "num": "7",
                    "title": "Source-backed answers",
                    "page": 210,
                    "subsections": []
                },
                {
                    "num": "8",
                    "title": "Research-to-memory and research-to-knowledge workflow",
                    "page": 211,
                    "subsections": [
                        {
                            "num": "8.1",
                            "title": "Capture",
                            "page": 212
                        },
                        {
                            "num": "8.2",
                            "title": "Extract",
                            "page": 212
                        },
                        {
                            "num": "8.3",
                            "title": "Classify",
                            "page": 212
                        },
                        {
                            "num": "8.4",
                            "title": "Validate",
                            "page": 212
                        },
                        {
                            "num": "8.5",
                            "title": "Promote",
                            "page": 213
                        },
                        {
                            "num": "8.6",
                            "title": "Review",
                            "page": 213
                        },
                        {
                            "num": "8.7",
                            "title": "Reuse",
                            "page": 213
                        }
                    ]
                },
                {
                    "num": "9",
                    "title": "Transcript-to-knowledge workflow",
                    "page": 213,
                    "subsections": []
                },
                {
                    "num": "10",
                    "title": "Why a second brain follows memory",
                    "page": 215,
                    "subsections": []
                },
                {
                    "num": "11",
                    "title": "What Obsidian adds",
                    "page": 216,
                    "subsections": []
                },
                {
                    "num": "12",
                    "title": "Knowledge stack, not full system architecture",
                    "page": 216,
                    "subsections": []
                },
                {
                    "num": "13",
                    "title": "Vault layout",
                    "page": 218,
                    "subsections": []
                },
                {
                    "num": "14",
                    "title": "Linking, backlinks, metadata, and properties",
                    "page": 220,
                    "subsections": []
                },
                {
                    "num": "15",
                    "title": "Daily notes and capture flow",
                    "page": 221,
                    "subsections": []
                },
                {
                    "num": "16",
                    "title": "PARA and Zettelkasten adaptation",
                    "page": 222,
                    "subsections": []
                },
                {
                    "num": "17",
                    "title": "Dashboards and Dataview",
                    "page": 223,
                    "subsections": []
                },
                {
                    "num": "18",
                    "title": "Per-agent and multi-agent vaults",
                    "page": 224,
                    "subsections": []
                },
                {
                    "num": "19",
                    "title": "Sync, Git, backup, privacy, and plugin risk",
                    "page": 226,
                    "subsections": []
                },
                {
                    "num": "20",
                    "title": "Knowledge governance and naming conventions",
                    "page": 227,
                    "subsections": []
                },
                {
                    "num": "21",
                    "title": "Avoiding flat file chaos",
                    "page": 228,
                    "subsections": []
                },
                {
                    "title": "Final Laws of Chapter 10",
                    "page": 230,
                    "subsections": []
                }
            ]
        },
        {
            "label": "Chapter 11",
            "title": "Security in OpenClaw",
            "page": 231,
            "sections": [
                {
                    "num": "1",
                    "title": "The core security philosophy",
                    "page": 232,
                    "subsections": []
                },
                {
                    "num": "2",
                    "title": "The threat model: what you are actually defending against",
                    "page": 233,
                    "subsections": [
                        {
                            "num": "2.1",
                            "title": "Direct prompt injection",
                            "page": 234
                        },
                        {
                            "num": "2.2",
                            "title": "Indirect prompt injection",
                            "page": 234
                        },
                        {
                            "num": "2.3",
                            "title": "Tool abuse",
                            "page": 235
                        },
                        {
                            "num": "2.4",
                            "title": "Credential theft",
                            "page": 235
                        },
                        {
                            "num": "2.5",
                            "title": "Memory poisoning",
                            "page": 236
                        },
                        {
                            "num": "2.6",
                            "title": "Skill and plugin supply-chain attacks",
                            "page": 236
                        },
                        {
                            "num": "2.7",
                            "title": "Channel takeover and open access",
                            "page": 237
                        }
                    ]
                },
                {
                    "num": "3",
                    "title": "Security architecture: defense in depth",
                    "page": 237,
                    "subsections": []
                },
                {
                    "num": "4",
                    "title": "The hardened baseline",
                    "page": 239,
                    "subsections": []
                },
                {
                    "num": "5",
                    "title": "Gateway and host security",
                    "page": 240,
                    "subsections": [
                        {
                            "num": "5.1",
                            "title": "Keep the gateway local unless needed",
                            "page": 241
                        },
                        {
                            "num": "5.2",
                            "title": "Use strong gateway authentication",
                            "page": 241
                        },
                        {
                            "num": "5.3",
                            "title": "Do not treat sessionKey as auth",
                            "page": 241
                        },
                        {
                            "num": "5.4",
                            "title": "Split trust boundaries by host, OS user, or gateway",
                            "page": 241
                        }
                    ]
                },
                {
                    "num": "6",
                    "title": "Sandboxing: reducing blast radius",
                    "page": 242,
                    "subsections": [
                        {
                            "num": "6.1",
                            "title": "Sandbox modes",
                            "page": 242
                        },
                        {
                            "num": "6.2",
                            "title": "Sandbox scope",
                            "page": 242
                        },
                        {
                            "num": "6.3",
                            "title": "Sandbox does not replace tool policy",
                            "page": 243
                        },
                        {
                            "num": "6.4",
                            "title": "Dangerous bind mounts",
                            "page": 243
                        }
                    ]
                },
                {
                    "num": "7",
                    "title": "Tool policy: the real permission system",
                    "page": 244,
                    "subsections": []
                },
                {
                    "num": "8",
                    "title": "Per-agent permission architecture",
                    "page": 245,
                    "subsections": []
                },
                {
                    "num": "9",
                    "title": "Channel security: Telegram",
                    "page": 246,
                    "subsections": []
                },
                {
                    "num": "10",
                    "title": "Channel security: Discord, Slack, WhatsApp, webhooks, and public exposure",
                    "page": 247,
                    "subsections": []
                },
                {
                    "num": "11",
                    "title": "Prompt injection defense",
                    "page": 248,
                    "subsections": [
                        {
                            "num": "11.1",
                            "title": "The control plane vs data plane rule",
                            "page": 249
                        },
                        {
                            "num": "11.2",
                            "title": "The untrusted content wrapper",
                            "page": 249
                        },
                        {
                            "num": "11.3",
                            "title": "Prompt injection detection checklist",
                            "page": 250
                        },
                        {
                            "num": "11.4",
                            "title": "The five-layer prompt injection defense",
                            "page": 250
                        }
                    ]
                },
                {
                    "num": "12",
                    "title": "Skills and plugins security",
                    "page": 251,
                    "subsections": []
                },
                {
                    "num": "13",
                    "title": "Credential and secret hygiene",
                    "page": 252,
                    "subsections": []
                },
                {
                    "num": "14",
                    "title": "Human approval gates",
                    "page": 253,
                    "subsections": []
                },
                {
                    "num": "15",
                    "title": "Security audit and monitoring",
                    "page": 254,
                    "subsections": []
                },
                {
                    "num": "16",
                    "title": "Incident response: what to do if you suspect compromise",
                    "page": 255,
                    "subsections": [
                        {
                            "num": "16.1",
                            "title": "Immediate containment",
                            "page": 255
                        },
                        {
                            "num": "16.2",
                            "title": "Inspect high-risk files",
                            "page": 256
                        },
                        {
                            "num": "16.3",
                            "title": "Rotate secrets",
                            "page": 256
                        },
                        {
                            "num": "16.4",
                            "title": "Rebuild from a known-good baseline",
                            "page": 257
                        }
                    ]
                },
                {
                    "num": "17",
                    "title": "OS-level hardening and advanced isolation",
                    "page": 257,
                    "subsections": []
                },
                {
                    "num": "18",
                    "title": "Secure patterns by deployment type",
                    "page": 258,
                    "subsections": [
                        {
                            "num": "18.1",
                            "title": "Personal local assistant",
                            "page": 258
                        },
                        {
                            "num": "18.2",
                            "title": "Family or shared household bot",
                            "page": 258
                        },
                        {
                            "num": "18.3",
                            "title": "Company team agent",
                            "page": 259
                        },
                        {
                            "num": "18.4",
                            "title": "Public community bot",
                            "page": 259
                        },
                        {
                            "num": "18.5",
                            "title": "Coding agent",
                            "page": 260
                        }
                    ]
                },
                {
                    "num": "19",
                    "title": "Security rules to put in AGENTS.md",
                    "page": 260,
                    "subsections": []
                },
                {
                    "num": "20",
                    "title": "The final secure OpenClaw architecture",
                    "page": 261,
                    "subsections": []
                },
                {
                    "title": "Final Laws of Chapter 11",
                    "page": 263,
                    "subsections": []
                }
            ]
        },
        {
            "label": "Chapter 12",
            "title": "Cost & Model Optimization",
            "page": 264,
            "sections": [
                {
                    "num": "1",
                    "title": "The new economics of autonomous agents",
                    "page": 265,
                    "subsections": []
                },
                {
                    "num": "2",
                    "title": "Where your tokens actually go",
                    "page": 266,
                    "subsections": [
                        {
                            "num": "2.1",
                            "title": "Bootstrap and workspace context",
                            "page": 267
                        },
                        {
                            "num": "2.2",
                            "title": "Tool schemas",
                            "page": 268
                        },
                        {
                            "num": "2.3",
                            "title": "Conversation history and tool results",
                            "page": 269
                        },
                        {
                            "num": "2.4",
                            "title": "Heartbeats",
                            "page": 269
                        },
                        {
                            "num": "2.5",
                            "title": "Cron jobs and hooks",
                            "page": 270
                        },
                        {
                            "num": "2.6",
                            "title": "Sub-agents",
                            "page": 270
                        }
                    ]
                },
                {
                    "num": "3",
                    "title": "The model portfolio mentality",
                    "page": 271,
                    "subsections": [
                        {
                            "num": "3.1",
                            "title": "Frontier models: the executive layer",
                            "page": 271
                        },
                        {
                            "num": "3.2",
                            "title": "Mid-tier models: the specialist layer",
                            "page": 272
                        },
                        {
                            "num": "3.3",
                            "title": "Cheap hosted models: the utility layer",
                            "page": 272
                        },
                        {
                            "num": "3.4",
                            "title": "Local models: the background labor layer",
                            "page": 273
                        }
                    ]
                },
                {
                    "num": "4",
                    "title": "Local vs remote models",
                    "page": 273,
                    "subsections": [
                        {
                            "num": "4.1",
                            "title": "Remote model strengths",
                            "page": 273
                        },
                        {
                            "num": "4.2",
                            "title": "Remote model weaknesses",
                            "page": 274
                        },
                        {
                            "num": "4.3",
                            "title": "Local model strengths",
                            "page": 274
                        },
                        {
                            "num": "4.4",
                            "title": "Local model weaknesses",
                            "page": 275
                        },
                        {
                            "num": "4.5",
                            "title": "Ollama, LM Studio, vLLM, and custom providers",
                            "page": 275
                        }
                    ]
                },
                {
                    "num": "5",
                    "title": "OpenRouter Auto Mode and model routing",
                    "page": 276,
                    "subsections": [
                        {
                            "num": "5.1",
                            "title": "Provider fallbacks are not cost optimization",
                            "page": 277
                        }
                    ]
                },
                {
                    "num": "6",
                    "title": "OAuth, API keys, and subscription-style auth",
                    "page": 277,
                    "subsections": [
                        {
                            "num": "6.1",
                            "title": "API keys",
                            "page": 278
                        },
                        {
                            "num": "6.2",
                            "title": "OAuth and subscription-style auth",
                            "page": 278
                        },
                        {
                            "num": "6.3",
                            "title": "Local auth and private endpoints",
                            "page": 278
                        }
                    ]
                },
                {
                    "num": "7",
                    "title": "Role-based model assignment blueprint",
                    "page": 279,
                    "subsections": [
                        {
                            "num": "7.1",
                            "title": "Orchestrator Agent",
                            "page": 279
                        },
                        {
                            "num": "7.2",
                            "title": "Research Agent",
                            "page": 279
                        },
                        {
                            "num": "7.3",
                            "title": "Software Developer Agent",
                            "page": 280
                        },
                        {
                            "num": "7.4",
                            "title": "QA/System Health Agent",
                            "page": 280
                        },
                        {
                            "num": "7.5",
                            "title": "Memory Distiller Agent",
                            "page": 280
                        }
                    ]
                },
                {
                    "num": "8",
                    "title": "The cost control stack",
                    "page": 281,
                    "subsections": [
                        {
                            "num": "8.1",
                            "title": "Prompt discipline",
                            "page": 281
                        },
                        {
                            "num": "8.2",
                            "title": "Context budgeting",
                            "page": 282
                        },
                        {
                            "num": "8.3",
                            "title": "Output caps",
                            "page": 282
                        },
                        {
                            "num": "8.4",
                            "title": "Delegation thresholds",
                            "page": 282
                        },
                        {
                            "num": "8.5",
                            "title": "Deterministic gates",
                            "page": 283
                        },
                        {
                            "num": "8.6",
                            "title": "Spend monitoring",
                            "page": 283
                        }
                    ]
                },
                {
                    "num": "9",
                    "title": "Escalation ladders",
                    "page": 284,
                    "subsections": [
                        {
                            "num": "9.1",
                            "title": "Cheap filter first",
                            "page": 284
                        },
                        {
                            "num": "9.2",
                            "title": "Escalate only when signal is found",
                            "page": 285
                        },
                        {
                            "num": "9.3",
                            "title": "Use premium models where one good decision prevents waste",
                            "page": 285
                        }
                    ]
                },
                {
                    "num": "10",
                    "title": "Caching and reuse",
                    "page": 285,
                    "subsections": []
                },
                {
                    "num": "11",
                    "title": "Memory optimization as cost optimization",
                    "page": 286,
                    "subsections": [
                        {
                            "num": "11.1",
                            "title": "Store decisions, not everything",
                            "page": 286
                        },
                        {
                            "num": "11.2",
                            "title": "Retrieve before loading",
                            "page": 287
                        },
                        {
                            "num": "11.3",
                            "title": "Distill daily notes into durable memory",
                            "page": 287
                        },
                        {
                            "num": "11.4",
                            "title": "Treat embeddings and memory search as cost surfaces",
                            "page": 287
                        },
                        {
                            "num": "11.5",
                            "title": "Validate memory before it becomes authority",
                            "page": 288
                        }
                    ]
                },
                {
                    "num": "12",
                    "title": "Practical cost-optimized architecture",
                    "page": 288,
                    "subsections": [
                        {
                            "num": "12.1",
                            "title": "Primary interface",
                            "page": 289
                        },
                        {
                            "num": "12.2",
                            "title": "Specialist agents",
                            "page": 289
                        },
                        {
                            "num": "12.3",
                            "title": "Background agents",
                            "page": 289
                        },
                        {
                            "num": "12.4",
                            "title": "Routing layer",
                            "page": 290
                        },
                        {
                            "num": "12.5",
                            "title": "Local inference layer",
                            "page": 290
                        }
                    ]
                },
                {
                    "num": "13",
                    "title": "Concrete agent cost policies",
                    "page": 290,
                    "subsections": [
                        {
                            "num": "13.1",
                            "title": "Orchestrator policy",
                            "page": 290
                        },
                        {
                            "num": "13.2",
                            "title": "Research Agent policy",
                            "page": 291
                        },
                        {
                            "num": "13.3",
                            "title": "Coding Agent policy",
                            "page": 291
                        },
                        {
                            "num": "13.4",
                            "title": "QA/System Health Agent policy",
                            "page": 291
                        },
                        {
                            "num": "13.5",
                            "title": "Memory Agent policy",
                            "page": 291
                        }
                    ]
                },
                {
                    "num": "14",
                    "title": "Cost killers to avoid",
                    "page": 292,
                    "subsections": [
                        {
                            "num": "14.1",
                            "title": "One premium model everywhere",
                            "page": 292
                        },
                        {
                            "num": "14.2",
                            "title": "Oversized Markdown brain files",
                            "page": 292
                        },
                        {
                            "num": "14.3",
                            "title": "Agent chatter",
                            "page": 292
                        },
                        {
                            "num": "14.4",
                            "title": "Heartbeats without gating",
                            "page": 292
                        },
                        {
                            "num": "14.5",
                            "title": "Full-history delegation",
                            "page": 292
                        },
                        {
                            "num": "14.6",
                            "title": "Reprocessing the same data",
                            "page": 292
                        },
                        {
                            "num": "14.7",
                            "title": "Tool overexposure",
                            "page": 293
                        },
                        {
                            "num": "14.8",
                            "title": "Cheap models without evaluation",
                            "page": 293
                        }
                    ]
                },
                {
                    "num": "15",
                    "title": "Cost-aware workflow examples",
                    "page": 293,
                    "subsections": [
                        {
                            "num": "15.1",
                            "title": "Cheap heartbeat",
                            "page": 293
                        },
                        {
                            "num": "15.2",
                            "title": "Overnight business agent",
                            "page": 294
                        },
                        {
                            "num": "15.3",
                            "title": "Research pipeline",
                            "page": 294
                        },
                        {
                            "num": "15.4",
                            "title": "Coding fix workflow",
                            "page": 295
                        }
                    ]
                },
                {
                    "num": "16",
                    "title": "Model evaluation harness",
                    "page": 295,
                    "subsections": [
                        {
                            "num": "16.1",
                            "title": "Pick real workflow tests",
                            "page": 295
                        },
                        {
                            "num": "16.2",
                            "title": "Save raw outputs",
                            "page": 296
                        },
                        {
                            "num": "16.3",
                            "title": "Evaluate tool calling",
                            "page": 296
                        },
                        {
                            "num": "16.4",
                            "title": "Evaluate personality and tone",
                            "page": 297
                        },
                        {
                            "num": "16.5",
                            "title": "Evaluate speed and failures",
                            "page": 297
                        },
                        {
                            "num": "16.6",
                            "title": "Track cost per useful outcome",
                            "page": 297
                        }
                    ]
                },
                {
                    "num": "17",
                    "title": "Model observations and tiering",
                    "page": 297,
                    "subsections": []
                },
                {
                    "num": "18",
                    "title": "Final cost-optimized stack",
                    "page": 298,
                    "subsections": []
                },
                {
                    "title": "Final Laws of Chapter 12",
                    "page": 300,
                    "subsections": []
                }
            ]
        },
        {
            "label": "Chapter 13",
            "title": "Personal Operating System Blueprints",
            "page": 301,
            "sections": [
                {
                    "num": "1",
                    "title": "The personal operating system vision",
                    "page": 301,
                    "subsections": []
                },
                {
                    "num": "2",
                    "title": "Interface architecture",
                    "page": 303,
                    "subsections": [
                        {
                            "num": "2.1",
                            "title": "Private operator lane",
                            "page": 303
                        },
                        {
                            "num": "2.2",
                            "title": "Command-center lane",
                            "page": 304
                        },
                        {
                            "num": "2.3",
                            "title": "Maintenance lane",
                            "page": 304
                        },
                        {
                            "num": "2.4",
                            "title": "Automation lane",
                            "page": 305
                        }
                    ]
                },
                {
                    "num": "3",
                    "title": "Agent architecture",
                    "page": 305,
                    "subsections": [
                        {
                            "num": "3.1",
                            "title": "Orchestrator",
                            "page": 306
                        },
                        {
                            "num": "3.2",
                            "title": "Research Agent",
                            "page": 307
                        },
                        {
                            "num": "3.3",
                            "title": "Content Agent",
                            "page": 307
                        },
                        {
                            "num": "3.4",
                            "title": "Developer or Product Agent",
                            "page": 307
                        },
                        {
                            "num": "3.5",
                            "title": "Memory and Knowledge Agent",
                            "page": 307
                        },
                        {
                            "num": "3.6",
                            "title": "QA and Reviewer Agent",
                            "page": 307
                        },
                        {
                            "num": "3.7",
                            "title": "Public or community-facing agent",
                            "page": 308
                        }
                    ]
                },
                {
                    "num": "4",
                    "title": "Data architecture",
                    "page": 308,
                    "subsections": [
                        {
                            "num": "4.1",
                            "title": "Markdown workspace",
                            "page": 309
                        },
                        {
                            "num": "4.2",
                            "title": "Runtime state",
                            "page": 310
                        },
                        {
                            "num": "4.3",
                            "title": "Knowledge and evidence layer",
                            "page": 310
                        },
                        {
                            "num": "4.4",
                            "title": "Structured data and vector search",
                            "page": 310
                        }
                    ]
                },
                {
                    "num": "5",
                    "title": "Integrated services map",
                    "page": 311,
                    "subsections": [
                        {
                            "num": "5.1",
                            "title": "Service categories",
                            "page": 311
                        },
                        {
                            "num": "5.2",
                            "title": "Read, propose, write",
                            "page": 313
                        }
                    ]
                },
                {
                    "num": "6",
                    "title": "Integration reliability and fallback design",
                    "page": 313,
                    "subsections": [
                        {
                            "num": "6.1",
                            "title": "Fallbacks need logging",
                            "page": 314
                        },
                        {
                            "num": "6.2",
                            "title": "Fallbacks need stop conditions",
                            "page": 314
                        }
                    ]
                },
                {
                    "num": "7",
                    "title": "Usage tracking and observability",
                    "page": 315,
                    "subsections": [
                        {
                            "num": "7.1",
                            "title": "What to observe",
                            "page": 315
                        },
                        {
                            "num": "7.2",
                            "title": "Health pulse",
                            "page": 316
                        },
                        {
                            "num": "7.3",
                            "title": "Light audit vs deep audit",
                            "page": 316
                        }
                    ]
                },
                {
                    "num": "8",
                    "title": "Backups and restore",
                    "page": 316,
                    "subsections": [
                        {
                            "num": "8.1",
                            "title": "Backup layers",
                            "page": 317
                        },
                        {
                            "num": "8.2",
                            "title": "Restore documentation",
                            "page": 317
                        },
                        {
                            "num": "8.3",
                            "title": "What not to back up carelessly",
                            "page": 318
                        }
                    ]
                },
                {
                    "num": "9",
                    "title": "Markdown governance",
                    "page": 319,
                    "subsections": [
                        {
                            "num": "9.1",
                            "title": "workspace.md",
                            "page": 319
                        },
                        {
                            "num": "9.2",
                            "title": "Architecture notes",
                            "page": 319
                        },
                        {
                            "num": "9.3",
                            "title": "Agent registry",
                            "page": 320
                        },
                        {
                            "num": "9.4",
                            "title": "Scheduled drift review",
                            "page": 320
                        }
                    ]
                },
                {
                    "num": "10",
                    "title": "Reference blueprints",
                    "page": 321,
                    "subsections": [
                        {
                            "num": "10.1",
                            "title": "Minimal safe personal assistant",
                            "page": 321
                        },
                        {
                            "num": "10.2",
                            "title": "Solo builder setup",
                            "page": 322
                        },
                        {
                            "num": "10.3",
                            "title": "Developer and coding agent setup",
                            "page": 322
                        },
                        {
                            "num": "10.4",
                            "title": "Content creator setup",
                            "page": 323
                        },
                        {
                            "num": "10.5",
                            "title": "Multi-agent business command center",
                            "page": 324
                        },
                        {
                            "num": "10.6",
                            "title": "Public community bot",
                            "page": 324
                        },
                        {
                            "num": "10.7",
                            "title": "Company or team agent setup",
                            "page": 325
                        },
                        {
                            "num": "10.8",
                            "title": "Advanced personal operating system",
                            "page": 326
                        },
                        {
                            "num": "10.9",
                            "title": "Cost-optimized local/cloud setup",
                            "page": 326
                        },
                        {
                            "num": "10.10",
                            "title": "Security-hardened setup",
                            "page": 327
                        }
                    ]
                },
                {
                    "title": "Final Laws of Chapter 13",
                    "page": 328,
                    "subsections": []
                }
            ]
        },
        {
            "label": "Chapter 14",
            "title": "Workflow Playbooks",
            "page": 329,
            "sections": [
                {
                    "num": "1",
                    "title": "OpenClaw for real work, not demos",
                    "page": 329,
                    "subsections": []
                },
                {
                    "num": "2",
                    "title": "Identifying bottlenecks",
                    "page": 330,
                    "subsections": [
                        {
                            "num": "2.1",
                            "title": "Bottleneck discovery worksheet",
                            "page": 331
                        }
                    ]
                },
                {
                    "num": "3",
                    "title": "The universal signal-to-output workflow",
                    "page": 331,
                    "subsections": [
                        {
                            "num": "3.1",
                            "title": "Signal",
                            "page": 332
                        },
                        {
                            "num": "3.2",
                            "title": "Context gathering",
                            "page": 332
                        },
                        {
                            "num": "3.3",
                            "title": "Research or inspection",
                            "page": 332
                        },
                        {
                            "num": "3.4",
                            "title": "Draft or analysis",
                            "page": 333
                        },
                        {
                            "num": "3.5",
                            "title": "Validation / review",
                            "page": 333
                        },
                        {
                            "num": "3.6",
                            "title": "Approval gate",
                            "page": 333
                        },
                        {
                            "num": "3.7",
                            "title": "Completion report",
                            "page": 334
                        }
                    ]
                },
                {
                    "num": "4",
                    "title": "Research workflows",
                    "page": 334,
                    "subsections": [
                        {
                            "num": "4.1",
                            "title": "Playbook: research handoff package",
                            "page": 335
                        },
                        {
                            "num": "4.2",
                            "title": "Research steps",
                            "page": 335
                        },
                        {
                            "num": "4.3",
                            "title": "Where Task Flow fits",
                            "page": 336
                        },
                        {
                            "num": "4.4",
                            "title": "Failure modes",
                            "page": 336
                        }
                    ]
                },
                {
                    "num": "5",
                    "title": "Content workflows",
                    "page": 337,
                    "subsections": [
                        {
                            "num": "5.1",
                            "title": "Playbook: article or LinkedIn post pipeline",
                            "page": 337
                        },
                        {
                            "num": "5.2",
                            "title": "Content workflow steps",
                            "page": 338
                        },
                        {
                            "num": "5.3",
                            "title": "Editing and humanization",
                            "page": 338
                        }
                    ]
                },
                {
                    "num": "6",
                    "title": "Video and YouTube pipeline",
                    "page": 339,
                    "subsections": [
                        {
                            "num": "6.1",
                            "title": "Playbook: video idea pipeline",
                            "page": 339
                        },
                        {
                            "num": "6.2",
                            "title": "Workflow steps",
                            "page": 340
                        },
                        {
                            "num": "6.3",
                            "title": "Trend and social research caution",
                            "page": 340
                        },
                        {
                            "num": "6.4",
                            "title": "Production-task handoff",
                            "page": 340
                        }
                    ]
                },
                {
                    "num": "7",
                    "title": "Sales and CRM workflows",
                    "page": 341,
                    "subsections": [
                        {
                            "num": "7.1",
                            "title": "Playbook: sales follow-up prep",
                            "page": 341
                        },
                        {
                            "num": "7.2",
                            "title": "Workflow steps",
                            "page": 341
                        },
                        {
                            "num": "7.3",
                            "title": "Natural-language CRM queries",
                            "page": 342
                        },
                        {
                            "num": "7.4",
                            "title": "CRM failure modes",
                            "page": 342
                        }
                    ]
                },
                {
                    "num": "8",
                    "title": "Meeting prep workflow",
                    "page": 343,
                    "subsections": [
                        {
                            "num": "8.1",
                            "title": "Playbook: morning meeting prep",
                            "page": 343
                        },
                        {
                            "num": "8.2",
                            "title": "Prep note format",
                            "page": 343
                        },
                        {
                            "num": "8.3",
                            "title": "Workflow steps",
                            "page": 344
                        },
                        {
                            "num": "8.4",
                            "title": "Post-meeting follow-up",
                            "page": 344
                        }
                    ]
                },
                {
                    "num": "9",
                    "title": "Product workflows",
                    "page": 345,
                    "subsections": [
                        {
                            "num": "9.1",
                            "title": "Playbook: product opportunity memo",
                            "page": 345
                        },
                        {
                            "num": "9.2",
                            "title": "Opportunity memo format",
                            "page": 346
                        },
                        {
                            "num": "9.3",
                            "title": "Prototype handoff",
                            "page": 346
                        },
                        {
                            "num": "9.4",
                            "title": "Product workflow failure modes",
                            "page": 347
                        }
                    ]
                },
                {
                    "num": "10",
                    "title": "Feedback analysis workflows",
                    "page": 347,
                    "subsections": [
                        {
                            "num": "10.1",
                            "title": "Playbook: feedback-to-roadmap analysis",
                            "page": 347
                        },
                        {
                            "num": "10.2",
                            "title": "Workflow steps",
                            "page": 348
                        },
                        {
                            "num": "10.3",
                            "title": "Feedback report format",
                            "page": 348
                        },
                        {
                            "num": "10.4",
                            "title": "Ranking discipline",
                            "page": 349
                        }
                    ]
                },
                {
                    "num": "11",
                    "title": "Business meta-analysis",
                    "page": 349,
                    "subsections": [
                        {
                            "num": "11.1",
                            "title": "Playbook: weekly business review",
                            "page": 349
                        },
                        {
                            "num": "11.2",
                            "title": "Specialist reviewer pattern",
                            "page": 350
                        },
                        {
                            "num": "11.3",
                            "title": "Report format",
                            "page": 350
                        },
                        {
                            "num": "11.4",
                            "title": "Why approval matters here",
                            "page": 351
                        }
                    ]
                },
                {
                    "num": "12",
                    "title": "Task management workflow",
                    "page": 351,
                    "subsections": [
                        {
                            "num": "12.1",
                            "title": "Playbook: action item extraction",
                            "page": 351
                        },
                        {
                            "num": "12.2",
                            "title": "Proposed task format",
                            "page": 352
                        },
                        {
                            "num": "12.3",
                            "title": "Workflow steps",
                            "page": 352
                        },
                        {
                            "num": "12.4",
                            "title": "Task creation standing order",
                            "page": 352
                        }
                    ]
                },
                {
                    "num": "13",
                    "title": "Developer and product-building workflows",
                    "page": 353,
                    "subsections": [
                        {
                            "num": "13.1",
                            "title": "Playbook: prototype-to-task handoff",
                            "page": 353
                        },
                        {
                            "num": "13.2",
                            "title": "Developer handoff format",
                            "page": 354
                        },
                        {
                            "num": "13.3",
                            "title": "Internal apps and dashboards",
                            "page": 354
                        },
                        {
                            "num": "13.4",
                            "title": "QA review",
                            "page": 355
                        }
                    ]
                },
                {
                    "num": "14",
                    "title": "Human approvals",
                    "page": 355,
                    "subsections": [
                        {
                            "num": "14.1",
                            "title": "What agents can usually do alone",
                            "page": 355
                        },
                        {
                            "num": "14.2",
                            "title": "What should require approval",
                            "page": 356
                        },
                        {
                            "num": "14.3",
                            "title": "Approval request format",
                            "page": 356
                        },
                        {
                            "num": "14.4",
                            "title": "Approval logging",
                            "page": 357
                        },
                        {
                            "num": "14.5",
                            "title": "Escalation rules",
                            "page": 357
                        }
                    ]
                },
                {
                    "num": "15",
                    "title": "Workflow templates",
                    "page": 357,
                    "subsections": []
                },
                {
                    "title": "Final Laws of Chapter 14",
                    "page": 359,
                    "subsections": []
                }
            ]
        },
        {
            "label": "Appendix",
            "title": "Templates, Checklists, and Copy-Paste Operating Files",
            "page": 360,
            "sections": [
                {
                    "num": "1",
                    "title": "Agent Identity and Operating Files",
                    "page": 360,
                    "subsections": [
                        {
                            "num": "1.1",
                            "title": "SOUL.md",
                            "page": 360
                        },
                        {
                            "num": "1.2",
                            "title": "USER.md",
                            "page": 361
                        },
                        {
                            "num": "1.3",
                            "title": "AGENTS.md",
                            "page": 361
                        },
                        {
                            "num": "1.4",
                            "title": "Post-Compaction Recovery",
                            "page": 362
                        }
                    ]
                },
                {
                    "num": "2",
                    "title": "Agent Creation and Routing",
                    "page": 362,
                    "subsections": [
                        {
                            "num": "2.1",
                            "title": "Agent Design Card",
                            "page": 362
                        },
                        {
                            "num": "2.2",
                            "title": "Agent Registry",
                            "page": 363
                        },
                        {
                            "num": "2.3",
                            "title": "Routing Map",
                            "page": 363
                        }
                    ]
                },
                {
                    "num": "3",
                    "title": "Multi-Agent Communication",
                    "page": 364,
                    "subsections": [
                        {
                            "num": "3.1",
                            "title": "Task Request",
                            "page": 364
                        },
                        {
                            "num": "3.2",
                            "title": "Task Result",
                            "page": 364
                        },
                        {
                            "num": "3.3",
                            "title": "Escalation",
                            "page": 365
                        },
                        {
                            "num": "3.4",
                            "title": "Handoff Capsule",
                            "page": 365
                        }
                    ]
                },
                {
                    "num": "4",
                    "title": "Memory and Knowledge Management",
                    "page": 366,
                    "subsections": [
                        {
                            "num": "4.1",
                            "title": "Durable Memory Entry",
                            "page": 366
                        },
                        {
                            "num": "4.2",
                            "title": "Decision Record",
                            "page": 366
                        },
                        {
                            "num": "4.3",
                            "title": "Lesson Record",
                            "page": 366
                        },
                        {
                            "num": "4.4",
                            "title": "Memory Promotion Checklist",
                            "page": 367
                        },
                        {
                            "num": "4.5",
                            "title": "Preprocessed Source",
                            "page": 367
                        },
                        {
                            "num": "4.6",
                            "title": "Claim and Evidence Record",
                            "page": 368
                        }
                    ]
                },
                {
                    "num": "5",
                    "title": "Security and Governance",
                    "page": 368,
                    "subsections": [
                        {
                            "num": "5.1",
                            "title": "Capability Card",
                            "page": 368
                        },
                        {
                            "num": "5.2",
                            "title": "Security Rules for AGENTS.md",
                            "page": 369
                        },
                        {
                            "num": "5.3",
                            "title": "Approval Request",
                            "page": 369
                        },
                        {
                            "num": "5.4",
                            "title": "Approval Log",
                            "page": 370
                        }
                    ]
                },
                {
                    "num": "6",
                    "title": "Cost and Model Optimization",
                    "page": 370,
                    "subsections": [
                        {
                            "num": "6.1",
                            "title": "Agent Cost Policy",
                            "page": 370
                        },
                        {
                            "num": "6.2",
                            "title": "Model Evaluation Card",
                            "page": 371
                        }
                    ]
                },
                {
                    "num": "7",
                    "title": "Automation and Workflows",
                    "page": 371,
                    "subsections": [
                        {
                            "num": "7.1",
                            "title": "Automation Design Brief",
                            "page": 371
                        },
                        {
                            "num": "7.2",
                            "title": "Webhook Intake Brief",
                            "page": 372
                        },
                        {
                            "num": "7.3",
                            "title": "Heartbeat Brief",
                            "page": 372
                        },
                        {
                            "num": "7.4",
                            "title": "Workflow Playbook",
                            "page": 373
                        }
                    ]
                },
                {
                    "num": "8",
                    "title": "Architecture and Operations",
                    "page": 374,
                    "subsections": [
                        {
                            "num": "8.1",
                            "title": "Integration Registry",
                            "page": 374
                        },
                        {
                            "num": "8.2",
                            "title": "Workspace Map",
                            "page": 374
                        },
                        {
                            "num": "8.3",
                            "title": "System Health Pulse",
                            "page": 374
                        },
                        {
                            "num": "8.4",
                            "title": "Restore Plan",
                            "page": 375
                        }
                    ]
                }
            ]
        }
    ]
};
