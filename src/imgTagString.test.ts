import { imgTagString } from "./imgTagString";

it('outputs a string', () => {
    expect(imgTagString()).toMatchSnapshot()
})

it('outputs a string with props', () => {
    expect(imgTagString({
        class: 'test-class',
        src: 'image.png',
        srcSet: 'image.png',
        sizes: 'the-sizes',
        title: 'title',
        alt: 'a description',
        width: 20,
        height: 10,
    })).toMatchSnapshot()
})