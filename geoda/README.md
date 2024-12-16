# Geoda addon for react-ai-assist

This addon provides a way to do spatial data analysis using GeoDa library via the Ai assistant chat interface in react-ai-assist.

## Installation

```bash
yarn add react-ai-assist
yarn add @ai-assist/geoda
yarn add geoda
```

## Usage

```tsx
import { AiAssistant } from 'react-ai-assist';
import { dataClassifyCallbackFunction } from '@ai-assist/geoda';

const myFunctions = [
  ...otherFunctions,
  dataClassifyCallbackFunction({
    getValues: (datasetName: string, variableName: string) => {
      // get the values of the variable from the dataset,
      // the values will be used to create and plot the histogram
      return [];
    }
  }),
];

<AiAssistant
  provider="openai"
  model="gpt-4o"
  apiKey="your-api-key"
  name="My AI Assistant"
  version="1.0.0"
  functions={myFunctions}
/>
```

With the above code, the AI assistant will be able to classify the data into k bins or classes using the values returned by the `getValues` function. Users can prompt the AI assistant to classify the data into k bins or classes by asking it to classify the data of a variable.

For example:

```
Classify the data of population into 5 classes using the natural breaksmethod.
```

The Ai assistant will use this addons to classify the data of population into 5 classes using the natural breaksmethod and the LLM will return the break points to the user.

