import { SocialLinks } from "../../data/socialLinks";
import StatusDot from "../../ui/status-dot";

const Contact = () => {
  return (
    <section
      id="contact"
      className="scroll-mt-8 border-y border-slate-200 px-4 py-14 dark:border-neutral-800 md:px-8"
    >
      <div className="mx-auto max-w-xl text-center">
        <h2 className="flex justify-center items-center gap-3 text-2xl font-semibold text-slate-900 dark:text-white md:text-3xl">
          <StatusDot />
          Let's connect
        </h2>
        <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-neutral-400">
          Find me online, or reach out whenever you would like to start a
          conversation.
        </p>

        <div className="mt-9 flex items-center gap-4 text-xs font-medium uppercase text-slate-500 dark:text-neutral-400">
          <span className="h-px flex-1 bg-slate-200 dark:bg-neutral-800" />
          Find me on
          <span className="h-px flex-1 bg-slate-200 dark:bg-neutral-800" />
        </div>

        <div className="mt-7 flex flex-wrap justify-center gap-3">
          {SocialLinks.map((social, index) => (
            <a
              key={index}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              data-tooltip-id="social-tooltip"
              data-tooltip-content={social.label}
              aria-label={social.label}
              className={`neu-icon-btn flex size-11 items-center justify-center rounded-full text-lg text-slate-700 transition-transform duration-200 hover:-translate-y-0.5 dark:text-slate-200 ${social.hoverColor}`}
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;
