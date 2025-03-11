export type BrainPart = {
  id: string;
  title: string;
  content: string;
  color: string;
  icon: string;
};

export const brainParts: BrainPart[] = [
  {
    id: 'cerebral-cortex',
    title: 'Cerebral Cortex',
    content: 'The cerebral cortex is the outermost layer that surrounds the brain. It is composed of gray matter and filled with billions of neurons to conduct high-level executive functions. The cortex divides into 4 lobes: frontal, parietal, occipital, and temporal, by different sulci.',
    color: '#2563EB',
    icon: 'fa-layer-group'
  },
  {
    id: 'frontal-lobe',
    title: 'Frontal Lobe',
    content: 'The frontal lobe, located anteriorly to the central sulcus, is responsible for voluntary motor function, problem-solving, attention, memory, and language. It also contains the motor cortex and the Broca area. The motor cortex allows for the precise voluntary movements of our skeletal muscles, while the Broca area controls motor functions responsible for producing language.',
    color: '#2563EB',
    icon: 'fa-lightbulb'
  },
  {
    id: 'parietal-lobe',
    title: 'Parietal Lobe',
    content: 'The parietal lobe is separated from the occipital lobe by the parieto-occipital sulcus and is behind the central sulcus. It is responsible for processing sensory information and contains the somatosensory cortex. Neurons in the parietal lobe receive information from sensory and proprioceptors throughout the body, process the can, and form an understanding of what is being touched based on previous knowledge.',
    color: '#2563EB',
    icon: 'fa-hand-sparkles'
  },
  {
    id: 'occipital-lobe',
    title: 'Occipital Lobe',
    content: 'The occipital lobe, the visual processing center, contains the visual cortex. Like the parietal lobe, it receives information from the retina and then uses past visual experiences to interpret and recognize stimuli.',
    color: '#2563EB',
    icon: 'fa-eye'
  },
  {
    id: 'temporal-lobe',
    title: 'Temporal Lobe',
    content: 'The temporal lobe processes auditory stimuli through the auditory cortex. Sound energy activates mechanoreceptors located in the hair cells lining the cochlea, sending impulses to the auditory cortex. The impulse is processed and stored based on previous experiences. The Wernicke area is in the temporal lobe and functions in speech comprehension.',
    color: '#2563EB',
    icon: 'fa-headphones'
  },
  {
    id: 'basal-nuclei',
    title: 'Basal Nuclei',
    content: 'The basal nuclei, also known as basal ganglia, are located deep within the cerebral white matter and comprise the caudate nucleus, putamen, and globus pallidus. These structures form the pallidum and striatum. The basal ganglia are responsible for muscle movements and coordination.',
    color: '#2563EB',
    icon: 'fa-atom'
  },
  {
    id: 'thalamus',
    title: 'Thalamus',
    content: 'The thalamus is the brain\'s relay center. It receives afferent impulses from sensory receptors throughout the body and processes the information for distribution to the appropriate cortical area. It is also responsible for regulating consciousness and sleep.',
    color: '#2563EB',
    icon: 'fa-exchange-alt'
  },
  {
    id: 'hypothalamus',
    title: 'Hypothalamus',
    content: 'While the hypothalamus is one of the smallest parts of the brain, it is vital to maintaining homeostasis. The hypothalamus connects the CNS to the endocrine system. It is responsible for heart rate, blood pressure, appetite, thirst, temperature, and the release of various hormones. The hypothalamus also communicates with the pituitary gland to release or inhibit antidiuretic hormone, corticotropin-releasing hormone, gonadotropin-releasing hormone, growth hormone-releasing hormone, prolactin-inhibiting hormone, thyroid-releasing hormone, oxytocin.',
    color: '#2563EB',
    icon: 'fa-balance-scale'
  },
  {
    id: 'pons',
    title: 'Pons',
    content: 'The pons are Found in the brainstem and connect the medulla oblongata and the thalamus. It comprises tracts responsible for relaying impulses from the motor cortex to the cerebellum, medulla, and thalamus.',
    color: '#2563EB',
    icon: 'fa-project-diagram'
  },
  {
    id: 'medulla-oblongata',
    title: 'Medulla Oblongata',
    content: 'The medulla oblongata is at the bottom of the brain stem, where the spinal cord meets the foramen magnum of the skull. It is responsible for autonomic functions, some of which are crucial for survival. The medulla oblongata monitors the body\'s respiratory system using chemoreceptors. These receptors can detect changes in blood chemistry. For example, if the blood is too acidic, the medulla oblongata increases the respiratory rate, allowing more oxygen to reach the blood. It is also a cardiovascular and vasomotor center. The medulla oblongata can regulate the body\'s blood pressure, pulse, and cardiac contractions based on the body\'s needs. Lastly, it controls reflexes like vomiting, swallowing, coughing, and sneezing.',
    color: '#2563EB',
    icon: 'fa-heartbeat'
  },
  {
    id: 'cerebellum',
    title: 'Cerebellum',
    content: 'The cerebellum, known as the little brain, is responsible for smooth, coordinated voluntary movements. It is subdivided into the anterior, posterior, and flocculonodular lobes. The cerebellum contains a cerebellar circuit, using Purkinje cells and cerebellar peduncles to communicate with other brain parts. The superior cerebellar peduncle is composed of white matter that connects the cerebellum to the midbrain and allows arm and leg coordination. The inferior cerebellar peduncle connects the medulla and cerebellum using proprioceptors to maintain balance and posture. Lastly, the middle cerebellar peduncle is a one-way communication method from the pons to the cerebellum. It mostly comprises afferent fibers that alert the cerebellum about voluntary motor actions. The cerebellum communicates constantly with the cerebral cortex, taking higher-level instructions about the brain\'s intentions, processing them through the cerebellar cortex, and then sending messages to the cerebral motor cortex to make voluntary muscle contractions. These contractions are calculated to determine the force, direction, and momentum necessary to ensure each contraction is smooth and coordinated.',
    color: '#2563EB',
    icon: 'fa-walking'
  },
  {
    id: 'limbic-system',
    title: 'Limbic System',
    content: 'The limbic system comprises the piriform cortex, hippocampus, septal nuclei, amygdala, nucleus accumbens, hypothalamus, and anterior nuclei of the thalamus. The fornix and fiber tracts connect the limbic system parts, allowing them to control emotion, memory, and motivation. The piriform cortex is part of the olfactory system and is in the cortical area of the limbic system. The hypothalamus receives most of the limbic output, which explains psychosomatic illnesses, where emotional stressors cause somatic symptoms. For example, a patient who is currently having financial struggles might present to his primary care physician with hypertension and tachycardia. The septal nuclei, amygdala, and nucleus accumbens are found in the subcortical areas and are responsible for pleasure, emotional processing, and addiction, respectively.',
    color: '#2563EB',
    icon: 'fa-smile'
  },
  {
    id: 'reticular-formation',
    title: 'Reticular Formation',
    content: 'The reticular formation is an extensive network of pathways containing neurons that begins in the brainstem and travels from the top of the midbrain to the medulla oblongata. These pathways have projecting reticular neurons that affect the cerebral cortex, cerebellum, thalamus, hypothalamus, and spinal cord. The reticular formation controls the body\'s level of consciousness through the reticular activation system (RAS). Sensory axons in visual, auditory, and sensory impulses activate RAS neurons in the brain stem. These neurons then relay information to the thalamus and cerebrum. Continuous stimulation of the RAS neurons causes the cerebrum to stay aroused; this gives the feeling of alertness. However, RAS can filter out repetitive, weak stimuli; this prevents the brain from responding to unimportant information and being sensory overloaded.',
    color: '#2563EB',
    icon: 'fa-network-wired'
  },
  {
    id: 'spinal-cord',
    title: 'Spinal Cord',
    content: 'The spinal cord proper extends from the foramen magnum of the skull to the first or second lumbar vertebrae. It creates a 2-way pathway between the brain and the body and divides into 4 regions: cervical, thoracic, lumbar, and sacral. These regions are divided into 31 segments with 31 pairs of spinal nerves. There are 8 cervical nerves, 12 thoracic nerves, 5 lumbar nerves, 5 sacral nerves, and 1 coccygeal nerve. Each nerve exits the vertebral column, passing through the intervertebral foramina to its designated location in the body. Due to cervical and lumbar enlargements, the spinal cord differs in width throughout its structure. The cervical enlargement occurs at C3 to T1, and the lumbar enlargement is at L1 to S2. The white matter is present outside the spinal cord, with gray matter in its core and cerebrospinal fluid in the central canal. The gray commissure and the dorsal, lateral, and ventral horns are all composed of gray matter. The gray commissure surrounds the central canal. The dorsal horns are made of interneurons, while the ventral horns are somatic motor neurons. Afferent neurons in the dorsal roots carry impulses from the body\'s sensory receptors to the spinal cord, where the information begins to be processed. The ventral horns contain efferent motor neurons, which control the body\'s periphery. The axons of motor neurons are found in the body\'s skeletal and smooth muscles to regulate involuntary and voluntary reflexes. The spinal cord ends in a cone-shaped structure called the conus medullaris, which is supported to the end of the coccyx by the filum terminale. Ligaments are found throughout the spinal column, securing the cord from top to bottom.',
    color: '#2563EB',
    icon: 'fa-grip-lines-vertical'
  },
  {
    id: 'ascending-pathway',
    title: 'Ascending Pathway to the Brain',
    content: 'Sensory information travels from the body to the spinal cord before reaching the brain. This information ascends upwards using first, second, and third-order neurons. First-order neurons receive impulses from skin and proprioceptors and send them to the spinal cord. They then synapse with second-order neurons. Second-order neurons live in the dorsal horn and send impulses to the thalamus and cerebellum. Lastly, third-order neurons pick up these impulses in the thalamus and relay them to the somatosensory portion of the cerebrum. Somatosensory sensations are pressure, pain, temperature, and the body\'s senses.',
    color: '#2563EB',
    icon: 'fa-arrow-up'
  },
  {
    id: 'descending-pathway',
    title: 'Descending Pathway to the Brain',
    content: 'Descending tracts send motor signals from the brain to lower motor neurons. These efferent neurons then produce muscle movement.',
    color: '#2563EB',
    icon: 'fa-arrow-down'
  }
];
