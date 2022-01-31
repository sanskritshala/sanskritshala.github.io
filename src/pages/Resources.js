import React from 'react';
import '../css/resources.css'
function Resources() {
  return <div className='resources'>
    <div className='resourcestitle' >
      <div style={{width:'60%',margin:'auto',textAlign:'left'}} >
        <div style={{fontSize:30,color:'white',padding:10}} >NLP-progress</div>
        <div style={{padding:10,color:'white'}} >Repository to track the progress in Natural Language Processing (NLP), including the datasets and the current state-of-the-art for the most common NLP tasks.</div>
      </div>
    </div>
    <div style={{paddingLeft:40}} >
    <div style={{width:'60%',margin:'auto',textAlign:'left',padding:10}} >
    <h1>Dependency parsing</h1>
    <p>Dependency parsing is the task of extracting a dependency parse of a sentence that represents its grammatical structure and defines the relationships between “head” words and words, which modify those heads.</p>
    <p>Example:</p>
    <p>Relations among the words are illustrated above the sentence with directed, labeled arcs from heads to dependents (+ indicates the dependent).</p>
    <h2>Penn Treebank</h2>
    <p>Models are evaluated on the Stanford Dependency conversion (v3.3.0) of the Penn Treebank with predicted POS-tags. Punctuation symbols are excluded from the evaluation. Evaluation metrics are unlabeled attachment score (UAS) and labeled attachment score (LAS). UAS does not consider the semantic relation (e.g. Subj) used to label the attachment between the head and the child, while LAS requires a semantic correct label for each attachment.Here, we also mention the predicted POS tagging accuracy.</p>
    <table>
      <tr>
        <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:10}} >Model</th>
        <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:10}}>POS</th>
        <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:10}}>UAS</th>
        <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:10}}>LAS</th>
        <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:10}}>Paper/Source</th>
        <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:10}}>Code</th>
      </tr>
      <tr>
      <td>Label Attention Layer + HPSG + XLNet (Mrini et al., 2019)</td>
      <td>97.3</td>
      <td>97.42</td>
      <td>96.26</td>
      <td><a href="https://khalilmrini.github.io/Label_Attention_Layer.pdf">Rethinking Self-Attention: Towards Interpretability for Neural Parsing</a></td>
      <td><a href="https://github.com/KhalilMrini/LAL-Parser">Official</a></td>
    </tr>
    <tr>
      <td>ACE + fine-tune (Wang et al., 2020)</td>
      <td>-</td>
      <td>97.20</td>
      <td>95.80</td>
      <td><a href="https://arxiv.org/pdf/2010.05006.pdf">Automated Concatenation of Embeddings for Structured Prediction</a></td>
      <td><a href="https://github.com/Alibaba-NLP/ACE">Official</a></td>
    </tr>
    <tr>
      <td>HPSG Parser (Joint) + XLNet (Zhou et al, 2020)</td>
      <td>97.3</td>
      <td>97.20</td>
      <td>95.72</td>
      <td><a href="https://www.aclweb.org/anthology/2020.findings-emnlp.398.pdf">Head-Driven Phrase Structure Grammar Parsing on Penn Treebank</a></td>
      <td><a href="https://github.com/DoodleJZ/HPSG-Neural-Parser">Official</a></td>
    </tr>
    <tr>
      <td>Second-Order MFVI + BERT (Wang et al., 2020)</td>
      <td>-</td>
      <td>96.91</td>
      <td>95.34</td>
      <td><a href="https://arxiv.org/pdf/2010.05003.pdf">Second-Order Neural Dependency Parsing with Message Passing and End-to-End Training</a></td>
      <td><a href="https://github.com/wangxinyu0922/Second_Order_Parsing">Official</a></td>
    </tr>
    <tr>
      <td>CVT + Multi-Task (Clark et al., 2018)</td>
      <td>97.74</td>
      <td>96.61</td>
      <td>95.02</td>
      <td><a href="https://arxiv.org/abs/1809.08370">Semi-Supervised Sequence Modeling with Cross-View Training</a></td>
      <td><a href="https://github.com/tensorflow/models/tree/master/research/cvt_text">Official</a></td>
    </tr>
    <tr>
      <td>CRF Parser (Zhang et al., 2020)</td>
      <td>-</td>
      <td>96.14</td>
      <td>94.49</td>
      <td><a href="https://www.aclweb.org/anthology/2020.acl-main.302">Efficient Second-Order TreeCRF for Neural Dependency Parsing</a></td>
      <td><a href="https://github.com/yzhangcs/crfpar">Official</a></td>
    </tr>
    <tr>
      <td>Second-Order MFVI (Wang et al., 2020)</td>
      <td>-</td>
      <td>96.12</td>
      <td>94.47</td>
      <td><a href="https://arxiv.org/pdf/2010.05003.pdf">Second-Order Neural Dependency Parsing with Message Passing and End-to-End Training</a></td>
      <td><a href="https://github.com/wangxinyu0922/Second_Order_Parsing">Official</a></td>
    </tr>
    <tr>
      <td>Left-to-Right Pointer Network (Fernández-González and Gómez-Rodríguez, 2019)</td>
      <td>97.3</td>
      <td>96.04</td>
      <td>94.43</td>
      <td><a href="https://www.aclweb.org/anthology/N19-1076">Left-to-Right Dependency Parsing with Pointer Networks</a></td>
      <td><a href="https://github.com/danifg/Left2Right-Pointer-Parser">Official</a></td>
    </tr>
    <tr>
      <td>Graph-based parser with GNNs (Ji et al., 2019)</td>
      <td>97.3</td>
      <td>95.97</td>
      <td>94.31</td>
      <td><a href="https://www.aclweb.org/anthology/P19-1237">Graph-based Dependency Parsing with Graph Neural Networks</a></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>Deep Biaffine (Dozat and Manning, 2017)</td>
      <td>97.3</td>
      <td>95.74</td>
      <td>94.08</td>
      <td><a href="https://arxiv.org/abs/1611.01734">Deep Biaffine Attention for Neural Dependency Parsing</a></td>
      <td><a href="https://github.com/tdozat/Parser-v1">Official</a></td>
    </tr>
    <tr>
      <td>jPTDP (Nguyen and Verspoor, 2018)</td>
      <td>97.97</td>
      <td>94.51</td>
      <td>92.87</td>
      <td><a href="https://arxiv.org/abs/1807.03955">An improved neural network model for joint POS tagging and dependency parsing</a></td>
      <td><a href="https://github.com/datquocnguyen/jPTDP">Official</a></td>
    </tr>
    <tr>
      <td>Andor et al. (2016)</td>
      <td>97.44</td>
      <td>94.61</td>
      <td>92.79</td>
      <td><a href="https://www.aclweb.org/anthology/P16-1231">Globally Normalized Transition-Based Neural Networks</a></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>Distilled neural FOG (Kuncoro et al., 2016)</td>
      <td>97.3</td>
      <td>94.26</td>
      <td>92.06</td>
      <td><a href="https://arxiv.org/abs/1609.07561">Distilling an Ensemble of Greedy Dependency Parsers into One MST Parser</a></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>Distilled transition-based parser (Liu et al., 2018)</td>
      <td>97.3</td>
      <td>94.05</td>
      <td>92.14</td>
      <td><a href="http://aclweb.org/anthology/P18-1129">Distilling Knowledge for Search-based Structured Prediction</a></td>
      <td><a href="https://github.com/Oneplus/twpipe">Official</a></td>
    </tr>
    <tr>
      <td>Weiss et al. (2015)</td>
      <td>97.44</td>
      <td>93.99</td>
      <td>92.05</td>
      <td><a href="http://anthology.aclweb.org/P/P15/P15-1032.pdf">Structured Training for Neural Network Transition-Based Parsing</a></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>BIST transition-based parser (Kiperwasser and Goldberg, 2016)</td>
      <td>97.3</td>
      <td>93.9</td>
      <td>91.9</td>
      <td><a href="https://aclweb.org/anthology/Q16-1023">Simple and Accurate Dependency Parsing Using Bidirectional LSTM Feature Representations</a></td>
      <td><a href="https://github.com/elikip/bist-parser/tree/master/barchybrid/src">Official</a></td>
    </tr>
    <tr>
      <td>Arc-hybrid (Ballesteros et al., 2016)</td>
      <td>97.3</td>
      <td>93.56</td>
      <td>91.42</td>
      <td><a href="https://arxiv.org/abs/1603.03793">Training with Exploration Improves a Greedy Stack-LSTM Parser</a></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>BIST graph-based parser (Kiperwasser and Goldberg, 2016)</td>
      <td>97.3</td>
      <td>93.1</td>
      <td>91.0</td>
      <td><a href="https://aclweb.org/anthology/Q16-1023">Simple and Accurate Dependency Parsing Using Bidirectional LSTM Feature Representations</a></td>
      <td><a href="https://github.com/elikip/bist-parser/tree/master/bmstparser/src">Official</a></td>
    </tr>
    </table>
    
    <h2>Universal Dependencies</h2>
    <p>The focus of the task is learning syntactic dependency parsers that can work in a real-world setting, starting from raw text, and that can work over many typologically different languages, even low-resource languages for which there is little or no training data, by exploiting a common syntactic annotation standard. This task has been made possible by the Universal Dependencies initiative (UD, http://universaldependencies.org), which has developed treebanks for 60+ languages with cross-linguistically consistent annotation and recoverability of the original raw texts.</p>
    <p>Participating systems will have to find labeled syntactic dependencies between words, i.e. a syntactic head for each word, and a label classifying the type of the dependency relation. In addition to syntactic dependencies, prediction of morphology and lemmatization will be evaluated. There will be multiple test sets in various languages but all data sets will adhere to the common annotation style of UD. Participants will be asked to parse raw text where no gold-standard pre-processing (tokenization, lemmas, morphology) is available. Data preprocessed by a baseline system (UDPipe, https://ufal.mff.cuni.cz/udpipe) was provided so that the participants could focus on improving just one part of the processing pipeline. The organizers believed that this made the task reasonably accessible for everyone.</p>
    <table>
    <tr>
        <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:10}} >Model</th>
        <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:10}}>LAS</th>
        <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:10}}>MLAS</th>
        <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:10}}>BLEX</th>
        <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:10}}>Paper/Source</th>
        <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:10}}>Code</th>
      </tr>
      <tr>
      <td>Stanford (Qi et al.)</td>
      <td>74.16</td>
      <td>62.08</td>
      <td>65.28</td>
      <td><a href="https://arxiv.org/pdf/1901.10457.pdf">Universal Dependency Parsing from Scratch</a></td>
      <td><a href="https://github.com/stanfordnlp/stanfordnlp">Official</a></td>
    </tr>
    <tr>
      <td>UDPipe Future (Straka)</td>
      <td>73.11</td>
      <td>61.25</td>
      <td>64.49</td>
      <td><a href="https://www.aclweb.org/anthology/K18-2020">UDPipe 2.0 Prototype at CoNLL 2018 UD Shared Task</a></td>
      <td><a href="https://github.com/CoNLL-UD-2018/UDPipe-Future">Official</a></td>
    </tr>
    <tr>
      <td>HIT-SCIR (Che et al.)</td>
      <td>75.84</td>
      <td>59.78</td>
      <td>65.33</td>
      <td><a href="https://arxiv.org/abs/1807.03121">Towards Better UD Parsing: Deep Contextualized Word Embeddings, Ensemble, and Treebank Concatenation</a></td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td>TurkuNLP (Kanerva et al.)</td>
      <td>73.28</td>
      <td>60.99</td>
      <td>66.09</td>
      <td><a href="https://universaldependencies.org/conll18/proceedings/pdf/K18-2013.pdf">Turku Neural Parser Pipeline: An End-to-End System for the CoNLL 2018 Shared Task</a></td>
      <td><a href="https://github.com/TurkuNLP/Turku-neural-parser-pipeline">Official</a></td>
    </tr>
