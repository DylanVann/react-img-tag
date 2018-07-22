import React from 'react'
import renderer from 'react-test-renderer'
import { ImgTag } from './ImgTag'

it('renders', () => {
    const tree = renderer.create(<ImgTag />).toJSON()
    expect(tree).toMatchSnapshot()
})

it('renders with src', () => {
    const tree = renderer.create(<ImgTag src="test.png" />).toJSON()
    expect(tree).toMatchSnapshot()
})
