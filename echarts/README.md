# eCharts addon for react-ai-assist

This addon provides a way to plot different types of charts using eCharts library via the Ai assistant chat interface in react-ai-assist.

## Installation

This addon depends on the following packages:
- echarts
- react-ai-assist
- tailwindcss

If you are using tailwindcss, you can install the addon by running:

```bash
yarn add react-ai-assist @ai-assist/echarts echarts
```

Then, you need to add the following to your tailwind.config.js file:

```js
   content: [
     ...,
     './node_modules/@ai-assist/echarts/dist/**/*.{js,ts,jsx,tsx}',
   ]
```

If you are not using tailwindcss, you can install the addon by running:

```bash
yarn add react-ai-assist @ai-assist/echarts echarts
```

Then, you need to add the following to import the css file:

```tsx
import '@ai-assist/echarts/dist/index.css';
```

## Usage

```tsx
import { AiAssistant } from 'react-ai-assist';
import { histogramFunctionDefinition, GetValues } from '@ai-assist/echarts';

const myFunctions = [
  ...otherFunctions,
  histogramFunctionDefinition({
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

With the above code, the AI assistant will be able to plot a histogram chart using the values returned by the `getValues` function. Users can prompt the AI assistant to plot a histogram chart by asking it to plot the histogram of a variable.

For example:

```
Plot the histogram of the variable "age" in the dataset "my_dataset".
```