</table>
<p>The following results are just for references:</p>
<table>
<tr>
        <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:10}} >Model</th>
        <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:10}}>UAS</th>
        <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:10}}>LAS</th>
        <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:10}}>Note</th>
        <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:10}}>Paper/Source</th>
      </tr>
      <tr>
      <td>Stack-only RNNG (Kuncoro et al., 2017)</td>
      <td>95.8</td>
      <td>94.6</td>
      <td>Constituent parser</td>
      <td><a href="https://arxiv.org/abs/1611.05774">What Do Recurrent Neural Network Grammars Learn About Syntax?</a></td>
    </tr>
    <tr>
      <td>Deep Biaffine (Dozat and Manning, 2017)</td>
      <td>95.75</td>
      <td>94.22</td>
      <td>Stanford conversion <strong>v3.5.0</strong></td>
      <td><a href="https://arxiv.org/abs/1611.01734">Deep Biaffine Attention for Neural Dependency Parsing</a></td>
    </tr>
    <tr>
      <td>Semi-supervised LSTM-LM (Choe and Charniak, 2016) (Constituent parser)</td>
      <td>95.9</td>
      <td>94.1</td>
      <td>Constituent parser</td>
      <td><a href="http://www.aclweb.org/anthology/D16-1257">Parsing as Language Modeling</a></td>
    </tr>
