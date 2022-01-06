import { Meta } from '@storybook/react';
import StepItem, { StepItemProps } from '../../../../components/molcules/StepItem';

export default {
  title: 'Components/Molcules/StepItem',
  component: StepItem,
} as Meta;

const Template = (args: StepItemProps) => <StepItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  icon: '/icon/step-1.svg',
  title: '1. Start',
  desc1: 'Pilih salah satu game',
  desc2: 'yang ingin kamu top up',
}
