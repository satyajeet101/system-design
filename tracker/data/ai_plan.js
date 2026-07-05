/**
 * ai_plan.js — AI prep tracker content.
 *
 * This plan is designed for software engineers preparing for AI-related interview topics
 * with a weekly commitment of about 2 hours.
 */

const AI_PLAN = [
  {
    title: "Month 1 — AI fundamentals for engineers",
    goal:  "Build a strong foundation in core AI concepts, metrics, and model behavior so you can speak clearly in engineering interviews.",
    weeks: [
      {
        label: "Week 1",
        title: "ML fundamentals + terminology",
        badges: ["sd"],
        tasks: [
          {
            text: "[AI] Learn supervised, unsupervised, and reinforcement learning at a high level",
            links: [
              { t: "ref", label: "Google ML Glossary", url: "https://developers.google.com/machine-learning/glossary" }
            ]
          },
          {
            text: "[AI] Study training vs validation vs test splits and why data leakage is deadly",
            links: [
              { t: "ref", label: "Data leakage explained", url: "https://machinelearningmastery.com/data-leakage-machine-learning/" }
            ]
          },
          {
            text: "[AI] Review common metrics: accuracy, precision, recall, F1, ROC/AUC",
            links: [
              { t: "ref", label: "Evaluation metrics guide", url: "https://developers.google.com/machine-learning/crash-course/classification/metrics" }
            ]
          },
          {
            text: "[AI] Write one-sentence definitions for 10 ML interview terms",
            links: [
              { t: "ref", label: "ML interview glossary", url: "https://www.datasciencecentral.com/profiles/blogs/30-top-machine-learning-interview-questions" }
            ]
          }
        ],
        resources: [
          { label: "Google ML Crash Course", url: "https://developers.google.com/machine-learning/crash-course" },
          { label: "ML Glossary", url: "https://developers.google.com/machine-learning/glossary" }
        ]
      },
      {
        label: "Week 2",
        title: "Data prep, features, and bias",
        badges: ["sd"],
        tasks: [
          {
            text: "[AI] Learn feature engineering basics: scaling, encoding, missing values",
            links: [
              { t: "ref", label: "Feature engineering guide", url: "https://machinelearningmastery.com/feature-engineering-for-machine-learning/" }
            ]
          },
          {
            text: "[AI] Understand bias, variance, overfitting, and regularization",
            links: [
              { t: "ref", label: "Bias vs variance", url: "https://scikit-learn.org/stable/modules/learning_curve.html" }
            ]
          },
          {
            text: "[AI] Read one short case study on dataset bias and mitigation",
            links: [
              { t: "ref", label: "Bias in AI case study", url: "https://hbr.org/2019/07/ai-has-a-bias-problem-and-it-starts-with-humans" }
            ]
          },
          {
            text: "[AI] Practice a 20-minute pandas data cleanup example",
            links: [
              { t: "ref", label: "Pandas tutorial", url: "https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html" }
            ]
          }
        ],
        resources: [
          { label: "Machine Learning Mastery", url: "https://machinelearningmastery.com" },
          { label: "Pandas docs", url: "https://pandas.pydata.org/" }
        ]
      },
      {
        label: "Week 3",
        title: "Linear models and decision trees",
        badges: ["sd"],
        tasks: [
          {
            text: "[AI] Review linear regression, logistic regression, and decision tree intuition",
            links: [
              { t: "ref", label: "Linear vs tree models", url: "https://developers.google.com/machine-learning/crash-course/first-ml-model/linear-regression" }
            ]
          },
          {
            text: "[AI] Compare when to choose linear models, trees, or ensemble models",
            links: [
              { t: "ref", label: "Model selection guide", url: "https://machinelearningmastery.com/choose-best-machine-learning-algorithm/" }
            ]
          },
          {
            text: "[AI] Study model interpretability and feature importance",
            links: [
              { t: "ref", label: "Feature importance", url: "https://christophm.github.io/interpretable-ml-book/" }
            ]
          },
          {
            text: "[AI] Practice explaining the difference between regression and classification",
            links: [
              { t: "ref", label: "Regression vs classification", url: "https://www.analyticsvidhya.com/blog/2021/06/supervised-learning-regression-vs-classification/" }
            ]
          }
        ],
        resources: [
          { label: "Interpretable ML book", url: "https://christophm.github.io/interpretable-ml-book/" },
          { label: "Google Crash Course", url: "https://developers.google.com/machine-learning/crash-course" }
        ]
      },
      {
        label: "Week 4",
        title: "Model training and error analysis",
        badges: ["sd"],
        tasks: [
          {
            text: "[AI] Learn training lifecycle: hyperparameters, cross-validation, early stopping",
            links: [
              { t: "ref", label: "Model training overview", url: "https://developers.google.com/machine-learning/guides/rules-of-ml" }
            ]
          },
          {
            text: "[AI] Review confusion matrix and error analysis for classification",
            links: [
              { t: "ref", label: "Confusion matrix guide", url: "https://en.wikipedia.org/wiki/Confusion_matrix" }
            ]
          },
          {
            text: "[AI] Read a short note on model validation and holdout sets",
            links: [
              { t: "ref", label: "Validation sets explained", url: "https://towardsdatascience.com/train-validation-and-test-sets-72cb40cba9e7" }
            ]
          },
          {
            text: "[AI] Summarize the five most important interview talking points for model quality",
            links: [
              { t: "ref", label: "ML interview prep tips", url: "https://www.springboard.com/blog/data-science/machine-learning-interview-questions/" }
            ]
          }
        ],
        resources: [
          { label: "Rules of ML", url: "https://developers.google.com/machine-learning/guides/rules-of-ml" },
          { label: "Towards Data Science", url: "https://towardsdatascience.com/" }
        ]
      }
    ]
  },
  {
    title: "Month 2 — Neural networks, transformers, embeddings",
    goal:  "Understand deep learning building blocks, Transformer architecture, and embedding-based search in a compact weekly cadence.",
    weeks: [
      {
        label: "Week 5",
        title: "Neural network basics",
        badges: ["sd"],
        tasks: [
          {
            text: "[AI] Learn how a neural network is structured: layers, weights, activations",
            links: [
              { t: "ref", label: "Neural network introduction", url: "https://www.deeplearning.ai/ai-notes/what-is-a-neural-network/" }
            ]
          },
          {
            text: "[AI] Review common activation functions: ReLU, sigmoid, softmax",
            links: [
              { t: "ref", label: "Activation functions", url: "https://machinelearningmastery.com/activation-functions-for-deep-learning/" }
            ]
          },
          {
            text: "[AI] Understand forward pass vs backward pass at a conceptual level",
            links: [
              { t: "ref", label: "Backpropagation explained", url: "https://www.analyticsvidhya.com/blog/2021/03/backpropagation-intuition-machine-learning/" }
            ]
          },
          {
            text: "[AI] Practice describing a neural network in one paragraph for interview clarity",
            links: [
              { t: "ref", label: "DL interview guide", url: "https://neptune.ai/blog/neural-network-interview-questions" }
            ]
          }
        ],
        resources: [
          { label: "DeepLearning.AI notes", url: "https://www.deeplearning.ai/" },
          { label: "MachineLearningMastery", url: "https://machinelearningmastery.com" }
        ]
      },
      {
        label: "Week 6",
        title: "Training, optimization, and regularization",
        badges: ["sd"],
        tasks: [
          {
            text: "[AI] Learn gradient descent, learning rate, and optimizer tradeoffs",
            links: [
              { t: "ref", label: "Gradient descent guide", url: "https://www.analyticsvidhya.com/blog/2020/09/gradient-descent-explained/" }
            ]
          },
          {
            text: "[AI] Review regularization techniques: L1, L2, dropout",
            links: [
              { t: "ref", label: "Regularization in ML", url: "https://towardsdatascience.com/regularization-in-machine-learning-76441ddcf99a" }
            ]
          },
          {
            text: "[AI] Understand vanishing/exploding gradients and simple mitigation strategies",
            links: [
              { t: "ref", label: "Vanishing gradients", url: "https://ml-cheatsheet.readthedocs.io/en/latest/gradient_descent.html" }
            ]
          },
          {
            text: "[AI] Practice explaining why overfitting happens in one or two sentences",
            links: [
              { t: "ref", label: "Overfitting explained", url: "https://www.ibm.com/cloud/learn/overfitting" }
            ]
          }
        ],
        resources: [
          { label: "Analytics Vidhya", url: "https://www.analyticsvidhya.com" },
          { label: "ML Cheat Sheet", url: "https://ml-cheatsheet.readthedocs.io" }
        ]
      },
      {
        label: "Week 7",
        title: "Transformers and attention",
        badges: ["sd"],
        tasks: [
          {
            text: "[AI] Study the Transformer architecture and why attention matters",
            links: [
              { t: "ref", label: "Attention explained", url: "https://jalammar.github.io/illustrated-transformer/" }
            ]
          },
          {
            text: "[AI] Compare encoder-only, decoder-only, and encoder-decoder models",
            links: [
              { t: "ref", label: "Transformer variants", url: "https://towardsdatascience.com/transformer-architectures-encoder-decoder-3d298703ed24" }
            ]
          },
          {
            text: "[AI] Read a short note on why LLMs are useful for software engineering features",
            links: [
              { t: "ref", label: "LLM use cases", url: "https://openai.com/research/default-language-models" }
            ]
          },
          {
            text: "[AI] Practice explaining attention in plain language",
            links: [
              { t: "ref", label: "Attention intuition", url: "https://towardsdatascience.com/attention-mechanism-in-transformers-563eb59d7470" }
            ]
          }
        ],
        resources: [
          { label: "The Illustrated Transformer", url: "https://jalammar.github.io/illustrated-transformer/" },
          { label: "OpenAI research", url: "https://openai.com/research" }
        ]
      },
      {
        label: "Week 8",
        title: "Embeddings and vector search",
        badges: ["sd"],
        tasks: [
          {
            text: "[AI] Learn what embeddings are and how similarity search works",
            links: [
              { t: "ref", label: "Embedding basics", url: "https://towardsdatascience.com/word-embeddings-and-vector-spaces-in-nlp-447d7f46bf4c" }
            ]
          },
          {
            text: "[AI] Review applications: search, recommendation, document retrieval",
            links: [
              { t: "ref", label: "Vector search guide", url: "https://www.pinecone.io/learn/vector-database/" }
            ]
          },
          {
            text: "[AI] Study recall vs precision in RAG retrieval pipelines",
            links: [
              { t: "ref", label: "RAG explained", url: "https://www.zdnet.com/article/what-is-rag-retrieval-augmented-generation-explained/" }
            ]
          },
          {
            text: "[AI] Practice describing one AI retrieval architecture in plain English",
            links: [
              { t: "ref", label: "RAG architecture", url: "https://www.pinecone.io/learn/retrieval-augmented-generation/" }
            ]
          }
        ],
        resources: [
          { label: "Pinecone Learn", url: "https://www.pinecone.io/learn/" },
          { label: "ZDNet RAG", url: "https://www.zdnet.com/article/what-is-rag-retrieval-augmented-generation-explained/" }
        ]
      }
    ]
  },
  {
    title: "Month 3 — Prompt engineering and AI systems",
    goal:  "Focus on practical prompt design, safe AI behavior, and the systems that support LLM-driven features.",
    weeks: [
      {
        label: "Week 9",
        title: "Prompt design fundamentals",
        badges: ["sd"],
        tasks: [
          {
            text: "[AI] Learn prompt categories: instruction, few-shot, chain-of-thought",
            links: [
              { t: "ref", label: "Prompt engineering basics", url: "https://www.promptingguide.ai/" }
            ]
          },
          {
            text: "[AI] Study examples of good vs bad prompts for code and writing tasks",
            links: [
              { t: "ref", label: "Prompt examples", url: "https://learnprompting.org/" }
            ]
          },
          {
            text: "[AI] Practice writing one prompt for a code summarization task",
            links: [
              { t: "ref", label: "Code prompt guide", url: "https://www.promptingguide.ai/" }
            ]
          },
          {
            text: "[AI] Review how prompt structure affects model output consistency",
            links: [
              { t: "ref", label: "Prompt structure", url: "https://learnprompting.org/docs" }
            ]
          }
        ],
        resources: [
          { label: "Prompting Guide", url: "https://www.promptingguide.ai/" },
          { label: "Learn Prompting", url: "https://learnprompting.org/" }
        ]
      },
      {
        label: "Week 10",
        title: "LLM safety, bias, and evaluation",
        badges: ["sd"],
        tasks: [
          {
            text: "[AI] Study common LLM failure modes: hallucinations, bias, prompt injection",
            links: [
              { t: "ref", label: "LLM risks", url: "https://arxiv.org/abs/2202.07250" }
            ]
          },
          {
            text: "[AI] Learn how to evaluate generated output for correctness and relevance",
            links: [
              { t: "ref", label: "AI evaluation metrics", url: "https://www.microsoft.com/en-us/research/blog/evaluating-generative-ai/" }
            ]
          },
          {
            text: "[AI] Read a short guide on responsible AI and design guardrails",
            links: [
              { t: "ref", label: "Responsible AI", url: "https://www.microsoft.com/en-us/ai/responsible-ai" }
            ]
          },
          {
            text: "[AI] Practice explaining how you would detect a bad model prediction in production",
            links: [
              { t: "ref", label: "AI monitoring intro", url: "https://www.oreilly.com/library/view/ai-systems/9781492098422/" }
            ]
          }
        ],
        resources: [
          { label: "Microsoft Responsible AI", url: "https://www.microsoft.com/en-us/ai/responsible-ai" },
          { label: "AI evaluation blog", url: "https://www.microsoft.com/en-us/research/blog/evaluating-generative-ai/" }
        ]
      },
      {
        label: "Week 11",
        title: "Retrieval-augmented generation",
        badges: ["sd"],
        tasks: [
          {
            text: "[AI] Learn the RAG architecture: query, retrieve, augment, generate",
            links: [
              { t: "ref", label: "RAG overview", url: "https://www.pinecone.io/learn/retrieval-augmented-generation/" }
            ]
          },
          {
            text: "[AI] Study vector databases, embeddings, and similarity search",
            links: [
              { t: "ref", label: "Vector database overview", url: "https://www.pinecone.io/learn/vector-database/" }
            ]
          },
          {
            text: "[AI] Read about a real AI product that uses retrieval to ground responses",
            links: [
              { t: "ref", label: "RAG case study", url: "https://blog.pinecone.io/rag/" }
            ]
          },
          {
            text: "[AI] Practice explaining RAG in plain language for an interviewer",
            links: [
              { t: "ref", label: "RAG explanation", url: "https://www.zdnet.com/article/what-is-rag-retrieval-augmented-generation-explained/" }
            ]
          }
        ],
        resources: [
          { label: "Pinecone Learn", url: "https://www.pinecone.io/learn/" },
          { label: "ZDNet RAG", url: "https://www.zdnet.com/article/what-is-rag-retrieval-augmented-generation-explained/" }
        ]
      },
      {
        label: "Week 12",
        title: "AI feature system design",
        badges: ["sd"],
        tasks: [
          {
            text: "[AI] Study how to design an AI-powered assistant or search feature",
            links: [
              { t: "ref", label: "AI system design primer", url: "https://www.educative.io/courses/grokking-the-system-design-interview" }
            ]
          },
          {
            text: "[AI] Learn the components: input, model, retrieval, output, monitoring",
            links: [
              { t: "ref", label: "AI product architecture", url: "https://www.oreilly.com/library/view/architecting-modern-data/9781492085810/" }
            ]
          },
          {
            text: "[AI] Review how latency, cost, and accuracy tradeoffs affect AI features",
            links: [
              { t: "ref", label: "AI tradeoffs", url: "https://www.pinecone.io/learn/serving-ai-models/" }
            ]
          },
          {
            text: "[AI] Sketch a simple AI feature design for a code search assistant",
            links: [
              { t: "ref", label: "Code search assistant", url: "https://www.infoq.com/articles/code-search-ai/" }
            ]
          }
        ],
        resources: [
          { label: "Grokking System Design", url: "https://www.educative.io/courses/grokking-the-system-design-interview" },
          { label: "Pinecone serving guide", url: "https://www.pinecone.io/learn/serving-ai-models/" }
        ]
      }
    ]
  },
  {
    title: "Month 4 — AI production engineering",
    goal:  "Focus on the engineering side of AI: pipelines, deployment, monitoring, and responsible model development.",
    weeks: [
      {
        label: "Week 13",
        title: "ML pipeline and data ops",
        badges: ["sd"],
        tasks: [
          {
            text: "[AI] Learn the ML lifecycle: data ingestion, training, validation, deployment",
            links: [
              { t: "ref", label: "ML lifecycle", url: "https://ml-ops.org/content/mlops-101/" }
            ]
          },
          {
            text: "[AI] Study data versioning and feature stores at a high level",
            links: [
              { t: "ref", label: "Feature store intro", url: "https://docs.vertex.ai/featurestore" }
            ]
          },
          {
            text: "[AI] Read a short guide on model governance and reproducibility",
            links: [
              { t: "ref", label: "Model governance", url: "https://www.databricks.com/blog/2020/12/08/machine-learning-governance-model-ops.html" }
            ]
          },
          {
            text: "[AI] Practice describing the difference between data ops and model ops",
            links: [
              { t: "ref", label: "MLOps overview", url: "https://aws.amazon.com/mlops/" }
            ]
          }
        ],
        resources: [
          { label: "MLOps community", url: "https://ml-ops.org/" },
          { label: "AWS MLOps", url: "https://aws.amazon.com/mlops/" }
        ]
      },
      {
        label: "Week 14",
        title: "Model serving and inference",
        badges: ["sd"],
        tasks: [
          {
            text: "[AI] Learn the difference between batch and real-time inference",
            links: [
              { t: "ref", label: "Inference patterns", url: "https://www.oreilly.com/library/view/production-machine-learning/9781492054054/" }
            ]
          },
          {
            text: "[AI] Study latency, throughput, and model batching tradeoffs",
            links: [
              { t: "ref", label: "Serving tradeoffs", url: "https://www.pinecone.io/learn/model-deployment/" }
            ]
          },
          {
            text: "[AI] Read about a common serving stack: model server, cache, API gateway",
            links: [
              { t: "ref", label: "ML serving stack", url: "https://www.tensorflow.org/tfx/serving" }
            ]
          },
          {
            text: "[AI] Practice explaining how you would serve a vector search model",
            links: [
              { t: "ref", label: "Vector search serving", url: "https://www.pinecone.io/learn/serving-ai-models/" }
            ]
          }
        ],
        resources: [
          { label: "TensorFlow Serving", url: "https://www.tensorflow.org/tfx/serving" },
          { label: "Pinecone serving guide", url: "https://www.pinecone.io/learn/model-deployment/" }
        ]
      },
      {
        label: "Week 15",
        title: "Monitoring and drift",
        badges: ["sd"],
        tasks: [
          {
            text: "[AI] Learn model monitoring signals: accuracy drift, data drift, latency changes",
            links: [
              { t: "ref", label: "Monitoring ML models", url: "https://www.mlflow.org/docs/latest/model-monitoring.html" }
            ]
          },
          {
            text: "[AI] Study how to detect training-serving skew",
            links: [
              { t: "ref", label: "Train-serve skew", url: "https://docs.seldon.io/projects/seldon-core/en/stable/examples/train_serve_skew.html" }
            ]
          },
          {
            text: "[AI] Review a short case on when retraining is required",
            links: [
              { t: "ref", label: "Retraining guide", url: "https://neptune.ai/blog/when-to-retrain-machine-learning-model" }
            ]
          },
          {
            text: "[AI] Practice explaining feedback loops for model maintenance",
            links: [
              { t: "ref", label: "Model maintenance", url: "https://www.databricks.com/glossary/model-monitoring" }
            ]
          }
        ],
        resources: [
          { label: "MLflow monitoring", url: "https://www.mlflow.org/" },
          { label: "Databricks glossary", url: "https://www.databricks.com/glossary/model-monitoring" }
        ]
      },
      {
        label: "Week 16",
        title: "Responsible AI and explainability",
        badges: ["sd"],
        tasks: [
          {
            text: "[AI] Learn why explainability and fairness matter in AI products",
            links: [
              { t: "ref", label: "Responsible AI principles", url: "https://www.ibm.com/topics/responsible-ai" }
            ]
          },
          {
            text: "[AI] Review simple explainability techniques: feature importance, SHAP, LIME",
            links: [
              { t: "ref", label: "Explainable AI guide", url: "https://christophm.github.io/interpretable-ml-book/" }
            ]
          },
          {
            text: "[AI] Study a short incident or case where AI bias caused product issues",
            links: [
              { t: "ref", label: "AI ethics case study", url: "https://www.nature.com/articles/d41586-019-03228-6" }
            ]
          },
          {
            text: "[AI] Practice framing a responsible-AI answer for interview questions",
            links: [
              { t: "ref", label: "AI ethics interview prep", url: "https://www.microsoft.com/en-us/research/blog/the-journey-toward-responsible-ai/" }
            ]
          }
        ],
        resources: [
          { label: "IBM Responsible AI", url: "https://www.ibm.com/topics/responsible-ai" },
          { label: "Interpretable ML", url: "https://christophm.github.io/interpretable-ml-book/" }
        ]
      }
    ]
  },
  {
    title: "Month 5 — AI interview case studies",
    goal:  "Practice AI system design and feature thinking with interview-friendly case studies and short design exercises.",
    weeks: [
      {
        label: "Week 17",
        title: "Recommendation system design",
        badges: ["sd"],
        tasks: [
          {
            text: "[AI] Study collaborative filtering vs content-based recommendation",
            links: [
              { t: "ref", label: "Recommendation systems", url: "https://developers.google.com/machine-learning/recommendation" }
            ]
          },
          {
            text: "[AI] Learn how to handle cold-start users and items",
            links: [
              { t: "ref", label: "Cold start problem", url: "https://towardsdatascience.com/the-cold-start-problem-in-recommender-systems-7ae73fe1866e" }
            ]
          },
          {
            text: "[AI] Sketch a simple architecture for a personalized recommendation feature",
            links: [
              { t: "ref", label: "Recommendation architecture", url: "https://aws.amazon.com/big-data/digital-recommendations/" }
            ]
          },
          {
            text: "[AI] Practice explaining evaluation metrics for recommender systems",
            links: [
              { t: "ref", label: "Recommender metrics", url: "https://developers.google.com/machine-learning/recommendation/metrics" }
            ]
          }
        ],
        resources: [
          { label: "Google Recommenders", url: "https://developers.google.com/machine-learning/recommendation" },
          { label: "AWS recommendations", url: "https://aws.amazon.com/big-data/digital-recommendations/" }
        ]
      },
      {
        label: "Week 18",
        title: "Search and assistant design",
        badges: ["sd"],
        tasks: [
          {
            text: "[AI] Study how to build an AI search assistant with retrieval and ranking",
            links: [
              { t: "ref", label: "AI search architecture", url: "https://www.pinecone.io/learn/semantic-search/" }
            ]
          },
          {
            text: "[AI] Learn the difference between keyword search and semantic search",
            links: [
              { t: "ref", label: "Semantic search", url: "https://www.pinecone.io/learn/semantic-search/" }
            ]
          },
          {
            text: "[AI] Review one example of a chat assistant architecture",
            links: [
              { t: "ref", label: "Chat assistant design", url: "https://www.oreilly.com/library/view/architecting-ai-systems/9781492061444/" }
            ]
          },
          {
            text: "[AI] Practice explaining tradeoffs between open-domain and closed-domain assistants",
            links: [
              { t: "ref", label: "Open vs closed domain", url: "https://blog.pinecone.io/semantic-search/" }
            ]
          }
        ],
        resources: [
          { label: "Pinecone semantic search", url: "https://www.pinecone.io/learn/semantic-search/" },
          { label: "O'Reilly AI systems", url: "https://www.oreilly.com/library/view/architecting-ai-systems/9781492061444/" }
        ]
      },
      {
        label: "Week 19",
        title: "Computer vision and multimodal AI features",
        badges: ["sd"],
        tasks: [
          {
            text: "[AI] Learn the components of a vision pipeline: data, model, inference",
            links: [
              { t: "ref", label: "Vision pipeline basics", url: "https://www.fast.ai/" }
            ]
          },
          {
            text: "[AI] Study a short example of image captioning or object detection",
            links: [
              { t: "ref", label: "Image captioning overview", url: "https://www.tensorflow.org/tutorials/text/image_captioning" }
            ]
          },
          {
            text: "[AI] Review how to integrate vision models into a product feature",
            links: [
              { t: "ref", label: "Vision product design", url: "https://www.oreilly.com/radar/how-to-build-computer-vision-applications/" }
            ]
          },
          {
            text: "[AI] Practice explaining a multimodal feature in simple, interview-friendly terms",
            links: [
              { t: "ref", label: "Multimodal AI primer", url: "https://ai.googleblog.com/2022/05/bert-multimodal.html" }
            ]
          }
        ],
        resources: [
          { label: "fast.ai", url: "https://www.fast.ai/" },
          { label: "TensorFlow image captioning", url: "https://www.tensorflow.org/tutorials/text/image_captioning" }
        ]
      },
      {
        label: "Week 20",
        title: "AI product and roadmap thinking",
        badges: ["sd"],
        tasks: [
          {
            text: "[AI] Learn how to prioritize AI features for impact, cost, and reliability",
            links: [
              { t: "ref", label: "AI product strategy", url: "https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/building-ai-powered-products" }
            ]
          },
          {
            text: "[AI] Study a short case on an AI product launch or iteration",
            links: [
              { t: "ref", label: "AI product case study", url: "https://hbr.org/2021/07/what-every-leader-needs-to-know-about-ai" }
            ]
          },
          {
            text: "[AI] Practice framing the value and risks of a proposed AI feature",
            links: [
              { t: "ref", label: "AI tradeoff thinking", url: "https://www.mckinsey.com/business-functions/mckinsey-analytics/our-insights/what-is-generative-ai" }
            ]
          },
          {
            text: "[AI] Sketch a one-page plan for an AI feature, focusing on safety and metrics",
            links: [
              { t: "ref", label: "AI metrics primer", url: "https://developers.google.com/machine-learning/crash-course/validation/metrics" }
            ]
          }
        ],
        resources: [
          { label: "McKinsey AI product", url: "https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/building-ai-powered-products" },
          { label: "HBR AI article", url: "https://hbr.org/2021/07/what-every-leader-needs-to-know-about-ai" }
        ]
      }
    ]
  },
  {
    title: "Month 6 — AI interview readiness",
    goal:  "Turn your AI knowledge into interview-ready answers, resume bullets, and product-quality tradeoffs.",
    weeks: [
      {
        label: "Week 21",
        title: "AI project review and resume bullets",
        badges: ["sd"],
        tasks: [
          {
            text: "[AI] Pick one AI-related project or case you can explain clearly",
            links: [
              { t: "ref", label: "Technical resume guide", url: "https://www.hirevue.com/blog/technical-resume" }
            ]
          },
          {
            text: "[AI] Write 2–3 resume bullets with metrics for that project",
            links: [
              { t: "ref", label: "Resume metrics tips", url: "https://www.themuse.com/advice/resume-accomplishments" }
            ]
          },
          {
            text: "[AI] Practice a concise two-minute explanation of the system and tradeoffs",
            links: [
              { t: "ref", label: "Explain technical work", url: "https://www.kickresume.com/en/help/describe-how-you-solved-a-problem/" }
            ]
          },
          {
            text: "[AI] Review one AI interview question and draft a strong answer",
            links: [
              { t: "ref", label: "AI interview questions", url: "https://builtin.com/artificial-intelligence/ai-interview-questions" }
            ]
          }
        ],
        resources: [
          { label: "The Muse resume tips", url: "https://www.themuse.com/advice/resume-accomplishments" },
          { label: "BuiltIn AI questions", url: "https://builtin.com/artificial-intelligence/ai-interview-questions" }
        ]
      },
      {
        label: "Week 22",
        title: "Explainability and tradeoffs",
        badges: ["sd"],
        tasks: [
          {
            text: "[AI] Review how to compare accuracy, latency, cost, and robustness",
            links: [
              { t: "ref", label: "AI tradeoffs primer", url: "https://www.pinecone.io/learn/tradeoffs-in-ai-systems/" }
            ]
          },
          {
            text: "[AI] Study a short example of an engineering tradeoff in AI model choice",
            links: [
              { t: "ref", label: "Model tradeoffs", url: "https://towardsdatascience.com/choosing-the-right-machine-learning-model-1d69f76d5ed4" }
            ]
          },
          {
            text: "[AI] Practice answering: when would you use a smaller model over a larger one?",
            links: [
              { t: "ref", label: "Model size tradeoffs", url: "https://arxiv.org/abs/2203.02155" }
            ]
          },
          {
            text: "[AI] Write a two-paragraph tradeoff summary for a hypothetical AI feature",
            links: [
              { t: "ref", label: "AI system tradeoffs", url: "https://www.oreilly.com/library/view/architecting-ai-systems/9781492061444/" }
            ]
          }
        ],
        resources: [
          { label: "Pinecone AI tradeoffs", url: "https://www.pinecone.io/learn/tradeoffs-in-ai-systems/" },
          { label: "O'Reilly AI systems", url: "https://www.oreilly.com/library/view/architecting-ai-systems/9781492061444/" }
        ]
      },
      {
        label: "Week 23",
        title: "Behavioral and ethics for AI engineers",
        badges: ["beh"],
        tasks: [
          {
            text: "[AI] Prepare two STAR stories showing AI leadership, ownership, or system reliability",
            links: [
              { t: "ref", label: "STAR method guide", url: "https://www.indeed.com/career-advice/interviewing/how-to-use-the-star-interview-response-technique" }
            ]
          },
          {
            text: "[AI] Learn how to talk about ethical AI tradeoffs and bias mitigation",
            links: [
              { t: "ref", label: "AI ethics interview guide", url: "https://www.microsoft.com/en-us/research/blog/the-journey-toward-responsible-ai/" }
            ]
          },
          {
            text: "[AI] Review one real-world example of AI ethics in product design",
            links: [
              { t: "ref", label: "AI ethics case", url: "https://www.nature.com/articles/d41586-019-03228-6" }
            ]
          },
          {
            text: "[AI] Practice delivering a short answer on how you would ensure a model is fair and safe",
            links: [
              { t: "ref", label: "Responsible AI blog", url: "https://www.microsoft.com/en-us/ai/responsible-ai" }
            ]
          }
        ],
        resources: [
          { label: "Indeed STAR guide", url: "https://www.indeed.com/career-advice/interviewing/how-to-use-the-star-interview-response-technique" },
          { label: "Microsoft Responsible AI", url: "https://www.microsoft.com/en-us/ai/responsible-ai" }
        ]
      },
      {
        label: "Week 24",
        title: "Spotlight AI prep and review",
        badges: ["sd"],
        tasks: [
          {
            text: "[AI] Review the strongest AI details from the past 5 months",
            links: [
              { t: "ref", label: "AI learning checklist", url: "https://www.coursera.org/articles/ai-interview" }
            ]
          },
          {
            text: "[AI] Identify your top 3 AI stories or project highlights for interviews",
            links: [
              { t: "ref", label: "Interview story tips", url: "https://www.themuse.com/advice/interview-questions-about-your-background" }
            ]
          },
          {
            text: "[AI] Practice one short system-design answer for an AI product feature",
            links: [
              { t: "ref", label: "System design prep", url: "https://www.educative.io/courses/grokking-the-system-design-interview" }
            ]
          },
          {
            text: "[AI] Plan a simple follow-up learning path after these 6 months",
            links: [
              { t: "ref", label: "AI learning roadmap", url: "https://www.fast.ai/" }
            ]
          }
        ],
        resources: [
          { label: "Coursera AI interview", url: "https://www.coursera.org/articles/ai-interview" },
          { label: "Fast.ai", url: "https://www.fast.ai/" }
        ]
      }
    ]
  }
];
