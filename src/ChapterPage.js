import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const ChapterPage = () => {
  const { chapterId } = useParams();

  // Example data simulating loaded and parsed content from a text file
  const data = [
    {
        question: 'Who is the father of Plant Pathology?',
        answer: 'Anton de Bary'
    },
    {
        question: 'What is Bordeaux Mixture?',
        answer: `**Bordeaux Mixture** is a well-known fungicide and bactericide primarily used in vineyards, 
        particularly those growing Bordeaux grapes, from which it gets its name. It was accidentally discovered 
        in the Bordeaux region of France in the late 19th century. This mixture is a combination of 
        **Copper sulfate (CuSO₄)** and **Hydrated lime (Calcium Hydroxide) (Ca(OH)₂).**`
    },
    {
        question: 'Bordeaux Mixture was developed by?',
        answer: '**P.M.A. Millardet**'
    },
    {
        question: 'What is Wart disease of potato and it’s Causal Agent?',
        answer: `**Wart disease**, also known as potato wart, is a plant disease primarily affecting potatoes. 
        It is caused by the pathogenic fungus **Synchytrium endobioticum**. This disease is notorious for 
        causing significant economic losses in potato-growing regions due to its impact on the marketability of the tubers.`
    },
    {
        question:'What is Bunchy Top Banana and it’s Causal Agent ?',
        answer: `**Bunchy Top of Banana** is a serious and destructive viral disease that affects banana plants. 
        It is caused by the **Banana bunchy top virus (BBTV)**, part of the genus Babuvirus. This disease is 
        particularly devastating because it not only stunts the growth of banana plants but also leads to severe economic losses in affected regions.`
    },
    {
        question: 'What is Late Blight of Potato and it’s Causal Agent?',
        answer: `**Late blight of potato** is a devastating plant disease known for causing the Irish Potato Famine in the mid-19th century. 
        This disease is caused by the water mold **Phytophthora infestans** and remains a significant threat to potato crops worldwide.`
    },
    {
        question: 'What is Club root of cauliflower and it’s Causal Agent?',
        answer: `**Club root of cauliflower** is a widespread and severe plant disease that affects cauliflower and 
        other members of the Brassica family, such as cabbage, broccoli, and Brussels sprouts. This disease is caused 
        by the soil-borne pathogen **Plasmodiophora brassicae**, a protist that induces gall formation in the roots, 
        leading to the characteristic "clubbing" symptom.`
    },
    {
        question: 'Who is the father of Micro Biology?',
        answer: `As per Google and Wikipedia: **Antonie van Leeuwenhoek**',
        As per Nem Raj Sunda Book: **Louis Pasteur**`
    },
    {
        question: 'What is ooze test is used for?',
        answer: `The **ooze test** is a simple diagnostic method used primarily in agriculture to identify the presence of 
        **bacterial infections** in plants, particularly for soft rot and other diseases caused by bacteria like 
        *Erwinia* spp., which affect a wide variety of plant species.`
    },
    {
        question: 'What is White Rust of Cruciferous and it’s Causal Agent?',
        answer: `**White Rust of Crucifers** is a common fungal disease that affects cruciferous plants like cabbage, 
        broccoli, cauliflower, and mustards. This disease is caused by the fungus **Albugo candida**, which is an 
        obligate biotroph, meaning it can only survive and grow on living host tissues.`
    },
    {
        question: 'What is Papaya Mosaic Disease and it’s Causal Agent?',
        answer: `**Papaya Mosaic Disease** is a viral disease that affects papaya plants, causing significant economic 
        losses due to reduced fruit ability and yield. The disease is primarily caused by the 
        **Papaya mosaic virus (PapMV),** which affects not only the leaves of the plant but can also impact fruit development and plant vigor.`
    },
    {
        question: 'What is Brown spot of rice and it’s Causal Agent?',
        answer: `**Brown Spot of Rice** is a significant fungal disease that affects rice crops worldwide, 
        particularly in regions with high humidity and temperature. The disease is caused by the fungus 
        **Cochliobolus miyabeanus** (previously known as **Helminthosporium oryzae**), and it can lead 
        to substantial yield losses, especially under conditions of nutrient deficiency, particularly silicon and potassium.`
    },
    {
        question: 'What is Systemic Fungicide and who demonstrated it for the first time?',
        answer: `A **systemic fungicide** is a type of fungicide that is absorbed by a plant and then 
        distributed through its vascular system. This allows the fungicide to protect the plant from 
        fungal diseases by reaching new growth and internal tissues, which provides more complete 
        protection than contact fungicides, which only protect the parts of the plant where they are applied.`
    },
    {
        question: 'What is Cauliflower Mosaic Virus and what is special about it’s Casual Agent?',
        answer: `**Cauliflower Mosaic Virus (CaMV)** is a plant pathogen that specifically affects members 
        of the Brassicaceae family, which includes cauliflower, cabbage, broccoli, and other related crops.
        **Causal Agent**: Cauliflower Mosaic Virus belongs to the genus **Caulimovirus** within the family 
        Caulimoviridae. It has a **double-stranded DNA genome**, which is somewhat unusual for viruses, 
        as most have RNA genomes.`
    },
    {
        question: 'What is biological control?',
        answer: 'Biological control involves using living organisms to suppress pest populations, thereby reducing the impact of pests on crops and ecosystems.'
    },
    {
        question: 'What are the most effective bacteria used for biological control?',
        answer: [
            '1. Bacillus thuringiensis (Bt): Target Pests are Caterpillars, beetles, mosquitoes, and flies.',
            '2. Pseudomonas fluorescens: Target Pests are Fungi and bacteria causing plaanswer: diseases.',
            '3. Bacillus subtilis: Target Pests are Fungal pathogens like Fusarium, powdery mildew, and botrytis.',
            '4. Streptomyces spp.: Target Pests are Fungal and bacterial plant pathogens.',
            '5. Agrobacterium radiobacter (strain K84): Target Pests are Crown gall disease caused by Agrobacterium tumefaciens.'
        ]
    },
    {
        question: 'Cauliflower Mosaic Virus is used as a tool widely in?',
        answer: 'CaMV is notable not only for its impact on agriculture but also as a widely used tool in plant molecular biology and genetic engineering.'
    },
    {
        question: 'What genomes most of the plant viruses contain?',
        answer: '78% of all plant viruses are **Single Stranded RNA**.'
    },
    {
        question: 'What is the largest single group of plant viruses family?',
        answer: '**Potyviridae**'
    },
    {
        question: 'What is Carboxin?',
        answer: '**Carboxin** is a systemic fungicide known chemically as 5,6-dihydro-2-methyl-N-phenyl-1,4-oxathiin-3-carboxamide.'
    },
    {
        question: 'Carboxin is very effective against?',
        answer: [
            '**Seed and soil-borne diseases**: Including smuts and bunts in cereals (e.g., wheat and barley).',
            '**Rhizoctonia solani**: A fungus that causes root rot, damping-off, and other diseases in a variety of crops.'
        ]
    },
    {
        question: 'What is Downy Mildew of Bajra and it’s Causal Agent?',
        answer: `**Downy Mildew of Bajra** (also known as pearl millet) is a plant disease caused by the oomycete 
        pathogen **Sclerospora graminicola**. This disease is significant in regions where bajra is a staple crop, 
        such as India and parts of Africa, because it can severely impact yield and quality.`
    },
    {
        question: 'Generally Viruses are composed of?',
        answer: 'Nucleic Acid and Protein'
    },
    {
        question: 'What is Black Rust of Wheat and it’s Causal Agent?',
        answer: `**Black Rust of Wheat**, also known as stem rust, is one of the most destructive wheat diseases 
        globally. It is caused by the fungus **Puccinia graminis f. sp. tritici.**`
    },
    {
        question: 'What are Prions?',
        answer: `**Prions** are infectious agents composed entirely of a protein material that can fold in multiple, 
        structurally distinct ways, at least one of which is transmissible to other prion proteins, leading to 
        disease in the nervous system. Unlike bacteria, viruses, and fungi, prions contain no nucleic acids (DNA or RNA).`
    },
    {
        question: 'What is Agar agar?',
        answer: `**Agar agar**, commonly referred to simply as **agar**, is a gelatinous substance derived from red algae, 
        particularly from the genera *Gelidium* and *Gracilaria*. It is widely used in various industries due to its 
        unique properties as a solidifying and thickening agent.`
    },
    {
        question: 'Which regions of India are affected by the potato wart disease?',
        answer: `Wart disease of potato, caused by the fungus **Synchytrium endobioticum**, 
        is restricted primarily to the cooler, temperate regions of India where conditions are 
        conducive to the spread and survival of the pathogen. This includes parts of the northeastern 
        states and the northern hilly regions such as **Darjeeling in West Bengal** and some areas in the 
        **states of Sikkim and Himachal Pradesh.**`
    },
    {
        question: 'What is Mycoplasma?',
        answer: '**Mycoplasma** refers to a genus of bacteria that are uniquestion:e in their lack of a cell wall.'
    },
    {
        question: 'What is Mycoplasma is sensitive to?',
        answer: [
            `Mycoplasma, due to its unique characteristic of lacking a cell wall, is naturally resistant to antibiotics 
            that target cell wall synthesis. Here are some key antibiotics and mechanisms that are effective against mycoplasmas:`,
            '1. **Tetracyclines (e.g., answer:xycycline, Tetracycline)**',
            '2. **Macrolides (e.g., Erythromycin, Azithromycin)**',
            '3. **Fluoroqinolones (e.g., Ciprofloxacin, Levofloxacin)**',
            '4. **Aminoganswer:cosides (limited use)**'
        ]
    },
    {
        question: 'What are Transgenic plants?',
        answer: '**Transgenic plants** are genetically modified organisms (GMOs) that have had new genes from other species inserted into their genetic material.'
    },
    {
        question: 'What is the first Transgenic plant developed?',
        answer: 'The first transgenic plants were developed in the early 1980s, which is a tobacco plant.'
    },
    {
        question: 'What is Downy Mildew of Pearl Millet and it’s Causal Agent?',
        answer: `**Downy Mildew of Pearl Millet** is a widespread disease that affects the leaves, stems, and 
        inflorescences of pearl millet plants. The pathogen involved, **Sclerospora graminicola**, is an oomycete, 
        and the disease it causes can lead to severe yield losses, especially under humid and moist environmental conditions.`
    },
    {
        question: 'What is Loose smut of wheat and it’s Causal Agent?',
        answer: `**Loose smut of wheat** is a fungal disease that affects the kernels of wheat crops, leading to significant yield losses. 
        The disease is caused by the fungus **Ustilago tritici** (synonym **Ustilago nuda**). Unlike other smut diseases that replace all 
        the seed tissues with spores, loose smut affects the grain from inside, making it initially less noticeable until the plant reaches the flowering stage.`
    },
    {
        question: 'What is the cause of Mango malformation disease?',
        answer: 'The primary cause of mango malformation is attributed to **fungi**, particularly species of the genus **Fusarium**.'
    },
    {
        question: 'What is Powdery mildew and its Causal agent?',
        answer: `**Powdery mildew** is a common fungal disease that affects a wide variety of plants, 
        characterized by the presence of white to grayish powdery growth on the surface of leaves, stems, 
        and sometimes flowers and fruit. It is caused by many different species of fungi in the order 
        **Erysiphales**, with each species typically having a specific host range or preference.`
    },
    {
        question: 'What is the most effective fungicide for the control of powdery mildew?',
        answer: 'Application of **sulfur-based fungicides or Dinocap (Karathane)**, and synthetic options like **triazoles** or **strobilurins** can be effective, particularly when applied at the first sign of infection.'
    },
    {
        question: 'What is Potato Leaf Roll Virus?',
        answer: '**Potato Leaf Roll Virus (PLRV)** is a significant plant pathogen affecting potatoes and other members of the Solanaceae family. It is a **phloem-limited virus**, meaning it resides and moves within the plants phloem tissues (the vascular system for transporting nutrients and sugars). PLRV is a member of the genus **Polerovirus** within the family **Luteoviridae**.'
    },
    {
        question: 'What is the factor responsible for the spread of potato leaf roll virus?',
        answer: 'PLRV is primarily transmitted by **aphids** in a persistent manner. This means the virus is taken up by the aphid as it feeds on an infected plant and can then be transmitted continuously or intermittently to other plants as the aphid continues to feed.'
    },
    {
        question: 'What did Alexander Fleming discovered?',
        answer: 'Alexander Fleming is most famously known for his discovery of **penicillin in 1928**.'
    },
    {
        question: 'What are MLOs?',
        answer: 'MLOs, or Mycoplasma-like Organisms, historically referred to uncultivable plant pathogens that resembled mycoplasmas but lacked detailed classification due to early technological limitations. They are now more accurately classified under groups like phytoplasmas within the class Mollicutes.'
    },
    {
        question: 'What are Mollicutes?',
        answer: 'Mollicutes is a class of bacteria characterized by the absence of a cell wall and a reduced genome. Members of this class, including Mycoplasma, Spiroplasma, and Phytoplasma, are typically parasites or commensals of animals, plants, and insects.'
    },
    {
        question: 'What are Spiroplasma?',
        answer: 'Spiroplasma are a genus of Mollicutes known for their distinctive helical shape and lack of a cell wall. They are motile, pleomorphic, and can be found as parasites or commensals in plants and insects.'
    },
    {
        question: 'What are Phytoplasma?',
        answer: 'Phytoplasma are plant-pathogenic bacteria belonging to the class Mollicutes, known for lacking a cell wall and inhabiting plant phloem. They cause various diseases in plants, typically resulting in symptoms like yellowing, stunted growth, and abnormal leaf and flower development.'
    },
    {
        question: 'What is syndrome?',
        answer: 'A syndrome refers to a group of symptoms that consistently occur together or a condition characterized by a set of associated symptoms.'
    },
    {
        question: 'What is the first bacterial disease in plant was discovered?',
        answer: 'The first bacterial disease in plants to be scientifically recognized was Fire Blight of pears and apples.'
    },
    {
        question: 'What is Fire Blight of pears and apples?',
        answer: 'Fire blight is a serious bacterial disease that primarily affects apple and pear trees, along with some other members of the Rosaceae family such as {question:inces, crabapples, and cotoneasters. The disease is caused by the bacterium **Erwinia amylovora**. It is highly contagious and can cause significant damage to orchards, often resulting in substantial economic losses.'
    },
    {
        question: 'What is Taxonomic Order?',
        answer: 'The concept of taxonomic orders falls within the hierarchical system of biological classification, which is used to organize and categorize all living organisms based on their evolutionary relationships and shared characteristics. This system, known as taxonomy, arranges organisms into a series of ranked categories from broad to specific. The main ranks are domain, kingdom, phylum (or division in plants), class, order, family, genus, and species.'
    },
    {
        question: 'The fungi that cause late blight of potatoes belong to which specific taxonomic orders?',
        answer: 'Taxonomic order of late blight of potatoes is **Peronosporales**.'
    },
    {
        question: 'The fungi that cause white rust of crucifers belong to which specific taxonomic orders?',
        answer: 'Taxonomic order of white rust of crucifers is **Albuginales**.'
    },
    {
        question: 'What are Cybrids?',
        answer: 'Cybrids, or cytoplasmic hybrids, are cells that are created through the fusion of a whole cell with an enucleated cell (a cell from which the nucleus has been removed).'
    },
    {
        question: 'What is Cybridization?',
        answer: 'Cybridization is the fusion of a whole cell from one parent with an enucleated cell (a cell from which the nucleus has been removed) from another parent.'
    },
    {
        question: 'What is Rust Fungi?',
        answer: 'Rust fungi are a large group of fungal pathogens that primarily infect plants, causing the disease commonly known as rust. These fungi belong to the **Basidiomycota phylum**, with the majority classified under the order **Pucciniales**.'
    },
    {
        question: 'What types of Pores Rust Fungi produce in their lifetime?',
        answer: [
            '1. Spermatia (Pycniospores): Involved in sexual reproduction, facilitating genetic recombination.',
            '2. Aeciospores: Produced on the primary host, causing infection and initiating the cycle.',
            '3. Urediniospores: Repeat infective spores that spread the disease throughout the growing season.',
            '4. Teliospores: Overwintering spores that survive in harsh conditions and germinate to produce basidia, initiating the next cycle.',
            '5. Basidiospores: Result from the germination of teliospores and infect alternate hosts, continuing the cycle.'
        ]
    }, 
    {
        question: 'Which Rust Fungi has Repeating spores?',
        answer: '**Urediniospores or Uredospores** (n + n = dikaryotic)'
    },
    {
        question: 'Which sexual spores are there in down mildew fungus?',
        answer: 'Downy mildew fungi, which belong to the group of organisms called oomycetes, produce specific types of sexual spores called **oospores** (2n = diploid).'
    },
    {
        question: 'What is Blast Disease?',
        answer: 'Blast disease is a serious fungal infection that primarily affects rice plants, but can also impact other cereal crops like wheat and barley. The disease is caused by the fungus **Magnaporthe oryzae** (formerly known as Pyricularia oryzae).'
    },
    {
        question: 'The incidence of blast disease can be reduced by the application of?',
        answer: 'Silicon in the rice field.'
    },
    {
        question: 'What is smut fungi?',
        answer: 'Smut fungi are a group of fungal pathogens that primarily infect plants, causing diseases commonly known as smuts. These fungi belong to the Basidiomycota division and are characterized by their ability to infect host plants and produce large amounts of dark, powdery spores.'
    },
    {
        question: 'Smut fungi belongs to which order?',
        answer: 'Smut fungi belong primarily to the order Ustilaginales within the division Basidiomycota.'
    },
    {
        question: 'Vertical Resistance is also known as?',
        answer: 'Vertical resistance, a type of plant resistance to pathogens, is also commonly known as {question:alitative resistance or gene-for-gene resistance. This form of resistance involves specific genetic interactions between individual plant resistance (R) genes and corresponding pathogen avirulence (Avr) genes.'
    },
    {
        question: 'What are Prokaryotes?',
        answer: 'Prokaryotes are a broad group of organisms that include bacteria and archaea, characterized by the absence of a distinct nucleus and other membrane-bound organelles within their cells. This group is distinguished from eukaryotes, which have cells with a defined nucleus enclosed by a nuclear membrane.'
    },
    {
        question: 'Some examples of prokaryotes?',
        answer: 'BGA (Blue-Green Algae), bacteria, mycoplasma, and phytoplasma.'
    },
    {
        question: 'What is Moko disease of banana?',
        answer: 'Moko disease is a serious bacterial infection that affects banana and plantain plants, as well as other members of the Heliconiaceae family. The disease is caused by the bacterium Ralstonia solanacearum (previously known as Pseudomonas solanacearum) race 2, a strain of a highly variable species that causes bacterial wilt in a wide range of host plants. Moko disease is particularly destructive in banana-producing regions of Latin America and the Caribbean.'
    },
    {
        question: 'What is Pine-apple disease?',
        answer: 'Pineapple disease of sugarcane is a serious fungal infection caused by the **pathogen Ceratocystis paradoxa** (previously known as **Thielaviopsis paradoxa**). This disease gets its name from the characteristic pineapple-like odor that the infected sugarcane stalks emit as they decay. The disease primarily affects sugarcane, but it can also infect other plants, including pineapple, where it causes a different set of symptoms known as pineapple fruit collapse or black rot.'
    },
    {
        question: 'What is Agrobacterium-mediated gene transfer?',
        answer: 'Agrobacterium-mediated gene transfer is a widely used method in plant genetic engineering that exploits the natural ability of the bacterium Agrobacterium tumefaciens to transfer genetic material to plants. This process enables the insertion of specific genes into plant cells, making it possible to produce genetically modified (GM) plants with desired traits such as resistance to pests, diseases, environmental stresses, or improved nutritional profiles.'
    },
    {
        question: 'Agrobacterium-mediated gene transfer is only effective for?',
        answer: 'Agrobacterium-mediated gene transfer is primarily effective for transforming dicotyledonous (dicot) plants, which are one of the two major groups of flowering plants.'
    },
    {
        question: 'Which antibiotics are used to kill MLOs?',
        answer: 'Tetracyclines and Oxytetracycline.'
    },
    {
        question: 'What is Coffee Rust?',
        answer: 'Coffee rust, also known as coffee leaf rust, is a devastating fungal disease that affects coffee plants, particularly those of the species Coffea arabica. The disease is caused by the fungus **Hemileia vastatrix**.'
    },
    {
        question: 'What is Crystallization of virus particles?',
        answer: 'Crystallization of virus particles refers to the process of arranging individual virus particles in a highly ordered, repeating pattern to form a crystal lattice.'
    },
    {
        question: 'Crystallization of virus particles  was first obtained by?',
        answer: 'The first crystallization of virus particles was achieved by **Wendell Meredith Stanley** in 1935.'
    },
    {
        question: 'To which order Downey mildew fungi belongs?',
        answer: 'Downy mildew fungi belong to the order **Peronosporales**, which is part of the oomycete group in the kingdom Stramenopila (also referred to as Chromista).'
    },
    {
        question: 'What is ELISA test?',
        answer: 'The ELISA test, or Enzyme-Linked Immunosorbent Assay, is a popular analytical biochemistry assay that primarily uses antibodies and color change to identify a substance. ELISA is highly sensitive and specific, making it a valuable tool in detecting and {question:antifying proteins, hormones, antibodies, and antigens from various biological samples (such as blood, urine, or cell culture supernatants:).'
    },
    {
        question: 'What is ELISA test mainly done for?',
        answer: 'Viral diseases.'
    },
    {
        question: 'What is Ergot?',
        answer: 'Ergot refers to a disease in cereals and grasses caused by the fungus **Claviceps purpurea**, as well as the name of the fungus fruiting structures that replace the grains of these plants.'
    },
    {
        question: 'What is Mycelial Nature of Ergot?',
        answer: 'The fungus **Claviceps purpurea**, and the term itself can also describe the **sclerotia**, Inside the sclerotium, the fungal mycelium is dense and compact, which helps in conserving nutrients and protecting the fungus from environmental stresses. This mycelial form is vital for the ergot fungus, as it helps maintain the life cycle through periods when the host plant is not available for infection.'
    },
    {
        question: 'What are aphids?',
        answer: 'Aphids are small, soft-bodied insects that are part of the superfamily Aphidoidea. They are among the most destructive insect pests on cultivated plants in temperate regions. Aphids are particularly notorious for their rapid reproduction rates and their role in spreading plant diseases.'
    },
    {
        question: 'The most common vectors of plant viruses are?',
        answer: '**Aphids** (most prevalent and efficient), Whiteflies, Leafhoppers, Thrips, Beetles and Mites.'
    },
    {
        question: 'In downy mildew of bajra which spores are responsible for primary infection?',
        answer: 'In the case of downy mildew of bajra (pearl millet), caused by the oomycete Sclerospora graminicola, **oospores** are responsible for the primary infection.'
    },
    {
        question: 'Gram staining method in bacteria was given by?',
        answer: 'The Gram staining method, a fundamental techniquestion:e used in bacteriology to classify bacteria based on the structural differences in their cell walls, was developed by Hans Christian Gram in 1884'
    },
    {
        question: 'The effective and new fungicide for the control of Oomycetous fungi is?',
        answer: 'Metalaxyl (marketed under the trade name of Ridomil & Apron SD).'
    },
    {
        question: 'What is the most dangerous and poisonous mushroom is?',
        answer: 'The title of the most dangerous and poisonous mushroom is often attributed to the Death Cap mushroom (Amanita phalloides). This mushroom is highly toxic and is responsible for the majority of fatal mushroom poisonings worldwide. Its toxicity is due to potent toxins known as amatoxins, which can cause severe liver and kidney damage, leading to death if ingested.'
    },
    {
        question: 'What is purple blotch of onion and its causal agent?',
        answer: 'Purple blotch of onion is a fungal disease that primarily affects onions and other Allium species, such as garlic and shallots. The disease is caused by the fungus **Alternaria porri**. This fungus is known for affecting the aerial parts of the plant, leading to characteristic symptoms that can severely hinder both growth and marketability of the onions.'
    },
    {
        question: 'What is Pathogenesis?',
        answer: 'The chain of metabolic events that bring about the disease is pathogenesis.'
    },
    {
        question: 'What is Pathogenicity?',
        answer: 'The relative capability of a pathogen to cause disease.'
    },
    {
        question: 'What is Virulence?',
        answer: 'The degree of infectivity of a given pathogen.'
    },
    {
        question: 'What is Virion?',
        answer: 'It consits of nucleic acid (maybe DNA or RNA) and surronding protein coat (known as capsid).'
    },
    {
        question: 'What is infection?',
        answer: 'Establishment of pathogen after penetration, has host parasitic relationship.'
    },
    {
        question: 'What is Inoculum?',
        answer: 'Part of Pathogen, which on contact can cause infection in the host is called Inoculum. Conidia, Spores, Sclerotia etc..,'
    },
    {
        question: 'What is Invasion?',
        answer: 'The penetration and spread of a pathogen in the host.'
    },
    {
        question: 'What is Incubation period?',
        answer: 'The period of time between penetration of a pathogen to the host and the first appearance of symptoms on the plant.'
    },
    {
        question: 'What is Disease potential?',
        answer: 'It is defined as the ability of the host to contract disease.'
    }
  ];

    // Function to parse answer text and embed HTML tags for styling
    const parseAnswer = (text) => {
        if (typeof text !== 'string') {
          console.error('Invalid input for parseAnswer, expected a string:', text);
          return text;  // Return the original input if it's not a string
        }
      
        const parts = text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
          if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={index}>{part.slice(2, -2)}</strong>;
          }
          return part;
        });
        return parts;
      };
    
      const [questions, setQuestions] = useState(data.map(q => ({
        ...q,
        answer: typeof q.answer === 'string' ? parseAnswer(q.answer) : q.answer,
        showAnswer: false
      })));
    
      const toggleAnswer = (index) => {
        setQuestions(questions =>
          questions.map((q, idx) =>
            idx === index ? { ...q, showAnswer: !q.showAnswer } : q
          )
        );
      };
    
      return (
        <div>
          <h1>Questions in {chapterId}</h1>
          <ol style={{ listStyleType: 'decimal' }}>
            {questions.map((question, index) => (
              <li key={index} style={{ cursor: 'pointer', marginBottom: '10px' }} onClick={() => toggleAnswer(index)}>
                <p>{question.question}</p>
                {question.showAnswer && <div style={{ marginTop: '5px' }}>
                  {Array.isArray(question.answer) ? question.answer.map((item) => item) : question.answer}
                </div>}
              </li>
            ))}
          </ol>
        </div>
      );
};
    
export default ChapterPage;
    