</table>
<h1 id="cross-lingual-zero-shot-dependency-parsing">Cross-lingual zero-shot dependency parsing</h1>
<p>Cross-lingual zero-shot parsing is the task of inferring the dependency parse of sentences from one language without any labeled training trees for that language.</p>
<h2 id="universal-dependency-treebank">Universal Dependency Treebank</h2>
<p>Models are evaluated against the <a href="https://github.com/ryanmcd/uni-dep-tb">Universal Dependency Treebank v2.0</a>. For each of the 6 target languages, models can use the trees of all other languages and English and are evaluated by the UAS and LAS on the target. The final score is the average score across the 6 target languages. The most common evaluation setup is to use
gold POS-tags.</p>
<table>
  <thead>
    <tr>
      <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:10}} >Model</th>
      <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:10}} >UAS</th>
      <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:10}} >LAS</th>
      <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:10}} >Paper / Source</th>
      <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:10}} >Code</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Cross-Lingual ELMo (Schuster et al., 2019)</td>
      <td>84.2</td>
      <td>77.3</td>
      <td><a href="https://arxiv.org/abs/1902.09492">Cross-Lingual Alignment of Contextual Word Embeddings, with Applications to Zero-shot Dependency Parsing</a></td>
      <td><a href="https://github.com/TalSchuster/CrossLingualELMo">Official</a></td>
    </tr>
    <tr>
      <td>MALOPA (Ammar et al., 2016)</td>
      <td>&nbsp;</td>
      <td>70.5</td>
      <td><a href="https://www.transacl.org/ojs/index.php/tacl/article/view/892">Many Languages, One Parser</a></td>
      <td><a href="https://github.com/clab/language-universal-parser">Official</a></td>
    </tr>
    <tr>
      <td>Guo et al. (2016)</td>
      <td>76.7</td>
      <td>69.9</td>
      <td><a href="https://dl.acm.org/citation.cfm?id=3016100.3016284">A representation learning framework for multi-source transfer parsing</a></td>
      <td>&nbsp;</td>
    </tr>
  </tbody>
