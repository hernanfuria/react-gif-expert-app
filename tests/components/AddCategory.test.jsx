import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components"

describe('Pruebas en <AddCategory />', () => { 
    const component = <AddCategory handleAddCategory={() => {}} />;

    test('Debe cambiar el valor de la caja de texto', () => { 
        const value = 'some value';

        render(component);
        const input = screen.getByRole('textbox');

        fireEvent.input(input, {target: {value: value}})  // fireEvent.input(elem_DOM, evento) 

        expect(input.value).toBe(value);
        
        // screen.debug();
     })

    test('debe llamar handleAddCategory si el input tiene un valor', () => { 
        const value = 'some value';
        const handleAddCategory = jest.fn();

        render(<AddCategory handleAddCategory={handleAddCategory} />);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, {target: {value: value}});  // llena el input con el valor de value
        expect(input.value).toBe(value);  // el input deberia contener ahora el valor de value
        fireEvent.submit(form);  // ahora se hace el submit y por ende el input deberia quedar vacio
        expect(input.value).toBe('');  // se checkea que el input este vacio
        expect(handleAddCategory).toHaveBeenCalled();
        expect(handleAddCategory).toHaveBeenCalledTimes(1);
        expect(handleAddCategory).toHaveBeenCalledWith(value);


    })

    test('no debe llamar handleAddCategory si el input esta vacio', () => { 
        const handleAddCategory = jest.fn();

        render(<AddCategory handleAddCategory={handleAddCategory} />);

        const form = screen.getByRole('form');

        fireEvent.submit(form);  // ahora se hace el submit y por ende el input deberia quedar vacio

        expect(handleAddCategory).not.toHaveBeenCalled();
    })
 }) 