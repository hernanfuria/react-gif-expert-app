import { fireEvent, render, screen } from "@testing-library/react"
import App from "../src/counterApp"

describe('pruebas en counterApp', () => { 
    const init_value =  100;
    const app = <App title="holis holis" value={init_value} />

    test('debe hacer match con el snapshot', () => {
        render(app);
        expect(screen).toMatchSnapshot();
    })

    test('debe verificar valor inicial de 100', () => {
        render(app);
        expect(screen.getByRole('heading', {level: 2}).innerHTML).toBe(String(init_value));
    })

    test('debe incrementar con el boton +1', () => {
        render(app);
        // expect(screen.getByRole('heading', {level: 2}).innerHTML).toBe(String(init_value));
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('101')).toBeTruthy();
    })

    test('debe decrementar con el boton -1', () => {
        render(app);
        // expect(screen.getByRole('heading', {level: 2}).innerHTML).toBe(String(init_value));
        fireEvent.click(screen.getByText('-1'));
        expect(screen.getByText('99')).toBeTruthy();
    })

    test('debe resetear con el boton reset', () => {
        render(app);
        // expect(screen.getByRole('heading', {level: 2}).innerHTML).toBe(String(init_value));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('+1'));
        fireEvent.click(screen.getByText('reset'));

        // screen.debug();

        // expect(screen.getByText(init_value)).toBeTruthy();

        fireEvent.click(screen.getByRole('button', {name:"btn-reset"}))
        expect(screen.getByRole('heading', {name: 'counter-value'}).innerHTML).toBe(String(init_value))
    })
 })