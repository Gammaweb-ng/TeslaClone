import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cars:["Benz - Coupe", "Benz - Astra", "Benz - AMG", "C - Series"]
}

const carSlice  = createSlice({
    name:"car",
    initialState,
    reducers:{}
})

export const selectCars = state => state.car.cars

export default carSlice.reducer;