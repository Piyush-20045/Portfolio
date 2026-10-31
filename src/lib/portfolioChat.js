const normalize = (text) => text.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const contains = (query, phrase) => (` ${query} `).includes(` ${normalize(phrase)} `);

// Deterministic lookup, not a language model. Never generates personal facts.
export function answerPortfolioQuestion(question, data, previousProject = null) {
  const { profile, projects, skills, experience, socials, blogs } = data;
  const query = normalize(question);
  const has = (...phrases) => phrases.some((phrase) => contains(query, phrase));
  const reply = (text, links = [], project = null) => ({ text, links, project });
  const contactLinks = socials.filter((item) => ["Email", "Linkedin", "Github"].includes(item.label))
    .map(({ label, href }) => ({ label, href }));
  const namedProject = projects.find((item) => contains(query, item.title) || contains(query, item.title.split(/[ –]/)[0]));
  const shortFollowup = /^(features|tech stack|source code|github|demo|live|links|more details)$/.test(query);
  const followup = shortFollowup || /^(and |what |which |how |tell |its |it |show |features|tech|stack|source|github|demo|live|links|more)/.test(query)
    && has("it", "its", "that project", "features", "tech stack", "source code", "demo", "more details", "what did he learn");
  const project = namedProject || (followup && projects.find((item) => item.title === previousProject));
  if (project) {
    const detail = has("learn", "learned") ? project.whatILearned : has("features", "feature") ? project.features : null;
    return reply(`${project.title}\n\n${detail ? detail.map((line) => `• ${line}`).join("\n") : project.description}\n\nBuilt with: ${project.tags.join(", ")}.`, [
      { label: "Visit project", href: project.liveUrl },
      { label: "Source code", href: project.githubUrl },
    ], project.title);
  }
  const faq = profile.faqs.find((item) => item.keywords.some((keyword) => contains(query, keyword)));
  if (faq) return reply(faq.answer);
  if (has("salary", "age", "birthday", "education", "college", "degree", "rate", "rates", "price", "pricing", "phone", "married")) {
    return reply("I don't have that information in Piyush's public portfolio. You can ask him directly using the links below.", contactLinks);
  }
  if (has("contact", "email", "reach", "linkedin", "github", "social")) return reply("You can reach Piyush by email or LinkedIn, or explore his code on GitHub.", contactLinks);
  if (has("resume", "cv")) return reply("You can view Piyush's resume here.", [{ label: "View resume", href: profile.resumeUrl }]);
  if (has("hire", "hiring", "available", "availability", "freelance", "collaborate", "collaboration")) return reply(profile.availability, contactLinks);
  if (has("experience", "internship", "intern", "worked", "work history", "socialmoon")) return reply(experience.map((item) => `${item.role} · ${item.company}\n${item.date} · ${item.type}\n${item.bullets.join("\n")}`).join("\n\n"));
  if (has("blog", "blogs", "articles", "writing")) return reply("Piyush writes about web development. Here are his published articles:", blogs.map((item) => ({ label: item.title, href: item.link })));
  if (has("location", "based", "city", "where does he live", "where is he", "where is piyush", "where are you", "where do you live", "where is he from")) return reply(profile.location);
  if (has("hobbies", "hobby", "chess", "interests", "free time")) return reply(profile.interests);
  const mentionedSkills = skills.filter((skill) => contains(query, skill.name) || contains(query, skill.name.replace(/\.js|js$/i, "")));
  if (has("projects", "project", "built", "portfolio", "work", "developed") || mentionedSkills.length) {
    const matching = mentionedSkills.length ? projects.filter((item) => mentionedSkills.some((skill) => item.tags.some((tag) => normalize(tag).replace(/\s?js$/, "") === normalize(skill.name).replace(/\s?js$/, "")))) : projects;
    if (mentionedSkills.length && !has("project", "projects", "built", "work", "developed")) return reply(`Piyush lists ${mentionedSkills.map((item) => item.name).join(", ")} among his skills.\n\nHis full skill set: ${skills.map((item) => item.name).join(", ")}.`);
    return reply(matching.length ? `Here are ${mentionedSkills.length ? "matching" : "Piyush's"} projects. Ask about a project by name for its features, technologies, and source code.\n\n${matching.map((item) => `• ${item.title}: ${item.description}`).join("\n\n")}` : "I couldn't find a project tagged with that technology. Try asking about all projects or his skills.");
  }
  if (has("skills", "skill", "technologies", "stack", "languages", "tools", "tech")) return reply(`Piyush works with:\n\n${skills.map((item) => item.name).join(", ")}.`);
  if (has("about", "who", "introduce", "yourself")) return reply(profile.introduction);
  if (/^(hi|hello|hey|hi there|hello there)$/.test(query)) return reply("Hi! I can help you explore Piyush's projects, skills, experience, and contact details. What would you like to know?");
  if (has("thanks", "thank you")) return reply("You're welcome! Feel free to ask about a project or how to get in touch with Piyush.");
  return reply("I couldn't match that question to my portfolio information. I'm a local FAQ assistant, so try asking about Piyush's skills, experience, projects, resume, or contact details.", contactLinks);
}
