import React, { useState, useEffect, useRef } from "react";
import "../style/Terminal.css";

const SEQUENCE = [
  { kind: "cmd",  text: "whoami" },
  { kind: "out",  lines: ["Jay Chiang  ·  Data Engineer  ·  M.S. Applied Data Science @ U of Michigan"] },
  { kind: "cmd",  text: "experience --current" },
  { kind: "out",  lines: [
    "Leadman Electronics  |  Data Engineer  |  Jan 2024 – Present",
    "  › Real-time MES dashboards · AI retrieval (FAISS) · Airflow · K8s",
  ]},
  { kind: "cmd",  text: "skills --top" },
  { kind: "out",  lines: [
    "Python  ·  FastAPI  ·  React  ·  PostgreSQL  ·  Docker",
    "Kubernetes  ·  Airflow  ·  FAISS  ·  Pandas  ·  PyTorch",
  ]},
  { kind: "cmd",  text: "impact --stats" },
  { kind: "out",  lines: [
    "↑ 30% throughput     ·  98% pipeline success",
    "↓ 90% misrouting     ·  60% faster reporting",
  ]},
  { kind: "cmd",  text: "education" },
  { kind: "out",  lines: [
    "M.S. Applied Data Science — University of Michigan (2026)",
    "B.S. Technology Info Management — UC Santa Cruz (2023)",
  ]},
  { kind: "cmd",  text: "contact --info" },
  { kind: "out",  lines: [
    "chiang.mengchieh@gmail.com",
    "linkedin.com/in/jay-chiang-9054001a7  ·  github.com/JayChiang17",
  ]},
];

const CHAR_SPEED    = 42;
const POST_CMD_MS   = 280;
const POST_OUT_MS   = 560;
const INIT_DELAY_MS = 400;

const TerminalAbout = () => {
  const [rows, setRows]   = useState([]);
  const [typing, setTyping] = useState("");
  const [done, setDone]   = useState(false);
  const stateRef  = useRef({ seqIdx: 0, charIdx: 0 });
  const timerRef  = useRef(null);
  const bodyRef   = useRef(null);

  useEffect(() => {
    const step = () => {
      const { seqIdx, charIdx } = stateRef.current;
      if (seqIdx >= SEQUENCE.length) { setDone(true); return; }

      const item = SEQUENCE[seqIdx];

      if (item.kind === "cmd") {
        if (charIdx < item.text.length) {
          stateRef.current.charIdx++;
          setTyping(item.text.slice(0, charIdx + 1));
          timerRef.current = setTimeout(step, CHAR_SPEED);
        } else {
          stateRef.current.charIdx = 0;
          stateRef.current.seqIdx++;
          setTyping("");
          setRows((prev) => [...prev, { kind: "cmd", text: item.text }]);
          timerRef.current = setTimeout(step, POST_CMD_MS);
        }
      } else {
        stateRef.current.seqIdx++;
        setRows((prev) => [...prev, { kind: "out", lines: item.lines }]);
        timerRef.current = setTimeout(step, POST_OUT_MS);
      }
    };

    timerRef.current = setTimeout(step, INIT_DELAY_MS);
    return () => clearTimeout(timerRef.current);
  }, []);

  // Auto-scroll terminal body
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [rows, typing]);

  return (
    <div className="terminal" role="region" aria-label="Interactive terminal about me">
      <div className="terminal-header" aria-hidden="true">
        <span className="terminal-dot terminal-dot--red"   />
        <span className="terminal-dot terminal-dot--yellow"/>
        <span className="terminal-dot terminal-dot--green" />
        <span className="terminal-title">jay@portfolio  ~  zsh</span>
      </div>
      <div className="terminal-body" ref={bodyRef}>
        {rows.map((row, i) =>
          row.kind === "cmd" ? (
            <div key={i} className="terminal-line">
              <span className="terminal-prompt" aria-hidden="true">❯</span>
              <span className="terminal-cmd">{row.text}</span>
            </div>
          ) : (
            <div key={i} className="terminal-output">
              {row.lines.map((line, j) => (
                <div key={j} className="terminal-out-line">{line}</div>
              ))}
            </div>
          )
        )}

        {!done && (
          <div className="terminal-line">
            <span className="terminal-prompt" aria-hidden="true">❯</span>
            <span className="terminal-cmd">{typing}</span>
            <span className="terminal-cursor" aria-hidden="true" />
          </div>
        )}

        {done && (
          <div className="terminal-line terminal-line--idle">
            <span className="terminal-prompt" aria-hidden="true">❯</span>
            <span className="terminal-cursor terminal-cursor--idle" aria-hidden="true" />
          </div>
        )}
      </div>
    </div>
  );
};

export default TerminalAbout;
