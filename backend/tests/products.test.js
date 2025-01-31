const request = require("supertest");
const app = require("../server");
const mongoose = require("mongoose");

describe("API Products", () => {
    afterAll(async () => {
        await mongoose.connection.close();
    });

    it("should return all products", async () => {
       const res = await request(app).get("/api/products");
       expect(res.statusCode).toBe(200);
       expect(Array.isArray(res.body).toBe(true));
    });

    it("should create a new product", async () => {
        const newProduct = {
            name: "Test Product",
            description: "A test product",
            price: 100,
            category: "Clothing",
            imageUrl: ""
        };

        const res = await request(app)
            .post("/api/products")
            .send(newProduct);

        expect(res.statusCode).toBe(201);
        expect(res.body.name).toBe(newProduct.name);
        });

        it("should update a product", async () => {
            //firs we create a product to update
            const product = (await request(app).post("/api/products")).send({
                name: "Test Product",
                description: "A test product",
                price: 100,
                category: "Clothing",
                imageUrl: ""
            });

            const productId = product.body._id;

            const updatedProduct = {
                name: "Updated Product",
                description: "An updated product",
                price: 200,
                category: "Clothing",
                imageUrl: ""
            };

            const res = await request(app)
                .put(`/api/products/${productId}`)
                .send(updatedProduct);

            expect(res.statusCode).toBe(200);
            expect(res.body.name).toBe(updatedProduct.name);
        });

        it("should delete a product", async () => {
            //first we create a product to delete
            const product = (await request(app).post("/api/products")).send({
                name: "To be deleted",
                description: "This will be removed",
                price: 100,
                category: "Clothing",
                imageUrl: ""
         });

        const productId = product.body._id;

        const res = await request(app).delete(`/api/products/${productId}`);

        expect(res.statusCode).toBe(200);
        expect(res.body.message).toBe("The product has been eliminated succesfully");
        });
    });