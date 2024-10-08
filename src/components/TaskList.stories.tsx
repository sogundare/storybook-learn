import { Meta, StoryObj } from "@storybook/react";
import TaskList from "./TaskList";
import { fn } from "@storybook/test";
import { TaskState } from "./ui/Task";

export const ActionsData = {
    onPinTask: fn(),
    onArchiveTask: fn()
}

const meta: Meta<typeof TaskList> = {
    title: 'Task/TaskList',
    component: TaskList,
    tags: ['autodocs'],
    //👇 Our exports that end in "Data"(ActionsData) are not stories.
    excludeStories: /.*Data$/,
    decorators: [
        (story) => (
            <div className="bg-blue-400 p-8">
                {story()}
            </div>
        )
    ],
    args: {
        ...ActionsData
    }
};

export default meta;

type Story = StoryObj<typeof TaskList>;

export const Tasks: Story = {
    args: {}
};