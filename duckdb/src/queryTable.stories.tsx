// duckdb/src/queryTable.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { queryDuckDBCallbackMessage } from './queryTable';
import { initDuckDB, db} from './query';
import * as duckdb from '@duckdb/duckdb-wasm';
import { ThemeProvider } from 'next-themes';

// init duckdb
await initDuckDB();

const meta: Meta = {
  title: 'Components/QueryDuckDBComponent',
  component: queryDuckDBCallbackMessage,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'light';
      return (
        <ThemeProvider
          attribute="class"
          forcedTheme={theme}
          enableSystem={false}
        >
          <Story />
        </ThemeProvider>
      );
    },
  ],
};

export default meta;
type Story = StoryObj<typeof queryDuckDBCallbackMessage>;

// Sample data for the stories
const sampleData = {
  columnData: {
    id: [1, 2, 3, 4, 5],
    name: ['Alice', 'Bob', 'Charlie', 'David', 'Eve'],
    age: [25, 30, 35, 28, 32],
    score: [85.5, 92.3, 78.9, 88.7, 95.2],
  },
  variableNames: ['id', 'name', 'age', 'score'],
  datasetName: 'sample_dataset',
  sql: 'SELECT * FROM sample_table',
  dbTableName: 'sample_table',
  db: db
};

export const Default: Story = {
  args: {
    output: {
      type: 'function',
      name: 'queryDuckDB',
      result: true,
      data: sampleData,
    },
  },
};

export const WithError: Story = {
  args: {
    output: {
      type: 'function',
      name: 'queryDuckDB',
      result: true,
      data: {
        ...sampleData,
        db: {} as duckdb.AsyncDuckDB,
      },
    },
  },
};

export const EmptyData: Story = {
  args: {
    output: {
      type: 'function',
      name: 'queryDuckDB',
      result: true,
      data: {
        ...sampleData,
        columnData: {},
        variableNames: [],
      },
    },
  },
};

export const LargeDataset: Story = {
  args: {
    output: {
      type: 'function',
      name: 'queryDuckDB',
      result: true,
      data: {
        ...sampleData,
        columnData: {
          id: Array.from({ length: 100 }, (_, i) => i + 1),
          name: Array.from({ length: 100 }, (_, i) => `User ${i + 1}`),
          age: Array.from({ length: 100 }, () =>
            Math.floor(Math.random() * 50 + 20)
          ),
          score: Array.from({ length: 100 }, () => Math.random() * 100),
        },
      },
    },
  },
};

export const CustomColumns: Story = {
  args: {
    output: {
      type: 'function',
      name: 'queryDuckDB',
      result: true,
      data: {
        ...sampleData,
        columnData: {
          product_id: [1, 2, 3],
          product_name: ['Laptop', 'Phone', 'Tablet'],
          price: [999.99, 699.99, 499.99],
          in_stock: [true, false, true],
        },
        variableNames: ['product_id', 'product_name', 'price', 'in_stock'],
      },
    },
  },
};
