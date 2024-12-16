import type { Meta, StoryObj } from '@storybook/react';
import { Home } from '../../pages/home/Home';

const meta: Meta<typeof Home> = {
    component: Home
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {}
};
