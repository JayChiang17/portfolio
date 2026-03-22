import React, { useState, useEffect } from "react";
import {
  RadarChart, Radar, PolarGrid, PolarAngleAxis,
  PolarRadiusAxis, ResponsiveContainer, Tooltip,
} from "recharts";
import "../style/SkillsRadar.css";

const RADAR_DATA = [
  { axis: "Data Engineering", score: 92 },
  { axis: "ML / AI",          score: 82 },
  { axis: "Backend / API",    score: 88 },
  { axis: "Frontend",         score: 78 },
  { axis: "DevOps / Infra",   score: 72 },
];

const getThemeColors = () => {
  const s = getComputedStyle(document.documentElement);
  return {
    accent:     s.getPropertyValue("--c-accent").trim()      || "#B4846C",
    accentDark: s.getPropertyValue("--c-accent-dark").trim() || "#5C4A3A",
    border:     s.getPropertyValue("--c-border").trim()      || "#E2D8CD",
    textSec:    s.getPropertyValue("--c-text-sec").trim()    || "#5C4A3A",
    surface:    s.getPropertyValue("--c-surface").trim()     || "#FFFFFF",
  };
};

const useThemeColors = () => {
  const [colors, setColors] = useState(getThemeColors);
  useEffect(() => {
    const obs = new MutationObserver(() => setColors(getThemeColors()));
    obs.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
    return () => obs.disconnect();
  }, []);
  return colors;
};

const CustomTooltip = ({ active, payload }) => {
  if (!active || !payload?.length) return null;
  const { axis, score } = payload[0].payload;
  return (
    <div className="radar-tooltip">
      <p className="radar-tooltip-label">{axis}</p>
      <p className="radar-tooltip-score">{score}<span>/100</span></p>
    </div>
  );
};

const SkillsRadar = () => {
  const colors = useThemeColors();
  return (
    <div className="skills-radar-wrap">
      <p className="skills-radar-title">Proficiency Overview</p>
      <ResponsiveContainer width="100%" height={320}>
        <RadarChart data={RADAR_DATA} margin={{ top: 16, right: 40, bottom: 16, left: 40 }}>
          <PolarGrid stroke={colors.border} />
          <PolarAngleAxis
            dataKey="axis"
            tick={{ fill: colors.textSec, fontSize: 12, fontWeight: 600 }}
          />
          <PolarRadiusAxis
            angle={90}
            domain={[0, 100]}
            tick={false}
            axisLine={false}
          />
          <Radar
            name="Jay"
            dataKey="score"
            stroke={colors.accent}
            fill={colors.accent}
            fillOpacity={0.22}
            strokeWidth={2}
          />
          <Tooltip content={<CustomTooltip />} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillsRadar;
