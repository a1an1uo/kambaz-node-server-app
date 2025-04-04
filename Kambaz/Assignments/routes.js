import * as assignmentsDao from "./dao.js";
export default function AssignmentRoutes(app) {
    app.put("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const assignmentUpdates = req.body;
        try {
            const status = await assignmentsDao.updateAssignment(assignmentId, assignmentUpdates);
            res.sendStatus(204);  // Successful update with no content to return
        } catch (error) {
            res.status(500).send({ message: "Error updating assignment", error: error.message });
        }
    });

    app.delete("/api/assignments/:assignmentId", async (req, res) => {
        const { assignmentId } = req.params;
        const status = await assignmentsDao.deleteAssignment(assignmentId);
        res.send(status);
    });
}