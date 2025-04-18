import Database from "../Database/index.js";
import { v4 as uuidv4 } from "uuid";
export function findEnrollmentsForUser(userId) {
    const { enrollments } = Database;
    return enrollments.filter((enrollment) => enrollment.user === userId);
}

export function enrollUserInCourse(userId, courseId) {
    const { enrollments } = Database;
    enrollments.push({ _id: uuidv4(), user: userId, course: courseId });
    console.log(enrollments)
}

export function unenrollUserFromCourse(userId, courseId) {
    const { enrollments } = Database;
    const initialLength = enrollments.length;

    Database.enrollments = enrollments.filter(
        (enrollment) =>
            !(enrollment.user === userId && enrollment.course === courseId)
    );

    return { deletedCount: initialLength - Database.enrollments.length };
}
