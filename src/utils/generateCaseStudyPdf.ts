import { jsPDF } from "jspdf";
import type { Project } from "../data/projectsData";

export function generateCaseStudyPdf(project: Project) {
  const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });

  const PAGE_W = 210;
  const PAGE_H = 297;
  const MARGIN = 20;
  const COL_W = PAGE_W - MARGIN * 2;

  // ─── Helper: wrapped text that returns next Y ────────────────────────────
  function writeText(
    text: string,
    x: number,
    y: number,
    opts: { size?: number; bold?: boolean; color?: [number, number, number]; maxWidth?: number; lineHeight?: number }
  ): number {
    const { size = 10, bold = false, color = [30, 30, 30], maxWidth = COL_W, lineHeight = 5.5 } = opts;
    doc.setFontSize(size);
    doc.setFont("helvetica", bold ? "bold" : "normal");
    doc.setTextColor(...color);
    const lines = doc.splitTextToSize(text, maxWidth);
    doc.text(lines, x, y);
    return y + lines.length * lineHeight;
  }

  // ─── Helper: horizontal rule ─────────────────────────────────────────────
  function hr(y: number, color: [number, number, number] = [220, 220, 220]) {
    doc.setDrawColor(...color);
    doc.setLineWidth(0.3);
    doc.line(MARGIN, y, PAGE_W - MARGIN, y);
    return y + 4;
  }

  // ─── Helper: section header ──────────────────────────────────────────────
  function sectionHeader(label: string, y: number): number {
    doc.setFillColor(16, 90, 200); // primary blue
    doc.roundedRect(MARGIN, y, 3, 7, 1, 1, "F");
    y = writeText(label.toUpperCase(), MARGIN + 6, y + 5.5, { size: 8.5, bold: true, color: [16, 90, 200] });
    return y + 2;
  }

  // ─── Helper: bullet list ─────────────────────────────────────────────────
  function bulletList(items: string[], x: number, y: number, color: [number, number, number] = [60, 60, 60]): number {
    for (const item of items) {
      doc.setFillColor(...color);
      doc.circle(x + 1.5, y - 1, 0.9, "F");
      y = writeText(item, x + 5, y, { size: 9, color });
      y += 1;
    }
    return y;
  }

  let y = MARGIN;

  // ═══════════════════════════════════════════════════════════════════════
  // TOP HEADER BAND
  // ═══════════════════════════════════════════════════════════════════════
  doc.setFillColor(10, 25, 60);
  doc.rect(0, 0, PAGE_W, 42, "F");

  // Accent accent strip
  doc.setFillColor(16, 90, 200);
  doc.rect(0, 38, PAGE_W, 4, "F");

  // Brand name
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text("3NOVATOR TECH", MARGIN, 16);

  // Brand tagline
  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(160, 190, 230);
  doc.text("Innovative Digital Solutions", MARGIN, 23);

  // "CASE STUDY" badge on right
  doc.setFillColor(16, 90, 200);
  doc.roundedRect(PAGE_W - MARGIN - 34, 9, 34, 12, 2, 2, "F");
  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text("CASE STUDY", PAGE_W - MARGIN - 30, 16.5);

  y = 52;

  // ═══════════════════════════════════════════════════════════════════════
  // PROJECT TITLE + CATEGORY
  // ═══════════════════════════════════════════════════════════════════════
  y = writeText(project.title, MARGIN, y, { size: 22, bold: true, color: [10, 25, 60] });
  y += 2;
  y = writeText(project.category, MARGIN, y, { size: 10, color: [16, 90, 200] });
  y += 3;

  // Meta row: Timeline
  doc.setFontSize(8.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(100, 100, 100);
  doc.text(`Timeline: ${project.timeline}  ·  Role: Full Stack Development  ·  Status: Live`, MARGIN, y);
  y += 5;

  y = hr(y);

  // ═══════════════════════════════════════════════════════════════════════
  // OVERVIEW
  // ═══════════════════════════════════════════════════════════════════════
  y = sectionHeader("Project Overview", y);
  y = writeText(project.longDesc, MARGIN, y, { size: 9.5, color: [50, 50, 50], lineHeight: 5.2 });
  y += 5;

  // ═══════════════════════════════════════════════════════════════════════
  // METRICS ROW  (3 coloured cards side-by-side)
  // ═══════════════════════════════════════════════════════════════════════
  y = sectionHeader("Key Results", y);
  const cardW = (COL_W - 6) / 3;
  const metricColors: [number, number, number][] = [
    [220, 252, 231], // green-100
    [219, 234, 254], // blue-100
    [237, 233, 254], // purple-100
  ];
  const metricText: [number, number, number][] = [
    [22, 101, 52],
    [29, 78, 216],
    [109, 40, 217],
  ];

  project.metrics.forEach((metric, i) => {
    const mx = MARGIN + i * (cardW + 3);
    doc.setFillColor(...metricColors[i % metricColors.length]);
    doc.roundedRect(mx, y, cardW, 20, 2, 2, "F");
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...metricText[i % metricText.length]);
    const wrapped = doc.splitTextToSize(metric, cardW - 6);
    doc.text(wrapped, mx + 3, y + 8);
  });
  y += 26;

  // ═══════════════════════════════════════════════════════════════════════
  // TWO COLUMN: Challenge / Solution
  // ═══════════════════════════════════════════════════════════════════════
  const halfW = (COL_W - 8) / 2;

  // Challenge box
  doc.setFillColor(255, 247, 237);
  doc.roundedRect(MARGIN, y, halfW, 52, 2, 2, "F");
  doc.setFontSize(8.5);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(194, 65, 12);
  doc.text("THE CHALLENGE", MARGIN + 4, y + 8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(60, 60, 60);
  const chalLines = doc.splitTextToSize(project.challenge, halfW - 8);
  doc.text(chalLines, MARGIN + 4, y + 15);

  // Solution box
  const sx = MARGIN + halfW + 8;
  doc.setFillColor(240, 253, 244);
  doc.roundedRect(sx, y, halfW, 52, 2, 2, "F");
  doc.setFontSize(8.5);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(22, 101, 52);
  doc.text("OUR SOLUTION", sx + 4, y + 8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(60, 60, 60);
  const solLines = doc.splitTextToSize(project.solution, halfW - 8);
  doc.text(solLines, sx + 4, y + 15);

  y += 58;

  // ═══════════════════════════════════════════════════════════════════════
  // DELIVERABLES + TECH STACK (two columns)
  // ═══════════════════════════════════════════════════════════════════════
  const startY = y;
  y = sectionHeader("Deliverables", y);
  let rightY = startY;
  const leftEndY = bulletList(project.deliverables, MARGIN, y) + 5;

  // Tech stack right column
  rightY = sectionHeader("Technology Stack", rightY);
  const techCols = Math.ceil(project.technologies.length / 2);
  project.technologies.forEach((tech, i) => {
    const tx = i < techCols ? MARGIN + halfW + 8 : MARGIN + halfW + 8 + halfW / 2;
    const ty = rightY + Math.floor((i / techCols) % 2 === 0 ? i : i - techCols) * 7;
    doc.setFillColor(239, 246, 255);
    doc.roundedRect(tx - 1, ty - 4.5, halfW / 2 - 2, 6, 1, 1, "F");
    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(29, 78, 216);
    doc.text(tech, tx + 1, ty);
  });

  y = Math.max(leftEndY, rightY + techCols * 7 + 10);

  // ═══════════════════════════════════════════════════════════════════════
  // FOOTER
  // ═══════════════════════════════════════════════════════════════════════
  const footerY = PAGE_H - 14;
  doc.setFillColor(10, 25, 60);
  doc.rect(0, footerY, PAGE_W, 14, "F");

  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(160, 190, 230);
  doc.text("3Novator Tech  ·  hello@3novator.tech  ·  www.3novator.tech", MARGIN, footerY + 8);
  doc.text(`© ${new Date().getFullYear()} 3Novator Tech. All rights reserved.`, PAGE_W - MARGIN - 60, footerY + 8);

  // ─── Save ────────────────────────────────────────────────────────────
  const filename = `${project.id}-case-study.pdf`;
  doc.save(filename);
}
