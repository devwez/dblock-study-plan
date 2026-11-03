/* Daily 20-question sets, keyed by date. */
const DAY_CHECKS = {
  "2026-11-02": [
    [
      "Classify each as rational or irrational: square root of 36, square root of 11, 0.45, 0.333..., pi, -7/2.",
      "sqrt 36 = 6 rational; sqrt 11 irrational; 0.45 rational; 0.333... = 1/3 rational; pi irrational; -7/2 rational."
    ],
    [
      "Convert 0.555... to a fraction in simplest form.",
      "x = 0.555...; 10x = 5.555...; 9x = 5; x = 5/9."
    ],
    [
      "Simplify (2^4 x 2^-6) / 2^-3.",
      "2^(4-6+3) = 2^1 = 2."
    ],
    [
      "Simplify (3x^2)^2 x 2x^-3.",
      "9x^4 x 2x^-3 = 18x."
    ],
    [
      "Solve 3^(x+1) = 81.",
      "81 = 3^4, so x + 1 = 4 and x = 3."
    ],
    [
      "Write 0.00042 in scientific notation.",
      "4.2 x 10^-4."
    ],
    [
      "Between which two integers does square root of 50 lie? Estimate it to one decimal place.",
      "Between 7 and 8; about 7.1."
    ],
    [
      "What is omqondofana? Give one isiZulu pair.",
      "A synonym: a word with the same meaning. Example: ukujabula / ukuthokoza."
    ],
    [
      "What is omqondophika? Give one isiZulu pair.",
      "An antonym: a word with the opposite meaning. Example: ubuhle / ububi."
    ],
    [
      "Give the three steps of a comprehension answer.",
      "Read the questions, read the passage, find the evidence."
    ],
    [
      "Where must a comprehension answer come from?",
      "The passage, not from your own knowledge."
    ],
    [
      "What does 'chaza kabanzi' demand?",
      "Three separate points, each in its own sentence, with detail from the text."
    ],
    [
      "Name the four sentences of a cartoon answer.",
      "What I see, what it means, how I know, who it criticises."
    ],
    [
      "Who is Phindile? Answer in one sentence.",
      "A clever girl from eMpumalanga who loses her parents and has to survive on her own."
    ],
    [
      "Name four comprehension question types and what each demands.",
      "Factual (find the fact), inference (read between the lines), language (identify and explain a technique), evaluation (opinion with evidence)."
    ],
    [
      "Explain the difference between identify, explain and discuss.",
      "Identify: name it. Explain: say how and why it works. Discuss: give both sides and a conclusion."
    ],
    [
      "Name the figure of speech in 'the wind tore through the valley like a knife' and explain its effect.",
      "Simile; it makes the wind sound violent and cutting."
    ],
    [
      "Define enjambment and give a one-line example.",
      "A sentence runs over the line end without a pause: 'the fog comes / on little cat feet'."
    ],
    [
      "Define caesura and explain one effect.",
      "A pause inside a line; it slows the line and adds weight to the word before it."
    ],
    [
      "Define stanza, line and refrain.",
      "Stanza: a group of lines. Line: one line of the poem. Refrain: a repeated line or phrase."
    ]
  ],
  "2026-11-03": [
    [
      "Expand (x + 3)(x - 2).",
      "x^2 + x - 6."
    ],
    [
      "Expand (2x - 3)(x + 5).",
      "2x^2 + 7x - 15."
    ],
    [
      "Factorise x^2 - 9.",
      "(x - 3)(x + 3)."
    ],
    [
      "Factorise 6x^2 - 9x.",
      "3x(2x - 3)."
    ],
    [
      "Factorise x^2 - 7x + 12.",
      "(x - 3)(x - 4)."
    ],
    [
      "Simplify 2x + 3x - x.",
      "4x."
    ],
    [
      "Simplify (x^2 - 4) / (x - 2).",
      "x + 2, x not equal to 2."
    ],
    [
      "Who takes Phindile in after her parents die?",
      "Her aunt MaXaba and her uncle Chris."
    ],
    [
      "How do her parents die?",
      "In a car accident."
    ],
    [
      "Give three reasons why Phindile leaves home.",
      "Her parents' death, MaXaba's cruelty, and the quarrel with MaXaba, with Chris's abuse underneath."
    ],
    [
      "Who is Chris?",
      "Her uncle, MaXaba's husband, and the man who abuses her."
    ],
    [
      "What does Chris do to Phindile?",
      "He abuses her; the family protects him instead of her."
    ],
    [
      "What is the quarrel in Chapter 2 about?",
      "MaXaba accuses Phindile of taking Chris's side."
    ],
    [
      "What does Phindile say as she leaves?",
      "Sengiyahamba bazali bami — I am leaving, my parents."
    ],
    [
      "What does HTML stand for and what is it used for?",
      "HyperText Markup Language; it gives a page its structure and content."
    ],
    [
      "Write the skeleton of an HTML page in five lines.",
      "DOCTYPE html; html; head with title; body; close html."
    ],
    [
      "Give the tag for a heading, a paragraph, a link, an image and an unordered list.",
      "h1, p, a, img, ul."
    ],
    [
      "What is the difference between ol and ul?",
      "ol is numbered; ul is bulleted."
    ],
    [
      "What is an attribute? Give one example.",
      "Extra information inside a tag: a href='page.html'."
    ],
    [
      "What is the difference between a block element and an inline element?",
      "Block starts on a new line and fills the width; inline sits in the text flow."
    ]
  ],
  "2026-11-04": [
    [
      "Simplify (x^2 - 9) / (x^2 + x - 12).",
      "(x + 3)/(x + 4), x not equal to 3."
    ],
    [
      "Solve 5 - 2x = 17.",
      "x = -6."
    ],
    [
      "Solve 3(x - 2) = 2x + 5.",
      "x = 11."
    ],
    [
      "Solve simultaneously: 2x + y = 11 and x - y = 1.",
      "Add: 3x = 12, x = 4, y = 3."
    ],
    [
      "Solve x^2 - 5x + 6 = 0.",
      "x = 2 or x = 3."
    ],
    [
      "Solve 2x^2 + 3x - 2 = 0 using the formula.",
      "Discriminant 25; x = (-3 plus or minus 5)/4, so x = 1/2 or x = -2."
    ],
    [
      "Solve x^2 = 16.",
      "x = 4 or x = -4."
    ],
    [
      "Name the five note values from semibreve to semiquaver, with beats in 4/4.",
      "Semibreve 4, minim 2, crotchet 1, quaver 1/2, semiquaver 1/4."
    ],
    [
      "What is the value of a dotted minim, a dotted crotchet and a dotted quaver?",
      "3; 1.5; 0.75."
    ],
    [
      "Name the rest that matches each of the five note values.",
      "Semibreve, minim, crotchet, quaver and semiquaver rests."
    ],
    [
      "Explain how to count 4/4, 3/4 and 6/8.",
      "4/4: 1-2-3-4. 3/4: 1-2-3. 6/8: two dotted-crotchet beats, 1-2-3, 2-2-3."
    ],
    [
      "Write the key signatures of G major and D major.",
      "G: F sharp. D: F sharp and C sharp."
    ],
    [
      "Write the order of sharps.",
      "F C G D A E B."
    ],
    [
      "Where are the semitones in the C major scale?",
      "Between E-F (3-4) and B-C (7-8)."
    ],
    [
      "Who wrote Sonnet 18?",
      "William Shakespeare."
    ],
    [
      "Who wrote Sonnet 43?",
      "Elizabeth Barrett Browning."
    ],
    [
      "What is the rhyme scheme of a Shakespearean sonnet?",
      "ABAB CDCD EFEF GG."
    ],
    [
      "Sonnet 18: what is the answer to 'Shall I compare thee to a summer's day?' and why?",
      "No; the beloved is more lovely and more temperate, and a summer is too short and extreme."
    ],
    [
      "Sonnet 18: where is the volta and what changes?",
      "Line 9, 'But thy eternal summer shall not fade'; the poem turns from summer's weakness to the beloved's permanence."
    ],
    [
      "Sonnet 43: how does the ending change the tone?",
      "It becomes spiritual and eternal: she will love him better after death."
    ]
  ],
  "2026-11-05": [
    [
      "For y = -2x + 5, give the gradient, y-intercept and x-intercept.",
      "Gradient -2; y-intercept 5; x-intercept 2.5."
    ],
    [
      "Find the equation of the line through (2,1) and (4,7).",
      "m = 3; y = 3x - 5."
    ],
    [
      "Simple interest: R4 500 at 8% for 3 years. Find the interest and total.",
      "I = R1 080; total R5 580."
    ],
    [
      "Compound interest: R2 000 at 9% for 2 years. Find the amount and interest.",
      "A = R2 376.20; interest R376.20."
    ],
    [
      "A car worth R120 000 depreciates at 15% reducing balance for 2 years. Find its value.",
      "R86 700."
    ],
    [
      "Find the gradient of 3x + 2y = 6.",
      "y = -1.5x + 3, gradient -1.5."
    ],
    [
      "Find the equation of the line with gradient 2 through (1,-3).",
      "y = 2x - 5."
    ],
    [
      "Who is Thulani?",
      "The rich young man in the black Mercedes who rescues Phindile."
    ],
    [
      "What work is Phindile doing when they meet?",
      "Prostitution, to survive on the street."
    ],
    [
      "Why does Thulani's mother accept her?",
      "She refuses to judge before meeting her."
    ],
    [
      "Who is Mabusi?",
      "Thulani's girlfriend of many years, who fights to keep him."
    ],
    [
      "Who is Sibonelo and what does he do?",
      "Thulani's friend; he attacks him over Phindile and is thrown out of the office."
    ],
    [
      "What happens at the Mkhwanazi home?",
      "The mother accepts Phindile and calls her an innocent child; Jabulani calls her an angel."
    ],
    [
      "How does Phindile leave Mumsy?",
      "Mumsy lets her go with open hands and tells her she can always come back."
    ],
    [
      "Which tag inserts an image?",
      "img."
    ],
    [
      "Which CSS property changes the text colour?",
      "color."
    ],
    [
      "Which selector targets a class called card?",
      ".card."
    ],
    [
      "Which selector targets an id called main?",
      "#main."
    ],
    [
      "Name the three ways to apply CSS.",
      "Inline, internal style block, external stylesheet."
    ],
    [
      "Name the four parts of the CSS box model.",
      "Content, padding, border, margin."
    ]
  ],
  "2026-11-06": [
    [
      "In a 1.5-hour, 60-mark paper, how long should one mark take?",
      "About 1.5 minutes."
    ],
    [
      "What do you do in the first five minutes?",
      "Read the whole paper and mark the questions you can do."
    ],
    [
      "What do you write down before you start?",
      "The formulas you might forget."
    ],
    [
      "What do you do when a question is stuck?",
      "Leave it, mark it, move on, and come back with the remaining time."
    ],
    [
      "How do you check an equation answer?",
      "Substitute it back into the original equation."
    ],
    [
      "Why keep an error log?",
      "It shows the pattern in your mistakes, so you revise the rule, not the question."
    ],
    [
      "What is the last thing you check on a graph?",
      "Labels, scale and the intercepts."
    ],
    [
      "Name the five moves of ingxoxo.",
      "Greeting, the matter, the argument, the decision, the closing."
    ],
    [
      "Name the eight parts of incwadi.",
      "Address, date, receiver, salutation, opening, body, closing, sign-off."
    ],
    [
      "What is the difference in register between ingxoxo and incwadi?",
      "Ingxoxo between friends is informal; incwadi is formal and uses titles."
    ],
    [
      "Where does the word count go?",
      "At the end of the piece."
    ],
    [
      "Write a formal salutation.",
      "Mhlonishwa Mnumzane / Mhlonishwa Mama."
    ],
    [
      "Write a formal sign-off.",
      "Owenu ngokuhlonipha, then your full name."
    ],
    [
      "What is the job of the opening sentence of a letter?",
      "It says why you are writing, in one sentence."
    ],
    [
      "What is the key signature of G major?",
      "One sharp: F sharp."
    ],
    [
      "What is the key signature of D major?",
      "Two sharps: F sharp and C sharp."
    ],
    [
      "Write the notes of the C major scale.",
      "C D E F G A B C."
    ],
    [
      "Write the notes of the G major scale.",
      "G A B C D E F sharp G."
    ],
    [
      "Write the notes of the D major scale.",
      "D E F sharp G A B C sharp D."
    ],
    [
      "Name the next three keys clockwise from C on the circle of 5ths.",
      "G, D, A."
    ]
  ],
  "2026-11-07": [
    [
      "Angles on a straight line are 3x and 2x. Find x and both angles.",
      "5x = 180, x = 36; 108 and 72 degrees."
    ],
    [
      "The angles of a triangle are 2x, 3x and 4x. Find them.",
      "9x = 180, x = 20; 40, 60, 80 degrees."
    ],
    [
      "A triangle has an exterior angle of 120 and one opposite interior angle of 50. Find the other.",
      "70 degrees."
    ],
    [
      "Name the triangle with two equal sides and two equal base angles.",
      "Isosceles."
    ],
    [
      "What do the angles of a quadrilateral add up to?",
      "360 degrees."
    ],
    [
      "What is the exterior angle of a triangle equal to?",
      "The sum of the two opposite interior angles."
    ],
    [
      "Name the triangle with all sides equal.",
      "Equilateral; all angles 60 degrees."
    ],
    [
      "Who wrote Love at First Sight?",
      "Wislawa Szymborska."
    ],
    [
      "What is the poem's attitude to love?",
      "Love is real but uncertain; it mocks the confidence of lovers who claim a sudden passion joined them."
    ],
    [
      "Give one similarity between Sonnet 18 and Love at First Sight.",
      "Both treat love as powerful and lasting."
    ],
    [
      "Give one difference between them.",
      "Sonnet 18 uses a fixed rhyme scheme; Love at First Sight is free verse and sceptical."
    ],
    [
      "What is free verse?",
      "Poetry with no fixed rhyme scheme or metre."
    ],
    [
      "What is a persona?",
      "The voice speaking in the poem, not necessarily the poet."
    ],
    [
      "What does the title Love at First Sight suggest the poem will do?",
      "It suggests a romantic story, which the poem then questions."
    ],
    [
      "What is the output of print(7//2, 7%2)?",
      "3 1."
    ],
    [
      "What is the output of print('5' + '3') and print(5 + 3)?",
      "53 and 8."
    ],
    [
      "What is the output of x = 4; x += 3; print(x)?",
      "7."
    ],
    [
      "What is printed when x = 5: if x > 5: print('A') else: print('B')?",
      "B."
    ],
    [
      "What does input() return?",
      "A string."
    ],
    [
      "What is int('5') + 2?",
      "7."
    ]
  ],
  "2026-11-08": [
    [
      "Alternate angles between parallel lines are...",
      "Equal."
    ],
    [
      "Co-interior angles between parallel lines add up to...",
      "180 degrees."
    ],
    [
      "A parallelogram has one angle of 70 degrees. Give the other three.",
      "110, 70, 110 degrees."
    ],
    [
      "Name two properties of a rectangle.",
      "Opposite sides equal and parallel; all angles 90 degrees; diagonals equal."
    ],
    [
      "Name two properties of a rhombus.",
      "All sides equal; diagonals bisect at right angles; opposite angles equal."
    ],
    [
      "What do the diagonals of a parallelogram do?",
      "They bisect each other."
    ],
    [
      "Co-interior angles are 3x and 6x. Find x and both angles.",
      "9x = 180, x = 20; 60 and 120 degrees."
    ],
    [
      "What is the subject concord for umuntu?",
      "u-."
    ],
    [
      "What is the subject concord for abantu?",
      "ba-."
    ],
    [
      "What is the object concord for 'them' in class 2?",
      "-ba-."
    ],
    [
      "What is the subject concord for isikole?",
      "si-."
    ],
    [
      "What is the subject concord for izikole?",
      "zi-."
    ],
    [
      "How do you say 'my book'?",
      "Incwadi yami."
    ],
    [
      "What is the adjective concord in 'umuntu omuhle'?",
      "o- (class 1)."
    ],
    [
      "Name the next three keys clockwise from C.",
      "G, D, A."
    ],
    [
      "Which key has two sharps?",
      "D major."
    ],
    [
      "Define timbre.",
      "The tone colour that makes one instrument sound different from another."
    ],
    [
      "Define pitch.",
      "How high or low a sound is."
    ],
    [
      "Define rhythm.",
      "The pattern of long and short sounds in time."
    ],
    [
      "Define dynamics.",
      "How loud or soft the music is."
    ]
  ],
  "2026-11-09": [
    [
      "Name the four congruency tests.",
      "SSS, SAS, ASA, RHS."
    ],
    [
      "What two things do similar triangles have?",
      "Equal angles and sides in proportion."
    ],
    [
      "If the side ratio is 2:3, what is the area ratio?",
      "4:9."
    ],
    [
      "What is the difference between congruent and similar?",
      "Congruent: same shape and size. Similar: same shape, different size."
    ],
    [
      "Triangles have AB=DE, BC=EF, AC=DF. Which test?",
      "SSS."
    ],
    [
      "Two similar triangles have sides 6 and 9. Find the scale factor.",
      "1.5."
    ],
    [
      "Two similar triangles have sides 8 and 12; the smaller has area 20. Find the larger area.",
      "Area ratio 4:9, so 45."
    ],
    [
      "Name three of the ten layers of narrative analysis.",
      "Character, setting, conflict, theme, language, structure."
    ],
    [
      "What is foreshadowing?",
      "A hint early in the story of something that happens later."
    ],
    [
      "What is a motif?",
      "A recurring image or idea that carries meaning."
    ],
    [
      "What is the difference between protagonist and antagonist?",
      "The protagonist is the main character; the antagonist opposes them."
    ],
    [
      "Name the five parts of a narrative arc.",
      "Exposition, rising action, climax, falling action, resolution."
    ],
    [
      "What is an inference in comprehension?",
      "A conclusion you draw from evidence, not a fact stated directly."
    ],
    [
      "Give four rules for a good summary.",
      "Own words, main points only, original order, no opinion, within the word limit."
    ],
    [
      "What does % do in Python?",
      "Returns the remainder of a division."
    ],
    [
      "What does // do?",
      "Integer (floor) division."
    ],
    [
      "Which module contains randint?",
      "random."
    ],
    [
      "What does for i in range(1,4) print?",
      "1, 2, 3."
    ],
    [
      "What is a while loop?",
      "A loop that repeats while a condition stays true."
    ],
    [
      "How do you define a function?",
      "def name(parameters):"
    ]
  ],
  "2026-11-10": [
    [
      "Write Pythagoras' theorem.",
      "a^2 + b^2 = c^2, where c is the hypotenuse."
    ],
    [
      "What does the converse of Pythagoras prove?",
      "That a triangle is right-angled if c^2 = a^2 + b^2."
    ],
    [
      "A right triangle has legs 9 and 12. Find the hypotenuse.",
      "15."
    ],
    [
      "Is a triangle with sides 7, 24, 25 right-angled?",
      "Yes: 49 + 576 = 625 = 25^2."
    ],
    [
      "What is the first step in a geometry rider?",
      "Mark every given equal angle or side on the diagram."
    ],
    [
      "A right triangle has hypotenuse 13 and one leg 5. Find the other leg.",
      "12."
    ],
    [
      "Find the area of a right triangle with legs 8 and 15.",
      "60."
    ],
    [
      "What is the present tense of 'I read'?",
      "Ngiyafunda."
    ],
    [
      "What is the past tense of 'I read'?",
      "Ngafunda."
    ],
    [
      "What is the future tense of 'I read'?",
      "Ngizofunda."
    ],
    [
      "What is the negative of ngiyafunda?",
      "Angifundi."
    ],
    [
      "What is the diminutive suffix?",
      "-ana."
    ],
    [
      "What is the augmentative suffix?",
      "-kazi."
    ],
    [
      "What is the plural of umuntu?",
      "Abantu."
    ],
    [
      "Name three features of Baroque music.",
      "Polyphony, basso continuo, terraced dynamics."
    ],
    [
      "Give two differences between Classical and Romantic music.",
      "Classical is homophonic with balanced phrases and gradual dynamics; Romantic is emotional with a bigger orchestra, chromatic harmony and rubato."
    ],
    [
      "Name three features of jazz.",
      "Swing, improvisation, blue notes."
    ],
    [
      "Explain the difference between hip hop and rap.",
      "Hip hop is the culture and production; rap is the vocal technique."
    ],
    [
      "Name five films scored by John Williams.",
      "Jaws, Star Wars, E.T., Jurassic Park, Schindler's List."
    ],
    [
      "Define leitmotif.",
      "A short recurring musical idea linked to a character, place, object or emotion."
    ]
  ],
  "2026-11-11": [
    [
      "Write the quadratic formula.",
      "x = (-b plus or minus the square root of b^2 - 4ac) / 2a."
    ],
    [
      "Write the gradient formula.",
      "m = (y2 - y1)/(x2 - x1)."
    ],
    [
      "Simplify a^m / a^n.",
      "a^(m-n)."
    ],
    [
      "Solve 3x - 7 = 11.",
      "x = 6."
    ],
    [
      "Write the simple interest formula.",
      "I = P x r x t."
    ],
    [
      "Write the compound interest formula.",
      "A = P(1 + i)^n."
    ],
    [
      "What is the first thing you check after a timed paper?",
      "Which marks were lost to careless errors."
    ],
    [
      "What is the locative of iTheku?",
      "eThekwini."
    ],
    [
      "What is the absolute pronoun for class 1?",
      "yena."
    ],
    [
      "What is the absolute pronoun for class 2?",
      "bona."
    ],
    [
      "What is the demonstrative 'this' for class 1?",
      "lo."
    ],
    [
      "What is the plural of umuntu?",
      "abantu."
    ],
    [
      "What is the negative of ngiyafunda?",
      "angifundi."
    ],
    [
      "How do you say 'my book'?",
      "incwadi yami."
    ],
    [
      "What is diegetic sound?",
      "Sound the characters can hear."
    ],
    [
      "What is non-diegetic sound?",
      "Sound only the audience hears, such as the score."
    ],
    [
      "What is a close-up?",
      "A shot that frames a face or a detail closely."
    ],
    [
      "What is a long shot?",
      "A shot that shows the whole scene and the subject's place in it."
    ],
    [
      "What does AIDA stand for?",
      "Attention, Interest, Desire, Action."
    ],
    [
      "Give four rules for a good summary.",
      "Own words, main points only, original order, no opinion, within the word limit."
    ]
  ],
  "2026-11-12": [
    [
      "What is the area of a circle?",
      "pi r^2."
    ],
    [
      "What is the circumference of a circle?",
      "2 pi r."
    ],
    [
      "What is the volume of a cylinder?",
      "pi r^2 h."
    ],
    [
      "What is the surface area of a sphere?",
      "4 pi r^2."
    ],
    [
      "What is the volume of a cone?",
      "one third pi r^2 h."
    ],
    [
      "A rectangle is 10 by 6 with a semicircle of radius 3 on one side. Find the total area.",
      "60 + 14.14 = 74.14."
    ],
    [
      "What is the surface area of a cube with side 4?",
      "6 x 16 = 96."
    ],
    [
      "What is an if statement?",
      "A branch that runs only when a condition is true."
    ],
    [
      "What is a while loop?",
      "A loop that repeats while a condition stays true."
    ],
    [
      "How do you define a function?",
      "def name(parameters):"
    ],
    [
      "For nums = [4, 8, 15, 16], what is nums[1] and nums[1:3]?",
      "8 and [8, 15]."
    ],
    [
      "Explain syntax versus runtime error.",
      "Syntax breaks the grammar and will not run; runtime crashes while running."
    ],
    [
      "Write a program that asks for a name and prints 'Sawubona, [name]'.",
      "name = input('Name: '); print('Sawubona, ' + name)."
    ],
    [
      "What does for i in range(1,4) print?",
      "1, 2, 3."
    ],
    [
      "What is the plural of umuntu?",
      "abantu."
    ],
    [
      "What is the plural of inja?",
      "izinja."
    ],
    [
      "What is the negative of ngiyafunda?",
      "angifundi."
    ],
    [
      "What is the negative of uyafunda?",
      "akafundi."
    ],
    [
      "How do you say 'my book'?",
      "incwadi yami."
    ],
    [
      "How do you say 'his book'?",
      "incwadi yakhe."
    ]
  ],
  "2026-11-13": [
    [
      "In a 1.5-hour, 60-mark paper, how long per mark?",
      "About 1.5 minutes."
    ],
    [
      "What do you do in the first five minutes?",
      "Read the paper and mark the questions you can do."
    ],
    [
      "Name three formulas you must write down before starting.",
      "Quadratic formula, simple interest, compound interest."
    ],
    [
      "How do you check an equation answer?",
      "Substitute it back into the original equation."
    ],
    [
      "Simplify a^m x a^n.",
      "a^(m+n)."
    ],
    [
      "Solve 3x - 7 = 11.",
      "x = 6."
    ],
    [
      "Area of a triangle with base 12 and height 5?",
      "30."
    ],
    [
      "What does AIDA stand for?",
      "Attention, Interest, Desire, Action."
    ],
    [
      "Name three techniques an advert uses.",
      "Colour, layout, font, image, slogan."
    ],
    [
      "Give four rules for a good summary.",
      "Own words, main points only, original order, no opinion, within the word limit."
    ],
    [
      "Give the structure of a discursive essay in five moves.",
      "Introduction and position; first argument; second argument; counter-argument and response; conclusion."
    ],
    [
      "What is a thesis statement?",
      "The one-sentence position the essay will prove."
    ],
    [
      "What is a topic sentence?",
      "The sentence that states the point of a paragraph."
    ],
    [
      "Name the eight parts of a formal letter.",
      "Address, date, receiver, salutation, opening, body, closing, sign-off."
    ],
    [
      "How do you find the mean?",
      "Add all values and divide by how many there are."
    ],
    [
      "How do you find the median?",
      "Order the values and take the middle one."
    ],
    [
      "How do you find the mode?",
      "The value that appears most often."
    ],
    [
      "How do you find the range?",
      "Largest minus smallest."
    ],
    [
      "What is the probability of a 3 on a fair die?",
      "1/6."
    ],
    [
      "What is the probability of an even number on a die?",
      "3/6 = 1/2."
    ]
  ],
  "2026-11-14": [
    [
      "For independent events, do you add or multiply?",
      "Multiply."
    ],
    [
      "Write the rule for P(A or B).",
      "P(A) + P(B) - P(A and B)."
    ],
    [
      "A bag has 3 red and 2 blue balls; two are drawn without replacement. Find P(both red).",
      "3/5 x 2/4 = 3/10."
    ],
    [
      "What is the probability scale?",
      "From 0 to 1."
    ],
    [
      "What is the complement rule?",
      "P(not A) = 1 - P(A)."
    ],
    [
      "If an event has probability 0.3, what is the probability it does not happen?",
      "0.7."
    ],
    [
      "How many outcomes when two coins are tossed?",
      "4: HH, HT, TH, TT."
    ],
    [
      "What type of poem is NgingumAfrika?",
      "A lyric (ilirikhi)."
    ],
    [
      "How many stanzas does NgingumAfrika have?",
      "Four."
    ],
    [
      "What is the theme of NgingumAfrika?",
      "African identity and pride."
    ],
    [
      "How many stanzas does Mzansi Afrika have?",
      "Four."
    ],
    [
      "What is the refrain in Mzansi Afrika?",
      "Mzansi Afrika (and Ningizimu Afrika in the last stanza)."
    ],
    [
      "How many stanzas and lines does Size sikaMthaniya have?",
      "Two stanzas, fourteen lines."
    ],
    [
      "What is the refrain in Size sikaMthaniya?",
      "Ningabe nisangeshela!"
    ],
    [
      "What is the job of HTML?",
      "Structure and content."
    ],
    [
      "What is the job of CSS?",
      "Style and layout."
    ],
    [
      "Explain syntax versus runtime error.",
      "Syntax breaks the grammar and will not run; runtime crashes while running."
    ],
    [
      "What is a variable?",
      "A named store for a value."
    ],
    [
      "What is a loop?",
      "A block that repeats."
    ],
    [
      "What is a function?",
      "A named block of code that does one job and can be called."
    ]
  ],
  "2026-11-15": [
    [
      "What is the theme of Mzansi Afrika?",
      "Patriotism: love and defence of South Africa."
    ],
    [
      "What is the theme of Size sikaMthaniya?",
      "Love and sincerity."
    ],
    [
      "What is the refrain in Size sikaMthaniya?",
      "Ningabe nisangeshela!"
    ],
    [
      "Name one sound device in NgingumAfrika.",
      "Alliteration of z in 'izizwe zingibiza', or repetition of 'ngiyazigqaja'."
    ],
    [
      "Define a lyric poem.",
      "A short poem expressing personal emotion or a single theme."
    ],
    [
      "Name three poem types.",
      "Lyric, narrative, elegy (also epic, sonnet, satire, religious)."
    ],
    [
      "Compare Mzansi Afrika and Size sikaMthaniya in one sentence.",
      "Both are lyrics about love; Mzansi is love of country, Size is love of a person."
    ],
    [
      "Compare Sonnet 18 and Sonnet 43 in one sentence.",
      "Both are love poems; Sonnet 18 is Shakespearean and Sonnet 43 is Petrarchan."
    ],
    [
      "What is a volta?",
      "The turn in thought, usually between octave and sestet."
    ],
    [
      "What is a sestet?",
      "A six-line section of a poem."
    ],
    [
      "What is an octave?",
      "An eight-line section of a poem."
    ],
    [
      "What is iambic pentameter?",
      "Ten syllables per line, five unstressed-stressed pairs."
    ],
    [
      "What is enjambment?",
      "A sentence runs over the line end without a pause."
    ],
    [
      "What is the theme of Love at First Sight?",
      "Love, chance and the uncertainty of romantic certainty."
    ],
    [
      "Write the simple interest formula.",
      "I = P x r x t."
    ],
    [
      "Write the compound interest formula.",
      "A = P(1 + i)^n."
    ],
    [
      "Write the quadratic formula.",
      "x = (-b plus or minus the square root of b^2 - 4ac) / 2a."
    ],
    [
      "Write the gradient formula.",
      "m = (y2 - y1)/(x2 - x1)."
    ],
    [
      "Simplify a^m x a^n.",
      "a^(m+n)."
    ],
    [
      "Simplify a^m / a^n.",
      "a^(m-n)."
    ]
  ]
};
