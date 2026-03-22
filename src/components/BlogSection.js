import React, { useState } from "react";
import "../style/Blog.css";

const POSTS = [
  {
    id: "lstm-forecasting",
    title: "LSTM Deep Learning: From 3% to 74% Forecast Accuracy",
    date: "Jul 2024",
    readTime: "6 min read",
    tags: ["PyTorch", "LSTM", "Deep Learning", "Time Series"],
    summary:
      "How I built a bidirectional LSTM sales forecasting model on 100,000+ retail records, iterated from a baseline 3% to 74% accuracy through architecture tuning and regularization.",
    sections: [
      {
        heading: "The Problem",
        body: "A retail client needed reliable sales forecasts across hundreds of SKUs with strong weekly and seasonal patterns. Linear regression and ARIMA models were failing at capturing long-range dependencies in the sequence data.",
      },
      {
        heading: "Architecture & Key Decisions",
        body: "I used a bidirectional LSTM in PyTorch — processing sequences both forward and backward to capture context from both directions. The input was a sliding window of 30-day sequences with engineered lag features, rolling averages, and day-of-week encoding. A final fully-connected layer outputs the forecast horizon.",
      },
      {
        heading: "Iteration & Debugging",
        body: "The first model scored only 3% accuracy. Root cause: the normalization was wrong — I was normalizing globally instead of per-SKU, causing massive scale distortions. After fixing normalization and adding dropout (0.3) for regularization, I retrained from scratch. Accuracy jumped to 58%, then to 74% after tuning hidden size (256 → 512) and adding a second LSTM layer.",
      },
      {
        heading: "Results",
        body: "Final model achieved 74% accuracy on held-out test data across 100,000+ records. Visualizations of actual vs. forecasted sales were embedded in stakeholder reports, directly informing inventory reorder decisions.",
      },
    ],
  },
  {
    id: "faiss-rag-manufacturing",
    title: "Building a Production RAG System for Manufacturing SOPs",
    date: "Jan 2024",
    readTime: "8 min read",
    tags: ["FAISS", "RAG", "LLM", "HyDE", "Python", "Manufacturing"],
    summary:
      "How I implemented a FAISS + Ollama retrieval-augmented generation pipeline at a manufacturing plant — reducing SOP lookup time by 31% and improving cross-shift knowledge consistency by 20%.",
    sections: [
      {
        heading: "The Problem",
        body: "Operators at Leadman Electronics needed to quickly look up SOPs, troubleshooting guides, and machine specifications during production shifts. Manual search through PDFs was slow and inconsistent across shifts, leading to process deviations and extended downtime.",
      },
      {
        heading: "System Design",
        body: "I built a hybrid retrieval pipeline: (1) Offline indexing — chunk SOP documents, embed with a sentence transformer, store vectors in FAISS for dense retrieval. (2) FTS5 SQLite full-text search for keyword fallback. (3) Online query — apply HyDE (Hypothetical Document Embeddings) to expand sparse queries before retrieval, then pass top-k chunks to Ollama (GPT OSS 120B) for grounded answer generation.",
      },
      {
        heading: "HyDE: Why It Matters",
        body: "Operators often typed fragmented queries like 'solder paste reflow temp'. HyDE generates a hypothetical ideal document answer first, then uses that embedding for retrieval — dramatically improving recall on short technical queries compared to direct query embedding.",
      },
      {
        heading: "Results & Lessons",
        body: "Deployed to 3 factories. Lookup time dropped by 31%, and cross-shift answer consistency improved by 20% (measured via audit sampling). Key lesson: chunking strategy matters more than model choice — overlapping 512-token chunks with 64-token stride outperformed fixed splits on long procedural documents.",
      },
    ],
  },
];

const PostCard = ({ post }) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <article className="blog-card">
      <div className="blog-card-meta">
        <span className="blog-date">{post.date}</span>
        <span className="blog-divider">·</span>
        <span className="blog-read-time">{post.readTime}</span>
      </div>

      <h3 className="blog-title">{post.title}</h3>
      <p className="blog-summary">{post.summary}</p>

      <div className="blog-tags">
        {post.tags.map((t) => (
          <span key={t} className="blog-tag">{t}</span>
        ))}
      </div>

      {expanded && (
        <div className="blog-content">
          {post.sections.map((sec) => (
            <div key={sec.heading} className="blog-section">
              <h4 className="blog-section-heading">{sec.heading}</h4>
              <p className="blog-section-body">{sec.body}</p>
            </div>
          ))}
        </div>
      )}

      <button
        className="blog-toggle"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        {expanded ? "▲ Show less" : "▼ Read full article"}
      </button>
    </article>
  );
};

const BlogSection = () => (
  <section id="blog" className="page-section blog-section">
    <span className="sec-num" aria-hidden="true">05</span>
    <div className="sec-eyebrow"><span>Technical Writing</span></div>
    <h2 className="sec-heading">Blog</h2>
    <div className="blog-grid">
      {POSTS.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  </section>
);

export default BlogSection;
