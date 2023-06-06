import { fireEvent, render, screen } from "@testing-library/react"
import { GifExpertApp } from "../src/GifExpertApp"

describe('Pruebas en <GifExpertApp />', () => { 
    test('Deberia tener un form', () => { 
        render(<GifExpertApp />);
        // screen.debug();
        expect(screen.getByRole('form')).toBeTruthy();
     })

     
     test('Deberia tener un GifGrid luego de un submit de Goku y Pokemon', () => {             
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        for (const category of ['Goku', 'Pokemon']) {
            fireEvent.input(input, {target: {value: category}});
            expect(input.value).toBe(category);
            fireEvent.submit(form);
            expect(screen.getByText(category)).toBeTruthy();
        }

        // screen.debug();
     })

    test('No deberia llamar handleAddCategory si el input esta vacio', () => { 
        render(<GifExpertApp />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        

        fireEvent.submit(form);
        //expect(screen.getByText('Cargando...')).toBeFalsy();
        // screen.debug();
    })
 })