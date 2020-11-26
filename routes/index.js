import { Router } from 'express';
import { postRecipe, getAllRecipes, getRecipe, putRecipe, deleteRecipe } from '../controllers/MenuController';
import { postPlan, getPlans, putPlan, getRecipesFromDietAndServings, deletePlan, getPlanMenu, getRecipesFromPlan, storeMenu } from '../controllers/PricingController';
import { postDiet, getAllDiet, putDiet, deleteDiet } from '../controllers/DietController';
import {
  registerUser, login,
  logout, verifyToken, registerAdmin, adminLogin, findAdmin,
  putAdmin
} from '../controllers/AuthController';
import {
  getProfile, getUserPlan,
  choosePlan, getPlanInstance, setDeliveryInfo,
  getSelectedRecipes, selectRecipe,
  getUsers
} from '../controllers/UserController';
import { 
  postWeeklySelection, 
  getAllWeeklySelections,
  getweeklySelectionByDate,
  updateWeeklyCollection
} from '../controllers/WeeklySelectionController';

const router = Router();

// home route
// router.get('/', (req, res) => res.json({ message: 'This is Daily Recipe!!!' }));

// auth routes
router.post('/api/auth/adminRegister', registerAdmin);
router.post('/api/auth/register', registerUser);
router.post('/api/auth/adminLogin', adminLogin);
router.post('/api/auth/login', login);
router.get('/api/auth/logout', logout);
router.get('/api/auth/admin/:id', findAdmin);
router.put('/api/auth/admin/:id', putAdmin);

// menu routes
router.put('/api/menu/:id', putRecipe);
router.get('/api/menu/:id', getRecipe);
router.delete('/api/menu/:id', deleteRecipe);
router.post('/api/menu', postRecipe);
router.get('/api/menu', getAllRecipes);

// plans route
router.get('/api/plan/:diet/:servings', getRecipesFromDietAndServings);
router.put('/api/plan/menu', storeMenu);
router.put('/api/plan/:id', putPlan);
router.delete('/api/plan/:id', deletePlan);
router.get('/api/plan/:id', getRecipesFromPlan);
router.post('/api/plans', postPlan);
router.get('/api/plans', getPlans);

// diet route
router.put('/api/diet/:id', putDiet);
router.delete('/api/diet/:id', deleteDiet);
router.post('/api/diet', postDiet);
router.get('/api/diet', getAllDiet);

// weekly selection routes
router.post('/api/weekly', postWeeklySelection);
router.get('/api/weekly', getAllWeeklySelections);
router.get('/api/weekly/date/:startDate/:endDate', getweeklySelectionByDate);
router.put('/api/weekly', updateWeeklyCollection);

// api user routes
router.get('/api/users', getUsers);

// user routes
router.use('/users', verifyToken);
router.get('/users/profile', getProfile);
router.get('/users/plan', getUserPlan);
router.get('/users/planInstance', getPlanInstance);
router.get('/users/recipes', getSelectedRecipes);
router.put('/users/recipes', selectRecipe);
router.post('/users/delivery', setDeliveryInfo);
router.post('/users/plan', choosePlan);

export default router;
