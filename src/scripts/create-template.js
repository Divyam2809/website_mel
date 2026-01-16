import { Document, Packer, Paragraph, TextRun } from "docx";
import fs from "fs";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const doc = new Document({
    sections: [{
        properties: {},
        children: [
            new Paragraph({
                children: [
                    new TextRun({
                        text: "MELA PAGE CONTENT TEMPLATE",
                        bold: true,
                        size: 32,
                    }),
                ],
            }),
            new Paragraph({ text: "" }),
            new Paragraph({ children: [new TextRun({ text: "Instructions: Edit the values after the ':' sign. Do not change the keys like 'Title:' or '--- HERO ---'.", italic: true })] }),
            new Paragraph({ text: "" }),

            new Paragraph({ children: [new TextRun({ text: "--- HERO ---", bold: true, color: "FF9B50" })] }),
            new Paragraph({ text: "Badge: VR Industrial Training" }),
            new Paragraph({ text: "Title: Safe, Scalable Industrial Training" }),
            new Paragraph({ text: "Subtitle: Train workers on complex industrial processes and equipment without production downtime or safety risks." }),
            new Paragraph({ text: "PrimaryBtn: Request Industrial Demo" }),
            new Paragraph({ text: "SecondaryBtn: View Training Modules" }),
            new Paragraph({ text: "" }),

            new Paragraph({ children: [new TextRun({ text: "--- SUITE ---", bold: true, color: "FF9B50" })] }),
            new Paragraph({ text: "Title: The Industrial Suite" }),
            new Paragraph({ text: "Subtitle: Comprehensive training for industrial operations" }),
            new Paragraph({ text: "Feature1: 01 | Process Simulation | Practice complex manufacturing processes in a virtual environment before touching real equipment." }),
            new Paragraph({ text: "Feature2: 02 | Maintenance Training | Learn preventive maintenance, troubleshooting, and repair procedures on virtual machinery." }),
            new Paragraph({ text: "Feature3: 03 | Safety Compliance | Master OSHA regulations, lockout/tagout procedures, and emergency response protocols." }),
            new Paragraph({ text: "" }),

            new Paragraph({ children: [new TextRun({ text: "--- APPLICATIONS ---", bold: true, color: "FF9B50" })] }),
            new Paragraph({ text: "Title: Industry Applications" }),
            new Paragraph({ text: "App1: Production Excellence | Manufacturing | Train operators on assembly lines, CNC machines, and quality control without halting production." }),
            new Paragraph({ text: "App2: High-Risk Training | Oil & Gas | Practice drilling operations, pipeline maintenance, and emergency procedures in a safe environment." }),
            new Paragraph({ text: "App3: Process Safety | Chemical Processing | Master hazardous material handling and process control without exposure to dangerous chemicals." }),
            new Paragraph({ text: "" }),

            new Paragraph({ children: [new TextRun({ text: "--- STATS ---", bold: true, color: "FF9B50" })] }),
            new Paragraph({ text: "Title: Why Melzo Industrial" }),
            new Paragraph({ text: "Subtitle: Reduce training costs by 65% and workplace incidents by 80% with our comprehensive industrial VR training platform." }),
            new Paragraph({ text: "Stat1: 65% | Cost Reduction" }),
            new Paragraph({ text: "Stat2: 80% | Incident Prevention" }),
            new Paragraph({ text: "Stat3: 3x | Training Efficiency" }),
            new Paragraph({ text: "Stat4: 90% | Skill Retention" }),
            new Paragraph({ text: "Cta: Modernize Your Training →" }),
        ],
    }],
});

Packer.toBuffer(doc).then((buffer) => {
    fs.writeFileSync(path.join(__dirname, "../../MELA_Content.docx"), buffer);
    console.log("Initial MELA_Content.docx created in the project root.");
});
