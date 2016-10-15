// this file should be a json, but for local testing purposes, 
// the file will be imported via HTML and the data will live in global scope
var mqm = [{
  "definition": "The target text does not accurately reflect the source text, allowing for any differences authorized by specifications.",
  "notes": ["Most cases of //accuracy// are addressed by one of the more specific subtypes listed below.", "In Machine Translation literature, this category is typically referred to as \u201cAdequacy\u201d."],
  "children": [{
    "core": 1,
    "name": "Addition",
    "definition": "The target text includes text not present in the source.",
    "examples": ["A translation includes portions of another translation that were inadvertently pasted into the document."],
    "automatable": 1,
    "id": "addition"
  }, {
    "definition": "The content uses the wrong grammatical register, such as using informal pronouns or verb forms when their formal counterparts are required.",
    "name": "Grammatical register",
    "notes": ["For cases of general stylistic formality that do not involve the incorrect use of grammatical markers of formality, //register// should be used instead."],
    "examples": ["A text used for a highly formal announcement uses the Norwegian "],
    "automatable": 1,
    "id": "grammatical-register"
  }, {
    "core": 1,
    "name": "Mistranslation",
    "definition": "The target content does not accurately represent the source content.",
    "id": "mistranslation",
    "examples": ["A source text states that a medicine should not be administered in doses greater than 200 mg, but the translation states that it should be administered in doses greater than 200 mg (i.e., negation has been omitted)."],
    "children": [{
      "examples": ["A text that means that someone is highly recommended is translated as \u201cI cannot recommend this too highly.\u201d (The meaning can be that the speaker cannot make a good recommendation or that it is highly recommended.)"],
      "definition": "An unambiguous source text is translated ambiguously",
      "notes": ["This issue is distinct from //ambiguity// in that it is limited to issues where the translation process has introduced the ambiguity."],
      "name": "Ambiguous translation",
      "id": "ambiguous-translation"
    }, {
      "examples": ["A German source text provides the date 09.02.09 (=February 9, 2009) but the English target renders it as September 2, 2009.", "An English source text specifies a time of \u201c4:40 PM\u201d but this is rendered as 04:40 (=4:40 AM) in a German translation."],
      "definition": "Dates or times do not match between source and target.",
      "name": "Date/time",
      "automatable": 1,
      "id": "date-time"
    }, {
      "examples": ["The source text refers to Dublin, Ohio, but the target incorrectly refers to Dublin, Ireland."],
      "definition": "Names, places, or other \u201cnamed entities\u201d do not match",
      "name": "Entity (such as name or place",
      "automatable": 1,
      "id": "entity"
    }, {
      "examples": ["The Italian word "],
      "definition": "The translation has incorrectly used a word that is superficially similar to the source word.",
      "name": "False friend",
      "id": "false-friend"
    }, {
      "examples": ["A TM system returns \u201cPress the Start button\u201d as an exact (100%) match, when the proper translation should be \u201cPress the Begin button\u201d."],
      "definition": "An translation is provided as an exact match from a translation memory (TM) system, but is actually incorrect.",
      "notes": ["This issue type applies "],
      "name": "Improper exact TM match",
      "id": "improper-exact-tm-match"
    }, {
      "examples": ["A Japanese translation refers to \u201cApple Computers\u201d as \u30a2\u30c3\u30d7\u30eb\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf when the English expression should have been left untranslated."],
      "definition": "Text was translated that should have been left untranslated",
      "name": "Should not have been translated",
      "automatable": 1,
      "id": "no-translate"
    }, {
      "examples": ["The source text specifies that a part is 124 mm long but the target text specifies that it is 135 mm long."],
      "definition": "Numbers are inconsistent between source and target.",
      "name": "Number",
      "automatable": 1,
      "id": "number"
    }, {
      "examples": ["The source text refers to a \u201cboy\u201d but is translated with a word that applies only to young boys rather than the more general term"],
      "definition": "The target text is more specific than the source text",
      "notes": ["In some cases differences in concept structure between languages may render an apparent over-translation necessary. In such cases this issue should not be considered an error, although the issue may be noted for further consideration."],
      "name": "Over-translation",
      "id": "over-translation"
    }, {
      "examples": ["A Hungarian text contains the phrase "],
      "definition": "The translation is overly literal.",
      "name": "Overly literal",
      "id": "overly-literal"
    }, {
      "examples": ["A physics text describes the interaction of subatomic particles in a medical scanning device. The translation seems plausible, but incorrectly conveys the relationship of two particles and is therefore incorrect.", "A source text describes how a "],
      "definition": "Content decribing the relationship(s) within a technical description is translated inaccurately with respect to technical knowledge (even if the translation otherwise appears plausible).",
      "notes": ["This issue is not used for incorrect use of individual terms, which would be classified in //terminology// or one of its children. Rather, it is used for cases where a translation might appear to be correct but where it ends up misconveying information about a technical subject.", "Instances of this issue may point to confusing source materials or to lack of translator experience in a specialized domain."],
      "name": "Mistranslation of technical relationship",
      "id": "technical-relationship"
    }, {
      "examples": ["A source text specifies that an item is 25 centimeters (~10 inches) long, but the source states that it is 25 inches (63.5 cm) long."],
      "definition": "The target text has not converted numeric values as needed to adjust for different units (e.g., currencies, metric vs. U.S. measurement systems).",
      "name": "Unit conversion",
      "automatable": 1,
      "id": "unit-conversion"
    }]
  }, {
    "core": 1,
    "name": "Omission",
    "definition": "Content is missing from the translation that is present in the source.",
    "children": [{
      "core": 1,
      "name": "Omitted variable",
      "definition": "A variable placeholder is omitted from a translated text",
      "examples": ["A translated text should read \u201cNumber of lives remaining: $lifeNumber\u201d but is rendered as \u201cNumber of lives remaining:\u201d, with the variable "],
      "automatable": 1,
      "id": "omitted-variable"
    }],
    "examples": ["A paragraph present in the source is missing in the translation"],
    "automatable": 1,
    "id": "omission"
  }, {
    "examples": ["The source text uses words that refer to a specific type of miltary officer but the target text refers to military officers in general"],
    "definition": "The target text is less specific than the source text",
    "notes": ["In some cases differences in concept structure between languages may render an apparent under-translation necessary. In such cases this issue should not be considered an error, although the issue may be noted for further consideration."],
    "name": "Under-translation",
    "id": "under-translation"
  }, {
    "core": 1,
    "name": "Untranslated",
    "definition": "Content that should have been translated has been left untranslated.",
    "children": [{
      "examples": ["Part labels in a graphic were left untranslated even though running text was translated"],
      "definition": "Text in a graphic was left untranslated.",
      "name": "Untranslated graphic",
      "automatable": 1,
      "id": "untranslated-graphic"
    }],
    "examples": ["A sentence in a Japanese document translated into English is left in Japanese."],
    "automatable": 1,
    "id": "untranslated"
  }],
  "name": "Accuracy",
  "id": "accuracy"
}, {
  "definition": "There is a problem relating to design aspects (vs. linguistic aspects) of the content.",
  "name": "Design",
  "notes": ["Design issues may exist either in documentions in isolation (e.g., a second-level heading is formatted as a first-level heading) or in relationship between source and target (e.g., headings are formatted differently between source and target)."],
  "id": "design",
  "examples": ["A document is formatted incorrectly"],
  "children": [{
    "examples": ["A graphic is garbled and the wrong version is shown"],
    "definition": "Issues related to the formatting of graphics and tables.",
    "children": [{
      "examples": ["During localization the location of numbers used for call-outs has been shifted and the call-outs are no longer usable."],
      "definition": "There are issues with call-outs (text within a graphic that identifies parts) or captions.",
      "name": "Call-outs and captions",
      "id": "call-outs-captions"
    }, {
      "examples": ["An HTML file is missing an <img> tag, so no graphic is shown."],
      "definition": "A graphic or table is missing.",
      "name": "Missing graphic/table",
      "id": "graphics-tables-missing"
    }, {
      "examples": ["A text refers to Figure 1, but Figure 1 appears six pages after the point where it was referred to."],
      "definition": "A graphic or table is positioned incorrectly.",
      "name": "Position of graphic/table",
      "id": "graphics-tables-position"
    }],
    "name": "Graphics and tables",
    "id": "graphics-tables"
  }, {
    "examples": ["A word processor has been set to use German hyphenation for a Hungarian text. As a result the word "],
    "definition": "Text in a layed-out format is hyphenated incorrectly",
    "name": "Hyphenation",
    "id": "hyphenation"
  }, {
    "examples": ["An English sentence is 253 characters long but its German translation is 51 characters long."],
    "definition": "There is a significant discrepancy between the source and the target text lengths.",
    "name": "Length",
    "automatable": 1,
    "id": "length"
  }, {
    "examples": [],
    "definition": "Issues related to local formatting (rather than to overall layout concerns)",
    "children": [{
      "examples": ["Warning texts are set in sans-serif, but one of them appears in a serif font.", "A portion of Japanese text is set with an obliqued face (corresponding to italics in the source text) when dot accents should have been used with a non-oblique face."],
      "definition": "Issues related to local font usage (i.e., font choices that impact a span of content rather than the global choice of the document).",
      "children": [{
        "examples": ["A book title should have been italicized, but the italics were omitted."],
        "definition": "Bold or italics are used incorrectly.",
        "name": "Bold/italic",
        "id": "bold-italic"
      }, {
        "examples": ["A Japanese text includes \u30ab\u30bf\u30ab\u30ca (full-width kana) when specifications required \uff76\uff80\uff76\uff85 (half-width kana) instead, due to a limited display size."],
        "definition": "Single-width characters are used when double-width are intended, or vice versa.",
        "name": "Font, single/double-width (CJK only)",
        "id": "single-double-width"
      }, {
        "examples": ["A legal notice should be set in a 9 pt size, but was instead set in 7 pt."],
        "definition": "The font size is incorrect",
        "name": "Wrong size",
        "id": "wrong-font-size"
      }],
      "name": "Font",
      "id": "font"
    }, {
      "examples": ["The letters T and A in the word TAMPA are spaced too close together and collide."],
      "definition": "Kerning (inter-character spacing) is wrong.",
      "name": "Kerning",
      "id": "kerning"
    }, {
      "examples": ["A translated Japanese text has set lines too close together, making the text difficult to read."],
      "definition": "Leading (spacing between lines of text) is off",
      "name": "Leading",
      "id": "leading"
    }, {
      "examples": ["The first line of body paragraphs should be indented 4 mm, but some paragraphs were indented 25 mm instead."],
      "definition": "A paragraph is indented improperly.",
      "name": "Paragraph indentation",
      "id": "paragraph-indentation"
    }, {
      "examples": ["A heading should be left-aligned but was centered instead."],
      "definition": "A portion of a text is aligned inappropriately.",
      "name": "Text alignment",
      "id": "text-alignment"
    }],
    "name": "Local formatting",
    "id": "local-formatting"
  }, {
    "definition": "Issues related to \u201cmarkup\u201d (codes used to represent structure or formatting of text, also known as \u201ctags\u201d).",
    "name": "Markup",
    "id": "markup",
    "examples": ["Markup is used incorrectly, resulting in incorrect formatting."],
    "automatable": 1,
    "children": [{
      "examples": ["A source segment has no formatting tags, but the target has a set of italic tags."],
      "definition": "The target text has markup added with no corresponding markup in the source.",
      "name": "Added markup",
      "automatable": 1,
      "id": "added-markup"
    }, {
      "examples": ["A target text has a set of tags for bold face in the same location where the source has tags for italics."],
      "definition": "Markup elements are inconsistent between the source and target",
      "name": "Inconsistent markup",
      "id": "inconsistent-markup"
    }, {
      "examples": ["A segment has three sets of paired formatting tags at the end, after the final full stop (.)."],
      "definition": "Markup is present but misplaced.",
      "name": "Misplaced markup",
      "automatable": 1,
      "id": "misplaced-markup"
    }, {
      "examples": ["A source segment has a set of italic tags, but the target text does not have any tags."],
      "definition": "Markup in the source is missing in the target.",
      "name": "Missing markup",
      "automatable": 1,
      "id": "missing-markup"
    }, {
      "examples": ["A text has opening tags but no closing tags for formatting."],
      "definition": "Markup is present that appears malformed or inappropriate for its context.",
      "name": "Questionable markup",
      "automatable": 1,
      "id": "questionable-markup"
    }]
  }, {
    "definition": "Existing text is missing in the final laid-out version",
    "name": "Missing text",
    "notes": ["This issue does not refer to omitted text (i.e., text that was present in the source but not present in the translation). Instead it refers only to cases where text is present in some form but does not appear in the laid-out version. It also does not refer to text that has been truncated due to text expansion."],
    "examples": ["A translation is complete, but during DTP a text box was inadvertently moved off the page and so the translated text does not appear in a rendered PDF version."],
    "automatable": 1,
    "id": "missing-text"
  }, {
    "examples": ["A document is formatted incorrectly (e.g., it should have been set up for a print layout but instead is set up for an online presentation."],
    "definition": "Issues related to overall layout and design (versus local formatting)",
    "children": [{
      "examples": ["Headings should be blue but are green instead."],
      "definition": "Colors are used incorrectly",
      "name": "Color",
      "id": "color"
    }, {
      "examples": ["Specifications state that endnotes should be used with roman numerals but footnotes were used with in-text symbols (*, \u2020, \u2021, etc.)."],
      "definition": "Footnotes or endnotes are placed inappropriately or use incorrect in-text symbols",
      "name": "Footnote/endnote format",
      "id": "footnote-format"
    }, {
      "examples": ["A English source text uses a normal-weight serif font for body text but the Japanese translation uses a heavy-weight \u201cgothic\u201d (roughly, sans-serif) font appropriate for headlines only."],
      "definition": "The overall font chosen is incorrect or inappropriate.",
      "notes": ["While this issue may apply to both source and target, it is most likely to apply to the target."],
      "name": "Global font choice",
      "id": "global-font-choice"
    }, {
      "examples": ["Headers should appear on every page but have been omitted on odd-numbered pages."],
      "definition": "Headers or footers are formatted incorrectly",
      "name": "Headers and footers",
      "id": "headers-footers"
    }, {
      "examples": ["Specifications called for 4 cm inside margins, but 2.5 cm margins were used instead."],
      "definition": "Text margins are incorrect.",
      "name": "Margins",
      "id": "margins"
    }, {
      "examples": ["There is a page break between a figure and its caption."],
      "definition": "Page breaks appear in inappropriate locations.",
      "name": "Page breaks",
      "id": "page-breaks"
    }, {
      "examples": ["Specifications state that at least two lines of a paragraph must appear on a page (if the paragraph is more than one line), but a single line starts a page while two appear on the previous page."],
      "definition": "The text has widows or orphans (single or short lines of text that appear on a separate page from the rest of a paragraph).",
      "name": "Widows/orphans",
      "id": "widows-orphans"
    }],
    "name": "Overall design (layout)",
    "id": "overall-design"
  }, {
    "definition": "The target text has insufficient room to display the translated text according to specifications.",
    "name": "Truncation/text expansion",
    "notes": ["This issue may indicate an underlying //internationalization// problem."],
    "examples": ["The German translation of an English string in a user interface runs off the edge of a dialogue box and cannot be read."],
    "automatable": 1,
    "id": "truncation-text-expansion"
  }]
}, {
  "core": 1,
  "name": "Fluency",
  "definition": "Issues related to the form or content of a text, irrespective as to whether it is a translation or not.",
  "notes": ["If an issue can be detected "],
  "children": [{
    "definition": "The text is ambiguous in its meaning.",
    "name": "Ambiguity",
    "notes": ["This issue is distinguished from //ambiguous-translation// by its focus on monolingual ambiguity. In cases where the translation process has introduced ambiguity, //ambiguous-translation// should be used instead, if it is included in a metric. However, any ambiguity in a source text would be classified under this issue."],
    "id": "ambiguity",
    "examples": ["A text reads \u201cI cannot recommend this too highly.\u201d (The meaning can be that the speaker cannot make a good recommendation or that it is highly recommended.)"],
    "children": [{
      "examples": ["A text reads \u201cAfter completing this, move to the next step,\u201d but there are a number of possible referents for "],
      "definition": "The text uses relative pronouns or other referential mechanisms that are unclear as to their reference.",
      "name": "Unclear reference",
      "id": "unclear-reference"
    }]
  }, {
    "definition": "A link or cross reference points to an incorrect or nonexistent location",
    "name": "Link/cross-reference",
    "id": "broken-link",
    "examples": ["An HTML document has an href that points to a file that does not exist."],
    "automatable": 1,
    "children": [{
      "examples": ["A link in an HTML document points to a U.S. government URL that has moved and no longer exists."],
      "definition": "A link or cross reference points to an incorrect or nonexistent location outside of the same document within which it occurs",
      "name": "Document-external link",
      "automatable": 1,
      "id": "document-external-link"
    }, {
      "examples": ["An internal link refers to the location \u201c#section5\u201d but there is no anchor \u201csection5\u201d in the document."],
      "definition": "A link or cross reference points to an incorrect or nonexistent location within the same document within which it occurs.",
      "name": "Document-internal link",
      "automatable": 1,
      "id": "document-internal-link"
    }]
  }, {
    "examples": ["A text document in UTF-8 encoding is opened as ISO Latin-1, resulting in all \u201cupper ASCII\u201d characters being garbled."],
    "definition": "Characters are garbled due to incorrect application of an encoding.",
    "name": "Character encoding",
    "automatable": 1,
    "id": "character-encoding"
  }, {
    "examples": ["While individual sentences of the text are all perfectly fluent, the text as a whole does not make sense and is inconsistent with itself."],
    "definition": "The text is not coherent",
    "notes": ["Since coherence applies above the segment level, this issue type would generally be assessed with a holistic metric rather than an analytic one, although any claims that a text is not coherent should be able to point to specific portions and problems. Often these specific problems can be classified as //coherence// or //inconsistency// issues in an analytic metric."],
    "name": "Coherence",
    "id": "coherence"
  }, {
    "examples": ["An English text is missing conjunctions and particles (e.g., \u201cthus\u201d, \u201ctherefore\u201d, \u201cbut\u201d, and \u201chowever\u201d) needed for the logic of the text to be clear."],
    "definition": "Portions of the text needed to connect it into an understandable whole (e.g., reference, substitution, ellipsis, conjunction, and lexical cohesion) are missing or incorrect.",
    "notes": ["Cohesion applies at the local level to incorrect or missing elements needed for the intended meaning of the text to be clear. Cohesion problems at the local level may contribute to //coherence// problems for the text as a whole."],
    "name": "Cohesion",
    "id": "cohesion"
  }, {
    "definition": "The content is deemed to have a level of conformance to a reference corpus. The non-conformance type reflects the degree to which the text conforms to a reference corpus given an algorithm that combines several classes of error type to produce an aggregate rating.",
    "name": "Corpus conformance",
    "notes": ["One example of this issue type might involve output from a quality estimation system that delivers a warning that a text has a very low quality estimation score."],
    "examples": ["A text reading \u201cThe harbour connected which to printer is busy or configared not properly\u201d is flagged by a language analysis tool as suspect based on its lack of conformance to an existing corpus."],
    "automatable": 1,
    "id": "corpus-conformance"
  }, {
    "examples": ["A text reads \u201cThe man the man whom she saw\u2026\u201d", "A paragraph appears verbatim twice in a row."],
    "definition": "Content has been duplicated (e.g., a word or longer portion of text is repeated unintentionally).",
    "name": "Duplication",
    "automatable": 1,
    "id": "duplication"
  }, {
    "core": 1,
    "name": "Grammar",
    "definition": "Issues related to the grammar or syntax of the text, other than spelling and orthography.",
    "children": [{
      "examples": ["A text reads \u201cCheck the part number as given in the screen\u201d instead of \u201c\u2026on the screen\u201d.", "A text reads \u201cThe graphic is then copied into an internal memory\u201d instead of \u201cThe graphic is copied to internal memory.\u201d"],
      "definition": "A function word (e.g., a preposition, \u201chelping verb\u201d, article, determiner) is used incorrectly.",
      "name": "Function words",
      "automatable": 1,
      "id": "function-words"
    }, {
      "definition": "There is a problem in the form of a word",
      "name": "Word form",
      "id": "word-form",
      "examples": ["An English text has "],
      "automatable": 1,
      "children": [{
        "examples": ["A text reads \u201cThey was expecting a report.\u201d"],
        "definition": "Two or more words do not agree with respect to case, number, person, or other grammatical features",
        "name": "Agreement",
        "automatable": 1,
        "id": "agreement"
      }, {
        "examples": ["A text reads \u201cRead these instructions careful\u201d instead of \u201cRead these instructions carefully.\u201d"],
        "definition": "A word is the wrong part of speech",
        "name": "Part of speech",
        "automatable": 1,
        "id": "part-of-speech"
      }, {
        "examples": [],
        "definition": "A verbal form displays the wrong tense, mood, or aspect",
        "name": "Tense/mood/aspect",
        "automatable": 1,
        "id": "tense-mood-aspect"
      }]
    }, {
      "examples": ["A German text reads \u201cEr hat gesehen den Mann\u201d instead of \u201cEr hat den Mann gesehen.\u201d"],
      "definition": "The word order is incorrect",
      "name": "Word order",
      "automatable": 1,
      "id": "word-order"
    }],
    "examples": ["An English text reads \u201cThe man was seeing "],
    "automatable": 1,
    "id": "grammar"
  }, {
    "core": 1,
    "name": "Inconsistency",
    "definition": "The text shows internal inconsistency.",
    "id": "inconsistency",
    "examples": ["The text states that bug reports should be submitted to a mailing list in one place and via an online bug tracker tool in another."],
    "children": [{
      "examples": ["Translation specifications state that quotes in a text must match the 1957 edition of a book, but the translator used the 1943 edition, which was substantially different."],
      "definition": "The text is inconsistent with a specified external reference",
      "notes": ["For inconsistent terminology, options in the Terminology branch should be used instead."],
      "name": "Inconsistent with external reference",
      "id": "external-inconsistency"
    }, {
      "examples": ["A screen shot shows a button with the text \u201cOpen other\u2026\u201d but the text referring to the screen shot tells the user to click on the \u201cOpen alternative\u2026\u201d button."],
      "definition": "Phrasing/wording is inconsistent between text shown in images and running text.",
      "name": "Images vs. text",
      "id": "images-vs-text"
    }, {
      "examples": ["A text uses both \u201capp.\u201d and \u201capprox.\u201d for approximately."],
      "definition": "The form of abbreviations is inconsistent in the text.",
      "name": "Inconsistent abbreviations",
      "automatable": 1,
      "id": "inconsistent-abbreviations"
    }, {
      "examples": ["An HTML file contains numerous links to other HTML files; some have been updated to reflect the appropriate language version while some point to the source language version."],
      "definition": "Links are inconsistent in the text",
      "name": "Inconsistent link/cross-reference",
      "id": "inconsistent-link"
    }]
  }, {
    "definition": "Issues related to an index or Table of Contents (TOC).",
    "name": "Index/TOC",
    "id": "index-toc",
    "examples": ["A Table of Contents is missing items that should be included."],
    "automatable": 1,
    "children": [{
      "examples": ["A Table of Content should be formatted with variable (hierarchical) indenting and tab leader characters, but is instead displayed as a \u201crun-in\u201d list."],
      "definition": "An index/TOC is formatted incorrectly",
      "name": "Index/TOC format",
      "automatable": 1,
      "id": "index-toc-format"
    }, {
      "examples": ["A chapter heading is not listed in a Table of Contents."],
      "definition": "Items in an index/TOC are incorrect or missing",
      "name": "Missing/incorrect TOC item",
      "automatable": 1,
      "id": "missing-incorrect-toc-item"
    }, {
      "examples": ["A table of contents refers to page numbers from the source document that do not apply to the translated text."],
      "definition": "An index/TOC refers to incorrect page numbers",
      "name": "Page references",
      "automatable": 1,
      "id": "page-references"
    }]
  }, {
    "definition": "The text does not adhere to locale-specific mechanical conventions and violates requirements for the presentation of content in the target locale.",
    "name": "Locale convention",
    "notes": ["This issue type is distinguished from //locale-specific-content// in that this category refers only to whether the text is given the proper mechanical form for the locale, not whether the content applies to the locale or not. If text conforms to conventions for the locale, but does not apply to the target locale, //locale-specific-content// should be used instead."],
    "children": [{
      "definition": "Content uses the wrong format for addresses.",
      "name": "Address format",
      "notes": ["Very often this issue indicates an underlying //internationalization// problem."],
      "id": "address-format",
      "examples": ["An online form translated from English to Hindi requires a street number even though many addresses in India do not include a house number."],
      "children": [{
        "definition": "Content uses the wrong form for postal codes.",
        "name": "Postal code",
        "notes": ["Very often this issue indicates an underlying //internationalization// problem."],
        "examples": ["A translated online form validates all postal codes as consisting of exactly five numbers but the target locale uses a combination of six letters and numbers."],
        "automatable": 1,
        "id": "postal-code"
      }]
    }, {
      "definition": "Content uses the wrong type of calendar.",
      "name": "Calendar type",
      "notes": ["Very often this issue indicates an underlying //internationalization// problem."],
      "examples": ["A tourism text translated from Arabic English gives a year as 1435, but it should have been converted from the Islamic calendar to the Gregorian calendar year 2014."],
      "automatable": 1,
      "id": "calendar-type"
    }, {
      "definition": "Content inappropriately uses a culture-specific reference that will not be understandable to the intended audience",
      "name": "Culture-specific reference",
      "notes": ["In the cases of texts that were written with the intention that they be translated, this issue may indicate a broader conceptual or Internationalization problem."],
      "examples": ["An English text refers to steps in a process as \u201cFirst base\u201d, \u201cSecond base\u201d, and \u201cThird base\u201d, and to successful completion as a \u201cHome run\u201d and uses other metaphors from baseball. These prove difficult to translate and confuse the target audience in Germany.", "An marketing text in Greek includes reference to popular Greek music. When translated into English these references are not understandable to the target audience."],
      "automatable": 1,
      "id": "culture-specific"
    }, {
      "definition": "Content uses the wrong format for currency.",
      "name": "Currency format",
      "notes": ["Very often this issue indicates an underlying //internationalization// problem."],
      "examples": ["A text dealing with business transactions from English into Hindi assumes that all currencies will be expressed in simple units, while the convention in India is to give such prices in lakh rupees (10000 rupees)"],
      "automatable": 1,
      "id": "currency-format"
    }, {
      "examples": ["An English text has \u201c2012-06-07\u201d instead of the expected \u201c06/07/2012.\u201d"],
      "definition": "A text uses a date format inappropriate for its locale.",
      "name": "Date format",
      "automatable": 1,
      "id": "date-format"
    }, {
      "definition": "The text systematically uses punctuation not appropriate for the specified locale",
      "name": "Locale-specific punctuation",
      "id": "locale-specific-punctuation",
      "examples": ["A text translated from English to Japanese maintains European-style punctuation\u2014such as full-stops (.)\u2014instead of using the appropriate Japanese punctuation, such as the Japanese full stop (\u3002)."],
      "automatable": 1,
      "children": [{
        "definition": "A text uses quote marks inappropriate for its locale.",
        "name": "Quote mark type",
        "notes": ["Use this issue only if the problem is systematic. Otherwise use Typography or Punctuation, if available."],
        "examples": ["A French text should use guillemets (\u00ab\u00bb) but instead systematically uses German-style quotes (\u201e\u201d)"],
        "automatable": 1,
        "id": "quote-mark-type"
      }]
    }, {
      "examples": ["A text in France uses feet and inches and Fahrenheit temperatures."],
      "definition": "A text uses a measurement format inappropriate for its locale.",
      "name": "Measurement format",
      "automatable": 1,
      "id": "measurement-format"
    }, {
      "definition": "A text uses a name format inappropriate for its locale.",
      "name": "Name format",
      "notes": ["Very often this issue indicates an underlying //internationalization// problem."],
      "examples": ["A text translated from Hungarian to English presents names with the family name first when the name order should be instead inverted to have family name last.", "A web form translated for Indonesia requires users to provide a \u201clast name\u201d even though many Indonesians have only a single name.", "A translated text refers to \u201cPedro Diego Estavez\u201d as \u201cMr. Estavez\u201d rather than \u201cMr. Diego\u201d."],
      "automatable": 1,
      "id": "name-format"
    }, {
      "examples": ["A French advertising text uses anglicisms that are forbidden for print texts by the Academie fran\u00e7aise specifications."],
      "definition": "A text violates national language standards.",
      "name": "National language standard",
      "automatable": 1,
      "id": "national-language-standard"
    }, {
      "definition": "A text uses a number format inappropriate for its locale.",
      "name": "Number format",
      "notes": ["Very often this issue indicates an underlying //internationalization// problem."],
      "examples": ["A German text has \u201c123,456\u201d instead of the locale-appropriate \u201c123.456\u201d.", "A text translated for India has \u201c10000\u201d rather than \u201c1000\u201d."],
      "automatable": 1,
      "id": "number-format"
    }, {
      "definition": "A translated software product uses shortcuts that do not conform to locale expectations or that make no sense for the locale",
      "name": "Shortcut key",
      "notes": ["Very often this issue indicates an underlying //internationalization// problem."],
      "examples": ["A software product uses CTRL-S to save a file in Hungarian, rather than the appropriate CTRL-M (for "],
      "automatable": 1,
      "id": "shortcut-key"
    }, {
      "definition": "Content uses the wrong form for telephone numbers",
      "name": "Telephone format",
      "notes": ["Very often this issue indicates an underlying //internationalization// problem."],
      "examples": ["A German text presents a telephone number in the format (xxx) xxx - xxxx instead of the expected 0xx followed by a group of digits separated into groups by spaces."],
      "automatable": 1,
      "id": "telephone-format"
    }, {
      "examples": ["A text written for the U.S. uses a 24-hour time notation rather than AM/PM time."],
      "definition": "A text uses a time format inappropriate for its locale.",
      "name": "Time format",
      "automatable": 1,
      "id": "time-format"
    }],
    "examples": ["An incorrect format for currency is used for a German text, with a period (.) instead of a comma (,) as a thousands separator.", "A text translated into Japanese uses Western quote marks to indicate titles rather than the appropriate Japanese quote marks (\u300c and \u300d). (Note: this example would be categorized as //quote-mark-type// if the metric includes it.)"],
    "automatable": 1,
    "id": "locale-convention"
  }, {
    "examples": ["A text may not include colons or forward- or back-slashes, which might cause confusion with path names on some computer systems, but it contains these characters."],
    "definition": "The text includes characters that are not allowed.",
    "name": "Nonallowed characters",
    "automatable": 1,
    "id": "nonallowed-characters"
  }, {
    "definition": "Content is offensive according to the specifications",
    "name": "Offensive",
    "notes": ["if ", "In many cases offensive content may be detected in a (semi)automatic fashion through the use of lists of unacceptable phrases, often in conjunction with terminology checkers. However, automatic checkers will not be able to identify all potentially offensive content, especially as content considered unobjectionable in one context or culture may be considered highly offensive in another."],
    "examples": ["A text contains words generally considered to be profanities outside of a context where they would be allowed", "Images in a document depict nudity for a culture where nudity is considered offensive", "An American text uses the \u201cOK\u201d symbol (\ud83d\udc4c) to indicate approval, but this symbol is considered offensive in Brazil."],
    "automatable": 1,
    "id": "offensive"
  }, {
    "examples": ["The regular expression "],
    "definition": "The text contains a pattern (e.g., text that matches a regular expression) that is not allowed.",
    "name": "Pattern problem",
    "automatable": 1,
    "id": "pattern-problem"
  }, {
    "definition": "The text uses a level of formality higher or lower than required by the specifications or general language conventions.",
    "name": "Register",
    "notes": ["Register involves a number of factors, including appropriateness of the discourse for the specific subject field, the level of formality, and the mode of discourse (e.g., written text versus transcribed speech).", "The notion of register used in this document is derived from Systemic Functional Linguistics.", "For uses of the improper grammatical register that do not otherwise impact style, such as German "],
    "children": [{
      "examples": ["A refers to dollars as \u201cclams\u201d in a case when this slang term would be inappropriate."],
      "definition": "The text uses words such as slang that are inappropriate for the intended register.",
      "name": "Variants/slang",
      "automatable": 1,
      "id": "variants-slang"
    }],
    "examples": ["A formal letter uses contractions, colloquialisms, and expressions characteristic of spoken rather than written language, and those comes across as less serious than intended."],
    "automatable": 1,
    "id": "register"
  }, {
    "examples": ["A listing of items should be in alphabetical order but appears in a random order instead."],
    "definition": "A list is not in the appropriately collated sequence.",
    "name": "Sorting",
    "automatable": 1,
    "id": "sorting"
  }, {
    "core": 1,
    "name": "Spelling",
    "definition": "Issues related to spelling of words",
    "children": [{
      "examples": ["The name "],
      "definition": "Issues related to capitalization",
      "name": "Capitalization",
      "automatable": 1,
      "id": "capitalization"
    }, {
      "examples": ["The Hungarian word "],
      "definition": "Issues related to the use of diacritics",
      "name": "Diacritics",
      "automatable": 1,
      "id": "diacritics"
    }],
    "examples": ["The German word "],
    "automatable": 1,
    "id": "spelling"
  }, {
    "core": 1,
    "name": "Typography",
    "definition": "Issues related to the mechanical presentation of text. This category should be used for any typographical errors other than spelling.",
    "notes": ["Do not use for issues related to //spelling//."],
    "children": [{
      "examples": ["An English text uses a semicolon where a comma should be used."],
      "definition": "Punctuation is used incorrectly (for the locale or style)",
      "notes": ["In most cases it is not necessary to distinguish this issue type from //typography//."],
      "name": "Punctuation",
      "id": "punctuation"
    }, {
      "examples": ["A text reads \u201cKing Ludwig of Bavaria (1845\u20131896 was deposed on account of his supposed madness,\u201d omitting the closing parenthesis around the dates."],
      "definition": "One of a pair of quotes or brackets\u2014e.g., a (, ) [, ], {, or } character\u2014is missing from text.",
      "name": "Unpaired quote marks or brackets",
      "id": "unpaired-marks"
    }, {
      "examples": ["A document uses a string of space characters instead of tabs", "Extra spaces are added at the start of a string"],
      "definition": "Whitespace is used incorrectly",
      "name": "Whitespace",
      "automatable": 1,
      "id": "whitespace"
    }],
    "examples": ["A text uses punctuation incorrectly.", "A text has an extraneous hard return in the middle of a paragraph."],
    "automatable": 1,
    "id": "typography"
  }, {
    "examples": ["The following text appears in an English translation of a German automotive manual: \u201cThe brake from whe this \u0a95\u0ac1\u0aa4\u0abe\u0ab0\u0acb \u0abf\u0ab8 S149235 part numbr,,.\u201d", "Text appears in a translation that cannot be understood at all."],
    "core": 1,
    "definition": "The exact nature of the error cannot be determined. Indicates a major break down in fluency.",
    "name": "Unintelligible",
    "id": "unintelligible"
  }],
  "examples": ["A text has errors in it that prevent it from being understood."],
  "id": "fluency"
}, {
  "definition": "Functional errors introduced by lack of support for languages, scripts, or other locale-specific features",
  "name": "Functional",
  "notes": ["If child issues are included, most issues in this category would be assigned to them."],
  "id": "functional",
  "examples": ["The French version of a software package fails to function as expected because it was engineered with assumptions based on American English."],
  "children": [{
    "examples": ["In Turkish the upper-case form of i is \u0130 and the lower-case form of I is \u0131. As a result case-changing algorithms that are not internationalized and aware of Turkish will change the case of these characters incorrectly."],
    "definition": "Text casing routines do not support needed languages",
    "notes": ["This issue may also impact //text-indexing// and //string-matching// if case-insensitive indexing or matching is used."],
    "name": "Case folding",
    "id": "case-folding"
  }, {
    "examples": ["A database application cannot process or produce text stored in ISO Latin 6 (Nordic) encoding and so cannot interface with needed legacy systems in Norway."],
    "definition": "Software does not support character sets needed for specific locales",
    "name": "Character set support",
    "id": "character-set-support"
  }, {
    "examples": ["The sort routine in a spreadsheet does a simple sort by Unicode code-point sequence, and does not support needed collation sequences for various markets."],
    "definition": "A collation (text sorting) routine does not support locale-specific collation sequences",
    "notes": ["Specific results of this problem will often be classified under //sorting//."],
    "name": "Fixed collation",
    "id": "fixed-collation"
  }, {
    "examples": ["A vital keyboard in the English version command involves pressing the A key, but when the program is run using a Russian keyboard layout, it is unusable because the program is waiting U#0041 (A) for instead of U#0391 (\u0410)."],
    "definition": "Key-board shortcuts or other commands are hard-coded into the system and do not function when alternative keyboards are selected",
    "name": "Hard-coded keyboard command",
    "id": "hard-coded-keyboard-command"
  }, {
    "examples": ["A form validates names against a regular expression, "],
    "definition": "Validation of input does not function properly because it assumes certain parameters that do not apply in all locales",
    "name": "Input validation",
    "id": "input-validation"
  }, {
    "examples": ["A French-language website has not been fully localized. When the user clicks a link to one of these pages he or she should be taken to the English-language source page, but instead is taken to a blank page with no content."],
    "definition": "A program includes a \u201cfall-back\u201d language for content that has not been localized, but the needed fall-back text is missing.",
    "notes": ["It is common practice to allow software or websites to fall back on another language if some content is missing. For example, a partially-localized German website might display some content in English for pages that have not yet been localized."],
    "name": "Missing fall-back text",
    "id": "missing-fall-back-text"
  }, {
    "examples": ["A German matching algorithm should recognize that the names Roemer and R\u00f6mer are the same name (oe and \u00f6 are alternative spelling for the same sound) but does not, thus returning only some of the appropriate matches to a query."],
    "definition": "String-matching routines do not properly consider language-specific rules",
    "notes": ["This issue may also extend to Unicode characters using different normalization forms if a matching algorthim does not consider canonical equivalence. This issue is closely related to //text-indexing//"],
    "name": "String matching",
    "id": "string-matching"
  }, {
    "examples": ["When users enter text with accented vowels using UTF-8 encoding, these are systematically converted to other characters due to an internal text-processing routine that assumes ISO Latin-1 encoding."],
    "definition": "Text entered into a system is corrupted",
    "notes": ["Problems with text corruption often emerge when different systems interact with each other without considering the encoding emitted or expected by other systems."],
    "name": "Text corruption",
    "id": "text-corruption"
  }, {
    "examples": ["The German name R\u00f6mer should be indexed for retrieval as \u201cR\u00f6mer\u201d, \u201cRoemer\u201d, and \u201cRomer\u201d, but the indexing engine uses only the first. As a result, users looking for this name in a database will not find it if they use one of the alternative forms."],
    "definition": "When text is indexed for retrieval and processing, the indexing does not account for language-specific requirements.",
    "notes": ["This issue is closely related to //string-matching//"],
    "name": "Text indexing",
    "id": "text-indexing"
  }, {
    "examples": ["A shared calendar system does not consider timezones and sends out all notifications based on the time on the server\u2019s clock. As a result it does not send out reminders for meetings at the appropriate time."],
    "definition": "Software does not support multiple time zones or conversions between time zones",
    "name": "Time zone support",
    "id": "time-zone-support"
  }, {
    "examples": ["A system is localized for China, but required support for the writing systems of Chinese minority languages is not usable."],
    "definition": "A needed writing system is not fully supported",
    "children": [{
      "examples": ["Text in Arabic is displayed left-to-right rather than right-to-left."],
      "definition": "The software cannot support bi-directional scripts, such as Arabic and Hebrew",
      "name": "Bi-di support",
      "id": "bi-di-support"
    }, {
      "examples": ["Arabic text entered into a system does not display appropriate contextual variations (ligatures) and instead uses only medial character forms, rendering the result unreadable."],
      "definition": "Fonts for one or more scripts are not rendered properly",
      "notes": ["Font-rendering problems are extremely common in software that has not previously been adapted to support \u201ccomplex\u201d scripts."],
      "name": "Font rendering engine",
      "id": "font-rendering-engine"
    }, {
      "examples": ["A computer program provides support only for American English keyboards and so does not work properly in Icelandic since users cannot enter text with Icelandic-specific characters."],
      "definition": "Software does not provide support for appropriate local-language keyboards",
      "name": "Keyboard support",
      "id": "keyboard-support"
    }],
    "name": "Writing system support",
    "id": "writing-system-support"
  }]
}, {
  "definition": "There is a problem related to the internationalization of content.",
  "name": "Internationalization",
  "notes": ["While //internationaliztion// errors are generally detected in the target content, they refer to problems in the source that cause problems with translated/localized content. Even in cases where //internationalization// is not being specifically checked, if problems related to internationalization are encountered, they should generally be reported to the content creators.", "As of August 2014, the intention is to expand this branch in the future with more specific issue types."],
  "id": "internationalization",
  "examples": ["A document assumes that all addresses use postal codes conforming to the U.S. \u201czip+four\u201d convention and includes a verification step for postal codes that does not allow for non-U.S. codes.", "A computer program is localized but some content remains untranslated because it was embedded in the program code and not made accessible to the translator."],
  "children": [{
    "examples": ["A localizable string contains the following: "],
    "definition": "Text is concatenated in ways that will not function properly when the text is translated",
    "name": "Concatenation",
    "id": "concatenation"
  }, {
    "examples": ["Users can select user names with any valid, non-control Unicode characters. As a result a user creates the user name \u0422\u043eny (with the first two letters in Cyrillic) to impersonate an administrative user with the name Tony (all in Latin script)."],
    "definition": "Software does not provide any security protection against easily confusable character such as Latin-script A, Greek \u0391, and Cyrillic \u0410, thus allowing users to impersonate other users\u2019 names.",
    "notes": ["This issue has emerged with the advent of pervasive Unicode support that allows multiple scripts to be combined in input. Solving this problem requires careful parsing of input."],
    "name": "Confusable security",
    "id": "confusable-security"
  }, {
    "definition": "Textual content is embedded in other elements in ways that make it inaccessible during the localization process.",
    "name": "Embedded string",
    "notes": ["The subtypes of this issue comprise the most common examples."],
    "id": "embedded-string",
    "examples": ["The UI of an industrial system includes graphical images of text that cannot be edited as text."],
    "children": [{
      "examples": ["Error messages for a product are stored as variables directly in the source code of a software product and are therefore not localized when UI strings are sent for translation."],
      "definition": "String references are embedded in computer code rather than externalized to resource files. As a result the string content is accessible only by manipulatin the source code of the application.",
      "name": "Embedded string in code",
      "id": "embedded-string-in-code"
    }, {
      "examples": ["A service manual contains an image of a mechanical system with part labels stored in the \u201cflattened\u201d graphic. As a result the localization process cannot produce localized versions of the graphic"],
      "definition": "A graphics contains embedded text as an image that cannot be edited",
      "notes": ["Solving this problem generally requires access to original application files used to produce graphics initially rather than to rendered down-stream versions use for web display, display in software UIs, or embedding in word-processing applications."],
      "name": "Embedded string in graphic",
      "id": "embedded-string-in-graphic"
    }]
  }, {
    "definition": "Graphical aspects of the content cannot be easily changed to match locale-specific expectations.",
    "name": "Graphical aspects",
    "notes": ["This issue and its children apply only to cases where cultural aspects of graphics are not accessible to the localization process and so cannot be adapted."],
    "id": "graphical-internationalization",
    "examples": ["A piece of software being localized for the Swedish market contain images of products available only in the U.S. market."],
    "children": [{
      "examples": ["A UK-based website uses a red, white, and blue color scheme and hard-codes these colors into graphical assets and inline styles. When translated for China, these colors are inappropriate but cannot be changed because of the way they are encoded into the site."],
      "definition": "Use of colors is fixed and not adaptable to other locales",
      "notes": ["This issue type does not apply merely to the use of culture-specific colors, but rather to cases where the colors are not made accessible to the localization process and so cannot be changed."],
      "name": "Color internationalization",
      "id": "color-internationalization"
    }, {
      "examples": ["A graphic depicts a \u201croad trip\u201d by showing sights familiar to a German audience that would be unknown in other locales."],
      "definition": "Graphics embed cultural assumptions or references and cannot be changed",
      "notes": ["If graphics can be easily changed in the localization process, this issue does not apply."],
      "name": "Culture-specific graphic",
      "id": "culture-specific-graphic"
    }, {
      "examples": ["A website uses inline base64-encoded representations of some graphics to speed up load times for the page, but these graphics are thus not accessible for localization."],
      "definition": "Computer code contains \u201chard-coded\u201d graphics that cannot be accessed or changed during the localization process.",
      "name": "Hard-coded graphic",
      "id": "hard-coded-graphic"
    }]
  }, {
    "examples": ["A technical text uses a \u201cdeductive\u201d reasoning style that cannot be easily adapted to areas expecting an \u201cinductive\u201d reasoning style."],
    "definition": "Content includes language- or locale-dependent logical assumptions that prevent it from being appropriately localized",
    "notes": ["This issue type is common when going between European and Asian markets. In some cases texts that are perfectly clear in one market may be difficult to follow in another due to culture-specific differences in logic."],
    "name": "Language-dependent logic",
    "id": "language-dependent-logic"
  }, {
    "examples": ["A word processor is released for Kazakhstan but does not contain tools needed to fully support the Kazakh language."],
    "definition": "Needed tools that specifically support required languages are missing or do not function as expected",
    "children": [{
      "examples": ["The grammar checker in a word processor sold in Germany supports English only."],
      "definition": "A needed grammar checking is missing or does not support the required language.",
      "name": "Grammar checker",
      "id": "grammar-checker"
    }, {
      "examples": ["A desk-top publishing (DTP) tool has a hyphenation engine that does not support Hungarian."],
      "definition": "A hyphenation engine does not support a needed language",
      "name": "Hyphenator",
      "id": "hyphenator"
    }, {
      "examples": ["The spell-checking engine used in a presentation tool localized for Korean does not include rules for the Korean language and cannot be used to spell-check Korean text."],
      "definition": "A spell checker does not support a needed language",
      "name": "Spell checker",
      "id": "spell-checker"
    }],
    "name": "Language-specific tool support",
    "id": "language-specific-tool-support"
  }, {
    "definition": "Aspects of how a software product presents locale-sensitive data are not properly internationalized",
    "name": "Localization support",
    "notes": ["See the subtypes for specific examples. Note that this issue type and its children apply to internationaliztion problems in the source, not to specific instances in a target language, although they may be discovered as problems classified under //locale-convention// in specific target languages. Although most of the examples of child nodes use specific instances where problems appear, they all refer to engineering problems of the source content."],
    "id": "localization-support",
    "examples": ["An online submission form to register for appointments with a product demonstrator does not allow data to be submitted for many countries because it validates data against a US-centric model."],
    "children": [{
      "examples": ["A form enforces a US model of street addresses that does not apply in many target languages and does not support notation of districts or other important features of addresses in some countries."],
      "definition": "An inport form, database, or other software component does not properly support international address formats",
      "notes": ["Corresponds to //address-format// in //locale-convention//.", "This is used to mark engineering problems in the source content, not specific problems in the target."],
      "name": "Address internationalization",
      "id": "address-internationalization"
    }, {
      "examples": ["A task-management system designed in the U.S. displays Sunday as the first day of the week, while many countries list it as the last day of the week.", "A website displays all dates according to the Gregorian calendar, but the target audience in much of the Middle East prefers to use the Islamic calendar."],
      "definition": "Software does not support one or more calendar types needed for some locales.",
      "notes": ["This issue does not apply to cases where dates are displayed in the wrong format, but according to the right calendar system.", "Corresponds to //calendar-format// in //locale-convention//.", "This is used to mark engineering problems in the source content, not specific problems in the target."],
      "name": "Calendar internationalization",
      "id": "calendar-internationalization"
    }, {
      "examples": ["An online commerce form displays all amounts in euros, but customers use the form in countries that use other currencies."],
      "definition": "A system does not support multiple currencies or specific currencies needed for individual markets",
      "notes": ["Corresponds to //currency-format// in //locale-convention//. This is used to mark engineering problems in the source content, not specific problems in the target."],
      "name": "Currency internationalization",
      "id": "currency-internationalization"
    }, {
      "examples": ["A system displayes all dates as \\\"Dd/Mm/Yy\\\", resulting in dates that cannot be understood correctly in much of the world."],
      "definition": "Date formats are not properly internationalized",
      "notes": ["Corresponds to //date-format// in //locale-convention//. This is used to mark engineering problems in the source content, not specific problems in the target."],
      "name": "Date internationalization",
      "id": "date-internationalization"
    }, {
      "examples": ["An engineering software system developed in France supports only the metric system and when localized for use in the United States does not support U.S. measurement formats, rending it unusable when users print bill of parts sheets to order components from U.S. suppliers."],
      "definition": "A product does not provide support for needed measurement formats",
      "notes": ["Corresponds to //measurement-format// in //locale-convention//. This is used to mark engineering problems in the source content, not specific problems in the target."],
      "name": "Measurement internationalization",
      "id": "measurement-internationalization"
    }, {
      "examples": ["An online registration form asks for \u201clast name\u201d and \u201cfirst name\u201d, resulting in confusion for users where family names are listed first (e.g., China, Japan, and Hungary) or where users have multiple family names (e.g., Spain, Portugal, Brazil) or only one name (e.g., Indonesia)."],
      "definition": "Forms, databases, or other functional software components do not provide support for needed personal name formats.",
      "notes": ["Corresponds to //name-format// in //locale-convention//. This is used to mark engineering problems in the source content, not specific problems in the target."],
      "name": "Name internationalization",
      "id": "name-internationalization"
    }, {
      "examples": ["An online system displays all numbers with commas to delimit thousands and a full stop (.) to indicate the decimal position. This format is confusing in many locales that use other delimiters or delimit texts using hundreds separators instead of thousands separators."],
      "definition": "Numbers are displayed in the wrong format (e.g, with wrong delimiters)",
      "notes": ["Corresponds to //number-format// in //locale-convention//. This is used to mark engineering problems in the source content, not specific problems in the target."],
      "name": "Number internationalization",
      "id": "number-internationalization"
    }, {
      "examples": ["CTRL-S is used for saving files and cannot be changed, but some locales customarily use other keyboard shortcuts to save files."],
      "definition": "Software shortcut keys are set to combinations that do not make sense in all locales and cannot be changed",
      "notes": ["Corresponds to //shortcut-key// in //locale-convention//. This is used to mark engineering problems in the source content, not specific problems in the target."],
      "name": "Shortcut key internationalization",
      "id": "shortcut-key-internationalization"
    }, {
      "examples": ["A contact database does not store country codes and fixes all telephone numbers at 10 digits, rejecting any shorter telephone numbers. As a result, it cannot be used outside of a handful of countries that have phone numbers matching these requirements."],
      "definition": "The format of telephone numbers is set in forms, databases, or other functional aspects of software and therefore cannot support telephone numbers that do not match this format.",
      "notes": ["Corresponds to //telephone-format// in //locale-convention//. This is used to mark engineering problems in the source content, not specific problems in the target."],
      "name": "Telephone internationalization",
      "id": "telephone-internationalization"
    }, {
      "examples": ["A time picker requires users to use AM/PM time even in cases where 24-hour time is the norm."],
      "definition": "Forms, databases, display, or other aspects of software do not support needed time formats",
      "notes": ["Corresponds to //time-format// in //locale-convention//. This is used to mark engineering problems in the source content, not specific problems in the target."],
      "name": "Time internationalization",
      "id": "time-internationalization"
    }]
  }, {
    "examples": ["A printer driver supports only international A paper sizes, and therefore crops data when printing to US Letter paper."],
    "definition": "Systems do not support needed paper or envelope sizes",
    "name": "Paper/envelope size",
    "id": "paper-envelope-size"
  }, {
    "core": 1,
    "name": "Resource externalization",
    "definition": "Translatable resources have not properly been externalized from functional code.",
    "notes": ["Standard practice in writing international code is to put all translatable resource into external resources (such as files containing UI strings). Failure to do so is a major cause of problems or failure in software localization tasks."],
    "examples": ["A legal notice in German uses the informal "],
    "automatable": 1,
    "id": "resource-externalization"
  }, {
    "examples": ["A graphic presents an (implicit) left-to-right ordering of events, but users in the Middle East may follow the steps in reverse order because they expect right-to-left ordering."],
    "definition": "Sequences in graphics or text appear in a culture-specific order that does not make sense in other locales.",
    "name": "Sequence",
    "id": "sequence"
  }, {
    "examples": ["Translation specifications state that all localized versions of a service manual must preserve the same pagination as the English source, but no extra room has been left for languages that text more physical space than the source text, such as German (which may be 30% longer than the English source)."],
    "definition": "Insufficient room is left to allow for text expansion",
    "notes": ["This issue corresponds to //truncation-text-expansion// in the Design dimension. This issue is used to identify instances in the source where insufficient room has been left in a document or other item containing text while //truncation-text-expansion// is used for specific cases where text has extended beyond the allowed bounds."],
    "name": "Text expandability",
    "id": "text-expandability"
  }, {
    "examples": ["A user interface was manually aligned and spaced around English-language UI strings and so, when localized, shows strange spacing in the UI."],
    "definition": "A user interface has not been properly internationalized and so displays problems in localized versions.",
    "children": [{
      "examples": ["A user interface developed in Sweden has a minimalist aesthetic, but when localized into China, Chinese users expect to find information in the UI that is normally hidden under various options. As a result they may find it frustrating and difficult to use."],
      "definition": "Different cultures expect different levels of complexity and presentation of information in user interfaces. If the amount of information is too much or too little for a culture, users will perceive the user interface negatively",
      "notes": ["Solving this problem may involve extensive adaptation of localized versions and may not be solvable by simple internationalization steps."],
      "name": "Complexity",
      "id": "complexity"
    }, {
      "examples": ["A section for displaying errors in a UI is limited to 200 pixels in width and cannot expand to accommodate longer error messages in another language."],
      "definition": "Dialog boxes or other UI components are fixed in size and cannot adapt to different amounts of content in other languages.",
      "notes": ["Many UI frameworks automatically support dynamic width adjustment. Home-built UIs are particularly prone to this problem."],
      "name": "Fixed dialog/UI size",
      "id": "fixed-dialog-ui-size"
    }, {
      "examples": ["A UI has hard-coded positions in a form and when an address box is expanded to three lines to support addresses in certain locales it then overlaps other UI elements, making them unreadable."],
      "definition": "UI components are fixed in position and cannot move to adapt to different locales",
      "notes": ["Many UI frameworks automatically support dynamic adjustment of the position of UI elements. Home-built UIs are particularly prone to this problem."],
      "name": "Non-dynamic UI",
      "id": "non-dynamic-ui"
    }, {
      "examples": ["A web-form is left-aligned with multiple items per line, but when translated to Arabic the items appear in the wrong order because the UI cannot automatically adjust their layout."],
      "definition": "A UI cannot be reversed to support bi-directional languages",
      "notes": ["Many UI frameworks automatically support UI adjustment for bi-directional layouts. Home-built UIs are particularly prone to this problem."],
      "name": "Non-reversible UI",
      "id": "non-reversible-ui"
    }],
    "name": "User interface internationalization",
    "id": "ui-internationalization"
  }]
}, {
  "core": 1,
  "name": "Style",
  "definition": "The text has stylistic problems.",
  "id": "style",
  "examples": ["The translation of a light-hearted and humorous advertising campaign is in a serious and \u201cheavy\u201d style even though specifications said it should match the style of the source text."],
  "children": [{
    "examples": ["A text is written with many embedded clauses and an excessively wordy style. While the meaning can be understood, the text is very awkward and difficult to follow."],
    "definition": "A text is written with an awkward style",
    "name": "Awkward",
    "id": "awkward"
  }, {
    "examples": ["Company style states that passive sentences may not be used but the text uses passive sentences."],
    "definition": "The text violates company/organization-specific style guidelines.",
    "name": "Company style",
    "automatable": 1,
    "id": "company-style"
  }, {
    "examples": ["One part of a text is written in a light and \u201cterse\u201d style while other sections are written in a more wordy style."],
    "definition": "Style is inconsistent within a text",
    "notes": ["Inconsistent style often emerges when multiple translators have worked on a single text. Because Inconsistent style applies to larger portions of texts, it would generally be assessed with a holistic metric rather than an analytic one."],
    "name": "Inconsistent style",
    "id": "inconsistent-style"
  }, {
    "core": 1,
    "name": "Third-party style",
    "definition": "The text violates a third-party style guide",
    "examples": ["Specifications stated that English text was to be formatted according to the Chicago Manual of Style, but the text delivered followed the American Psychological Association style guide."],
    "automatable": 1,
    "id": "third-party-style"
  }, {
    "examples": ["The following text appears in an English translation of a German letter: \u201cWe thanked him with heart\u201d where \u201cwith heart\u201d is an understandable, but non-idiomatic rendering, better stated as \u201cheartily\u201d."],
    "definition": "The content is grammatical, but not idiomatic",
    "name": "Unidiomatic",
    "id": "unidiomatic"
  }]
}, {
  "core": 1,
  "name": "Terminology",
  "definition": "A term (domain-specific word) is translated with a term other than the one expected for the domain or otherwise specified.",
  "notes": ["All issues specifically related to use of domain- or organization-specific terminology are included in this issue and its children."],
  "children": [{
    "examples": ["A financial text is translated using \u201cdeduct\u201d instead of \u201cdebit\u201d. Although conceptually these could be synonyms in general language, \u201cdeduct\u201d violated domain conventions."],
    "definition": "A term is used contrary to general domain expectations",
    "notes": ["This issue is used for cases where no term-base is specified yet common domain conventions about terminology use are violated. If a termbase was specified and that term in question violates it, //termbase// should be used instead, if it is included in the metric (otherwise //terminology// would be used)."],
    "name": "Inconsistent with domain",
    "id": "domain-terminology"
  }, {
    "definition": "Terminology is used in an inconsistent manner within the text.",
    "name": "Inconsistent use of terminology",
    "notes": ["This issue and its children are used only to address inconsistent use of terminology. In cases where terminology is incorrect for the domain or termbase //termbase// or //domain-terminology// should be used instead. If further detail is needed about whether the source or target text is responsible for the inconsistent use terminology, use one of the daughter issues."],
    "id": "term-inconsistency",
    "examples": ["The text refers to a component as the \u201cbrake release lever\u201d, \u201cbrake disengagement lever\u201d, \u201cmanual brake release\u201d, and \u201cmanual disengagement release\u201d."],
    "children": [{
      "examples": ["A source text inconsistently uses \u201cdog\u201d, \u201cbuzzing bridge\u201d, and \u201cbuzzer\u201d for the component of a musical instrument."],
      "definition": "A single concept in the source text is expressed with multiple terms for the same concept.",
      "notes": ["Do not use this issue for cases where a single source term is translated in multiple ways in the target language content."],
      "name": "Multiple terms for concept in source",
      "id": "multiple-terms-for-concept"
    }, {
      "examples": ["A German source text uses one term for a component of a vehicle, but the target text uses \u201cbrake release lever\u201d, \u201cbrake disengagement lever\u201d, \u201cmanual brake release\u201d, and \u201cmanual disengagement release\u201d for this term in English."],
      "definition": "A single source term is translated in multiple inconsistent ways.",
      "notes": ["Applies to target text only since it refers to cases where one term has multiple translations. As with //term-inconsistency//, //termbase// or one of its children should be used instead if a termbase contains a specified term for a concept and the text does not use that particular term."],
      "name": "Multiple translations of same term",
      "id": "multiple-translations-of-term"
    }]
  }, {
    "definition": "A term is used inconsistently with a specified termbase",
    "name": "Inconsistent with termbase",
    "notes": ["For obvious reasons, this issue type applies only in cases where a term is specified in a termbase that was specified for use. If general domain conventions for terminology are violated instead, then //domain-terminology// should be used instead, if it is included in a metric."],
    "id": "termbase",
    "examples": ["A termbase specifies that the term "],
    "children": [{
      "definition": "The text violates company/organization-specific terminology guidelines as specified in a termbase.",
      "name": "Company terminology",
      "notes": ["Should be used when it is necessary to distinguish company-specific terminology issues from more general //termbase// issues."],
      "examples": ["Company-specific terminology guidelines specify that a product be called the \u201cAcme Turbo2000\u2122\u201d, but the text calls it the \u201cAcme Turbo\u201d or the \u201cTurbo200\u201d."],
      "automatable": 1,
      "id": "terminology-company"
    }, {
      "definition": "The text violates terminology guidelines as specified in a termbase from a third-party.",
      "name": "Third-party termbase",
      "notes": ["Should be used only when it is necessary to distinguish terminology issues related to third-party termbases from more general //termbase// issues."],
      "examples": ["Specifications for translation of a software application specify that UI terms be translated according to the public termbases provided by the developers of the platforms upon which it will be deployed, but certain terms are not translated consistently with these specifications."],
      "automatable": 1,
      "id": "terminology-third-party"
    }]
  }],
  "examples": ["A French text translates English ", "The English musicological term "],
  "id": "terminology"
}, {
  "core": 1,
  "name": "Verity",
  "definition": "The text makes statements that contradict the world of the text",
  "notes": ["Verity issues can apply to the source or target text and often emerge during translation when, for example, a factual statement is true in the source locale but not true in the target locale."],
  "children": [{
    "core": 1,
    "name": "Completeness",
    "definition": "The text is incomplete",
    "notes": ["//completeness// refers to instances in which needed content is missing in the source language. For cases where material present in the source language is not present in a translation, //omission// should be used instead."],
    "children": [{
      "examples": ["A list of items included in a retail package omits a crucial component."],
      "definition": "A list is missing necessary items",
      "name": "Incomplete List",
      "id": "incomplete-list"
    }, {
      "examples": ["A document describing a procedure to restart a diesel generator omits a crucial step that must be completed prior to performing additional steps."],
      "definition": "A procedure is missing necessary steps.",
      "notes": ["In cases where content is missing from the target text that is present in the source text, //omission// should be used instead"],
      "name": "Incomplete procedure",
      "id": "incomplete-procedure"
    }],
    "examples": ["A process description leaves out key steps needed to complete the process, resulting in an incomplete description of the process."],
    "id": "completeness"
  }, {
    "examples": ["A text describes a process to repair a device, but following the instructions leads to serious damage to the device and potential injury.", "A text assumes that the reader has knowledge of advanced particular physics, but the target audience does not generally have this knowledge."],
    "definition": "The content is not suitable for use by the end user, excluding problems related to suitability for the target locale.",
    "notes": ["If the issue relates to the applicability of the content to users in a particular locale, //locale-specific-content// should be used instead.", "End-user suitability generally applies to issues present in the source text, regardless of the target locale, but may apply in cases where there are distinct differences in audience or purpose between source and target."],
    "name": "End-user suitability",
    "id": "end-user-suitability"
  }, {
    "core": 1,
    "name": "Legal requirements",
    "definition": "A text does not meet legal requirements as set forth in the specifications.",
    "notes": ["Generally used in cases where the translation does not meet requirements. Cases in which the source text does not meet legal requirements are generally critical errors that will require rewriting the source text."],
    "examples": ["Specifications stated that FCC regulatory notices be replaced by CE notices rather than translated, but they were translated instead, rendering the text legally problematic for use in Europe."],
    "id": "legal-requirements"
  }, {
    "core": 1,
    "name": "Locale-specific content",
    "definition": "Content specific to the source locale does not apply to the intended target locale, audience, or purpose.",
    "notes": ["This issue type is distinguished from //locale-convention// in that this category applies to cases where text corresponds to the conventions of the target locale, but does not "],
    "examples": ["An advertising text translated for Sweden refers to special offers available only in Germany and therefore is misleading.", "A manual for a printer sold in Spain describes features that apply only to versions of the printer sold in Japan and thus may confuse purchasers."],
    "id": "locale-specific-content"
  }],
  "examples": ["The text states that a feature is present on a certain model of automobile when in fact it is not available."],
  "id": "verity"
}, {
  "examples": ["A quality process checks for errors generated from speech-to-text generated during conference interpretation. Because this error type is highly specific to the specific situation, it is not included in any predefined issue type elsewhere."],
  "definition": "Used for any issues not adequately covered by the MQM core or extensions. This category should be used only if it is impossible to assign an issue to an existing category with sufficient granularity.",
  "notes": ["This category should be used only for any issue type that cannot be mapped to one of the issue types listed above. If an issue type can be considered a more granular example of an existing type, it should be categorized as that type, possibly with a custom extension if the additional granularity is needed."],
  "name": "Other",
  "id": "other"
}];
