import React from 'react'
import { ImgTag } from './ImgTag'
import renderer from 'react-test-renderer'

it('renders', () => {
    const tree = renderer.create(<ImgTag />).toJSON()
    expect(tree).toMatchSnapshot()
})

it('renders with src', () => {
    const tree = renderer.create(<ImgTag src="test.png" />).toJSON()
    expect(tree).toMatchSnapshot()
})
