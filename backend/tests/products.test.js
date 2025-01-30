const request = require("supertest");
const app = require("../server");

describe("API Products", () => {
    it("I should obtain all the products", async () => {
        const res = await request(app).get("/api/products");
        expect(res.statusCode).toBe(200);
        expect(res.body).toBeInstanceOf(Array);
    });
});

