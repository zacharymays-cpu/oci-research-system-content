export const DataGovernanceMetadata = {
  title: 'Data Governance & Privacy | Research System',
  description: 'How this system protects the people named in its records, tracks relationships between organizations, and gates what becomes public.',
};

export function DataGovernance() {
  return (
    <>
      <section className="hero">
        <div className="container--narrow">
          <span className="hero__eyebrow"><a href="/research-system">Research System Architecture</a></span>
          <h1 className="hero__title hero__title--compact">Protecting People, Governing Data</h1>
          <p className="hero__subtitle hero__subtitle--compact">
            Behind every score is a record of real people and real organizations. Here's how their data is protected, connected, and gated before anything goes public.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container--wide">
          <div className="section__label">Why This Matters</div>
          <p>
            Many of the people named in this dataset are survivors, family members, or minors at the time events occurred. Publishing their real names alongside sensitive personal history would create a second harm on top of the first. This system is built so that a person's story can be documented — and their existence in the record verified — without ever displaying who they are.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container--wide">
          <div className="section__label">How Identities Are Protected</div>
          <p style={{ marginBottom: '1rem' }}>
            Every named person gets a permanent internal record, but the public site only ever shows a short anonymous label — something like <code style={{ fontFamily: 'DM Mono, monospace' }}>P-3f9a21bc</code> — never a real name.
          </p>
          <ul style={{ paddingLeft: '2rem', color: 'var(--text-1)', fontSize: '0.95rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><strong>Encrypted, not deleted:</strong> where a real name is known, it's stored encrypted (AWS KMS envelope encryption), never as plain text. The plaintext name column doesn't exist in the database at all — it was removed after migration, not just hidden.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Duplicate detection without decryption:</strong> a one-way cryptographic fingerprint (a "blind index") lets the system recognize when two records refer to the same person, without ever reversing the encryption to check.</li>
            <li style={{ marginBottom: '0.5rem' }}><strong>Family ties hidden by default:</strong> relationships between people (parent, sibling, spouse) are not shown publicly, since inferring an anonymous person's identity through a named relative is a common re-identification path.</li>
            <li><strong>Decryption is a gated, logged action:</strong> reversing the encryption to reveal a real name requires an authenticated, audited request — it is not something the public site, or a casual database query, can do.</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container--wide">
          <div className="section__label">How Organizations Relate to Each Other</div>
          <p style={{ marginBottom: '1rem' }}>
            Organizations rarely exist in isolation — one group splits from another, adopts another's tactics, or grows directly out of a predecessor's ideology. This system tracks those relationships explicitly, rather than leaving them as background knowledge in someone's head.
          </p>
          <div className="pull-quote">
            <p className="pull-quote__text">
              Every recorded relationship is tagged with a specific type — founded by, ideological heir, tactical evolution, institutional successor, media pipeline, or documented influence — so a reader can see not just <em>that</em> two organizations are connected, but <em>how</em>.
            </p>
          </div>
          <p style={{ marginTop: '1rem' }}>
            A chain of these links can trace a lineage across decades — for example, an ideological throughline running from one movement, through an intermediate successor organization, to a present-day group presenting a similar worldview under a different name.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container--wide">
          <div className="section__label">What's Staged but Not Yet Public</div>
          <p>
            Some data is loaded into the system ahead of publication and deliberately held back — for instance, large batches of physical location data for organizations with many sites. These records exist internally but stay switched off until they've been individually reviewed, so bulk data entry never becomes bulk publication.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container--wide">
          <div className="section__label">Human Review, Always</div>
          <p>
            None of the above is automatic in the sense of "unsupervised." New organizations, new locations, and new personnel records all pass through a human curation queue before they're published — the same governance principle described in the <a href="/research-system/overview" style={{ color: 'var(--gold)', borderBottom: '1px solid var(--gold)', paddingBottom: '0.1rem' }}>scoring system's human review gate</a> applies here too: the system proposes, a person decides.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container--wide">
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
            <a href="/research-system/evidence-pipeline" style={{ color: 'var(--text-1)', textDecoration: 'none', borderBottom: '1px solid var(--gold)', paddingBottom: '0.25rem' }}>
              ← How evidence gets gathered
            </a>
            <a href="/research-system/overview" style={{ color: 'var(--text-1)', textDecoration: 'none', borderBottom: '1px solid var(--gold)', paddingBottom: '0.25rem' }}>
              Back to system overview →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
