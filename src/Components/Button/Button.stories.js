import Button from './Button';

export default {
    title: 'Button',
    component: Button,
}

const Template = (args) => <Button {...args} />

const Props = {
    text: 'Text',
    onClick: () => console.log('test'),
    theme: 'primary',
}

export const Primary = Template.bind({});

Primary.args = {
    ...Props,
    theme: 'primary',
}

export const Secondary = Template.bind({});

Secondary.args = {
    ...Props,
    theme: 'secondary',
}
