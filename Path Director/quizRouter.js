const express = require('express');
const router= express.Router();
const { createQuiz, assessment,getAssessmentData, getAllQuiz, getQuizById, getQuizByUserId, getTrendingQuiz, deleteQuiz, getQuizDetails } =  require('../controller/quizController');
const  {isAuth}  = require('../middleware/authMiddleware');

// Quizzes
router.route("/createQuiz").post(isAuth,createQuiz);
router.get("/getAllQuizzes",isAuth,getAllQuiz);
router.get("/getQuizById/:quizId",getQuizById);
router.get("/getQuizByUserId/:userId", isAuth,getQuizByUserId);
router.get("/getTrendingQuizzes",isAuth,getTrendingQuiz);
router.delete("/deleteQuizById/:quizId",isAuth,deleteQuiz);
router.get("/getQuizDetails",isAuth, getQuizDetails);
router.post("/assessment", assessment);
router.post("/getAssessmentDetails",isAuth,getAssessmentData);
module.exports=router;