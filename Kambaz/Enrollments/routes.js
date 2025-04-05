import * as enrollmentsDao from "./dao.js";
export default function EnrollmentRoutes(app) {
    app.get("/api/enrollments/user/:userId", (req, res) => {
        const { userId } = req.params;
        const enrollments = enrollmentsDao.findEnrollmentsForUser(userId);
        res.json(enrollments);
    });

    app.post("/api/enrollments/user/:userId/course/:courseId", (req, res) => {
        const { userId, courseId } = req.params;
        const enrollments = enrollmentsDao.enrollUserInCourse(userId, courseId);
        res.json(enrollments);
    })

    app.delete("/api/enrollments/user/:userId/course/:courseId", (req, res) => {
        const { userId, courseId } = req.params;
        const result = enrollmentsDao.unenrollUserFromCourse(userId, courseId);
        res.json(result);
    });
}