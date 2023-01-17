import React from 'react';
import '../css/resources.css'
function Resources() {
  return <div className='resources'>
    <div className='resourcestitle' >
      <div style={{width:'60%',margin:'auto',textAlign:'left'}} >
        <div style={{fontSize:30,color:'white',padding:10}} >Sanskrit NLP progress</div>
        <div style={{padding:10,color:'white'}} >Repository to track the progress in Sanskrit Natural Language Processing (NLP), including the datasets and the current state-of-the-art for the most common NLP tasks.</div>
      </div>
    </div>
    <div style={{paddingLeft:40}} >
    <div style={{width:'60%',margin:'auto',textAlign:'left',padding:10}} >
    <h1>Dependency parsing</h1>
    <p>Dependency parsing is the task of extracting a dependency parse of a sentence that represents its grammatical structure and defines the relationships between “head” words and words, which modify those heads.</p>
    <p>Example:</p>
    <p>Relations among the words are illustrated above the sentence with directed, labeled arcs from heads to dependents (+ indicates the dependent).</p>
    <h4>Sanskrit Tree Bank Corpus</h4>
    <p>The dataset for the dependency parsing is obtained from the department of Sanskrit studies, UoHyd.
       We use about 1,700 prose sentences from the Sanskrit Tree Bank Corpus, henceforth to be referred
        to as STBC (Kulkarni et al., 2010; Kulkarni, 2013). Further, we use 1,300 sentences (including 300 prose datapoints from Shishupalavadha) from 
        STBC as the test set and the remaining 1000 as a dev set.  
        The final results on the test set are reported using systems trained with combined gold train and dev set.</p>
    <table>
      <tr>
        <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:40}}>Model</th>
        <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:10}}>UAS</th>
        <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:10}}>LAS</th>
        <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:10}}>Paper/Source</th>
        <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:10}}>Code</th>
      </tr>
    <tr>
      <td>YAP</td>
      <td>75.31</td>
      <td>66.02</td>
      <td><a href="https://www.aclweb.org/anthology/Q19-1003">Joint Transition-Based Models for Morpho-Syntactic Parsing: Parsing Strategies for MRL's and a Case Study from Modern Hebrew</a></td>
      <td><a href="https://github.com/OnlpLab/yap">Official</a></td>
    </tr>
    <tr>
      <td>L2S</td>
      <td>81.97</td>
      <td>74.14</td>
      <td><a href="http://users.umiacs.umd.edu/~hal/docs/daume16compiler.pdf">A Credit Assignment Compiler for Joint Prediction</a></td>
      <td><a href="https://github.com/OnlpLab/yap">Official</a></td>
    </tr>
    <tr>
      <td>Tree-EBM-F</td>
      <td>82.65</td>
      <td>79.28</td>
      <td><a href="https://aclanthology.org/D18-1276/">Free as in Free Word Order: An Energy Based Model for Word Segmentation and Morphological Tagging in Sanskrit</a></td>
      <td><a href="https://zenodo.org/record/1035413#.W35s8hjhUUs">Official</a></td>
    </tr>
    <tr>
      <td>BiAFF</td>
      <td>85.88</td>
      <td>79.55</td>
      <td><a href="https://arxiv.org/abs/1611.01734">Deep Biaffine Attention for Neural Dependency Parsing</a></td>
      <td><a href="https://github.com/rotmanguy/DCST">Official</a></td>
    </tr>
    <tr>
      <td>Tree-EBM-F*</td>
      <td>85.88</td>
      <td>79.55</td>
      <td><a href="https://aclanthology.org/D18-1276/">Free as in Free Word Order: An Energy Based Model for Word Segmentation and Morphological Tagging in Sanskrit</a></td>
      <td><a href="https://zenodo.org/record/1035413#.W35s8hjhUUs">Official</a></td>
    </tr>
    <tr>
      <td>MG-EBM*</td>
      <td>85.88</td>
      <td>79.55</td>
      <td><a href="https://aclanthology.org/2020.emnlp-main.388/">Keep it Surprisingly Simple: A Simple First Order Graph Based Parsing Model for Joint Morphosyntactic Parsing in Sanskrit</a></td>
      <td><a href="">NA</a></td>
    </tr>
    <tr>
      <td>Ours</td>
      <td>88.67</td>
      <td>83.47</td>
      <td><a href="https://arxiv.org/pdf/2201.11374.pdf">Systematic Investigation of Strategies Tailored for Low-Resource Settings for
Sanskrit Dependency Parsing</a></td>
      <td><a href="https://github.com/Jivnesh/sandp">Official</a></td>
    </tr>
  
    </table>  
      
    <h4>Universal Dependencies: Vedic Sanskrit Treebank</h4>
    <p> We also evaluate on the Vedic Sanskrit Treebank (Hellwig et al., 2020, VST) consisting of 1,500 , 1,024 and 1,473 sentences (poetry-prose mixed) as train, dev and test data, respectively. For both data, the final results on the test set are reported using systems trained with combined gold train and dev set.</p>
    <table>
    <tr>
        <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:40}} >Model</th>
        <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:10}}>UAS</th>
        <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:10}}>LAS</th>
        <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:10}}>Paper/Source</th>
        <th style={{backgroundColor:'rgb(77, 72, 72)',color:'white',padding:10}}>Code</th>
      </tr>
      <tr>
      <td>YAP</td>
      <td>70.37</td>
      <td>56.09</td>
      <td><a href="https://www.aclweb.org/anthology/Q19-1003">Joint Transition-Based Models for Morpho-Syntactic Parsing: Parsing Strategies for MRL's and a Case Study from Modern Hebrew</a></td>
      <td><a href="https://github.com/OnlpLab/yap">Official</a></td>
    </tr>
    <tr>
      <td>L2S</td>
      <td>72.44</td>
      <td>62.76</td>
      <td><a href="http://users.umiacs.umd.edu/~hal/docs/daume16compiler.pdf">A Credit Assignment Compiler for Joint Prediction</a></td>
      <td><a href="https://github.com/OnlpLab/yap">Official</a></td>
    </tr>
    <tr>
      <td>BiAFF</td>
      <td>77.23</td>
      <td>67.68</td>
      <td><a href="https://arxiv.org/abs/1611.01734">Deep Biaffine Attention for Neural Dependency Parsing</a></td>
      <td><a href="https://github.com/rotmanguy/DCST">Official</a></td>
    </tr>
    <tr>
      <td>Ours</td>
      <td>79.71</td>
      <td>69.89</td>
      <td><a href="https://arxiv.org/pdf/2201.11374.pdf">Systematic Investigation of Strategies Tailored for Low-Resource Settings for
Sanskrit Dependency Parsing</a></td>
      <td><a href="https://github.com/Jivnesh/sandp">Official</a></td>
    </tr>
</table>


<p><a href="/">Go back to the README</a></p>
    </div>
    
    </div>
  </div>;
}

export default Resources;
