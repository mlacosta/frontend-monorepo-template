import type { Meta, StoryObj } from '@storybook/react';
import { ExampleButton } from "@repo/ui";

const meta: Meta<typeof ExampleButton> = {
    component: ExampleButton,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        appName: 'Button',
        children: 'I am a primary button.',
    },
};