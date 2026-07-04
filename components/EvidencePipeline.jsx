export const EvidencePipelineMetadata = {
  title: 'How Evidence Gets Gathered | Research System',
  description: 'The free-first, cost-ordered sourcing pipeline that builds an evidence brief for a candidate organization before it is ever scored — and how it differs from this section\'s methodology history.',
};

export function EvidencePipeline() {
  return (
    <>
      <section className="hero">
        <div className="container--narrow">
          <span className="hero__eyebrow"><a href="/research-system">Research System Architecture</a></span>
          <h1 className="hero__title hero__title--compact">How Evidence Gets Gathered</h1>
          <p className="hero__subtitle hero__subtitle--compact">
            Before a jury ever scores an organization, something has to go find out what's actually known about it. Here's that process.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container--wide">
          <div className="section__label">A Different "Research"</div>
          <div className="pull-quote">
            <p className="pull-quote__text">
              The rest of this Research System section documents how the <em>scoring methodology itself</em> evolved — V4.0 through V6.1. This page is about something else entirely: the pipeline that gathers real-world evidence about a specific candidate organization, before that organization is ever scored. The two share a name, not a mechanism.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container--wide">
          <div className="section__label">A Cost-Ordered, Free-First Search</div>
          <p style={{ marginBottom: '1rem' }}>
            When a new organization is proposed for the dataset, the system works through a fixed order of sources — cheapest and most structured first, most expensive last — and stops as soon as it has enough:
          </p>
          <ol style={{ paddingLeft: '2rem', color: 'var(--text-1)', fontSize: '0.95rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Existing structured datasets on terrorism, political violence, and extremism</li>
            <li style={{ marginBottom: '0.5rem' }}>Established institutional watchdog research and analysis</li>
            <li style={{ marginBottom: '0.5rem' }}>General encyclopedic sources</li>
            <li style={{ marginBottom: '0.5rem' }}>Historical web archives, for organizations with a thin present-day footprint</li>
            <li style={{ marginBottom: '0.5rem' }}>Academic literature search</li>
            <li style={{ marginBottom: '0.5rem' }}>Public government records — court filings, regulatory filings, spending and disclosure databases, dozens of agency sources</li>
            <li>Only as a last resort: paid, general-purpose web search, when every free avenue above comes up short</li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container--wide">
          <div className="section__label">Turning Sources Into a Brief</div>
          <p>
            Whatever is found gets synthesized into a structured evidence brief, organized around the same ten scoring criteria the jury evaluates against (see the <a href="/research-system/overview" style={{ color: 'var(--gold)', borderBottom: '1px solid var(--gold)', paddingBottom: '0.1rem' }}>system overview</a>). This brief — not raw search results — is what the jury actually reads when it scores an organization.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container--wide">
          <div className="section__label">Deeper Dossiers for Individual Cases</div>
          <p style={{ marginBottom: '1rem' }}>
            Some organizations warrant more than a brief — a full narrative dossier tracing history, key figures, and documented practices in depth. Those go through an additional fact-checking pass before anything from them is used: every citation is checked against its source.
          </p>
          <p>
            That check isn't a formality. In practice it has caught meaningful fabrication — one dossier's automated first draft invented roughly a quarter of its citations outright, all of which were removed before the material was used for anything.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container--wide">
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
            <a href="/research-system/overview" style={{ color: 'var(--text-1)', textDecoration: 'none', borderBottom: '1px solid var(--gold)', paddingBottom: '0.25rem' }}>
              ← Back to system overview
            </a>
            <a href="/research-system/data-governance" style={{ color: 'var(--text-1)', textDecoration: 'none', borderBottom: '1px solid var(--gold)', paddingBottom: '0.25rem' }}>
              How people's identities are protected →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
