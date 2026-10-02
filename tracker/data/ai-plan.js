/* Final dashboard-ready curriculum. Task IDs follow <track>-w<week>-<category-slug>-<n>; keep them stable so saved progress is preserved. */
window.AI_TRACK = {
  "id": "ai",
  "title": "AI Prep",
  "subtitle": "ML foundations, generative AI, RAG, AI systems, production engineering, governance, and case studies.",
  "durationWeeks": 24,
  "categories": [
    {
      "name": "AI Fundamentals",
      "color": "#60a5fa"
    },
    {
      "name": "Responsible AI",
      "color": "#f472b6"
    },
    {
      "name": "Generative AI",
      "color": "#c084fc"
    },
    {
      "name": "AI System Design",
      "color": "#f59e0b"
    },
    {
      "name": "ML Engineering",
      "color": "#34d399"
    }
  ],
  "weeks": [
    {
      "number": 1,
      "theme": "ML fundamentals + terminology",
      "outcome": "Build a strong foundation in core AI concepts, metrics, and model behavior so you can speak clearly in engineering interviews.",
      "resources": [
        {
          "label": "Google ML Crash Course",
          "url": "https://developers.google.com/machine-learning/crash-course"
        },
        {
          "label": "ML Glossary",
          "url": "https://developers.google.com/machine-learning/glossary"
        }
      ],
      "tasks": [
        {
          "id": "ai-w1-ai-fundamentals-1",
          "category": "AI Fundamentals",
          "title": "Learn supervised, unsupervised, and reinforcement learning at a high level",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Google ML Glossary",
              "url": "https://developers.google.com/machine-learning/glossary"
            }
          ]
        },
        {
          "id": "ai-w1-ai-fundamentals-2",
          "category": "AI Fundamentals",
          "title": "Study training vs validation vs test splits and why data leakage is deadly",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Data leakage explained",
              "url": "https://machinelearningmastery.com/data-leakage-machine-learning/"
            }
          ]
        },
        {
          "id": "ai-w1-ai-fundamentals-3",
          "category": "AI Fundamentals",
          "title": "Review common metrics",
          "detail": "accuracy, precision, recall, F1, ROC/AUC",
          "links": [
            {
              "t": "ref",
              "label": "Evaluation metrics guide",
              "url": "https://developers.google.com/machine-learning/crash-course/classification/metrics"
            }
          ]
        },
        {
          "id": "ai-w1-ai-fundamentals-4",
          "category": "AI Fundamentals",
          "title": "Write one-sentence definitions for 10 ML interview terms",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "ML interview glossary",
              "url": "https://www.datasciencecentral.com/profiles/blogs/30-top-machine-learning-interview-questions"
            }
          ]
        }
      ]
    },
    {
      "number": 2,
      "theme": "Data prep, features, and bias",
      "outcome": "Build a strong foundation in core AI concepts, metrics, and model behavior so you can speak clearly in engineering interviews.",
      "resources": [
        {
          "label": "Machine Learning Mastery",
          "url": "https://machinelearningmastery.com"
        },
        {
          "label": "Pandas docs",
          "url": "https://pandas.pydata.org/"
        }
      ],
      "tasks": [
        {
          "id": "ai-w2-ai-fundamentals-1",
          "category": "AI Fundamentals",
          "title": "Learn feature engineering basics",
          "detail": "scaling, encoding, missing values",
          "links": [
            {
              "t": "ref",
              "label": "Feature engineering guide",
              "url": "https://machinelearningmastery.com/feature-engineering-for-machine-learning/"
            }
          ]
        },
        {
          "id": "ai-w2-responsible-ai-1",
          "category": "Responsible AI",
          "title": "Understand bias, variance, overfitting, and regularization",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Bias vs variance",
              "url": "https://scikit-learn.org/stable/modules/learning_curve.html"
            }
          ]
        },
        {
          "id": "ai-w2-responsible-ai-2",
          "category": "Responsible AI",
          "title": "Read one short case study on dataset bias and mitigation",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Bias in AI case study",
              "url": "https://hbr.org/2019/07/ai-has-a-bias-problem-and-it-starts-with-humans"
            }
          ]
        },
        {
          "id": "ai-w2-ai-fundamentals-2",
          "category": "AI Fundamentals",
          "title": "Practice a 20-minute pandas data cleanup example",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Pandas tutorial",
              "url": "https://pandas.pydata.org/docs/getting_started/intro_tutorials/index.html"
            }
          ]
        }
      ]
    },
    {
      "number": 3,
      "theme": "Linear models and decision trees",
      "outcome": "Build a strong foundation in core AI concepts, metrics, and model behavior so you can speak clearly in engineering interviews.",
      "resources": [
        {
          "label": "Interpretable ML book",
          "url": "https://christophm.github.io/interpretable-ml-book/"
        },
        {
          "label": "Google Crash Course",
          "url": "https://developers.google.com/machine-learning/crash-course"
        }
      ],
      "tasks": [
        {
          "id": "ai-w3-ai-fundamentals-1",
          "category": "AI Fundamentals",
          "title": "Review linear regression, logistic regression, and decision tree intuition",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Linear vs tree models",
              "url": "https://developers.google.com/machine-learning/crash-course/first-ml-model/linear-regression"
            }
          ]
        },
        {
          "id": "ai-w3-ai-fundamentals-2",
          "category": "AI Fundamentals",
          "title": "Compare when to choose linear models, trees, or ensemble models",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Model selection guide",
              "url": "https://machinelearningmastery.com/choose-best-machine-learning-algorithm/"
            }
          ]
        },
        {
          "id": "ai-w3-ai-fundamentals-3",
          "category": "AI Fundamentals",
          "title": "Study model interpretability and feature importance",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Feature importance",
              "url": "https://christophm.github.io/interpretable-ml-book/"
            }
          ]
        },
        {
          "id": "ai-w3-ai-fundamentals-4",
          "category": "AI Fundamentals",
          "title": "Practice explaining the difference between regression and classification",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Regression vs classification",
              "url": "https://www.analyticsvidhya.com/blog/2021/06/supervised-learning-regression-vs-classification/"
            }
          ]
        }
      ]
    },
    {
      "number": 4,
      "theme": "Model training and error analysis",
      "outcome": "Build a strong foundation in core AI concepts, metrics, and model behavior so you can speak clearly in engineering interviews.",
      "resources": [
        {
          "label": "Rules of ML",
          "url": "https://developers.google.com/machine-learning/guides/rules-of-ml"
        },
        {
          "label": "Towards Data Science",
          "url": "https://towardsdatascience.com/"
        }
      ],
      "tasks": [
        {
          "id": "ai-w4-ai-fundamentals-1",
          "category": "AI Fundamentals",
          "title": "Learn training lifecycle",
          "detail": "hyperparameters, cross-validation, early stopping",
          "links": [
            {
              "t": "ref",
              "label": "Model training overview",
              "url": "https://developers.google.com/machine-learning/guides/rules-of-ml"
            }
          ]
        },
        {
          "id": "ai-w4-ai-fundamentals-2",
          "category": "AI Fundamentals",
          "title": "Review confusion matrix and error analysis for classification",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Confusion matrix guide",
              "url": "https://en.wikipedia.org/wiki/Confusion_matrix"
            }
          ]
        },
        {
          "id": "ai-w4-ai-fundamentals-3",
          "category": "AI Fundamentals",
          "title": "Read a short note on model validation and holdout sets",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Validation sets explained",
              "url": "https://towardsdatascience.com/train-validation-and-test-sets-72cb40cba9e7"
            }
          ]
        },
        {
          "id": "ai-w4-ai-fundamentals-4",
          "category": "AI Fundamentals",
          "title": "Summarize the five most important interview talking points for model quality",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "ML interview prep tips",
              "url": "https://www.springboard.com/blog/data-science/machine-learning-interview-questions/"
            }
          ]
        }
      ]
    },
    {
      "number": 5,
      "theme": "Neural network basics",
      "outcome": "Understand deep learning building blocks, Transformer architecture, and embedding-based search in a compact weekly cadence.",
      "resources": [
        {
          "label": "DeepLearning.AI notes",
          "url": "https://www.deeplearning.ai/"
        },
        {
          "label": "MachineLearningMastery",
          "url": "https://machinelearningmastery.com"
        }
      ],
      "tasks": [
        {
          "id": "ai-w5-ai-fundamentals-1",
          "category": "AI Fundamentals",
          "title": "Learn how a neural network is structured",
          "detail": "layers, weights, activations",
          "links": [
            {
              "t": "ref",
              "label": "Neural network introduction",
              "url": "https://www.deeplearning.ai/ai-notes/what-is-a-neural-network/"
            }
          ]
        },
        {
          "id": "ai-w5-ai-fundamentals-2",
          "category": "AI Fundamentals",
          "title": "Review common activation functions",
          "detail": "ReLU, sigmoid, softmax",
          "links": [
            {
              "t": "ref",
              "label": "Activation functions",
              "url": "https://machinelearningmastery.com/activation-functions-for-deep-learning/"
            }
          ]
        },
        {
          "id": "ai-w5-ai-fundamentals-3",
          "category": "AI Fundamentals",
          "title": "Understand forward pass vs backward pass at a conceptual level",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Backpropagation explained",
              "url": "https://www.analyticsvidhya.com/blog/2021/03/backpropagation-intuition-machine-learning/"
            }
          ]
        },
        {
          "id": "ai-w5-generative-ai-1",
          "category": "Generative AI",
          "title": "Practice describing a neural network in one paragraph for interview clarity",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "DL interview guide",
              "url": "https://neptune.ai/blog/neural-network-interview-questions"
            }
          ]
        }
      ]
    },
    {
      "number": 6,
      "theme": "Training, optimization, and regularization",
      "outcome": "Understand deep learning building blocks, Transformer architecture, and embedding-based search in a compact weekly cadence.",
      "resources": [
        {
          "label": "Analytics Vidhya",
          "url": "https://www.analyticsvidhya.com"
        },
        {
          "label": "ML Cheat Sheet",
          "url": "https://ml-cheatsheet.readthedocs.io"
        }
      ],
      "tasks": [
        {
          "id": "ai-w6-ai-fundamentals-1",
          "category": "AI Fundamentals",
          "title": "Learn gradient descent, learning rate, and optimizer tradeoffs",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Gradient descent guide",
              "url": "https://www.analyticsvidhya.com/blog/2020/09/gradient-descent-explained/"
            }
          ]
        },
        {
          "id": "ai-w6-ai-fundamentals-2",
          "category": "AI Fundamentals",
          "title": "Review regularization techniques",
          "detail": "L1, L2, dropout",
          "links": [
            {
              "t": "ref",
              "label": "Regularization in ML",
              "url": "https://towardsdatascience.com/regularization-in-machine-learning-76441ddcf99a"
            }
          ]
        },
        {
          "id": "ai-w6-ai-fundamentals-3",
          "category": "AI Fundamentals",
          "title": "Understand vanishing/exploding gradients and simple mitigation strategies",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Vanishing gradients",
              "url": "https://ml-cheatsheet.readthedocs.io/en/latest/gradient_descent.html"
            }
          ]
        },
        {
          "id": "ai-w6-ai-fundamentals-4",
          "category": "AI Fundamentals",
          "title": "Practice explaining why overfitting happens in one or two sentences",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Overfitting explained",
              "url": "https://www.ibm.com/cloud/learn/overfitting"
            }
          ]
        }
      ]
    },
    {
      "number": 7,
      "theme": "Transformers and attention",
      "outcome": "Understand deep learning building blocks, Transformer architecture, and embedding-based search in a compact weekly cadence.",
      "resources": [
        {
          "label": "The Illustrated Transformer",
          "url": "https://jalammar.github.io/illustrated-transformer/"
        },
        {
          "label": "OpenAI research",
          "url": "https://openai.com/research"
        }
      ],
      "tasks": [
        {
          "id": "ai-w7-generative-ai-1",
          "category": "Generative AI",
          "title": "Study the Transformer architecture and why attention matters",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Attention explained",
              "url": "https://jalammar.github.io/illustrated-transformer/"
            }
          ]
        },
        {
          "id": "ai-w7-ai-fundamentals-1",
          "category": "AI Fundamentals",
          "title": "Compare encoder-only, decoder-only, and encoder-decoder models",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Transformer variants",
              "url": "https://towardsdatascience.com/transformer-architectures-encoder-decoder-3d298703ed24"
            }
          ]
        },
        {
          "id": "ai-w7-generative-ai-2",
          "category": "Generative AI",
          "title": "Read a short note on why LLMs are useful for software engineering features",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "LLM use cases",
              "url": "https://openai.com/research/default-language-models"
            }
          ]
        },
        {
          "id": "ai-w7-ai-fundamentals-2",
          "category": "AI Fundamentals",
          "title": "Practice explaining attention in plain language",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Attention intuition",
              "url": "https://towardsdatascience.com/attention-mechanism-in-transformers-563eb59d7470"
            }
          ]
        }
      ]
    },
    {
      "number": 8,
      "theme": "Embeddings and vector search",
      "outcome": "Understand deep learning building blocks, Transformer architecture, and embedding-based search in a compact weekly cadence.",
      "resources": [
        {
          "label": "Pinecone Learn",
          "url": "https://www.pinecone.io/learn/"
        },
        {
          "label": "ZDNet RAG",
          "url": "https://www.zdnet.com/article/what-is-rag-retrieval-augmented-generation-explained/"
        }
      ],
      "tasks": [
        {
          "id": "ai-w8-generative-ai-1",
          "category": "Generative AI",
          "title": "Learn what embeddings are and how similarity search works",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Embedding basics",
              "url": "https://towardsdatascience.com/word-embeddings-and-vector-spaces-in-nlp-447d7f46bf4c"
            }
          ]
        },
        {
          "id": "ai-w8-ai-system-design-1",
          "category": "AI System Design",
          "title": "Review applications",
          "detail": "search, recommendation, document retrieval",
          "links": [
            {
              "t": "ref",
              "label": "Vector search guide",
              "url": "https://www.pinecone.io/learn/vector-database/"
            }
          ]
        },
        {
          "id": "ai-w8-generative-ai-2",
          "category": "Generative AI",
          "title": "Study recall vs precision in RAG retrieval pipelines",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "RAG explained",
              "url": "https://www.zdnet.com/article/what-is-rag-retrieval-augmented-generation-explained/"
            }
          ]
        },
        {
          "id": "ai-w8-ai-system-design-2",
          "category": "AI System Design",
          "title": "Practice describing one AI retrieval architecture in plain English",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "RAG architecture",
              "url": "https://www.pinecone.io/learn/retrieval-augmented-generation/"
            }
          ]
        }
      ]
    },
    {
      "number": 9,
      "theme": "Prompt design fundamentals + versioning",
      "outcome": "Focus on practical prompt design, safe AI behavior, and the systems that support LLM-driven features.",
      "resources": [
        {
          "label": "Prompting Guide",
          "url": "https://www.promptingguide.ai/"
        },
        {
          "label": "Learn Prompting",
          "url": "https://learnprompting.org/"
        }
      ],
      "tasks": [
        {
          "id": "ai-w9-generative-ai-1",
          "category": "Generative AI",
          "title": "Learn prompt categories",
          "detail": "instruction, few-shot, chain-of-thought",
          "links": [
            {
              "t": "ref",
              "label": "Prompt engineering basics",
              "url": "https://www.promptingguide.ai/"
            }
          ]
        },
        {
          "id": "ai-w9-generative-ai-2",
          "category": "Generative AI",
          "title": "Study examples of good vs bad prompts for code and writing tasks",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Prompt examples",
              "url": "https://learnprompting.org/"
            }
          ]
        },
        {
          "id": "ai-w9-generative-ai-3",
          "category": "Generative AI",
          "title": "Practice writing one prompt for a code summarization task",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Code prompt guide",
              "url": "https://www.promptingguide.ai/"
            }
          ]
        },
        {
          "id": "ai-w9-generative-ai-4",
          "category": "Generative AI",
          "title": "Learn prompt versioning and rollback strategies for production LLMs",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Prompt versioning guide",
              "url": "https://www.promptingguide.ai/"
            },
            {
              "t": "ref",
              "label": "LLMOps best practices",
              "url": "https://www.gpt-is.ai/build-better-llm-apps/"
            }
          ]
        },
        {
          "id": "ai-w9-generative-ai-5",
          "category": "Generative AI",
          "title": "Review how prompt structure affects model output consistency",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Prompt structure",
              "url": "https://learnprompting.org/docs"
            }
          ]
        }
      ]
    },
    {
      "number": 10,
      "theme": "LLM safety, bias, and experiment tracking",
      "outcome": "Focus on practical prompt design, safe AI behavior, and the systems that support LLM-driven features.",
      "resources": [
        {
          "label": "Microsoft Responsible AI",
          "url": "https://www.microsoft.com/en-us/ai/responsible-ai"
        },
        {
          "label": "AI evaluation blog",
          "url": "https://www.microsoft.com/en-us/research/blog/evaluating-generative-ai/"
        }
      ],
      "tasks": [
        {
          "id": "ai-w10-responsible-ai-1",
          "category": "Responsible AI",
          "title": "Study common LLM failure modes",
          "detail": "hallucinations, bias, prompt injection",
          "links": [
            {
              "t": "ref",
              "label": "LLM risks",
              "url": "https://arxiv.org/abs/2202.07250"
            }
          ]
        },
        {
          "id": "ai-w10-ai-fundamentals-1",
          "category": "AI Fundamentals",
          "title": "Learn how to evaluate generated output for correctness and relevance",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "AI evaluation metrics",
              "url": "https://www.microsoft.com/en-us/research/blog/evaluating-generative-ai/"
            }
          ]
        },
        {
          "id": "ai-w10-generative-ai-1",
          "category": "Generative AI",
          "title": "Study experiment tracking for LLMs",
          "detail": "A/B testing prompts, model variants, and guardrails",
          "links": [
            {
              "t": "ref",
              "label": "Experiment tracking guide",
              "url": "https://www.weights-and-biases.com/"
            },
            {
              "t": "ref",
              "label": "MLflow experiments",
              "url": "https://www.mlflow.org/docs/latest/tracking.html"
            }
          ]
        },
        {
          "id": "ai-w10-responsible-ai-2",
          "category": "Responsible AI",
          "title": "Read a short guide on responsible AI and design guardrails",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Responsible AI",
              "url": "https://www.microsoft.com/en-us/ai/responsible-ai"
            }
          ]
        },
        {
          "id": "ai-w10-ai-system-design-1",
          "category": "AI System Design",
          "title": "Practice explaining how to detect and mitigate hallucinations in production",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Hallucination detection",
              "url": "https://arxiv.org/abs/2211.15355"
            },
            {
              "t": "ref",
              "label": "RAG for grounding",
              "url": "https://www.pinecone.io/learn/retrieval-augmented-generation/"
            }
          ]
        }
      ]
    },
    {
      "number": 11,
      "theme": "RAG: chunking, LangChain, and enterprise grounding",
      "outcome": "Focus on practical prompt design, safe AI behavior, and the systems that support LLM-driven features.",
      "resources": [
        {
          "label": "Pinecone Learn",
          "url": "https://www.pinecone.io/learn/"
        },
        {
          "label": "ZDNet RAG",
          "url": "https://www.zdnet.com/article/what-is-rag-retrieval-augmented-generation-explained/"
        }
      ],
      "tasks": [
        {
          "id": "ai-w11-generative-ai-1",
          "category": "Generative AI",
          "title": "Learn the RAG architecture",
          "detail": "query, retrieve, augment, generate",
          "links": [
            {
              "t": "ref",
              "label": "RAG overview",
              "url": "https://www.pinecone.io/learn/retrieval-augmented-generation/"
            }
          ]
        },
        {
          "id": "ai-w11-generative-ai-2",
          "category": "Generative AI",
          "title": "Study vector databases (Pinecone, Weaviate, Azure AI Search, Elasticsearch) and similarity search",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Vector database overview",
              "url": "https://www.pinecone.io/learn/vector-database/"
            },
            {
              "t": "ref",
              "label": "Vector DB comparison",
              "url": "https://www.infq.com/articles/vector-databases/"
            }
          ]
        },
        {
          "id": "ai-w11-ai-fundamentals-1",
          "category": "AI Fundamentals",
          "title": "Learn chunking strategies",
          "detail": "token-based, semantic, recursive chunking for long documents",
          "links": [
            {
              "t": "ref",
              "label": "Chunking best practices",
              "url": "https://www.pinecone.io/learn/chunking-strategies/"
            },
            {
              "t": "ref",
              "label": "LangChain documentation",
              "url": "https://python.langchain.com/docs/use_cases/question_answering/"
            }
          ]
        },
        {
          "id": "ai-w11-generative-ai-3",
          "category": "Generative AI",
          "title": "Study LangChain or Semantic Kernel frameworks for RAG orchestration",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "LangChain RAG",
              "url": "https://python.langchain.com/"
            },
            {
              "t": "ref",
              "label": "Semantic Kernel (Microsoft)",
              "url": "https://learn.microsoft.com/en-us/semantic-kernel/"
            }
          ]
        },
        {
          "id": "ai-w11-generative-ai-4",
          "category": "Generative AI",
          "title": "Practice designing a RAG system grounded with enterprise data (Slack, Confluence, S3)",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Enterprise RAG patterns",
              "url": "https://www.databricks.com/blog/2023/09/18/rag-for-enterprise-data.html"
            }
          ]
        }
      ]
    },
    {
      "number": 12,
      "theme": "AI architecture: agents, AWS Bedrock, cost & latency tradeoffs",
      "outcome": "Focus on practical prompt design, safe AI behavior, and the systems that support LLM-driven features.",
      "resources": [
        {
          "label": "Grokking System Design",
          "url": "https://www.educative.io/courses/grokking-the-system-design-interview"
        },
        {
          "label": "Pinecone serving guide",
          "url": "https://www.pinecone.io/learn/serving-ai-models/"
        }
      ],
      "tasks": [
        {
          "id": "ai-w12-generative-ai-1",
          "category": "Generative AI",
          "title": "Learn agent frameworks",
          "detail": "what are AI agents and how to orchestrate them?",
          "links": [
            {
              "t": "ref",
              "label": "AI agents guide",
              "url": "https://www.deeplearning.ai/short-courses/ai-agents-in-langgraph/"
            },
            {
              "t": "ref",
              "label": "LangChain agents",
              "url": "https://python.langchain.com/docs/concepts/agents"
            }
          ]
        },
        {
          "id": "ai-w12-generative-ai-2",
          "category": "Generative AI",
          "title": "Study AWS Bedrock",
          "detail": "managed foundation models and API-based inference",
          "links": [
            {
              "t": "ref",
              "label": "AWS Bedrock overview",
              "url": "https://aws.amazon.com/bedrock/"
            },
            {
              "t": "ref",
              "label": "Bedrock vs alternatives",
              "url": "https://www.infoq.com/articles/aws-bedrock/"
            }
          ]
        },
        {
          "id": "ai-w12-ai-fundamentals-1",
          "category": "AI Fundamentals",
          "title": "Learn cost management",
          "detail": "per-token pricing, token usage optimization, batch processing",
          "links": [
            {
              "t": "ref",
              "label": "LLM cost optimization",
              "url": "https://www.mckinsey.com/capabilities/business-technology/our-insights/generative-ai-and-the-future-of-work"
            },
            {
              "t": "ref",
              "label": "Token efficiency",
              "url": "https://www.pinecone.io/learn/reduce-llm-costs/"
            }
          ]
        },
        {
          "id": "ai-w12-ai-fundamentals-2",
          "category": "AI Fundamentals",
          "title": "Review how to choose the right model and balance latency vs cost vs accuracy",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Model selection guide",
              "url": "https://www.databricks.com/blog/2023/04/05/model-selection.html"
            },
            {
              "t": "ref",
              "label": "Model tradeoffs",
              "url": "https://www.pinecone.io/learn/serving-ai-models/"
            }
          ]
        },
        {
          "id": "ai-w12-ai-system-design-1",
          "category": "AI System Design",
          "title": "Sketch a simple AI feature design for a code search assistant",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Code search assistant",
              "url": "https://www.infoq.com/articles/code-search-ai/"
            }
          ]
        }
      ]
    },
    {
      "number": 13,
      "theme": "ML/LLMOps pipeline: Databricks, experiment tracking, model auditing",
      "outcome": "Focus on the engineering side of AI: pipelines, deployment, monitoring, and responsible model development.",
      "resources": [
        {
          "label": "MLOps community",
          "url": "https://ml-ops.org/"
        },
        {
          "label": "AWS MLOps",
          "url": "https://aws.amazon.com/mlops/"
        }
      ],
      "tasks": [
        {
          "id": "ai-w13-ml-engineering-1",
          "category": "ML Engineering",
          "title": "Learn the ML lifecycle",
          "detail": "data ingestion, training, validation, deployment",
          "links": [
            {
              "t": "ref",
              "label": "ML lifecycle",
              "url": "https://ml-ops.org/content/mlops-101/"
            }
          ]
        },
        {
          "id": "ai-w13-ml-engineering-2",
          "category": "ML Engineering",
          "title": "Study Databricks and Apache Spark for large-scale data processing and model training",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Databricks ML Platform",
              "url": "https://www.databricks.com/product/machine-learning"
            },
            {
              "t": "ref",
              "label": "Spark ML",
              "url": "https://spark.apache.org/mllib/"
            }
          ]
        },
        {
          "id": "ai-w13-ml-engineering-3",
          "category": "ML Engineering",
          "title": "Learn experiment tracking with MLflow",
          "detail": "versioning, metrics, reproducibility",
          "links": [
            {
              "t": "ref",
              "label": "MLflow experiments",
              "url": "https://www.mlflow.org/"
            },
            {
              "t": "ref",
              "label": "Experiment tracking best practices",
              "url": "https://www.wandb.com/"
            }
          ]
        },
        {
          "id": "ai-w13-responsible-ai-1",
          "category": "Responsible AI",
          "title": "Study model auditing and governance",
          "detail": "versioning, compliance, accountability",
          "links": [
            {
              "t": "ref",
              "label": "Model auditing",
              "url": "https://www.databricks.com/blog/model-governance.html"
            },
            {
              "t": "ref",
              "label": "Model card documentation",
              "url": "https://arxiv.org/abs/1810.03993"
            }
          ]
        },
        {
          "id": "ai-w13-generative-ai-1",
          "category": "Generative AI",
          "title": "Practice describing the difference between data ops, model ops, and LLMOps",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "MLOps overview",
              "url": "https://aws.amazon.com/mlops/"
            },
            {
              "t": "ref",
              "label": "LLMOps guide",
              "url": "https://www.gpt-is.ai/build-better-llm-apps/"
            }
          ]
        }
      ]
    },
    {
      "number": 14,
      "theme": "Model serving: cloud vs self-hosted, latency reduction",
      "outcome": "Focus on the engineering side of AI: pipelines, deployment, monitoring, and responsible model development.",
      "resources": [
        {
          "label": "TensorFlow Serving",
          "url": "https://www.tensorflow.org/tfx/serving"
        },
        {
          "label": "Pinecone serving guide",
          "url": "https://www.pinecone.io/learn/model-deployment/"
        }
      ],
      "tasks": [
        {
          "id": "ai-w14-ai-fundamentals-1",
          "category": "AI Fundamentals",
          "title": "Learn the difference between batch and real-time inference",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Inference patterns",
              "url": "https://www.oreilly.com/library/view/production-machine-learning/9781492054054/"
            }
          ]
        },
        {
          "id": "ai-w14-ml-engineering-1",
          "category": "ML Engineering",
          "title": "Study cloud vs self-hosted deployment",
          "detail": "cost, control, maintenance tradeoffs",
          "links": [
            {
              "t": "ref",
              "label": "Cloud vs on-premise",
              "url": "https://www.mckinsey.com/capabilities/business-technology/our-insights/ai-deployment-options"
            },
            {
              "t": "ref",
              "label": "LLM deployment architecture",
              "url": "https://aws.amazon.com/blogs/ml/deploy-llms-on-amazon-sagemaker/"
            }
          ]
        },
        {
          "id": "ai-w14-ai-fundamentals-2",
          "category": "AI Fundamentals",
          "title": "Learn latency reduction techniques",
          "detail": "quantization, pruning, caching, distillation",
          "links": [
            {
              "t": "ref",
              "label": "Model optimization",
              "url": "https://www.pinecone.io/learn/reduce-llm-latency/"
            },
            {
              "t": "ref",
              "label": "Inference optimization",
              "url": "https://huggingface.co/blog/inference-optimize-llm"
            }
          ]
        },
        {
          "id": "ai-w14-ml-engineering-2",
          "category": "ML Engineering",
          "title": "Study model batching and throughput optimization for serving",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Serving tradeoffs",
              "url": "https://www.pinecone.io/learn/model-deployment/"
            },
            {
              "t": "ref",
              "label": "ML serving stack",
              "url": "https://www.tensorflow.org/tfx/serving"
            }
          ]
        },
        {
          "id": "ai-w14-generative-ai-1",
          "category": "Generative AI",
          "title": "Practice explaining how you would serve a vector search model with low latency",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Vector search serving",
              "url": "https://www.pinecone.io/learn/serving-ai-models/"
            }
          ]
        }
      ]
    },
    {
      "number": 15,
      "theme": "Monitoring and drift",
      "outcome": "Focus on the engineering side of AI: pipelines, deployment, monitoring, and responsible model development.",
      "resources": [
        {
          "label": "MLflow monitoring",
          "url": "https://www.mlflow.org/"
        },
        {
          "label": "Databricks glossary",
          "url": "https://www.databricks.com/glossary/model-monitoring"
        }
      ],
      "tasks": [
        {
          "id": "ai-w15-ml-engineering-1",
          "category": "ML Engineering",
          "title": "Learn model monitoring signals",
          "detail": "accuracy drift, data drift, latency changes",
          "links": [
            {
              "t": "ref",
              "label": "Monitoring ML models",
              "url": "https://www.mlflow.org/docs/latest/model-monitoring.html"
            }
          ]
        },
        {
          "id": "ai-w15-ml-engineering-2",
          "category": "ML Engineering",
          "title": "Study how to detect training-serving skew",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Train-serve skew",
              "url": "https://docs.seldon.io/projects/seldon-core/en/stable/examples/train_serve_skew.html"
            }
          ]
        },
        {
          "id": "ai-w15-ai-fundamentals-1",
          "category": "AI Fundamentals",
          "title": "Review a short case on when retraining is required",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Retraining guide",
              "url": "https://neptune.ai/blog/when-to-retrain-machine-learning-model"
            }
          ]
        },
        {
          "id": "ai-w15-ai-fundamentals-2",
          "category": "AI Fundamentals",
          "title": "Practice explaining feedback loops for model maintenance",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Model maintenance",
              "url": "https://www.databricks.com/glossary/model-monitoring"
            }
          ]
        }
      ]
    },
    {
      "number": 16,
      "theme": "Responsible AI, governance, security, and compliance",
      "outcome": "Focus on the engineering side of AI: pipelines, deployment, monitoring, and responsible model development.",
      "resources": [
        {
          "label": "IBM Responsible AI",
          "url": "https://www.ibm.com/topics/responsible-ai"
        },
        {
          "label": "Interpretable ML",
          "url": "https://christophm.github.io/interpretable-ml-book/"
        },
        {
          "label": "OWASP AI Security",
          "url": "https://owasp.org/www-project-ai-security-and-privacy-guide/"
        },
        {
          "label": "EU AI Act",
          "url": "https://ec.europa.eu/info/publications/proposal-regulation-artificial-intelligence_en"
        }
      ],
      "tasks": [
        {
          "id": "ai-w16-responsible-ai-1",
          "category": "Responsible AI",
          "title": "Learn why explainability and fairness matter in AI products",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Responsible AI principles",
              "url": "https://www.ibm.com/topics/responsible-ai"
            }
          ]
        },
        {
          "id": "ai-w16-responsible-ai-2",
          "category": "Responsible AI",
          "title": "Study PII protection and data privacy",
          "detail": "masking, de-identification, GDPR compliance",
          "links": [
            {
              "t": "ref",
              "label": "PII protection guide",
              "url": "https://www.microsoft.com/en-us/ai/responsible-ai"
            },
            {
              "t": "ref",
              "label": "Data privacy in AI",
              "url": "https://www.databricks.com/blog/privacy-preserving-ml.html"
            }
          ]
        },
        {
          "id": "ai-w16-responsible-ai-3",
          "category": "Responsible AI",
          "title": "Learn security controls",
          "detail": "authentication, encryption, access control for AI models",
          "links": [
            {
              "t": "ref",
              "label": "AI security best practices",
              "url": "https://owasp.org/www-project-ai-security-and-privacy-guide/"
            },
            {
              "t": "ref",
              "label": "Model stealing attacks",
              "url": "https://arxiv.org/abs/1609.02943"
            }
          ]
        },
        {
          "id": "ai-w16-ai-fundamentals-1",
          "category": "AI Fundamentals",
          "title": "Study model auditing",
          "detail": "documentation, transparency reports, accountability",
          "links": [
            {
              "t": "ref",
              "label": "Model card framework",
              "url": "https://arxiv.org/abs/1810.03993"
            },
            {
              "t": "ref",
              "label": "Model auditing checklist",
              "url": "https://www.aaai.org/ocs/index.php/AAAI/AAAI-21/paper/viewFile/17644/17152"
            }
          ]
        },
        {
          "id": "ai-w16-responsible-ai-4",
          "category": "Responsible AI",
          "title": "Review compliance requirements",
          "detail": "SOC2, HIPAA, industry-specific regulations",
          "links": [
            {
              "t": "ref",
              "label": "AI compliance frameworks",
              "url": "https://www.microsoft.com/en-us/ai/responsible-ai"
            },
            {
              "t": "ref",
              "label": "EU AI Act implications",
              "url": "https://ec.europa.eu/info/publications/proposal-regulation-artificial-intelligence_en"
            }
          ]
        },
        {
          "id": "ai-w16-ai-fundamentals-2",
          "category": "AI Fundamentals",
          "title": "Review simple explainability techniques",
          "detail": "feature importance, SHAP, LIME",
          "links": [
            {
              "t": "ref",
              "label": "Explainable AI guide",
              "url": "https://christophm.github.io/interpretable-ml-book/"
            }
          ]
        },
        {
          "id": "ai-w16-responsible-ai-5",
          "category": "Responsible AI",
          "title": "Study a short incident or case where AI bias caused product issues",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "AI ethics case study",
              "url": "https://www.nature.com/articles/d41586-019-03228-6"
            }
          ]
        },
        {
          "id": "ai-w16-responsible-ai-6",
          "category": "Responsible AI",
          "title": "Practice framing a responsible-AI answer for interview questions",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "AI ethics interview prep",
              "url": "https://www.microsoft.com/en-us/research/blog/the-journey-toward-responsible-ai/"
            }
          ]
        }
      ]
    },
    {
      "number": 17,
      "theme": "Recommendation system design",
      "outcome": "Practice AI system design and feature thinking with interview-friendly case studies and short design exercises.",
      "resources": [
        {
          "label": "Google Recommenders",
          "url": "https://developers.google.com/machine-learning/recommendation"
        },
        {
          "label": "AWS recommendations",
          "url": "https://aws.amazon.com/big-data/digital-recommendations/"
        }
      ],
      "tasks": [
        {
          "id": "ai-w17-ai-system-design-1",
          "category": "AI System Design",
          "title": "Study collaborative filtering vs content-based recommendation",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Recommendation systems",
              "url": "https://developers.google.com/machine-learning/recommendation"
            }
          ]
        },
        {
          "id": "ai-w17-ai-fundamentals-1",
          "category": "AI Fundamentals",
          "title": "Learn how to handle cold-start users and items",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Cold start problem",
              "url": "https://towardsdatascience.com/the-cold-start-problem-in-recommender-systems-7ae73fe1866e"
            }
          ]
        },
        {
          "id": "ai-w17-ai-system-design-2",
          "category": "AI System Design",
          "title": "Sketch a simple architecture for a personalized recommendation feature",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Recommendation architecture",
              "url": "https://aws.amazon.com/big-data/digital-recommendations/"
            }
          ]
        },
        {
          "id": "ai-w17-ai-system-design-3",
          "category": "AI System Design",
          "title": "Practice explaining evaluation metrics for recommender systems",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Recommender metrics",
              "url": "https://developers.google.com/machine-learning/recommendation/metrics"
            }
          ]
        }
      ]
    },
    {
      "number": 18,
      "theme": "Search and assistant design",
      "outcome": "Practice AI system design and feature thinking with interview-friendly case studies and short design exercises.",
      "resources": [
        {
          "label": "Pinecone semantic search",
          "url": "https://www.pinecone.io/learn/semantic-search/"
        },
        {
          "label": "O'Reilly AI systems",
          "url": "https://www.oreilly.com/library/view/architecting-ai-systems/9781492061444/"
        }
      ],
      "tasks": [
        {
          "id": "ai-w18-ai-system-design-1",
          "category": "AI System Design",
          "title": "Study how to build an AI search assistant with retrieval and ranking",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "AI search architecture",
              "url": "https://www.pinecone.io/learn/semantic-search/"
            }
          ]
        },
        {
          "id": "ai-w18-ai-system-design-2",
          "category": "AI System Design",
          "title": "Learn the difference between keyword search and semantic search",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Semantic search",
              "url": "https://www.pinecone.io/learn/semantic-search/"
            }
          ]
        },
        {
          "id": "ai-w18-ai-system-design-3",
          "category": "AI System Design",
          "title": "Review one example of a chat assistant architecture",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Chat assistant design",
              "url": "https://www.oreilly.com/library/view/architecting-ai-systems/9781492061444/"
            }
          ]
        },
        {
          "id": "ai-w18-ai-system-design-4",
          "category": "AI System Design",
          "title": "Practice explaining tradeoffs between open-domain and closed-domain assistants",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Open vs closed domain",
              "url": "https://blog.pinecone.io/semantic-search/"
            }
          ]
        }
      ]
    },
    {
      "number": 19,
      "theme": "Computer vision and multimodal AI features",
      "outcome": "Practice AI system design and feature thinking with interview-friendly case studies and short design exercises.",
      "resources": [
        {
          "label": "fast.ai",
          "url": "https://www.fast.ai/"
        },
        {
          "label": "TensorFlow image captioning",
          "url": "https://www.tensorflow.org/tutorials/text/image_captioning"
        }
      ],
      "tasks": [
        {
          "id": "ai-w19-ml-engineering-1",
          "category": "ML Engineering",
          "title": "Learn the components of a vision pipeline",
          "detail": "data, model, inference",
          "links": [
            {
              "t": "ref",
              "label": "Vision pipeline basics",
              "url": "https://www.fast.ai/"
            }
          ]
        },
        {
          "id": "ai-w19-ai-fundamentals-1",
          "category": "AI Fundamentals",
          "title": "Study a short example of image captioning or object detection",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Image captioning overview",
              "url": "https://www.tensorflow.org/tutorials/text/image_captioning"
            }
          ]
        },
        {
          "id": "ai-w19-ai-system-design-1",
          "category": "AI System Design",
          "title": "Review how to integrate vision models into a product feature",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Vision product design",
              "url": "https://www.oreilly.com/radar/how-to-build-computer-vision-applications/"
            }
          ]
        },
        {
          "id": "ai-w19-ai-fundamentals-2",
          "category": "AI Fundamentals",
          "title": "Practice explaining a multimodal feature in simple, interview-friendly terms",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Multimodal AI primer",
              "url": "https://ai.googleblog.com/2022/05/bert-multimodal.html"
            }
          ]
        }
      ]
    },
    {
      "number": 20,
      "theme": "AI product and roadmap thinking",
      "outcome": "Practice AI system design and feature thinking with interview-friendly case studies and short design exercises.",
      "resources": [
        {
          "label": "McKinsey AI product",
          "url": "https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/building-ai-powered-products"
        },
        {
          "label": "HBR AI article",
          "url": "https://hbr.org/2021/07/what-every-leader-needs-to-know-about-ai"
        }
      ],
      "tasks": [
        {
          "id": "ai-w20-ai-fundamentals-1",
          "category": "AI Fundamentals",
          "title": "Learn how to prioritize AI features for impact, cost, and reliability",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "AI product strategy",
              "url": "https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/building-ai-powered-products"
            }
          ]
        },
        {
          "id": "ai-w20-ai-system-design-1",
          "category": "AI System Design",
          "title": "Study a short case on an AI product launch or iteration",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "AI product case study",
              "url": "https://hbr.org/2021/07/what-every-leader-needs-to-know-about-ai"
            }
          ]
        },
        {
          "id": "ai-w20-ai-fundamentals-2",
          "category": "AI Fundamentals",
          "title": "Practice framing the value and risks of a proposed AI feature",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "AI tradeoff thinking",
              "url": "https://www.mckinsey.com/business-functions/mckinsey-analytics/our-insights/what-is-generative-ai"
            }
          ]
        },
        {
          "id": "ai-w20-ai-fundamentals-3",
          "category": "AI Fundamentals",
          "title": "Sketch a one-page plan for an AI feature, focusing on safety and metrics",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "AI metrics primer",
              "url": "https://developers.google.com/machine-learning/crash-course/validation/metrics"
            }
          ]
        }
      ]
    },
    {
      "number": 21,
      "theme": "AI project review and resume bullets",
      "outcome": "Turn your AI knowledge into interview-ready answers, resume bullets, and product-quality tradeoffs.",
      "resources": [
        {
          "label": "The Muse resume tips",
          "url": "https://www.themuse.com/advice/resume-accomplishments"
        },
        {
          "label": "BuiltIn AI questions",
          "url": "https://builtin.com/artificial-intelligence/ai-interview-questions"
        }
      ],
      "tasks": [
        {
          "id": "ai-w21-ai-fundamentals-1",
          "category": "AI Fundamentals",
          "title": "Pick one AI-related project or case you can explain clearly",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Technical resume guide",
              "url": "https://www.hirevue.com/blog/technical-resume"
            }
          ]
        },
        {
          "id": "ai-w21-ai-fundamentals-2",
          "category": "AI Fundamentals",
          "title": "Write 2–3 resume bullets with metrics for that project",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Resume metrics tips",
              "url": "https://www.themuse.com/advice/resume-accomplishments"
            }
          ]
        },
        {
          "id": "ai-w21-ai-fundamentals-3",
          "category": "AI Fundamentals",
          "title": "Practice a concise two-minute explanation of the system and tradeoffs",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Explain technical work",
              "url": "https://www.kickresume.com/en/help/describe-how-you-solved-a-problem/"
            }
          ]
        },
        {
          "id": "ai-w21-ai-fundamentals-4",
          "category": "AI Fundamentals",
          "title": "Review one AI interview question and draft a strong answer",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "AI interview questions",
              "url": "https://builtin.com/artificial-intelligence/ai-interview-questions"
            }
          ]
        }
      ]
    },
    {
      "number": 22,
      "theme": "Explainability and tradeoffs",
      "outcome": "Turn your AI knowledge into interview-ready answers, resume bullets, and product-quality tradeoffs.",
      "resources": [
        {
          "label": "Pinecone AI tradeoffs",
          "url": "https://www.pinecone.io/learn/tradeoffs-in-ai-systems/"
        },
        {
          "label": "O'Reilly AI systems",
          "url": "https://www.oreilly.com/library/view/architecting-ai-systems/9781492061444/"
        }
      ],
      "tasks": [
        {
          "id": "ai-w22-ai-fundamentals-1",
          "category": "AI Fundamentals",
          "title": "Review how to compare accuracy, latency, cost, and robustness",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "AI tradeoffs primer",
              "url": "https://www.pinecone.io/learn/tradeoffs-in-ai-systems/"
            }
          ]
        },
        {
          "id": "ai-w22-ai-fundamentals-2",
          "category": "AI Fundamentals",
          "title": "Study a short example of an engineering tradeoff in AI model choice",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Model tradeoffs",
              "url": "https://towardsdatascience.com/choosing-the-right-machine-learning-model-1d69f76d5ed4"
            }
          ]
        },
        {
          "id": "ai-w22-ai-fundamentals-3",
          "category": "AI Fundamentals",
          "title": "Practice answering",
          "detail": "when would you use a smaller model over a larger one?",
          "links": [
            {
              "t": "ref",
              "label": "Model size tradeoffs",
              "url": "https://arxiv.org/abs/2203.02155"
            }
          ]
        },
        {
          "id": "ai-w22-generative-ai-1",
          "category": "Generative AI",
          "title": "Write a two-paragraph tradeoff summary for a hypothetical AI feature",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "AI system tradeoffs",
              "url": "https://www.oreilly.com/library/view/architecting-ai-systems/9781492061444/"
            }
          ]
        }
      ]
    },
    {
      "number": 23,
      "theme": "Behavioral and ethics for AI engineers",
      "outcome": "Turn your AI knowledge into interview-ready answers, resume bullets, and product-quality tradeoffs.",
      "resources": [
        {
          "label": "Indeed STAR guide",
          "url": "https://www.indeed.com/career-advice/interviewing/how-to-use-the-star-interview-response-technique"
        },
        {
          "label": "Microsoft Responsible AI",
          "url": "https://www.microsoft.com/en-us/ai/responsible-ai"
        }
      ],
      "tasks": [
        {
          "id": "ai-w23-ai-fundamentals-1",
          "category": "AI Fundamentals",
          "title": "Prepare two STAR stories showing AI leadership, ownership, or system reliability",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "STAR method guide",
              "url": "https://www.indeed.com/career-advice/interviewing/how-to-use-the-star-interview-response-technique"
            }
          ]
        },
        {
          "id": "ai-w23-responsible-ai-1",
          "category": "Responsible AI",
          "title": "Learn how to talk about ethical AI tradeoffs and bias mitigation",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "AI ethics interview guide",
              "url": "https://www.microsoft.com/en-us/research/blog/the-journey-toward-responsible-ai/"
            }
          ]
        },
        {
          "id": "ai-w23-responsible-ai-2",
          "category": "Responsible AI",
          "title": "Review one real-world example of AI ethics in product design",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "AI ethics case",
              "url": "https://www.nature.com/articles/d41586-019-03228-6"
            }
          ]
        },
        {
          "id": "ai-w23-responsible-ai-3",
          "category": "Responsible AI",
          "title": "Practice delivering a short answer on how you would ensure a model is fair and safe",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Responsible AI blog",
              "url": "https://www.microsoft.com/en-us/ai/responsible-ai"
            }
          ]
        }
      ]
    },
    {
      "number": 24,
      "theme": "Spotlight AI prep and review",
      "outcome": "Turn your AI knowledge into interview-ready answers, resume bullets, and product-quality tradeoffs.",
      "resources": [
        {
          "label": "Coursera AI interview",
          "url": "https://www.coursera.org/articles/ai-interview"
        },
        {
          "label": "Fast.ai",
          "url": "https://www.fast.ai/"
        }
      ],
      "tasks": [
        {
          "id": "ai-w24-ai-fundamentals-1",
          "category": "AI Fundamentals",
          "title": "Review the strongest AI details from the past 5 months",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "AI learning checklist",
              "url": "https://www.coursera.org/articles/ai-interview"
            }
          ]
        },
        {
          "id": "ai-w24-ai-fundamentals-2",
          "category": "AI Fundamentals",
          "title": "Identify your top 3 AI stories or project highlights for interviews",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "Interview story tips",
              "url": "https://www.themuse.com/advice/interview-questions-about-your-background"
            }
          ]
        },
        {
          "id": "ai-w24-ai-system-design-1",
          "category": "AI System Design",
          "title": "Practice one short system-design answer for an AI product feature",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "System design prep",
              "url": "https://www.educative.io/courses/grokking-the-system-design-interview"
            }
          ]
        },
        {
          "id": "ai-w24-ai-fundamentals-3",
          "category": "AI Fundamentals",
          "title": "Plan a simple follow-up learning path after these 6 months",
          "detail": "",
          "links": [
            {
              "t": "ref",
              "label": "AI learning roadmap",
              "url": "https://www.fast.ai/"
            }
          ]
        }
      ]
    }
  ]
};
