export const V51FormalValidationMetadata = {
  title: 'V5.1: Formal Validation | Research System',
  description: 'Four-model jury with Krippendorff\'s alpha validation metrics.',
};

export function V51FormalValidation() {
  return (
    <>
      <section className="hero">
        <div className="container--narrow">
          <span className="hero__eyebrow"><a href="/research-system">Research System Architecture</a></span>
          <h1 className="hero__title hero__title--compact">V5.1: Formal Validation Metrics</h1>
          <p className="hero__subtitle hero__subtitle--compact">Four-model jury (added Llama) with Krippendorff's alpha validation. Pilot phase for research credibility.</p>
        </div>
      </section>

      <section className="section">
        <div className="container--wide">
          <div className="section__label">What V5.0 Lacked</div>
          <div className="pull-quote">
            <p className="pull-quote__text">V5.0 demonstrated that jury consensus works, but lacked formal inter-rater reliability (IRR) metrics. For academic rigor and publishability, researchers need Krippendorff's alpha, ICC(2,k), and pairwise agreement statistics.</p>
          </div>
          <hr className="rule" />
        </div>
      </section>

      <section className="section">
        <div className="container--wide">
          <div className="section__label">Key Innovation: Formal Validation</div>

          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--text-1)' }}>Four-Model Jury (V5.1 Innovation)</h3>
          <p>V5.1 adds Llama (open-weights model via OpenRouter) as the fourth juror. This increases methodological diversity beyond proprietary cloud models.</p>

          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-1)' }}>Krippendorff's Alpha</h3>
          <div style={{ background: 'var(--overlay)', border: '1px solid var(--rule)', padding: '1.5rem', marginTop: '1rem', marginBottom: '2rem' }}>
            <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '0.85rem', color: 'var(--text-3)', margin: 0 }}>
              α ≥ 0.80 = Excellent<br/>
              α ≥ 0.70 = Acceptable for publication<br/>
              α &lt; 0.70 = Criterion rejected or evidence revised
            </p>
          </div>

          <h3 style={{ fontFamily: 'Playfair Display, serif', fontSize: '1.4rem', marginTop: '2rem', marginBottom: '1rem', color: 'var(--text-1)' }}>ECRA Reliability Statement</h3>
          <p>All V5.1 results include an Evidence-based Credibility & Reliability Attestation (ECRA) statement documenting validation metrics.</p>

          <hr className="rule" />
        </div>
      </section>

      <section className="section">
        <div className="container--wide">
          <div className="section__label">Pilot Status</div>

          <table style={{ width: '100%', marginTop: '1.5rem', borderCollapse: 'collapse' }}>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--rule)' }}>
                <td style={{ padding: '1rem', fontFamily: 'DM Mono, monospace', fontSize: '0.85rem', color: 'var(--gold)', textTransform: 'uppercase' }}>Status</td>
                <td style={{ padding: '1rem', color: 'var(--text-1)' }}>Pilot / Awaiting calibration audit</td>
              </tr>
              <tr style={{ borderBottom: '1px solid var(--rule)' }}>
                <td style={{ padding: '1rem', fontFamily: 'DM Mono, monospace', fontSize: '0.85rem', color: 'var(--gold)', textTransform: 'uppercase' }}>Krippendorff's α Target</td>
                <td style={{ padding: '1rem', color: 'var(--text-1)' }}>≥ 0.70 per criterion</td>
              </tr>
            </tbody>
          </table>

          <hr className="rule" />
        </div>
      </section>

      <section className="section">
        <div className="container--wide">
          <div className="section__label">Key Lesson</div>
          <div className="pull-quote">
            <p className="pull-quote__text">V5.1 revealed that IRR metrics are non-negotiable for research credibility. While Llama added diversity, the real innovation was formal validation—making jury agreement measurable and publishable.</p>
          </div>
          <hr className="rule" />
        </div>
      </section>

      <section className="section">
        <div className="container--wide">
          <div style={{ display: 'flex', gap: '2rem', justifyContent: 'space-between', alignItems: 'center', marginTop: '2rem' }}>
            <a href="/research-system/v5-0-evidence-jury" style={{ color: 'var(--text-1)', textDecoration: 'none', borderBottom: '1px solid var(--gold)', paddingBottom: '0.25rem' }}>
              ← See V5.0's three-model approach
            </a>
            <a href="/research-system/v5-2-deepseek-case-study" style={{ color: 'var(--text-1)', textDecoration: 'none', borderBottom: '1px solid var(--gold)', paddingBottom: '0.25rem' }}>
              See why V5.2 was tested and rejected →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
