import { motion } from 'framer-motion';

const diagrams = [
    {
        id: "zentinel-agent",
        title: "Zentinel Agent",
        description: "Legacy monitoring compared with the z/OSMF-based workflow.",
        lanes: [
            { title: "Legacy", steps: ["TN3270", "GETRC", "Manual Investigation", "Email Notifications"] },
            { title: "Modernized", steps: ["z/OSMF REST APIs", "Job Discovery", "Spool Retrieval", "Anomaly Detection", "Notification Engine"] }
        ]
    },
    {
        id: "operational-data-validator",
        title: "Operational Data Validator",
        description: "Rule-driven validation from source report to actionable output.",
        lanes: [
            { title: "Validation flow", steps: ["Source Data", "YAML Rules", "Validation Engine", "PASS | WARN | FAIL", "Validation Report"] }
        ]
    },
    {
        id: "snowflake-migration",
        title: "Teradata → Snowflake Migration Validation",
        description: "Reconciliation and business-rule checks supporting migration output review.",
        lanes: [
            { title: "Validation workflow", steps: ["Teradata Source", "Snowflake Target", "Reconciliation Testing", "Business-Rule Verification", "Stakeholder Review · 98% Output Parity"] }
        ]
    }
];

const diagramLayout = (lanes) => {
    const width = 800;
    const maxSteps = Math.max(...lanes.map((lane) => lane.steps.length));
    const height = 92 + maxSteps * 78;
    const laneWidth = lanes.length === 1 ? 600 : 350;
    const gap = lanes.length === 1 ? 0 : 50;
    const totalWidth = laneWidth * lanes.length + gap * (lanes.length - 1);
    const startX = (width - totalWidth) / 2;

    return {
        width,
        height,
        positions: lanes.map((lane, index) => ({
            ...lane,
            x: startX + index * (laneWidth + gap),
            laneWidth,
            center: startX + index * (laneWidth + gap) + laneWidth / 2
        }))
    };
};

const escapeXml = (value) => value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');

const downloadDiagram = (diagram) => {
    const { width, height, positions } = diagramLayout(diagram.lanes);
    const elements = positions.map((lane) => {
        const title = `<text x="${lane.center}" y="32" text-anchor="middle" class="lane-title">${escapeXml(lane.title)}</text>`;
        const nodes = lane.steps.map((step, index) => {
            const y = 52 + index * 78;
            const boxX = lane.center - lane.laneWidth / 2;
            const boxWidth = lane.laneWidth;
            const node = `<rect x="${boxX}" y="${y}" width="${boxWidth}" height="48" rx="10" class="node"/><text x="${lane.center}" y="${y + 30}" text-anchor="middle" class="node-label">${escapeXml(step)}</text>`;
            const arrow = index < lane.steps.length - 1
                ? `<path d="M ${lane.center} ${y + 48} v 22" class="arrow"/><path d="m ${lane.center - 5} ${y + 65} 5 5 5-5" class="arrow-head"/>`
                : '';
            return node + arrow;
        }).join('');
        return title + nodes;
    }).join('');
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" role="img"><title>${escapeXml(diagram.title)} architecture diagram</title><style>text{font-family:Inter,Arial,sans-serif}.lane-title{font-size:18px;font-weight:700;fill:#584944}.node{fill:#f8fafc;stroke:#e2e8f0;stroke-width:1.5}.node-label{font-size:15px;font-weight:600;fill:#334155}.arrow,.arrow-head{fill:none;stroke:#91634b;stroke-width:2;stroke-linecap:round;stroke-linejoin:round}</style>${elements}</svg>`;
    const url = URL.createObjectURL(new Blob([svg], { type: 'image/svg+xml;charset=utf-8' }));
    const link = document.createElement('a');
    link.href = url;
    link.download = `${diagram.id}-architecture.svg`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
};

const ArchitectureSvg = ({ diagram }) => {
    const { width, height, positions } = diagramLayout(diagram.lanes);

    return (
        <svg
            className="w-full h-auto text-numberText dark:text-gray-200"
            viewBox={`0 0 ${width} ${height}`}
            role="img"
            aria-labelledby={`${diagram.id}-title ${diagram.id}-description`}
        >
            <title id={`${diagram.id}-title`}>{diagram.title} architecture diagram</title>
            <desc id={`${diagram.id}-description`}>{diagram.description}</desc>
            {positions.map((lane) => (
                <g key={lane.title}>
                    <text x={lane.center} y="32" textAnchor="middle" className="fill-numberText dark:fill-gray-200 text-[18px] font-bold">
                        {lane.title}
                    </text>
                    {lane.steps.map((step, index) => {
                        const y = 52 + index * 78;
                        const boxX = lane.center - lane.laneWidth / 2;
                        return (
                            <g key={step}>
                                <rect
                                    x={boxX}
                                    y={y}
                                    width={lane.laneWidth}
                                    height="48"
                                    rx="10"
                                    className="fill-gray-50 dark:fill-gray-900 stroke-gray-200 dark:stroke-gray-700"
                                    strokeWidth="1.5"
                                />
                                <text
                                    x={lane.center}
                                    y={y + 30}
                                    textAnchor="middle"
                                    className="fill-gray-700 dark:fill-gray-200 text-[15px] font-semibold"
                                >
                                    {step}
                                </text>
                                {index < lane.steps.length - 1 && (
                                    <g className="stroke-rawUmber dark:stroke-mikadoYellow" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d={`M ${lane.center} ${y + 48} v 22`} />
                                        <path d={`m ${lane.center - 5} ${y + 65} 5 5 5-5`} />
                                    </g>
                                )}
                            </g>
                        );
                    })}
                </g>
            ))}
        </svg>
    );
};

export const ArchitectureDiagram = ({ diagramId }) => {
    const diagram = diagrams.find((item) => item.id === diagramId);
    if (!diagram) {
        throw new Error(`Unknown architecture diagram: ${diagramId}`);
    }

    return (
        <motion.div
            className="mt-4"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4 }}
        >
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">{diagram.description}</p>
                <button
                    type="button"
                    onClick={() => downloadDiagram(diagram)}
                    className="btn-secondary inline-flex shrink-0 items-center justify-center gap-2 text-sm"
                >
                    <i className="fas fa-download" aria-hidden="true"></i>
                    Download SVG
                </button>
            </div>
            <div className="overflow-x-auto rounded-xl bg-white/70 p-3 dark:bg-black/30 sm:p-5">
                <div className="mx-auto min-w-[560px] max-w-4xl">
                    <ArchitectureSvg diagram={diagram} />
                </div>
            </div>
        </motion.div>
    );
};
