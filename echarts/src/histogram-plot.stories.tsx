import type { Meta, StoryObj } from '@storybook/react';
import { HistogramComponent, ResizablePlotContainer } from './histogram-plot';
import { ThemeProvider } from 'next-themes';


const meta: Meta<typeof HistogramComponent> = {
  title: 'Charts/Histogram',
  component: HistogramComponent,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story, context) => {
      // Get the current theme from Storybook's context
      const theme = context.globals.theme || 'light'; // 'light' or 'dark'
      console.log('theme', theme);

      return (
        <ThemeProvider
          attribute="class"
          forcedTheme={theme}
          enableSystem={false}
        >
          <div className="histogram-wrapper w-80 h-80">
            <ResizablePlotContainer>
              <Story />
            </ResizablePlotContainer>
          </div>
        </ThemeProvider>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof HistogramComponent>;

const sampleData = {
  type: 'function',
  name: 'histogram',
  result: 'success',
  data: {
    variableName: 'Sample Histogram',
    histogramData: [
      { bin: 0, binStart: 0, binEnd: 10 },
      { bin: 1, binStart: 10, binEnd: 20 },
      { bin: 2, binStart: 20, binEnd: 30 },
    ],
    barDataIndexes: [
      [1, 2],
      [3, 4, 5],
      [6, 7, 8, 9],
    ],
    datasetName: 'sample',
    onSelected: (datasetName: string, indexes: number[]) => {
      console.log('Selected:', datasetName, indexes);
    },
  },
};

export const Default: Story = {
  args: {
    output: sampleData,
  },
};
