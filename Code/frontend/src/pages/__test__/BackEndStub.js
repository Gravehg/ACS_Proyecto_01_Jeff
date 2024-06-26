/* eslint-disable */
import axios from "axios";

export const axiosStubGetWithErrorEqualToFalse = () => {
  const mockCartData = {
    products: [
      { _id: 1, name: "Product 1", price: 10, units: 5 },
      { _id: 2, name: "Product 2", price: 20, units: 2 },
    ],
  };
  jest.spyOn(axios, "get").mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        result: {
          products: mockCartData.products,
        },
        error: false,
      },
    })
  );
};

export const axiosStubGetWithErrorEqualToTrue = () => {
  const mockCartData = {
    products: [
      { _id: 1, name: "Product 1", price: 10, units: 5 },
      { _id: 2, name: "Product 2", price: 20, units: 2 },
    ],
  };
  jest.spyOn(axios, "get").mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        result: {
          products: mockCartData.products,
        },
        error: true,
      },
    })
  );
};

export const axiosStubGetIncreaseProductErrorEqualToFalse = () => {
  axios.mockResolvedValueOnce({
    data: { error: false, message: "Producto agregado al carrito" },
  });
};

export const axiosStubGetIncreaseProductErrorEqualToTrue = () => {
  axios.mockResolvedValueOnce({
    data: { error: true, message: "Ha ocurrido un error" },
  });
};

export const axiosStubGetDecreaseProductErrorEqualToFalse = () => {
  axios.mockResolvedValueOnce({
    data: { error: false, message: "Producto eliminado del carrito" },
  });
};

export const axiosStubGetDecreaseProductErrorEqualToTrue = () => {
  axios.mockResolvedValueOnce({
    data: { error: true, message: "Ha ocurrido un error" },
  });
};

export const axiosStubSendFormErrorEqualToFalse = () => {
  axios.mockResolvedValueOnce({
    data: { error: false, message: "Pedido generado exitosamente" },
  });
};

export const axiosStubSendFormErrorEqualToTrue = () => {
  axios.mockResolvedValueOnce({
    data: {
      error: true,
      message: "Ocurrió un error inesperado, intente de nuevo",
    },
  });
};

/*export const testingSomethingFunney = () => {
  const mockCartData = {
    products: [
      { _id: 1, name: "Product 1", price: 10, units: 5 },
      { _id: 2, name: "Product 2", price: 20, units: 2 },
    ],
  };
  axios.get.mockResolvedValueOnce({
    data: {
      result: {
        products: mockCartData.products,
      },
      error: false,
    },
  });
};*/
