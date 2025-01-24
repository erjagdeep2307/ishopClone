const assert = require('assert');
const categoryController = require('../path/to/categoryController');

describe('Category Controller', () => {
    it('should return all categories', () => {
        const result = categoryController.getAllCategories();
        assert(Array.isArray(result));
    });

    it('should add a new category', () => {
        const initialCount = categoryController.getAllCategories().length;
        categoryController.addCategory('New Category');
        const newCount = categoryController.getAllCategories().length;
        assert.strictEqual(newCount, initialCount + 1);
    });

    it('should delete a category', () => {
        categoryController.addCategory('Category to delete');
        const initialCount = categoryController.getAllCategories().length;
        categoryController.deleteCategory('Category to delete');
        const newCount = categoryController.getAllCategories().length;
        assert.strictEqual(newCount, initialCount - 1);
    });
});