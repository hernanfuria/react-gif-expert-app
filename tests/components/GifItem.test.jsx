import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components"

describe('pruebas en GifItem', () => { 
    const id = 1
    const title = "test title" 
    const url = "https://media0.giphy.com/media/Yg12tqyJwylsk/giphy.gif?cid=4d294dfd4ewh1wkyi28ltzalazrn2woimqppy4d4l2ateyde&ep=v1_gifs_search&rid=giphy.gif&ct=g"

    const component = <GifItem id={id} title={title} url={url} /> 
    
    test('Debe matchear el snapshot', () => { 
        const {container} = render(component);
        expect(container).toMatchSnapshot();
     })

     test('Debe usar SRC y ALT correctos', () => { 
        render(component);
        // expect(screen.getByRole('img').src).toBe(url)
        const {src, alt} = screen.getByRole('img')
        expect(src).toBe(url)
        expect(alt).toBe(title)
      })

      test('Debe mostrar el titulo en el componente', () => { 
        render(component);
        expect(screen.getByText(title)).toBeTruthy();
       })
 })
