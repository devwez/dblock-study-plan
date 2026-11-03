/* End-of-block check questions, keyed by "date:blockIndex". */
const CHECKS = {
  "2026-11-02:0": [
    ["Is √16 rational or irrational?", "Rational: √16 = 4."],
    ["Simplify 3⁴ × 3⁻².", "3² = 9."],
    ["Write 0.75 as a fraction in simplest form.", "3/4."],
  ],
  "2026-11-02:1": [
    ["What does omqondofana mean?", "A synonym: a word with the same meaning."],
    ["What does omqondophika mean?", "An antonym: a word with the opposite meaning."],
    ["Where must a comprehension answer come from?", "The passage, not from your own knowledge."],
  ],
  "2026-11-02:2": [
    ["Name the three steps of comprehension.", "Read the questions, read the passage, find the evidence."],
    ["What is enjambment?", "A sentence that runs over the end of a line without a pause."],
    ["What is a caesura?", "A pause inside a line, usually a comma or dash."],
  ],
  "2026-11-03:0": [
    ["Expand (x + 3)(x − 2).", "x² + x − 6."],
    ["Factorise x² − 9.", "(x − 3)(x + 3)."],
    ["Simplify 2x + 3x − x.", "4x."],
  ],
  "2026-11-03:1": [
    ["Name the four sentences of a cartoon answer.", "What I see, what it means, how I know, who it criticises."],
    ["Who takes Phindile in after her parents die?", "Her aunt MaXaba and her uncle Chris."],
    ["How do her parents die?", "In a car accident."],
  ],
  "2026-11-03:2": [
    ["What does HTML stand for?", "HyperText Markup Language."],
    ["Which tag makes a paragraph?", "<p>."],
    ["Which attribute holds a link's address?", "href."],
  ],
  "2026-11-04:0": [
    ["Solve 2x + 5 = 17.", "x = 6."],
    ["Simplify (x² − 4) ÷ (x − 2).", "x + 2."],
    ["Solve x² = 16.", "x = 4 or x = −4."],
  ],
  "2026-11-04:1": [
    ["How many crotchet beats is a dotted minim?", "Three."],
    ["What does 6/8 mean?", "Six quavers in a bar, felt as two dotted-crotchet beats."],
    ["Which rest lasts one crotchet beat?", "The crotchet rest."],
  ],
  "2026-11-04:2": [
    ["Who wrote Sonnet 18?", "William Shakespeare."],
    ["Who wrote Sonnet 43?", "Elizabeth Barrett Browning."],
    ["What is the rhyme scheme of a Shakespearean sonnet?", "ABAB CDCD EFEF GG."],
  ],
  "2026-11-05:0": [
    ["What is the gradient of y = 2x + 3?", "2."],
    ["Simple interest on R1 000 at 10% for 2 years?", "R200."],
    ["Write the compound interest formula.", "A = P(1 + i)ⁿ."],
  ],
  "2026-11-05:1": [
    ["Who is Thulani?", "The rich young man in the black Mercedes who rescues Phindile."],
    ["What work is Phindile doing when they meet?", "Prostitution, to survive on the street."],
    ["Why does Thulani's mother accept her?", "She refuses to judge before meeting her."],
  ],
  "2026-11-05:2": [
    ["Which tag inserts an image?", "<img>."],
    ["Which CSS property changes text colour?", "color."],
    ["Which selector targets class card?", ".card."],
  ],
  "2026-11-06:0": [
    ["In a 1.5-hour, 60-mark paper, how long per mark?", "About 1.5 minutes."],
    ["What do you do in the first five minutes?", "Read the paper and mark the questions you can do."],
    ["What do you write down before starting?", "The formulas you might forget."],
  ],
  "2026-11-06:1": [
    ["Name the five moves of ingxoxo.", "Greeting, the matter, the argument, the decision, the closing."],
    ["Name the eight parts of incwadi.", "Address, date, receiver, salutation, opening, body, closing, sign-off."],
    ["Where does the word count go?", "At the end of the piece."],
  ],
  "2026-11-06:2": [
    ["What is the key signature of G major?", "One sharp: F♯."],
    ["What is the key signature of D major?", "Two sharps: F♯ and C♯."],
    ["Where are the semitones in C major?", "Between E–F (3–4) and B–C (7–8)."],
  ],
  "2026-11-07:0": [
    ["The angles in a triangle add up to?", "180°."],
    ["The exterior angle of a triangle equals?", "The sum of the two opposite interior angles."],
    ["What is a triangle with two equal sides called?", "Isosceles."],
  ],
  "2026-11-07:1": [
    ["Who wrote Love at First Sight?", "Wisława Szymborska."],
    ["What is the poem about?", "Love, chance and the small moments that lead to it."],
    ["Give one difference between Sonnet 18 and Love at First Sight.", "Sonnet 18 has a strict rhyme scheme; Love at First Sight is free verse."],
  ],
  "2026-11-07:2": [
    ["What is the output of print(\"2+3\")?", "2+3, as text."],
    ["What does input() return?", "A string."],
    ["What is int(\"5\") + 2?", "7."],
  ],
  "2026-11-08:0": [
    ["Alternate angles are?", "Equal."],
    ["Co-interior angles add up to?", "180°."],
    ["Opposite angles of a parallelogram are?", "Equal."],
  ],
  "2026-11-08:1": [
    ["What is the subject concord for umuntu?", "u-."],
    ["What is the subject concord for abantu?", "ba-."],
    ["What is the object concord for them (class 2)?", "-ba-."],
  ],
  "2026-11-08:2": [
    ["Name the next three keys clockwise from C.", "G, D, A."],
    ["Which key has two sharps?", "D major."],
    ["Define timbre.", "The tone colour that makes one instrument sound different from another."],
  ],
  "2026-11-09:0": [
    ["Name the four congruency tests.", "SSS, SAS, ASA, RHS."],
    ["What do similar triangles have?", "Equal angles and sides in proportion."],
    ["If the side ratio is 2:3, what is the area ratio?", "4:9."],
  ],
  "2026-11-09:1": [
    ["What is foreshadowing?", "A hint early in the story of something that happens later."],
    ["What is a motif?", "A recurring image or idea that carries meaning."],
    ["What does analysing in ten layers mean?", "Reading the text for character, setting, conflict, theme, language, structure and effect, not just plot."],
  ],
  "2026-11-09:2": [
    ["What does % do in Python?", "Returns the remainder of a division."],
    ["What does // do?", "Integer (floor) division."],
    ["Which module contains randint?", "random."],
  ],
  "2026-11-10:0": [
    ["Write Pythagoras' theorem.", "a² + b² = c², where c is the hypotenuse."],
    ["What does the converse of Pythagoras prove?", "That a triangle is right-angled if c² = a² + b²."],
    ["What is the first step in a geometry rider?", "Mark every given equal angle or side on the diagram."],
  ],
  "2026-11-10:1": [
    ["What is the present tense of \"I read\"?", "Ngiyafunda."],
    ["What is the past tense of \"I read\"?", "Ngafunda."],
    ["What is the diminutive suffix?", "-ana."],
  ],
  "2026-11-10:2": [
    ["Name three features of Baroque music.", "Polyphony, basso continuo, terraced dynamics."],
    ["Name five films scored by John Williams.", "Jaws, Star Wars, E.T., Jurassic Park, Schindler's List."],
    ["Define leitmotif.", "A short recurring musical idea linked to a character, place, object or emotion."],
  ],
  "2026-11-11:0": [
    ["Write the quadratic formula.", "x = [−b ± √(b² − 4ac)] ÷ 2a."],
    ["Write the gradient formula.", "m = (y₂ − y₁) ÷ (x₂ − x₁)."],
    ["Simplify aᵐ × aⁿ.", "aᵐ⁺ⁿ."],
  ],
  "2026-11-11:1": [
    ["What is the locative of eThekwini?", "eThekwini."],
    ["What is the absolute pronoun for class 1?", "yena."],
    ["What is the absolute pronoun for class 2?", "bona."],
  ],
  "2026-11-11:2": [
    ["What is diegetic sound?", "Sound the characters can hear."],
    ["What is non-diegetic sound?", "Sound only the audience hears, such as the score."],
    ["What is a close-up?", "A shot that frames a face or a detail closely."],
  ],
  "2026-11-12:0": [
    ["What is the area of a circle?", "πr²."],
    ["What is the volume of a cylinder?", "πr²h."],
    ["What is the surface area of a sphere?", "4πr²."],
  ],
  "2026-11-12:1": [
    ["What is an if statement?", "A branch that runs only when a condition is true."],
    ["What is a while loop?", "A loop that repeats while a condition stays true."],
    ["How do you define a function?", "def name(parameters):"],
  ],
  "2026-11-12:2": [
    ["What is the plural of umuntu?", "abantu."],
    ["What is the negative of ngiyafunda?", "Angifundi."],
    ["How do you say \"my book\"?", "Incwadi yami."],
  ],
  "2026-11-13:0": [
    ["Write the exponent law for division.", "aᵐ ÷ aⁿ = aᵐ⁻ⁿ."],
    ["Solve 3x − 7 = 11.", "x = 6."],
    ["What is the first thing you check after a timed paper?", "Which marks were lost to careless errors."],
  ],
  "2026-11-13:1": [
    ["What does AIDA stand for?", "Attention, Interest, Desire, Action."],
    ["What is a summary?", "The main points in your own words, briefly."],
    ["Name two visual techniques.", "Colour and layout (also font, image, symbols)."],
  ],
  "2026-11-13:2": [
    ["How do you find the mean?", "Add all the values and divide by how many there are."],
    ["How do you find the median?", "Put the values in order and take the middle one."],
    ["What is the probability of a 3 on a fair die?", "1/6."],
  ],
  "2026-11-14:0": [
    ["For independent events, do you add or multiply?", "Multiply."],
    ["Write the rule for P(A or B).", "P(A) + P(B) − P(A and B)."],
    ["What is the probability scale?", "From 0 to 1."],
  ],
  "2026-11-14:1": [
    ["What type of poem is NgingumAfrika?", "A lyric (ilirikhi)."],
    ["How many stanzas does Size sikaMthaniya have?", "Two."],
    ["What is the theme of Mzansi Afrika?", "Patriotism: love and defence of South Africa."],
  ],
  "2026-11-14:2": [
    ["What is the job of HTML?", "Structure and content."],
    ["What is the job of CSS?", "Style and layout."],
    ["What is the difference between a syntax error and a runtime error?", "A syntax error breaks the grammar of the code; a runtime error happens while the program is running."],
  ],
  "2026-11-15:0": [
    ["How many stanzas does Mzansi Afrika have?", "Four."],
    ["What is the refrain in Size sikaMthaniya?", "Ningabe nisangeshela!"],
    ["What is the theme of Size sikaMthaniya?", "Love and sincerity."],
  ],
  "2026-11-15:1": [
    ["Compare Sonnet 18 and Sonnet 43 in one sentence.", "Both are love poems; Sonnet 18 is Shakespearean and Sonnet 43 is Petrarchan."],
    ["What is a volta?", "The turn in thought, usually between the octave and the sestet."],
    ["What is a sestet?", "A six-line section of a poem."],
  ],
  "2026-11-15:2": [
    ["Write the simple interest formula.", "I = P × r × t."],
    ["Write the compound interest formula.", "A = P(1 + i)ⁿ."],
    ["Write the quadratic formula.", "x = [−b ± √(b² − 4ac)] ÷ 2a."],
  ],
};
