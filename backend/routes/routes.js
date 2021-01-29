import express from "express";
 
// import function from controller
import { showProducts, showProductById, createProduct, updateProduct, deleteProduct } from "../controllers/product.js";
 
// init express router
const router = express.Router();
 
// Get All Product
router.get('/products', showProducts);
 
// Get Single Product
router.get('/products/:id', showProductById);
 
// Create New Product
router.post('/products', createProduct);
 
// Update Product
router.put('/products/:id', updateProduct);
 
// Delete Product
router.delete('/products/:id', deleteProduct);
 
// export default router
export default router;




// // import express
// import express from "express";
 
// // import function from controller
// import { showEmployee, createEmployee,showEmployeeById,updateEmployee,deleteEmployee } from "../controllers/product.js";

 
// // init express router
// const router = express.Router();
 
// // Get All Employee
// router.get('/employee', showEmployee);
 
// // Get Single Employee
// router.get('/employee/:id',showEmployeeById);
 
// // Create New Employee
// router.post('/employee', createEmployee);
 
// // Update Employee
// router.put('/employee/:id', updateEmployee);

// // Delete Employee
// router.delete('/employee/:id',deleteEmployee);
 
// // export default router
// export default router;