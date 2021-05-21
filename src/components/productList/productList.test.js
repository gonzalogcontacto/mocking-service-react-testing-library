import { render, screen, waitFor } from "@testing-library/react";
import { productService } from "../../services/products.service";
import ProductList from "./productList";

jest.mock('../../services/products.service')

describe("Testing with mock", () => {
    test("mocking service", async () => {

        productService.getProducts.mockResolvedValue([{
            image: "my-course",
            title: "My course title",
            price: "img.jpg"
          },{
            image: "my-course-2",
            title: "ADRIAN PRODUCT",
            price: "img.jpg"
          }]);

        await waitFor(() => render(<ProductList />));
    
        screen.getByText('My course title')
        screen.getByText('ADRIAN PRODUCT')

    })
})