</table>
<h1 id="unsupervised-dependency-parsing">Unsupervised dependency parsing</h1>
<p>Unsupervised dependency parsing is the task of inferring the dependency parse of sentences without any labeled training data.</p>
<h2 id="penn-treebank-1">Penn Treebank</h2>
<p>As with supervised parsing, models are evaluated against the Penn Treebank. The most common evaluation setup is to use
gold POS-tags as input and to evaluate systems using the unlabeled attachment score (also called ‘directed dependency
accuracy’).</p>
<table>
  <thead>
    <tr>
      <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:10}} >Model</th>
      <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:10}} >UAS</th>
      <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:10}} >Paper / Source</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Iterative reranking (Le &amp; Zuidema, 2015)</td>
      <td>66.2</td>
      <td><a href="http://www.aclweb.org/anthology/N15-1067">Unsupervised Dependency Parsing - Let’s Use Supervised Parsers</a></td>
    </tr>
    <tr>
      <td>Combined System (Spitkovsky et al., 2013)</td>
      <td>64.4</td>
      <td><a href="http://www.aclweb.org/anthology/D13-1204">Breaking Out of Local Optima with Count Transforms and Model Recombination - A Study in Grammar Induction</a></td>
    </tr>
    <tr>
      <td>Tree Substitution Grammar DMV (Blunsom &amp; Cohn, 2010)</td>
      <td>55.7</td>
      <td><a href="http://www.aclweb.org/anthology/D10-1117">Unsupervised Induction of Tree Substitution Grammars for Dependency Parsing</a></td>
    </tr>
    <tr>
      <td>Shared Logistic Normal DMV (Cohen &amp; Smith, 2009)</td>
      <td>41.4</td>
      <td><a href="http://www.aclweb.org/anthology/N09-1009">Shared Logistic Normal Distributions for Soft Parameter Tying in Unsupervised Grammar Induction</a></td>
    </tr>
    <tr>
      <td>DMV (Klein &amp; Manning, 2004)</td>
      <td>35.9</td>
      <td><a href="http://www.aclweb.org/anthology/P04-1061">Corpus-Based Induction of Syntactic Structure - Models of Dependency and Constituency</a></td>
    </tr>
  </tbody>
</table>
<p><a href="/">Go back to the README</a></p>
    </div>
    
    </div>
  </div>;
}

export default Resources;
