import { renderHook, waitFor } from "@testing-library/react";
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => { 
    test('Debe retornar el estado inicial', () => {
        const category = 'Goku';
        const {result} = renderHook(() => useFetchGifs(category));
        const {images, isloading} = result.current;
        console.log(result);

        expect(images.length).toBe(0);
        expect(isloading).toBeTruthy;
     })

     test('Debe retornar un arreglo de imagenes y el isLoading en false', async() => {
        const category = 'Goku';
        const {result} = renderHook(() => useFetchGifs(category));

        await waitFor(
            () => expect(result.current.images.length).toBeGreaterThan(0)
        );

        const {images, isloading} = result.current;

        expect(images.length).toBeGreaterThan(0);
        expect(isloading).toBeFalsy;
     })
 })