# GrowthOps AI Assistant - Agent Specification

This document defines the purpose, capabilities, and behavior of the GrowthOps AI Assistant.

## 1. Purpose

The GrowthOps AI Assistant is an embedded AI designed to help CEOs, founders, and leadership teams onboard to the platform, interpret data, and identify strategic next actions.

## 2. Capabilities

The assistant has the following capabilities:

- **Onboarding:** Guide new users through the platform's features.
- **Data Interpretation:** Analyze KPI data and identify trends, anomalies, and insights.
- **Strategic Suggestions:** Recommend relevant templates and actions based on user goals and data.
- **Q&A:** Answer user questions about the platform and business strategy.

## 3. Input/Output Format

The assistant interacts with the user through a structured JSON format.

### Input Schema:

```json
{
  "sessionId": "string",
  "userId": "string",
  "tenantId": "string",
  "query": "string",
  "context": {
    "currentPage": "string",
    "kpiData": "object"
  }
}
```

### Output Schema:

```json
{
  "response": "string",
  "suggestedActions": [
    {
      "action": "string",
      "payload": "object"
    }
  ]
}
```

## 4. Behavior & Control Flow

The AI assistant is composed of a multi-agent system, where each agent has a specific role. The workflow is orchestrated as follows:

1.  **Routing Agent:**
    -   **Purpose:** The first point of contact. It analyzes the user's query and routes it to the appropriate specialized agent.
    -   **Tools:** None.
    -   **Hand-off:** Passes the query and context to one of the specialized agents.

2.  **Onboarding Agent:**
    -   **Purpose:** Handles queries related to platform features and onboarding.
    -   **Tools:** Access to a knowledge base of platform documentation.
    -   **Hand-off:** Returns a response and suggested actions to the user.

3.  **Data Analysis Agent:**
    -   **Purpose:** Analyzes KPI data to identify trends and insights.
    -   **Tools:**
        -   `getKPIData(tenantId, kpiIds)`: Fetches KPI data from the database.
        -   `runScenario(kpiData, assumptions)`: Runs a scenario model.
    -   **Hand-off:** Passes its analysis to the Strategy Agent.

4.  **Strategy Agent:**
    -   **Purpose:** Recommends strategic actions and templates based on the data analysis.
    -   **Tools:**
        -   `getTemplateLibrary()`: Fetches the list of available templates.
    -   **Hand-off:** Returns a response and suggested actions to the user.

## 5. Example Interactions

### Example 1: Onboarding Question

-   **User Query:** "How do I create a new dashboard?"
-   **Routing Agent:** Routes to the Onboarding Agent.
-   **Onboarding Agent:** "You can create a new dashboard by navigating to the 'Dashboards' page and clicking the 'New Dashboard' button. Would you like me to guide you there?"
-   **Output:**
    ```json
    {
      "response": "You can create a new dashboard by navigating to the 'Dashboards' page and clicking the 'New Dashboard' button. Would you like me to guide you there?",
      "suggestedActions": [
        {
          "action": "navigate",
          "payload": { "page": "/dashboards" }
        }
      ]
    }
    ```

### Example 2: Data Interpretation

-   **User Query:** "Why is our churn rate increasing?"
-   **Routing Agent:** Routes to the Data Analysis Agent.
-   **Data Analysis Agent:** Fetches churn data and identifies a correlation with a recent price change. Passes this analysis to the Strategy Agent.
-   **Strategy Agent:** "I've noticed a correlation between the recent price change and the increase in churn. I recommend using the 'Churn Analysis' template to dig deeper into the root causes."
-   **Output:**
    ```json
    {
      "response": "I've noticed a correlation between the recent price change and the increase in churn. I recommend using the 'Churn Analysis' template to dig deeper into the root causes.",
      "suggestedActions": [
        {
          "action": "startTemplate",
          "payload": { "templateId": "churn-analysis" }
        }
      ]
    }
    ```
