export type ReceptorInfo = {
  id: string;
  title: string;
  content: string;
  color: string;
  icon: string;
};

export const receptorInfo: ReceptorInfo[] = [
  {
    id: 'alpha-blockers',
    title: 'Alpha Receptor Blockers',
    content: 'Alpha blockers inhibit the effect of catecholamines at alpha-adrenergic receptors. They are divided into:\n\n- Alpha-1 Selective: Block postsynaptic alpha-1 receptors causing vasodilation (e.g., Prazosin, Doxazosin)\n\n- Alpha-2 Selective: Block presynaptic alpha-2 receptors, increasing norepinephrine release (e.g., Yohimbine)\n\n- Non-selective: Block both alpha-1 and alpha-2 receptors (e.g., Phenoxybenzamine)',
    color: '#7C3AED',
    icon: 'fa-ban'
  },
  {
    id: 'beta-blockers',
    title: 'Beta Receptor Blockers',
    content: 'Beta blockers compete with catecholamines for binding at beta-adrenergic receptors. They are classified as:\n\n- Beta-1 Selective: Preferentially block beta-1 receptors in the heart (e.g., Metoprolol, Atenolol)\n\n- Beta-2 Selective: Preferentially block beta-2 receptors in bronchi and blood vessels (rare in therapeutic use)\n\n- Non-selective: Block both beta-1 and beta-2 receptors (e.g., Propranolol, Nadolol)',
    color: '#7C3AED',
    icon: 'fa-heart-broken'
  },
  {
    id: 'mixed-blockers',
    title: 'Mixed Alpha/Beta Blockers',
    content: 'These agents block both alpha and beta receptors to varying degrees:\n\n- Labetalol: Blocks alpha-1, beta-1, and beta-2 receptors\n\n- Carvedilol: Blocks alpha-1, beta-1, and beta-2 receptors\n\n- These medications are particularly useful in conditions requiring dual blockade like hypertension with elevated sympathetic activity.',
    color: '#7C3AED',
    icon: 'fa-random'
  },
  {
    id: 'central-agents',
    title: 'Centrally Acting Sympatholytic Agents',
    content: 'These medications act in the central nervous system to reduce sympathetic outflow:\n\n- Clonidine: Stimulates central alpha-2 receptors, reducing sympathetic outflow\n\n- Methyldopa: Converted to alpha-methylnorepinephrine, which stimulates central alpha-2 receptors\n\n- Reserpine: Depletes catecholamines from nerve terminals\n\n- These agents typically produce effects on both heart rate and blood pressure.',
    color: '#7C3AED',
    icon: 'fa-brain'
  }
];

export const parasympatholiticInfo: ReceptorInfo[] = [
  {
    id: 'muscarinic-blockers',
    title: 'Muscarinic Receptor Antagonists',
    content: 'These agents block muscarinic acetylcholine receptors, inhibiting parasympathetic activity:\n\n- Non-selective: Block all muscarinic receptor subtypes (M1-M5) (e.g., Atropine, Scopolamine)\n\n- M1 Selective: Block mainly M1 receptors (e.g., Pirenzepine used for peptic ulcers)\n\n- M3 Selective: Block mainly M3 receptors (e.g., Tiotropium used for COPD)',
    color: '#7C3AED',
    icon: 'fa-slash'
  },
  {
    id: 'ganglionic-blockers',
    title: 'Ganglionic Blockers',
    content: 'These agents block transmission at autonomic ganglia:\n\n- Nicotinic receptor antagonists: Block nicotinic acetylcholine receptors at both sympathetic and parasympathetic ganglia (e.g., Hexamethonium, Mecamylamine)\n\n- These medications are rarely used due to their non-selective effects on both divisions of the autonomic nervous system',
    color: '#7C3AED',
    icon: 'fa-unlink'
  },
  {
    id: 'neuromuscular-blockers',
    title: 'Neuromuscular Junction Blockers',
    content: 'These agents block acetylcholine receptors at the neuromuscular junction:\n\n- Non-depolarizing blockers: Competitive antagonists at nicotinic receptors (e.g., Pancuronium, Vecuronium)\n\n- Depolarizing blockers: Cause sustained depolarization and receptor desensitization (e.g., Succinylcholine)\n\n- Used primarily in anesthesia and mechanical ventilation',
    color: '#7C3AED',
    icon: 'fa-hand-paper'
  },
  {
    id: 'specific-anticholinergics',
    title: 'Specific Anticholinergic Medications',
    content: 'Anticholinergic medications with specific clinical applications:\n\n- Ophthalmic use: Pupil dilation and cycloplegia (e.g., Tropicamide, Cyclopentolate)\n\n- Respiratory use: Bronchodilation in asthma and COPD (e.g., Ipratropium, Tiotropium)\n\n- Urinary tract: Treatment of overactive bladder (e.g., Oxybutynin, Tolterodine)\n\n- Gastrointestinal: Treatment of spasms and hypermotility (e.g., Dicyclomine, Hyoscyamine)',
    color: '#7C3AED',
    icon: 'fa-prescription-bottle'
  }
];
