import { useEffect, useRef, useState } from "react";
import { FiArrowUpRight, FiMessageSquare, FiSend, FiX, FiRotateCcw } from "react-icons/fi";
import { chatbotProfile, chatSuggestions } from "../../data/chatbotProfile";
import { projectsData } from "../../data/projectsData";
import { skills } from "../../data/skillsData";
import { ExperienceData } from "../../data/experienceData";
import { SocialLinks } from "../../data/socialLinks";
import { BlogsData } from "../../data/blogsData";
import { answerPortfolioQuestion } from "../../lib/portfolioChat";
import "./chatbot.css";

const welcome = { role: "assistant", text: "Hey there 👋\nI'm Piyush's portfolio guide. Ask me about his work, skills, or how to get in touch.", links: [] };
const data = { profile: chatbotProfile, projects: projectsData, skills, experience: ExperienceData, socials: SocialLinks, blogs: BlogsData };

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([welcome]);
  const [draft, setDraft] = useState("");
  const [project, setProject] = useState(null);
  const input = useRef(null);
  const launcher = useRef(null);
  const log = useRef(null);

  useEffect(() => {
    if (open) input.current?.focus();
  }, [open]);
  useEffect(() => {
    if (open && log.current) log.current.scrollTop = log.current.scrollHeight;
  }, [messages, open]);

  function close() {
    setOpen(false);
    launcher.current?.focus();
  }
  function send(value) {
    const question = value.trim().slice(0, 400);
    if (!question) return;
    const answer = answerPortfolioQuestion(question, data, project);
    setMessages((previous) => [...previous, { role: "user", text: question }, { role: "assistant", ...answer }].slice(-60));
    setProject(answer.project);
    setDraft("");
    input.current?.focus();
  }

  return (
    <div className="portfolio-chat">
      {open && (
        <section id="portfolio-chat-panel" role="dialog" aria-label="Piyush's portfolio guide" className="chat-panel" onKeyDown={(event) => { if (event.key === "Escape") { event.stopPropagation(); close(); } }}>
          <header className="chat-header">
            <span className="chat-avatar" aria-hidden="true">PY</span>
            <div className="chat-heading"><h2>Ask about Piyush</h2><p><span /> Portfolio guide</p></div>
            <button type="button" className="chat-icon" aria-label="Reset conversation" title="Reset conversation" onClick={() => { setMessages([welcome]); setProject(null); setDraft(""); input.current?.focus(); }}><FiRotateCcw /></button>
            <button type="button" className="chat-icon" aria-label="Close chat" onClick={close}><FiX /></button>
          </header>
          <div ref={log} className="chat-log" role="log" aria-label="Conversation" aria-live="polite" aria-relevant="additions" tabIndex={0}>
            <p className="chat-notice">Local FAQ assistant · No AI service</p>
            {messages.map((message, index) => (
              <div key={index} className={`chat-message chat-${message.role}`}>
                <span className="chat-speaker">{message.role === "user" ? "You" : "Portfolio guide"}</span>
                <p>{message.text}</p>
                {message.links?.length > 0 && <div className="chat-links">{message.links.map((link) => <a key={link.href} href={link.href} target="_blank" rel="noopener noreferrer">{link.label}<FiArrowUpRight aria-hidden="true" /></a>)}</div>}
              </div>
            ))}
          </div>
          <div className="chat-suggestions" aria-label="Suggested questions">{chatSuggestions.map((question) => <button type="button" key={question} onClick={() => send(question)}>{question}</button>)}</div>
          <form className="chat-form" onSubmit={(event) => { event.preventDefault(); send(draft); }}>
            <label className="sr-only" htmlFor="portfolio-chat-input">Your question about Piyush</label>
            <input ref={input} id="portfolio-chat-input" value={draft} onChange={(event) => setDraft(event.target.value)} placeholder="Ask about projects, skills…" maxLength={400} autoComplete="off" />
            <button type="submit" aria-label="Send question" disabled={!draft.trim()}><FiSend /></button>
          </form>
          <p className="chat-footer">Answers from this portfolio. Chat stays in this tab.</p>
        </section>
      )}
      <button ref={launcher} type="button" className="chat-launcher" aria-expanded={open} aria-controls="portfolio-chat-panel" aria-label={open ? "Close portfolio guide" : "Open portfolio guide"} onClick={() => open ? close() : setOpen(true)}>
        {open ? <FiX aria-hidden="true" /> : <><FiMessageSquare aria-hidden="true" /><span>Ask about me</span><span className="chat-status" /></>}
      </button>
    </div>
  );
}
