import asyncHandler from 'express-async-handler';
import Item from '../models/itemModel.js';

const getItems = asyncHandler(async (req, res) => {
    const items = await Item.find({})
    res.status(200).json(items)
})

const setItem = asyncHandler(async (req, res) => {
    const { name, unit, impa } = req.body;

    const item = await Item.create({
        name,
        unit,
        impa,
    })

    res.status(200).json(item)
})

const updateItem = asyncHandler(async (req, res) => {
    const item = await Item.findById(req.params.id)

    if (!item) {
        res.status(400)
        throw new Error('Item not found')
    }

    const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    })

    res.status(200).json(updatedItem)
})

const deleteItem = asyncHandler(async (req, res) => {
    const item = await Item.findById(req.params.id)

    if (!item) {
        res.status(400)
        throw new Error('Item not found')
    }

    await item.deleteOne()

    res.status(200).json({ message: "Delete data success", id: req.params.id })
})

export {
    getItems,
    setItem,
    updateItem,
    deleteItem,
};