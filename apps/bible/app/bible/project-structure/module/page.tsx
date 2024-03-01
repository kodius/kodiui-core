import { Stack } from "@/components/primitives/stack";
import { Todo, todo } from "@/module/todo";

const ProjectStructureModulePage = () => {
  const todoProps: Todo = {
    todo: "todo 1",
    id: 0,
    userId: 0,
    completed: false,
  };
  return (
    <Stack>
      <todo.components.TodoCard {...todoProps} />
      <todo.components.FetchTodos />
      <todo.components.LargeImage />
    </Stack>
  );
};

export default ProjectStructureModulePage;
