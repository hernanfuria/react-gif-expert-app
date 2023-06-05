import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('Pruebas en <GifGrid />', () => { 
    test('Debe mostrar el loading inicialmente', () => { 
        useFetchGifs.mockReturnValue({
            images: [], 
            isloading: true,
        });

        const category = 'Goku'
        render(<GifGrid category={category} />)
        // screen.debug();
        expect(screen.getByText('Cargando...')).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
     })

     test('Debe mostrar items cuando se cargan las imagenes usando useFetchGifs', () => { 
        const gifs = [
            {
                id: 'asd',
                title: 'tit1',
                url: 'https://lololo',
            },
            {
                id: 'fgh',
                title: 'tit2',
                url: 'https://jejeje',
            },
        ]
        
        useFetchGifs.mockReturnValue({
            images: gifs, 
            isloading: false,
        });

        const category = 'Goku'
        render(<GifGrid category={category} />)

        // screen.debug();
        expect(screen.getAllByRole('img').length).toBe(2);


      })
 })
