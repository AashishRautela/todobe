import Todo from "../models/todo.js";

export const createTodo = async (req, res, next) => {
    try {
        const { title, description } = req.body;

        if (!title || !description) {
            return res.status(400).send({
                success: false,
                message: "Title and description are required."
            });
        }

        const todo = new Todo({ title, description });
        await todo.save();

        if (todo) {
            return res.status(201).send({
                success: true,
                message: "Todo created successfully.",
                data: todo
            });
        } else {
            const error = new Error("Error while creating todo");
            error.code = 500;
            throw error;
        }
    } catch (error) {
        return res.status(error.code || 500).send({
            success: false,
            message: error.message || "Internal Server Error"
        });
    }
};

export const editTodo = async (req, res, next) => {
    try {
        const { title, description, _id } = req.body;

        if (!title || !description) {
            return res.status(400).send({
                success: false,
                message: "Title and description are required."
            });
        }

        const updatedTodo = await Todo.findByIdAndUpdate(
            _id,
            { title, description },
            { new: true, runValidators: true }
        );

        if (!updatedTodo) {
            return res.status(404).send({
                success: false,
                message: "Todo not found."
            });
        }

        return res.status(200).send({
            success: true,
            message: "Todo updated successfully.",
            data: updatedTodo
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Server error. Please try again."
        });
    }
};

export const deleteTodo = async (req, res, next) => {
    try {
        const { _id } = req.body;

        if (!_id) {
            return res.status(400).send({
                success: false,
                message: "Todo ID is required."
            });
        }

        const deletedTodo = await Todo.findByIdAndDelete(_id);

        if (!deletedTodo) {
            return res.status(404).send({
                success: false,
                message: "Todo not found."
            });
        }

        return res.status(200).send({
            success: true,
            message: "Todo deleted successfully.",
            data: deletedTodo
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Server error. Please try again."
        });
    }
};

export const getAllTodos = async (req, res, next) => {
    try {
        const todos = await Todo.find();

        return res.status(200).send({
            success: true,
            message: "Todos fetched successfully.",
            data: todos
        });
    } catch (error) {
        return res.status(500).send({
            success: false,
            message: "Server error. Please try again."
        });
    }
};
