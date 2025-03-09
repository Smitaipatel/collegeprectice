import re
import stat
from collections import Counter
from nltk.tokenize import word_tokenize, sent_tokenize
from nltk.corpus import stopwords
from nltk import pos_tag

def analyze_text(text):
    result = {}
    
    # Sentence and word count
    sentences = sent_tokenize(text)
    words = word_tokenize(text)
    result["sentence_count"] = len(sentences)
    result["word_count"] = len(words)
    
    # Readability score
    result["flesch_reading_ease"] = textstat.flesch_reading_ease(text)
    
    # Tone analysis (basic keyword-based approach)
    formal_words = {"therefore", "hence", "thus", "moreover", "furthermore"}
    casual_words = {"gonna", "wanna", "cool", "yeah", "dude"}
    
    formal_count = sum(1 for word in words if word.lower() in formal_words)
    casual_count = sum(1 for word in words if word.lower() in casual_words)
    
    if formal_count > casual_count:
        result["tone"] = "Formal"
    elif casual_count > formal_count:
        result["tone"] = "Casual"
    else:
        result["tone"] = "Neutral"
    
    # Common words analysis
    words_filtered = [word.lower() for word in words if word.isalpha() and word.lower() not in stopwords.words("english")]
    common_words = Counter(words_filtered).most_common(5)
    result["common_words"] = common_words
    
    # Sentence length variation
    sentence_lengths = [len(word_tokenize(sent)) for sent in sentences]
    result["avg_sentence_length"] = sum(sentence_lengths) / len(sentence_lengths)
    
    # Passive vs Active Voice (basic heuristic)
    passive_voice_count = len(re.findall(r"\b(is|was|were|be|been)\s\w+ed\b", text))
    result["passive_voice_sentences"] = passive_voice_count
    
    return result

# Example usage:
text_sample = "This is an example sentence. It was written to test the analyzer. The tool is going to analyze it."
analysis = analyze_text(text_sample)
print(analysis)
