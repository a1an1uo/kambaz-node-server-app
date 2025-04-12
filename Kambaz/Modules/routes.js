import * as modulesDao from "./dao.js";
export default function ModuleRoutes(app) {
    app.put("/api/modules/:moduleId", async (req, res) => {
        const { moduleId } = req.params;
        const moduleUpdates = req.body;
        try {
            const status = await modulesDao.updateModule(moduleId, moduleUpdates);
            res.sendStatus(204);  // Successful update with no content to return
        } catch (error) {
            res.status(500).send({ message: "Error updating module", error: error.message });
        }
    });

    app.delete("/api/modules/:moduleId", async (req, res) => {
        const { moduleId } = req.params;
        const status = await modulesDao.deleteModule(moduleId);
        res.send(status);
    });

}

